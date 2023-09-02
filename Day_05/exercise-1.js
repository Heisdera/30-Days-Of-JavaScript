// 1.
const emptyArray = [];

// 2.
const arr = [1, 2, 3, 4, 5, 6, 7];

// 3.
console.log(arr.length);

// 4.
let firstArr = arr[0];
console.log(firstArr);

let middleArr = arr[3];
console.log(middleArr);

lastIndex = arr.length - 1;
let lastArr = arr[lastIndex];
console.log(lastArr);

// 5.
let mixedDataTypes = ['Raphael', 'Wisdom', 20, 70.2, 'banana', true];
console.log(mixedDataTypes.length);

// 6.
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// 7.
console.log(itCompanies);

// 8.
console.log(itCompanies.length);

// 9.
let firstItCompany = itCompanies[0];
console.log(firstItCompany);

let middleItCompany = itCompanies[3];
console.log(middleItCompany);

lastIndex = itCompanies.length - 1;
let lastItCompany = itCompanies[lastIndex];
console.log(lastItCompany);

// 10.
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11.
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12.
let sentence = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'and',
  'Amazon',
  'are',
  'big',
  'IT',
  'companies.',
];
console.log(sentence.join(' '));

// 13.
let index = itCompanies.indexOf('Facebook');
if (index === -1) {
  console.log('A company not found');
} else {
  console.log('Facebook');
}

// 14.
console.log(itCompanies.slice(0, 3));

// 15.
console.log(itCompanies.sort());

// 16.
console.log(itCompanies.reverse());

// 17.
console.log(itCompanies.slice(0, 3));

// 18.
console.log(itCompanies.slice(4, 7));

// 19.
console.log(itCompanies.slice(3, 4));

// 20.
console.log(itCompanies.shift());

// 21.
console.log(itCompanies.splice(2, 2));

// 22.
console.log(itCompanies.pop());

// 23.
console.log(itCompanies.splice());
