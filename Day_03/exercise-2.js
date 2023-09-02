// 1.
let base = prompt('Enter base', '20');
let height = prompt('Enter height', '10');
let area = 0.5 * base * height;

console.log(base);
console.log(height);
console.log(area);

// 2.

// before when I knew nothing about parseInt the result was a string of 543
// let sideA = prompt('Enter side a', 5);
// let sideB = prompt('Enter side b', 4);
// let sideC = prompt('Enter side c', 3);

// after 2months of learning and building John Smilga's course projects, on the night of pushing to github I added parseInt
let sideA = parseInt(prompt('Enter side a', 5));
let sideB = parseInt(prompt('Enter side b', 4));
let sideC = parseInt(prompt('Enter side c', 3));

let perimeter = sideA + sideB + sideC; // result = 12

// console.log(`The perimeter of the triangle is ${perimeter}`)
console.log(perimeter);
