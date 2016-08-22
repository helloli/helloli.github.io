(function (w) {
    var lastTime = 0,
        vendors = ['webkit', /*'moz',*/ 'o', 'ms'];
    for (var i = 0; i < vendors.length && !w.requestAnimationFrame; ++i) {
        w.requestAnimationFrame = w[vendors[i] + 'RequestAnimationFrame'];
        w.cancelAnimationFrame = w[vendors[i] + 'CancelAnimationFrame']
            || w[vendors[i] + 'CancelRequestAnimationFrame'];
    }

    if (!w.requestAnimationFrame)
        w.requestAnimationFrame = function (callback, element) {
            var currTime = +new Date(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = w.setTimeout(function () {
                    callback(currTime + timeToCall)
                }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!w.cancelAnimationFrame)
        w.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
})(this);

/*定义全局变量*/
var is_hufu = false;
var luntan = false;
var zhaohuan = false;
var qiandao = false;
var quannei = false;
var time; //当前时间
var morningCount;
var afternoonCount;
var coinCount;
var cmccCoin;
var is_morning = false;
var is_afternoon = false;
var is_toaward = false;
var token_str;
/************************/

function getUrlParam(name)
{
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return r[2];
    }
    return null;
}
var phone = getUrlParam('phone');


var isMorning_Afternoon = function(datatime) {
    var time_now = datatime.split(' ')[1];
    var hour = time_now.split(':')[0];
    if(hour >= "0" && hour <= "12") { is_morning = true; is_afternoon = false; }
    if(hour > "12" && hour < "24") { is_afternoon = true; is_morning = false; }
    console.log(is_afternoon);

    if(is_morning) {
        if(morningCount > 0) {
            is_toaward = true;
            $('.tip1').text("您有一次免费抽奖机会");
            $('.tip2').text('');
        }
        else{
            if(coinCount > 0 && cmccCoin >= 10){
                is_toaward = true;
                $('.tip1').text('下午再来免费抽奖吧');
                $('.tip2').text('But，土豪请继续，每次需10个移动币');
            }
            else if(coinCount > 0 && cmccCoin < 10) {
                is_toaward = false;
                $('.tip1').text("移动币不足！");
                $('.tip2').text('');
            }
            else if(coinCount == 0) {
                is_toaward = false;
                $('.tip1').text("今天抽奖机会已经用完！");
                $('.tip2').text('');
            }
        }
    }
    if(is_afternoon) {
        if(afternoonCount > 0){
            is_toaward = true;
            $('.tip1').text("您有一次免费抽奖机会");
            $('.tip2').text('');
        }
        else {
            if(coinCount > 0 && cmccCoin >= 10) {
                is_toaward = true;
                $('.tip1').text('明天再来免费抽奖吧');
                $('.tip2').text('But，土豪请继续，每次需10个移动币');
            }
            else if(coinCount > 0 && cmccCoin < 10) {
                is_toaward = false;
                $('.tip1').text("移动币不足,快去攒移动币吧！");
                $('.tip2').text('');
            }
            else if(coinCount == 0) {
                is_toaward = false;
                $('.tip1').text("今天抽奖机会已经用完！");
                $('.tip2').text('');
            }
        }
    }
    console.log(is_toaward);
}

//判断抽奖模式
var set_rollType = function() {
    var type;
    if(is_morning) {
        if(morningCount > 0) type = '1';
        else if(coinCount > 0) type = '3';
    }
    if(is_afternoon) {
        if(afternoonCount > 0) type = '2';
        else if(coinCount > 0) type = '3';
    }
    return type;
}

//设置转动过程中的文案
var set_rollText = function() {
    var textarray = new Array(7);
    textarray = ["转啊转，转的多了：自然就晕了", "话说，这次会不会中呢",
    "转一次才10个移动币，两个字：划算！", "梦想还是要有的，万一中了儿童手表呢",
    "睁大眼，不要眨，预感大奖马上就来报道", "苍茫的天涯是我的爱，种个大奖心里愉快",
    "再不中奖，我可就要发飙啦"];

    var pos = Math.floor((Math.random() * 7));
    var text_ram = textarray[pos];

    if(text_ram == "睁大眼，不要眨，预感大奖马上就来报道") {
        $('.tip1').text("睁大眼，不要眨");
        $('.tip2').text("预感大奖马上就来报道");
    }
    else if(text_ram == "苍茫的天涯是我的爱，种个大奖心里愉快") {
        $('.tip1').text("苍茫的天涯是我的爱,");
        $('.tip2').text("种个大奖心里愉快");
    }  
    else if(text_ram == "梦想还是要有的，万一中了儿童手表呢") {
        $('.tip1').text("梦想还是要有的，");
        $('.tip2').text("万一中了儿童手表呢!");
    }
    else if(text_ram == "转一次才10个移动币，两个字：划算！")
    {
        $('.tip1').text("转一次才10个移动币");
        $('.tip2').text("两个字：划算!");
    }
    else 
    {
        $('.tip1').text(text_ram);
        $('.tip2').text('');
    }
}

var initPage = function () {
    //调用初始化接口
    $.ajax({
        //url:"/eas_cmcc/anniToRoll/initialLuckyRoll",
        url:"./data_init.php",
        type: "get",
        async: false,
        data: {},
        success: function(data) {
            console.log(data);
            data = JSON.parse(data);
            var res = data.data;
            token_str = res.tokenStatus;

            time = data.time;
            morningCount = res.morningCount;
            afternoonCount = res.afternoonCount;
            console.log(morningCount+"  "+afternoonCount);
            coinCount = res.coinLuckCount;
            cmccCoin = res.cmccCoin;

            //判断当前时间 判断是否能抽奖 设置抽奖前文案
            isMorning_Afternoon(time);

            //设置移动币数目
            $('.coin-num').text(cmccCoin);

            /*查看是否为虎符, 处理令牌 设置状态*/
            if(res.isTiger == true)
            {
                is_hufu = true;
                $('#lingpai').hide(200, function() {
                    $('#hufu').show(200);
                });
            }
            else {
                // is_hufu = false;
                // $('#hufu').hide(200, function() {
                //     $('#lingpai').show(200);
                // });

                if(token_str.charAt(0) == '1') {
                    quannei = true;
                    $('#quannei').attr("src", "./img/linpai/quanneiling@2x.png");
                }
                if(token_str.charAt(1) == '1') {
                    luntan = true;
                    $('#luntan').attr("src", "./img/linpai/luntanling@2x.png");
                }
                if(token_str.charAt(2) == '1') {
                    qiandao = true;
                    $('#qiandao').attr("src", "./img/linpai/qiandaoling@2x.png");
                }
                if(token_str.charAt(3) == '1') {
                    zhaohuan = true;
                    $('#zhaohuan').attr("src", "./img/linpai/zhaohuanling@2x.png");
                }
                $('#hufu').hide(200, function() {
                    $('#lingpai').show(200);
                });
            }
        }
    });

    //调用 滚动中奖纪录接口
    requestScroll();
}

var loop = function(dataScroll) {
    if (dataScroll.length == 1) {
        console.log('本次数据已经循环展示完啦，该请求新的数据了！');

                //假设发起新的http请求获取到了新的数据
                // var newDatas = {
                //     "time": "2016-08-17 17:07:50",
                //     "status": 1,
                //     "msg": "",
                //     "data": [
                //         "188****1234(杭州研发中心)抽中了华为手表",
                //         "188****1234(杭州研发中心)抽中了50个移动币",
                //         "188****1234(杭州研发中心)抽中了论坛令",
                //         "188****1234(杭州研发中心)抽中了50个移动币",
                //         "188****1234(杭州研发中心)抽中了50个移动币"
                //     ]
                // };

        $.ajax({
     //   url: "/eas_cmcc/anniToRoll/initialLuckyRoll",
            url: "./data_scroll.php",
            type: "get",
            async: false,
            data: {},
            success: function (data) {
                newDatas = JSON.parse(data);
                newDatas.data.unshift(dataScroll[0]);
                loop(newDatas.data);
            }
        });
    } else {
        var marqueeData = '';
        var displayData = dataScroll.slice(0, 2);
        console.log(displayData);
        for (i in displayData) {
            marqueeData += '<p class="scroll-p">' + displayData[i] + '</p>';
        }
        $('#marquee').html('<div>' + marqueeData + '</div>');
        $('#marquee div').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            dataScroll.shift();
            loop(dataScroll);
        }); 
    }
}

var requestScroll = function() {
     $.ajax({
     //   url: "/eas_cmcc/anniToRoll/initialLuckyRoll",
        url: "./data_scroll.php",
        type: "get",
        async: false,
        data: {},
        success: function (data) {
            data = JSON.parse(data);
            var datas = data.data;
            loop(datas);
        }
     });
}

$(document).ready(function() {

    /* 调用初始化接口, 设置页面状态 */

    initPage();

    $(sm.init);
});

var sm = (function(undefined){
    var flag = false; //标记是否中奖
    var prize0 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_childwatch@2x.png" /><p class="prize-desc">儿童手表</p></div>';
    var prize1 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_daijinquan@2x.png" /><p class="prize-desc">代金券</p></div>';
    var prize2 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_huaweiwatch@2x.png" /><p class="prize-desc">华为手表</p></div>';
    var prize3 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_katao@2x.png" /><p class="prize-desc">卡套</p></div>';
    var prize4 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_luntanlin@2x.png" /><p class="prize-desc">论坛令</p></div>';
    var prize5 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_qiandaolin@2x.png" /><p class="prize-desc">签到令</p></div>';
    var prize6 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_quanneilin@2x.png" /><p class="prize-desc">圈内令</p></div>';
    var prize7 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_yidongbi@2x.png" /><p class="prize-desc">移动币</p></div>';
    var prize8 = '<div class="prize-each"><img class="prize-img" src="./img/laohuji/laohuji_zhaohuanlin@2x.png" /><p class="prize-desc">召唤令</p></div>';

    var tMax = 5000, // animation time, ms
        height = 1000,
        speeds = [],
        r = [],
        reels = [
            [prize0, prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8],
            [prize0, prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8],
            [prize0, prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8],
        ],
        $reels,
        start;

    //初始化老虎机
    function init(){
        console.log(is_toaward);
        $reels = $('.reel').each(function(i, el){
            el.innerHTML = '<div>'+reels[i].join('<p class="p-space"></p>')+'</div><div>'+reels[i].join('<p class="p-space"></p>')+'</div>';
        });

        if(is_toaward) {
            $('#start').click(action);
        }
        else {
            $('#start').unbind('click');
            $('#start').css("background-img", 'url("./img/btn_kaishichoujiang_no@2x.png")');
        }
    }

    function action(){
        var rollType;
        /*确定抽奖模式*/
        rollType = set_rollType();
        if(rollType == '3') {
            var tmp = $('.coin-num').text();
            $('.coin-num').text(tmp - 10);
        }

        /*设置转动中的随机文案*/
        set_rollText();

        /* 调用抽奖接口 */
        $.ajax({
        //    url: "/eas_cmcc/anniToRoll/luckyRoll",
            url: "./choujiang.php",
        //    data:{rollType: rollType},
            async: false,
            type: "get",
            success: function (data) {
                console.log(data);
                data = JSON.parse(data);
                var res = data.data;
                var reward = res.reward;
                console.log(reward.key);

                if(reward.key != '') {
                    flag = true;
                    token_str = res.tokenStatus; //更新token-str
                    setAward(reward.key, flag);
                }
                else {
                    flag = false;
                    setAward('0', flag);
                }
            }
        });
    }

    function setAward(key, is_zhongjiang) {
        var flag = is_zhongjiang;
        var array = new Array(9);
        array['childwatch'] = 0;
        array['mogujie'] = 1;
        array['huaweiwatch'] = 2;
        array['katao'] = 3;
        array['luntanling'] = 4;
        array['qiandaoling'] = 5;
        array['quanneiling'] = 6;
        array['yidongbi'] = 7;
        array['zhaohuanling'] = 8;

        if (start !== undefined) return;

        for (var i = 0; i < 3; ++i) {
            speeds[i] = Math.random() + .7;
            r[i] = (Math.floor((Math.random() * 8))) * height / 10;
            console.log(r[i]);
        }

        if(flag == true) {
            r[0] = array[key] * 100;
            r[1] = array[key] * 100;
            r[2] = array[key] * 100;
        }
        else {
            //处理意外中奖情况
            if(r[0] == r[1] && r[1] == r[2]) {
                r[2] = r[0] + 100;
            }
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

    //检测是否中奖
    function check(){
        if(r[0] === r[1] && r[1] === r[2]) {
            var value = r[0];
            tanchuang(value);
        }
        else {
            //设置中奖失败的提示语
            var failArray = ['居然没中奖，肯定是抽奖姿势不对',
                '居然没中奖，好吧，失败是成功之母',
                '居然没中奖，一言不合，再来一次'];

            var ram = Math.floor(Math.random() * 3);
            var failtext = failArray[ram];
            $('.tip1').text(failtext);
            $('.tip2').text('');
        }
    }

    function dianLiang(liangpai_now) {
        var length = liangpai_now.length;
        var flag_tmp = false;
        var stop = length - 4;
        var pos = liangpai_now.substring(0, stop);

        var lingpai_map = new Array(4); //令牌种类和token_str的关系对应
        lingpai_map['quannei'] = token_str.charAt(0);
        lingpai_map['luntan'] = token_str.charAt(1);
        lingpai_map['qiandao'] = token_str.charAt(2);
        lingpai_map['zhaohuan'] = token_str.charAt(3);

        //判断是不是首次获得该令牌
        if(liangpai_now == 'quanneiling') {
            if(!quannei) flag_tmp = true;
        }
        if(liangpai_now == 'qiandaoling') {
            if(!qiandao) flag_tmp = true;
        }
        if(liangpai_now == 'luntanling') {
            if(!luntan) flag_tmp = true;
        }
        if(liangpai_now == 'zhaohuanling') {
            if(!zhaohuan) flag_tmp = true;
        }

        //进行点亮令牌操作
        if(lingpai_map[pos] == 1 && flag_tmp) {
            var new_src = './img/linpai/'+liangpai_now+'@2x.png';
            $('#'+pos).attr('src', new_src);
        }
    }

    function tanchuang(value) {
        //弹窗图片路径
        var tanchuan_map = ['childwatch', 'mogujie', 'huaweiwatch', 'katao', 'luntanling','qiandaoling', 'quanneiling','yidongbi','zhaohuanling'];
        //弹窗奖品文案
        var wenan_map = ['儿童手表','蘑菇街代金券','华为手表','定制卡套','论坛令','签到令','圈内令','移动币','召唤令'];

        var pos = value / 100;
        var prize = tanchuan_map[pos];
        var img_src = "./img/prize_tangchuang/tanchuang_"+tanchuan_map[pos]+"@2x.png";
        var wenan = wenan_map[pos];

        if(prize == 'luntanling' || prize == 'qiandaoling' || prize == 'quanneiling' || prize == 'zhaohuanling') {
            if(is_hufu) {  //已经是虎符
                $('.tanchuang-text').text(wenan);
                $('.tanchuang-prize-img').attr('src', img_src);
                $('.prize-tanchuang').fadeIn(300);

                $('.close-link').click(function() {
                    $('.prize-tanchuang').fadeOut(300);
                });
            }
            else { // 不是虎符
                if(token_str == '1111') { //集齐虎符 首次及其 获得最后一枚令牌
                    is_hufu = true;
                    dianLiang(prize);

                    //弹出合成弹窗
                    $('.lingpai-text').text(wenan);
                    $('.lastlingpai-img').attr('src',img_src);
                    $('.last-lingpai-tanchuang').fadeIn(300);
                    //弹窗消失
                    $('.hecheng-link').click(function() {
                        $('.last-lingpai-tanchuang').fadeOut(300);
                        //弹出虎符
                        $('.hufu-tanchuang').fadeIn(300);
                        $('.close-hufu-link').click(function() {
                            $('.hufu-tanchuang').fadeOut(300);
                            $('#lingpai').hide(200, function() {
                                $('#hufu').show();
                            });
                        });
                        //$('#lingpai').hide(200, function() {
                        //    $('#hufu').show();
                        //});
                    });
                }
                else {
                    $('.tanchuang-text').text(wenan);
                    $('.tanchuang-prize-img').attr('src', img_src);
                    $('.prize-tanchuang').fadeIn(300);

                    $('.close-link').click(function() {
                        $('.prize-tanchuang').fadeOut(300);
                    });

                    dianLiang(prize);
                }
            }
        }
        else {
            $('.tanchuang-text').text(wenan);
            $('.tanchuang-prize-img').attr('src', img_src);
            $('.prize-tanchuang').fadeIn(300);

            $('.close-link').click(function() {
                $('.prize-tanchuang').fadeOut(300);
            });
        }
    }

    return {init: init}

})();