import { Blueprint } from "../architect";

interface NavItem {
    href?: string;
    label: string;
    order?: string;
    children?: NavItem[];
}

// Helper function to sort string orders
function sortOrder(a: string | undefined, b: string | undefined): number {
	const aVal = a ?? "zzz"; // Default to end of alphabet for undefined
	const bVal = b ?? "zzz";
	return aVal.localeCompare(bVal);
}

interface PageLayoutProps {
    title: string;
    content: string;
    navigation?: NavItem[]; // Optional navigation items
}

export const PageLayout: Blueprint<PageLayoutProps> = (props) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${props.title}</title>
  <link rel="stylesheet" href="./static/clean.css" />
</head>

<body>
    <header>
        <h1>${props.title}</h1>
    </header>
    <nav>
        <ul>
            ${props.navigation ? 
                props.navigation
                    .sort((a, b) => sortOrder(a.order, b.order))
                    .map(item => {
                        if (item.children && item.children.length > 0) {
                            // Nested category
                            return `<li>${item.label}
                <ul>
                    ${item.children.map(child => 
                        `<li><a href="${child.href ?? '#'}">${child.label}</a></li>`
                    ).join('\n                    ')}
                </ul>
            </li>`;
                        } else {
                            // Regular link
                            return `<li><a href="${item.href ?? '#'}">${item.label}</a></li>`;
                        }
                    })
                    .join('\n            ') 
                : 
                `<li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>`
            }
        </ul>
    </nav>
    <main>
        ${props.content}
    </main>

    <footer>

    </footer>

</body>

</html>`;
};