import { Blueprint, fromList } from "../architect"
import { Link, LinkProps } from "./link.blueprint"

export interface ProjectProps {
    title: string
    descriptions?: string[]
    links?: LinkProps[]
    iframes?: IFrameProps[]
}

interface IFrameProps {source: string, title: string, props?: string[]}
const IFrame: Blueprint =  (props: IFrameProps) :string => {
    return `        <div class="container">
<iframe source="${props.source}" title="${props.title}" ${props.props?.join(" ") ?? ""}></iframe>
</div>`
}
export const Project: Blueprint = (props: ProjectProps) => {
    
    const listElements: string[] = [props.descriptions, props.links?.map(Link), props.iframes?.map(IFrame)]
        .reduce((a, c) => (c == undefined ? a : [...a!, ...c]), [])!.filter(e => e !== undefined)
    return `
<li>
    <h4>${props.title}</h4>
    <ul>
        ${fromList(listElements, desc => `<li>${desc}</li>`)}
    </ul>
</li>`
}