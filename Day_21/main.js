//  --- Getting elements by tag name
// const allTitles = document.getElementsByTagName('h1');

// console.log(allTitles);
// console.log(allTitles.length);

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]);
// } // looping through individual items using for loop

//  --- Getting elements by class name
const allTitles = document.getElementsByClassName('title');

console.log(allTitles);
console.log(allTitles.length);

for (i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
} // prints each elements in the HTMLCollection

//  --- Getting element by id
let firstTitle = document.getElementById('first-title');
console.log(firstTitle);

let secondTitle = document.getElementById('second-title');
console.log(secondTitle);

let thirdTitle = document.getElementById('third-title');
console.log(thirdTitle);

//  --- Getting elements by using querySelector methods - selects only the first element if its tag name is
// let firstTitle1 = document.querySelector('h1');
// let firstTitle1 = document.querySelector('#first-title');
let firstTitle1 = document.querySelector('.title');
console.log(firstTitle1);

// querySelectorAll
const allTitles1 = document.querySelectorAll('h1');
console.log(allTitles1.length);
for (let i = 0; i < allTitles1.length; i++) {
  console.log(allTitles1[i]);
}

allTitles1.forEach((title) => console.log(title));

//  --- Adding attribute
// adding attribute using setAttribute
const titles = document.querySelectorAll('h1');
// titles[3].setAttribute('class', 'title');
// titles[3].setAttribute('id', 'fourth-title');
// console.log(titles);

// adding class using classList
titles[3].classList.add('title', 'header-title');
console.log(titles);

// removing class using remove
titles[3].classList.remove('title', 'header-title');
console.log(titles);

//  --- Addng text to HTML element
// adding text content using textContent
const titles1 = document.querySelectorAll('h1');
titles1[3].textContent = 'Fourth Title';

// adding text content using innerHTML --- go to DOM.html file
