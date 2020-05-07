// slick's script
// $(document).ready(function(){
//   $('.slider').slick({
//     setting-name: setting-value
//   });
// });


// another works script
// $(function(){
//   $('.slider').slick({
//     // autoplay = true;
//     // dots = true;
//   });
// });

$('.slider').slick({
  autoplay: false,
  dots: true,
  prevArrow: '<span class="prewArrow"><span>',
  nextArrow:'<span class="nextArrow"><span>'
  // nextArrow: 'src: ../img/slider/right-arrow.svg'
  // prevArrow: '<div class="arrow arrow--left"></div>'
  // infinite: true
});