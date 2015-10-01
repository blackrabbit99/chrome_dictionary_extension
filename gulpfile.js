var gulp = require('gulp');
var zip = require('gulp-zip');
var fileList = [
  'background.js',
  'icon.png',
  'manifest.json',
];

gulp.task('default', function() {
  return gulp.src(fileList)
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});
