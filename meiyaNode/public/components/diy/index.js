define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                diyad: null,
                articles: [],
                busy: false,
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

            loadMore: function() {
                if (this.lastTime) {
                    var self = this;
                    this.busy = true;

                    setTimeout(function () {
                        $.get('/getNinePic', {time: Date.parse(new Date(self.lastTime))}, function (data) {
                            if (data.code == 200) {
                                self.articles = self.articles.concat(self.formatter(data.data));
                                // 取到数据的时候，可以继续触发上拉加载
                                self.busy = false;
                            } else {
                                // 取不到数据的时候，就不能上拉触发加载了
                                console.log('Nothing got.');
                            }
                        })
                    }, 1000);
                }
            }

        },

        ready: function () {
            var self = this;
            // 首次进入页面获取前十条数据，测试时间可以用1480499881000
            $.get('/getNinePic', {time: Date.parse(new Date())}, function (data) {
                // console.log(data.data);
                self.articles = self.formatter(data.data);
            })

            $.get('/getAdPic', function (data) {
                console.log(data);
                self.diyad = self.picUrlParser(data.data.pid);
            })
        }
    };
});