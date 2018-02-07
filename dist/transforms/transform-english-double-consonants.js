"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (untransformed) { return untransformed
    .replace(/([hjkqvwxy])\1+/gi, '$1')
    .replace(/([^aeiou])([^aeiou])\2+/gi, '$1$2')
    .replace(/([^aeiou])\1+([^aeiou])/gi, '$1$2'); });
//# sourceMappingURL=transform-english-double-consonants.js.map