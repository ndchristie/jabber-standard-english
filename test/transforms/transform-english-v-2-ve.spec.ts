import { expect } from 'chai';
import transformEnglishV2Ve from '../../src/transforms/transform-english-v-2-ve';

describe('transform-english-v-2-ve', () => {
  it('Replaces "v" with "ve" if not followed by a consonant', () => {
    // simple case
    expect(transformEnglishV2Ve('Stov')).to.equal('Stove'); // transform-english-endings also
    expect(transformEnglishV2Ve('Haven')).to.equal('Haven');
    expect(transformEnglishV2Ve('Devon')).to.equal('Devon');
    expect(transformEnglishV2Ve('Havnot')).to.equal('Havenot');
    expect(transformEnglishV2Ve('Vram')).to.equal('Veram');
  });
});
