// 1.
// function printFullName() {
//   let firstName = 'Wisdom';
//   let space = ' ';
//   let lastName = 'Raphael';
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }
// printFullName();

// 2.
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName('Wisdom', 'Raphael'));

// 3.
function addNumber(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumber(20, 80)); // 100

// 4.
function calcAreaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(calcAreaOfRectangle(10, 4)); //40

// 5.
function calcPerimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(calcPerimeterOfRectangle(10, 4)); // 28

// 6.
function calcVolumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(calcVolumeOfRectPrism(10, 4, 2)); // 80

// 7.
function calcAreaOfCircle(r) {
  const PI = 3.14;
  let area = PI * r * r;
  return area;
}
console.log(calcAreaOfCircle(10)); // 314

// 8.
function calcCircumOfCircle(r) {
  const PI = 3.14;
  let circumference = 2 * PI * r;
  return circumference;
}
console.log(calcCircumOfCircle(10));

// 9.
function calcDensity(mass, volume) {
  let density = mass * volume;
  return density;
}
console.log(calcDensity(20, 10)); // 200

// 10.
function calcSpeed(distance, time) {
  let speed = distance * time;
  return speed;
}
console.log(calcSpeed(20, 4)); // 80m/s

// 11.
function calcWeight(mass) {
  const gravity = 9.81;
  let weight = mass * gravity;
  return weight;
}
console.log(calcWeight(18)); // 176.58

// 12.
function convertCelsiusToFahrenheit(oC) {
  const oF = oC * (9 / 5) + 32;
  return oF;
}
console.log(convertCelsiusToFahrenheit(100)); // 100oC = 212oF

// 13.
function calcBodyMassIndex(weight, height) {
  let bodyMassIndex = weight / height ** 2;
  return bodyMassIndex;
}
console.log(calcBodyMassIndex(70, 1.74)); // 23.1 BMI = normal weight

// 14.
function checkSeason() {
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
  return userInput;
}
console.log(checkSeason());

// 15.
// google this
