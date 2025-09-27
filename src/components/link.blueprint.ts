import { Blueprint } from "../architect";

export interface LinkProps {
	href: string;
	label: string;
}

export const Link: Blueprint<LinkProps> = (props) => {
	return `<a href="${props.href}">${props.label}</a>`;
};
