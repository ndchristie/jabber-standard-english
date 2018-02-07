"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elements_1 = require("./elements");
var jabber_generator_1 = require("jabber-generator");
var transforms_1 = require("./transforms");
exports.default = {
    elements: elements_1.default,
    transforms: transforms_1.default,
    filters: [
        jabber_generator_1.filterMatches(/[cdgktqz]j/i, // fewer difficult j sounds
        /j[cdflrsyz]/i, // fewer difficult j sounds
        /v[^aeiouy]/i, // fewer difficult v sounds
        /[^aeiouy][zj][^aeiouy]/i, // fewer very difficult j/z sounds
        /[gjktqx][cgjkqx]/i, // fewer difficult ckqg sounds
        /[^aeiouy](gl|gn|gh)/i, // fewer difficult g sounds
        /[^aeiouy]pn/i),
        jabber_generator_1.filterConsonantPileups(2, 2),
    ],
};
//# sourceMappingURL=index.js.map