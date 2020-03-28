$(function() {

//------------------------------modal-slider-gallery----------------------------
  var swiper = new Swiper('.modal__slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    lazy: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.modal__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.modal__next',
      prevEl: '.modal__prev',
    },
  });

//------------------------------video-slider-----------------------------
  var swiper = new Swiper('.video__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    lazy: true,
    effect: 'fade',
    pagination: {
      el: '.video__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  });

//------------------------------reviews-slider-----------------------------
  var swiper = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 90,
    loop: true,
    lazy: true,
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  });

//------------------------------team-slider-----------------------------
  var swiper = new Swiper('.team__slider', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    lazy: true,
    pagination: {
      el: '.team__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
    992: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    }
    }
  });

//------------------------------main-slider-----------------------------
  var swiper = new Swiper('.main__slider', {
    spaceBetween: 30,
    centeredSlides: true,
    lazy: true,
    effect: 'fade',
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.main__pagination',
      clickable: true,
    },
  });


//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  $(".active .block__content").slideDown("slow");

  $(".block").hover(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".active .block__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).addClass('active');
      $(".active .block__content").slideDown("slow");
    }
  });

//------------------------------гамбургер-----------------------------
  $('.nav__hamburger').click(function() {
    $(this).toggleClass('nav__hamburger--active');
    $(this).toggleClass('nav__hamburger--menu');
    $('.nav').toggleClass('nav--active');
    $('.nav').toggleClass('nav--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});


  
});
