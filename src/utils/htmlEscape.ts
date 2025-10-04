/**
 * Escapes HTML characters for safe display in code blocks
 * @param html - Raw HTML string to escape
 * @returns Escaped HTML string safe for display
 */
export function escapeHTML(html: string): string {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
