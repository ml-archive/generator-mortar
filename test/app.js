'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var fs = require('fs');

describe('generator-mortar with a basic scaffolding', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ projectName: 'test project' })
      .withPrompts({ projectDescription: 'testing' })
      .withPrompts({ projectAuthor: 'test bot' })
      .withPrompts({ installType: 'basic' })
      .on('end', done);
  });

  it('creates the basic directory structure', function () {
    assert.file([
      'src/',
      'src/actions',
      'src/components',
      'src/components/global',
      'src/components/visualization',
      'src/config/',
      'src/constants',
      'src/pages',
      'src/pages/dashboard',
      'src/stores',
      'src/styles',
      'src/styles/css',
      'src/styles/fonts',
      'src/utils'
    ]);
  });

  it('creates npm, webpack, and git files', function () {
    assert.file([
      'package.json',
      'webpack.config.js',
      '.gitignore'
    ]);
  });

  it('uses the correct webpack.config.js content', function () {
    assert.fileContent(
      'webpack.config.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/webpack.config.js')).toString()
    );
  });

  it('uses the correct gitignore content', function () {
    assert.fileContent(
      '.gitignore',
      fs.readFileSync(path.join(__dirname, '../app/templates/gitignore')).toString()
    );
  });

  it('creates index.html', function () {
    assert.file([
      'src/index.html'
    ]);
  });

  it('creates the basic src files', function () {
    assert.file([
      'src/app-container.js',
      'src/assets.js',
      'src/bootstrap.js',
      'src/main.js',
      'src/menu.js',
      'src/routes.js'
    ]);
  });

  it('creates the basic components files', function () {
    assert.file([
      'src/components/global/app/App.js',
      'src/components/global/header/Header.js',
      'src/components/global/header/HeaderButton.js',
      'src/components/global/header/HeaderButtonDropdown.js',
      'src/components/global/header/HeaderButtonDropdownItem.js',
      'src/components/global/header/HeaderButtonDropdownSection.js',
      'src/components/global/header/HeaderButtons.js',
      'src/components/global/header/HeaderLogo.js',
      'src/components/global/header/navigation/NavBar.js',
      'src/components/global/header/navigation/NavButton.js',
      'src/components/global/header/navigation/NavButtons.js',
      'src/components/global/header/navigation/NavSearch.js',
      'src/components/global/header/navigation/NavSecondLevel.js',
      'src/components/global/header/navigation/NavThirdLevel.js'
    ]);
  });

  it('creates config files', function () {
    assert.file([
      'src/config/base-config.example.js',
      'src/config/config.js'
    ]);
  });

  it('uses the correct assets.js content', function () {
    assert.fileContent(
      'src/assets.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/assets.js')).toString()
    );
  });

  it('uses the correct bootstrap.js content', function () {
    assert.fileContent(
      'src/bootstrap.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/bootstrap.js')).toString()
    );
  });

  it('creates constants files', function () {
    assert.file([
      'src/constants/AppActionConstants.js'
    ]);
  });

  it('creates pages files', function () {
    assert.file([
      'src/pages/dashboard/Dashboard.js'
    ]);
  });

  it('creates stores files', function () {
    assert.file([
      'src/stores/CmsUserStore.js'
    ]);
  });

  it('creates stylesheet files', function () {
    assert.file([
      'src/styles/main.scss'
    ]);
  });

  it('creates utils files', function () {
    assert.file([
      'src/utils/ResourceApi.js',
      'src/utils/AuthenticationApi.js',
      'src/utils/ApiService.js'
    ]);
  });
});

describe('generator-mortar with authentication scaffolding', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ projectName: 'test project' })
      .withPrompts({ projectDescription: 'testing' })
      .withPrompts({ projectAuthor: 'test bot' })
      .withPrompts({ installType: 'auth' })
      .on('end', done);
  });

  it('creates the authentication directory structure', function () {
    assert.file([
      'src/',
      'src/actions',
      'src/components',
      'src/components/authentication',
      'src/components/authentication/login',
      'src/components/global',
      'src/components/visualization',
      'src/config/',
      'src/constants',
      'src/pages',
      'src/pages/dashboard',
      'src/stores',
      'src/styles',
      'src/styles/css',
      'src/styles/fonts',
      'src/utils'
    ]);
  });

  it('creates npm, webpack, and git files', function () {
    assert.file([
      'package.json',
      'webpack.config.js',
      '.gitignore'
    ]);
  });

  it('uses the correct webpack.config.js content', function () {
    assert.fileContent(
      'webpack.config.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/webpack.config.js')).toString()
    );
  });

  it('uses the correct gitignore content', function () {
    assert.fileContent(
      '.gitignore',
      fs.readFileSync(path.join(__dirname, '../app/templates/gitignore')).toString()
    );
  });

  it('creates index.html', function () {
    assert.file([
      'src/index.html'
    ]);
  });

  it('creates the basic src files', function () {
    assert.file([
      'src/app-container.js',
      'src/assets.js',
      'src/bootstrap.js',
      'src/main.js',
      'src/menu.js',
      'src/routes.js'
    ]);
  });

  it('creates the basic components files', function () {
    assert.file([
      'src/components/global/app/App.js',
      'src/components/global/header/Header.js',
      'src/components/global/header/HeaderButton.js',
      'src/components/global/header/HeaderButtonDropdown.js',
      'src/components/global/header/HeaderButtonDropdownItem.js',
      'src/components/global/header/HeaderButtonDropdownSection.js',
      'src/components/global/header/HeaderButtons.js',
      'src/components/global/header/HeaderLogo.js',
      'src/components/global/header/navigation/NavBar.js',
      'src/components/global/header/navigation/NavButton.js',
      'src/components/global/header/navigation/NavButtons.js',
      'src/components/global/header/navigation/NavSearch.js',
      'src/components/global/header/navigation/NavSecondLevel.js',
      'src/components/global/header/navigation/NavThirdLevel.js'
    ]);
  });

  it('creates the authentication components files', function () {
    assert.file([
      'src/components/authentication/RequireAuthentication.js',
      'src/components/authentication/RequirePermissions.js',
      'src/components/authentication/login/ForgotPasswordModal.js',
      'src/components/authentication/login/Login.js',
      'src/components/authentication/login/Logout.js',
      'src/components/authentication/login/PasswordResetModal.js',
      'src/components/authentication/login/SignOutConfirmationModal.js',
      'src/components/authentication/login/SignOutHeaderLink.js'
    ]);
  });

  it('creates config files', function () {
    assert.file([
      'src/config/base-config.example.js',
      'src/config/config.js'
    ]);
  });

  it('uses the correct assets.js content', function () {
    assert.fileContent(
      'src/assets.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/assets.js')).toString()
    );
  });

  it('uses the correct bootstrap.js content', function () {
    assert.fileContent(
      'src/bootstrap.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/bootstrap.js')).toString()
    );
  });

  it('creates constants files', function () {
    assert.file([
      'src/constants/AppActionConstants.js'
    ]);
  });

  it('creates pages files', function () {
    assert.file([
      'src/pages/dashboard/Dashboard.js'
    ]);
  });

  it('creates stores files', function () {
    assert.file([
      'src/stores/CmsUserStore.js'
    ]);
  });

  it('creates stylesheet files', function () {
    assert.file([
      'src/styles/main.scss'
    ]);
  });

  it('creates utils files', function () {
    assert.file([
      'src/utils/ResourceApi.js',
      'src/utils/AuthenticationApi.js',
      'src/utils/ApiService.js'
    ]);
  });
});
