"use strict";

$(document).ready(function () {
  $('video').mediaelementplayer({
    // Do not forget to put a final slash (/)
    // this will allow the CDN to use Flash without restrictions
    // (by default, this is set as `sameDomain`)
    shimScriptAccess: "always",
    // more configuration
    startVolume: 0.8,
    loop: false,
    timeFormat: 'hh:mm:ss',
    // features: ['playpause', 'tracks', 'volume', 'fullscreen','current','duration', 'progress'],
    audioVolume: 'vertical',
    // start with English automatically turned on
    startLanguage: 'en',
    success: function success(mediaElement, domObject) {
      mediaElement.addEventListener('pause', function () {// do something here
      }, false);
    }
  });
  $(".slider-nav2, .slider-nav").on('click', function () {
    $('video').each(function () {
      this.player.pause();
    });
  });
});
document.querySelectorAll('.video').forEach(function (el) {
  el.querySelector('.mejs__button.mejs__play').after(el.querySelector('.mejs__time-rail'));
  el.querySelector('.mejs__time-rail').after(el.querySelector('.mejs__time'));
});