const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(__dirname, 'public', 'lrmourao-logo-icon.svg');
const publicDir = path.join(__dirname, 'public');

async function generateIcons() {
  console.log('Generating icons with sharp...');

  // icon.png (512x512)
  console.log('Generating icon.png (512x512)...');
  await sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon.png'));

  // apple-touch-icon.png (180x180)
  console.log('Generating apple-touch-icon.png (180x180)...');
  await sharp(svgPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // favicon.png (32x32) - useful for fallback or manual conversion
  console.log('Generating favicon.png (32x32)...');
  await sharp(svgPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  console.log('Icons generated successfully.');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
