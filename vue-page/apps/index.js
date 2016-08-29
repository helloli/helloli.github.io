define(['text!./view.html', '../components/header/index', 'vue', 'bootstrap', 'css!./style.css', '../bases/directive/index'], function (_view, header, vue, bootstrap) {
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
            }
        },
        components: {
            'app-header': header
        },
        methods: {
            persist: function () {
                alert(this.$validator());
            }
        }
    });
    return app;
})