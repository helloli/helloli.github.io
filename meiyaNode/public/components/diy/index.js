define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                diyad: this.picUrlParser('a15b4afegw1f938pm4oo6j20ki03kmxr'),
                articles: []
            }
        },

        methods: {

            formatter: function (arr) {
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