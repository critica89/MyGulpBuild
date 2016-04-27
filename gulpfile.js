var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    work: { //Пути откуда брать исходники
        html: 'work/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'work/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'work/scss/*.scss',
        img: 'work/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'work/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'work/**/*.html',
        js: 'work/js/**/*.js',
        scss: 'work/scss/**/*.scss',
        img: 'work/img/**/*.*',
        fonts: 'work/fonts/**/*.*'
    }    
};

gulp.task('image:build', function () {
    gulp.src(path.work.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],            
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build        
});

gulp.task('css:build', function () {
    sass(path.work.scss)
    	.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))             
        .pipe(gulp.dest(path.build.css));
});

gulp.task('build', [    
    'css:build',    
    'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start();
    });
    watch([path.watch.scss], function(event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start();
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start();
    });
});

gulp.task('default', ['build', 'watch']);