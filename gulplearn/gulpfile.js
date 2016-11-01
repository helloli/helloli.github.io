// node模块
var gulp = require('gulp'),
    yaml = require('js-yaml'),
    fs = require('fs'),
    path = require('path')

// 测试开始
try {
    var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '/_config.yml'), 'utf8'));
    console.log(doc);
} catch (e) {
    console.log(e);
}

gulp.task('default', function() {
  // 做一些事
});