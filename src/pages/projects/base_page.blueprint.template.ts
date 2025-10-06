import { Blueprint, PageConfig } from "../../architect";

const BasePage: Blueprint = () => {
    return `
    <h2>Problem & Purpose</h2>
    <p> {template content} </p>

    <h2>Technical Details</h2>
    <p> {template content} </p>
`;
}

export const BasePageConfig: PageConfig = {
    filename: "base.html",
    title: "Base Page",
    navLabel: "label",
	navOrder: "b-2021-09-label",
	navCategory: "Projects",
    contentBuilder: BasePage,
    contentData: {},
    showInNav: false,
};