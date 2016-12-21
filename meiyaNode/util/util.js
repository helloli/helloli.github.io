module.exports = {
    cloneObj: function (obj) {
        var str, newobj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object'){
            return;
        } else if(JSON){
            str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
        } else {
            for(var i in obj){
                newobj[i] = typeof obj[i] === 'object' ? 
                cloneObj(obj[i]) : obj[i]; 
            }
        }
        return newobj;
    },

    // 向前台返回JSON方法的简单封装
    jsonWrite: function (res, ret, msg) {
        if (typeof ret === 'undefined') {
            res.json({
                code: -1,
                msg: msg || '服务器出错了，程序猿小黄瓜表示压力山大>_<'
            });
        } else if (ret.length == 0) {
            res.json({
                code: 0,
                msg: msg || '木有数据了>_<'
            })
        } else {
            res.json(ret);
        }
    }
}