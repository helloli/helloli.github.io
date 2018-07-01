/**
 * reveal animation
 */
window.sr = ScrollReveal({
  reset: true
});

sr.reveal('.page-1-flex li, .page-1-flex p, .page-2-flex p', {
  duration: 1000,
  // distance: '10px',
  viewFactor: .6,
}, 50);

sr.reveal('.page-1-flex img, .page-2-flex img', {
  duration: 1000,
  // distance: '50px',
  viewFactor: .1,
}, 50);

// $(window).scroll(function () {
//   var scrollTop = $(document).scrollTop();
//   var sightBottom = scrollTop + $(window).height();
//   var viewFactor = .6;

//   $('.page-1-flex img, .page-1-flex li, .page-1-flex p, .page-2-flex img, .page-2-flex p').each(function () {
//     var $this = $(this);
//     var top = $this.offset().top;
//     var height = $this.height();
//     var distance = height * viewFactor;
//     if (top + distance < sightBottom) {
//       if ($this.hasClass('fadeInUp')) return;
//       $this.addClass('animated fadeInUp');
//     } else if (top > sightBottom + height) {
//       $this.removeClass('animated fadeInUp');
//     }
//   });
// });

/**
 * header chart hover animation
 */
// function polygonAnimation (el, val) {
//   el.attr({});
// }
// var $headerChart = $('#header-chart');
// $headerChart.on('mouseenter', function () {
//   console.log(1);

//   $('#header-chart #Group-23-Copy #Path-8').animate({
//     transform: translateY(10)
//   }, 200);
// }).on('mouseleave', function () {
//   console.log(2);
// });