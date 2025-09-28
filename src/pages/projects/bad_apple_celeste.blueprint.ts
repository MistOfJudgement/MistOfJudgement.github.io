import { Blueprint, PageConfig } from "../../architect";

interface BadAppleCelesteData {
	githubUrl: string;
	youtubeUrl: string;
}

const BadAppleCelesteContent: Blueprint<BadAppleCelesteData> = () => {
	return `
    <h2>Problem & Purpose</h2>
    <p>I wanted to make a Celeste Mod and I love the Bad Apple recreations.</p>
    
    <h2>Technical Implementation</h2>
    <p>I made an external C++ program that turns videos into a run-length encoded
     format that my Celeste mod can read. The mod then renders the frames in sequence
     to recreate the video. Rendering is done by hiding or showing a small berry part
     sprite</p>
    <h2>Features</h2>
    <ul>
        <li>Video frame extraction into Run-length encoding</li>
        <li>OpenCV integration for video processing</li>
        <li>Run-length encoding for efficient data storage</li>
        <li>Modded Celeste to render video</li>
    </ul>

    `;
};

const badAppleCelesteData: BadAppleCelesteData = {
	githubUrl: "https://github.com/MistOfJudgement/BadAppleCeleste",
	youtubeUrl: "https://www.youtube.com/watch?v=fIX6B69wnek",
};

// Export complete page configuration
export const BadAppleCelestePage: PageConfig<BadAppleCelesteData> = {
	filename: "bad_apple_celeste.html",
	title: "Bad Apple in Celeste",
	contentBuilder: BadAppleCelesteContent,
	contentData: badAppleCelesteData,
	navLabel: "Bad Apple Celeste",
	navOrder: "c-badapple-celeste",
	navCategory: "Projects",
	projectInfo: {
		title: "Bad Apple in Celeste",
		descriptions: ["C++", "Game Engine Modding", "Video Processing"],
		links: [
			{
				href: "https://github.com/MistOfJudgement/BadAppleCeleste",
				label: "GitHub Repo",
			},
		],
		images: [
			{
				url: "https://www.youtube.com/watch?v=fIX6B69wnek",
				title: "Bad Apple in Celeste Video",
			},
		],
		projectPageHref: "./bad_apple_celeste.html",
	},
};
