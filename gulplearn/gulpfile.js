// node模块
var gulp = require('gulp'),
    yaml = require('js-yaml'),
    fs = require('fs'),
    path = require('path'),
    del = require('del')

// 测试开始
// try {
//     var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '/_config.yml'), 'utf8'));
//     console.log(doc);
// } catch (e) {
//     console.log(e);
// }

gulp.task('cleanRoot', function (done) {
    return del('./amd/*', {
        force: true
    });
})

// gulp.task('')

gulp.task('default', ['cleanRoot', '']);