const sharp = require('sharp');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets/for students');

const files = [
  { input: 'heroImg.png', output: 'heroImg.webp' },
  { input: 'steps.png', output: 'steps.webp' },
  { input: 'cards.png', output: 'cards.webp' },
];

(async () => {
  for (const file of files) {
    const inputPath = path.join(assetsDir, file.input);
    const outputPath = path.join(assetsDir, file.output);
    try {
      const info = await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`✅ ${file.input} → ${file.output}  (${(info.size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.error(`❌ ${file.input}: ${err.message}`);
    }
  }
  console.log('\nDone!');
})();
