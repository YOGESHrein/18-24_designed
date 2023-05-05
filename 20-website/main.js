$(document).ready(function ($){
    "use strict";


    // jQuery(".filters").on("click", function () {
    //     jQuery("#menu-dish").removeClass("bydefault_show");
    // });
    // $(function () {
    //     var filterList = {
    //         init: function () {
    //             $("#menu-dish").mixItUp({
    //                 selectors: {
    //                     target: ".dish-box-wp",
    //                     filter: ".filter",
    //                 },
    //                 animation: {
    //                     effects: "fade",
    //                     easing: "ease-in-out",
    //                 },
    //                 load: {
    //                     filter: ".all, .breakfast, .lunch, .dinner",
    //                 },
    //             });
    //         },
    //     };
    //     filterList.init();
    // });


    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navi").toggleClass("toggled");
     });
     jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navi").removeClass("toggled");
     });

     
     
    //  gsap.registerPlugin(ScrollTrigger);

    //  var elementFirst = document.querySelectorAll('.site-header');
    //  ScrollTrigger.create({
    //      trigger: "body",
    //      start: "10px top",
    //      end: "bottom bottom",
 
    //      onEnter: () => myFunction(),
    //      onLeaveBack: () => myFunction(),
    //  });
    //  console.log("elementFirst")
    //  function myFunction() {
    //      elementFirst.classList.toggle('sticky_head');
    //  }
});




// window.addEventListener("scroll", function () {
//     var navbar = document.querySelector(".site-header");
//     var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollPosition > 0) {
//       navbar.classList.add("sticky_head ");
//     } else {
//       navbar.classList.remove("sticky_head ");
//     }
//   });