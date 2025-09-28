import type { Blueprint } from "../architect";

export interface YoutubeThumbnail {
	url: string;
	title?: string; // Optional custom title, otherwise extracted from URL
}

// Extract YouTube video ID from various YouTube URL formats
function extractVideoId(url: string): string | null {
	const patterns = [
		/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
		/youtube\.com\/v\/([^&\n?#]+)/,
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match) return match[1];
	}
	return null;
}

export const YoutubeThumbnail: Blueprint<YoutubeThumbnail> = (
	props,
): string => {
	const videoId = extractVideoId(props.url);

	if (!videoId) {
		throw new Error(
			`Invalid YouTube URL: ${props.url}. Expected format: youtube.com/watch?v=VIDEO_ID or youtu.be/VIDEO_ID`,
		);
	}

	const thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
	const altText = props.title ?? `YouTube Video Thumbnail`;

	const img = `<img src="${thumbnailSrc}" alt="${altText}" width="320" height="180" loading="lazy" class="youtube-thumbnail-img">`;
	const caption = `<figcaption class="youtube-thumbnail-caption">Watch on YouTube</figcaption>`;
	const figure = `<figure class="youtube-thumbnail-figure">
        ${caption}
        ${img}
        </figure>`;

	const content = `<a href="${props.url}" target="_blank" rel="noopener noreferrer" class="youtube-thumbnail-link">${figure}</a>`;

	return `<div class="container">${content}</div>`;
};
