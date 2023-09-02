// 1.
let numbers;
for (i = 0; i < 101; i++) {
  numbers = document.createElement('div');
  numbers.className = 'container';
  numbers.textContent = i;
  document.body.appendChild(numbers);
}

const numbersStyle = document.querySelectorAll('div');
numbersStyle.forEach((number, i) => {
  number.style.display = 'inline-block';
  number.style.fontSize = '24px';
  number.style.fontFamily = 'arial';
  number.style.color = '#fff';
  number.style.width = '60px';
  number.style.textAlign = 'center';
  number.style.padding = '4px 6px';
  number.style.margin = '2px 2px';
  if (i % 2 === 0) {
    number.style.backgroundColor = 'green'; // even green
  } else {
    number.style.backgroundColor = 'yellow'; // odd yellow
  }
});
