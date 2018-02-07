"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (untransformed) { return untransformed
    .replace(/aa+h?/gi, 'ah')
    .replace(/ii+e?/gi, 'ie')
    .replace(/(^|[^q])o?uu+/gi, '$1ou'); });
//# sourceMappingURL=transform-english-double-vowels.js.map