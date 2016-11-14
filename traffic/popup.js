var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom: 12,
    center: [116.397428, 39.90923]
});
var trafficLayer = new AMap.TileLayer.Traffic({
    zIndex: 10,
    autoRefresh: true,
    interval: 180
});
trafficLayer.setMap(map); 

// setTimeout(function() {                         // 删除版权信息
//     $('.amap-logo').fadeOut(2000);
//     $('.amap-copyright').fadeOut(2000);
// }, 1000)