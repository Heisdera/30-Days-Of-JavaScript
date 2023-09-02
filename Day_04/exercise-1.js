// 1.
let userAge = prompt('Enter your age');

switch (true) {
  case userAge == 18:
    console.log('You are old enough to drive.');
    break;
  case userAge > 18:
    console.log('You are old enough to drive.');
    break;
  case userAge == 17:
    console.log('You are left with 1 year to drive.');
    break;
  case userAge == 16:
    console.log('You are left with 2 years to drive.');
    break;
  case userAge == 15:
    console.log('You are left with 3 years to drive.');
    break;
  case userAge == 14:
    console.log('You are left with 4 years to drive.');
    break;
  case userAge == 13:
    console.log('You are left with 5 years to drive.');
    break;
  case userAge == 12:
    console.log('You are left with 6 years to drive.');
    break;
  case userAge == 11:
    console.log('You are left with 7 years to drive.');
    break;
  case userAge == 10:
    console.log('You are left with 8 years to drive.');
    break;
  case userAge == 9:
    console.log('You are left with 9 years to drive.');
    break;
  case userAge == 8:
    console.log('You are left with 10 years to drive.');
    break;
  case userAge == 7:
    console.log('You are left with 11 years to drive.');
    break;
  case userAge == 6:
    console.log('You are left with 12 years to drive.');
    break;
  case userAge == 5:
    console.log('You are left with 13 years to drive.');
    break;
  case userAge == 4:
    console.log('You are left with 14 years to drive.');
    break;
  case userAge == 3:
    console.log('You are left with 15 years to drive.');
    break;
  case userAge == 2:
    console.log('You are left with 16 years to drive.');
    break;
  case userAge == 1:
    console.log('You are left with 17 years to drive.');
    break;
  default:
    console.log('You are not old enough to drive.');
}

// 2.
let AgeInput = prompt('Enter your age');

if (AgeInput > 20) {
  console.log('You are older than me.');
} else {
  console.log('I am older than you.');
}

// 3.
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}.`);
} else {
  console.log(`${a} is less than ${b}.`);
}

a > b
  ? console.log(`${a} is greater than ${b}.`)
  : console.log(`${a} is less than ${b}.`);

// 4.
let number = prompt('Enter a Number');

if (number % 2 == 0) {
  console.log('The number is even.');
} else {
  console.log('The number is odd.');
}

let result =
  number % 2 == 0
    ? console.log('The number is even.')
    : console.log('The number is odd.');
