function Validator () {
    this.default = {
        // 请不要添加名字为'result'的验证函数
        required: function(value) {
            return value!='';
        },
        email: function(value) {
            return value==''?true:/^([\w\.-]+@[\w\.-]+(\.[\w\.-]+)+\s*,\s*)*[\w\.-]+@[\w\.-]+(\.[\w\.-]+)+$/.test(value);
        },
        mobile: function(value) {
            return value==''?true:/^(1\d{10}\s*,\s*)*1\d{10}$/.test(value);
        },
        ipaddress: function(value) {
            return value==''?true:/^(((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)\s*,\s*)*((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(value);
        },
        port: function(value) {
            return value==''?true:/^(([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])\s*,\s*)*([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(value);
        },
        //整数验证
        int: function(value) {
            return value==''?true:/^[1-9]+[0-9]*]*$/.test(value);
        },
        //整数范围验证
        range: function(value, obj) {
            if(value == '') {
                return true
            } else if(value.indexOf('0') == 0 && value.length > 1) {
                return false
            } else {
                var value = +value;
                if(/^[0-9]*$/.test(value)) {
                    return (obj.min?value>=obj.min:true) && (obj.max?value<=obj.max:true);
                }
                return false
            }
        },
        //字符串长度验证
        length: function(value, obj) {
            return value==''?true:(obj.min?value.length>=obj.min:true) && (obj.max?value.length<=obj.max:true);
        },
        mask: function(value) {
            return value=='' ? true : ( value<0 || value>31 ? false : true );
        },
        // 规则名称验证，是否含有&或<
        rule: function(value) {
            return value == '' ? true : !(/&|</.test(value));
        },
        illegalcharacter: function(value) {
            return value == '' ? true : !(/<|>|\\|\/|\*|:|\?|'|"|\|/.test(value));
        }
    }
}