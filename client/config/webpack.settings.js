module.exports = {
    paths: {
        src: {
            base: '../src/',
            js: '../src/js/',
            css: '../src/css/'
        },
        dist: {
            base: '../../public',
            clean: ['public/*.*']
        },
        templates: {
            index: './templates/index.html'
        },
        favicon: './client/src/img/favicon.jpg'
    },
    entries: {
        app: 'index.js'
    }
};
