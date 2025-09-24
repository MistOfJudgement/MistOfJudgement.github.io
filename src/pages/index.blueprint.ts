import { Blueprint, fromList } from "../architect"
import { Link, LinkProps } from "../components/link.blueprint"
import { Project, ProjectProps } from "../components/project.blueprint"

export const indexData: IndexProps = {
    name: "Tushar Rangaswamy",
    description: "I am a Computer Scientist currently studying at George Mason University. No concentration, no specialty, learning as much as I can.",
    links: [
        { label: "GitHub", href: "https://github.com/MistOfJudgement" },
        { label: "Youtube", href: "https://www.youtube.com/@tusharrangaswamy5910" },
        { label: "Email", href: "mailto:tusharrangaswamy@gmai.com" },
        { label: "Itch.io", href: "https://mistofjudgement.itch.io/" }
    ],
    projects: [
        {
            title: "Personal Website",
            descriptions: [
                "HTML, CSS, JavaScript",
                "Hosted on GitHub Pages",
            ],
            iframes: [
              {src: "./index.html", title: "This page itself"}
            ]
      },
      {
            title: "Bad Apple in Terminal",
            descriptions: [
                "Node.js",
            ],
        links: [
          {
            label: "Github Repo",
            href: "https://github.com/MistOfJudgement/BadAppleTerminal"
          }
            ]
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

export const Index : Blueprint<IndexProps> = (props) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>${props.name}</title>
  <link rel="stylesheet" href="./static/clean.css" />
</head>

<body>
  <header>
    <h1>${props.name}</h1>
    <div id="links">
      ${fromList(props.links, Link)}
    </div>
    <p>${props.description}</p>
  </header>
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
</body>

</html>`
}