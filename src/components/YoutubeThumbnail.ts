import type { Blueprint } from "../architect";

export interface YoutubeThumbnail {
    src: string;
    alt: string;
    href?: string;
}

export const YoutubeThumbnail: Blueprint<YoutubeThumbnail> = (props): string => {
    const img = `<img src="${props.src}" alt="${props.alt}" loading="lazy" class="youtube-thumbnail-img">`;
    if (props.href !== undefined && props.href !== "") {
        return `<div class="container">
                    <a
                        href="${props.href}" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="youtube-thumbnail-link">${img}</a>
                </div>`;
    }
    return `<div class="container">${img}</div>`;
}

