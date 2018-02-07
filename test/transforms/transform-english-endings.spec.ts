import { expect } from 'chai';
import transformEnglishEndings from '../../src/transforms/transform-english-endings';

describe('transform-english-endings', () => {
  it('Replaces certain word endings uncommon in English', () => {
    expect(transformEnglishEndings('disc')).to.equal('disk');
    expect(transformEnglishEndings('vic')).to.equal('vick');
    expect(transformEnglishEndings('piy')).to.equal('pie');
    expect(transformEnglishEndings('liw')).to.equal('lew');
    expect(transformEnglishEndings('chu')).to.equal('chue');
    expect(transformEnglishEndings('Iy')).to.equal('ie'); // notice case insensitivity
    expect(transformEnglishEndings('Iw')).to.equal('ew'); // notice case insensitivity
    expect(transformEnglishEndings('baj')).to.equal('badge');
    expect(transformEnglishEndings('dov')).to.equal('dove'); // transform-english-v-2-ve also
  });
});
