'use strict';

function f() {
  console.log('I am outside!');
}
(function () {
  if (false) {
    // 重复声明一次函数f
    var _f = function _f() {
      console.log('I am inside!');
    };
  }

  f();
})();

var a = {

  arrow: function arrow() {

    console.log(undefined);
  }
};

var a = 1;
//# sourceMappingURL=map/index.js.map
