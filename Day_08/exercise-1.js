// 1.
// const dog = {};

// 2.
// console.log(dog);

// 3.
const dog = {
  name: 'Spiky',
  legs: 'four',
  color: 'brown',
  age: 5,
  bark: function () {
    return 'woof woof';
  },
};
console.log(dog);
console.log(dog.bark());

// 4.
const values = Object.values(dog);
console.log(values);

// 5.
dog.breed = 'bulldog';
dog.getDogInfo = function () {
  let bark = this.bark();
  let statement = `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs. \nHe is ${this.age} years old and loves to bark ${bark}.`;
  return statement;
};

console.log(dog);
console.log(dog.getDogInfo());
