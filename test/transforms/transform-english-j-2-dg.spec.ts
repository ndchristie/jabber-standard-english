import { expect } from 'chai';
import transformEnglishJ2Dg from '../../src/transforms/transform-english-j-2-dg';

describe('transform-english-j-2-dg', () => {
  it('Replaces "j" with "dge" if not the first letter or followed by some vowels', () => {
    // simple case
    expect(transformEnglishJ2Dg('Raj')).to.equal('Radge');
    expect(transformEnglishJ2Dg('Sej')).to.equal('Sedge');
    expect(transformEnglishJ2Dg('Juj')).to.equal('Judge');
    expect(transformEnglishJ2Dg('Cujel')).to.equal('Cudgel');
    expect(transformEnglishJ2Dg('Rejoice')).to.equal('Rejoice');
    expect(transformEnglishJ2Dg('Pyjamas')).to.equal('Pyjamas');
    expect(transformEnglishJ2Dg('Puji')).to.equal('Pudgy');
  });
});
