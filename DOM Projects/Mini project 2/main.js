// Even and Odd numbers only
let body = document.querySelector('body');
let div = document.querySelector('.container');
for (i = 0; i <= 101; i++) {
  if (i % 2 == 0) {
    let container = document.createElement('div');
    container.textContent = i;
    container.style.width = '140px';
    container.style.padding = '16px';
    container.style.fontSize = '40px';
    container.style.color = '#fff';
    container.style.backgroundColor = '#1fcc1f';
    container.style.margin = '3px';
    div.appendChild(container);
  } else {
    let container = document.createElement('div');
    container.textContent = i;
    container.style.width = '140px';
    container.style.padding = '16px';
    container.style.fontSize = '40px';
    container.style.color = '#fff';
    container.style.backgroundColor = '#fdec0c';
    container.style.margin = '3px';
    div.appendChild(container);
  }
}
div.style.margin = '10px 0';
