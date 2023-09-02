// 1.
// --- by querySelector(tagname)
const paragraph = document.querySelector('p');
console.log(paragraph);

// --- by tag name
// const paragraph = document.getElementsByTagName('p');
// console.log(paragraph[0]); // print first paragraph

// 2.
// --- by document.querySelector('#id')
const paragraph1 = document.querySelector('#first-paragraph');
console.log(paragraph1);

const paragraph2 = document.querySelector('#second-paragraph');
console.log(paragraph2);

const paragraph3 = document.querySelector('#third-paragraph');
console.log(paragraph3);

// --- by their id
const firstParagraph = document.getElementById('first-paragraph');
console.log(firstParagraph);

const secondParagraph = document.getElementById('second-paragraph');
console.log(secondParagraph);

const thirdParagraph = document.getElementById('third-paragraph');
console.log(thirdParagraph);

// 3.
// --- as a nodeList by using document.querySelectorAll(tagname)
const nodeList = document.querySelectorAll('p');
console.log(nodeList);

// --- as a nodeList by using their tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// 4.
for (i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i]);
}

// 5.
const paragraph4 = document.querySelectorAll('p');
paragraph4[3].textContent = 'Fourth-paragraph';

// 6.
const paragraphsAttributes = document.querySelectorAll('p');
//  --- setAttribute method
paragraphsAttributes[0].setAttribute('class', 'paragraph');
paragraphsAttributes[0].setAttribute('id', 'first-paragraph');

paragraphsAttributes[1].setAttribute('class', 'paragraph');
paragraphsAttributes[1].setAttribute('id', 'second-paragraph');

paragraphsAttributes[2].setAttribute('class', 'paragraph');
paragraphsAttributes[2].setAttribute('id', 'third-paragraph');

paragraphsAttributes[3].setAttribute('class', 'paragraph');
paragraphsAttributes[3].setAttribute('id', 'fourth-paragraph');
console.log(paragraphsAttributes);

//  --- normal object setting method
/*
paragraphsAttributes[0].className = 'paragraph';
paragraphsAttributes[0].id = 'first-paragraph';

paragraphsAttributes[1].className = 'paragraph';
paragraphsAttributes[1].id = 'second-paragraph';

paragraphsAttributes[2].className = 'paragraph';
paragraphsAttributes[2].id = 'third-paragraph';

paragraphsAttributes[3].className = 'paragraph';
paragraphsAttributes[3].id = 'fourth-paragraph';
console.log(paragraphsAttributes);
*/
