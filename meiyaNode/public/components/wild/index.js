define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                wildad: null,
                lastTime: null,
                busy: false,
                articles: []
            }
        },

        methods: {

            formatter: function (arr) {
                this.lastTime = arr[arr.length - 1].addTime;
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
            },

            loadMore: function() {
                if (this.lastTime) {
                    var self = this;
                    this.busy = true;

                    setTimeout(function () {
                        $.get('/getWildPic', {time: Date.parse(new Date(self.lastTime))}, function (data) {
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
            // alert(this.articles);
            var self = this;
            // 首次进入页面获取前十条数据，测试时间可以用1480499881000
            $.get('/getWildPic', {time: Date.parse(new Date())}, function (data) {
                // console.log(data.data);
                self.articles = self.formatter(data.data);
            });

            $.get('/getAdPic', {type: 'wildpic'}, function (data) {
                // console.log(data);
                self.wildad = self.picUrlParser(data.data.pid);
            });

        }
    };
});