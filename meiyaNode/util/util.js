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
                msg: msg || '出错了'
            });
        } else if (ret.length == 0) {
            res.json({
                code: 0,
                msg: msg || '没有数据'
            })
        } else {
            res.json(ret);
        }
    }
}