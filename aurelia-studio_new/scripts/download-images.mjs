// Usage: npm run images   → saves every photo from src/lib/images.js into public/images/<key>.webp
import { mkdir, writeFile } from 'node:fs/promises'
import { files, REMOTE } from '../src/lib/images.js'

await mkdir('public/images', { recursive: true })
let ok = 0
for (const [key, [file]] of Object.entries(files)) {
  try {
    const res = await fetch(REMOTE + file)
    if (!res.ok) throw new Error(res.status + ' ' + res.statusText)
    await writeFile(`public/images/${key}.webp`, Buffer.from(await res.arrayBuffer()))
    ok++
    console.log('✓', key)
  } catch (e) { console.log('✗', key, '-', e.message) }
}
console.log(`\nDone: ${ok}/${Object.keys(files).length} saved to public/images.\nNow set USE_LOCAL = true in src/lib/images.js`)
