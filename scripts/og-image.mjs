// Image Open Graph 1200x630, typographique, avec la photo de profil.
import sharp from 'sharp'
const photo = await sharp('public/images/profil.webp').resize(470, 630, { fit: 'cover', position: 'top' }).toBuffer()
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#F7F5F0"/>
  <text x="72" y="140" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="4" fill="#77776F">NGEVA JEAN MICKAEL · TOAMASINA</text>
  <text x="72" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="#242620">Je donne vie aux idées,</text>
  <text x="72" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="#242620">du monde industriel</text>
  <text x="72" y="370" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-style="italic" fill="#285747">au numérique.</text>
  <text x="72" y="440" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#77776F">Maintenance industrielle · Électricité · Électronique · IoT · Logiciel</text>
  <text x="72" y="530" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="#77776F">BTS Maintenance Industrielle, FTS Toamasina · Solutions connectées sur mesure</text>
  <rect x="72" y="470" width="48" height="3" fill="#C7775A"/>
</svg>`
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#F7F5F0' } })
  .composite([{ input: photo, left: 730, top: 0 }, { input: Buffer.from(svg), left: 0, top: 0 }])
  .jpeg({ quality: 85 }).toFile('public/images/og.jpg')
console.log('og.jpg ok')
