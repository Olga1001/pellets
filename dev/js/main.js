$(document).ready(function () {
  $('.slider-one').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  for (let i = 0; i < $('.slider').length; i++) {
    $('.slider').eq(i).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: false,
      arrows: true,
      prevArrow: $('.popular-products .slider-button-prev').eq(i),
      nextArrow: $('.popular-products .slider-button-next').eq(i),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });
  }
  $('.slider-articles').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: false,
      arrows: true,
      prevArrow: $('.section-articles .slider-button-prev'),
      nextArrow: $('.section-articles .slider-button-next'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
          }
        },
      ]
    });
  $('.slider-fade').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
        }
      },
    ]
  });
  $('.slider-services').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    prevArrow: $('.services .slider-button-prev'),
    nextArrow: $('.services .slider-button-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // menu
  $(".burger").on('click',()=> {
    $('.navbotom').addClass('active');
    $('.header-b .header_right').addClass('active');
  });

  $(".btn-close, .header-b .header_right").on('click',()=> {
    $('.navbotom').removeClass('active');
    $('.header-b .header_right').removeClass('active');
  });

  $(".catalog-h").on('click', ()=> {
    $('.catalog-drop').slideToggle(300);
    $('.icon-menu').toggleClass('active');
    $('.icon-close').toggleClass('active');
  });

  $(".btn-more").on('click', (e)=> {
    e.preventDefault();
    $('.content').toggleClass('active');
    let text = $(this).text();
    $(this).text(text == "смотреть больше" ? "cкрыть" : "смотреть больше");
  });
  // if (window.matchMedia("(max-width: 991px)").matches) {
  //   $('.catalog-item').on('click', () => {
  //     // $(this).closest('li').find('.catalog-m').slideToggle(300);
  //   });
  // }

  //stopPropagation
  $(".stopPropagation").on('click',(e)=> {
    e.stopPropagation();
  });

});