"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transform_english_digraphs_1 = require("./transform-english-digraphs");
var transform_english_double_vowels_1 = require("./transform-english-double-vowels");
var transform_english_triple_vowels_1 = require("./transform-english-triple-vowels");
var transform_english_double_consonants_1 = require("./transform-english-double-consonants");
var transform_english_triple_u_1 = require("./transform-english-triple-u");
var transform_english_h_sandwich_1 = require("./transform-english-h-sandwich");
var transform_english_endings_1 = require("./transform-english-endings");
var transform_english_v_2_ve_1 = require("./transform-english-v-2-ve");
var transform_english_j_2_dg_1 = require("./transform-english-j-2-dg");
exports.default = [
    transform_english_digraphs_1.default,
    transform_english_double_vowels_1.default,
    transform_english_triple_vowels_1.default,
    transform_english_double_consonants_1.default,
    transform_english_h_sandwich_1.default,
    transform_english_triple_u_1.default,
    transform_english_endings_1.default,
    transform_english_v_2_ve_1.default,
    transform_english_j_2_dg_1.default,
];
//# sourceMappingURL=index.js.map