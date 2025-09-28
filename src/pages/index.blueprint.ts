import type { Blueprint } from "../architect";
import { fromList } from "../architect";
import type { LinkProps } from "../components/link.blueprint";
import { Link } from "../components/link.blueprint";
import type { ProjectProps } from "../components/project.blueprint";
import { Project } from "../components/project.blueprint";

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
	projects: [
		{
			title: "Personal Website",
			descriptions: ["HTML, CSS, JavaScript", "Hosted on GitHub Pages"],
			links: [
				{
					href: "https://github.com/MistOfJudgement/MistOfJudgement.github.io",
					label: "Github Repo",
				},
			],
			iframes: [{ src: "./index.html", title: "Personal Website" }],
		},
		{
			title: "Bad Apple in Celeste",
			descriptions: ["Monogame, C#, OpenCV, C++"],
			links: [
				{
					href: "https://github.com/MistOfJudgement/BadAppleCeleste",
					label: "GitHub Repo",
				},
				{
					href: "https://www.youtube.com/watch?v=fIX6B69wnek",
					label: "Video Demo",
				},
			],
			images: [
				{
					src: "https://img.youtube.com/vi/fIX6B69wnek/hqdefault.jpg",
					alt: "Bad Apple in Celeste Video Thumbnail",
					href: "https://www.youtube.com/watch?v=fIX6B69wnek",
				},
			],
		},
		{
			title: "Bad Apple in a Terminal",
			descriptions: ["Node.js"],
			links: [
				{
					href: "https://github.com/MistOfJudgement/BadAppleTerminal",
					label: "GitHub Repo",
				},
			],
		},
		{
			title: "Analog Frequency Detector",
			descriptions: ["For a high school analog electronics class"],
			links: [
				{
					href: "https://www.youtube.com/watch?v=t7b9YMaFg1c",
					label: "Video Demo",
				},
			],
			images: [
				{
					src: "https://img.youtube.com/vi/t7b9YMaFg1c/hqdefault.jpg",
					alt: "Analog Frequency Detector Video Thumbnail",
					href: "https://www.youtube.com/watch?v=t7b9YMaFg1c",
				},
			],
		},
		{
			title: "Web Dev Project",
			descriptions: [
				"Partial recreation of Keep Talking and Nobody Explodes",
				"HTML, CSS, JavaScript, Custom HTML Elements, SVG",
			],
			links: [
				{
					href: "./bombs.html",
					label: "Play here",
				},
				{
					href: "https://github.com/MistOfJudgement/MistOfJudgement.github.io/blob/main/bombs.html",
					label: "GitHub Repo",
				},
			],
		},
		{
			title: "Android Development",
			descriptions: [
				"Partial recreation of specfic modules from Keep Talking and Nobody Explodes",
				"Android Studio, Java",
			],
			links: [
				{
					href: "https://github.com/MistOfJudgement/KTANE",
					label: "Github Repo",
				},
			],
		},
		{
			title: "High School Senior Research",
			descriptions: [
				"Teaching an AI to play like a person",
				"Python, Tensorflow",
			],
			links: [
				{
					href: "https://github.com/MistOfJudgement/SeniorResearch",
					label: "Github Repo",
				},
			],
		},
		{
			title: "Arduino Midi Drum",
			descriptions: [
				"Uses an Arduino Micro and piezoelectric sensors",
				"Code adapted from this other repository",
			],
			links: [
				{
					href: "https://github.com/evankale/ArduinoMidiDrums",
					label: "this other repository",
				},
				{
					href: "https://www.youtube.com/watch?v=G3fzKPomjSg",
					label: "Video Demo",
				},
			],
			images: [
				{
					src: "https://img.youtube.com/vi/G3fzKPomjSg/hqdefault.jpg",
					alt: "Arduino Midi Drum Video Thumbnail",
					href: "https://www.youtube.com/watch?v=G3fzKPomjSg",
				},
			],
		},
		{
			title: "Python Text to Speech",
			descriptions: ["For when I didn't want to speak in voice chat", "Python"],
			links: [
				{
					href: "https://github.com/MistOfJudgement/SpeechStuff",
					label: "Github Repo",
				},
			],
		},
		{
			title: "Video Games",
			descriptions: ["Games I made, typically within a short timefram"],
			links: [
				{
					href: "https://mistofjudgement.itch.io/",
					label: "Itch.io Page",
				},
			],
		},
		{
			title: "Cirno's Perfect Math Class",
			descriptions: ["Me trying to work with my own game engine", "Typescript"],
			links: [
				{
					href: "https://github.com/MistOfJudgement/touhouMath",
					label: "Github Repo",
				},
				{
					href: "https://mistofjudgement.github.io/touhouMath/",
					label: "Play Game",
				},
				{
					href: "https://sparen.github.io/ph3tutorials/ph3tutorials.html",
					label: "Sparen's tutorials",
				},
			],
		},
		{
			title: "Projector board",
			descriptions: ["Using a projector like a whiteboard", "OpenCV, Python"],
			links: [
				{
					href: "https://www.youtube.com/watch?v=zuSD_I9mtzo",
					label: "Video Demo",
				},
				{
					href: "https://github.com/MistOfJudgement/Projectorboard",
					label: "Github Repo",
				},
			],
			images: [
				{
					src: "https://img.youtube.com/vi/zuSD_I9mtzo/hqdefault.jpg",
					alt: "Projector board Video Thumbnail",
					href: "https://www.youtube.com/watch?v=zuSD_I9mtzo",
				},
			],
		},
	],
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

export const Index: Blueprint<IndexProps> = (props) => {
	return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

</html>`;
};
