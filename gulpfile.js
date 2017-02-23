const gulp = require('gulp');
const aglio = require('gulp-aglio');
const aglioConfig = require('./aglioconfig.json');
const docs = 'docs';
const output = 'output';

gulp.task('output', function() {
  gulp.src(docs+'/**')
    .pipe(aglio(aglioConfig))
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  gulp.watch(docs+'/**', ['output']);
});

gulp.task('default', ['output', 'watch']);
