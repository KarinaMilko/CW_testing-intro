const assert = require('node:assert');
const { expect } = require('chai');
const { sum } = require('../math');

describe('Testing math.sum', () => {
  it('return 4: number when 2:number + 2:number', () => {
    // How to test
    // 4 ? sum(2,2)
    // assertion
    assert.strictEqual(sum(2, 2), 4);
  });

  it('return 4: number when 2:string + 2:string', () => {
    assert.strictEqual(sum('2', '2'), 4);
  });

  it('return 4: number when 2:number + 2:string', () => {
    assert.strictEqual(sum('2', 2), 4);
  });

  it('return NaN: number when "qwert":string + 5:number', () => {
    const result = sum('qwert', 5);
    const expected = NaN;
    assert.strictEqual(result, expected);
  });

  it('return NaN :number when {}:object + 4:number', () => {
    const result = sum({}, 4);
    expect(result).to.be.NaN;
  });

  it('return Infinity: Number.MAX_VALUE:number + Number.MAX_VALUE:number', () => {
    const result = sum(Number.MAX_VALUE, Number.MAX_VALUE);
    expect(result).to.be.not.finite;
  });
});
