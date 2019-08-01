const gulp = require("gulp");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const browserSync = require("browser-sync").create();

function defaultTask (cb) {
  style();
  copyHtml();
  copyImages();
  copyJs();
  console.log('We did it, boys!');
  cb();
}

function style () {
  return(gulp
    .src("sass/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .on("error", sass.logError)
    .pipe(
      autoprefixer()
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
  );
}

function copyHtml() {
  return (
  gulp.src('./*.html')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream())
    );
};

function copyImages() {
  return (
    gulp.src('images/*')
      .pipe(gulp.dest('dist/images'))
  );
}

function copyJs() {
  return (
    gulp.src('js/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream())
  );
}

function watch(){
  browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

  gulp.watch('sass/**/*.scss', style);
  gulp.watch('js/**/*.js', lint);
  gulp.watch('./*.html', copyHtml);
  gulp.watch('js/*.js', copyJs);
  gulp.watch('/index.html', reload);
};

function reload() {
    browserSync.reload();
};

function lint() {
    return (
        gulp
            .src(['js/**/*.js'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failOnError())
    );
};

exports.default = defaultTask;
exports.style = style;
exports.copyHtml = copyHtml;
exports.copyImages = copyImages;
exports.copyJs = copyJs;
exports.watch = watch
