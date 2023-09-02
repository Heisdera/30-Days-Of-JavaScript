const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const A = new Set(a);
const B = new Set(b);

// 1.
const c = [...a, ...b];
const C = new Set(c);
console.log(C);

// 2.
const d = a.filter((num) => B.has(num));
const D = new Set(d);
console.log(D);

// 3.
const e = a.filter((num) => !B.has(num));
const E = new Set(e);
console.log(E);
