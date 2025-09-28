import type { Blueprint } from "../architect";



export interface IFrameProps {
	src: string;
	title: string;
	props?: string[];
}
export const IFrame: Blueprint<IFrameProps> = (props): string => {
	return `<div class="container">
<iframe src="${props.src}" title="${props.title}" ${props.props?.join(" ") ?? ""}></iframe>
</div>`;
};
