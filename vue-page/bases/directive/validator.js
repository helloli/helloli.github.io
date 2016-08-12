function Validator () {
    this.default = {
        required: function (value) {
            return value != '';
        }
    }
}