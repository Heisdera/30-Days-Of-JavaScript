// 1.
let sentenceThree =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let patternOne = /love/gi;

console.log(sentenceThree.match(patternOne)); // (3) ['Love', 'love', 'love']

// 2.
let sentenceFour =
  'You cannot end a sentence with because because because is a conjunction';
let patternTwo = /because/gi;

console.log(sentenceFour.match(patternTwo)); // (3) ['because', 'because', 'because']

// 3.
const sentenceFive =
  'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher? This 30 Days of JavaScript is also the result of love of teaching'; // Google this question 3 later

// 4.
let income =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regEx = /\d+/g;

console.log(income.match(regEx)); // Also google this one
