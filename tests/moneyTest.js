import { formatCurrency } from '../scripts/utilities/money.js';

console.log('test suite: Format Currency');
console.log('returns the Rupee amount')

if (formatCurrency(299) === 299) {
  console.log('passed');
} else {
  console.log('failed');
};

console.log('worls with 0')

if (formatCurrency(0)===0) {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds the Rupee amount')

if (formatCurrency(2000.5) ===2001) {
  console.log('passed');
} else {
  console.log('failed');
}

console.log(formatCurrency(2000.5));
console.log(formatCurrency(0))