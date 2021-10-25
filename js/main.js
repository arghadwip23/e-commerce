//import modules from other js filles
import { animations } from "../js/firstHeading.js";
import { isScrolledIntoView } from "../js/isVisible.js";

console.log('Hello World!');



//select the DOM element
var buttonToOpenMenubar = document.getElementById("menubar_open");
var buttonToCloseMenubar = document.getElementById("menubar_close");
var menubar = document.getElementById("navbar");
var screen = document.getElementById("fs");

animations();
document.addEventListener("scroll" ,  ()=>{
  if (isScrolledIntoView(screen)) {
    animations();
  }
})





// function open menu bar , for which I will use event listener
buttonToOpenMenubar.addEventListener("click" , ()=>{
  menubar.style.display="flex";
})


//functions to close the menubar
buttonToCloseMenubar.addEventListener("click", () =>{
  menubar.style.display="none";
})