'use strict';

/**
 * Packages
 * @type {exports}
 */
var React        = require('react/addons');
var config       = require('./config/config');
var Router       = require('react-router');
var CmsUserStore = require('./stores/CmsUserStore');
var MortarJS     = require('./bootstrap').MortarJS;
var AppContainer = require('./app-container').MortarJS;

var AuthenticationServerActionCreators = AppContainer.Actions.AuthenticationServerActionCreators;

/**
 * Pull in application routes
 *
 * @type {Routes|exports}
 */
var Routes = require('./routes');

// Validate access token
if (CmsUserStore.isTokenExpired()) {
	// Refresh the token, since it's expiring or about to expire
	var refreshToken = CmsUserStore.getRefreshToken();
	AuthenticationServerActionCreators.refreshToken(refreshToken);
} else {
	var token = CmsUserStore.getToken();
	if (token) {
		AuthenticationServerActionCreators.loginWithToken(token);
	}
}

// Attach react router
window.__app_container = document.getElementById('root');
Router.run(Routes, function (Handler) {
	React.render(<Handler/>, window.__app_container);
});

/**
 * Pull in css/scss/js file assets
 *
 * @type {exports}
 */
require('./assets');
require('./utils/string.js');
