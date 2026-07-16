// ===============================
// Mobile Navigation
// ===============================


const menuToggle =
document.querySelector(".menu-toggle");


const navMenu =
document.querySelector("#nav-menu");



menuToggle.addEventListener(
"click",
()=>{


navMenu.classList.toggle(
"active"
);


});





// ===============================
// Scroll Animation
// ===============================


const reveals =
document.querySelectorAll(".reveal");



window.addEventListener(
"scroll",
()=>{


for(let i=0;i<reveals.length;i++){


let windowHeight =
window.innerHeight;


let elementTop =
reveals[i].getBoundingClientRect()
.top;


let elementVisible=100;



if(elementTop <
windowHeight-elementVisible)
{

reveals[i]
.classList.add("active");


}


}



});





// ===============================
// Dark Mode
// ===============================


const themeButton =
document.querySelector("#theme-toggle");



themeButton.addEventListener(
"click",
()=>{


document.body
.classList.toggle("dark");



if(document.body.classList.contains("dark"))
{

themeButton.innerHTML="☀️";

}

else{

themeButton.innerHTML="🌙";

}



});