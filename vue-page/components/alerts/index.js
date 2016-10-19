define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {

        template: view,

        props: ['maxAlert'],

        data: function () {
            return {
                maxAlert: this.maxAlert || 5,
                alertList: [
                // {
                //     'message': '恭喜您，注册成功！',
                //     'type': 'success'
                // }, {
                //     'message': '恭喜您，注册成功！',
                //     'type': 'error'
                // }, {
                //     'message': '恭喜您，注册成功！恭喜您，注册成功！恭喜您，注册成功！',
                //     'type': 'warnning'
                // }, {
                //     'message': '恭喜您，注册成功！恭喜您，注册成功！恭喜您，注册成功！',
                //     'type': 'message'
                // }, {
                //     'message': '恭喜您，注册成功！恭喜您，注册成功！恭喜您，注册成功！',
                //     'type': 'success'
                // }
                ]
            }
        },

        ready: function () {

        },

        events: {
            'alert': function (message, type) {
                this.addAlert(message, type);
            }
        },

        methods: {

            addAlert: function (message, type) {
                if (this.alertList.length == this.maxAlert) {
                    this.alertList.shift();
                }
                this.alertList.push({'message': message, 'type': type});
            },

            delAlert: function (index) {
                this.alertList.shift();
            }

        }

    };
});