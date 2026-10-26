import puppeteer from 'puppeteer-core'
const S = process.argv[2]
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--disable-gpu'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/#contact', { waitUntil: 'networkidle0' })
await new Promise((r) => setTimeout(r, 1200))
await page.screenshot({ path: `${S}/contact-direct.png` })
const info = await page.evaluate(() => {
  const h = document.querySelector('#contact h2')
  const cs = getComputedStyle(h)
  const r = h.getBoundingClientRect()
  return { opacity: cs.opacity, transform: cs.transform, top: r.top, height: r.height, sectionTop: document.getElementById('contact').getBoundingClientRect().top }
})
console.log(info)
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' })
await page.evaluate(() => document.getElementById('contact').scrollIntoView({ behavior: 'instant', block: 'start' }))
await new Promise((r) => setTimeout(r, 1200))
const info2 = await page.evaluate(() => getComputedStyle(document.querySelector('#contact h2')).opacity)
console.log('after scrollIntoView opacity:', info2)
await page.screenshot({ path: `${S}/contact-scroll.png` })
await browser.close()
