define(['text!./view.html', '../components/diy/index', '../components/wild/index', 'vue', 'bootstrap', 'css!./style.css'], function (_view, diy, wild, vue, bootstrap) {
    
    var app = new vue({

        el: 'body',

        replace: false,
        
        template: _view,
        
        data: function () {
            return {
                title: '@你丫才美工：最智(dou)慧(bi)设计帐号',
                currentView: 'app-diy'
            }
        },

        components: {
            'app-diy': diy,
            'app-wild': wild
        },

        methods: {

        }

    });
    
    return app;

})