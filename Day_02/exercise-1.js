// 1.
let challenge = '30 Days Of JavaScript';

// 2.
console.log(challenge); // 30 Days Of JavaScript

// 3.
console.log(challenge.length); // 21

// 4.
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT

// 5.
console.log(challenge.toLowerCase()); // 30 days of javascript

// 6.
console.log(challenge.substr(3, 4)); // Days
// OR
console.log(challenge.substring(3, 7)); // Days

// 7.
console.log(challenge.substr(3, 18)); // Days Of JavaScript
// OR
console.log(challenge.substring(3, 21)); // Days Of JavaScript

// 8.
console.log(challenge.includes('Script')); // true

// 9.
console.log(challenge.split());

// 10.
console.log(challenge.split(' '));

// 11.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(','));

// 12.
console.log(challenge.replace('JavaScript', 'Python'));

// 13.
console.log(challenge.charAt(15));

// 14.
console.log(challenge.charCodeAt('J'));

// 15.
console.log(challenge.indexOf('a'));

// 16.
console.log(challenge.lastIndexOf('a'));

// 17.
let sentence =
  'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18.
console.log(sentence.lastIndexOf('because'));

// 19.
console.log(sentence.search('because'));

// 20.
let trimChallenge = ' 30 Days Of JavaScript ';
console.log(trimChallenge.trim(' '));

// 21.
console.log(challenge.startsWith('30'));

// 22.
console.log(challenge.endsWith('JavaScript'));

// 23.
console.log(challenge.match('a'));

// 24.
let subString = '30 Days Of';
console.log(subString.concat(' JavaScript'));

// 25.
console.log(challenge.repeat('2'));
