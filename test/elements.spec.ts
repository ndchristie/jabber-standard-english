import { expect } from 'chai';
import elements from'../src/elements';

describe('elements', () => {
  it('Unpacks a flat array of unique, alphabetical string elements', () => {
    expect(elements.every((str: string, index, array) => {
      if (array.indexOf(str) !== index) return false;
      if (str.match(/^\w+$/) === null) return false;
      return true;
    })).to.be.true;
  });
});
