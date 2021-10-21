console.log('Hello World!');
var buttonToOpenMenubar = document.getElementById("menubar_open");
var buttonToCloseMenubar = document.getElementById("menubar_close");
var menubar = document.getElementById("navbar");


// function open menu bar , for which I will use event listener
buttonToOpenMenubar.addEventListener("click" , ()=>{
  menubar.style.display="flex";
})


//functions to close the menubar
buttonToCloseMenubar.addEventListener("click", () =>{
  menubar.style.display="none";
})