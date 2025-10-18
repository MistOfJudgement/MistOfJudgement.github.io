import { Blueprint, PageConfig } from "../../architect";
import { Link, LinkProps } from "../../components/Link";
interface TimeToLiveProps {
	itch: LinkProps;
	github: LinkProps;
}
const TimeToLive: Blueprint<TimeToLiveProps> = (props) => {
	return `

    <p>${Link(props.itch)}</p>

    <p>${Link(props.github)}</p>

    <h2>Problem & Purpose</h2>
    <p>This whole project was made for the 2025 Fall Jamfest Game Jam hosted by GADIG, a student run game studio at George Mason.
    The theme here was "Mixed Signals" and I had 3 days to create a game. I ended up making a multiplayer game about secretly passing
    around a hidden packet. The true purpose of this project was to do something with AWS as the end of my free tier was coming up, although
    I still ended up getting charged for some reason.</p>

    <h2>Technical Details</h2>
    <p>I wanted this to be a project I could just share a link to, so I made it as a web app with React and express. 
    There is one main express route to the app file and an additional route for a debug page. I supplimented the main page
    with websocket connections using the Socket.io library. Most of the time was honestly spent creating the lobby system which
    is still really cool. I didn't spend too much time architecting the project so I couldn't segment the codebase as much as I wanted.
    I might try and create a more robust lobby library at a later point.
    
    The actual gameplay follows the same websocket system as the lobby. Each player recieves their own information based on their role and
    if they have the packet. I won't really go over the gameplay here but I try and explain a bit on the ${Link(props.itch)}.</p>

    <p>If you are interested in the actual code, please go checkout the ${Link(props.github)} as I think compared to some of my
    other gamejams, it feels a lot cleaner. 
`;
};
const data: TimeToLiveProps = {
	github: {
		href: "https://github.com/MistOfJudgement/time-to-live",
		label: "Github Repo",
	},
	itch: {
		href: "https://mistofjudgement.itch.io/time-to-live",
		label: "Itch.io Page",
	},
};
export const TimeToLivePage: PageConfig<TimeToLiveProps> = {
	filename: "timetolive.html",
	title: "Time to Live",
	navLabel: "Time to Live",
	navOrder: "b-2025-10-timetolive",
	navCategory: "Projects",
	contentBuilder: TimeToLive,
	contentData: data,
	projectInfo: {
		title: "Time to Live",
		descriptions: [
			"Hidden Hot Potato made in 3 days",
			"Typescript, React and Socket.io",
			"Hosted on AWS EC2",
		],
		projectPageHref: "./timetolive.html",
		links: [data.itch, data.github],
	},
	showInNav: false,
};
