import { readFileSync } from 'fs';
import { join } from 'path';
import { Blueprint, PageConfig } from '../architect';

const Bombs: Blueprint = () => {
    // Read the HTML content from bomb_source.html
    const htmlContent = readFileSync(join(__dirname, 'bomb_source.html'), 'utf8');
    
    // Extract just the bomb content and styles, but modify the styles to work within main
    const modifiedContent = htmlContent
        // Remove problematic body styles that affect the entire page
        .replace(/body\s*{[^}]*}/g, '')
        // Make ktane-bomb work within the main container instead of absolute positioning
        .replace(/ktane-bomb\s*{[^}]*}/, `ktane-bomb {
        border: 1px solid black;
        margin: 10px auto;
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1000px;
    }`)
        // Add CSS to ensure animations are visible
        + `<style>
        main {
            overflow-x: visible !important;
            position: relative;
        }
        </style>`;
    const returnLink = `<p><a href="./web_dev_project.html">Return to Web Dev Project Page</a></p>`;
    return returnLink + modifiedContent;
}

const bombsPageConfig: PageConfig = {
    title: 'Bombs',
    filename: 'bombs.html',
    contentBuilder: Bombs,
    contentData: {},
    showInNav: false,

};

export default bombsPageConfig;