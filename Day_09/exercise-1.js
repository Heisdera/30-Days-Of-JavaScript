const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

const names = ['Wisdom', 'Raphael', 'Chidera', 'Dera'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1.
// forEach - iterates elements in an array
// map - iterates and modifies the elements in an array
// filter - filters out items which satisfies the filtering conditions and return a new array
// reduce - takes a call back function which takes accumulator, current and optional initial value as a parameter and returns a single value

// 2.
let sum = 0;
const numbas = [1, 2, 3, 4, 5];
numbas.forEach((num) => (sum += num));
console.log(sum);

const numbasSquare = numbas.map((num) => num * num);
console.log(numbasSquare);

const numberEqualsFive = numbas.filter((number) => number === 5);
console.log(numberEqualsFive);

const addNumbers = numbas.reduce((acc, cur) => acc + cur, 0);
console.log(addNumbers);

// 3.
countries.forEach((country) => console.log(country));

// 4.
names.forEach((name) => console.log(name));

// 5.
numbers.forEach((number) => console.log(number));

// 6.
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

// 7.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// 8.
const numbersSquare = numbers.map((number) => number ** 2);
console.log(numbersSquare);

// 9.
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

// 10.
const mapProductsToPrices = products.map((product, price) =>
  console.log(product, price)
);

// 11.
const countriesWithLand = countries.filter((country) =>
  country.includes('land')
);
console.log(countriesWithLand);

// 12.
const countriesWithSixCharacters = countries.filter(
  (country) => country.length === 6
);
console.log(countriesWithSixCharacters);

// 13.
const countriesWithSixAndMoreLetters = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesWithSixAndMoreLetters);

// 14.
const countriesStartsWithE = countries.filter((country) =>
  country.startsWith('E')
);
console.log(countriesStartsWithE);

// 17.
const sum1 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// 20.
const areSomeNamesGreaterThanSeven = names.some((name) => name.length > 7);
console.log(areSomeNamesGreaterThanSeven);

// 21.
const countriesContainLand = countries.every((country) =>
  country.includes('land')
);
console.log(countriesContainLand);

// 23.
const firstCountryWithSixLetters = countries.find(
  (country) => country.length === 6
);
console.log(firstCountryWithSixLetters);

// 24.
const positionFirstCountryWithSixLetters = countries.findIndex(
  (country) => country.length === 6
);
console.log(positionFirstCountryWithSixLetters);

// 25.
const positionOfNorway = countries.findIndex((country) => country === 'Norway');
console.log(positionOfNorway);

// 26.
const positionOfRussia = countries.findIndex((country) => country === 'Russia');
console.log(positionOfRussia);
