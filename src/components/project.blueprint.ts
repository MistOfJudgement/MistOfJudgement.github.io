import { Blueprint } from "../architect"

export interface ProjectProps {
    title: string,
    descriptions: string[]
}

export const Project: Blueprint = (props: ProjectProps) => {
    return `
<li>
    <h4>${props.title}</h4>
    <ul>
        ${props.descriptions.map(desc => `<li>${desc}</li>`)}
    </ul>
</li>`
}