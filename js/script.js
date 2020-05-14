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


// function resetSlick($slick_slider, settings) {
//   $(window).on('resize', function() {
// if ($(window).width() < 426) {
// if ($slick_slider.hasClass('slick-initialized')) {
// $slick_slider.slick('unslick');
// }
// return
// }

// if (!$slick_slider.hasClass('slick-initialized')) {
// return $slick_slider.slick(settings);
// }
// });
// }

$('.posts__slider').slick({
  autoplay: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.posts__arrows--left'),
  nextArrow: $('.posts__arrows--right')
  // mobileFirst: true,
  // responsive: [{
  //   breakpoint: 1024,
  //     settings: {
  //     slidesToShow: 5,
  //     slidesToScroll: 1
  //     }
  //   }]
});



$('.posts__slider--item').slick({
  autoplay: false,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
  // variableWidth: true
});

