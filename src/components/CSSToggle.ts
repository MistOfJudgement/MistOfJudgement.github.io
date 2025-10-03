import { Blueprint } from "../architect.js";
import { InteractiveElement } from "./InteractiveElement.js";

interface CSSToggleProps {
	id?: string;
	buttonText?: string;
}

export const CSSToggle: Blueprint<CSSToggleProps> = (props) => {
	const id = props.id ?? "css-toggle";
	const buttonText = props.buttonText ?? "Toggle CSS";

	const toggleScript = () => {
		function toggleCSS() {
			if (document.styleSheets[0].disabled) {
				document.styleSheets[0].disabled = false;
			} else {
				document.styleSheets[0].disabled = true;
			}
		}

		// Attach the handler directly to the button
		const button = document.getElementById(`${id}-button`);
		if (button) {
			button.onclick = toggleCSS;
		}
	};

	const content = `<button id="${id}-button">${buttonText}</button>`;

	return InteractiveElement({
		id,
		content,
		func: toggleScript,
	});
};
