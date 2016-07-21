require.config({
    paths: {
        'marked': 'node_modules/marked/lib/marked',
        'text': 'node_modules/text/text'
    }
});

require(['marked', 'text!node_modules/marked/README.md'], function (marked, md) {
    var $ = function (el) {
        return document.querySelector(el);
    }
    $('#content').innerHTML = marked(md);
});