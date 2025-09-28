export class AssertionError extends Error {}

export function assertEqual<T>(actual: T, expected: T, message?: string) {
	if (expected != actual) {
		throw new AssertionError(
			message ?? `actual [${actual}] does not equal expected [${expected}]`,
		);
	}
}
