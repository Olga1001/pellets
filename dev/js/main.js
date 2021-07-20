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
      focusOnSelect: true,
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
    }, true);
  }
  $('.slider-articles').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: false,
      arrows: true,
      focusOnSelect: true,
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
    focusOnSelect: true,
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
    focusOnSelect: true,
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
  $('.category-slider').slick({
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          infinite: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          infinite: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 5,
          centerMode: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 2,
          variableWidth: true,
          centerMode: true,
        }
      },
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.slider-for',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    centerMode: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-powers').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: $('.slider-button-prev'),
    nextArrow: $('.slider-button-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  // menu
  $(".burger").on('click', function() {
    $('.navbotom').addClass('active');
    $('.header-b .header_right').addClass('active');
  });

  $(".btn-close, .header-b .header_right, .popup").on('click', function() {
    $('.navbotom').removeClass('active');
    $('.header-b .header_right').removeClass('active');
    $('[data-item]').removeClass('active');
  });
  
  $(".catalog-h").on('click', function() {
    $('.catalog-drop').slideToggle(300);
    $('.icon-menu').toggleClass('active');
    $('.icon-close').toggleClass('active');
  });
  $(".select-drop li").on('click', function() {
    let text = $(this).text();
    $(this).closest('.select').find('.select-item').removeClass('active').find('p').text(text);
    $('.select-drop').slideUp(300);
  });

  $(".btn-more").on('click', function(e) {
    e.preventDefault();
    $('.content').toggleClass('active');
    let text = $(this).text();
    $(this).text(text == "смотреть больше" ? "cкрыть" : "смотреть больше");
  });
  if (window.matchMedia("(max-width: 991px)").matches) {
    $('.catalog-item').on('click', function() {
      $(this).toggleClass('active').closest('li').siblings().find('.catalog-item').removeClass('active');
      $(this).siblings('.catalog-m').slideToggle(300).closest('li').siblings().find('.catalog-m').slideUp(300);
    });
    $('.main-s_item.full-v img').attr('src','img/common/depositphotos_43318949_xl-2015m2.jpg');
    $('.menu-link').on('click', function() {
      $(this).siblings('.menu-dropdown').slideToggle(300);
    });
  }

  // tabs
  // for (let i = 0; i < $(".tabs li").length; i++) {

    $(".tabs li").on('click', function() {
      let index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');

      $(".information-item").eq(index).addClass('active').siblings().removeClass('active');
      $(".information .tabs li").eq(index).addClass('active').siblings().removeClass('active');
    
    });
    
  // }

  $(".product-about_right .tabs li").on('click', function() { 
    let _this = $(this);
    if (_this.text() === 'Оплата/доставка') {
      $('body,html').animate({scrollTop: $('.information_right').offset().top + 'px'}, 500);
    } else {
      $('body,html').animate({scrollTop: $('.information').offset().top + 'px'}, 500);
    }
  });
  $(".tabs li").on('click', function() { 
    let _this = $(this);
    if (_this.text() === 'Оплата/доставка') {
      $('body,html').animate({scrollTop: $('.information_right').offset().top + 'px'}, 500);
    }
  });

  //stopPropagation
  $(".stopPropagation").on('click', function(e) {
    e.stopPropagation();
  });

  $('[data-button]').on('click', function() {
    let attr = $(this).data('button');
    $(`[data-item='${attr}']`).toggleClass('active');
  });

  //ranges
  $(".range").slider({
    range: true,
    min: 4445,
    max: 2000000,
    values: [4445, 971767],
    slide: function( event, ui ) {
      $( ".amount1" ).val(ui.values[0].toLocaleString());
      $( ".amount2" ).val(ui.values[1].toLocaleString());
    }
  });
  $( ".amount1" ).val($(".range" ).slider("values", 0 ).toLocaleString());
  $( ".amount2" ).val($(".range" ).slider("values", 1 ).toLocaleString());

  //toggle
  $('[data-toggle]').on('click', function() {
    $(this).toggleClass('active');
    $(this).siblings().slideToggle(300);
  });

  //hide list
  function hideList () {
    $('.filter-list').each(function (item) {
      let child = item.find('li');
      let listVisibleLength = item.find('.isVisible').length;
      for (let i = listVisibleLength; i < child.length; i++) {
          child[i].addClass('d-none');
      }
    });
  }

  hideList();

  if (window.matchMedia("(max-width: 991px)").matches) {
    $('.cart-row .col:first-child').before($('.total-bottom'))
  }
});

function showHide(item,showText) {
 let siblings = item.previousElementSibling,
      child = siblings.children,
      listVisibleLength = siblings.getElementsByClassName('isVisible').length;
      
  item.classList.toggle('active');

  for (let i = listVisibleLength; i < child.length; i++) {
    child[i].classList.toggle('d-none') ;
    if (item.classList.contains('active')) {
        item.innerHTML = 'Скрыть';
    } else {
        item.innerHTML = `${showText}`;
    }
  }
}
document.querySelectorAll('.btn-all').forEach(function (item) {
  item.addEventListener('click', () => {
    showHide(item, 'Показать все');
  });
});
document.querySelectorAll('.search-more').forEach(function (item) {
  item.addEventListener('click', () => {
    showHide(item, 'показать все <span class="d-sm-inline d-none">результаты поиска</span>');
  });
});
