import { Blueprint } from "../architect"
import { Link, LinkProps } from "../components/link.blueprint"
import { Project, ProjectProps } from "../components/project.blueprint"

export const indexData = {
    name: "Tushar Rangaswamy",
    description: "I am a Computer Scientist currently studying at George Mason University. No concentration, no specialty, learning as much as I can.",
    links: [
        { name: "GitHub", url: "https://github.com/MistOfJudgement" },
        { name: "Youtube", url: "https://www.youtube.com/@tusharrangaswamy5910" },
        { name: "Email", url: "mailto:tusharrangaswamy@gmai.com" },
        { name: "Itch.io", url: "https://mistofjudgement.itch.io/" }
    ],
    projects: [
        {
            title: "Personal Website",
            descriptions: [
                "HTML, CSS, JavaScript",
                "Hosted on GitHub Pages",
            ],
        },
    ],
    projectsHeader: "Projects",
    toggleCSSLabel: "Toggle CSS",
}

interface IndexProps {
  name: string,
  description: string,
  projectsHeader: string,
  toggleCSSLabel: string,
  projects: ProjectProps[],
  links: LinkProps[]
} 

export const Index : Blueprint = (props: IndexProps) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>${props.name}</title>
  <link rel="stylesheet" href="./static/clean.css">
</head>

<body>
  <header>
    <h1>${props.name}</h1>
    <div id="links">
      ${props.links.map(linkProps => Link(linkProps)).join("\n\t\t\t")}
    </div>
    <p>${props.description}</p>
  </header>
  <section id="projects" class="full-width">
    <h2>${props.projectsHeader}</h2>
    <ul class="cards">
        ${props.projects.map(project => Project(project)).join("\n\t\t\t")
        }
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
</body>

</html>`
}