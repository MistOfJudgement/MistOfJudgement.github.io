
const indexData = {
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
export function buildPage(): string {
    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>${indexData.name}</title>
  <link rel="stylesheet" href="./static/clean.css">
</head>

<body>
  <header>
    <h1>${indexData.name}</h1>
    <div id="links">
      ${indexData.links.map(link => `<a href="${link.url}">${link.name}</a>`).join("\n\t\t\t")}
    </div>
    <p>${indexData.description}</p>
  </header>
  <section id="projects" class="full-width">
    <h2>${indexData.projectsHeader}</h2>
    <ul class="cards">
        ${indexData.projects.map(project => `
      <li>
        <h4>${project.title}</h4>
        <ul>
          ${project.descriptions.map(desc => `<li>${desc}</li>`).join("\n\t\t\t\t\t")}
          </ul>
        </li>
      `).join("\n\t\t\t")
        }
    </ul>
  </section>
  <div id="footer">
    <button onclick="toggleCSS()">${indexData.toggleCSSLabel}</button>
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