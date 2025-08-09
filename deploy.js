import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy out files to docs folder for GitHub Pages
const outPath = path.join(__dirname, 'out');
const docsPath = path.join(__dirname, 'docs');

// Remove existing docs directory
if (fs.existsSync(docsPath)) {
  fs.rmSync(docsPath, { recursive: true });
}

// Create docs directory
fs.mkdirSync(docsPath);

// Copy all files from out to docs
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyDir(outPath, docsPath);
console.log('Next.js static files copied to docs folder for GitHub Pages deployment');
