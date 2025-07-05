
export function format(data: string): string {
    let output = ""
    const lines = data.split("\n")
    let indent = 0
    const indentChar = "\t"
    output = lines.map(line => {
        const closeTags = [...line.matchAll(/<\/\w+[^<>/]*?>/g)].length
        indent -= closeTags
        const tmp = indentChar.repeat(indent) + line.trimStart()
        const openTags = [...line.matchAll(/<\w+[^/<>]*?>/g)].length
        indent += openTags
        console.log(`matched ${openTags} openTags and ${closeTags} closeTags. indent is now ${indent}`)
        // console.log(tmp)
        return tmp
    }).join("\n")
    
    return output
}

// find tags
// for each line
//   if line has close tag, dec ind
//   strip front, then add ind
//   if line has open tag, inc ind