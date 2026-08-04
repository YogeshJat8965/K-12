const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
  'src/assets/university/2.png',
  'src/assets/educator circle/celebration/4.png',
  'src/assets/educator circle/celebration/2.png',
  'src/assets/educator circle/celebration/7.png',
  'src/assets/educator circle/celebration/3.png',
  'src/assets/educator circle/celebration/1.png',
  'src/assets/educator circle/celebration/6.png',
  'src/assets/educator circle/celebration/5.png',
  'src/assets/CCMM/5 stages/5.png',
  'src/assets/CCMM/5 stages/2.png',
  'src/assets/CCMM/5 stages/3.png',
  'src/assets/CCMM/5 stages/4.png',
  'src/assets/CCMM/5 stages/1.png',
  'src/assets/university/AI ecosystem/1.png',
  'src/assets/university/AI ecosystem/3.png',
  'src/assets/university/AI ecosystem/4.png',
  'src/assets/university/AI ecosystem/7.png',
  'src/assets/university/AI ecosystem/6.png',
  'src/assets/university/AI ecosystem/5.png',
  'src/assets/educator circle/image.png',
];

(async () => {
  let totalSaved = 0;
  for (const file of files) {
    const inputPath = path.join(__dirname, file);
    const ext = path.extname(file);
    const outputPath = inputPath.replace(ext, '.webp');
    
    try {
      const origSize = fs.statSync(inputPath).size;

      // Check if webp already exists
      if (fs.existsSync(outputPath)) {
        // Just delete the original
        fs.unlinkSync(inputPath);
        console.log(`🗑️  ${file} deleted (webp already exists, saved ${(origSize/1024/1024).toFixed(1)} MB)`);
        totalSaved += origSize;
        continue;
      }

      const info = await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      const saved = origSize - info.size;
      totalSaved += saved;
      fs.unlinkSync(inputPath); // Delete original
      console.log(`✅ ${file} → .webp (${(origSize/1024).toFixed(0)}KB → ${(info.size/1024).toFixed(0)}KB, saved ${(saved/1024/1024).toFixed(1)} MB)`);
    } catch (err) {
      console.error(`❌ ${file}: ${err.message}`);
    }
  }
  console.log(`\n🎉 Total saved: ${(totalSaved/1024/1024).toFixed(1)} MB`);
})();
