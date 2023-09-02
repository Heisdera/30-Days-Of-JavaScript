// 1. without considering leap year
let userInput3 = prompt('Enter a month');
let month1 =  userInput3.toLowerCase();

switch (month1) {
  case 'january':
    console.log('January has 31 days.');
    break
  case 'february':
    console.log('february has 28 days.');
    break
  case 'march':
    console.log('March has 31 days.');
    break
  case 'april':
    console.log('April has 30 days.');
    break
  case 'may':
    console.log('May has 31 days.');
    break
  case 'june':
    console.log('June has 30 days.');
    break
  case 'july':
    console.log('July has 31 days.');
    break
  case 'august':
    console.log('August has 31 days.');
    break
  case 'september':
    console.log('September has 30 days.');
    break
  case 'october':
    console.log('October has 31 days.');
    break
  case 'november':
    console.log('November has 30 days.');
    break
  case 'december':
    console.log('December has 31 days.');
    break
  default:
    console.log('It is not a month.');
}

// 2. considering leap year
let userInput4 = prompt('Enter a month');
let month2 =  userInput4.toLowerCase();

switch (month2) {
  case 'january':
    console.log('January has 31 days.');
    break
  case 'february':
    console.log('february has 28 days or 29 days in a leap year.');
    break
  case 'march':
    console.log('March has 31 days.');
    break
  case 'april':
    console.log('April has 30 days.');
    break
  case 'may':
    console.log('May has 31 days.');
    break
  case 'june':
    console.log('June has 30 days.');
    break
  case 'july':
    console.log('July has 31 days.');
    break
  case 'august':
    console.log('August has 31 days.');
    break
  case 'september':
    console.log('September has 30 days.');
    break
  case 'october':
    console.log('October has 31 days.');
    break
  case 'november':
    console.log('November has 30 days.');
    break
  case 'december':
    console.log('December has 31 days.');
    break
  default:
    console.log('It is not a month.');
}