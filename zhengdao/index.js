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

sr.reveal('.page-1-flex img', {
  duration: 1000,
  // distance: '50px',
  viewFactor: .1,
}, 50);

sr.reveal('.page-2-flex p, .page-2-flex img', {
  duration: 1000,
  // distance: '10px',
  viewFactor: .6,
  scale: .7
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
// function polygonAnimation($el, value) {
//   $el.attr('points', value);

// }
// var $headerChart = $('#header-chart');
// $headerChart.on('mouseenter', function () {
//   console.log(1);
//   // $('#header-chart #Group-23-Copy #Path-8')
//   // polygonAnimation($('#header-chart #Group-23-Copy #Path-8'),  '28.4601887 0.656194283 0.517342114 15.505764 33.8010981 28.5551961 62.5199957 13.616058');
// }).on('mouseleave', function () {
//   console.log(2);
// });

// function moveDiv() {
//   var $span = $("#header-chart");

//   $span.fadeOut(1000, function () {
//     var maxLeft = $(window).width() - $span.width();
//     var maxTop = $(window).height() - $span.height();
//     var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//     var topPos = Math.floor(Math.random() * (maxTop + 1))

//     $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
//   });
// };

// moveDiv();
// setInterval(moveDiv, 1000);


// 头图背景动画
// (function() {
//   if (!window.addEventListener) return;

//   var els = $('#header-bg #Group-2 g *');
//   var bigels = $('#header-bg .header-circle');

//   function reposition($el) {
//     let x = $el.attr('position-x');
//     let y = $el.attr('position-y');
//     if (x === undefined && y === undefined) {
//       $el.attr('position-x', '0');
//       $el.attr('position-y', '0');
//     } else {
//       console.log(333);
//       var nx = parseFloat(x) + Math.random() * 0.5 + 0.25;
//       var ny = parseFloat(y) + Math.random() * 0.5 + 0.25;
//       $el.attr('position-x', nx);
//       $el.attr('position-y', ny);
//       $el.attr('transform', 'translate('+nx+', '+ny+')');
//     }
//   }
//   // setInterval(() => {
//   //   els.each(function () {
//   //     reposition($(this));
//   //   })
//   // }, 1000);
// })();

// 星星效果
(function () {

  if (!window.addEventListener) return;

  var canvas = document.querySelector("#page-3-canvas");
  var context = canvas.getContext("2d");

  var stars = {},
    particleIndex = 0,
    settings = {
      r: 9400,                // 根据是设计稿确定的轨迹半径
      height: 10,            // 露出的圆弧的高度
      density: 100,
      maxLife: 100,
      groundLevel: canvas.height,
      leftWall: 0,
      rightWall: canvas.width,
      alpha: 0.0,
      maxAlpha: 1
    };

  var getMinRandom = function () {
    var rand = Math.random();
    // step的大小决定了星星靠近地球的聚拢程度，
    // step = Math.ceil(2 / (1 - rand))就聚拢很明显
    var step = Math.ceil(1 / (1 - rand));
    var arr = [];
    for (var i = 0; i < step; i++) {
      arr.push(Math.random());
    }

    return Math.max.apply(null, arr);
  };

  function resizeCanvas() {
    canvas.width = 1920;
    canvas.height = 800;
    settings.rightWall = canvas.width;
    settings.groundLevel = canvas.height;
    settings.height = 0 + (canvas.height - 800) / 2;
    redraw();
  }

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);

  function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(0,0,0,0)";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function Star() {
    // 圆的轨迹方程式为：(x-a)²+(y-b)²=r²
    // 因此，已知x, 则y = Math.sqrt(r² - (x-a)²) + b;
    // 其中，圆心是(a, b)
    // 在本例子中
    // 圆心坐标是(canvas.width/2, canvas.height - 600 + r);
    var a = canvas.width / 2, b = canvas.height - settings.height + settings.r;
    // 因此，已知横坐标随机
    this.x = Math.floor(Math.random() * canvas.width);
    // 纵坐标需要在圆弧以上
    // 越往上，越稀疏
    this.offsety = getMinRandom() * (canvas.height - settings.height);
    this.y = b + this.offsety;
    // this.y = b - Math.sqrt(settings.r * settings.r - (this.x - a) * (this.x - a)) - this.offsety;

    this.vx = Math.random() * 0.05 + 0.025;    // 水平偏移，也是移动速度

    // 星星的尺寸
    this.particleSize = 0.5 + (Math.random() + 0.1 / 4);
    particleIndex++;
    stars[particleIndex] = this;
    this.alpha = 0.0;
    this.maxAlpha = 0.2 + (this.y / canvas.height) * Math.random() * 0.8;
    this.alphaAction = 1;
  }

  Star.prototype.draw = function () {
    // 横坐标移动
    this.x += this.vx;
    // 根据切线方向进行偏移
    // y坐标
    this.y = canvas.height - settings.height + settings.r - Math.sqrt(settings.r * settings.r - (this.x - canvas.width / 2) * (this.x - canvas.width / 2)) - this.offsety;

    // 透明度慢慢起来
    if (this.alphaAction == 1) {
      if (this.alpha < this.maxAlpha) {
        this.alpha += 0.005;
      } else {
        this.alphaAction = -1;
      }
    } else {
      if (this.alpha > 0.2) {
        this.alpha -= 0.002;
      } else {
        this.alphaAction = 1;
      }
    }

    if (this.x + (this.particleSize * 2) >= settings.rightWall) {
      // x到左侧
      this.x = this.x - settings.rightWall;
    }

    // 绘制星星
    context.beginPath();
    context.fillStyle = "rgba(255,255,255," + this.alpha.toString() + ")";
    context.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }

  function render() {

    redraw();

    // 星星的数目
    // IE下CUP性能有限，数目小
    var length = 300;
    if (!history.pushState) {
      // IE9
      length = 200;
    } else if (document.msHidden != undefined) {
      // IE10+
      length = 300;
    }

    if (Object.keys(stars).length > length) {
      settings.density = 0;
    }

    for (var i = 0; i < settings.density; i++) {
      if (Math.random() > 0.97) {
        new Star();
      }
    }

    // 星星实时移动
    for (var i in stars) {
      stars[i].draw();
    }

    requestAnimationFrame(render);
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      setTimeout(fn, 17);
    };
  }

  render();

})();
