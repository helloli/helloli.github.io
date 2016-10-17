define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {
        template: view,
        data: function () {
            return {
                'logo': '@你丫才美工：最智(dou)慧(bi)设计帐号'
            }
        }
    };
});