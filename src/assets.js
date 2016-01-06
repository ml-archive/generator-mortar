/**
 * Global scrips
 * @type {exports}
 */
var $ = require('script!jquery/dist/jquery.min.js');

/**
 * Styles
 * @type {exports}|string
 */
require('bootstrap/dist/css/bootstrap.min.css');
require('styles/css/material.css');
require('styles/main.scss');
require('font-awesome/css/font-awesome.min.css');
require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('normalize.css');
require('bootstrap-social');
require("font-awesome-webpack");

/**
 * Require CMS component styles. Load in after material css because it contains overrides.
 */
require('mortarjs/lib/styles/main.scss');

/**
 * Optional spinners css
 */
require('mortarjs/lib/styles/spinners.scss');

/**
 * Scripts
 * @type string
 */
require('imports!bootstrap/dist/js/bootstrap.min.js');
//require('imports!metismenu/dist/metisMenu.js');
//require('imports!./menu.js');
