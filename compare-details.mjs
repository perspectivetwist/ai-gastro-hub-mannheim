import { chromium } from 'playwright';

const ORIGINAL = 'https://ai-shift-drift-psi.vercel.app';
const CLONE = 'https://ai-gastro-hub.vercel.app';

async function extractPageDetails(page, url) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  return await page.evaluate(() => {
    const details = {};

    // Page height
    details.totalHeight = document.documentElement.scrollHeight;

    // Body background
    const bodyStyle = getComputedStyle(document.body);
    details.bodyBackground = bodyStyle.background;
    details.bodyBgColor = bodyStyle.backgroundColor;

    // Check for jellyfish canvas
    const canvas = document.querySelector('canvas');
    details.hasCanvas = !!canvas;
    if (canvas) {
      details.canvasPosition = getComputedStyle(canvas).position;
      details.canvasZIndex = getComputedStyle(canvas).zIndex;
      details.canvasWidth = canvas.width;
      details.canvasHeight = canvas.height;
    }

    // Check for jellyfish image
    const images = Array.from(document.querySelectorAll('img'));
    details.images = images.map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      displayed: img.offsetWidth > 0 && img.offsetHeight > 0
    }));

    // Count sections
    const sections = document.querySelectorAll('section');
    details.sectionCount = sections.length;
    details.sections = Array.from(sections).map((s, i) => {
      const style = getComputedStyle(s);
      return {
        index: i,
        id: s.id,
        className: s.className.substring(0, 100),
        height: s.offsetHeight,
        bgColor: style.backgroundColor,
        padding: style.padding,
        textContent: s.textContent.substring(0, 80).trim()
      };
    });

    // Check headings
    const headings = document.querySelectorAll('h1, h2, h3');
    details.headings = Array.from(headings).map(h => {
      const style = getComputedStyle(h);
      return {
        tag: h.tagName,
        text: h.textContent.trim().substring(0, 80),
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        color: style.color,
        lineHeight: style.lineHeight
      };
    });

    // Check buttons/CTAs
    const buttons = document.querySelectorAll('button, a[class*="btn"], a[class*="button"], [role="button"]');
    details.buttons = Array.from(buttons).map(b => {
      const style = getComputedStyle(b);
      return {
        text: b.textContent.trim().substring(0, 50),
        bgColor: style.backgroundColor,
        borderColor: style.borderColor,
        borderRadius: style.borderRadius,
        padding: style.padding,
        fontSize: style.fontSize
      };
    });

    // Check for stat cards (68%, 10:1, +721%, etc.)
    details.statCards = [];
    document.querySelectorAll('div').forEach(div => {
      const text = div.textContent.trim();
      if (text.match(/^(68%|70%|10:1|3x|\+721%)$/)) {
        const style = getComputedStyle(div);
        const parent = div.closest('[class*="card"], [class*="stat"], [class*="border"]') || div.parentElement;
        const parentStyle = parent ? getComputedStyle(parent) : {};
        details.statCards.push({
          text: text,
          color: style.color,
          fontSize: style.fontSize,
          parentBg: parentStyle.backgroundColor,
          parentBorder: parentStyle.border
        });
      }
    });

    // Check for gradient borders on cards
    details.gradientElements = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      if (style.borderImage && style.borderImage !== 'none') {
        details.gradientElements.push({
          tag: el.tagName,
          class: el.className.substring(0, 60),
          borderImage: style.borderImage
        });
      }
      if (style.backgroundImage && style.backgroundImage.includes('gradient') && el.offsetWidth > 0) {
        const text = el.textContent.trim().substring(0, 40);
        if (text.length < 40) {
          details.gradientElements.push({
            tag: el.tagName,
            text: text,
            backgroundImage: style.backgroundImage.substring(0, 100)
          });
        }
      }
    });

    // Check for FAQ section
    details.hasFAQ = document.body.textContent.includes('Häufige Fragen') || document.body.textContent.includes('FAQ');

    // Check for Vision/Zeitfenster section
    details.hasVisionSection = document.body.textContent.includes('Zeitfenster');

    // Check for Trust badges
    details.hasTrustBadges = document.body.textContent.includes('DSGVO') || document.body.textContent.includes('Made in Germany');

    // Footer
    const footer = document.querySelector('footer');
    details.hasFooter = !!footer;
    if (footer) {
      details.footerText = footer.textContent.trim().substring(0, 200);
    }

    // Left border accents on text blocks
    details.leftBorderElements = [];
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      if (style.borderLeftWidth && parseInt(style.borderLeftWidth) >= 2 &&
          style.borderLeftColor !== 'rgb(0, 0, 0)' &&
          style.borderLeftStyle !== 'none' &&
          el.offsetHeight > 0) {
        details.leftBorderElements.push({
          tag: el.tagName,
          text: el.textContent.trim().substring(0, 50),
          borderLeftColor: style.borderLeftColor,
          borderLeftWidth: style.borderLeftWidth
        });
      }
    });

    return details;
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  console.log('=== EXTRACTING ORIGINAL ===');
  const page1 = await context.newPage();
  const original = await extractPageDetails(page1, ORIGINAL);

  console.log('=== EXTRACTING CLONE ===');
  const page2 = await context.newPage();
  const clone = await extractPageDetails(page2, CLONE);

  console.log('\n========================================');
  console.log('         COMPARISON RESULTS');
  console.log('========================================\n');

  // Page height
  console.log(`PAGE HEIGHT: Original=${original.totalHeight}px | Clone=${clone.totalHeight}px | Diff=${original.totalHeight - clone.totalHeight}px`);

  // Canvas
  console.log(`\nJELLYFISH CANVAS: Original=${original.hasCanvas} | Clone=${clone.hasCanvas}`);
  if (original.hasCanvas) console.log(`  Original canvas: position=${original.canvasPosition}, z-index=${original.canvasZIndex}, size=${original.canvasWidth}x${original.canvasHeight}`);
  if (clone.hasCanvas) console.log(`  Clone canvas: position=${clone.canvasPosition}, z-index=${clone.canvasZIndex}, size=${clone.canvasWidth}x${clone.canvasHeight}`);

  // Images
  console.log(`\nIMAGES: Original=${original.images.length} | Clone=${clone.images.length}`);
  original.images.forEach(img => console.log(`  Original: ${img.src.substring(0, 80)} (displayed: ${img.displayed})`));
  clone.images.forEach(img => console.log(`  Clone: ${img.src.substring(0, 80)} (displayed: ${img.displayed})`));

  // Sections
  console.log(`\nSECTIONS: Original=${original.sectionCount} | Clone=${clone.sectionCount}`);
  console.log('\n--- Original sections ---');
  original.sections.forEach(s => console.log(`  [${s.index}] h=${s.height}px bg=${s.bgColor} id="${s.id}" text="${s.textContent}"`));
  console.log('\n--- Clone sections ---');
  clone.sections.forEach(s => console.log(`  [${s.index}] h=${s.height}px bg=${s.bgColor} id="${s.id}" text="${s.textContent}"`));

  // Headings comparison
  console.log(`\nHEADINGS: Original=${original.headings.length} | Clone=${clone.headings.length}`);
  const maxH = Math.max(original.headings.length, clone.headings.length);
  for (let i = 0; i < maxH; i++) {
    const o = original.headings[i];
    const c = clone.headings[i];
    if (o && c) {
      const sizeDiff = o.fontSize !== c.fontSize ? ` SIZE DIFF: ${o.fontSize} vs ${c.fontSize}` : '';
      const weightDiff = o.fontWeight !== c.fontWeight ? ` WEIGHT DIFF: ${o.fontWeight} vs ${c.fontWeight}` : '';
      console.log(`  [${i}] O: "${o.text}" (${o.fontSize})${sizeDiff}${weightDiff}`);
      console.log(`       C: "${c.text}" (${c.fontSize})`);
    } else if (o) {
      console.log(`  [${i}] O: "${o.text}" (${o.fontSize}) | C: MISSING`);
    } else if (c) {
      console.log(`  [${i}] O: MISSING | C: "${c.text}" (${c.fontSize})`);
    }
  }

  // FAQ
  console.log(`\nFAQ SECTION: Original=${original.hasFAQ} | Clone=${clone.hasFAQ}`);

  // Vision
  console.log(`VISION/ZEITFENSTER: Original=${original.hasVisionSection} | Clone=${clone.hasVisionSection}`);

  // Trust
  console.log(`TRUST BADGES: Original=${original.hasTrustBadges} | Clone=${clone.hasTrustBadges}`);

  // Left borders
  console.log(`\nLEFT BORDER ACCENTS: Original=${original.leftBorderElements.length} | Clone=${clone.leftBorderElements.length}`);

  // Buttons
  console.log(`\nBUTTONS/CTAs: Original=${original.buttons.length} | Clone=${clone.buttons.length}`);
  original.buttons.forEach(b => console.log(`  O: "${b.text}" border=${b.borderColor} bg=${b.bgColor}`));
  clone.buttons.forEach(b => console.log(`  C: "${b.text}" border=${b.borderColor} bg=${b.bgColor}`));

  // Footer
  console.log(`\nFOOTER: Original=${original.hasFooter} | Clone=${clone.hasFooter}`);
  if (original.hasFooter) console.log(`  O: ${original.footerText}`);
  if (clone.hasFooter) console.log(`  C: ${clone.footerText}`);

  // Body bg
  console.log(`\nBODY BG: Original="${original.bodyBgColor}" | Clone="${clone.bodyBgColor}"`);

  await browser.close();
}

main().catch(console.error);
