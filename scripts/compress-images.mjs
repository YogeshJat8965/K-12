/**
 * PNG/JPG → WebP Compression Script
 * Converts all PNG and JPG images in src/assets to WebP format
 * Preserves directory structure and original files
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, relative } from 'path';

const ASSETS_DIR = 'src/assets';
const QUALITY = 82; // WebP quality (0-100). 82 is a good balance of size vs quality

let totalOriginal = 0;
let totalCompressed = 0;
let fileCount = 0;
let skippedCount = 0;

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return;
  }

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  try {
    const originalStat = await stat(filePath);
    const originalSize = originalStat.size;

    // Skip very small files (< 10KB) - not worth converting
    if (originalSize < 10240) {
      skippedCount++;
      return;
    }

    await sharp(filePath)
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(webpPath);

    const newStat = await stat(webpPath);
    const newSize = newStat.size;

    totalOriginal += originalSize;
    totalCompressed += newSize;
    fileCount++;

    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    const relPath = relative(ASSETS_DIR, filePath);
    console.log(`✅ ${relPath}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(newSize / 1024 / 1024).toFixed(1)}MB (-${savings}%)`);
  } catch (err) {
    console.error(`❌ Failed: ${filePath} - ${err.message}`);
  }
}

async function main() {
  console.log('🚀 Starting PNG/JPG → WebP conversion...\n');
  console.log(`Quality: ${QUALITY}`);
  console.log(`Source: ${ASSETS_DIR}\n`);

  const files = await getAllFiles(ASSETS_DIR);
  const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  console.log(`Found ${imageFiles.length} image files to process.\n`);

  // Process in batches of 5 to avoid memory issues
  for (let i = 0; i < imageFiles.length; i += 5) {
    const batch = imageFiles.slice(i, i + 5);
    await Promise.all(batch.map(convertFile));
  }

  console.log('\n' + '='.repeat(60));
  console.log(`📊 SUMMARY`);
  console.log(`Files converted: ${fileCount}`);
  console.log(`Files skipped (< 10KB): ${skippedCount}`);
  console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Compressed total: ${(totalCompressed / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Savings: ${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
}

main();
