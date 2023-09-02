const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

// 8.
let countriesCheck = countries.indexOf('Ethopia');
if (countriesCheck === -1) {
  console.log('not in country list');
} else {
  console.log('ETHIOPIA');
}

console.log(countries.slice(0, 10));

let middleCountry = countries[5];
console.log(middleCountry);

let firstArray = countries.slice(0, 6);
let secondArray = countries.slice(6, 11);
console.log(firstArray);
console.log(secondArray);
