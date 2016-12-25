$(function(){
    new Vue({

        el: 'body',

        replace: false,
        
        data: function () {
            return {
                nine_type: '',
                nine_type_options: [
                    {
                        name: '原创',
                        value: 0
                    }, {
                        name: '转载',
                        value: 1
                    }
                ]
            }
        },

        methods: {
            logout: function () {
                $.get('admin/logout', function (res) {
                    console.log('res.msg');
                })
            }
        },

        ready: function () {
            
        }

    });
})