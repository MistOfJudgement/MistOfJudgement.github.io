import type { Blueprint } from "../architect";
import { fromList } from "../architect";
import type { LinkProps } from "../components/Link";
import { Link } from "../components/Link";
import type { ProjectProps } from "../components/Project";
import { Project } from "../components/Project";

export const indexData: IndexProps = {
	name: "Tushar Rangaswamy",
	description:
		"I am a Computer Scientist currently studying at George Mason University. No concentration, no specialty, learning as much as I can.",
	links: [
		{ label: "GitHub", href: "https://github.com/MistOfJudgement" },
		{ label: "Youtube", href: "https://www.youtube.com/@tusharrangaswamy5910" },
		{ label: "Email", href: "mailto:tusharrangaswamy@gmail.com" },
		{ label: "Itch.io", href: "https://mistofjudgement.itch.io/" },
		{ label: "project page", href: "./website.html" },
	],
	projects: [], // Will be populated dynamically from PageConfig project pages
	projectsHeader: "Projects",
	toggleCSSLabel: "Toggle CSS",
};

interface IndexProps {
	name: string;
	description: string;
	projectsHeader: string;
	toggleCSSLabel: string;
	projects: ProjectProps[];
	links: LinkProps[];
}

// Convert to content-only blueprint
const IndexContent: Blueprint<IndexProps> = (props) => {
	return `
  <div id="links">
    ${fromList(props.links, Link)}
  </div>
  <p>${props.description}</p>
  <section id="projects" class="full-width">
    <h2>${props.projectsHeader}</h2>
    <ul class="cards">
        ${fromList(props.projects, Project)}
    </ul>
  </section>
  <div id="footer">
    <button onclick="toggleCSS()">${props.toggleCSSLabel}</button>
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
`;
};

// Export complete page configuration
export const IndexPage = {
	filename: "index.html",
	title: indexData.name,
	contentBuilder: IndexContent,
	contentData: indexData,
	navLabel: "Home",
	navOrder: "a"
};

// Keep the old export for backward compatibility during transition
export const Index = IndexContent;
