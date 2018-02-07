import { expect } from 'chai';
import transformEnglishDigraphs
  from '../../src/transforms/transform-english-digraphs';

describe('transform-english-digraphs', () => {
  it('Replaces certain sounds with more familiar characters', () => {
    // simple case
    expect(transformEnglishDigraphs('wikki')).to.equal('wicki');
    expect(transformEnglishDigraphs('kwalm')).to.equal('qualm');
    expect(transformEnglishDigraphs('ackwa')).to.equal('aqua');
    expect(transformEnglishDigraphs('kumin')).to.equal('cumin');
    expect(transformEnglishDigraphs('hwat')).to.equal('what');
    expect(transformEnglishDigraphs('akcumen')).to.equal('accumen'); // double replacement
    expect(transformEnglishDigraphs('awkwa')).to.equal('awkwa'); // exeption
    expect(transformEnglishDigraphs('shwe')).to.equal('shwe'); // exeption
    expect(transformEnglishDigraphs('thwa')).to.equal('thwa'); // exeption
  });
});
