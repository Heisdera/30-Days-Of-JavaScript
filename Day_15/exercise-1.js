class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.breed = [];
  }

  // get method
  get getBreed() {
    return this.breed;
  }
  // set method
  set setBreed(breed) {
    return this.breed.push(breed);
  }

  static favoriteBreed() {
    const breeds = ['Husky', 'German-shepherd', 'Pitbull'];
    const index = Math.floor(Math.random() * breeds.length);
    return breeds[index];
  }
}

// const dog = new Animal('Bingo', 5, 'brown', 'four')
// const cat = new Animal('kitty', 3, 'white', 'four')

// dog.setFood = 'Boiled-egg'
// dog.setFood = 'Milk'
// dog.setFood = 'beef'

// console.log(dog)
// console.log(cat)
// console.log(Animal.favoriteBreed())

// Dog
class Dog extends Animal {
  saySomething() {
    return 'I am a dog, a child of Animal class';
  }
}

const dog = new Dog('Bingo', 5, 'brown', 'four');

console.log(dog);
console.log(dog.saySomething());

// Cat
class Cat extends Animal {
  saySomething() {
    return 'I am a cat, a child of Animal class';
  }
}

const cat = new Cat('kitty', 3, 'white', 'four');

console.log(cat);
console.log(cat.saySomething());
