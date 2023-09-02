// 1.
const emptySet = new Set();
console.log(emptySet);

// 2.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
setOfNumbers = new Set();
for (const number of numbers) {
  setOfNumbers.add(number);
}
console.log(setOfNumbers);

// 3.
console.log(setOfNumbers.delete(10)); // removed 10
console.log(setOfNumbers);

// 4.
setOfNumbers.clear();
console.log(setOfNumbers);

// 5.
const countries1 = [
  'Finland',
  'Sweden',
  'Finland',
  'Denmark',
  'Sweden',
  'Norway',
  'Iceland',
  'Norway',
];
const setOfCountries1 = new Set(countries1);
console.log(setOfCountries1);

// 6.
const countries = [
  ['Finland', '7'],
  ['Sweden', '6'],
  ['Norway', '6'],
];
const countriesMap = new Map(countries);
console.log(countriesMap);
