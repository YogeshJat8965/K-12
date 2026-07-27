/**
 * Update all image imports in TSX/TS/JS files from .png/.jpg/.jpeg to .webp
 * Only updates imports where a corresponding .webp file exists
 */

import { readdir, readFile, writeFile, access } from 'fs/promises';
import { join, extname } from 'path';

const SRC_DIR = 'src';
let updatedFiles = 0;
let updatedImports = 0;

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      files.push(...await getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.tsx', '.ts', '.jsx', '.js'].includes(ext)) return;

  const content = await readFile(filePath, 'utf-8');
  let newContent = content;
  let fileChanged = false;

  // Match import statements with .png, .jpg, .jpeg, .PNG, .JPG extensions
  // Pattern: import ... from '....(png|jpg|jpeg|PNG|JPG)'
  const importRegex = /from\s+['"]([^'"]*\.(png|jpg|jpeg|PNG|JPG))['"]/g;
  
  let match;
  const replacements = [];
  
  while ((match = importRegex.exec(content)) !== null) {
    const originalPath = match[1];
    const webpPath = originalPath.replace(/\.(png|jpg|jpeg|PNG|JPG)$/, '.webp');
    
    // Resolve the actual file path to check if webp exists
    const resolvedWebpPath = join(filePath, '..', webpPath);
    
    if (await fileExists(resolvedWebpPath)) {
      replacements.push({ from: originalPath, to: webpPath });
    }
  }

  // Also match src={} and url() references with image extensions
  const srcRegex = /(['"])([^'"]*\.(png|jpg|jpeg|PNG|JPG))(['"])/g;
  
  for (const rep of replacements) {
    newContent = newContent.split(rep.from).join(rep.to);
    updatedImports++;
    fileChanged = true;
  }

  if (fileChanged) {
    await writeFile(filePath, newContent, 'utf-8');
    updatedFiles++;
    console.log(`✅ ${filePath} (${replacements.length} imports updated)`);
    for (const rep of replacements) {
      console.log(`   ${rep.from} → ${rep.to}`);
    }
  }
}

async function main() {
  console.log('🔄 Updating image imports to WebP...\n');
  
  const files = await getAllFiles(SRC_DIR);
  const codeFiles = files.filter(f => /\.(tsx?|jsx?|js)$/.test(f));
  
  console.log(`Found ${codeFiles.length} code files to scan.\n`);
  
  for (const file of codeFiles) {
    await processFile(file);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 SUMMARY`);
  console.log(`Files updated: ${updatedFiles}`);
  console.log(`Imports changed: ${updatedImports}`);
  console.log('='.repeat(50));
}

main();
