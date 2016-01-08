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
      'src/config/',
      'src/constants',
      'src/images',
      'src/pages',
      'src/stores',
      'src/styles',
      'src/utilities'
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
      fs.readFileSync(path.join(__dirname, '../app/templates/_webpack.config.js')).toString()
    );
  });

  it('uses the correct gitignore content', function () {
    assert.fileContent(
      '.gitignore',
      fs.readFileSync(path.join(__dirname, '../app/templates/_.gitignore')).toString()
    );
  });

  it('creates src files', function () {
    assert.file([
      'src/assets.js',
      'src/bootstrap.js',
      'src/index.js',
      'src/routes.js'
    ]);
  });

  it('creates config files', function () {
    assert.file([
      'src/config/base-config.js',
      'src/config/base-config.example.js',
      'src/config/config.js',
    ]);
  });

  it('uses the correct assets.js content', function () {
    assert.fileContent(
      'src/assets.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/_src/_assets.js')).toString()
    );
  });

  it('uses the correct bootstrap.js content', function () {
    assert.fileContent(
      'src/bootstrap.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/_src/_bootstrap.js')).toString()
    );
  });

  it('uses the correct index.js content', function () {
    assert.fileContent(
      'src/index.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/_src/_index.js')).toString()
    );
  });

  it('uses the correct routes.js content', function () {
    assert.fileContent(
      'src/routes.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/_src/_routes.js')).toString()
    );
  });

  it('creates constants files', function () {
    assert.file([
      'src/constants/AppActionConstants.js'
    ]);
  });

  it('creates stylesheet files', function () {
    assert.file([
      'src/styles/main.scss'
    ]);
  });


});
