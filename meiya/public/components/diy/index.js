define(['text!./view.html', 'vue'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
                ad: this.picUrlParser('a15b4afegw1f938pm4oo6j20ki03kmxr')
            }
        },

        methods: {
            picUrlParser: function (url, type) {
                type = type || 'large';
                return 'http://ww2.sinaimg.cn/' + type + '/' + url;
            }
        },

        ready: function () {
        }
    };
});