
export class AssertionError extends Error {

}

export function assertEqual<T>(expected: T, actual: T, message?: string) {
    if (expected != actual) {
        throw new AssertionError(message)
    }
}