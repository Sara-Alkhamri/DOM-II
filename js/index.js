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
    nav[i].addEventListener("mouseover", (e) => {
        nav[i].style.color = "#17A2B8";
        nav[i].style.fontSize = "2rem";
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
goImg.addEventListener("blclick", function(e) {
    console.log("Image clicked");
})


const logo = document.querySelector(".logo-heading");
logo.addEventListener("click", function() {
    console.log("Logo Clicked!")
})

//  wheel
// let logoText = document.querySelector(".logo-heading");
// logoText.addEventListener("wheel", function(event) {
//     // logoText.style.fontSize = "3rem";
//     logoText.style.color = "17A2B8";
    
    
// }) 




//  drag / drop



//  focus



//  resize



//  select
// const par = document.querySelectorAll("text-content");
// par.forEach(function(i){
//     i.addEventListener("select", function(e){
//         style.textColor = "17A2B8"
//     })
// })

