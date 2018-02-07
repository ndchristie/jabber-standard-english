import { transformExclusiveReplace } from 'jabber-generator';

export default transformExclusiveReplace(
  [/sc$/i, 'sk'],
  [/c$/i, 'ck'],
  [/iy$/i, 'ie'],
  [/iw$/i, 'ew'],
  [/([^aeio])u$/i, '$1ue'],
  [/j$/i, 'dge'],
  [/v$/i, 've'],
);
