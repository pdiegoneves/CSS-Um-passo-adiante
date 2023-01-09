var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')

gulp.task('default', function () {
  console.log('Hello World!')
})

gulp.task('minify-css', function () {
    return gulp.src('style/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('style'))
})
