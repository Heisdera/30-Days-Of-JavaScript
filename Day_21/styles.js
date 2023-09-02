//  --- Adding Style ---  //
// Adding Style Color
/*
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px'; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green';
  } else {
    title.style.color = 'red';
  }
}); 
*/

// Adding Style Background Color
/*
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px';
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green';
  } else {
    title.style.backgroundColor = 'red';
  }
});
*/

// Adding Style Font Size
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px';
  if (i % 2 === 0) {
    title.style.fontSize = '20px';
  } else {
    title.style.fontSize = '30px';
  }
});
