define(['text!./view.html', 'vue', './tags.js', 'css!./style.css'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                // value: ''
            }
        },

        props: {
            // 所有的标签数组
            tags         : '',
            // 只读，不可编辑和删除
            readOnly     : {default: false},
            // 自动填充的提示文字，可以是url，也可以是字符串数组
            url          : {default: []},
            // 大小写敏感
            lowercase    : {default: true},
            // 定义tagbox的css样式名
            classname    : {default: 'tagbox'},
            // 定义分隔符
            separator    : {default: ','},
            // 允许重复的tags
            duplicates   : {default: false},
            // 设置tag的最小长度
            minLength    : {default: 1},
            // 设置tag的最大长度
            maxLength    : {default: 20},
            // 也可以通过配置options对象来配置，options会覆盖以上的配置
            options      : {default: {}}
        },

        computed: {
            // tags: function () {
            //     return this.$el.value;
            // }
        },

        ready: function () {
            console.log(this.tags);
            var self = this
            // this.$el.value = this.tags;
            this.url = ["api","blog","bootstrap","carousel","comments","configuration","content",
                        "css","database","date","drafts","email","experiment","fancybox","flickr",
                        "forum","google","html5","images","installation","jquery","js","json",
                        "kirbytext","language","maps","markdown","masonry","metatags","pagination",
                        "panel","plugin","releases","rss","search","security","server","tags",
                        "thumbnails","toolkit","tutorial","twitter","typography","uri","use case",
                        "videos","yaml"];

            $(this.$el).tagbox($.extend({}, {
                readOnly: this.readOnly,
                url: this.url,
                lowercase: this.lowercase,
                classname: this.classname,
                separator: this.separator,
                duplicates: this.duplicates,
                minLength: this.minLength,
                maxLength: this.maxLength,
                onAdd: function (tag, tags) {
                    self.tags = tags;
                }
            }, this.options));

        }
    };
});