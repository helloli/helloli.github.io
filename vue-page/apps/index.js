define(['text!./view.html', '../components/header/index', '../components/alerts/index', '../components/messageCenter/index', '../bases/tags/index', 'vue', 'bootstrap', 'css!./style.css', '../bases/directive/index'], function (_view, header, alerts, mcenter, tags, vue, bootstrap) {
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
                'maxTags': 20,
                'onLiClick': function (tag) {
                    console.log(tag);
                },
                'onExceed': function (exceed) {
                    console.log('tag数量超过限制了');
                },
                // 'maxLength': 10,
                // 'minLength': 5,
            }
        },

        components: {
            'app-header': header,
            'app-alerts': alerts,
            'app-mcenter': mcenter,
            'tags': tags
        },

        methods: {
            showMessageCenter: function (value) {
                this.$broadcast('messageShow', value);
            },
            persist: function () {
                // console.log(this.tags);
                this.$broadcast('alert', Math.random(), 'success');
                this.$broadcast('alert', Math.random(), 'error');
                this.$broadcast('message', Math.random());
                // alert(this.$validator());
            }
        }
    });
    return app;
})