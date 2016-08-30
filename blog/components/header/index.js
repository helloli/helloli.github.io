define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,
        data: function () {
            return {
                'logo': 'STI | 360天眼NGSOC团队博客'
            }
        }
    };
});