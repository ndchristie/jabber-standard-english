import elements from './elements';

import {
  filterConsonantPileups,
  filterMatches,
} from 'jabber-generator';

import transforms from './transforms';

export default {
  elements,
  transforms,
  filters: [
    filterMatches(
      /[cdgktqz]j/i, // fewer difficult j sounds
      /j[cdflrsyz]/i, // fewer difficult j sounds
      /v[^aeiouy]/i, // fewer difficult v sounds
      /[^aeiouy][zj][^aeiouy]/i, // fewer very difficult j/z sounds
      /[gjktqx][cgjkqx]/i, // fewer difficult ckqg sounds
      /[^aeiouy](gl|gn|gh)/i, // fewer difficult g sounds
      /[^aeiouy]pn/i, // fewer difficult pn sounds
    ),
    filterConsonantPileups(2, 2),
  ],
};
