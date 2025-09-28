import { Blueprint } from "../architect.js";

interface InteractiveElementProps {
	id: string;
	content: string;
	func?: () => void;
}

export const InteractiveElement: Blueprint<InteractiveElementProps> = (
	props,
) => {
	const scriptTag = props.func
		? `
            <script>
                (${props.func.toString()})();
            </script>
        `
		: "";

	return `<div id="${props.id}">${props.content}</div>${scriptTag}`;
};
