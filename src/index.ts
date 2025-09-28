import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { format } from "./formatter";
import { PageLayout } from "./pages/page_layout.blueprint";
import { AboutPage } from "./pages/about.blueprint";
import { ContactPage } from "./pages/contact.blueprint";
import { IndexPage, displayOnlyProjects } from "./pages/index.blueprint";
import { WebsitePage } from "./pages/projects/website.blueprint";
import { BadApplePage } from "./pages/projects/bad_apple_terminal.blueprint";
import { BadAppleCelestePage } from "./pages/projects/bad_apple_celeste.blueprint";
import { PageConfig } from "./architect";
import type { ProjectProps } from "./components/Project";
import type { NavItem } from "./components/Navigation";
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

// Old functions no longer needed - everything uses buildStandardPage now

// Helper function to sort string orders
function sortOrder(a: string | undefined, b: string | undefined): number {
	const aVal = a ?? "zzz"; // Default to end of alphabet for undefined
	const bVal = b ?? "zzz";
	return aVal.localeCompare(bVal);
}

// Generate navigation from page list with category support
function generateNavigation(pages: PageConfig<unknown>[]): NavItem[] {
	const filteredPages = pages.filter((page) => page.showInNav !== false);

	// Group pages by category
	const categories: Record<string, PageConfig<unknown>[]> = {};
	const topLevel: PageConfig<unknown>[] = [];

	filteredPages.forEach((page) => {
		if (page.navCategory) {
			if (!(page.navCategory in categories)) {
				categories[page.navCategory] = [];
			}
			categories[page.navCategory].push(page);
		} else {
			topLevel.push(page);
		}
	});

	// Create navigation items
	const navItems: NavItem[] = [];

	// Add top-level pages
	topLevel.forEach((page) => {
		navItems.push({
			href: page.filename,
			label: page.navLabel ?? page.title,
			order: page.navOrder ?? "zzz",
		});
	});

	// Add categories with children
	Object.entries(categories).forEach(([categoryName, categoryPages]) => {
		const categoryOrder = "m"; // Put Projects in middle alphabetically
		navItems.push({
			label: categoryName,
			order: categoryOrder,
			children: categoryPages
				.map((page) => ({
					href: page.filename,
					label: page.navLabel ?? page.title,
					order: page.navOrder ?? "zzz",
				}))
				.sort((a, b) => sortOrder(a.order, b.order)),
		});
	});

	return navItems.sort((a, b) => sortOrder(a.order, b.order));
}

// Extract project info from all pages
function getProjectsFromPages(pages: PageConfig<unknown>[]): ProjectProps[] {
	return pages
		.filter(
			(page): page is PageConfig<unknown> & { projectInfo: ProjectProps } =>
				Boolean(page.projectInfo),
		)
		.map((page) => page.projectInfo);
}

// Build any page that follows the PageConfig pattern
function buildStandardPage(
	pageConfig: PageConfig<unknown>,
	allPages: PageConfig<unknown>[],
): void {
	const navigation = generateNavigation(allPages);

	// If this is the index page, inject project data
	let contentData: unknown = pageConfig.contentData;
	if (pageConfig.filename === "index.html") {
		const pageProjects = getProjectsFromPages(allPages);
		const allProjects = [...pageProjects, ...displayOnlyProjects];
		contentData = {
			...(pageConfig.contentData as object),
			projects: allProjects,
		};
	}

	const pageContent = pageConfig.contentBuilder(contentData as never);
	const fullPage = PageLayout({
		title: pageConfig.title,
		content: pageContent,
		navigation: navigation,
	});
	writePage(pageConfig.filename, fullPage);
}
setupBuildDirectory();
writePage("test.html", testPage);

// Collect all pages - using type assertion for mixed page types
const allPages = [
	IndexPage,
	AboutPage,
	ContactPage,
	WebsitePage,
	BadApplePage,
	BadAppleCelestePage,
] as PageConfig<unknown>[];

// NEW WAY: All pages use the same clean pattern with dynamic navigation!
allPages.forEach((page) => {
	buildStandardPage(page, allPages);
});

// Adding more pages is just one line each:
// buildStandardPage(ProjectsPage);
// buildStandardPage(BlogPage);

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
