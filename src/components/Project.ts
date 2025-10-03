import type { Blueprint } from "../architect";
import { fromList } from "../architect";
import { IFrame, IFrameProps } from "./IFrame";
import { Image, ImageProps } from "./Image";
import type { LinkProps } from "./Link";
import { Link } from "./Link";
import { YoutubeThumbnail } from "./YoutubeThumbnail";

export interface ProjectProps {
	title: string;
	descriptions?: string[];
	links?: LinkProps[];
	iframes?: IFrameProps;
	yt?: YoutubeThumbnail;
	image?: ImageProps;
	projectPageHref?: string; // Optional link to the dedicated project page
}

export const Project: Blueprint<ProjectProps> = (props) => {
	const listElements = [
		props.descriptions,
		props.links?.map(Link),
		// props.iframes?.map(IFrame),
		// props.yt ? [YoutubeThumbnail(props.yt)] : [],
		// props.image ? [Image(props.image)] : [],
	]
		.filter((e) => e !== undefined)
		.reduce((a, c) => [...a, ...c], []);
	const titleElement = props.projectPageHref
		? `<a href="${props.projectPageHref}">${props.title}</a>`
		: props.title;
	const extraElements = [
		props.iframes ? IFrame(props.iframes) : null,
		props.yt ? YoutubeThumbnail(props.yt) : null,
		props.image ? Image(props.image) : null,
	]
		.filter((e) => e !== null)
		.join("\n");


	return `
		<li>
		<h4>${titleElement}</h4>
    <ul>
        ${fromList(listElements, (desc) => `<li>${desc}</li>`)}
    </ul>
	${extraElements}
</li>`;
};
