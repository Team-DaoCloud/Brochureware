# Daocloud Landing Page, version 4

This is the main repo for daocloud.com's landing page. This is a very simple application based on the official [Yeoman webapp Gulp generator](https://github.com/yeoman/generator-gulp-webapp). Please follow that link to learn more about Yeoman, this generator and how it works.

## Features

Since we are using the generator, I'm copying it's features into this repository for ease of use.

* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Automagically compile Sass with [libsass](http://libsass.org)
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization
* Automagically wire-up dependencies installed with [Bower](http://bower.io)
* The gulpfile makes use of [ES2015 features](https://babeljs.io/docs/learn-es2015/) by using [Babel](https://babeljs.io)

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*

## Getting Started

Again, this comes straight from the Yeoman generator page:

- Install dependencies: `npm install --global yo gulp bower`
- Install the generator: `npm install --global generator-gulp-webapp`
- Run `yo gulp-webapp` to scaffold your webapp
- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build your webapp for production
- Run `gulp serve:dist` to preview the production build

## Other things to note

- This site is version 4 of the Daocloud landing page and we are deploying off the `v4` branch. Please branch off of `v4` for your work.
- The last version of the site can be found on the `v2` branch.
- We are using Trello to manage this project's build tasks - follow this link to the appropriate [Trello board](https://trello.com/b/Tn0C3KcI)
- Each branch you create should leverage a Trello task that has been assigned to you.
- Naming the branch should use Trello cards' unique ID + hyphen + the general task at hand. You can find the Trello card unique ID in the URL string.
- An example branch name: `alEzNIPR-ie8bug`
- Branch should be pushed and given a `+1` by a teammate before merging into `v4`
- Browsersync is incredible, take advantage of how easy it makes testing on multiple devices.
- All JS dependencies are managed via [Bower](http://bower.io), please add scripts to the project that way.

### Problems?

Create an issue on this repo and I will look at it.
