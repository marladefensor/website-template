# website-template
Here's a little website template to get yourself started!!
## What's in this template?
- Bootstrap 4
- Gulp (done with version 4.0.2)
  - Gulp-sass
  - Autoprefixer
  - ESLint
  - BrowserSync
## How do I get this going?
1. Install gulp - more details can be found in this [quick start guide](https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md)
2. Install the necessary packages on the Command Line (make sure you are in the root of the project's directory!)
```
$ npm install gulp-sass
$ npm install --save-dev gulp-autoprefixer
$ npm install browser-sync
$ npm install gulp-eslint
```
3. The `gulpfile.js` does the rest, so don't worry about reconfiguring anything with the file!
4. Once everything is installed, start up your gulp build and you are ready to go! Use the following command:
```
$ gulp watch
```
5. Once you are done editing your files, make sure to exit the gulp build with `^C` on the Command Line.
