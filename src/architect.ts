export type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends (infer U)[]
		? readonly DeepReadonly<U>[]
		: T[P] extends object
			? DeepReadonly<T[P]>
			: T[P];
};

export type Blueprint<T = object> = (props: DeepReadonly<T>) => string;

export function fromList<T>(
	elements: readonly T[],
	transfomation: (e: T, ind?: number) => string,
): string {
	return elements.map(transfomation).join("\n");
}
