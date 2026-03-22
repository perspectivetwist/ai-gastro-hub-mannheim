import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const ORIGINAL = 'https://ai-shift-drift-psi.vercel.app';
const CLONE = 'https://ai-gastro-hub.vercel.app';
const OUTPUT_DIR = '/Users/maxgeissinger/asd-analyse/ai-gastro-hub/screenshots';

mkdirSync(OUTPUT_DIR, { recursive: true });

async function captureFullPage(page, url, prefix) {
  console.log(`\nNavigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

  // Wait for animations/images to load
  await page.waitForTimeout(3000);

  // Full page screenshot
  await page.screenshot({
    path: `${OUTPUT_DIR}/${prefix}-fullpage.png`,
    fullPage: true
  });
  console.log(`Saved ${prefix}-fullpage.png`);

  // Viewport-sized screenshots at different scroll positions
  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const viewportHeight = 900;
  console.log(`Total page height: ${totalHeight}px`);

  let section = 0;
  for (let y = 0; y < totalHeight; y += viewportHeight) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `${OUTPUT_DIR}/${prefix}-section-${section}.png`
    });
    console.log(`Saved ${prefix}-section-${section}.png (scroll: ${y}px)`);
    section++;
  }

  return totalHeight;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });

  const page1 = await context.newPage();
  const height1 = await captureFullPage(page1, ORIGINAL, 'original');

  const page2 = await context.newPage();
  const height2 = await captureFullPage(page2, CLONE, 'clone');

  console.log(`\nOriginal height: ${height1}px`);
  console.log(`Clone height: ${height2}px`);
  console.log(`Height difference: ${Math.abs(height1 - height2)}px`);

  await browser.close();
  console.log('\nDone! Screenshots saved to:', OUTPUT_DIR);
}

main().catch(console.error);
