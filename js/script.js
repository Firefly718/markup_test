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
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       // infinite: true,
  //       // dots: true
  //     }
  //   }
  // ]
});

$('.posts__slider--item').slick({
  autoplay: false,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
  // variableWidth: true
});

