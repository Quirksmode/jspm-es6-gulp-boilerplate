'use strict';

var dest = "./app/dest";
var src = './app/src';
var proxy = "examplesite.dev";

module.exports = {

    src: src,
    dest: dest,

    browserSync: {
        //proxy: proxy
        server: {
        baseDir: dest,
        },
        //tunnel: "example"
    },

    styles: {
        src: [
            src + '/assets/scss/**/*.scss',
            src + '/modules/**/*.scss'
        ],
        dest: dest + '/assets/css'
    },

    builder: {
        src: 'app/src/app/bootstrap',
        dest: dest + '/assets/js/app.js',
        configjs: './app/'
    },

    criticalcss: {
        src: dest + '/assets/css/styles.css',
        dest: dest + '/assets/css',
        inlineDest: dest + '/assets/css/',
        pages: [
            './app/src/index.html'
        ]
    },

    scripts: {
        src: [
            src + '/assets/js/**/*.js',
            src + '/modules/**/*.js'
        ],
        lint: [
            src + '/assets/js/**/modules/*.js',
            src + '/modules/**/*.js'
        ]
    },

    scriptsinline: {
        header: {
            src: src + '/assets/js/inline/header/**/*.js',
            dest: dest + '/assets/js/inline/',
            filename: 'header.js'
        },
        footer: {
            src: src + '/assets/js/inline/footer/**/*.js',
            dest: dest + '/assets/js/inline/',
            filename: 'footer.js'
        }
    },

    html: {
        src: src + '/**/*.html'
    },

    images: {
        src: src + '/assets/img/**/*',
        dest: dest + '/assets/img'
    },

    svg: {
        iconPrefix: 'icon-',
        iconFilename: 'icon.svg',

        svgforeground: {
            src: src + '/assets/img/svg/svg-foreground/*.svg',
            dest: dest + '/assets/img/svg'
        }
    },

    fonts: {
        src: src + '/assets/fonts/**/*',
        dest: dest + '/assets/fonts'
    }
};
