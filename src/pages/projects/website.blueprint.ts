import { Blueprint, PageConfig } from "../../architect";

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

const WebsiteContent: Blueprint = () => {
	return `
  <style>
    .css-isolated {
      /* This section will not be affected by global CSS toggle */
    }
  </style>

    <h2>Problem & Purpose</h2>
    <p>I started making this site as one of my "weekly projects" during my summer of 2025, although the consistency didn't last too long. Most of my creations are things I make for the intrinsic joy of programming and I really only share it with the friends that would understand the effort put in. A personal website can serve as a public space I can leave my projects to share more broadly. I can also use it as essentially a blog for each of the projects.</p>
    
    <h2>Technical Decisions</h2>
    <p>With the product goal being a project showcase, I also had a couple of technical goals that reflect some of my web development ideals.</p>
    <h4>Progressive Enhancement</h4>
    <p>I would not call myself a front-end dev or designer simply because I don't care about how things look that much. The content should be able to stand alone. Everything should look good without CSS, and you can see that with the button at the bottom.</p>
    <h4>Lightweight</h4>
    <p>Pages should load fast. This project doesn't use any existing frameworks like react so the only JavaScript being pulled in is code that actually does something.</p>
    
    <h2>Architecture</h2>
    <p>Each component that I included is typed as a Blueprint, equivalent to a react functional component except that it just returns a string.</p>
    <code>const Component: Blueprint&lt;ComponentProps&gt; = (props) =&gt; \`Content\`</code>

    <p>Toggling the CSS is fairly simple, as its just a matter of disabling the stylesheet</p>
    <pre><code>
const stylesheets = Array.from(document.styleSheets);
stylesheets.forEach(sheet => {
    if (sheet.href && sheet.href.includes('clean.css')) {
        sheet.disabled = true;
    }
});
      </code></pre>

    <h2>Formatter</h2>
    <p>This one is bespoke for no reason. here's how it works</p>
    
    <h2>Tester</h2>
    <p>I haven't been keeping up with tests because this is mostly ui work but
     the formatter has unit tests, and this test engine is bespoke too.</p>

    <h2>Other Features</h2>
    <h3>Iframes</h3>
    <p>You saw on the home page you could see the same page nested inside itself.
     This is done with an iframe component because I thought it was cool.
     It only loops like once or twice before the browser stops. There is a way
     for me to subvert that but that violates the goal to keep the site lightweight.
     </p>
`;
};


// Export complete page configuration
export const WebsitePage: PageConfig = {
	filename: "website.html",
	title: "The Personal Project Page",
  contentBuilder: WebsiteContent,
  contentData: {},
  navLabel: "Website",
  navOrder: "a-website",
  navCategory: "Projects",
    projectInfo: {
    title: "Personal Website",
    descriptions: ["HTML, CSS, JavaScript", "Hosted on GitHub Pages"],
    links: [
      { href: "https://github.com/MistOfJudgement/MistOfJudgement.github.io", label: "Github Repo" }
    ],
    iframes: [
      { src: "./index.html", title: "Personal Website" }
    ],
    projectPageHref: "./website.html"
  }
};

