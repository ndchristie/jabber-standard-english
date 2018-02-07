"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jabber_generator_1 = require("jabber-generator");
exports.default = jabber_generator_1.transformExclusiveReplace([/sc$/i, 'sk'], [/c$/i, 'ck'], [/iy$/i, 'ie'], [/iw$/i, 'ew'], [/([^aeio])u$/i, '$1ue'], [/j$/i, 'dge'], [/v$/i, 've']);
//# sourceMappingURL=transform-english-endings.js.map