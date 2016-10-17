define(['text!./view.html', '../components/header/index', '../components/footer/index', 'vue', 'bootstrap', 'css!./style.css'], function (_view, header, footer, vue, bootstrap) {
    var app = new vue({
        el: 'body',
        replace: false,
        template: _view,
        data: {

        },

        components: {
            'app-header': header,
            'app-footer': footer
        },

        methods: {

        }
    });
    return app;
})