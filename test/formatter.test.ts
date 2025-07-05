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

export const formatTestSuite: Suite = {
    name: "formatTestSuite",
    tests: [
        formatEmptyStringReturnsEmptyString,
        formatPlainTextReturnsText,
        formatOpenTagReturnsSelf,
        formatTrimWhitespace
    ]
}