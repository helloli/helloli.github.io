define(['vue', './validator', 'css!./style.css'], function (Vue, validator) {
    var validator = new Validator();
    Vue.directive('my-directive', {
        bind: function () {
            // 准备工作
            // 例如，添加事件处理器或只需要运行一次的高耗任务
            console.log(validator);
        },
        update: function (newValue, oldValue) {
            // 值更新时的工作
            // 也会以初始值为参数调用一次
            console.log('update'); 
        },
        unbind: function () {
            // 清理工作
            // 例如，删除 bind() 添加的事件监听器
        }
    })
})