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
});

// -------------------------------------------------- LAZY LOAD
// #1 true
// $(document).ready(function() {
//   $("img.lazy").lazyload({
//     effect: "fadeIn"
//   })
// });

// #2 false
// $(function() {
//   $('.lazy').Lazy();
// });

// $('.lazy').Lazy({
//   // your configuration goes here
//   scrollDirection: 'vertical',
//   effect: 'fadeIn',
//   visibleOnly: true,
//   onError: function(element) {
//       console.log('error loading ' + element.data('src'));
//   }
// });

// var lazy = $('.lazy').Lazy({ chainable: false });

// var attributeName = lazy.config('attribute');  // get
// lazy.config('effect', 'show');                 // set

// #3
const observer = lozad();
observer.observe();





// ellipsis
$('.foo').ellipsis();

$('.foo').ellipsis({
  lines: 3,             // force ellipsis after a certain number of lines. Default is 'auto'
  ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
  responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
});