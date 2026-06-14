import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const frontendRoot = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const srcAssetsDir = join(frontendRoot, "src", "assets");
const publicImagesDir = join(frontendRoot, "public", "images");
const imageExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

function syncFolder(folderName) {
  const srcDir = join(srcAssetsDir, folderName);
  const destDir = join(publicImagesDir, folderName);

  if (!existsSync(srcDir)) return 0;

  mkdirSync(destDir, { recursive: true });

  let copied = 0;
  for (const file of readdirSync(srcDir)) {
    if (!imageExt.has(extname(file).toLowerCase())) continue;

    const srcPath = join(srcDir, file);
    const destPath = join(destDir, file);
    const srcStat = statSync(srcPath);

    if (!existsSync(destPath) || statSync(destPath).mtimeMs < srcStat.mtimeMs) {
      cpSync(srcPath, destPath);
      copied += 1;
      console.log(`sync-public-images: ${folderName}/${file}`);
    }
  }

  return copied;
}

if (!existsSync(srcAssetsDir)) {
  console.log("sync-public-images: no src/assets directory, skipping");
  process.exit(0);
}

let totalCopied = 0;
for (const folderName of readdirSync(srcAssetsDir, { withFileTypes: true })) {
  if (!folderName.isDirectory()) continue;
  totalCopied += syncFolder(folderName.name);
}

console.log(
  totalCopied === 0
    ? "sync-public-images: public/images is up to date"
    : `sync-public-images: copied ${totalCopied} file(s)`
);
