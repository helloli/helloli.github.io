module.exports = function (grunt) {

    require('time-grunt')(grunt);
    var self = this;

    try {
        var pkg = grunt.file.readJSON('./package.json');
    } catch (e) {
        console.log('读取package.json失败！');
        return;
    }

    var Tasks = function () {
        this.configs = {
            pkg: pkg
        }
    };

    Tasks.prototype.uglify = function () {

        var config = {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './src/_es6/test.js',
                dest: './src/amd/test.min.js'
            }
        };

        this.configs.uglify = config;
        grunt.loadNpmTasks('grunt-contrib-uglify');
        return this;

    };


    var task = new Tasks();
    task.uglify();

    grunt.initConfig(task.configs);
    grunt.registerTask('default', ['uglify']);

}