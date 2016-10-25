define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {

        template: view,

        data: function () {
            return {
                name: '消息中心',
                messages: [
                    {
                        text: '你刚刚登出了系统你刚刚登出了系统你刚刚登出了系统你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: 'this is a testtest test testtest. this is a testtest test testtest. this is a testtest test testtest',
                        type: 'success',
                        time: 1477306753
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753
                    },
                ]
            }
        },

        methods: {
            getLocalTime: function (timestamp) {     
                return new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
            }   
        }

    };
});