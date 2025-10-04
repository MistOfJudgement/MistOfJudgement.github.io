import type { Blueprint } from "../architect";
import { fromList } from "../architect";
import type { LinkProps } from "../components/Link";
import { Link } from "../components/Link";
import type { ProjectProps } from "../components/Project";
import { Project } from "../components/Project";

const indexData = {
	name: "Tushar Rangaswamy",
	description:
		"I am a Computer Scientist currently studying at George Mason University. No concentration, no specialty, learning as much as I can.",
	links: [
		{ href: "https://github.com/MistOfJudgement", label: "GitHub" },
		{ href: "https://www.youtube.com/@tusharrangaswamy5910", label: "Youtube" },
		{ href: "mailto:tusharrangaswamy@gmail.com", label: "Email" },
		{ href: "https://mistofjudgement.itch.io/", label: "Itch.io" },
	],
	projects: [],
	projectsHeader: "Projects",
};

// Additional projects that don't have dedicated pages
export const displayOnlyProjects: ProjectProps[] = [

	
	{
		title: "Android Development",
		descriptions: [
			"Partial recreation of specific modules from Keep Talking and Nobody Explodes",
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
		descriptions: ["Uses an Arduino Micro and piezoelectric sensors"],
		links: [
			{
				href: "https://github.com/evankale/ArduinoMidiDrums",
				label: "Code adapted from this repository",
			},
		],
		yt: {
			url: "https://www.youtube.com/watch?v=G3fzKPomjSg",
			title: "Arduino Midi Drum Video",
		},
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
		descriptions: ["Games I made, typically within a short timeframe"],
		links: [
			{ href: "https://mistofjudgement.itch.io/", label: "Itch.io Page" },
		],
	},
	{
		title: "Cirno's Perfect Math Class",
		descriptions: [
			"Me trying to work with my own game engine",
			"Typescript",
			"Used Sparen's tutorials as a reference for structures",
		],
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
		image: { src: "static/img/cirno_preview.png", alt: "Cirno's Perfect Math Class Screenshot" },
	},
	{
		title: "Projector board",
		descriptions: ["Using a projector like a whiteboard", "OpenCV, Python"],
		links: [
			{
				href: "https://github.com/MistOfJudgement/Projectorboard",
				label: "Github Repo",
			},
		],
		yt: {
			url: "https://www.youtube.com/watch?v=zuSD_I9mtzo",
			title: "Projector board Video",
		},
	},
	{
		title: "Dtx Download",
		descriptions: ["Automated Download tool for DTXMania files", "Typescript", "Electron"],
		links: [
			{
				href: "https://github.com/MistOfJudgement/dtxdownload",
				label: "Github Repo",
			},
		],
		image: {
			src: "https://github.com/MistOfJudgement/dtxdownload/blob/main/docs/images/dtx-main-interface-selected.png?raw=true",
			alt: "Dtx Download Screenshot",
		}
	},
	{
		title: "Playlist DL",
		descriptions: ["Download Youtube Playlists", "Android", "Java", "Kinda just a wrapper around yt-dlp"],
		links: [
			{
				href: "https://github.com/MistOfJudgement/PlaylistDL",
				label: "Github Repo",
			},
		],
	},
	{
		title: "Rabbit and Steel Randomizer",
		descriptions: [
			"Text Randomizer for the game Rabbit and Steel",
			"C#",
			"Game modding",
			"Decompilation",
		],
		links: [
			{
				href: "https://github.com/MistOfJudgement/RNSReloaded.Randomizer",
				label: "Github Repo",
			},
		],
		yt: {
			url: "https://www.youtube.com/watch?v=w5fo45Mt-mc",
			title: "Rabbit and Steel Randomizer Video",
		},
	},
	{
		title: "Custom Arcade Cabinet",
		descriptions: [
			"Building a custom arcade cabinet for Touhou games",
			"Woodworking",
			"Electronics",
		],
	},
	{
		title: "Travel Cluster",
		descriptions: [
			"Automated address scraper and location clustering",
			"Python",
			"Puppeteer",
			"Scikit-learn",
		],
		links: [
			{
				href: "https://github.com/MistOfJudgement/travel-cluster",
				label: "Github Repo",
			},
		],
	},
	{
		title: "Hide and Seek",
		descriptions: [
			"Partial recreation of Jetlag: the Game, hide and seek",
			"Made for a game jam",
			"Express, React"
		],
		links: [
			{
				href: "https://github.com/MistOfJudgement/hideandseek",
				label: "Github Repo",
			},
		],
	},
];

interface IndexProps {
	name: string;
	description: string;
	projectsHeader: string;
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
`;
};

// Export complete page configuration
export const IndexPage = {
	filename: "index.html",
	title: indexData.name,
	contentBuilder: IndexContent,
	contentData: indexData,
	navLabel: "Home",
	navOrder: "a",
};

// Keep the old export for backward compatibility during transition
export const Index = IndexContent;
