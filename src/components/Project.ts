import type { Blueprint } from "../architect";
import { fromList } from "../architect";
import { IFrame, IFrameProps } from "./IFrame";
import type { LinkProps } from "./Link";
import { Link } from "./Link";
import { YoutubeThumbnail } from "./YoutubeThumbnail";

export interface ProjectProps {
	title: string;
	descriptions?: string[];
	links?: LinkProps[];
	iframes?: IFrameProps[];
	images?: YoutubeThumbnail[];
	projectPageHref?: string; // Optional link to the dedicated project page
}

export const Project: Blueprint<ProjectProps> = (props) => {
	const listElements = [
		props.descriptions,
		props.links?.map(Link),
		props.iframes?.map(IFrame),
		props.images?.map(YoutubeThumbnail),
	]
		.filter((e) => e !== undefined)
		.reduce((a, c) => [...a, ...c], []);
	const titleElement = props.projectPageHref
		? `<a href="${props.projectPageHref}">${props.title}</a>`
		: props.title;

	return `
		<li>
		<h4>${titleElement}</h4>
    <ul>
        ${fromList(listElements, (desc) => `<li>${desc}</li>`)}
    </ul>
</li>`;
};
