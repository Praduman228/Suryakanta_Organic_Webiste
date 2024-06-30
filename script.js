// js for navbar
const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 
// js for footer section
document.addEventListener("DOMContentLoaded", function() {
   const btn = document.querySelector('.contact-btn');

   btn.addEventListener('click', function(e) {
       e.preventDefault();
       alert('Your message has been sent!');
   });
});