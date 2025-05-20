'use script';


// navbar toggle

const navOpenBtn=document.querySelector("[data-nav-open-btn]");
const navbar= document.querySelector("[data-navbar]");
const navCloseBtn= document.querySelector("[data-nav-close-btn]");

const navElems= [navOpenBtn,navCloseBtn];

for(let i=0;i<navElems.length;i++){
    navElems[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
    });
}



//Search toggle

const searchContainer= document.querySelector("[data-search-wrapper]");
const searchBtn=document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click",function(){
    searchContainer.classList.toggle("active");
});