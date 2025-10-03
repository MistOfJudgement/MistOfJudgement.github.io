export type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends (infer U)[]
		? readonly DeepReadonly<U>[]
		: T[P] extends object
			? DeepReadonly<T[P]>
			: T[P];
};

export type Blueprint<T = object> = (props: DeepReadonly<T>) => string;

// Import component interfaces to avoid duplication
import type { ProjectProps } from "./components/Project";

export interface PageConfig<T = object> {
	filename: string;
	title: string;
	contentBuilder: Blueprint<T>;
	contentData: DeepReadonly<T>;
	navLabel?: string; // Optional: different label for navigation
	showInNav?: boolean; // Optional: whether to show in navigation (default true)
	navOrder?: string; // Optional: order in navigation - string-based for flexible ordering
	navCategory?: string; // Optional: category for nested navigation (e.g., "Projects")
	projectInfo?: ProjectProps; // Optional: project information for display on index page - reuses ProjectProps
}
export function fromList<T>(
	elements: readonly T[],
	transfomation: (e: T, ind?: number) => string,
): string {
	return elements.map(transfomation).join("\n");
}
