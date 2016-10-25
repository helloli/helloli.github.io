define(['text!./view.html', 'vue', 'css!./style.css'], function (view, vue) {
    return {

        template: view,

        props: ['maxAlert'],

        data: function () {
            return {
                alertId: 0,
                maxAlert: this.maxAlert || 5,
                alertList: []
            }
        },

        ready: function () {

        },

        events: {
            'alert': function (message, type, alertId) {
                this.addAlert(message, type, alertId);
            }
        },

        methods: {

            addAlert: function (message, type, alertId) {
                if (this.alertList.length == this.maxAlert) {
                    this.alertList.shift();
                }
                this.alertList.push({'message': message, 'type': type, alertId: this.alertId ++});
            },

            delAlert: function (alertId) {
                for (var i = 0, len = this.alertList.length; i < len; i ++) {
                    if (this.alertList[i].alertId == alertId) {
                        this.alertList.splice(i, 1);
                        return;
                    }
                }
            }

        }

    };
});