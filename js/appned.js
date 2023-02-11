// where to add
const see = document.getElementById('fruits-list');

// what to add
const new_li = document.createElement('li');
new_li.innerText = "This list is created by js language";

// adding to parent
see.appendChild(new_li);


const para = document.getElementById('fruits');

const new_para = document.createElement('p');
new_para.innerText = "This is paragraph created by js";
new_para.style.fontSize= "18px";
new_para.style.color= "red";

para.appendChild(new_para);

const new_ul = document.createElement('ul');
new_ul.innerHTML = `
<li> This is list1 created by js language (DOM) </li>
<li> This is list2 created by js language (DOM) </li>
<li> This is list3 created by js language (DOM) </li>
`

para.appendChild(new_ul);


