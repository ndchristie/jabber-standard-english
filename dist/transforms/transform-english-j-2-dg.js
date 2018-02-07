"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (untransformed) { return untransformed
    .replace(/(.+)je?([^aou]|$)/gi, '$1dge$2')
    .replace(/dge[eiy]$/gi, 'dgy'); });
//# sourceMappingURL=transform-english-j-2-dg.js.map