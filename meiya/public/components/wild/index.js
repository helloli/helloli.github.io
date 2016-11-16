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
                        addTime: '2016-11-16 16:35:51'
                    }, {
                        id: 2,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:50'
                    }, {
                        id: 3,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:49'
                    },  {
                        id: 4,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:48'
                    },  {
                        id: 5,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:47'
                    },  {
                        id: 6,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:46'
                    },  {
                        id: 7,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:45'
                    },  {
                        id: 8,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:44'
                    },  {
                        id: 9,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:43'
                    },  {
                        id: 10,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-16 16:35:42'
                    }, {
                        id: 11,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-15 16:35:51'
                    }, {
                        id: 12,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-15 16:35:50'
                    }, {
                        id: 13,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-15 16:35:49'
                    },  {
                        id: 14,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-15 16:35:48'
                    },  {
                        id: 15,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-15 16:35:47'
                    },  {
                        id: 16,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-13 16:35:46'
                    },  {
                        id: 17,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-13 16:35:45'
                    },  {
                        id: 18,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-13 16:35:44'
                    },  {
                        id: 19,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-13 16:35:43'
                    },  {
                        id: 20,
                        pid: 'a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: '2016-11-12 16:35:42'
                    }, 
                ])
            }
        },

        methods: {

            formatter: function (arr) {
                var resultObj = {},
                    resultArr = [];
                for (var i in arr) {
                    // arr[i].pid = this.picUrlParser(arr[i].pid);
                    var addDate = new Date(arr[i].addTime).toLocaleDateString().replace(/\//g, '.');
                    if (resultObj.hasOwnProperty(addDate)) {
                        resultObj[addDate].unshift(arr[i]);
                    } else {
                        resultObj[addDate] = [arr[i]];
                    }
                }
                // for (var j in resultObj) {

                // }
                return resultObj;
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

        }
    };
});