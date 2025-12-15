#!/usr/bin/env node

/**
 * Build-time Image Optimization Script
 * 
 * Optimizes images in public/assets for static export.
 * Generates WebP versions and optimizes existing images.
 * 
 * Usage: node scripts/optimize-images.js [--skip-webp] [--quality=80]
 * 
 * Requirements: Node.js 20.3.0+ (or use --skip-optimization flag)
 */

const fs = require('fs');
const path = require('path');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);
const minorVersion = parseInt(nodeVersion.slice(1).split('.')[1], 10);

let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.warn('⚠️  Warning: sharp module not available. Image optimization will be skipped.');
  console.warn('   To enable optimization, upgrade Node.js to 20.3.0+ or install sharp manually.');
  console.warn('   The script will continue but only report files (no optimization).\n');
}

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');
const OPTIMIZED_DIR = path.join(process.cwd(), 'public', 'assets', '.optimized');
const MAX_WIDTH = 1920; // Max width for large images
const MAX_HEIGHT = 1920; // Max height for large images
const QUALITY = parseInt(process.env.IMAGE_QUALITY || '85', 10);
const SKIP_WEBP = process.argv.includes('--skip-webp');
const DRY_RUN = process.argv.includes('--dry-run');

// Supported image formats
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const SKIP_DIRS = ['.optimized', 'original', 'logos']; // Directories to skip

// Stats
let stats = {
  processed: 0,
  optimized: 0,
  webpCreated: 0,
  skipped: 0,
  errors: 0,
  sizeSaved: 0,
};

/**
 * Check if file should be processed
 */
function shouldProcess(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return false;
  
  // Skip already optimized files
  if (filePath.includes('.optimized')) return false;
  if (path.basename(filePath).startsWith('optimized-')) return false;
  
  return true;
}

/**
 * Check if directory should be processed
 */
function shouldProcessDir(dirName) {
  return !SKIP_DIRS.includes(dirName);
}

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath, outputPath, options = {}) {
  if (!sharp) {
    throw new Error('sharp module not available. Please upgrade Node.js to 20.3.0+ or install sharp manually.');
  }
  
  const { format, width, height, quality = QUALITY } = options;
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate dimensions
    let targetWidth = metadata.width;
    let targetHeight = metadata.height;
    
    if (width || height || metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      const maxW = width || MAX_WIDTH;
      const maxH = height || MAX_HEIGHT;
      
      if (metadata.width > maxW || metadata.height > maxH) {
        const ratio = Math.min(maxW / metadata.width, maxH / metadata.height);
        targetWidth = Math.round(metadata.width * ratio);
        targetHeight = Math.round(metadata.height * ratio);
      }
    }
    
    let pipeline = image.resize(targetWidth, targetHeight, {
      fit: 'inside',
      withoutEnlargement: true,
    });
    
    // Apply format-specific optimizations
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality, effort: 6 });
    } else if (format === 'jpeg' || format === 'jpg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality: Math.min(quality, 100), compressionLevel: 9 });
    }
    
    await pipeline.toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    stats.errors++;
    return false;
  }
}

/**
 * Process a single file
 */
async function processFile(filePath, relativePath) {
  if (!shouldProcess(filePath)) {
    stats.skipped++;
    return;
  }
  
  stats.processed++;
  const originalSize = getFileSize(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  
  try {
    // Optimize original format
    const optimizedPath = path.join(dir, `${baseName}${ext}`);
    const tempPath = path.join(dir, `.temp-${baseName}${ext}`);
    
    if (!DRY_RUN) {
      const format = ext === '.png' ? 'png' : 'jpeg';
      const optimized = await optimizeImage(filePath, tempPath, { format });
      
      if (optimized) {
        const optimizedSize = getFileSize(tempPath);
        
        // Only replace if smaller
        if (optimizedSize < originalSize) {
          fs.renameSync(tempPath, optimizedPath);
          stats.optimized++;
          stats.sizeSaved += (originalSize - optimizedSize);
          console.log(`✓ Optimized: ${relativePath} (${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB)`);
        } else {
          fs.unlinkSync(tempPath);
          console.log(`⊘ Skipped (already optimal): ${relativePath}`);
        }
      }
    } else {
      console.log(`[DRY RUN] Would optimize: ${relativePath}`);
    }
    
    // Generate WebP version
    if (!SKIP_WEBP && !DRY_RUN) {
      const webpPath = path.join(dir, `${baseName}.webp`);
      const webpExists = fs.existsSync(webpPath);
      
      // Only create if doesn't exist or original is newer
      if (!webpExists) {
        const webpCreated = await optimizeImage(filePath, webpPath, { format: 'webp' });
        if (webpCreated) {
          stats.webpCreated++;
          console.log(`  → Created WebP: ${path.basename(webpPath)}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing ${relativePath}:`, error.message);
    stats.errors++;
  }
}

/**
 * Recursively process directory
 */
async function processDirectory(dirPath, relativePath = '') {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.join(relativePath, entry.name);
    
    if (entry.isDirectory()) {
      if (shouldProcessDir(entry.name)) {
        await processDirectory(fullPath, relPath);
      } else {
        console.log(`⊘ Skipping directory: ${relPath}`);
      }
    } else if (entry.isFile()) {
      await processFile(fullPath, relPath);
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image optimization...\n');
  console.log(`Configuration:`);
  console.log(`  - Assets directory: ${ASSETS_DIR}`);
  console.log(`  - Quality: ${QUALITY}`);
  console.log(`  - Max dimensions: ${MAX_WIDTH}x${MAX_HEIGHT}`);
  console.log(`  - Generate WebP: ${!SKIP_WEBP}`);
  console.log(`  - Dry run: ${DRY_RUN}\n`);
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ Assets directory not found: ${ASSETS_DIR}`);
    process.exit(1);
  }
  
  const startTime = Date.now();
  
  try {
    await processDirectory(ASSETS_DIR);
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log('\n📊 Optimization Summary:');
    console.log(`  - Processed: ${stats.processed} files`);
    console.log(`  - Optimized: ${stats.optimized} files`);
    console.log(`  - WebP created: ${stats.webpCreated} files`);
    console.log(`  - Skipped: ${stats.skipped} files`);
    console.log(`  - Errors: ${stats.errors} files`);
    console.log(`  - Size saved: ${(stats.sizeSaved / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  - Duration: ${duration}s\n`);
    
    if (stats.errors > 0) {
      console.warn(`⚠️  ${stats.errors} errors occurred. Check logs above.`);
      process.exit(1);
    }
    
    console.log('✅ Image optimization complete!\n');
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { optimizeImage, processFile, processDirectory };

