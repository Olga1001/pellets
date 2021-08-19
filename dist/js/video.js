"use strict";

$(document).ready(function () {
  $('video').mediaelementplayer({
    // Do not forget to put a final slash (/)
    // this will allow the CDN to use Flash without restrictions
    // (by default, this is set as `sameDomain`)
    shimScriptAccess: "always",
    // more configuration
    defaultVideoWidth: "100%",
    defaultVideoHeight: "",
    videoWidth: -1,
    videoHeight: 'auto',
    defaultAudioWidth: "100%",
    defaultAudioHeight: "100px",
    audioWidth: -1,
    audioHeight: -1,
    startVolume: 0.8,
    loop: false,
    timeFormat: 'hh:mm:ss',
    features: ['playpause', 'tracks', 'volume', 'fullscreen', 'current', 'duration', 'progress'],
    audioVolume: 'vertical',
    // start with English automatically turned on
    startLanguage: 'en',
    success: function success(mediaElement, domObject) {
      mediaElement.addEventListener('pause', function () {// do something here
      }, false);
    }
  });
  $(".slider-nav2").on('click', function () {
    $('video').each(function () {
      this.player.pause();
    });
  });
  $('.mejs__button.mejs__play').after($('.mejs__time-rail'));
  $('.mejs__time-rail').after($('.mejs__time'));
});