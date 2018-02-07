"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatten = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, arg) { return acc.concat(Array.isArray(arg) ? flatten.apply(void 0, arg) : arg); }, []);
};
var prefix = function (pres, posts) {
    var flatPres = flatten(pres);
    var flatPosts = flatten(posts);
    return flatPres.reduce(function (res, pre) { return res.concat(flatPosts.map(function (post) { return "" + pre + post; })); }, []);
};
var commonEndings = ('abcdefghijklmnoprstuvwxyz')
    .split('')
    .concat('ch', 'ng', 'sh', 'sk', 'st');
var a = prefix('a', commonEndings).concat('a', 'awl');
var e = prefix('e', commonEndings).concat('e');
var i = prefix('i', commonEndings).concat('i');
var o = prefix('o', commonEndings).concat('o', 'owl');
var u = prefix('u', commonEndings).concat('u');
var commonVowels = a.concat(e, i, o, u);
var commonPlusY = commonVowels.concat(['y']);
var l = prefix('l', commonPlusY);
var r = prefix('r', commonPlusY);
var n = prefix('n', commonPlusY);
var elements = a.concat(e, i, l, n, o, r, u, prefix(['j', 'y'], commonVowels), prefix(['h', 'kw', 'm', 'sc', 'sch', 'tw', 'v', 'z'], commonPlusY), prefix(['ch', 'd', 'sh', 'sk', 'st', 't', 'th', 'w'], [commonPlusY, r]), prefix(['b', 'c', 'g', 'f', 'ph'], [commonPlusY, l, r]), prefix('k', [commonPlusY, l, n, r]), prefix('p', [commonPlusY, l, r]), prefix('qu', [a, e, i, o]), prefix('s', [commonPlusY, l]), prefix('sp', [commonPlusY, l])).sort();
exports.default = elements;
//# sourceMappingURL=elements.js.map