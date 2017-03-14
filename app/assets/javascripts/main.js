
$(document).ready(function(){

// var s = skrollr.init();

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
