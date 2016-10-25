define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {

        template: view,

        data: function () {
            return {
                name: '消息中心',
                mcenterShow: false,
                messages: [
                    {
                        text: '你刚刚登出了系统你刚刚登出了系统你刚刚登出了系统你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539000
                    }, {
                        text: 'this is a testtest test testtest. this is a testtest test testtest. this is a testtest test testtest',
                        type: 'success',
                        time: 1477306753000
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539000
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753000
                    }, {
                        text: '你刚刚登出了系统',
                        type: 'success',
                        time: 1477306539000
                    }, {
                        text: '你刚刚登陆了系统',
                        type: 'success',
                        time: 1477306753000
                    }
                ]
            }
        },

        events: {
            'message': function (text, type) {
                this.addMessage(text, type);
            },
            'messageShow': function (value) {
                this.mcenterShow = !!value;
            }
        },

        methods: {

            getLocalTime: function (timestamp) {     
                return new Date(parseInt(timestamp)).toLocaleString();     
            },

            addMessage: function (text, type) {
                this.messages.unshift({'text': text, 'type': type, 'time': Date.parse(new Date())});
            },

            removeMessage: function (index) {
                this.messages.splice(index, 1);
            }

        }

    };
});