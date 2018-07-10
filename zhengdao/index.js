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

/**
 * header chart hover animation
 */

 /**
  * 路径变化函数
  */
function transPath(path, position, value) {
  path = path.split(' ');
  path[0] = path[0].slice(1);
  position.forEach(function (i) {
    path[i] = parseFloat(path[i]) + value;
  });
  return 'M' + path.join(' ');
}

// 节点定义
function svgNode(el, attr, endValue, duration) {
  this.$el = Snap.select(el);
  this.attr = attr;
  this.startValue = document.querySelector(el).getAttribute(attr);
  this.endValue = endValue instanceof Array ? transPath(this.startValue, endValue[0], endValue[1]) : endValue;
  this.duration = duration || 500;
  this.stop = true;
}
svgNode.prototype.start = function () {
  var tmp = {};
  tmp[this.attr] = this.endValue;
  this.$el.animate(tmp, this.duration, mina.linear, this.stop?function(){}:this.end.bind(this));
}
svgNode.prototype.end = function () {
  var tmp = {};
  tmp[this.attr] = this.startValue;
  this.$el.animate(tmp, this.duration, mina.linear, this.stop?function(){}:this.start.bind(this));
}

// 批量处理动画的开始和停止
function svgAnimate(arr) {
  this.arr = arr.map(function(node) {
    return new svgNode(node[0], node[1], node[2], node[3], node[4]);
  });
}
svgAnimate.prototype.start = function () {
  this.arr.forEach(function (node) {
    node.start();
  });
}
svgAnimate.prototype.end = function () {
  this.arr.forEach(function (node) {
    node.end();
  });
}
svgAnimate.prototype.stop = function (val) {
  this.arr.forEach(function (node) {
    node.stop = val;
  });
}

var nodes = new svgAnimate([
  ['#header-chart #Group-23-Copy #Path-8', 'd', [[1, 3, 5, 7], -60]],
  ['#header-chart #Group-23-Copy #Path-8-Copy-2', 'd', [[5, 7], -60]],
  ['#header-chart #Group-23-Copy #Path-8-Copy', 'd', [[3, 5], -60]],
  ['#header-chart #Group-23 #Path-8', 'd', [[1, 3, 5, 7], 70]],
  ['#header-chart #Group-23 #Path-8-Copy-2', 'd', [[5, 7], 70]],
  ['#header-chart #Group-23 #Path-8-Copy', 'd', [[3, 5], 70]],
  ['#header-chart #Group-23-Copy-2 #Path-8', 'd', [[1, 3, 5, 7], 10]],
  ['#header-chart #Group-23-Copy-2 #Path-8-Copy-2', 'd', [[5, 7], 10]],
  ['#header-chart #Group-23-Copy-2 #Path-8-Copy', 'd', [[3, 5], 10]],
  ['#header-chart #Group-23-Copy-3 #Path-8', 'd', [[1, 3, 5, 7], -80]],
  ['#header-chart #Group-23-Copy-3 #Path-8-Copy-2', 'd', [[5, 7], -80]],
  ['#header-chart #Group-23-Copy-3 #Path-8-Copy', 'd', [[3, 5], -80]]
]);

$('#header-chart').on('mouseenter', function () {
  nodes.start();
}).on('mouseleave', function () {
  nodes.end();
});

var nodes1 = new svgAnimate([
  ['#page-1-4 #page-1-4-Group-39 #page-1-4-Rectangle-22-Copy-4', 'd', [[1, 3], 30], 1000, true],
  ['#page-1-4 #page-1-4-Group-39 #page-1-4-Rectangle-22-Copy-6', 'd', [[1, 3], 30], 1000, true],
  ['#page-1-4 #page-1-4-Group-39 #page-1-4-Rectangle-22-Copy-5', 'd', [[1, 3, 5, 7], 30], 1000, true],
  ['#page-1-4 #page-1-4-Group-39-Copy #page-1-4-Rectangle-22-Copy-4', 'd', [[1, 3], -80], 1000, true],
  ['#page-1-4 #page-1-4-Group-39-Copy #page-1-4-Rectangle-22-Copy-6', 'd', [[1, 3], -80], 1000, true],
  ['#page-1-4 #page-1-4-Group-39-Copy #page-1-4-Rectangle-22-Copy-5', 'd', [[1, 3, 5, 7], -80], 1000, true]
]);
$('#page-1-4').on('mouseenter', function () {
  nodes1.stop(false);
  nodes1.start();
}).on('mouseleave', function () {
  nodes1.stop(true);
  nodes1.end();
});

// 轮播
var currCard = 1;
var cardInterval = null;
cardInterval = setInterval(function () {
  $('#page-7-li-' + currCard).removeClass('active');
  currCard === 4 ? currCard = 1 : currCard += 1;
  $('#page-7-li-' + currCard).addClass('active');
}, 5000);
$('#page-7-ul').on('click', 'li', function () {
  $('#page-7-li-' + currCard).removeClass('active');
  currCard = $(this).data('index');
  $('#page-7-li-' + currCard).addClass('active');
  clearInterval(cardInterval);
});

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

    // this.vx = Math.random() * 0.05 + 0.025;    // 水平偏移，也是移动速度
    this.vx = 0;

    // 星星的尺寸
    this.particleSize = 0.5 + (Math.random() + 0.1 / 4);
    particleIndex++;
    stars[particleIndex] = this;
    this.alpha = 0.0;
    this.maxAlpha = 1;
    // this.maxAlpha = 0.2 + (this.y / canvas.height) * Math.random() * 0.8;
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
        this.alpha += 0.04 * Math.random();
      } else {
        this.alphaAction = -1;
      }
    } else {
      if (this.alpha > 0.2) {
        this.alpha -= 0.04 * Math.random();
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
    var length = 400;
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
