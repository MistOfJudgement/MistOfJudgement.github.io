import { format } from "../src/formatter";
import { assertEqual } from "./assert";
import { type Suite } from "./testRunner";


function formatEmptyStringReturnsEmptyString() {
    const output = format("")
    assertEqual(output, "", "message")
}

const formatPlainTextReturnsText = () => {
    const text = "test"
    assertEqual(format(text), text)
}

function formatOpenTagReturnsSelf () {
    const text = "<tag>"
    assertEqual(format(text), text)
}

function formatTrimWhitespace() {
    assertEqual(format("     test"), "test")
}

function formatChildDataIsIndented() {
    const actual = format(`        <tag>
        child
        </tag>`)
    const expected =`<tag>\n\tchild\n</tag>`
    assertEqual(actual, expected)
}

function formatSiblingTags() {
    const actual = format(
        `<tag1>
        one
        </tag1>
        <tag2>
        two
        </tag2>`
    )
    const expected =
`<tag1>
\tone
</tag1>
<tag2>
\ttwo
</tag2>`
    assertEqual(actual, expected)
}

function formatNestedTags() {
	const actual = format(
		`<outer>
		<inner>
		test
		</inner>
		</outer>`
	)
	const expected =
`<outer>
	<inner>
		test
	</inner>
</outer>`
	assertEqual(actual, expected)
}

function formatSingleTags() {
	const actual = format(
		`<outer>
		<single/>
		test
		</outer>`
	)
	const expected = 
`<outer>
	<single/>
	test
</outer>`
	assertEqual(actual, expected)
}

function formatSingleLineOpenClose() {
	assertEqual(
		format(`<solo>test</solo>
firstLevel`),
		`<solo>test</solo>
firstLevel`
	)
}

function formatLinks() {
	assertEqual(
		format(
			`<outer>
<a href="something://else> linke </a>
extra
</outer>`
		),
		`<outer>
	<a href="something://else> linke </a>
	extra
</outer>`
	)
}
export const formatTestSuite: Suite = {
    name: "formatTestSuite",
    tests: [
        formatEmptyStringReturnsEmptyString,
        formatPlainTextReturnsText,
        formatOpenTagReturnsSelf,
        formatTrimWhitespace,
        formatChildDataIsIndented,
		formatSiblingTags,
		formatNestedTags,
		formatSingleTags,
		formatSingleLineOpenClose,
		formatLinks
    ]
}