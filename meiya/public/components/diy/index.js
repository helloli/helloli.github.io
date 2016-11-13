define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                diyad: this.picUrlParser('a15b4afegw1f938pm4oo6j20ki03kmxr'),
                articles: this.formatter([
                    {
                        id: 1,
                        avatar: 'a15b4afegw1f550ema2v8j203i03imx3',
                        pids: 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876,
                        author: '你丫才美工',
                        authorLink: 'www.baidu.com',
                        description: '测试蚊子蚊子蚊子测试蚊子蚊子蚊子测试蚊子蚊子蚊子测试蚊子蚊子蚊子测试蚊子蚊子蚊子aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                        favs: 666,
                        original: 1
                    }, {
                        id: 2,
                        avatar: 'a15b4afegw1f550ema2v8j203i03imx3',
                        pids: 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876,
                        author: '你丫才黄瓜',
                        authorLink: 'www.baidu.com',
                        description: '测试',
                        favs: 666,
                        original: 1
                    }, {
                        id: 3,
                        avatar: 'a15b4afegw1f550ema2v8j203i03imx3',
                        pids: 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876,
                        author: '你丫才美工',
                        authorLink: 'www.baidu.com',
                        description: '测试',
                        favs: 666,
                        original: 0
                    }, 
                ])
            }
        },

        methods: {

            formatter: function (arr) {
                for (i in arr) {
                    arr[i].avatar = this.picUrlParser(arr[i].avatar);
                    arr[i].pids = this.pidsParser(arr[i].pids);
                    arr[i].addTime = new Date(parseInt(arr[i].addTime) * 1000).toLocaleString();
                    arr[i].author = '@' + arr[i].author;
                    arr[i].original = arr[i].original ? '原创' : '转载';
                }
                return arr;
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
            },

            // pids格式化
            pidsParser: function (string) {
                return this.picUrlParser(string.split(','));
            }

        },

        ready: function () {

        }
    };
});