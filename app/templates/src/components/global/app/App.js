var MortarJS = require('../../../bootstrap').MortarJS;
var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
<% if (installType == "auth") {
%>var Login = MortarJS.Components.Authentication.Login.Login;<%
} %>
var AlertHandler = MortarJS.Components.Global.AlertHandler;
var Header = require('../header/Header');
var CmsUserStore = require('../../../stores/CmsUserStore');
<% if (installType == "auth") {
%>var SignOutConfirmationModal =  require('../../authentication/login/SignOutConfirmationModal');
var RequireAuth = require('../../authentication/RequireAuthentication');<%
} %>

/**
 * Wrapper for the CMS application
 *
 * @type {*|exports}
 */
var App = <% if (installType == "auth") { %>RequireAuth(<% } %>React.createClass({
		/**
		 * Used to state based on user authentication status
		 *
		 * @returns {{loggedIn: boolean}}
		 * @private
		 */
		_getLoginState: function () {
			return {
				loggedIn: !!CmsUserStore.isAuthenticated(),
				userIsRequestingSignOut: CmsUserStore.isRequestingSignOut()
			}
		},

		getInitialState: function () {
			return this._getLoginState();
		},

		/**
		 * Register a change listener with the CMS User Store
		 */
		componentDidMount: function () {
			this.changeListener = this._onChange;
			CmsUserStore.addChangeListener(this.changeListener);
		},

		/**
		 * Handle change events
		 *
		 * @private
		 */
		_onChange: function () {
			this.setState(this._getLoginState());
		},

		/**
		 * Deregister change listener
		 */
		componentWillUnmount: function () {
			CmsUserStore.removeChangeListener(this.changeListener);
		},

		/**
		 * Decide whether to render the app or a login page
		 *
		 * @returns {JSX}
		 */
		renderApp: function () {
			<% if (installType == "auth") {
			%>if (! this.state.loggedIn) {
				return (
					<div id="wrapper">
						{! CmsUserStore.isVeryifyingAccessToken() && (
							<Login />
						)}

						<AlertHandler />
					</div>
				)
			} else {
				return (
					<div id="wrapper">
						<Header />

						<RouteHandler />

						<AlertHandler />

					</div>
				)
			}<%} else {
				%>return (
					<div id="wrapper">
						<Header />

						<RouteHandler />

						<AlertHandler />

					</div>
				)<%
			}%>
		},

		render: function () {
			return this.renderApp();
		}
	})
<% if (installType == "auth") { %>);<% } %>

module.exports = App;
