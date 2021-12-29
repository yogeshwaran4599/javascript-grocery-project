let searchHere=document.querySelector("#search-here");
let cartItem=document.querySelector("#cart-wrapper");
let loginForm=document.querySelector("#log-in-form-wrapper");
let navBar=document.querySelector(".nav-wrapper");

document.querySelector("#click-me").onclick = () => {
   searchHere.classList.toggle('active');
   cartItem.classList.remove('active');
   loginForm.classList.remove('active');
   navBar.classList.remove('active');
}

document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle('active');
    searchHere.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
 }

 document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');
    cartItem.classList.remove('active');
    searchHere.classList.remove('active');
    navBar.classList.remove('active');
 }


 document.querySelector("#bars").onclick = () => {
    navBar.classList.toggle('active');
    searchHere.classList.remove('active');
    cartItem.classList.remove('active');
    loginForm.classList.remove('active');
 }


 //slideshow code using w3 school

 /*  var slideIndex=1;
 showSlides(slideIndex);

 function plusSlides(n) {
    showSlides(slideIndex+=n);
 }

 function showSlides(n) {
    var i;
    var slides =document.getElementsByClassName("slider-img-wrapper");
    if (n>slides.length) 
    {
       slideIndex=1
    }
    for (i=0;i<slides.length;i++)
    {
       slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
 }   */


 let slides=document.getElementsByClassName("slider-img-wrapper");
 let index=0;

 function next(){
    slides[index].classList.remove('active');
    index = (index+1) % slides.length;
    slides[index].classList.add('active');
 }

 function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
}