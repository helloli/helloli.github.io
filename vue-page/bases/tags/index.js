define(['text!./view.html', 'vue', './tags.js', 'css!./style.css'], function (view, vue) {
    return {
        template: view,

        data: function () {
            return {
            }
        },

        ready: function () {
            $(this.$el).tagbox({
                url : ["api","blog","bootstrap","carousel","comments","configuration","content","css","database","date","drafts","email","experiment","fancybox","flickr","forum","google","html5","images","installation","jquery","js","json","kirbytext","language","maps","markdown","masonry","metatags","pagination","panel","plugin","releases","rss","search","security","server","tags","thumbnails","toolkit","tutorial","twitter","typography","uri","use case","videos","yaml"]
            });
        }
    };
});