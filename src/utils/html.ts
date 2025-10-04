/**
 * Escapes HTML characters to prevent rendering
 */
export function escapeHtml(html: string): string {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Formats HTML code for display in a code block with proper escaping
 */
export function formatCodeBlock(html: string, language = 'html'): string {
    return `<pre><code class="language-${language}">${escapeHtml(html)}</code></pre>`;
}
