//project automation  workflow

var gulp = require('gulp');
var concat = require('gulp-concat-multi');
var uglify = require('gulp-uglify');
var copy = require('gulp-copy');
var size = require('gulp-size');
// var imagemin = require('gulp-imagemin');
// var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 

// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del(['dist/*']);
});

//构建task

gulp.task('build', ['scripts'], () => {
  return gulp.src('dist/**/*').pipe(size({title: 'build', gzip: true}));
});


//处理js 的逻辑
gulp.task('scripts',  () => {
  var opts = { newLine: ';' };
  
  return concat({
      'external.js': ['src/js/vendor/jquery.js', 
                      'src/js/vendor/jquery.tmpl.js',
                      'src/js/vendor/jquery.dialog.js',
                      'src/js/vendor/jquery.validate.js',
                      'src/js/vendor/additional-methods.js',
                      'src/js/vendor/jquery-ui.js',
                      'src/js/vendor/bootstrap.js'
                      ],
      'app.js': ['src/js/app.js'],
      'tabs.js': ['src/js/tabs.js'],
    }, opts)
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Rerun the task when a file changes 
gulp.task('watch', function() {

  var watcher = gulp.watch(['src/js/**/*.js'], ['scripts', 'copy']);
  
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });

});


gulp.task('copy', ['scripts'], function() {
  return gulp.src('dist/js/**/*.js', {
      base: 'dist/js'
    })
    .pipe(copy('js', {'prefix': 2}));
});


// gulp.task('default', ['clean'], () => {
gulp.task('default', ['watch'], () => {
  gulp.start('build');
});


