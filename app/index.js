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

			// Installation type
			{
				type: 'list',
				name: 'installType',
				message: "What type of installation would you like?",
				choices: [
					{
						name: "basic installation",
						value: "basic"
					},
					{
						name: "installation with authentication",
						value: "auth"
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
		copyConfig: function () {
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
			this.fs.copy( this.templatePath('._eslintrc'), this.destinationPath('.eslintrc') );

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
			mkdirp.sync('src/actions');
			mkdirp.sync('src/components');
			if (this.props.installType === "auth") {
				mkdirp.sync('src/components/authentication');
				mkdirp.sync('src/components/authentication/login');
			}
			mkdirp.sync('src/components/global');
			mkdirp.sync('src/components/global/app');
			mkdirp.sync('src/components/global/header');
			mkdirp.sync('src/components/global/header/navigation');
			mkdirp.sync('src/components/visualization');
			mkdirp.sync('src/components/visualization/exports');
			mkdirp.sync('src/config');
			mkdirp.sync('src/constants');
			mkdirp.sync('src/pages');
			mkdirp.sync('src/pages/dashboard');
			mkdirp.sync('src/public');
			mkdirp.sync('src/public/images');
			mkdirp.sync('src/stores');
			mkdirp.sync('src/styles');
			mkdirp.sync('src/styles/css');
			mkdirp.sync('src/styles/fonts');
			mkdirp.sync('src/styles/partials');
			mkdirp.sync('src/utils');
		},
		// Copy scaffolding content files
		copyMain: function () {
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
			this.fs.copyTpl(
				this.templatePath('src/app-container.js'),
				this.destinationPath('src/app-container.js'), {
					installType : this.props.installType
				}
			);
			this.fs.copy(
				this.templatePath('src/assets.js'),
				this.destinationPath('src/assets.js')
			);
			this.fs.copy(
				this.templatePath('src/bootstrap.js'),
				this.destinationPath('src/bootstrap.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/main.js'),
				this.destinationPath('src/main.js'), {
					installType : this.props.installType
				}
			);
			this.fs.copy(
				this.templatePath('src/menu.js'),
				this.destinationPath('src/menu.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/routes.js'),
				this.destinationPath('src/routes.js'), {
					installType : this.props.installType
				}
			);
		},
		copyCommon: function() {
			this.fs.copy(
				this.templatePath('src/actions/ResourceActionCreators.js'),
				this.destinationPath('src/actions/ResourceActionCreators.js')
			);

			// Copy files to /src/components/global/app directory
			this.fs.copyTpl(
				this.templatePath('src/components/global/app/App.js'),
				this.destinationPath('src/components/global/app/App.js'), {
					installType : this.props.installType
				}
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
			this.fs.copyTpl(
				this.templatePath('src/components/global/header/HeaderButtonDropdown.js'),
				this.destinationPath('src/components/global/header/HeaderButtonDropdown.js'), {
					installType : this.props.installType
				}
			);
			this.fs.copy(
				this.templatePath('src/components/global/header/HeaderButtonDropdownItem.js'),
				this.destinationPath('src/components/global/header/HeaderButtonDropdownItem.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/components/global/header/HeaderButtonDropdownSection.js'),
				this.destinationPath('src/components/global/header/HeaderButtonDropdownSection.js')
			);
			this.fs.copyTpl(
				this.templatePath('src/components/global/header/HeaderButtons.js'),
				this.destinationPath('src/components/global/header/HeaderButtons.js'), {
					installType : this.props.installType
				}
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
			this.fs.copyTpl(
				this.templatePath('src/components/global/header/navigation/NavButton.js'),
				this.destinationPath('src/components/global/header/navigation/NavButton.js'), {
					installType : this.props.installType
				}
			);
			this.fs.copyTpl(
				this.templatePath('src/components/global/header/navigation/NavButtons.js'),
				this.destinationPath('src/components/global/header/navigation/NavButtons.js'), {
					installType : this.props.installType
				}
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

		},
		copyAuthentication: function () {
			if (this.props.installType === "auth") {
				// Copy files to /src/actions directory
				this.fs.copy(
					this.templatePath('src/actions/AuthenticationServerActionCreators.js'),
					this.destinationPath('src/actions/AuthenticationServerActionCreators.js')
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
			}
			this.fs.copy(
				this.templatePath('src/utils/AuthenticationApi.js'),
				this.destinationPath('src/utils/AuthenticationApi.js')
			);
		},
		copyStyles: function() {
			// Copy files to /src/styles directory
			this.fs.copyTpl(
				this.templatePath('src/styles/main.scss'),
				this.destinationPath('src/styles/main.scss'), {
					installType: this.props.installType
				}
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
		},
		copyUtils: function() {
			// Copy files to /src/utils directory
			this.fs.copy(
				this.templatePath('src/utils/ApiService.js'),
				this.destinationPath('src/utils/ApiService.js')
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
