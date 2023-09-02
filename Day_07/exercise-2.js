// 1.
// function solveLinEquation(a, b, c) {
//   let linEquation = a * x + b * y + c;
//   let x = (-b * y - c) / a;
//   let y = (-a * x - c) / b;
//   return y;
// }
// console.log(solveLinEquation(2, 4, 6));
// WRONG - Google this one

// 2.
// function solveQuadEquation(a, b, c) {
//   let quadEquation = ?;
// }
// Google this one too

// 3.

// 4.
function showDateTime() {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = '0' + now.getHours();
  const minute = now.getMinutes();
  let forwardSlash = '/';
  let space = ' ';
  let column = ':';
  const dateTime =
    date +
    forwardSlash +
    month +
    forwardSlash +
    year +
    space +
    hour +
    column +
    minute;
  return dateTime;
}
console.log(showDateTime());
