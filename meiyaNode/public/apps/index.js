define(['text!./view.html', '../components/diy/index', '../components/wild/index', '../components/pet/index', 'vue', 'bootstrap', 'vue-touch', 'infiniteScroll', 'css!./style.css'], function (_view, diy, wild, pet, Vue, bootstrap, vueTouch, infiniteScroll) {
    
    vue.use(vueTouch);
    vue.use(infiniteScroll);

    var app = new Vue({

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