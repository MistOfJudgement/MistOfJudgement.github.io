
export type Blueprint<T> = (props: T) => string

export function fromList<T>(elements: T[], transfomation: (e: T, ind?: number) => string): string {
    return elements.map(transfomation).join("\n")
}