import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap, ScrollTrigger, reduceMotion } from '../lib/scroll'

/* Real-time 3D (Three.js).
   variant "city": a field of instanced columns that ripple like a growth chart; the pointer pushes them up,
                   scrolling orbits the camera.
   variant "orbs": floating knot / icosahedron / ring that follow the pointer. */
export default function Scene3D({ variant = 'city' }) {
  const wrap = useRef(null)

  useEffect(() => {
    const el = wrap.current
    let renderer
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }) }
    catch { el.classList.add('no-webgl'); return }
    const reduce = reduceMotion()
    const small = Math.min(window.innerWidth, window.innerHeight) < 700
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    const st = { mx: 0, my: 0, tx: 0, ty: 0, scroll: 0 }
    const ndc = new THREE.Vector2(9, 9)
    const disposables = []
    let update

    if (variant === 'city') {
      scene.fog = new THREE.Fog(0xf6f4f0, 20, 46)
      const N = small ? 20 : 28, GAP = 0.9
      const geo = new THREE.BoxGeometry(1, 1, 1); geo.translate(0, 0.5, 0)
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.02 })
      const mesh = new THREE.InstancedMesh(geo, mat, N * N)
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
      const shadows = !small
      if (shadows) {
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        mesh.castShadow = true; mesh.receiveShadow = true
      }
      const group = new THREE.Group(); group.add(mesh); scene.add(group)
      scene.add(new THREE.HemisphereLight(0xffffff, 0xd6d0c4, 1.15))
      const sun = new THREE.DirectionalLight(0xffffff, 2.4)
      sun.position.set(8, 14, 9)
      if (shadows) {
        sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024)
        Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 50 })
        sun.shadow.bias = -0.0008
      }
      scene.add(sun)
      disposables.push(geo, mat)

      const dummy = new THREE.Object3D()
      const c = new THREE.Color(), c1 = new THREE.Color('#e9e5dd'), c2 = new THREE.Color('#ff4d1c')
      const pos = []
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { pos.push([(i - (N - 1) / 2) * GAP, (j - (N - 1) / 2) * GAP]); mesh.setColorAt(i * N + j, c1) }
      mesh.instanceColor.setUsage(THREE.DynamicDrawUsage)

      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
      const ray = new THREE.Raycaster(), hit = new THREE.Vector3()
      const intro = { v: reduce ? 1 : 0 }
      if (!reduce) gsap.to(intro, { v: 1, duration: 2.8, ease: 'power3.out', delay: Math.max(0.2, 1.7 - performance.now() / 1000) })

      update = t => {
        if (reduce) t = 3
        ray.setFromCamera(ndc, camera)
        if (ray.ray.intersectPlane(plane, hit)) group.worldToLocal(hit); else hit.set(99, 0, 99)
        for (let k = 0; k < pos.length; k++) {
          const [x, z] = pos[k]
          const d = Math.hypot(x, z)
          const wave = Math.pow(0.5 + 0.5 * Math.sin(d * 0.6 - t * 0.9), 2) * 3.2 * Math.max(0, 1 - d / 15)
          const md = Math.hypot(x - hit.x, z - hit.z)
          const h = Math.max(0.03, (0.3 + wave + Math.exp(-md * md / 5) * 2.2) * intro.v)
          dummy.position.set(x, 0, z); dummy.scale.set(0.74, h, 0.74); dummy.updateMatrix()
          mesh.setMatrixAt(k, dummy.matrix)
          c.lerpColors(c1, c2, Math.pow(Math.min(1, h / 4.4), 1.7)); mesh.setColorAt(k, c)
        }
        mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true
        group.rotation.y = 0.55 + t * 0.035 + st.mx * 0.2 + st.scroll * 1.5
        camera.position.set(0, 10.5 - st.scroll * 3 + st.my * 0.8, 17 - st.scroll * 4)
        camera.lookAt(0, 1.2, 0)
      }
    } else {
      const mk = (g, color, rough, metal, flat) => { const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, flatShading: !!flat }); disposables.push(g, m); return new THREE.Mesh(g, m) }
      const knot = mk(new THREE.TorusKnotGeometry(1, 0.34, 160, 20), 0xff4d1c, 0.35, 0.25)
      const ico = mk(new THREE.IcosahedronGeometry(0.85, 1), 0xf2efe9, 0.4, 0.05, true)
      const ring = mk(new THREE.TorusGeometry(1.1, 0.12, 16, 80), 0xffffff, 0.3, 0.2)
      knot.position.set(-3.6, 0.4, 0); ico.position.set(3.7, -0.6, 0.5); ring.position.set(0.6, 1.5, -1.5)
      const group = new THREE.Group(); group.add(knot, ico, ring); scene.add(group)
      scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2))
      const d = new THREE.DirectionalLight(0xffffff, 2.2); d.position.set(4, 6, 6); scene.add(d)
      const pl = new THREE.PointLight(0xff4d1c, 40, 20); pl.position.set(-4, 2, 4); scene.add(pl)
      camera.position.set(0, 0, 9)
      update = t => {
        if (reduce) t = 2
        knot.rotation.set(t * 0.3, t * 0.4, 0); knot.position.y = 0.4 + Math.sin(t * 0.8) * 0.3
        ico.rotation.set(t * 0.25, t * 0.35, 0); ico.position.y = -0.6 + Math.cos(t * 0.7) * 0.3
        ring.rotation.set(t * 0.5, t * 0.2, 0)
        group.rotation.y = st.mx * 0.35; group.rotation.x = -st.my * 0.2 + st.scroll * 0.6
      }
    }

    const resize = () => {
      const w = el.clientWidth || 1, h = el.clientHeight || 1
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.fov = variant === 'city' ? (w / h < 1 ? 52 : 35) : 40
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize); ro.observe(el); resize()

    const onMove = e => {
      const r = el.getBoundingClientRect()
      st.tx = ((e.clientX - r.left) / r.width) * 2 - 1
      st.ty = ((e.clientY - r.top) / r.height) * 2 - 1
      ndc.set(st.tx, -st.ty)
    }
    window.addEventListener('pointermove', onMove)

    const render = time => {
      st.mx += (st.tx - st.mx) * 0.06; st.my += (st.ty - st.my) * 0.06
      update(time)
      renderer.render(scene, camera)
    }
    let running = false
    const start = () => { if (!running) { gsap.ticker.add(render); running = true } }
    const stop = () => { if (running) { gsap.ticker.remove(render); running = false } }
    const io = new IntersectionObserver(([en]) => (en.isIntersecting ? start() : stop()), { threshold: 0 })
    io.observe(el)
    const trig = ScrollTrigger.create({ trigger: el.parentElement, start: 'top top', end: 'bottom top', onUpdate: s => { st.scroll = s.progress } })

    return () => {
      stop(); io.disconnect(); ro.disconnect(); trig.kill()
      window.removeEventListener('pointermove', onMove)
      disposables.forEach(d => d.dispose())
      scene.traverse(o => { if (o.geometry) o.geometry.dispose() })
      renderer.dispose()
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement)
    }
  }, [variant])

  return <div className="scene3d" ref={wrap} aria-hidden="true" />
}
