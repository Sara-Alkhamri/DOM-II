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



//  wheel




//  drag / drop



//  load



//  focus



//  resize



//  scroll


//  select


//  dblclick