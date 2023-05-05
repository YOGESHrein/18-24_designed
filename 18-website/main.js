
// scroll spy event

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


// team carousel


$('.owl-carousel').owlCarousel({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
    autoplay:true,
      autoplaySpeed:4000,
  cssEase: 'linear',
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:4
    }
  }
})


// scroll behavior
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
}); 


window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 2000); // Hide the loader after 2 seconds
});






