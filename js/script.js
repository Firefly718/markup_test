// -------------------------------------------------- SLIDER
$('.slider').slick({
  autoplay: true,
  dots: true,
  fade: true,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  prevArrow: '<span class="prewArrow"><span>',
  nextArrow:'<span class="nextArrow"><span>'
});

$('.posts__slider').slick({
  autoplay: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.posts__arrows--left'),
  nextArrow: $('.posts__arrows--right')
});

$('.posts__slider--item').slick({
  autoplay: false,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
});

// -------------------------------------------------- COUNTER
// jQuery(document).ready(function($) {
//   $('.counters__num').counterUp({
//       delay: 10,
//       time: 1000
//   });
// });