# Super basic redux/react boilerplate

I got kind of tired by the over-developed boilerplates that are out there. 

This project contains what I usually start with. Which is very little:

- No __Gulpfile_-
- No __Webpack or whatever__.
- Uses [Mocha](http://mochajs.org/) with [Enzyme](https://github.com/airbnb/enzyme/) for testing and [babel](babeljs.io)/[browserify](http://browserify.org/) for compilation and a basic __static file server__ module ([http-server](https://www.npmjs.com/package/http-server)) for when you want to start developing without yet needing to worry about a backend.

## Getting Started 
To install this, clone the github repo first into your project folder: `git clone git@github.com:juliankrispel/super-basic-redux-boilerplate.git <my-project-folder>`.

Then, cd into your project folder and run `npm install`, this will install all the dependencies you'll need for the project.

## Build Commands

These are the four commands for compiling and watching your code and running your unit tests. I also added `http-server`, it will simply serve the contents in this directory.

`npm run test` - runs all unit tests (via mocha).

`npm run test:watch` - runs all unit tests and reruns them when a file has changed.

`npm run build` - build the javascript source.

`npm run dev` - watches the codebase and recompiles when changes are made. This is the command you'll use most often.

I originally wrote this for my friend [JP](https://twitter.com/jipiboily), who's just getting started with React. So I also added some example code to show you how to get started with Redux and React, as well as a basic example of how to test a [react component with mocha](https://github.com/juliankrispel/super-basic-redux-boilerplate/blob/master/src/app/example/__tests__/component.js).

This project has the `src` directory added to its `NODE_PATH`. This means is that you can import app-specific modules as if they were inside the `node_modules` folder, which is a lot nicer than having to use relative paths everywhere, [have a look at the example code](https://github.com/juliankrispel/super-basic-redux-boilerplate/blob/master/src/app/index.js#L4) to see what I mean.

Any probs? [Let me know please](https://github.com/juliankrispel/super-basic-redux-boilerplate/issues) :) Works for me though :P
