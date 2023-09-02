const body = document.querySelector('body');
const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('.warning-message');
const div = document.querySelector('.container');

button.addEventListener('click', function () {
  let val = input.value;
  if (typeof Number(val) === 'number' && Number(val) > 0) {
    div.innerHTML = '';
    input.value = '';
    message.innerHTML = '';
    for (i = 0; i <= val; i++) {
      if (i % 2 === 0) {
        let box = document.createElement('div');
        box.textContent = i;
        box.style.width = '140px';
        box.style.padding = '16px';
        box.style.fontSize = '40px';
        box.style.backgroundColor = '#1fcc1f';
        box.style.color = '#fff';
        box.style.margin = '3px';
        div.appendChild(box);
      } else {
        let box = document.createElement('div');
        box.textContent = i;
        box.style.width = '140px';
        box.style.padding = '16px';
        box.style.fontSize = '40px';
        box.style.backgroundColor = '#fdec0c';
        box.style.color = '#fff';
        box.style.margin = '3px';
        div.appendChild(box);
      }
    }
  } else if (typeof Number(val) === 'number' && Number(val) === 0) {
    div.innerHTML = '';
    input.value = '';
    message.innerHTML = '';
    message.textContent =
      'Enter number greater than 0 on input field to generate numbers';
    message.style.color = 'red';
    message.style.paddingLeft = '4px';
  } else {
    div.innerHTML = '';
    input.value = '';
    message.innerHTML = '';
    message.textContent = 'Input value must be a number';
    message.style.color = 'red';
    message.style.paddingLeft = '4px';
  }
});
