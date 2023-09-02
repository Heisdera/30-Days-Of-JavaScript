// 1.
console.log(
  "'There is no exercise better for heart than reaching down and lifting people up.'"
); // by John Holmes

// 2.
console.log(
  '"Love is not patronizing and charity isn\'t about pity it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
); // by Mother Teresa

// 3.
let numOne = '10';
let numTwo = 10;

console.log(numOne == numTwo);

// 4.
let numParseFloat = 9.81;
let numInt = 10;
let numEqual = numParseFloat;

console.log(numParseFloat == numInt); // False here

console.log(numParseFloat == numEqual); // now its True

// 5.
let wordOne = 'python';
let wordTwo = 'jargon';

console.log(wordOne.search('on'));
console.log(wordOne.search('on'));

// 6.
let theSentence = 'I hope this course is not full of jargon';

console.log(theSentence.search('jargon'));

// 7.
// let randomNum = Math.random();
// let numBtnZeroAndHundred = randomNum * 101;
// let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred);

// console.log(randomNumRoundToFloor); // random Number Between 0 and 100 inclusively

// 8.
let randomNum = Math.random();
let numBtnFiftyAndHundred = randomNum * 51 + 50;
let randomNumRoundToFloor = Math.floor(numBtnFiftyAndHundred);

console.log(randomNumRoundToFloor); // random Number Between 50 and 100 inclusively

// 9.
// let randomNum = Math.random();
// let numBtnZeroAndHundred = randomNum * 256;
// let randomNumRoundToFloor = Math.floor(numBtnZeroAndHundred);

// console.log(randomNumRoundToFloor); // random Number Between 0 and 255 inclusively

// 10.
console.log('JavaScript');

// 11.
console.log(
  '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'
);

// 12.
let sentenceTwo =
  'You cannot end a sentence with because because because is a conjunction';

console.log(sentenceTwo.substr(31, 23));
