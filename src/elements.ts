const flatten = (...args): any[] => args.reduce(
  (acc, arg) => acc.concat(Array.isArray(arg) ? flatten(...arg) : arg),
  [],
);

const prefix = (pres, posts): string[] => {
  const flatPres = flatten(pres);
  const flatPosts = flatten(posts);
  return flatPres.reduce((res, pre) => res.concat(flatPosts.map(post => `${pre}${post}`)), []);
};

const commonEndings: string[] = ('abcdefghijklmnoprstuvwxyz')
  .split('')
  .concat('ch', 'ng', 'sh', 'sk', 'st');
const a: string[] = prefix('a', commonEndings).concat('a', 'awl');
const e: string[] = prefix('e', commonEndings).concat('e');
const i: string[] = prefix('i', commonEndings).concat('i');
const o: string[] = prefix('o', commonEndings).concat('o', 'owl');
const u: string[] = prefix('u', commonEndings).concat('u');
const commonVowels: string[] = a.concat(e, i, o, u);
const commonPlusY: string[] = commonVowels.concat(['y']);
const l: string[] = prefix('l', commonPlusY);
const r: string[] = prefix('r', commonPlusY);
const n: string[] = prefix('n', commonPlusY);

const elements: string[] = a.concat(
  e,
  i,
  l,
  n,
  o,
  r,
  u,
  prefix(['j', 'y'], commonVowels),
  prefix(['h', 'kw', 'm', 'sc', 'sch', 'tw', 'v', 'z'], commonPlusY),
  prefix(['ch', 'd', 'sh', 'sk', 'st', 't', 'th', 'w'], [commonPlusY, r]),
  prefix(['b', 'c', 'g', 'f', 'ph'], [commonPlusY, l, r]),
  prefix('k', [commonPlusY, l, n, r]),
  prefix('p', [commonPlusY, l, r]),
  prefix('qu', [a, e, i, o]),
  prefix('s', [commonPlusY, l]),
  prefix('sp', [commonPlusY, l]),
).sort();

export default elements;
