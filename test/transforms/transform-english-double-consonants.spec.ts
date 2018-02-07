import { expect } from 'chai';
import transformEnglishDoubleConsonants
  from '../../src/transforms/transform-english-double-consonants';

describe('transform-english-double-consonants', () => {
  it('Replaces certain double consonants uncommon in English', () => {
    // simple case
    expect(transformEnglishDoubleConsonants('ahht')).to.equal('aht');
    expect(transformEnglishDoubleConsonants('ejjs')).to.equal('ejs');
    expect(transformEnglishDoubleConsonants('ikky')).to.equal('iky');
    expect(transformEnglishDoubleConsonants('oqqu')).to.equal('oqu');
    expect(transformEnglishDoubleConsonants('uvvo')).to.equal('uvo');
    expect(transformEnglishDoubleConsonants('ywwi')).to.equal('ywi');
    expect(transformEnglishDoubleConsonants('sxxe')).to.equal('sxe');
    expect(transformEnglishDoubleConsonants('tyya')).to.equal('tya');
  });
});
