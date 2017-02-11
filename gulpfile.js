/* global __dirname */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var PROJECT_ROOT = __dirname;
var PROJECT_PATH = {
    'scss': PROJECT_ROOT + '/private/scss/',
    'css': PROJECT_ROOT + '/static/css/',
    'js': PROJECT_ROOT + '/static/js/'
};
var PROJECT_PATTERNS = {
    'scss': [
        PROJECT_PATH.scss + '**/*.scss',
        '!' + PROJECT_PATH.scss + '**/*.min.scss',
        '!' + PROJECT_PATH.scss + 'libs/*.scss'
    ],
    'js': [
        PROJECT_PATH.js + '**/*.js',
        '!' + PROJECT_PATH.js + '**/*.min.js',
        '!node_modules/**',
        PROJECT_ROOT + '/gulpfile.js'
    ]
};

gulp.task('webserver', function() {
    gulp.src('./')
    .pipe(webserver({
        livereload: true,
        directoryListing: {
            enable: true,
            path: './'
        },
        open: true
    }));
});

gulp.task('js', function () {
    return gulp.src(PROJECT_PATTERNS.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('js:watch', function () {
    gulp.watch(PROJECT_PATTERNS.js, ['js']);
});

gulp.task('scss', function() {
    return gulp.src(PROJECT_PATTERNS.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(PROJECT_PATH.css));
});
gulp.task('scss:watch', function () {
    gulp.watch(PROJECT_PATTERNS.scss, ['scss']);
});

gulp.task('watch', ['js:watch', 'scss:watch']);

gulp.task('default', ['js', 'scss']);