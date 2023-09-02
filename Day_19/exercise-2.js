// Level 2
function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }
  function plusTwo() {
    count++ + count++;
    return count;
  }
  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
    plusTwo: plusTwo(),
  };
}
const innerFunc = outerFunction();

console.log(innerFunc.plusOne);
console.log(innerFunc.minusOne);
console.log(innerFunc.plusTwo);
