$(document).ready(function(){
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  $('#records').hide()  
  $('#waiting,.loading').show()


  var info = []
  var count = 0
  var _suffixp,_suffixpdiv,_suffixph2
  var _prefixitem,_prefixleft,_prefixright,_prefixh2,_prefixh2ma,_prefixpcode,_prefixptip,_prefixptipma,_prefixpprice
  _prefixitem = '<div class="record_item">'
  _prefixleft = '<div class="record_left">'
  _prefixright =  '<div class="record_right">'
  _prefixh2 = '<h2 class="coupon_name">'
  _prefixh2ma =  '<h2 class="coupon_name marginTop48">'
  _prefixpcode = '<p class="coupon_code">优惠码：'
  _prefixptip = '<p class="coupon_tip">'
  _prefixptipma = '<p class="coupon_tip marginTop30">'
  _prefixpprice = '<p class="coupon_price">'

  _suffixp = '</p>'
  _suffixpdiv='</div>'
  _suffixph2='</h2>'

  //$.get('/js/getLuckyRollLog.json',{}
  //$.get('/eas_cmcc/getLuckyRollLog',{}

  $.get('/eas_cmcc/anniToRoll/getLuckyRollLog',{},function(res){
    var data = eval( "(" + res + ")" )
    if(data.status == 1){
      if(data.data.length==0){
        $('#empty>p').html('空空如也，快去抽奖吧！')
        $('#waiting,.loading').hide() 
        $('#empty').show()   
      } else if(data.data.length<=15){
        info = data.data
        iterationStartHTML()
        $('#waiting,.loading').hide()
        $('#records').show() 
      } else {
        info = data.data
        count = info.length
        iterationHTML()
        $('#waiting,.loading').hide()
        $('#records').show() 
      }
    } else {
      $('#waiting,.loading').hide()
      $('#empty>p').html('网络错误，请重新刷新页面参与活动!')
      $('#empty').show()
    }
    //console.log(data)
  })

  /*数据写入*/
  //小于15条记录的用户数据写入
  function iterationStartHTML(){
    var _htmlLeft,_htmlRight
    info.forEach(function(v){
      if(v.keys=='mogujie'){
        _htmlLeft=_prefixleft+_prefixh2+v.name+_suffixph2+_prefixpcode+v.coupons+_suffixp+_prefixptip+v.rule+_suffixp+_suffixpdiv
        _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      } else if(v.keys=='huaweiwatch'||v.keys=='childwatch'){
        _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
        _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      } else if(v.keys=='yidongbi'){
        _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
        _htmlRight= _prefixright+_prefixpprice+'+'+v.price+_suffixp+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      } else {
        _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
        _htmlRight=_prefixright+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      }
    })
  }

  //大于15条记录的用户数据写入刷新操作
  function iterationHTML(){
    count = count-7
    var _array =info.slice(0,7) 
    var _htmlLeft,_htmlRight
    _array.forEach(function(v){
      if(v.keys=='mogujie'){
        _htmlLeft=_prefixleft+_prefixh2+v.name+_suffixph2+_prefixpcode+v.coupons+_suffixp+_prefixptip+v.rule+_suffixp+_suffixpdiv
        _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      } else if(v.keys=='huaweiwatch'||v.keys=='childwatch'){
        _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
        _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      } else if(v.keys=='yidongbi'){
        _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
        _htmlRight= _prefixright+_prefixpprice+'+'+v.price+_suffixp+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      } else {
        _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
        _htmlRight=_prefixright+_suffixpdiv
        $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
      }
    })
  }

  function reload(){
    if(count>=5){
      // count = count-10
      var _start = info.length-count
      var _end = _start+5
      var _array =info.slice(_start,_end)      
      var _htmlLeft,_htmlRight
      count = count-5;
      _array.forEach(function(v){
        if(v.keys=='mogujie'){
          _htmlLeft=_prefixleft+_prefixh2+v.name+_suffixph2+_prefixpcode+v.coupons+_suffixp+_prefixptip+v.rule+_suffixp+_suffixpdiv
          _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        } else if(v.keys=='huaweiwatch'||v.keys=='childwatch'){
          _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
          _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        } else if(v.keys=='yidongbi'){
          _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
          _htmlRight= _prefixright+_prefixpprice+'+'+v.price+_suffixp+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        } else {
          _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
          _htmlRight=_prefixright+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        }
      })  
      //每次刷新10条
    } else if(count<5&&count>0) {
      var _start = info.length-count
      var _end = info.length
      var _array =info.slice(_start,_end)
      count = 0      
      var _htmlLeft,_htmlRight
       _array.forEach(function(v){
        if(v.keys=='mogujie'){
          _htmlLeft=_prefixleft+_prefixh2+v.name+_suffixph2+_prefixpcode+v.coupons+_suffixp+_prefixptip+v.rule+_suffixp+_suffixpdiv
          _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        } else if(v.keys=='huaweiwatch'||v.keys=='childwatch'){
          _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
          _htmlRight= _prefixright+_prefixpprice+'￥'+v.price+_suffixp+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        } else if(v.keys=='yidongbi'){
          _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
          _htmlRight= _prefixright+_prefixpprice+'+'+v.price+_suffixp+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        } else {
          _htmlLeft=_prefixleft+_prefixh2ma+v.name+_suffixph2+_prefixptipma+v.rule+_suffixp+_suffixpdiv
          _htmlRight=_prefixright+_suffixpdiv
          $('#records').prepend(_prefixitem+_htmlLeft+_htmlRight+_suffixpdiv)
        }
      })  
    } else {
      $('#slideDown2>p').html('没有更多的中奖纪录啦~')
    }
  }

  //第一步：下拉过程 
  function slideDownStep1(dist){  // dist 下滑的距离，用以拉长背景模拟拉伸效果 
    var slideDown1 = document.getElementById("slideDown1"), 
        slideDown2 = document.getElementById("slideDown2"); 
        slideDown2.style.display = "none"; 
        slideDown1.style.display = "block"; 
        slideDown1.style.height = (parseInt("20px") - dist) + "px"; 
  } 
  //第二步：下拉，然后松开， 
  function slideDownStep2(){  
    var slideDown1 = document.getElementById("slideDown1"), 
        slideDown2 = document.getElementById("slideDown2"); 
        slideDown1.style.display = "none"; 
        slideDown1.style.height = "20px"; 
        slideDown2.style.display = "block"; 
        //刷新数据 
        //reload(); 
    } 
  //第三步：刷新完成，回归之前状态 
  function slideDownStep3(){
    //刷新数据 
    reload();
    var slideDown1 = document.getElementById("slideDown1"), 
        slideDown2 = document.getElementById("slideDown2"); 
        slideDown1.style.display = "none"; 
        slideDown2.style.display = "none"; 
  } 
 
  //下滑刷新调用 
  k_touch("records","y"); 
  //contentId表示对其进行事件绑定，way==>x表示水平方向的操作，y表示竖直方向的操作 
  function k_touch(contentId,way){  
    var _start = 0, 
        _end = 0, 
        _content = document.getElementById(contentId); 
        _content.addEventListener("touchstart",touchStart,false); 
        _content.addEventListener("touchmove",touchMove,false); 
        _content.addEventListener("touchend",touchEnd,false); 
        function touchStart(event){  
          var touch = event.targetTouches[0]; 
          if(way == "x"){  
            _start = touch.pageX; 
          }else{  
             _start = touch.pageY; 
          } 
        } 
        function touchMove(event){  
          var touch = event.targetTouches[0]; 
          if(way == "x"){  
            _end = (_start - touch.pageX); 
          }else{  
            _end = (_start - touch.pageY); 
            //上滑才执行操作 
            if(_end > 200){ 
              slideDownStep1(_end); 
            } 
          } 
 
        } 
        function touchEnd(event){  
          if(_end >200){  
            //console.log("左滑或上滑  "+_end); 
            slideDownStep2(); 
            //刷新成功则 
            //模拟刷新成功进入第三步 
            setTimeout(function(){  
                slideDownStep3(); 
            },2500); 
          }else{  
            //console.log("右滑或下滑"+_end);             
          } 
        } 
    } 
})