# Yeoman Generator for Mortar.js Projects

## Prerequisites
  - `npm install -g yo gulp`

## Installation
  1. Run `npm install -g generator-mortar` to install the generator.
  2. Run `yo mortar` to start the generator.
  3. Follow the command line prompts.
  4. Grab a cup of :coffee: and relax while the generators churns.
  5. Scaffolding is done! You are ready to start developing with Mortar!

## Development
  1. Clone this repository.
  2. Run `npm install` to install generator dev dependencies.
  3. Use `npm link` to install the mortar yeoman generator locally for testing.
  4. Test suite is managed by gulp and executed with `npm test`.

## Mortar Project Directory Structure
The end result of this yeoman generator will produce the following project structure:

- `node_modules` Installed third party packages including [Mortar.js](https://mortarjs.io).
- `src`
  - `actions`
  - `components`
    - `authentication`
      - `login`
    - `global`
      - `app`
      - `header`
    - `visualization`
      - `exports`
  - `config`
  - `constants`
  - `pages`
  -   `dashboard`
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
  - `routes.js`
- `.gitignore` Git ignore rules for Mortar.js projects.
- `.jshintrc` Custom javascript hinting rules applied using JSHint.
- `index.html` **Required entry point for web applications**
- `package.json` List of `npm` dependencies and commands to build / compile your application.
- `README.md`
- `webpack.config.js` Webpack bundler process to build and unify all javascript, css, sass, image, and font dependencies.
