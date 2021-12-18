// window.addEventListener("scroll", ()=>{
//    let navbar = document.getElementById("navbar");
//    navbar.classList.toggle("sticky");
// });
$(document).ready(function(){
   
   //toggle menu/navbar script
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
   });
});

// scroll menu
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "100px";
//   } else {
//     document.getElementById("navbar").style.top = "-10px";
//   }
// }