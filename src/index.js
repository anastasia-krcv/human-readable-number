const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const templates = new Map([
  [2, 'twenty'],
  [3, 'thirty'],
  [4, 'forty'],
  [5, 'fifty'],
  [6, 'sixty'],
  [7, 'seventy'],
  [8, 'eighty'],
  [9, 'ninety'],
  [0, '']
]);


module.exports = function toReadable (number) {
  let unit = number % 10;
  let decimal = Math.floor(number % 100 / 10);
  let hundredth = Math.floor(number % 1000 / 100);
  let decimalUnit = `${templates.get(decimal)} ${digits[unit]}`;

  if (number % 100 >= 10 && number % 100 <= 19) {
    decimalUnit = teens[number % 100 - 10];
  }

  if (number === 0) return 'zero';
  if (number < 10) return `${digits[number]}`;
  if (number < 20) return `${teens[number - 10]}`;
  if (number < 100) return `${decimalUnit}`.replace(/\s+/g, ' ').trim();
  if (number < 1000) return `${digits[hundredth]} hundred ${decimalUnit}`.replace(/\s+/g, ' ').trim();
}
