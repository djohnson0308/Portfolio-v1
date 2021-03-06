// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

$(document).ready(function(){
    $('.homeSlide').height($(window).height());

    AOS.init({
      duration: 1200,
       disable: 'mobile'
    });

		TweenMax.set(".footer-logo", {opacity:0});
		TweenMax.to(".footer-logo", 2, { y:-160 , opacity:1 , ease:Power1.easeInOut});

		// audio player
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    // audio player volume
    document.getElementsByTagName('audio')[0].volume = 0.20;
});
