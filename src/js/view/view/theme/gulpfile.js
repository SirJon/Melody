const {src, dest} = require('gulp');
const include = require('gulp-file-include');

function html() {
  return src('src/assets/html/modulus/body/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(dest('src/assets/html/dist'))
}

exports.html = html;