import { transformExclusiveReplace } from 'jabber-generator';
import transformEnglishDigraphs from './transform-english-digraphs';
import transformEnglishDoubleVowels from './transform-english-double-vowels';
import transformEnglishTripleVowels from './transform-english-triple-vowels';
import transformEnglishDoubleConsonants from './transform-english-double-consonants';
import transformEnglishTripleU from './transform-english-triple-u';
import transformEnglishHSandwich from './transform-english-h-sandwich';
import transformEnglishEndings from './transform-english-endings';
import transformEnglishV2Ve from './transform-english-v-2-ve';
import transformEnglishJ2Dg from './transform-english-j-2-dg';

export default [
  transformEnglishDigraphs,
  transformEnglishDoubleVowels,
  transformEnglishTripleVowels,
  transformEnglishDoubleConsonants,
  transformEnglishHSandwich,
  transformEnglishTripleU,
  transformEnglishEndings,
  transformEnglishV2Ve,
  transformEnglishJ2Dg,
];
