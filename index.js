const firstElementEl = document.querySelector(".first-element");
const backEl = document.querySelector(".back");
const btnEl = document.querySelector(".create-profile");
const popUpElement =document.querySelector(".create-profile-form");
const popUpBtnEl = document.querySelector(".pop-up.btn");
const signUpEl = document.querySelector(".sign-up");
const signUpFormEl = document.querySelector(".sign-up-form");

const back1El = document.querySelector(".back1");
const buttonEl = document.querySelector("button");


buttonEl.addEventListener("mouseover",(event)=>{
    const x = event.pageX - buttonEl.offsetLeft;
    const Y = event.pageY - buttonEl.offsettop;
    buttonEl.style.setProperty("--xPos", x + "px");
    buttonEl.style.setProperty("--yPos", Y + "px");
})


signUpEl.addEventListener("click", ()=>{
    firstElementEl.classList.add("active");
    signUpFormEl.classList.remove("active")
})
back1El.addEventListener("click",()=>{
    firstElementEl.classList.remove("active");
    signUpFormEl.classList.add("active")
})

btnEl.addEventListener("click",()=>{
    firstElementEl.classList.add("active");
    popUpElement.classList.remove("active");
});
backEl.addEventListener("click", ()=>{
    firstElementEl.classList.remove("active");
    popUpElement.classList.add("active");
});

