define(['text!./view.html', 'vue', './tags.js', 'css!./style.css'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                // value: ''
            }
        },

        props: {
            // 编辑时最大标签数，默认为5
            maxTags      : {default: 5},
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
            // 定义分隔符，有问题，先不支持
            // separator    : {default: ','},
            // 允许重复的tags
            duplicates   : {default: false},
            // 设置tag的最小长度
            minLength    : {default: 1},
            // 设置tag的最大长度
            maxLength    : {default: 20},
            // 只读时候，每个标签的click事件，返回点击的tag名称
            onLiClick    : {default: function () {}},
            // 编辑时候，添加tag的事件，返回tag, tags, li, exceed
            onAdd    : {default: function () {}},
            // 也可以通过配置options对象来配置，options会覆盖以上的配置
            options      : {default: {}}
        },

        ready: function () {
            var self = this;
            // this.$el.value = this.tags;
            this.url = ["api","blog","bootstrap","carousel","comments","configuration","content",
                        "css","database","date","drafts","email","experiment","fancybox","flickr",
                        "forum","google","html5","images","installation","jquery","js","json",
                        "kirbytext","language","maps","markdown","masonry","metatags","pagination",
                        "panel","plugin","releases","rss","search","security","server","tags",
                        "thumbnails","toolkit","tutorial","twitter","typography","uri","use case",
                        "videos","yaml"];

            this.ro = $.extend({}, {readOnly: self.readOnly}, self.options).readOnly;
            this.mt = $.extend({}, {maxTags: self.maxTags}, self.options).maxTags;
            $(this.$el).tagbox($.extend({}, {
                maxTags: this.maxTags,
                readOnly: this.readOnly,
                url: this.url,
                lowercase: this.lowercase,
                classname: this.classname,
                // separator: this.separator,
                duplicates: this.duplicates,
                minLength: this.minLength,
                maxLength: this.maxLength,
                onAdd: this.onAdd,
                // function (tag, tags, li, exceed) {
                //     if (exceed) {
                //         console.log('标签数目不能超过' + self.mt);
                //     }
                // },
                onReady: function () {
                    if (self.ro) {
                        $(self.$el).parent().find('.new > input').css('display', 'none');
                    }
                },
                onLiClick: self.onLiClick
            }, this.options));

        }
    };
});