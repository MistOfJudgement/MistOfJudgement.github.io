import { Blueprint, PageConfig } from "../../architect";



const BadAppleContent: Blueprint = () => {
	return `
    <h2>Problem & Purpose</h2>
    <p>I was bored in my highschool homeroom and I wanted to mess with the web terminal I had access to for a webdev class. I just wanted to render the Bad Apple animation in a terminal, but this project enables any video or image to be displayed.</p>
    
    <h2>Technical</h2>
    <p>Certain terminals can output in color with
	<a href="https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit">escape characters.</a>.
	For images, the task is fairly trivial where all I need to do get the raw image data using the
	library JIMP, scale the image, then map each pixel to a character with an escape code.</p>
    <img src="img/bad_apple_terminal.png" alt="Terminal rendering"/>

    <p>For bad apple specifically, I had actually done similar work for the BadAppleCeleste project. That one contains a C++ program I wrote to convert a video into a file with RunLengthEncoding for White and Black. I reused the RLE file generated from there to reconstruct images that can be rendered to the terminal.</p>
    
    <!-- Cool interactive thing where I demonstrate run length encoding -->
    
    <p>For videos, I have a precompute step which saves the text with the escape characters into a file which can be read from later and printed at an appropriate framerate.</p>
`;
};

// Export complete page configuration
export const BadApplePage: PageConfig = {
	filename: "bad_apple_terminal.html",
	title: "Bad Apple in Terminal",
	contentBuilder: BadAppleContent,
	contentData: {},
	navLabel: "Bad Apple Terminal",
	navOrder: "b-2021-09-badapple-terminal",
	navCategory: "Projects",
	projectInfo: {
		title: "Bad Apple in Terminal",
		descriptions: ["Node.js", "Terminal graphics", "Video-to-ASCII conversion"],
		links: [
			{
				href: "https://github.com/MistOfJudgement/BadAppleTerminal",
				label: "GitHub Repo",
			},
		],
		image: { src: "static/img/bad_apple_terminal.png", alt: "Terminal rendering" },
		projectPageHref: "./bad_apple_terminal.html",

	},
};

// Keep old export for backward compatibility
export const ProjectPage = BadAppleContent;
