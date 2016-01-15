# Yeoman Generator for Mortar.js Projects

<p id="logo" align="center">
  <svg height="300" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 101.6 101.5" style="enable-background:new 0 0 101.6 101.5;" xml:space="preserve">
	<style type="text/css">
		.st0{fill:#FFC0C0;}
		.st1{fill:#FF5555;}
		.st2{fill:#FFAF5F;}
		.st3{fill:none;stroke:#0D2038;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
		.st4{fill:#0D2038;}
	</style>
	<g>
		<g>
			<polygon class="st0" points="50.7,21.3 51.2,51.5 75.1,59.5 74.8,29.7 		"/>
		</g>
		<g>
			<polygon class="st1" points="50.6,21.1 51.2,50.7 26.9,59.8 26.8,29.2 		"/>
		</g>
		<g>
			<path class="st2" d="M28.9,59.6c0.5-0.1,21.8-8.3,21.8-8.3l21,7.7l-20.1,9.7L28.9,59.6z"/>
		</g>
		<g>
			<polygon class="st1" points="74.8,28.8 75.1,60 50.8,68.3 51.4,99 99.1,80.4 99.3,20.8 		"/>
		</g>
		<g>
			<polygon class="st0" points="50.2,68.4 51,99.3 2.4,80.1 2.3,20.7 26,29.3 26.1,59.5 		"/>
		</g>
		<g>
			<polygon class="st2" points="3,20.3 26.8,29.2 51.2,20.9 74.5,29.1 98.2,20.6 52,2.3 		"/>
		</g>
		<g>
			<g>
				<path class="st3" d="M26.5,29.1"/>
			</g>
			<g>
				<path class="st3" d="M56.5,18.3"/>
			</g>
		</g>
		<g>
			<path class="st3" d="M33.2,14.3"/>
		</g>
		<g>
			<path class="st3" d="M25.8,11.7"/>
		</g>
	</g>
	<path class="st4" d="M100.7,20.7c-0.1-0.7-0.4-1.4-1-1.8c0,0-0.1,0-0.1-0.1L51.7,0.8c-0.4-0.1-0.8-0.1-1.2,0
		c0,0-48.6,18.3-48.6,18.3c-0.1,0.1-0.3,0.1-0.4,0.2c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.3-0.3,0.5
		C1,20,1,20,1,20c-0.1,0.2-0.1,0.3-0.1,0.5c0,0,0,0.1,0,0.1c0,0,0,0,0,0L0.8,79.5c0,0.3,0,0.6,0,0.9c0,0.7,0.4,1.3,1.1,1.6l48.9,18.6
		c0,0,0,0,0,0c0.2,0.1,0.4,0.1,0.5,0.1c0.2,0,0.4,0,0.6-0.1c0,0,0,0,0,0L99.7,82c0.6-0.3,1.1-0.9,1.1-1.6c0,0,0-0.1,0-0.1
		c0-0.1,0-0.2,0-0.3c0-0.2,0-0.3,0-0.5c0-0.2,0-0.4,0-0.7L100.7,20.7z M50.8,66.5l-19.1-6.7l19-6.6l19.1,6.7L50.8,66.5z M25.7,13.6
		l19.9,7.1l-19,6.6L7.4,20.6L25.7,13.6z M28.4,30.3L49,23v27.1l-20.6,7.2V30.3z M52.4,23.1l20.8,7.4v17.7v9.3l-20.8-7.3V23.1z
		 M97.3,50.2l-20.8,7.3v-9.3V30.3L97.3,23V50.2z M51.1,4.2l43.2,16.3l-19.5,6.8l-23.6-8.3c0,0-0.1,0-0.1,0l-20.6-7.3L51.1,4.2z
		 M4.1,53.7l4.7,1.6c0.9,0.3,1.8-0.2,2.1-1c0.3-0.9-0.2-1.8-1-2.2l-5.7-2V23l20.6,7.2v27.2l-8.3-2.9c-0.9-0.3-1.8,0.2-2.1,1
		c-0.3,0.9,0.2,1.8,1,2.2l10.4,3.6c0.1,0,0.2,0.1,0.3,0.1l23,8l0.5,27L4.1,79.2V53.7z M97.4,79.2l-20.9,8.1v-5.1
		c0-0.9-0.7-1.7-1.7-1.7s-1.7,0.8-1.7,1.7v6.4L53,96.5l-0.5-27.1l20.7-7.2v13.3c0,0.9,0.7,1.7,1.7,1.7s1.7-0.8,1.7-1.7V61.1l20.9-7.3
		V79.2z"/>
	</svg>
</p>


[Mortar.js](http://mortarjs.io/) is an opensource framework built with React that makes interacting and updating data quick, easy, and powerful. It can best be described as an Admin User Interface that allows developers to quickly and safely build sites to interface with an API without accessing the database directly.

This generator makes it extreamly easy to begin a React & Mortar project by taking care of the directory structure, installing dependecies, and the build process. The end result will allow you to build using React, JSX, ES6, and — of course — Mortar.


## Prerequisites
  - Yeoman and Gulp through `npm install -g yo gulp`

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

- `node_modules` Installed third party packages including [Mortar.js](http://mortarjs.io/).
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
