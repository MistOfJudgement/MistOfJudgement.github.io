import { Blueprint } from "../architect";

interface ContactData {
    email: string;
    socialLinks: {
        platform: string;
        url: string;
        username: string;
    }[];
    availability: string;
}

const ContactContent: Blueprint<ContactData> = (props) => {
    return `
        <section class="contact-info">
            <h2>Get In Touch</h2>
            <p>${props.availability}</p>
            
            <div class="email">
                <h3>Email</h3>
                <a href="mailto:${props.email}">${props.email}</a>
            </div>
        </section>
        
        <section class="social-links">
            <h3>Find Me Online</h3>
            <ul class="social-list">
                ${props.socialLinks.map(link => `
                    <li>
                        <strong>${link.platform}:</strong> 
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer">@${link.username}</a>
                    </li>
                `).join('')}
            </ul>
        </section>
    `;
};

const contactData: ContactData = {
    email: "tusharrangaswamy@gmail.com",
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/MistOfJudgement", username: "MistOfJudgement" },
        { platform: "YouTube", url: "https://www.youtube.com/@tusharrangaswamy5910", username: "tusharrangaswamy5910" },
        { platform: "Itch.io", url: "https://mistofjudgement.itch.io/", username: "mistofjudgement" }
    ],
    availability: "I'm somewhat busy with school and work but reach out if you have something interesting!"
};

// Export complete page configuration
export const ContactPage = {
    filename: "contact.html",
    title: "Contact Me",
    contentBuilder: ContactContent,
    contentData: contactData,
    navLabel: "Contact",
    navOrder: "zzz-contact"
};
