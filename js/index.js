// Your code goes here
//  scroll
window.addEventListener("scroll", (e) => {
    console.log("Scrolling!")
})

//  load
window.addEventListener("load", (e) => {
    console.log("Loading..")
    
})


// mouseover
const nav = document.querySelectorAll(".nav-link");
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", (e) => {
        nav[i].style.color = "#17A2B8";
        nav[i].style.fontSize = "2rem";
        event.preventDefault();
    })
}

//mouseout

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("mouseout", (e) => {
        nav[i].style.color = "black";
        nav[i].style.fontSize = " 1.5rem";
    }) 
}

//  dblclick
const mainNav = document.querySelector('.nav-container')
mainNav.addEventListener('dblclick', function(e){
    mainNav.style.backgroundColor = 'lightgray';
})

//  keydown
const goImg = document.querySelector(".intro img");
goImg.addEventListener("click", function(e) {
    goImg.style.display = "none";
})


//  wheel
const logo = document.querySelector(".logo-heading");
logo.addEventListener("wheel", function() {
    logo.style.fontSize = "5rem";
    logo.style.color = "#17A2B8";
}) 


//  resize
window.addEventListener("resize", (e) => {
    alert("Resizing!");
})


//  select
const par = document.querySelectorAll(".text-content");
par.forEach(function(i){
    i.addEventListener("click", function(){
      //console.log("test");
      event.target.style.fontSize = "2rem";
      event.target.style.color = "#17A2B8";
    })
})

