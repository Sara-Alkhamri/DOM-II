// Your code goes here


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


//  keydown
// const img = document.querySelector("img-content");
// window.addEventListener("keydown", function(e) {
//     console.log("Image clicked")
//     event.preventDefault();
// })

// const imgCont = document.querySelector("img-content");
// imgCont.addEventListener("keydown", (e) => {
//     console.log("Image Clicked");
// })

// const logo = document.querySelector("logo-heading");
// logo.addEventListener("click", function() {
//     console.log("Logo Clicked!")
// })

//  wheel




//  drag / drop



//  load
window.addEventListener("load", (e) => {
    console.log("Loading..")
})


//  focus



//  resize



//  scroll
window.addEventListener("scroll", (e) => {
    console.log("Scrolling!")
})

//  select
// const par = document.querySelectorAll("text-content");
// par.forEach(function(i){
//     i.addEventListener("select", function(e){
//         style.textColor = "17A2B8"
//     })
// })

//  dblclick
const mainNav = document.querySelector('.nav-container')
mainNav.addEventListener('dblclick', function(event){
    mainNav.style.backgroundColor = 'lightgray';
})