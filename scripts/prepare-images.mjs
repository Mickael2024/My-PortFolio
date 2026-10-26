// Prépare la photo de profil (redimensionnement + WebP). Source : assets-src/profil.webp
import sharp from 'sharp'
await sharp('assets-src/profil.webp').rotate().resize({ width: 900, withoutEnlargement: true }).webp({ quality: 82 }).toFile('public/images/profil.webp')
console.log('profil.webp ok')
