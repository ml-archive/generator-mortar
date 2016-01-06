module.exports = function (config, headerConfig, navbarConfig) {
	var MortarJS = require('../../../bootstrap').MortarJS;
	var React = require('react/addons');
	var Router = require('react-router');
	var assign = require('react/lib/Object.assign');
	var RequireAuth = MortarJS.Components.Authentication.RequireAuthentication;
	var RouteHandler = Router.RouteHandler;
	var CmsUserStore = MortarJS.Stores.CmsUserStore;
	var Login = MortarJS.Components.Authentication.Login.Login;
	var AlertHandler = MortarJS.Components.Global.AlertHandler;
	var Header = MortarJS.Components.Header.Header;
	var SignOutConfirmationModal =  MortarJS.Components.Authentication.Login.SignOutConfirmationModal;

	/**
	 * Wrapper for the CMS application
	 *
	 * @type {*|exports}
	 */
	return RequireAuth(
		React.createClass({
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
				if (! this.state.loggedIn) {
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

							<SignOutConfirmationModal openWhen={this.state.userIsRequestingSignOut} />
						</div>
					)
				}
			},

			render: function () {
				return this.renderApp();
			}
		})
	);
};

