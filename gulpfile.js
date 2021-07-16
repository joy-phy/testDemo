const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const less = require('gulp-less');
const path = require('path');
const concat = require('gulp-concat');
gulp.task('concatjs',()=>{
    return gulp.src('./src/js/*.js').pipe(concat('all.js').pipe(gulp.dest('./dist/js')))
})
gulp.task('less', function () {
    return gulp.src('./src/style/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('copycss',()=>{
    return gulp.src('./src/css/*.css').pipe(gulp.dest('./dist/css'))
});
gulp.task('copyimg',()=>{
    return gulp.src('./src/images/*').pipe(gulp.dest('./dist/images'))
});

gulp.task('copyindex', () => {
    return gulp.src('./src/html/*.html').pipe(gulp.dest('./dist/html'))
});
gulp.task('copyjs', () => {
    return gulp.src('./src/js/*').pipe(gulp.dest('./dist/js'))
});
gulp.task('htmlmin', () => {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/html'))
});
gulp.task('cssmin',()=>{
    return gulp.src('./src/css/**/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('jsmin', function () {
    return gulp.src('./src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('watch',()=>{
    gulp.watch('./src/style/*.less',gulp.series('less'))
});
gulp.task('imagemin',function(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}) ;
    


gulp.task('build',gulp.series('copycss','copyindex','copyjs','htmlmin','cssmin','jsmin','imagemin'))