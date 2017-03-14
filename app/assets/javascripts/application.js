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
      duration: 1200
    });
    // audio player
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
    // audio player volume
    document.getElementsByTagName('audio')[0].volume = 0.20;

    // audio player mute button
    document.getElementById("mute").addEventListener("click", function (e) {
    var target = e.target;

    target.classList.toggle("ion-ios-volume-high");
    target.classList.toggle("ion-ios-volume-low");
}, false);

var $img = $('.header');
// set initial CSS opacity to 0
// GSAP handles the cross browser vendor prefixes
TweenMax.set($img,{autoAlpha:0});
// animate CSS opacity to 1
TweenMax.to($img, 2.5, {autoAlpha:1});

TweenMax.to(".logo", 2.5, {left:50, top: 30});

TweenMax.to (".hsContent", 2.5, {bottom: 5, left: 700});

TweenMax.set(".footer-logo", {opacity:0});
TweenMax.to(".footer-logo", 2, { y:-160 , opacity:1 , ease:Power1.easeInOut});

var snow = $(".hsContent");
var tl = new TimelineMax({repeat:-1});
var bezierPath = [{ x: 8, y: 7 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }, {x: 0, y: 0}];

// tl.set(snow, {autoAlpha:0});
tl.to(snow, 20, { bezier: {
            type: 'soft',
            values: bezierPath,
            smoothOrigin: true,
            timeResolution: 50
          }, ease: Linear.easeNone});
tl.to(snow, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0);


var $img = $('.intro-body');
// set initial CSS opacity to 0
// GSAP handles the cross browser vendor prefixes
TweenMax.set($img,{autoAlpha:0});
// animate CSS opacity to 1
TweenMax.to($img, 2.5, {autoAlpha:1});

});
