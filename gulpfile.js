var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("serve", [], function () {
  browserSync({
    notify: false,
    server: {
      directory: true,
      baseDir: ".",
    },
  });
  gulp.watch(["*.html"], reload);
  gulp.watch(["*.css"], reload);
});
