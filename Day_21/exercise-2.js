// 1 & 2
//  --- font-family, font-size, border, background-color
const paragraphStyle = document.querySelectorAll('p');
paragraphStyle.forEach((paragraph, i) => {
  paragraph.style.fontFamily = 'Arial';
  paragraph.style.fontSize = '20px';
  paragraph.style.border = '3px solid #aaa';
  paragraph.style.backgroundColor = '#fff';

  //  --- Color
  if (i % 2 === 0) {
    paragraph.style.color = 'green';
  } else {
    paragraph.style.color = 'red';
  }
});

// 3.
paragraphStyle[0].textContent = 'My name is Raphael Wisdom.';
paragraphStyle[1].textContent = "I'm from Nigeria.";
paragraphStyle[2].textContent = 'I live in Lagos.';
paragraphStyle[3].textContent =
  'My carrer path is becoming a Software Engineer.';

// id and class already assigned to each paragraph in exercise-1.js
