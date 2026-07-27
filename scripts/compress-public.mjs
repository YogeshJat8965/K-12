import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC_DIR = 'public';

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await getAllFiles(fullPath));
    else files.push(fullPath);
  }
  return files;
}

async function main() {
  const files = await getAllFiles(PUBLIC_DIR);
  const pngs = files.filter(f => /\.png$/i.test(f));
  console.log(`Converting ${pngs.length} public PNG files...`);
  
  for (const file of pngs) {
    const webpPath = file.replace(/\.png$/i, '.webp');
    try {
      await sharp(file).webp({ quality: 82 }).toFile(webpPath);
      console.log(`✅ ${file}`);
    } catch (e) {
      console.error(`❌ ${file}: ${e.message}`);
    }
  }
  console.log('Done!');
}

main();
