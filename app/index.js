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
		config: function () {

			// Copy package.json
			this.fs.copyTpl(
				this.templatePath('package.json'),
				this.destinationPath('package.json'), {
					projectName: this.props.projectName.toLowerCase()
						.replace(/[^\w ]+/g, '')
						.replace(/ +/g, '-'),

					projectDescription: this.props.projectDescription,
					projectAuthor: this.props.projectAuthor
				}
			);

			// Copy webpack.config.js
			this.fs.copy( this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js') );

			// Copy .gitignore
			this.fs.copy( this.templatePath('gitignore'), this.destinationPath('.gitignore') );

			// Copy .jshintrc
			this.fs.copy( this.templatePath('.jshintrc'), this.destinationPath('.jshintrc') );

			// Copy README
			this.fs.copy( this.templatePath('README.md'), this.destinationPath('README.md') );

		},
		// Create app directory structure
		scaffoldFolders: function () {

			mkdirp('src', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/actions', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/authentication', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/authentication/login', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/global', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/global/app', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/global/header', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/global/header/navigation', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/visualization', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/components/visualization/exports', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/config', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/constants', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/pages', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/pages/dashboard', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/public', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/public/images', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/stores', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/styles', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/styles/css', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/styles/fonts', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/styles/partials', function (err) {
				if (err) console.error(err);
			});

			mkdirp('src/utils', function (err) {
				if (err) console.error(err);
			});
		},
		// Copy scaffolding content files
		copyMainFiles: function () {
			// Copy index.html
			this.fs.copyTpl(
				this.templatePath('src/index.html'),
				this.destinationPath('src/index.html'), {
					projectName        : this.props.projectName,
					projectDescription : this.props.projectDescription,
					projectAuthor      : this.props.projectAuthor
				}
			);

			// Copy files to /src directory
			this.fs.copy(
				this.templatePath('src/app-container.js'),
				this.destinationPath('src/app-container.js')
			);
			this.fs.copy(
				this.templatePath('src/assets.js'),
				this.destinationPath('src/assets.js')
			);
			this.fs.copy(
				this.templatePath('src/bootstrap.js'),
				this.destinationPath('src/bootstrap.js')
			);
			this.fs.copy(
				this.templatePath('src/main.js'),
				this.destinationPath('src/main.js')
			);
			this.fs.copy(
				this.templatePath('src/menu.js'),
				this.destinationPath('src/menu.js')
			);
			this.fs.copy(
				this.templatePath('src/routes.js'),
				this.destinationPath('src/routes.js')
			);
			this.fs.copy(
				this.templatePath('src/routes.js'),
				this.destinationPath('src/routes.js')
			);

			// Copy files to /src/actions directory
			this.fs.copy(
				this.templatePath('src/actions/AuthenticationServerActionCreators.js'),
				this.destinationPath('src/actions/AuthenticationServerActionCreators.js')
			);
			this.fs.copy(
				this.templatePath('src/actions/ResourceActionCreators.js'),
				this.destinationPath('src/actions/ResourceActionCreators.js')
			);

			// Copy files to /src/components/authentication directory
			this.fs.copy(
				this.templatePath('src/components/authentication/RequireAuthentication.js'),
				this.destinationPath('src/components/authentication/RequireAuthentication.js')
			);
			this.fs.copy(
				this.templatePath('src/components/authentication/RequirePermissions.js'),
				this.destinationPath('src/components/authentication/RequirePermissions.js')
			);

			// Copy files to /src/components/authentication/login directory
			this.fs.copy(
				this.templatePath('src/components/authentication/login/ForgotPasswordModal.js'),
				this.destinationPath('src/components/authentication/login/ForgotPasswordModal.js')
			);
			this.fs.copy(
				this.templatePath('src/components/authentication/login/Login.js'),
				this.destinationPath('src/components/authentication/login/Login.js')
			);
			this.fs.copy(
				this.templatePath('src/components/authentication/login/Logout.js'),
				this.destinationPath('src/components/authentication/login/Logout.js')
			);
			this.fs.copy(
				this.templatePath('src/components/authentication/login/PasswordResetModal.js'),
				this.destinationPath('src/components/authentication/login/PasswordResetModal.js')
			);
			this.fs.copy(
				this.templatePath('src/components/authentication/login/SignOutConfirmationModal.js'),
				this.destinationPath('src/components/authentication/login/SignOutConfirmationModal.js')
			);
			this.fs.copy(
				this.templatePath('src/components/authentication/login/SignOutHeaderLink.js'),
				this.destinationPath('src/components/authentication/login/SignOutHeaderLink.js')
			);

			// Copy files to /src/components/global/app directory
			this.fs.copy(
				this.templatePath('src/components/global/app/App.js'),
				this.destinationPath('src/components/global/app/App.js')
			);

			// Copy files to /src/components/global/header directory
			this.fs.copy(
				this.templatePath('src/components/global/header/Header.js'),
				this.destinationPath('src/components/global/header/Header.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderButton.js'),
				this.destinationPath('src/components/global/header/HeaderButton.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderButtonDropdown.js'),
				this.destinationPath('src/components/global/header/HeaderButtonDropdown.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderButtonDropdownItem.js'),
				this.destinationPath('src/components/global/header/HeaderButtonDropdownItem.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderButtonDropdownSection.js'),
				this.destinationPath('src/components/global/header/HeaderButtonDropdownSection.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderButtons.js'),
				this.destinationPath('src/components/global/header/HeaderButtons.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderLogo.js'),
				this.destinationPath('src/components/global/header/HeaderLogo.js')
			);

			// Copy files to /src/components/global/header/navigation directory
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavBar.js'),
				this.destinationPath('src/components/global/header/navigation/NavBar.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavButton.js'),
				this.destinationPath('src/components/global/header/navigation/NavButton.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavButtons.js'),
				this.destinationPath('src/components/global/header/navigation/NavButtons.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavLogo.js'),
				this.destinationPath('src/components/global/header/navigation/NavLogo.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavSearch.js'),
				this.destinationPath('src/components/global/header/navigation/NavSearch.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavSecondLevel.js'),
				this.destinationPath('src/components/global/header/navigation/NavSecondLevel.js')
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/navigation/NavThirdLevel.js'),
				this.destinationPath('src/components/global/header/navigation/NavThirdLevel.js')
			);

			// Copy files to /src/components/visualization/header/exports directory
			this.fs.copy(
				this.templatePath('src/components/visualization/exports/Exporter.js'),
				this.destinationPath('src/components/visualization/exports/Exporter.js')
			);

			// Copy files to /src/config directory
			this.fs.copy(
				this.templatePath('src/config/base-config.example.js'),
				this.destinationPath('src/config/base-config.example.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/config/base-config.example.js'),
				this.destinationPath('src/config/base-config.js'), {
					projectName: this.props.projectName
				}
			);
			this.fs.copy(
				this.templatePath('src/config/config.js'),
				this.destinationPath('src/config/config.js')
			);

			// Copy files to /src/constants directory
			this.fs.copy(
				this.templatePath('src/constants/AppActionConstants.js'),
				this.destinationPath('src/constants/AppActionConstants.js')
			);

			// Copy files to /src/pages/dashboard directory
			this.fs.copy(
				this.templatePath('src/pages/dashboard/Dashboard.js'),
				this.destinationPath('src/pages/dashboard/Dashboard.js')
			);

			// Copy files to /src/stores directory
			this.fs.copy(
				this.templatePath('src/stores/CmsUserStore.js'),
				this.destinationPath('src/stores/CmsUserStore.js')
			);

			// Copy files to /src/styles directory
			this.fs.copy(
				this.templatePath('src/styles/main.scss'),
				this.destinationPath('src/styles/main.scss')
			);

			// Copy files to /src/styles/css directory
			this.fs.copy(
				this.templatePath('src/styles/css/material.min.css'),
				this.destinationPath('src/styles/css/material.min.css')
			);

			// Copy files to /src/styles/fonts directory
			this.fs.copy(
				this.templatePath('src/styles/fonts/LICENSE.txt'),
				this.destinationPath('src/styles/fonts/LICENSE.txt')
			);
			this.fs.copy(
				this.templatePath('src/styles/fonts/Material-Design-Icons.eot'),
				this.destinationPath('src/styles/fonts/Material-Design-Icons.eot')
			);
			this.fs.copy(
				this.templatePath('src/styles/fonts/Material-Design-Icons.svg'),
				this.destinationPath('src/styles/fonts/Material-Design-Icons.svg')
			);
			this.fs.copy(
				this.templatePath('src/styles/fonts/Material-Design-Icons.ttf'),
				this.destinationPath('src/styles/fonts/Material-Design-Icons.ttf')
			);
			this.fs.copy(
				this.templatePath('src/styles/fonts/Material-Design-Icons.woff'),
				this.destinationPath('src/styles/fonts/Material-Design-Icons.woff')
			);

			// Copy files to /src/utils directory
			this.fs.copy(
				this.templatePath('src/utils/ApiService.js'),
				this.destinationPath('src/utils/ApiService.js')
			);
			this.fs.copy(
				this.templatePath('src/utils/AuthenticationApi.js'),
				this.destinationPath('src/utils/AuthenticationApi.js')
			);
			this.fs.copy(
				this.templatePath('src/utils/ResourceApi.js'),
				this.destinationPath('src/utils/ResourceApi.js')
			);
		}
	},
	// Install app dependencies
	install: function () {
		this.installDependencies();
	}
});
