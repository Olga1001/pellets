"use strict";

$(document).ready(function () {
  $('.slider-one').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000
  });

  for (var i = 0; i < $('.slider').length; i++) {
    $('.slider').eq(i).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: false,
      arrows: true,
      prevArrow: $('.slider-button-prev').eq(i),
      nextArrow: $('.slider-button-next').eq(i),
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }

  $('.slider-fade ').slick({
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
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: true
      }
    }]
  }); // menu

  $(".burger").on('click', function () {
    $('.navbotom').addClass('active');
    $('.header-b .header_right').addClass('active');
  });
  $(".btn-close, .header-b .header_right").on('click', function () {
    $('.navbotom').removeClass('active');
    $('.header-b .header_right').removeClass('active');
  });
  $(".catalog-h").on('click', function () {
    $('.catalog-drop').slideToggle(300);
  }); //stopPropagation

  $(".stopPropagation").on('click', function (e) {
    e.stopPropagation();
  });
});