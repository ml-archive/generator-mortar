'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
	prompting: function () {
		var done = this.async();

		// Greeting
		this.log(yosay(
			'Welcome to the the ' + chalk.red('Mortar.js') + ' generator!'
		));

		// Information requested from CLI
		var prompts = [
			// Application name
			{
				type    : 'input',
				name    : 'projectName',
				message : 'Name of this project:',
				default : 'Generic Mortar Project'
			},

			// Application description
			{
				type    : 'input',
				name    : 'projectDescription',
				message : 'Short description:',
				default : 'Generic CMS'
			},

			// Application author
			{
				type    : 'input',
				name    : 'projectAuthor',
				message : 'Author or creator:',
				default : 'Mordecai Rigby'
			},
			// Linting
			{
				type    : 'confirm',
				name    : 'linting',
				message : 'Would you like to use ESLint in your project?',
				default : true
			},
			{
				type    : 'list',
				name    : 'lintingRules',
				message : 'Which ESLint rules would you like to use?',
				when: function (answers) {
					return answers.linting;
				},
				choices: [
					{
						name: "Mortar recommended style guide",
						value: "mortar-linting"
					},
					{
						name: "Airbnb recommended style guide",
						value: "airbnb-linting"
					},
					{
						name: "Google recommended style guide",
						value: "google-linting"
					}
				]
			}
		];

		// Collect information through the command promp
		// input can be retrived through `this.props.{prompName}`
		this.prompt(prompts, function (props) {
			this.props = props;
			done();
		}.bind(this));
	},
	writing: {
		// Copy the configuration files to app root directory
		copyProjectConfig: function () {
			// Copy package.json
			this.fs.copyTpl(
				this.templatePath('package.json'),
				this.destinationPath('package.json'), {
					projectName: this.props.projectName.toLowerCase()
						.replace(/[^\w ]+/g, '')
						.replace(/ +/g, '-'),

					projectDescription: this.props.projectDescription,
					projectAuthor: this.props.projectAuthor,
					linting: this.props.linting,
					lintingRules: this.props.lintingRules
				}
			);

			// Copy webpack.config.js
			this.fs.copy( this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js') );

			// Copy .gitignore
			this.fs.copy( this.templatePath('gitignore'), this.destinationPath('.gitignore') );

			// Copy .eslintrc
			if (this.props.linting) {
				switch (this.props.lintingRules) {
					case "mortar-linting":
						this.fs.copy( this.templatePath('mortar_rules_eslintrc'), this.destinationPath('.eslintrc') );
						break;
					case "airbnb-linting":
						this.fs.copy( this.templatePath('airbnb_rules_eslintrc'), this.destinationPath('.eslintrc') );
						break;
					case "google-linting":
						this.fs.copy( this.templatePath('google_rules_eslintrc'), this.destinationPath('.eslintrc') );
						break;
					default:
						this.fs.copy( this.templatePath('mortar_rules_eslintrc'), this.destinationPath('.eslintrc') );
				}

			}

			// Copy README
			this.fs.copy( this.templatePath('README.md'), this.destinationPath('README.md') );

			// Copy favicon
			this.fs.copy( this.templatePath('favicon.ico'), this.destinationPath('favicon.ico') );

			// Copy Mortar logo
			this.fs.copy( this.templatePath('mortar-logo.png'), this.destinationPath('mortar-logo.png') );

		},
		// Create app directory structure
		scaffoldFolders: function () {
			mkdirp.sync('src');
			mkdirp.sync('src/components');
			mkdirp.sync('src/config');
			mkdirp.sync('src/styles/external');
		},
		// Copy scaffolding files
		copyMain: function () {
			// Copy files to /src directory
			this.fs.copyTpl(
				this.templatePath('src/index.html'),
				this.destinationPath('src/index.html')
			);
			this.fs.copyTpl(
				this.templatePath('src/assets.js'),
				this.destinationPath('src/assets.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/main.js'),
				this.destinationPath('src/main.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/routes.js'),
				this.destinationPath('src/routes.js')
			);
		},
		copyComponents: function() {
			this.fs.copy(
				this.templatePath('src/components/app.js'),
				this.destinationPath('src/components/app.js')
			);
		},
		copyAppConfig: function() {
			this.fs.copy(
				this.templatePath('src/config/config.js'),
				this.destinationPath('src/config/config.js')
			);
		},
		copyStyles: function() {
			// Copy files to /src/styles directory
			this.fs.copyTpl(
				this.templatePath('src/styles/external/material-fullpalette.css'),
				this.destinationPath('src/styles/external/material-fullpalette.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/material-fullpalette.min.css'),
				this.destinationPath('src/styles/external/material-fullpalette.min.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/material.css'),
				this.destinationPath('src/styles/external/material.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/material.min.css'),
				this.destinationPath('src/styles/external/material.min.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/ripples.css'),
				this.destinationPath('src/styles/external/ripples.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/ripples.min.css'),
				this.destinationPath('src/styles/external/ripples.min.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/roboto.css'),
				this.destinationPath('src/styles/external/roboto.css')
			);
			this.fs.copyTpl(
				this.templatePath('src/styles/external/roboto.min.css'),
				this.destinationPath('src/styles/external/roboto.min.css')
			);
		}
	},
	// Install app dependencies
	install: function () {
		this.installDependencies();
	}
});
