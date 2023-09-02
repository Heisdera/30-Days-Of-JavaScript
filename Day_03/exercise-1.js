// 1.
let firstName = 'Wisdom';
let lastName = 'Raphael';
let country = 'Nigeria';
let city = 'Lagos';
let age = 20;
let isMarried = false;
const year = new Date();

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // object

// 2.
console.log('10' == 10); // true

// 3.
console.log('9.8' == 10); // false

// 4.
console.log('Boolean vaule is either true or false');

/* 5. Truthy Values Statements
-- All numbers both positive and negative are truthy except zero
-- All strings are truthy except empty string ('')
-- The boolean true are truthy values
*/

/* 6. Falsy Values Statements
-- Zero is a falsy value
-- empty strings are falsy values '', "", ``
-- The boolean false are falsy values
*/

/* 7.
  true
  true
  false
  false
  true
  true
  false
  false
  false
  true
  false
*/

// 8.
console.log(4 > 3);

// 9.
console.log(4 >= 3);

// 10.
console.log(4 < 3);

// 11.
console.log(4 <= 3);

// 12.
console.log(4 == 4);

// 13.
console.log(4 === 4);

// 14.
console.log(4 != 4);

// 15.
console.log(4 !== 4);

// 16.
console.log(4 != '4');

// 17.
console.log(4 == '4');

// 18.
console.log(4 === '4');

// 19.
console.log('python'.length > 'jargon'.length);

/* 20.
  true
  false
  true
  true
  false
  true
  true
  false
  true
  true
*/

// 21.
console.log(4 > 3 && 10 < 12);

// 22.
console.log(4 > 3 && 10 > 12);

// 23.
console.log(4 > 3 || 10 < 12);

// 24.
console.log(4 > 3 || 10 > 12);

// 25.
console.log(!(4 > 3));

// 26.
console.log(!(4 < 3));

// 27.
console.log(!false);

// 28.
console.log(!(4 > 3 && 10 < 12));

// 29.
console.log(!(4 > 3 && 10 > 12));

// 30.
console.log(!(4 === '4'));

// 31.
console.log("There is no 'on' in both python and jargon");

// 32.
const now = new Date();

// 33.
console.log(now.getFullYear());

// 34.
console.log(now.getMonth());

// 35.
console.log(now.getDate());

// 36.
console.log(now.getDay());

// 37.
console.log(now.getHours());

// 38..
console.log(now.getMinutes());

// 39.
console.log(now.getTime());
