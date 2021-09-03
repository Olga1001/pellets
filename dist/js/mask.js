"use strict";

$(document).ready(function () {
  $(".input-phone").mask("+38 0999999999");
  $(".phone-mask").mask("+380 (99) 999-99-99").on('click', function () {
    $(this).get(0).setSelectionRange(5, 5);
  });
  $(".phone-mask2").mask("+380 (99) 999-99-99");
});