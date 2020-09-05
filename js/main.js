$('.slide2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slide1').owlCarousel({
    loop:true,
    margin: -450,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        600:{
            items:1,
            margin: 0
        },
        1000:{
            items:3
        }
    }
})

$('.btn-nav').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('btn-nav__active');
  $('.nav').toggleClass('nav__active')
});

$('.menu-nav a').on('click', function(e){
  e.preventDefault;
  $('.btn-nav').toggleClass('btn-nav__active');
  $('.nav').toggleClass('nav__active')
})



$(function(){
  $("a[href^='#']").on('click', function(e){
    var _href = $(this).attr("href");
    $('html,body').stop().animate({ scrollTop: $(_href).offset().top }, 1500);
    e.preventDefault;
  });

});


$('.list').on('click', function(e){
    e.preventDefault;
    $('.list__item').toggleClass('list__itema');
});




