define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {

        template: view,

        props: {
            maxAlert: {
                default: 5
            }
        },

        data: function () {
            return {
                alertList: []
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
                if (this.alertList.length >= this.maxAlert) {
                    this.alertList.splice(0, this.alertList.length - this.maxAlert + 1);
                }
                this.alertList.push({'message': message, 'type': type ||'success'});
            },

            delAlert: function (index) {
                this.alertList.splice(index, 1);
            }

        }

    };
});