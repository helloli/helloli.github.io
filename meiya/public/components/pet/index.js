define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
            }
        },

        ready: function () {
            console.log('wild');
        }
    };
});