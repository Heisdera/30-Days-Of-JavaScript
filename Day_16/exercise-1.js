// Level 1
// 1.
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];

const txt = JSON.stringify(skills, undefined, 4);
console.log(txt);

// 2.
let age = 250;
const ageJson = JSON.stringify(age);
console.log(ageJson);

// 3.
let isMarried = true;
const isMarriedJson = JSON.stringify(isMarried);
console.log(isMarriedJson);

// 4.
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};

const txt1 = JSON.stringify(student, undefined, 4);
console.log(txt1);
