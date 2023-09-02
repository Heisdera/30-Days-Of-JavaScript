// 1.
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2.
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

// 3.
// for (let i = 0; i <= 'n'; i++) {
//   console.log(i);
// }

// 4.
console.log('#\n##\n###\n####\n#####\n######\n#######');

// 5.
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
// while loop
// i = 0;
// while (i <= 10) {
//   console.log(`${i} * ${i} = ${i * i}`);
//   i++
// }

// 6.
// for loop
for (let x = 0; x <= 10; x++) {
  console.log(`${x} ${x ** 2} ${x ** 3}`);
}
// while loop
// x = 0;
// while (x <= 10) {
//   console.log(`${x} ${x ** 2} ${x ** 3}`);
//   x++
// }

// 7.
// even numbers 0 - 100
for (let i = 0; i <= 100; i++) {
  console.log(`${i}: ${i % 2 == 0}`);
}

// 8.
// odd numbers 0 - 100
for (let i = 0; i <= 100; i++) {
  console.log(`${i}: ${i % 2 == 1}`);
}

// 9.
// prime numbers 0 - 100

// 10.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);
