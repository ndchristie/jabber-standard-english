import { expect } from 'chai';
import transformEnglishTripleU from '../../src/transforms/transform-english-triple-u';

describe('transform-english-triple-u', () => {
  it('Replaces combinations of u and w uncommon in English', () => {
    expect(transformEnglishTripleU('Duwell')).to.equal('Duell');
    expect(transformEnglishTripleU('Twue')).to.equal('Tue');
    // should be used in tandem with transform-english-double-consonants
    expect(transformEnglishTripleU('Owwie')).to.equal('Owwie');
  });
});
