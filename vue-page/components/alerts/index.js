define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {

        template: view,

        props: ['maxAlert'],

        data: function () {
            return {
                maxAlert: this.maxAlert || 5,
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
                if (this.alertList.length == this.maxAlert) {
                    this.alertList.shift();
                }
                this.alertList.push({'message': message, 'type': type ||'success'});
            },

            delAlert: function (index) {
                this.alertList.splice(index, 1);
            }

        }

    };
});