## vue组件与指令的差别

### 组件

**组件（Component）**可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

### 指令

**自定义指令（directive）**提供一种机制将数据的变化映射为 DOM 行为。

指令提供了3个钩子函数：

- bind：只调用一次，在指令第一次绑定到元素上时调用。
- update： 在 bind 之后立即以初始值为参数第一次调用，之后每当绑定值变化时调用，参数为新值与旧值。
- unbind：只调用一次，在指令从元素上解绑时调用。

```
	<div id="demo" v-demo:hello.a.b="msg"></div>
	Vue.directive('demo', {
	bind: function () {
		console.log('demo bound!')
	},
	update: function (value) {
	this.el.innerHTML =
		'name - '       + this.name + '<br>' +
		'expression - ' + this.expression + '<br>' +
		'argument - '   + this.arg + '<br>' +
		'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
		'value - '      + value
	}
	})
	var demo = new Vue({
		el: '#demo',
		data: {
			msg: 'hello!'
  		}
	})
```

**元素指令（element-directive）**可以通过自定义元素的形式使用指令，而不是以特性的形式。元素指令可以看做是一个轻量组件。