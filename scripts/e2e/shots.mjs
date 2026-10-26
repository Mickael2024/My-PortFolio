import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
const S = process.argv[2]
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage()
async function shoot(name, width, height, mobile = false) {
  await page.setViewport({ width, height, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1 })
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
  // Déclenche toutes les animations au défilement
  const total = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < total; y += height * 0.8) {
    await page.evaluate((v) => window.scrollTo(0, v), y)
    await new Promise((r) => setTimeout(r, 120))
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await new Promise((r) => setTimeout(r, 800))
  const file = `${S}/${name}.png`
  await page.screenshot({ path: file, fullPage: true })
  const m = await sharp(file).metadata()
  const slice = mobile ? 2600 : 3200
  const n = Math.ceil(m.height / slice)
  for (let i = 0; i < n; i++) {
    await sharp(file).extract({ left: 0, top: i * slice, width: m.width, height: Math.min(slice, m.height - i * slice) }).resize({ width: mobile ? 390 : 900 }).png().toFile(`${S}/${name}-${i}.png`)
  }
  console.log(name, m.width, m.height, 'slices', n)
}
await shoot('d', 1440, 900)
// await shoot('m', 390, 844, true)
await browser.close()
