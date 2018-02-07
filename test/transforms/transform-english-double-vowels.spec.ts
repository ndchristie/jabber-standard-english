import { expect } from 'chai';
import transformEnglishDoubleVowels from '../../src/transforms/transform-english-double-vowels';

describe('transform-english-double-vowels', () => {
  it('Replaces certain double vowels uncommon in English', () => {
    // simple case
    expect(transformEnglishDoubleVowels('Zoo')).to.equal('Zoo');
    expect(transformEnglishDoubleVowels('raa')).to.equal('rah');
    expect(transformEnglishDoubleVowels('Vii')).to.equal('Vie');
    expect(transformEnglishDoubleVowels('muu')).to.equal('mou');
    // more complex
    expect(transformEnglishDoubleVowels('raaaa')).to.equal('rah'); // not rahah
    expect(transformEnglishDoubleVowels('touu')).to.equal('tou'); // not toou
    expect(transformEnglishDoubleVowels('Zaah')).to.equal('Zah'); // not Zahh
    expect(transformEnglishDoubleVowels('Pliie')).to.equal('Plie'); // not Pliee
    // non-english origin
    expect(transformEnglishDoubleVowels('Hawaii')).to.equal('Hawaie');
    expect(transformEnglishDoubleVowels('Helvetii')).to.equal('Helvetie');
    expect(transformEnglishDoubleVowels('vacuum')).to.equal('vacoum');
  });
});
