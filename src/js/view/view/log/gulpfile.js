const {src, dest} = require('gulp');
const include = require('gulp-file-include');

function html() {
  return src('src/html/parts/body/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(dest('src/html/page'))
}

exports.html = html;