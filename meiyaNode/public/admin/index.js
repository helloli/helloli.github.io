define(['text!./view.html', '../components/diy/index', '../components/wild/index', '../components/pet/index', 'vue', 'bootstrap', 'css!./style.css'], function (_view, diy, wild, pet, vue, bootstrap) {
    
    // vue.use(vueTouch);
    vue.use(infiniteScroll);

    var app = new vue({

        el: 'body',

        replace: false,
        
        template: _view,
        
        data: function () {
            return {
                currentView: 'app-diy'
            }
        },

        components: {
            'app-diy': diy,
            'app-wild': wild,
            'app-pet': pet
        },

        methods: {
            changeView: function (view) {
                this.currentView = 'app-' + view;
            }
        },

        ready: function () {
        }

    });

    return app;

})