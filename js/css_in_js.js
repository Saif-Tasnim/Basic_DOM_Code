const sectionList = document.querySelectorAll('section');
console.log(sectionList);

for(const section of sectionList){
    section.style.backgroundColor = "blue";
    section.style.marginBottom = "10px";
    section.style.border = "2px solid gray";
    section.style.borderRadius = "20px";
    section.style.padding = "20px";

    if(section === sectionList[1]){
        const class_name = document.getElementById("fruits-title");
        class_name.classList.add('section1-font');
    }
}
