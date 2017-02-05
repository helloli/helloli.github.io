require.config({
    paths: {
        'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap.min',
        'jQuery': 'node_modules/jquery/dist/jquery.min',
        'webuploader': 'node_modules/webuploader/dist/webuploader.min',
        'upload': 'javascripts/upload'
    },
    shim: {
        'jQuery': {
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jQuery']
        },
        'webuploader': {
            deps: ['jQuery']
        }
    },
    packages: [{
        name: 'vue',
        location: 'node_modules/vue',
        main: 'dist/vue.min'
    }, {
        name: 'text',
        location: 'node_modules/text',
        main: 'text'
    }, {
        name: 'css',
        location: 'node_modules/require-css',
        main: 'css.min'
    }]
});

require(['admin/index']);