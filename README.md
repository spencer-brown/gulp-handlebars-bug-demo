Demonstration of `gulp-handlebars` breaking with gulp@3.x.

## Testing (uses project-local installation of `gulp`):
```sh
$ yarn
$ yarn run gulp
```
=> Will throw "Did not end with .js as expected".

## Upgrade `gulp` to see succeed with `gulp@4.x`:
```sh
$ yarn upgrade gulp@next
$ yarn run gulp
```
=> Will log "Saw .js extension as expected!".
