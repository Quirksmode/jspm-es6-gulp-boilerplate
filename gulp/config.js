'use strict';

var src = './app/src';
var dest = {
    root: './app/dest',
    templates: './app/dest',
    assets: './app/dest/assets'
};
var proxy = "examplesite.dev";

module.exports = {

    src: src,
    dest: dest,

    browserSync: {
        //proxy: proxy,
        server: {
           baseDir: dest.root,
           // serve our jspm dependencies with the client folder
           routes: {
                '/jspm.config.js': './jspm.config.js',
                '/jspm_packages': './jspm_packages'
            }
        },
        //tunnel: "novartis"
    },

    fonts: {
        src: src + '/assets/fonts/**/*',
        dest: dest.assets + '/fonts'
    },

    images: {
        src: src + '/assets/img/**/*',
        dest: dest.assets + '/img'
    },

    move: {
        base: src,
        dev: {
            src: [
                //src + '/assets/js/lib/**/*',
                src + '/modules/**/*.js',
                src + '/modules/**/*.tpl.html'
            ]
        },
        prod: {
            src: [
                src + '/modules/**/*.js',
                src + '/modules/**/*.tpl.html'
            ]
        },
        //dest: dest.assets + '/js/app/'
        dest: dest.root
    },

    moveJSPM: {
        base: './',
        dev: {
            src: [
                './jspm.config.js',
                './jspm_packages/**/*'
            ],
        },
        prod: {
            src: [
                './jspm.config.js'
            ],
        },
        dest: dest.root
    },

    moveTemplates: {
        src: [
            src + '/**/*.html'
        ],
        dest: dest.templates
    },

    scripts: {
        src: [
            src + '/assets/js/**/*.js',
            src + '/modules/**/*.js'
        ],
        lint: [
            src + '/assets/js/**/modules/*.js',
            src + '/modules/**/*.js',
            '!' + src + '/assets/js/lib/**/*.js',
            '!' + src + '/assets/js/inline/header/lib/**/*.js',
            '!' + src + '/assets/js/inline/footer/lib/**/*.js'
        ]
    },

    scriptsinline: {
        header: {
            src: src + '/assets/js/inline/header/**/*.js',
            dest: dest.assets + '/js/inline/',
            filename: 'header.js'
        },
        footer: {
            src: src + '/assets/js/inline/footer/**/*.js',
            dest: dest.assets + '/js/inline/',
            filename: 'footer.js'
        }
    },

    styles: {
        src: [
            src + '/assets/scss/**/*.scss',
            src + '/modules/**/*.scss'
        ],
        dest: dest.assets + '/css'
    },

    svg: {
        iconPrefix: 'icon-',
        iconFilename: 'icon.svg',

        svgforeground: {
            src: src + '/assets/img/svg/svg-foreground/*.svg',
            dest: dest.assets + '/img/svg'
        }
    },

    systemjsBuilder: {
        src: 'app/src/modules/main',
        dest: dest.assets + '/js/app.js'
    }

};