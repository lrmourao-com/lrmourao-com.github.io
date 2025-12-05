const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'lrmourao-logo-opengraph.svg');
const outputPath = path.join(__dirname, 'public', 'lrmourao-logo-opengraph.png');

// We'll render at 2x density (144 dpi instead of 72 dpi) for better quality, 
// then resize down if necessary, though sharp handles SVG density scaling well.
// Default density is 72. 1200px at 72dpi. 
// If we want to supersample, we can load with higher density.

sharp(inputPath, { density: 144 }) // Double the density for 2x resolution
  .resize(1200, 630) // Resize back to target dimensions (high quality resampling)
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
