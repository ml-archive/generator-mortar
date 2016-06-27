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
      .withPrompts({ linting: true })
      .withPrompts({ lintingRules: 'mortar-linting' })
      .on('end', done);
  });

  it('creates the basic directory structure', function () {
    assert.file([
      'src/',
      'src/components',
      'src/config/',
      'src/styles',
      'src/styles/external'
    ]);
  });

  it('creates npm, webpack, linting, and git files', function () {
    assert.file([
      'package.json',
      'webpack.config.js',
      '.gitignore',
      '.eslintrc'
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
      'src/assets.js',
      'src/main.js',
      'src/routes.js'
    ]);
  });

  it('creates the basic components files', function () {
    assert.file([
      'src/components/app.js'
    ]);
  });

  it('creates config files', function () {
    assert.file([
      'src/config/config.js'
    ]);
  });

  it('uses the correct assets.js content', function () {
    assert.fileContent(
      'src/assets.js',
      fs.readFileSync(path.join(__dirname, '../app/templates/src/assets.js')).toString()
    );
  });
});