import { expect } from 'chai';
import transformEnglishTripleVowels from '../../src/transforms/transform-english-triple-vowels';

describe('transform-english-triple-vowels', () => {
  it('Replaces certain double vowels uncommon in English', () => {
    // simple case
    expect(transformEnglishTripleVowels('Troweey')).to.equal('Troy');
    expect(transformEnglishTripleVowels('Wowie')).to.equal('Wowie');
    expect(transformEnglishTripleVowels('Boeed')).to.equal('Boid');
    expect(transformEnglishTripleVowels('Woieea')).to.equal('Woia');
  });
});
