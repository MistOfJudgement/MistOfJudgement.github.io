import { Blueprint, fromList } from "../architect";

export interface NavItem {
	href?: string;
	label: string;
	order?: string;
	children?: NavItem[];
}

interface NavigationProps {
	items: NavItem[];
}

// Helper function to sort string orders
function sortOrder(a: string | undefined, b: string | undefined): number {
	const aVal = a ?? "zzz"; // Default to end of alphabet for undefined
	const bVal = b ?? "zzz";
	return aVal.localeCompare(bVal);
}

export const Navigation: Blueprint<NavigationProps> = (props) => {
	const sortedItems = [...props.items].sort((a: NavItem, b: NavItem) =>
		sortOrder(a.order, b.order),
	);

	return `<nav>
        <ul>
            ${fromList(sortedItems, (item: NavItem) => {
							if (item.children && item.children.length > 0) {
								// Nested category
								const sortedChildren = [...item.children].sort(
									(a: NavItem, b: NavItem) => sortOrder(a.order, b.order),
								);
								return `<li>${item.label}
                        <ul>
                            ${fromList(
															sortedChildren,
															(child: NavItem) =>
																`<li><a href="${child.href ?? "#"}">${child.label}</a></li>`,
														)}
                        </ul>
                    </li>`;
							} else {
								// Regular link
								return `<li><a href="${item.href ?? "#"}">${item.label}</a></li>`;
							}
						})}
        </ul>
    </nav>`;
};
