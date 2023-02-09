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


// Query selector
console.log("---------------------------------------------------")
console.log("                Query Selector")
console.log("---------------------------------------------------")

console.log(document.querySelector("#fruits-title")); // only for first item
console.log(document.querySelector(".place-name"));  // only for first item

const class_selector = document.querySelectorAll('.place-name');
console.log(class_selector)
const id_selector = document.querySelectorAll('#fruits-title');
console.log(id_selector)

console.log("---------------------------------------------------")
console.log("                Inside In HTML File Js Start")
console.log("---------------------------------------------------")