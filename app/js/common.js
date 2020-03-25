$(function() {

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
  });

//------------------------------reviews-slider-----------------------------
  var swiper = new Swiper('.team__slider', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    lazy: true,
    pagination: {
      el: '.team__pagination',
      clickable: true,
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

//------------------------------main-slider-----------------------------
  var swiper = new Swiper('.main__slider', {
    spaceBetween: 30,
    centeredSlides: true,
    lazy: true,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.main__pagination',
      clickable: true,
    },
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

//------------------------------------form-------------------------------------------
  // $('input[type="tel"]').mask('+0 (000) 000-00-00');

  // jQuery.validator.addMethod("phoneno", function(phone_number, element) {
  //    return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  // }, "Введите Ваш телефон");

  // $(".form").each(function(index, el) {
  //   $(el).addClass('form-' + index);

  //   $('.form-' + index).validate({
  //     rules: {
  //       phone: {
  //         required: true,
  //         phoneno: true
  //       },
  //       name: 'required',
  //     },
  //     messages: {
  //       name: "Введите Ваше имя",
  //       phone: "Введите Ваш телефон",
  //     },
  //     submitHandler: function(form) {
  //       var t = {
  //         name: jQuery('.form-' + index).find("input[name=name]").val(),
  //         phone: jQuery('.form-' + index).find("input[name=phone]").val(),
  //         subject: jQuery('.form-' + index).find("input[name=subject]").val()
  //       };
  //       ajaxSend('.form-' + index, t);
  //     }
  //   });

  // });

  // function ajaxSend(formName, data) {
  //   jQuery.ajax({
  //     type: "POST",
  //     url: "sendmail.php",
  //     data: data,
  //     success: function() {
  //       $(".modal").popup("hide");
  //       $("#thanks").popup("show");
  //       setTimeout(function() {
  //         $(formName).trigger('reset');
  //       }, 2000);
  //     }
  //   });
  // }

//---------------------------tabs-----------------------
  // $('.tabs__wrap').hide();
  // $('.tabs__wrap:first').show();
  // $('.tabs ul a:first').addClass('active');
  //  $('.tabs ul a').click(function(event){
  //   event.preventDefault();
  //   $('.tabs ul a').removeClass('active');
  //   $(this).addClass('active');
  //   $('.tabs__wrap').hide();
  //    var selectTab = $(this).attr('href');
  //   $(selectTab).fadeIn();
  // });


  // //-------------------------------анімація цифр---------------------------------------
  //   var show = true;
  //   var countbox = ".about-statistics__container";
  //   $(window).on("scroll load resize", function () {
  //       if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
  //       var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
  //       var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
  //       var w_height = $(window).height(); // Высота окна браузера
  //       var d_height = $(document).height(); // Высота всего документа
  //       var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
  //       if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
  //           $('.about-statistics__item h3').spincrement({
  //               thousandSeparator: "",
  //               duration: 2000
  //           });
  //           show = false;
  //       }
  //   });

  
});

//----------------------------------------preloader----------------------------------

  // $(window).on('load', function(){
  //   $('.preloader').delay(1000).fadeOut('slow');
  // });
