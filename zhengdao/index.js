// window.sr = ScrollReveal({
//   reset: true
// });

// sr.reveal('.page-1-flex img, .page-1-flex li, .page-1-flex p, .page-2-flex img, .page-2-flex p', {
//   duration: 1000,
//   // distance: '50px',
//   viewFactor: 0.6,
// }, 50);

$(window).scroll(function () {
  var scrollTop = $(document).scrollTop();
  var sightBottom = scrollTop + $(window).height();
  var viewFactor = .6;

  $('.page-1-flex img, .page-1-flex li, .page-1-flex p, .page-2-flex img, .page-2-flex p').each(function () {
    var $this = $(this);
    var top = $this.offset().top;
    var height = $this.height();
    var distance = height * viewFactor;
    if (top + distance < sightBottom) {
      if ($this.hasClass('fadeInUp')) return;
      $this.addClass('animated fadeInUp');
    } else if (top > sightBottom + height) {
      $this.removeClass('animated fadeInUp');
    }
  });
});