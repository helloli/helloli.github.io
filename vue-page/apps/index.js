define(['text!./view.html', '../components/header/index', '../bases/tags/index', 'vue', 'bootstrap', 'css!./style.css', '../bases/directive/index'], function (_view, header, tags, vue, bootstrap) {
    var app = new vue({
        el: 'body',
        replace: false,
        template: _view,
        data: {
            'appName': '',
            'obj': {
                required: true,
                range: {
                    mix: 1,
                    max: 10
                }
            },
            // 'tags': 'design,architecture,photography',
            // 'tags': 'design,architecture,photography,aaa,bbb,ccc,sss,ddd',
            // 'tags': ['design','architecture','photography','aaa','bbb','ccc','sss','ddd'],
            'tags': ['design','architecture','photography'],
            'options': {
                'readOnly': false,
                'maxTags': 6,
                // 'onLiClick': function (tag) {
                //     console.log(tag);
                // }
                'onExceed': function (exceed) {
                    console.log('tag数量超过限制了');
                },
            }
        },

        components: {
            'app-header': header,
            'tags': tags
        },

        methods: {
            persist: function () {
                console.log(this.tags);
                // console.log($('.tagboxified')[0].value);
                // alert(this.$validator());
            }
        }
    });
    return app;
})