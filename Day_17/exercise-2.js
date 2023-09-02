// Level 2.
const student = {
  firstName: 'Wisdom',
  lastName: 'Raphael',
  age: 20,
  skills: ['HTML', 'CSS', 'JS'],
  enrolled: ['June', 2023],
};

const studentJSON = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentJSON);
console.log(localStorage);
