import { Blueprint } from "../architect";

interface AboutData {
	name: string;
	school: string;
	interests: string[];
	bio: string;
}

const AboutContent: Blueprint<AboutData> = (props) => {
	return `
        <section class="hero">
            <h2>About ${props.name}</h2>
            <p>${props.bio}</p>
        </section>
        
        <section class="education">
            <h3>Education</h3>
            <p>Studied at ${props.school}</p>
        </section>
        
        <section class="interests">
            <h3>Interests</h3>
            <ul>
                ${props.interests.map((interest) => `<li>${interest}</li>`).join("")}
            </ul>
        </section>
    `;
};

const aboutData: AboutData = {
	name: "Tushar Rangaswamy",
	school: "George Mason University",
	interests: ["Software Engineering", "Video Games"],
	bio: "I am currently employed as a Software Developer. I don't really have preferences for what tech stacks I work with as long as it makes sense for the project.",
};

// Export complete page configuration
export const AboutPage = {
	filename: "about.html",
	title: "About Me",
	contentBuilder: AboutContent,
	contentData: aboutData,
	navLabel: "About",
	navOrder: "z-about",
};
