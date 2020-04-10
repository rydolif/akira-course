$(function() {

//-----------------------------modal-acardeon-olimp--------------------------
  $(".acardeon__content").slideUp("slow");
  $(".active .acardeon__content").slideDown("slow");

  $(".acardeon__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".acardeon__content").slideUp("slow");
    }
    else {
      $(".active .acardeon__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .acardeon__content").slideDown("slow");
    }
  });

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
  // $(".block__content").slideUp("slow");
  // $(".active .block__content").slideDown("slow");

  // $(".block").hover(function(){
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //     $(".block__content").slideUp("slow");
  //   }
  //   else {
  //     $(".active .block__content").slideUp("slow");
  //     $(".active").removeClass('active');
  //     $(this).addClass('active');
  //     $(".active .block__content").slideDown("slow");
  //   }
  // });

//------------------------------гамбургер-----------------------------
  $('.nav__hamburger').click(function() {
    $(this).toggleClass('nav__hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('.nav').toggleClass('nav--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//-------------------------------анімація цифр---------------------------------------
   if($(".number__item").hasClass('number__item')){
      var show = true;
      var countbox = ".number";
      $(window).on("scroll load resize", function () {
          if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
          var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
          var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
          var w_height = $(window).height(); // Высота окна браузера
          var d_height = $(document).height(); // Высота всего документа
          var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
          if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
              $('.number__item b').spincrement({
                  thousandSeparator: "",
                  duration: 3000
              });
              show = false;
          }
      });
    }


  if(document.documentElement.clientWidth <= 1580) {
    setTimeout(function() {

       $('.nav').addClass('nav--active');
       $('.nav__hamburger').removeClass('nav__hamburger--active');

    }, 2000);
  }
  
});
