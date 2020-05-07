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
  slidesToScroll: 1
  // prevArrow: '<span class="prewArrow"><span>',
  // nextArrow:'<span class="nextArrow"><span>'
});

$('.posts__slider--item').slick({
  autoplay: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1
});