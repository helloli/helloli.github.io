define(['text!./view.html', './comps/statistics/index', './comps/ninepic/index', './comps/wildpic/index', './comps/petpic/index', 'vue', 'bootstrap', 'css!./style.css'], function (_view, statistics, ninepic, wildpic, petpic, vue, bootstrap) {
    
    // vue.use(vueTouch);
    // vue.use(infiniteScroll);

    var app = new vue({

        el: 'body',

        replace: false,
        
        template: _view,
        
        data: function () {
            return {
                currentView: 'statistics'
            }
        },

        components: {
            'statistics': statistics,
            'ninepic': ninepic,
            'wildpic': wildpic,
            'petpic': petpic
        },

        methods: {
            changeView: function (view) {
                this.currentView = view;
            }
        },

        ready: function () {
        }

    });

    return app;

})