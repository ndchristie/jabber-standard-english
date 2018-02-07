"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (untransformed) { return untransformed
    .replace(/[ck]{2,}/gi, 'ck')
    .replace(/([^w]|^)[ck]+w/gi, '$1qu')
    .replace(/([^w]|^)(c?)[ck]+u/gi, '$1$2cu')
    .replace(/([^cst]|^)hw([airouy])/gi, '$1wh$2'); });
//# sourceMappingURL=transform-english-digraphs.js.map