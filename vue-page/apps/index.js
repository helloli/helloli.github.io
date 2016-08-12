define(['text!./view.html', '../components/header/index', 'vue', 'bootstrap', 'css!./style.css', '../bases/directive/index'], function (_view, header, vue, bootstrap) {
    var app = new vue({
        el: 'body',
        replace: false,
        template: _view,
        data: {
            'appName': ''
        },
        components: {
            'app-header': header
        }
    });
    return app;
})