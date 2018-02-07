import { expect } from 'chai';
import transforms from '../../src/transforms';

describe('transforms', () => {
  it('Exports an array of transform functions', () => {
    expect(transforms).to.be.an('array');
    expect(transforms.every(fn => typeof fn === 'function')).to.be.true;
  });
});
