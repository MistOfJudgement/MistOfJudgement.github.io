import { Blueprint, PageConfig } from "../../architect";
import { escapeHTML } from "../../utils/htmlEscape";

const WebDevProject: Blueprint = () => {
	const sampleHTML = `<ktane-bomb>
  <div class="module-container">
    <wires-module class="module">
      <!-- SVG paths for wires that can be clicked to cut -->
      <path class="wire w1" d="..." style="stroke: black;"></path>
      <path class="wire w2" d="..." style="stroke: blue;"></path>
    </wires-module>
    
    <timer-module>
      <p class="timer-number">2:30</p>
      <p class="strikes"></p>
    </timer-module>
    
    <keypad-module class="module">
      <!-- Grid of clickable symbol buttons -->
      <svg class="keypad-button smileyface">...</svg>
      <svg class="keypad-button dragon">...</svg>
      <svg class="keypad-button paragraph">...</svg>
    </keypad-module>
  </div>
</ktane-bomb>`;

	return `
	<a href="./bombs.html">Play the Game</a>
    <h2>Problem & Purpose</h2>
	<p>I was already very familiar with web development by the time I took this
	class in my senior year of high school. One of the projects was to use SVG
	graphics in some way, with the example being a map. Around the same time
	I was playing a lot of Keep Talking and Nobody Explodes and ended up trying
	to memorize some of the modules. This project was combination of new features
	to make an interesting game.</p>

	<h2>Technical Decisions</h2>
	<p>I needed to use SVG for the project requirement but I also read about
	<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a>
	and thought it would be cool to just make custom HTML elements for each module.
	It would be like making my own little framework for constructing the game.</p>

	<h3>Web Components</h3>
	<p>Each module is a custom HTML element which can manage its own state and
	layout. The main bomb element manages the timer and strikes, and each module
	is responsible for its own logic. The modules communicate with the bomb by
	dispatching custom events.</p>

	<p>Here's a simplified example of the HTML structure showing custom elements:</p>
	
	<pre><code>${escapeHTML(sampleHTML)}</code></pre>

	<p>Each module is a self-contained web component that manages its own state and communicates with the main bomb through custom events. This makes the code very modular and easy to extend with new module types.</p>
`;
};

// Export complete page configuration
export const WebDevProjectConfig: PageConfig = {
	filename: "web_dev_project.html",
	title: "Web Dev Project",
	contentBuilder: WebDevProject,
	contentData: {},
	navLabel: "Web Dev Project",
	navOrder: "b-2022-01-web-dev-project",
	navCategory: "Projects",
	projectInfo: {
		title: "Web Dev Project",
		descriptions: [
			"Partial recreation of Keep Talking and Nobody Explodes",
			"HTML, CSS, JavaScript, Custom HTML Elements, SVG",
		],
		links: [
			{ href: "./bombs.html", label: "Play here" },
			{
				href: "https://github.com/MistOfJudgement/MistOfJudgement.github.io/blob/main/bombs.html",
				label: "GitHub Repo",
			},
		],
		image: { src: "static/img/bomb_preview.png", alt: "Web Dev Project Screenshot" },
		projectPageHref: "./web_dev_project.html"
	},
};
