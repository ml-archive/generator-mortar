'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var fs = require('fs');

describe('generator-mortar:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ projectName: 'test project' })
      .withOptions({ projectDescription: 'testing' })
      .withOptions({ projectAuthor: 'test bot' })
      .on('end', done);
  });

  it('creates directory structure', function () {
    assert.file([
      'src/',
      'src/actions',
      'src/components',
      'src/config/',
      'src/constants',
      'src/pages',
      'src/stores',
      'src/styles',
      'src/utils'
    ]);
  });

  it('creates index.html', function () {
    assert.file([
      'index.html'
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
      fs.readFileSync(path.join(__dirname, '../app/templates/.gitignore')).toString()
    );
  });

  it('creates src files', function () {
    assert.file([
      'src/app-container.js',
      'src/assets.js',
      'src/bootstrap.js',
      'src/main.js',
      'src/menu.js',
      'src/routes.js'
    ]);
  });

  it('creates components files', function () {
    assert.file([
      'src/components/authentication/RequireAuthentication.js',
      'src/components/authentication/RequirePermissions.js',
      'src/components/authentication/login/SignOutHeaderLink.js',
      'src/components/authentication/login/SignOutConfirmationModal.js',
      'src/components/authentication/login/PasswordResetModal.js',
      'src/components/authentication/login/Logout.js',
      'src/components/authentication/login/Login.js',
      'src/components/authentication/login/ForgotPasswordModal.js'
    ]);
  });

  it('creates config files', function () {
    assert.file([
      'src/config/base-config.example.js',
      'src/config/config.js',
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

  it('uses the correct main.js content', function () {
    assert.fileContent(
      'src/main.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/main.js')).toString()
    );
  });

  it('uses the correct routes.js content', function () {
    assert.fileContent(
      'src/routes.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/routes.js')).toString()
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
      'src/utils/string.js',
      'src/utils/ResourceApi.js',
      'src/utils/AuthenticationApi.js',
      'src/utils/ApiService.js'
    ]);
  });


});
