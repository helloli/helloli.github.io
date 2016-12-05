define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                diyad: this.picUrlParser('a15b4afegw1f938pm4oo6j20ki03kmxr'),
                articles: [],
                busyNinePic: false,
                lastTime: null
            }
        },

        methods: {

            formatter: function (arr) {
                this.lastTime = arr[arr.length - 1].addTime;
                for (i in arr) {
                    arr[i].avatar = this.picUrlParser(arr[i].avatar);
                    arr[i].pids = this.pidsParser(arr[i].pids);
                    arr[i].addTime = new Date(arr[i].addTime).toLocaleString();
                    // arr[i].addTime = new Date(parseInt(arr[i].addTime) * 1000).toLocaleString();
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
            },

            loadMoreNinePic: function() {
                if (this.lastTime) {
                    var self = this;
                    this.busyNinePic = true;

                    setTimeout(function () {
                        // console.log(self.lastTime);
                        $.get('/getNinePic', {time: Date.parse(new Date(self.lastTime))}, function (data) {
                            // console.log(data.data);
                            if (data.code == 200) {
                                self.articles = self.articles.concat(self.formatter(data.data));
                            } else {
                                console.log('Nothing got.');
                            }
                        })
                        this.busyNinePic = false;
                    }, 1000);
                }
            }

        },

        ready: function () {
            var self = this;
            // 测试时间可以用1480499881000
            $.get('/getNinePic', {time: Date.parse(new Date())}, function (data) {
                // console.log(data.data);
                self.articles = self.formatter(data.data);
            })
        }
    };
});