import { Blueprint, PageConfig } from "../../architect";

const DTXDownloadPage: Blueprint<DTXDownloadPageProps> = (props) => {
    return `
    <p><a href=${props.githubHref}>Github Repo</a><p>

    <h2>Problem & Purpose</h2>
    <p>I play a couple of rhythm games, one of which is DrumMania, part of the
    Gitadora series. I ended up buying a used drum kit to be able to play the
    game at home using a fan-made clone called <a href="https://github.com/limyz/DTXmaniaNX">DTXMania</a> (I use the NX fork).
    Using a fan made clone means I also get access to fan-made charts. One such
    charter is <a href="https://approvedtx.blogspot.com">ApprovedDTX</a>, who makes
    a lot of chart I like. However, I wanted an easier way to search through
    the charts and download them. This project is a web scraper and downloader
    initially focused on automating the download of ApprovedDTX charts, but I want
    to keep it extensible to other charters in the future such as <a href="https://dtx.furukon.com/">Furukon</a>.</p>

    <h2>Technical Details</h2>
    <p>I had two phases for this project. The first phase was my initial, scrappy
    implementation to get the bare minimum working. The second phase was a rewrite
    to incorporate a UI and test out how useful Github Copilot is for a somewhat
    small refactor.</p>

    <h3>Phase 1: Initial Implementation</h3>
    <p>I used Node.js with the base http/https libraries to make requests, and
    Cheerio to parse the HTML and extract the chart links. Thanks to blogspot
    being so uniform, I could directly parse for the chart name, details, and
    download link. I could also reach the next page button to automatically
    paginate through the results. All the chart data was saved to a JSON file</p>

    <p>I did make a simple UI for phase 1 by creating an html file that opened
    the JSON file and rendered all the charts into a big table. I had a filter
    option which took what I literally wrote and used it in a filter function.</p>
    
    <code>const filter = new Function("song", "return " + document.getElementById("filter").value);</code>

    <p>For the most part, this worked fine. I could select the songs I wanted to
    download and click a button to get the chart ids for those songs, which I copied
    into the downloader</p>

    <p>For downloading each of the charts I picked out, the script navigated to
    the download link and tried to extract the actual download link from either
    the "download form" action or following some redirects. I then used the
    request library to download the file and the extract-zip library to unzip
    the chart into my songs folder.</p>
    
    <h3>Phase 2: Rewrite with UI</h3>
    <p>For phase 2, I found out I had Github Copilot access from my Student Developer Pack.
    Along with some AI tools I've been trying at work, I wanted to see how copilot
    stacks up. My motivation here was combining the scraper and downloader into one
    application. </p>

    <p>As far as I can tell, the functionality is the same as phase 1 with some
    generalizations. It uses Electron to work as a desktop application which is
    necessary for filesystem access. The scraping has a progress bar and the
    charts appear on the UI with infinite scroll. The filtering follows the
    normal filters one would expect and live updates as you update selectors.
    Downloading of course is done with a single click.</p>

    <h2>Conclusion</h2>

    <p>Overall, I found Copilot to be a good way to write a lot of mid code. It
    would need a lot of clarfication and validation to be useful for writing the
    more interesting features. I did end up using it with very little oversight
    which I can definitely recommend against. While I did want to rewrite from
    scratch, had I a vision of what the architecture should be so it would have
    probably been simpler to start with all my models and pseudocode. Last note
    on copilot is that it always tends to add code rather than replace. This
    meant doing a bit of cleanup after refactors</p>

    <p>For the application itself, super useful. I love using it. There are some
    things I do need to fix at time of writing regarding different download sources
    and better filtering but it feels really good to have all these charts a
    couple of clicks away, all in one place.</p>
    `;
}
interface DTXDownloadPageProps {
    githubHref: string;
}
export const DTXDownloadPageConfig: PageConfig<DTXDownloadPageProps> = {
    filename: "dtxdownload.html",
    title: "DTX Downloader",
    contentBuilder: DTXDownloadPage,
    contentData: {
        githubHref:"https://github.com/MistOfJudgement/dtxdownload"
    },
    showInNav: true,
    navLabel: "DTX Downloader",
	navOrder: "b-2025-07-dtx-downloader",
	navCategory: "Projects",
    projectInfo: {
		title: "Dtx Downloader",
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
        },
        projectPageHref: "./dtxdownload.html",
	},

};