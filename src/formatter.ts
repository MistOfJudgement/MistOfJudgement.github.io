export function format(data: string): string {
	let output = "";
	const lines = data.split("\n");
	let indent = 0;
	const indentChar = "\t";
	let insidePreTag = false;
	
	output = lines
		.map((line) => {
			const closeTags = [...line.matchAll(/<\/\w+[^<>]*?>/g)];
			const openTags = [...line.matchAll(/<\w+[^<>]*?>/g)].filter(
				(tag) => !tag[0].endsWith("/>"),
			);

			// Check if we're entering or leaving a pre tag
			const preOpenTag = openTags.find(tag => tag[0].toLowerCase().includes('<pre'));
			const preCloseTag = closeTags.find(tag => tag[0].toLowerCase().includes('</pre'));
			
			let tmp;
			if (insidePreTag && !preCloseTag) {
				// Inside pre tag (but not the closing tag): preserve original formatting
				tmp = line;
			} else {
				// Normal formatting logic (including pre open and close tags)
				const currentIndent = Math.max(0, indent -
					((closeTags[0]?.index ?? 99) < (openTags[0]?.index ?? 99)
						? closeTags.length
						: 0));
				tmp = indentChar.repeat(currentIndent) + line.trimStart();
			}

			// Update the pre tag state after processing the line
			if (preCloseTag) {
				insidePreTag = false;
			}
			if (preOpenTag) {
				insidePreTag = true;
			}

			// Update indent level normally for all tags
			indent += openTags.length - closeTags.length;
			
			// console.log(`matched ${openTags} openTags and ${closeTags} closeTags. indent is now ${indent}`)
			// console.log(tmp)
			return tmp;
		})
		.join("\n");

	return output;
}

// find tags
// for each line
//   if line has close tag, dec ind
//   strip front, then add ind
//   if line has open tag, inc ind
