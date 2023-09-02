// 1.
// let score = prompt('Enter score',) // Google this

// let randomNum = Math.random();
// let numBtn80And100 = (randomNum * 21) + 80;
// let randomNumRoundToFloor = Math.floor(numBtn80And100);

// console.log(randomNumRoundToFloor);

// 2.
let userInput = prompt('Enter a month');
let month = userInput.toLowerCase();

switch (month) {
  case 'september':
    console.log('Autumn');
    break;
  case 'october':
    console.log('Autumn');
    break;
  case 'november':
    console.log('Autumn');
    break;
  case 'December':
    console.log('Winter');
    break;
  case 'january':
    console.log('Winter');
    break;
  case 'february':
    console.log('Winter');
    break;
  case 'march':
    console.log('Spring');
    break;
  case 'april':
    console.log('Spring');
    break;
  case 'may':
    console.log('Spring');
    break;
  case 'june':
    console.log('Summer');
    break;
  case 'july':
    console.log('Summer');
    break;
  case 'august':
    console.log('Summer');
    break;
  default:
    console.log('It is not a month.');
}

// 12.
let userInput2 = prompt('Enter a day');
let day = userInput2.toLowerCase();

switch (day) {
  case 'sunday':
    console.log('Sunday is a weekend.');
    break;
  case 'monday':
    console.log('Monday is a working day.');
    break;
  case 'tuesday':
    console.log('Tuesday is a working day.');
    break;
  case 'wednesday':
    console.log('Wednesday is a working day.');
    break;
  case 'thursday':
    console.log('Thursday is a working day.');
    break;
  case 'friday':
    console.log('Friday is a working day.');
    break;
  case 'saturday':
    console.log('Saturday is a weekend.');
    break;
  default:
    console.log('It is not a week day');
}
