define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {
        template: view,
        data: function () {
            return {
                'logo': 'TEST'
            }
        }
    };
});