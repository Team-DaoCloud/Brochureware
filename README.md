# Daocloud Landing Page, version 4

This is the main repo for daocloud.com's landing page. This is a very simple application based on the official [Yeoman webapp Gulp generator](https://github.com/yeoman/generator-gulp-webapp). Please follow that link to learn more about Yeoman, this generator and how it works.

## Features

Since we are using the Yeoman generator, I'm copying it's features into this repository for ease of use.

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

Again, this comes straight from the Yeoman generator page. I added in some stuff to make handlebars templates work.

- Install dependencies: `npm install --global yo gulp bower babel-core browser-sync`
- Install the generator: `npm install --global generator-gulp-webapp`
- Install bower dependencies: `bower install jquery bootstrap-sass Lettering.js`
- Run `yo gulp-webapp` to scaffold your webapp
- Run `gulp serve` to preview and watch for changes
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build your webapp for production
- Run `gulp build` for production build

If you are having troubles building the project, you are probably missing NPM packages. Check the [Yeoman project](https://github.com/yeoman/generator-gulp-webapp).

## Branching Protocol and Task Management

- We are using Trello to manage this project's build tasks - follow this link to the appropriate [Trello board](https://trello.com/b/Tn0C3KcI). Create an issue on this repo if you need access to the build plan on Trello.
- Each branch you create should leverage a Trello task that has been assigned to you.
- Naming the branch should use Trello cards' unique ID + hyphen + the general task at hand. You can find the Trello card unique ID in the URL string.
- An example branch name: `alEzNIPR-ie8bug`
- Branch should be pushed up to master and only merged after being given a `+1` by a teammate. Obviously, if it's something mission critical, do what you have to do to get it online.

## Sequence for Deployment
- On the main Daocloud-landing-page repo, you will need to follow this sequence to commit deploy this code.

#### 1- Save and merge your changes to master
```
git add file-name-here file2-name-here
git commit -m "Commit Message"
git checkout master
git merge your-branch-here
```

#### 2- Run, commit and push the build (will put all code into `prod` and push to https://github.com/jserrao/DaoCloud-Landing-Page)
```
gulp build
git commit -m "Build #####"
git push origin master
```

#### 3- Update git submodule on `next-release` branch in main DaoCloud project (folder of submodule is daocloud/brochure)
```
cd daocloud/brochure
git pull origin master
cd ..
git submodule init
git submodule update
git submodule update --remote (response from this command should match brochureware repo latest commit)
git add .
git commit -m "Updated brochureware site"
```

#### 4- Deploy `next-release` branch to test branch
```
git push heroku-test next-release:master
```

## Other Things to Note

- This site is version 4 of the Daocloud landing page and we are deploying off the `master` branch. Please branch off of `master` for your work.
- The last version of the site can be found on the `v2` branch.
- Where is v3 you might be asking? It was a version of this site that never came to be, but it spent significant time in design so I thought we should skip that version number. Not semantic but logical.
- Browsersync is incredible, take advantage of how easy it makes testing on multiple devices.
- All JS dependencies are managed via [Bower](http://bower.io), please add scripts to the project that way.
- We're using Sass-Bootstrap as a foundation. I'm leveraging their mixins to handle the grid as this makes the HTML files easier to read and more semantic. Read about the [grid mixins here](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/mixins/_grid.scss).

### Problems?

Create an issue on this repo and I will look at it. Hopefully, at least ;)
