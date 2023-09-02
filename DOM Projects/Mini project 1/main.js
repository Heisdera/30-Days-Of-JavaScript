const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

// body styling
body.style.textAlign = 'center';
body.style.fontFamily = 'sans-serif';
body.style.margin = '0 auto';
body.style.padding = '0';
body.style.maxWidth = '1110px';
body.style.overflow = 'hidden';

// h1 year styling
h1.innerHTML = `Raphael Wisdom challenges in <span id='year'>2023<span>`;
let year = document.querySelector('#year');
let color;
const randomColor = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  year.style.color = color;
};
year.style.fontSize = '60px';
setInterval(randomColor, 1000);

// h2 text-decoration
h2.style.textDecoration = 'underline';

//  --- Paragraph content
// static date and time - Month date, Year time(hours:minute:seconds)
function showDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = 'June';
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours % 12 || 12;

  // if (hours < 10) {
  //   hours = '0' + hours;
  // }
  // if (minutes < 10) {
  //   minutes = '0' + minutes;
  // }
  // if (seconds < 10) {
  //   seconds = '0' + seconds;
  // }

  // let monthDateYear = `${month} ${date}, ${year}`;
  // let time = `${hours}:${minutes}:${seconds}`;
  // let fullDate = `${monthDateYear} ${time}`;
  // return fullDate;

  setTimeout(showDateTime), 1000;
  const todaysDate = `
  ${month} ${date}, ${year} ${addZero(hours)}:${addZero(minutes)}:${addZero(
    seconds
  )}`;

  return (p.innerHTML = todaysDate);
}

showDateTime();

// Adding Zeros advanced
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// setting paragraph attribute
p.setAttribute('id', '#date');
p.innerHTML = showDateTime();
p.style.width = '200px';
p.style.padding = '10px';
p.style.margin = '0 auto';
p.style.fontSize = '18px';

// date paragraph random background color
const randomColor2 = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  p.style.backgroundColor = color;
};
setInterval(randomColor2, 1000);

// list style
lists.forEach((li) => {
  li.style.listStyle = 'none';
  li.style.border = '2px solid #fff';
  li.style.textAlign = 'left';
  li.style.margin = '0 auto';
  li.style.padding = '15px';
  li.style.width = '650px';
  if (li.textContent.toLowerCase().includes('done')) {
    li.style.backgroundColor = 'lightGreen';
  } else if (li.textContent.toLowerCase().includes('ongoing')) {
    li.style.backgroundColor = 'yellow';
  } else {
    li.style.background = 'coral'; // used coral instead of red
  }
});

// ul
ul.style.padding = '0';
