var gulp          = require('gulp');
var browserify    = require('browserify');
var babelify      = require('babelify');
var source        = require('vinyl-source-stream');
var serve         = require('gulp-serve');
var sass = require('gulp-sass');

gulp.task('build', function () {
  browserify({
    entries: 'src/js/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});
 
gulp.task('sass', function () {
  gulp.src('src/css/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.jsx', ['build']);
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('serve', serve({
  port: 3334
}));



gulp.task('default', ['build']);
gulp.task('dev', ['watch', 'serve']);