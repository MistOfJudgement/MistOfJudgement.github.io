import { Blueprint } from "../architect";
import { Navigation, type NavItem } from "../components/Navigation";

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
    ${
			props.navigation
				? Navigation({ items: props.navigation })
				: `<nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>`
		}
    <main>
        ${props.content}
    </main>

    <footer>
<div id="footer">
    <button onclick="toggleCSS()">Toggle CSS</button>
  </div>
  <script>
    function disableCSSStyle() {
      document.styleSheets[0].disabled = true;
    }
    function enableCSSStyle() {
      document.styleSheets[0].disabled = false;
    }
    function toggleCSS() {
      if (document.styleSheets[0].disabled) {
        enableCSSStyle();
      } else {
        disableCSSStyle();
      }
    }
  </script>
    </footer>

</body>

</html>`;
};
