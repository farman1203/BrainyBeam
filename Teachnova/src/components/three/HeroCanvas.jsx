import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

// WebGL support check
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

export default function HeroCanvas() {
  const mountRef = useRef(null)
  const [webglAvailable] = useState(isWebGLAvailable)

  useEffect(() => {
    if (!webglAvailable || !mountRef.current) return

    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    // ── Scene Setup ──────────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    mount.appendChild(renderer.domElement)

    // ── Lighting ─────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const greenLight = new THREE.PointLight(0x22c55e, 3.5, 12)
    greenLight.position.set(2, 3, 4)
    scene.add(greenLight)

    const mintLight = new THREE.PointLight(0x86efac, 2, 10)
    mintLight.position.set(-3, -2, 3)
    scene.add(mintLight)

    const whiteLight = new THREE.DirectionalLight(0xffffff, 1.2)
    whiteLight.position.set(1, 4, 5)
    scene.add(whiteLight)

    const rimLight = new THREE.PointLight(0x15803d, 2, 8)
    rimLight.position.set(-3, 2, -1)
    scene.add(rimLight)

    // ── Group ────────────────────────────────────────────────────
    const group = new THREE.Group()
    scene.add(group)

    // ── Main crystal sphere ──────────────────────────────────────
    const sphereGeo = new THREE.IcosahedronGeometry(1.2, 6)
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x15803d,
      metalness: 0.05,
      roughness: 0.05,
      transmission: 0.92,
      thickness: 2.5,
      ior: 1.52,
      reflectivity: 0.95,
      transparent: true,
      opacity: 0.88,
      envMapIntensity: 1.5,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    group.add(sphere)

    // ── Inner core ───────────────────────────────────────────────
    const coreGeo = new THREE.IcosahedronGeometry(0.72, 4)
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x86efac,
      metalness: 0.2,
      roughness: 0.0,
      transmission: 0.7,
      thickness: 1,
      transparent: true,
      opacity: 0.6,
      emissive: 0x22c55e,
      emissiveIntensity: 0.12,
    })
    const core = new THREE.Mesh(coreGeo, coreMat)
    group.add(core)

    // ── Orbiting rings ────────────────────────────────────────────
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0x22c55e,
      metalness: 0.4,
      roughness: 0.1,
      transparent: true,
      opacity: 0.45,
      emissive: 0x16a34a,
      emissiveIntensity: 0.15,
    })

    const ring1Geo = new THREE.TorusGeometry(1.8, 0.015, 16, 120)
    const ring1 = new THREE.Mesh(ring1Geo, ringMat)
    ring1.rotation.x = Math.PI / 3
    group.add(ring1)

    const ring2Geo = new THREE.TorusGeometry(2.1, 0.012, 16, 120)
    const ring2 = new THREE.Mesh(ring2Geo, ringMat.clone())
    ring2.rotation.x = Math.PI / 2.2
    ring2.rotation.z = Math.PI / 5
    group.add(ring2)

    const ring3Geo = new THREE.TorusGeometry(1.55, 0.01, 16, 100)
    const ring3 = new THREE.Mesh(ring3Geo, ringMat.clone())
    ring3.rotation.x = Math.PI / 1.6
    ring3.rotation.y = Math.PI / 4
    group.add(ring3)

    // ── Floating crystal shards ───────────────────────────────────
    const shards = []
    const shardMat = new THREE.MeshPhysicalMaterial({
      color: 0x86efac,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.8,
      transparent: true,
      opacity: 0.7,
    })

    for (let i = 0; i < 10; i++) {
      const theta = (i / 10) * Math.PI * 2
      const radius = 2.1 + Math.random() * 0.6
      const geo = new THREE.OctahedronGeometry(0.07 + Math.random() * 0.08, 0)
      const shard = new THREE.Mesh(geo, shardMat.clone())
      shard.position.set(
        Math.cos(theta) * radius,
        (Math.random() - 0.5) * 1.4,
        Math.sin(theta) * radius * 0.4
      )
      shard.userData.theta = theta
      shard.userData.radius = radius
      shard.userData.speed = 0.003 + Math.random() * 0.004
      shard.userData.yOffset = (Math.random() - 0.5) * 1.4
      group.add(shard)
      shards.push(shard)
    }

    // ── Pointer interaction ───────────────────────────────────────
    const pointer = { x: 0, y: 0 }
    const targetRot = { x: 0, y: 0 }

    const onMouseMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2
      pointer.y = -(e.clientY / window.innerHeight - 0.5) * 2
      targetRot.x = pointer.y * 0.3
      targetRot.y = pointer.x * 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Resize ────────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(mount)

    // ── Animation loop ────────────────────────────────────────────
    let animId
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Base rotation
      group.rotation.y += (targetRot.y - group.rotation.y) * 0.04
      group.rotation.x += (targetRot.x - group.rotation.x) * 0.04

      // Continuous slow rotation
      group.rotation.y += 0.0035

      // Gentle float
      group.position.y = Math.sin(t * 0.6) * 0.12

      // Inner core subtle counter-rotation
      core.rotation.y = -t * 0.5
      core.rotation.x = t * 0.3

      // Ring rotation
      ring1.rotation.z = t * 0.25
      ring2.rotation.z = -t * 0.18
      ring3.rotation.z = t * 0.32

      // Shard orbit
      shards.forEach((shard) => {
        shard.userData.theta += shard.userData.speed
        const { theta, radius, yOffset } = shard.userData
        shard.position.set(
          Math.cos(theta) * radius,
          yOffset + Math.sin(t * 0.8 + theta) * 0.12,
          Math.sin(theta) * radius * 0.4
        )
        shard.rotation.x = t * 1.2
        shard.rotation.y = t * 0.8
      })

      // Pulsing green light
      greenLight.intensity = 3.0 + Math.sin(t * 2) * 0.6

      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      resizeObserver.disconnect()

      // Dispose geometries and materials
      ;[sphere, core, ring1, ring2, ring3, ...shards].forEach((mesh) => {
        mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose())
        } else {
          mesh.material.dispose()
        }
      })

      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [webglAvailable])

  if (!webglAvailable) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
      }}>
        <div style={{
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(21,128,61,0.15), rgba(134,239,172,0.25))',
          border: '2px solid rgba(21,128,61,0.2)',
        }} />
      </div>
    )
  }

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
