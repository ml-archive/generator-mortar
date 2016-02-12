# Yeoman Generator for Mortar.js Projects

<p align="center">
  <img src="https://cdn.rawgit.com/fuzz-productions/generator-mortar/master/logo.svg" />
</p>


[Mortar.js](http://mortarjs.io/) is an opensource framework built with React that makes interacting and updating data quick, easy, and powerful. It can best be described as an Admin User Interface that allows developers to quickly and safely build sites to interface with an API without accessing the database directly.

This generator makes it extreamly easy to begin a React & Mortar project by taking care of the directory structure, installing dependecies, and the build process. The end result will allow you to build using React, JSX, ES6, and — of course — Mortar.


## Prerequisites
  - Yeoman and Gulp through `npm install -g yo gulp`

## Installation
  1. Run `npm install -g generator-mortar` to install the generator.
  2. Run `yo mortar` to start the generator.
  3. Follow the command line prompts. You will have the option to include authentication if your application & API requires it. 
  4. Grab a cup of :coffee: and relax while the generators churns.
  5. Scaffolding is done! You are ready to start developing with Mortar!

## Development
  1. Clone this repository.
  2. Run `npm install` to install generator dev dependencies.
  3. Use `npm link` to install the mortar yeoman generator locally for testing.
  4. Test suite is managed by gulp and executed with `npm test`.

## Mortar Project Directory Structure
The end result of this yeoman generator will produce the following project structure:

- `node_modules` Installed third party packages including [Mortar.js](http://mortarjs.io/).
- `src`
  - `actions`
  - `components`
    - `authentication` _optional_
      - `login` _optional_
    - `global`
      - `app`
      - `header`
    - `visualization`
      - `exports`
  - `config`
  - `constants`
  - `pages`
  -   `dashboard`
  - `public`
    - `images`
  - `stores`
  - `styles`
    - `css`
    - `fonts`
    - `partials`
  - `utils`
  - `app-container.js`
  - `assets.js`
  - `bootstrap.js`
  - `main.js` **Required entry point for Webpack**
  - `index.html`
  - `routes.js`
- `.gitignore` Git ignore rules for Mortar.js projects.
- `.jshintrc` Custom javascript hinting rules applied using JSHint.
- `package.json` List of `npm` dependencies and commands to build / compile your application.
- `README.md`
- `webpack.config.js` Webpack bundler process to build and unify all javascript, css, sass, image, and font dependencies.
