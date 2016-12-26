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

            // 登出
            logout: function () {
                $.get('admin/logout', function (res) {
                    console.log('res.msg');
                })
            },

            getPids: function () {
                var result = [];
                $('.filelist li').each(function() {
                    result.push($(this).attr('pid'));
                });
                return result.join(',');
            },

            // 九图提交
            nineSubmit: function () {
                // console.log(this.getPids());
                
            }
        },

        ready: function () {
            
        }

    });
})