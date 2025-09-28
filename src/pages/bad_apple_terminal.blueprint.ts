import { Blueprint } from "../architect";

// Interactive section with TypeScript code that gets type-checked
interface InteractiveSectionProps {
	title: string;
	description: string;
	htmlContent: string;
	script?: () => void; // TypeScript function that gets compiled
	scriptFile?: string; // Path to external TypeScript file
	dependencies?: string[]; // List of imports this section needs
	isolateCss?: boolean; // Whether this section should ignore global CSS toggle
}

export const InteractiveSection = (props: InteractiveSectionProps): string => {
	let scriptContent = "";

	if (props.script !== undefined) {
		// Convert the function to string and extract the body
		scriptContent = props.script
			.toString()
			.replace(/^[^{]*{\s*/, "")
			.replace(/\s*}[^}]*$/, "");
	} else if (props.scriptFile !== undefined && props.scriptFile !== "") {
		// In a real implementation, you'd read and compile the external file
		// For now, just reference it
		scriptContent = `// External script: ${props.scriptFile}`;
	}

	return `<section ${props.isolateCss === true ? 'class="css-isolated"' : ""}>
<h3>${props.title}</h3>
<p>${props.description}</p>
<div class="interactive-content">
${props.htmlContent}
</div>
${
	scriptContent
		? `<script>
(function() {
${scriptContent}
})();
</script>`
		: ""
}
</section>`;
};

export const ProjectPage: Blueprint = (): string => {
	return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title></title>
  <link rel="stylesheet" href="./static/clean.css" />
  <style>
    .css-isolated {
      /* This section will not be affected by global CSS toggle */
    }
  </style>
</head>

<body>
  <header>
    <h1>Bad Apple in Terminal</h1>
    <nav>
      <a href="https://github.com/MistOfJudgement/MistOfJudgement.github.io">GitHub Repository</a>
      <a href="./index.html">Back to Projects</a>
    </nav>
  </header>
  
  <main>
    <h2>Problem & Purpose</h2>
    <p>I was bored in my highschool homeroom and I wanted to mess with the web terminal I had access to for a webdev class. I just wanted to render the Bad Apple animation in a terminal, but this project enables any video or image to be displayed.</p>
    
    <h2>Technical</h2>

    <p>Certain terminals can output in color with escape characters. <a href="https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit">link</a>. For images, the task is fairly trivial where all I need to do get the raw image data using the library JIMP, scale the image, then map each pixel to a character with an escape code.
    <img /> Image of of the terminal

    
    <p>For bad apple specifically, I had actually done similar work for the BadAppleCeleste project. That one contains a C++ program I wrote to convert a video into a file with RunLengthEncoding for White and Black.
    I reused the RLE file generated from there to reconstruct images that can be rendered to the terminal.
    
    <!--- Cool interactive thing where I demonstrate run length encoding---->


    <p>For videos, I have a precompute step which saves the text with the escape characters into a file which can be read from later and printed at an appropriate framerate.
  </main>
  
  <footer>
    <button onclick="toggleCSS()">Toggle CSS</button>
  </footer>
  
  <script>
    function disableCSSStyle() {
      const stylesheets = Array.from(document.styleSheets);
      stylesheets.forEach(sheet => {
        if (sheet.href && sheet.href.includes('clean.css')) {
          sheet.disabled = true;
        }
      });
    }
    function enableCSSStyle() {
      const stylesheets = Array.from(document.styleSheets);
      stylesheets.forEach(sheet => {
        if (sheet.href && sheet.href.includes('clean.css')) {
          sheet.disabled = false;
        }
      });
    }
    function toggleCSS() {
      const mainStylesheet = Array.from(document.styleSheets).find(sheet => 
        sheet.href && sheet.href.includes('clean.css')
      );
      if (mainStylesheet && mainStylesheet.disabled) {
        enableCSSStyle();
      } else {
        disableCSSStyle();
      }
    }
  </script>
</body>

</html>`;
};
