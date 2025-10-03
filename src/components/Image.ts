import type { Blueprint } from "../architect";

export interface ImageProps {
    src: string;
    alt?: string; // Optional custom alt text
    width?: number; // Optional width for fallback, default to 300
    height?: number; // Optional height for fallback, default to 200
    className?: string; // Additional CSS classes
}

export const Image: Blueprint<ImageProps> = (
    props,
): string => {
    const baseClasses = 'responsive-img';
    const additionalClasses = props.className ?? '';
    const classes = `${baseClasses} ${additionalClasses}`.trim();
    
    // Provide reasonable fallback dimensions when not specified
    const width = props.width ?? 400;
    const height = props.height ?? 250;
    
    return `<img src="${props.src}" ${props.alt ? `alt="${props.alt}"` : ''} loading="lazy" width="${String(width)}" height="${String(height)}" class="${classes}" style="max-width: 100%; height: auto;">`;
};
