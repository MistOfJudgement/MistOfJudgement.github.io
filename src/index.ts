import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { Index, indexData } from "./pages/index.blueprint";
import { format } from "./formatter";
const outputDir = "build";

const testPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test Page</title>
</head>
`;
function setupBuildDirectory(): void {
	// Check if the output directory exists, if not, create it
	if (!existsSync(outputDir)) {
		console.log(`Creating directory: ${outputDir}`);
		mkdirSync(outputDir, { recursive: true });
	}
}

function writePage(filepath: string, content: string): void {
	const fullPath = `${outputDir}/${filepath}`;
	writeFileSync(fullPath, format(content), "utf8");
	console.log(`Page written to: ${fullPath}`);
}

function writeIndex(): void {
	const index = Index(indexData);
	writePage("index.html", index);
}
setupBuildDirectory();
writePage("test.html", testPage);
writeIndex();

function copyStatic(): void {
	// clear static folder if exists
	const staticDir = "src/static";
	const destDir = `${outputDir}/static`;
	if (existsSync(destDir)) {
		rmSync(destDir, { recursive: true, force: true });
	}
	mkdirSync(destDir, { recursive: true });
	cpSync(staticDir, destDir, { recursive: true });
}

copyStatic();
