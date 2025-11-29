const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'lrmourao-logo-opengraph.svg');
const outputPath = path.join(__dirname, 'public', 'lrmourao-logo-opengraph.png');

sharp(inputPath)
  .png()
  .toFile(outputPath)
  .then(info => {
    console.log('Conversion successful:', info);
  })
  .catch(err => {
    console.error('Error converting file:', err);
    process.exit(1);
  });
