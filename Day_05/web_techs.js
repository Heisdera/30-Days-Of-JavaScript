const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

// 9.
let webTechsCheck = webTechs.indexOf('Sass');
if (webTechsCheck === -1) {
  webTechs.unshift('Sass');
  console.log(webTechs);
} else {
  console.log('Sass is a CSS preprocess');
}
