define(['text!./view.html', 'jquery', 'vue', 'css!./style.css'], function (view, $, vue) {
    return {
        template: view,
        data: function () {
            return {
                'logo': 'TEST'
            }
        }
    };
});