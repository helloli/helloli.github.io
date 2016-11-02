define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                diyad: this.picUrlParser('a15b4afegw1f938pm4oo6j20ki03kmxr'),
                articles: [
                    {
                        id: 1,
                        avatar: 'a15b4afegw1f550ema2v8j203i03imx3',
                        pids: 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000,
                        author: '你丫才美工',
                        authorLink: 'www.baidu.com',
                        description: '测试',
                        favs: 666
                    }, {
                        id: 2,
                        avatar: 'a15b4afegw1f550ema2v8j203i03imx3',
                        pids: 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000,
                        author: '你丫才美工',
                        authorLink: 'www.baidu.com',
                        description: '测试',
                        favs: 666
                    }, {
                        id: 3,
                        avatar: 'a15b4afegw1f550ema2v8j203i03imx3',
                        pids: 'a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3,a15b4afegw1f550ema2v8j203i03imx3',
                        addTime: 1477985876000,
                        author: '你丫才美工',
                        authorLink: 'www.baidu.com',
                        description: '测试',
                        favs: 666
                    }, 
                ]
            }
        },

        methods: {
            picUrlParser: function (url, type) {
                type = type || 'large';
                return 'http://ww2.sinaimg.cn/' + type + '/' + url;
            }
        },

        ready: function () {
        }
    };
});