import { AssertionError } from "./assert"
import { formatTestSuite } from "./formatter.test"

export type Suite = { name: string, tests: ((() => void) & {name:string})[]}

const suites = [formatTestSuite]

function runSuite(suite: Suite) {
    console.info(`Running Suite ${suite.name}`)
    const results = suite.tests.map((test) => {
        try {
            console.info(`Starting ${test.name}`)
            test()
            return {name: test.name, result: true}
        } catch (e: unknown) {
            console.error(`${test.name} failed with ${(e as AssertionError).stack}`)
            return {name: test.name, result: false, error: e}
        } finally {
            console.info(`Finished ${test.name}`)
        }
    })
    const numFailed = results.filter(e => e.result === false).length
    console.info(`Finished. ${results.length - numFailed} PASSED. ${numFailed} FAILED`)
    return results
}

const results = suites.map(runSuite).reduce((a, c) => a.concat(c), [])
const numFailed = results.filter(e => e.result === false).length
console.info(`Finished. ${results.length - numFailed} PASSED. ${numFailed} FAILED`)

