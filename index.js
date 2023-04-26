// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


window.addEventListener('scroll', () => {
    document.querySelector('logo').classList.toggle('window-scroll', window.scrollY > 0)
})

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");



menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const close = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', close)



// import {Tutorials} from "./Data/Tutorial.js"
//section mobile btn
let MenuBtnMobileE1 = document.getElementById("Menu-btn-Mobile")
let MenuBtnMobileE1OpenBoolen = false
let mobileMenuNavE1 = document.getElementById("mobile-menu-nav")
MenuBtnMobileE1.addEventListener("click",()=>{
    if(MenuBtnMobileE1OpenBoolen){
        mobileMenuNavE1.style.display = "none"
        MenuBtnMobileE1OpenBoolen = false
    }
    else{
        mobileMenuNavE1.style.display = "block"
        MenuBtnMobileE1OpenBoolen = true
    }
})

let mobileNavcloseE1 = document.getElementById("mobile-Nav-close")

mobileNavcloseE1.addEventListener("click",()=>{
    mobileMenuNavE1.style.display = "none"
    MenuBtnMobileE1OpenBoolen = false
})



// Tutorial-btn
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialE1 = document.getElementById("Tutorial-btn")
const nestedNavigationCloserBtn = document.getElementById("nested-navigation-close-btn")

TutorialE1.addEventListener("click",toggleTutorial)
nestedNavigationCloserBtn.addEventListener("click",toggleTutorial)
function toggleTutorial(){
    TutorialE1.classList.toggle("black")
    TutorialE1.classList.toggle("white")
    NestedNavigationContainer.classList.toggle("nested-navigation-hidden")
}
