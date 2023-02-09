console.log("Hello Website");

const listCollection = document.getElementsByTagName('li');
for (list of listCollection){
   console.log(list.innerText);
}

const heading = document.getElementsByTagName('h1');

for (const head of heading){
   console.log(head.innerText);
}

console.log(heading[0].innerText);

console.log(document.getElementsByTagName('ul'));
const ulCollection = document.getElementsByTagName('ul');
console.log(ulCollection[0].innerHTML)
