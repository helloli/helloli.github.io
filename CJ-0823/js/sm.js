(function(w){
	var lastTime = 0,
		vendors = ['webkit', /*'moz',*/ 'o', 'ms'];
	for (var i = 0; i < vendors.length && !w.requestAnimationFrame; ++i){
		w.requestAnimationFrame = w[vendors[i] + 'RequestAnimationFrame'];
		w.cancelAnimationFrame = w[vendors[i] + 'CancelAnimationFrame']
			|| w[vendors[i] + 'CancelRequestAnimationFrame'];
	}

	if (!w.requestAnimationFrame)
		w.requestAnimationFrame = function(callback, element){
			var currTime = +new Date(),
				timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				id = w.setTimeout(function(){ callback(currTime + timeToCall) }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!w.cancelAnimationFrame)
		w.cancelAnimationFrame = function(id){
			clearTimeout(id);
		};
})(this);

/*
 Slot Machine
 */
var sm = (function(undefined){

	var flag = true; //标记是否中奖
	var prize0 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_childwatch@2x.png" /><p class="prize-desc">儿童手表</p></div>';
	var prize1 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_daijinquan@2x.png" /><p class="prize-desc">代金券</p></div>';
	var prize2 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_huaweiwatch@2x.png" /><p class="prize-desc">华为手表</p></div>';
	var prize3 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_katao@2x.png" /><p class="prize-desc">卡套</p></div>';
	var prize4 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_luntanlin@2x.png" /><p class="prize-desc">论坛令</p></div>';
	var prize5 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_qiandaolin@2x.png" /><p class="prize-desc">签到令</p></div>';
	var prize6 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_quanneilin@2x.png" /><p class="prize-desc">圈内令</p></div>';
	var prize7 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_Uzhen@2x.png" /><p class="prize-desc">U形枕</p></div>';
	var prize8 = '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_yidongbi@2x.png" /><p class="prize-desc">移动币</p></div>';
	var prize9= '<div class="prize-each"><img class="prize-img" src="./image/laohuji/laohuji_zhaohuanlin@2x.png" /><p class="prize-desc">召唤令</p></div>';

	var tMax = 3000, // animation time, ms
		height = 1100,
		speeds = [],
		r = [],
		reels = [
			[prize0, prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8, prize9],
			[prize0, prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8, prize9],
			[prize0, prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8, prize9],
		],
		$reels, $msg,
		start;

	//服务器获得参数和本地奖品映射关系
	var map = [];

	function init(){
		$reels = $('.reel').each(function(i, el){
			el.innerHTML = '<div>'+reels[i].join('<p class="p-space"></p>')+'</div><div>'+reels[i].join('<p class="p-space"></p>')+'</div>';
		});

		$('#start').click(action);
	}

	function action(){
		/* 调用抽奖接口 */

		if (start !== undefined) return;

		for (var i = 0; i < 3; ++i) {
			speeds[i] = Math.random() + .7;
			r[i] = (Math.floor((Math.random() * 9))) * height / 11;
			console.log(r[i]);
		}

		if(flag == true) {
			r[0] = 400;
			r[1] = 400;
			r[2] = 400;
		}

		animate();
	}

	function animate(now){
		if (!start) start = now;
		var t = now - start || 0;

		for (var i = 0; i < 3; ++i)
			$reels[i].scrollTop = (speeds[i] / tMax / 2 * (tMax - t) * (tMax - t) + r[i]) % height | 0;

		if (t < tMax)
		{
			requestAnimationFrame(animate);
		}
		else {
			start = undefined;
			check();
		}
	}

	function check(){

		if(r[0] === r[1] && r[1] === r[2]) {
			var value = r[0];
			tanchuang(value);
		}
		else {

		}
	}

	function tanchuang(value) {
		var tanchuan_map = ['childwatch', 'mogujie', 'huaweiwatch', 'katao', 'luntanling','qiandaoling', 'quanneiling',
		'Uzheng','yidongbi','zhaohuanling'];

		var pos = value / 100;
		var img_src = "./image/prize_tangchuang/tanchuang_"+tanchuan_map[pos]+"@2x.png";

		$('.tanchuang-prize-img').attr('src', img_src);
		$('.prize-tanchuang').fadeIn(300);
		$('.close-link').click(function() {
			$('.prize-tanchuang').fadeOut(300);
		});
	}

	return {init: init}

})();
//sm.init();
$(sm.init);