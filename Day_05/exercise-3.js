const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());

let minAge = ages[0];
console.log(minAge);

let lastIndex = ages.length - 1;
let maxAge = ages[lastIndex];
console.log(maxAge);

let middleItem1 = ages[4];
let middleItem2 = ages[5];

let medianAge = [middleItem1 + middleItem2] / 2;
console.log(medianAge);

let totalAges =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];
let averageAge = totalAges / ages.length;
console.log(averageAge);

let range = maxAge - minAge;
console.log(range);

console.log(minAge - averageAge);
console.log(maxAge - averageAge);
