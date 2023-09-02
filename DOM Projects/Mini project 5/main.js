let body = document.querySelector('body');
let keyName = document.querySelector('.key');
let keyCode = document.querySelector('.key-code');
keyName.innerHTML =
  '<h2>Press any keyboard <span class="green">key</span></h2>';

body.addEventListener('keydown', function (e) {
  keyCode.innerHTML = '';
  keyName.innerHTML = '';
  let keyMessage = `<h2>you pressed <span class="green">${e.key}</span></h2>`;
  keyName.innerHTML = keyMessage;
  let keyCodeMessage = `<h1><span class="green">${e.keyCode}</span></h1>`;
  keyCode.innerHTML = keyCodeMessage;
});
