/**
 * All unicode characters, including emoji and distinct whitespace.
 * @example
 * ```
 * const allChars = require("all-chars");
 *
 * allChars();
 * //=> [ ' ', '!', '"', '#', '$', '%', '&',  "'", '(', ... ]
 * ```
*/
declare function allChars(): string[]

export = allChars
