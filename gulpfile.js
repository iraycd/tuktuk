var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('stylus', function () {
    gulp.src('./sources/stylesheets/tuktuk.*.styl')
        .pipe(stylus(
        	{
            paths: ["/home/stylus-plugins/"], // only needed in special cases,
            compress: true
        }))
        .pipe(concat("tuktuk.css"))
        .pipe(gulp.dest('./dest'));
});

gulp.task('theme_mock', function () {
    gulp.src('./sources/themes/mock/tuktuk.mock.*.styl')
        .pipe(stylus(
        	{
            paths: ["/home/stylus-plugins/"], // only needed in special cases,
            compress: true
        }))
        .pipe(concat("tuktuk.theme.mock.css"))
        .pipe(gulp.dest('./dest'));
});

gulp.task('theme_default', function () {
    gulp.src('./sources/themes/default/tuktuk.default.*.styl')
        .pipe(stylus(
            {
            paths: ["/home/stylus-plugins/"], // only needed in special cases,
            compress: true
        }))
        .pipe(concat("tuktuk.theme.default.css"))
        .pipe(gulp.dest('./dest'));
});


gulp.task('coffee', function() {
  gulp.src("./sources/*.coffee")
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(concat("tuktuk.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./dest'))
});

gulp.task('icons',function() {
    gulp.src("./sources/components/lungo.icon/lungo.icon.css")
    .pipe(concat("tuktuk.icons.css"))
    .pipe(gulp.dest("./dest"))
})

// Default gulp task to run
gulp.task('default', function(){
    gulp.run('stylus','theme_mock','theme_default','coffee','icons');
});