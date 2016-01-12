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
require('styles/main.scss');

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
 * Javascript
 * @type {exports}|string
 */
var $ = require('jquery');
//require('imports!metismenu/dist/metisMenu.js');
//require('imports!./menu.js');
