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
      nextArrow: $('.slider-button-next').eq(i)
    });
  }
});