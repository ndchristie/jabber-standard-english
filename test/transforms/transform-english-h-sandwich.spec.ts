import { expect } from 'chai';
import transformEnglishHSandwich from '../../src/transforms/transform-english-h-sandwich';

describe('transform-english-h-sandwich', () => {
  it('Replaces consonant-h-constant "sandwich" uncommon in English', () => {
    // simple case
    expect(transformEnglishHSandwich('Abhba')).to.equal('Abba');
    expect(transformEnglishHSandwich('Ombhre')).to.equal('Ombre');
    expect(transformEnglishHSandwich('Halhyard')).to.equal('Halyard');
    // intentional exemption
    expect(transformEnglishHSandwich('Christie')).to.equal('Christie');
    expect(transformEnglishHSandwich('Kashmir')).to.equal('Kashmir');
    expect(transformEnglishHSandwich('Diphthong')).to.equal('Diphthong');
    expect(transformEnglishHSandwich('Heathcliff')).to.equal('Heathcliff');
  });
});
