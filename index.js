"use strict"

const arrayUniq = require("array-uniq")
const unicodeChars = require("unicode-chars")
const emoji = require("emoji.json")

module.exports = () => arrayUniq([...unicodeChars(), ...emoji.map(({ char }) => char)])
