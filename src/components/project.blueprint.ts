import { Blueprint, fromList } from "../architect";
import { Link, LinkProps } from "./link.blueprint";

export interface ProjectProps {
	title: string;
	descriptions?: string[];
	links?: LinkProps[];
	iframes?: IFrameProps[];
	images?: ImageProps[];
}

interface IFrameProps {
	src: string;
	title: string;
	props?: string[];
}

interface ImageProps {
	src: string;
	alt: string;
	href?: string;
}
const IFrame: Blueprint<IFrameProps> = (props): string => {
	return `<div class="container">
<iframe src="${props.src}" title="${props.title}" ${props.props?.join(" ") ?? ""}></iframe>
</div>`;
};

const Image: Blueprint<ImageProps> = (props): string => {
	const img = `<img src="${props.src}" alt="${props.alt}" loading="lazy" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">`;
	if (props.href) {
		return `<div class="container">
<a href="${props.href}" target="_blank" rel="noopener noreferrer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block;">${img}</a>
</div>`;
	}
	return `<div class="container">${img}</div>`;
};
export const Project: Blueprint<ProjectProps> = (props) => {
	const listElements = [
		props.descriptions,
		props.links?.map(Link),
		props.iframes?.map(IFrame),
		props.images?.map(Image),
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
