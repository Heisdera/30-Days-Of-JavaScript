// 1.
// countries.js and web_techs.js files created

// 2.
let text =
  'I love learning and studying, I will keep learning HTML, CSS, JS, React, Python.';

console.log(text.split(' '));

let word = text.split(' ');
console.log(word.length);

// 3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 4.
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// 5.
shoppingCart.push('Sugar');
console.log(shoppingCart);

// 6.
// I'm not allergic to honey

// 7.
shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);

// 8.
// in countries.js

// 9.
// in web_techs.js

// 10.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];

console.log(fullStack);
