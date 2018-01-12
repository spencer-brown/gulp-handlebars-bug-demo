const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const path = require('path');


/**
 * Copied from https://github.com/lazd/gulp-handlebars/tree/master/examples/partials.
 */
gulp.task('templates', () => {
  return gulp.src('templates/partials/_*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          if (!fileName.endsWith('.js')) {
            throw new Error('Did not end with .js as expected');
          } else {
            console.log('Saw .js extension as expected!');
          }

          // Strip the extension and the underscore
          // Escape the output with JSON.stringify
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }));
});
