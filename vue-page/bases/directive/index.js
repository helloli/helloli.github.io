define(['vue', './validator', 'css!./style.css'], function (Vue, validator) {
    var validator = new Validator();

    /**
     * 为Vue增加验证方法
     */
    Vue.prototype.$validator = function(models) {
        var configs = validator.default,
            validate = this.validate,
            result = true;
        //验证models
        var _models = validate,
            isArray = false;
        var _original_toString = Object.prototype.toString;
        //指定验证项为数组
        if(typeof models === 'object' && _original_toString.call(models) === '[object Array]') {
            _models = models;
            isArray = true;
        }
        for(var _model in _models) {
            var model = isArray ? _models[_model]: _model,
                _validate = validate[model];
            //排除指定无效数据
            if(typeof _validate !== 'undefined') {
                //遍历绑定的model值
                for(var v in _validate) {
                    var option = this.validateOption[model][v];
                    //进行验证校验
                    if (typeof configs[v] === 'function') {
                        this[model] = this[model]?this[model]:'';
                        var valide = !!configs[v](this[model], option);
                        this.$set('validate.' + model + '.' + v, valide);
                        if(!valide) result = false;
                    }
                }
            }

            this.$set('validate.' + model + '.result', result);
        }

        return result;
    }

    Vue.directive('sti-validate', {
        params: ['voption'],
        bind: function () {
            // 准备工作
            // 例如，添加事件处理器或只需要运行一次的高耗任务
            this.update_enable = false;
            var self = this,
                configs = validator.default,
                arg = this.arg,
                expression,
                option = this.params.voption || {},
                events = ['change', 'blur'];

            // 判断表达式是字符串还是对象，做不同的赋值处理
            if (/^{.*}$/.test(this.expression)) {
                expression = JSON.parse(this.expression.replace(/\'/g, '"')) || {};
            } else {
                expression = self.vm[this.expression];
            }

            // 第一次进入的时候会出发update，通过validated来取消因此产生的验证
            this.validated = false;
            this.vm.$set('validate' + '.' + arg + '.' +'result', true);

            // 首次进入页面不进行验证
            if (!this.validated) {
                for (var p in expression) {
                    if (typeof configs[p] === 'function') {
                        //设置option
                        this.vm.$set('validateOption.' + arg + '.' + p, expression[p]);
                        this.vm.$set('validate.' + arg + '.' + p , true);
                    }
                }
            }

            // 根据option来设置出发时机，默认是组件的oninput事件，支持onchange和onblur事件
            option['on'] = (option && option.hasOwnProperty('on') && events.indexOf(option['on']) > -1 && option['on']) || '';
            if (!option['on']) {
                // 没有设置option
                this.vm.$watch(arg, function (newValue, oldValue) {
                    if (!self.validated) {
                        self.validated = true;
                    } else {
                        var flag = true;
                        self.vm.$set('validate.' + arg + '.result', true);
                        // 逐项验证
                        for (var p in expression) {
                            if (typeof configs[p] === 'function') {
                                var part_validate = !!configs[p](self.vm[arg]?self.vm[arg]:'', expression[p]);
                                if (flag && !part_validate) {
                                    //有一项验证失败，则结果失败
                                    self.vm.$set('validate.' + arg + '.result', false);
                                    flag = false;
                                }
                                self.vm.$set('validate.' + arg + '.' + p, part_validate);
                            }
                        }
                    }
                })
            } else {
                // 设置了option
                this.el['on' + option['on']] = function () {

                    var flag = true;
                    self.vm.$set('validate.' + arg + '.result', true);
                    // 逐项验证
                    for (var p in expression) {
                        if (typeof configs[p] === 'function') {
                            var part_validate = !!configs[p](self.vm[arg]?self.vm[arg]:'', expression[p]);
                            if (flag && !part_validate) {
                                //有一项验证失败，则结果失败
                                self.vm.$set('validate.' + arg + '.result', false);
                                flag = false;
                            }
                            self.vm.$set('validate.' + arg + '.' + p, part_validate);
                        }
                    }
                }
            }
        },
        update: function (newValue, oldValue) {
            // 值更新时的工作
            // 也会以初始值为参数调用一次
        },
        unbind: function () {
            // 清理工作
            // 例如，删除 bind() 添加的事件监听器
        }
    })
})