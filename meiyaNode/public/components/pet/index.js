define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                wildad: this.picUrlParser('a15b4afegw1f938pm4oo6j20ki03kmxr'),
                articles: this.formatter([
                    {
                        id: 1,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    }, {
                        id: 2,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    }, {
                        id: 3,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    },  {
                        id: 4,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    },  {
                        id: 5,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1474985876000
                    },  {
                        id: 6,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 7,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 8,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 9,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    },  {
                        id: 10,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    }, {
                        id: 11,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    }, {
                        id: 12,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    }, {
                        id: 13,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 14,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 15,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 16,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 17,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    },  {
                        id: 18,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1472985876000
                    },  {
                        id: 19,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    },  {
                        id: 20,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000
                    }, 
                ])
            }
        },

        methods: {

            formatter: function (arr) {
                var resultObj = {},
                    resultArr = [];
                // 把数据按照日期进行归类，放到resultObj对象中
                for (var i in arr) {
                    arr[i].pid = this.picUrlParser(arr[i].pid);
                    var addDate = new Date(arr[i].addTime).toLocaleDateString().replace(/\//g, '.');
                    if (resultObj.hasOwnProperty(addDate)) {
                        resultObj[addDate].unshift(arr[i]);
                    } else {
                        resultObj[addDate] = [arr[i]];
                    }
                }
                // 将resultObj按照时间最新的在最前面规则，放到数组中
                for (var j in resultObj) {
                    var temp = {};
                    temp['date'] = j;
                    temp['pics'] = resultObj[j].sort(function(x, y) {
                        return new Date(x.addTime) < new Date(y.addTime);
                    });
                    resultArr.push(temp);
                }
                // 返回按照日期新旧排序好的数组
                return resultArr.sort(function(a, b) {
                    return new Date(a.date) < new Date(b.date);
                });
            },

            // url格式化。支持数组。
            picUrlParser: function (url, type) {
                type = type || 'large';
                if (url instanceof Array) {
                    for (var i in url) {
                        url[i] = this.picUrlParser(url[i], type);
                    }
                    return url;
                }
                return 'http://ww2.sinaimg.cn/' + type + '/' + url;
            }

        },

        ready: function () {
            // alert(this.articles);
        }
    };
});