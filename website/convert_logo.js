const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'lrmourao-logo.svg');
const outputPath = path.join(__dirname, 'public', 'lrmourao-logo.png');

// The SVG viewBox is "15 170 830 270" (width 830, height 270)
// We'll render at 2x density (144 dpi) to get a high quality PNG (approx 1660x540)
sharp(inputPath, { density: 144 })
  .png({
    compressionLevel: 9,
    adaptiveFiltering: true,
    force: true
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Conversion successful:', info);
  })
  .catch(err => {
    console.error('Error converting file:', err);
    process.exit(1);
  });




