var config = require('./config/config');
var MortarJS = require('mortarjs');

//console.log('test2', MortarJS);

// Should go separately into MortarJS.App or something other than the MortarJS index bootstrap because that's not actually exported
// until the end of this file
//MortarJS.Actions.AuthenticationServerActionCreators = require('./actions/AuthenticationServerActionCreators')(config.base);
//MortarJS.Actions.ResourceActions = require('./actions/ResourceActionCreators')(config);
//
//MortarJS.Components.Authentication = {
//	Login: {
//		Login:  require('./components/authentication/login/Login')(config.base, config.header),
//		Logout: require('./components/authentication/login/Logout')(config.base),
//		SignOutConfirmationModal: require('./components/authentication/login/SignOutConfirmationModal'),
//		PasswordResetModal: require('./components/authentication/login/PasswordResetModal'),
//		ForgotPasswordModal: require('./components/authentication/login/ForgotPasswordModal'),
//		SignOutHeaderLink: require('./components/authentication/login/SignOutHeaderLink')
//	},
//
//	RequireAuthentication: require('./components/authentication/RequireAuthentication')(config.base, config.header),
//	RequirePermissions:    require('./components/authentication/RequirePermissions')
//};
//
//MortarJS.Components.Visualization.Exports = {
//	Exporter: require('./components/visualization/exports/Exporter')
//};
//
//MortarJS.Components.Global.Header = {
//	Header: require('./components/global/header/Header')(config.header, config.navbar),
//	NavBar: require('./components/global/header/navigation/NavBar')(config.navbar)
//};
//
//MortarJS.Components.Global.App = require('./components/global/app/App')(config.base, config.header, config.navbar);
//
//MortarJS.Stores.CmsUserStore = require('./stores/CmsUserStore');
//
//MortarJS.Utils.ApiService = require('./utils/ApiService');
//MortarJS.Utils.AuthenticationApi = require('./utils/AuthenticationApi')(config);
//
///**
// * Overwrite how we dynamically and intelligently parse string requirements
// *
// * Format: MortarJS.require('type(components|action|etc)', 'require1', 'require2');
// *
// * @param type
// * @returns {{}}
// */
//MortarJS.require = function (type) {
//	var required = {};
//	var exportType = type.toLowerCase().charAt(0).toUpperCase() + type.slice(1);
//	var flattened = exports.Flatten(exports[exportType], '', {});
//
//	for (var key in arguments) {
//		var argument = arguments[key];
//		if (flattened.hasOwnProperty(argument)) {
//			required[argument] = _.get(exports[exportType], flattened[argument]);
//		}
//	}
//
//	return required;
//};

//console.log('test', MortarJS);
module.exports.MortarJS = MortarJS;
