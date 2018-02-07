"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (untransformed) { return untransformed
    .replace(/(u)[uw]+e?/gi, '$1e')
    .replace(/(.+)wu+e?/gi, '$1ue'); });
//# sourceMappingURL=transform-english-triple-u.js.map