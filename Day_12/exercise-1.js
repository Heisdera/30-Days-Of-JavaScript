// 1.
const txt =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const pattern = /\d+/g;
match = txt.match(pattern);
console.log(match);
// console.log(match.length);
// const numbers = match.slice();
// console.log(firstArr);

function calcTotalIncome() {
  let firstArr = match[0];
  let secondArr = match[1];
  let thirdArr = match[2];
  let monthlyIncome = (firstArr + thirdArr) * 12;
  let annualIncome = monthlyIncome + secondArr;
  console.log(annualIncome);
}

calcTotalIncome();
