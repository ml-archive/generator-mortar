/**
 * Global scrips
 * @type {exports}
 */

/**
 * Styles
 * @type {exports}|string
 */
require('bootstrap/dist/css/bootstrap.min.css');
// require('styles/css/material.css');
// require('styles/main.scss');
require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('normalize.css');

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
//require('imports!./menu.js');
