// Level 1.
function outerFunction() {
  let i = 0;
  function innerFunction() {
    i++;
    return i++;
  }
  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc()); // created an closure of odd numbers
