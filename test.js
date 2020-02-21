const test = require("ava")
const isArrayUniq = require("is-array-uniq")
const allChars = require(".")

test("main", (t) => {
	t.true(Array.isArray(allChars()))
	t.true(isArrayUniq(allChars()))
})
