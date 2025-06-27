import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { Index, indexData } from './pages/index.blueprint';
const outputDir = 'build';

const testPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test Page</title>
</head>
`
function setupBuildDirectory() {
    // Check if the output directory exists, if not, create it
    if (!existsSync(outputDir)) {
        console.log(`Creating directory: ${outputDir}`);
        mkdirSync(outputDir, { recursive: true });
    }
}

function writePage(filepath: string, content: string) {
    const fullPath = `${outputDir}/${filepath}`;
    writeFileSync(fullPath, content, 'utf8');
    console.log(`Page written to: ${fullPath}`);
}

function writeIndex() {
    const index = Index(indexData)
    writePage('index.html', index);
}
setupBuildDirectory();
writePage('test.html', testPage);
writeIndex();

function copyStatic() {
    // clear static folder if exists
    const staticDir = 'static';
    const destDir = `${outputDir}/static`;
    if (existsSync(destDir)) {
        rmSync(destDir, { recursive: true, force: true });
    }
    mkdirSync(destDir, {recursive: true})
    cpSync(staticDir, destDir, { recursive: true });
}

copyStatic()