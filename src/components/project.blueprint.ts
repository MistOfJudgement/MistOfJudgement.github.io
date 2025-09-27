import { Blueprint, fromList } from "../architect";
import { Link, LinkProps } from "./link.blueprint";

export interface ProjectProps {
	title: string;
	descriptions?: string[];
	links?: LinkProps[];
	iframes?: IFrameProps[];
}

interface IFrameProps {
	src: string;
	title: string;
	props?: string[];
}
const IFrame: Blueprint<IFrameProps> = (props): string => {
	return `<div class="container">
<iframe src="${props.src}" title="${props.title}" ${props.props?.join(" ") ?? ""}></iframe>
</div>`;
};
export const Project: Blueprint<ProjectProps> = (props) => {
	const listElements = [
		props.descriptions,
		props.links?.map(Link),
		props.iframes?.map(IFrame),
	]
		.filter((e) => e !== undefined)
		.reduce((a, c) => [...a, ...c], []);
	return `
<li>
    <h4>${props.title}</h4>
    <ul>
        ${fromList(listElements, (desc) => `<li>${desc}</li>`)}
    </ul>
</li>`;
};
