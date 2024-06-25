import { formatCurrency } from '../../scripts/utilities/money.js';

describe('test suite: Format Currency', ()=>{
  it('returns the Rupee amount',()=>{
    expect(formatCurrency(299)).toEqual(299);
  });
});