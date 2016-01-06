var React         = require('react/addons');
var Router        = require('react-router');

var Link          = Router.Link;
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

/**
 * Components
 *
 * @type {exports}
 */
var MortarJS = require('./bootstrap').MortarJS;
var App           = MortarJS.Components.Global.App;
var Login         = MortarJS.Components.Authentication.Login.Login;
var Logout        = MortarJS.Components.Authentication.Login.Logout;

/**
 * CMS Pages
 *
 * @type {exports}
 */
var Sessions             = require('./pages/sessions/Sessions'),
	EditSession          = require('./pages/sessions/components/EditSession');

/**
 * Routing
 *
 * This configuration doesn't necessarily map to routes, but to how the layout is presented by the router
 *
 * @type {JSX}
 * @TODO: top-level pages with no content should default to the first view
 * @TODO: build all these pages
 */
var Routes = (
	<Route path="/" handler={App}>
		<Route name="login"                                                        handler={Login} />
		<Route name="logout"                                                       handler={Logout} />
		<Route name="password-reset"                                               handler={Login} />
		<Route name="index"                                                        handler={Sessions} />

		<Route name="sessions"              path="/sessions"                       handler={Sessions} />
		<Route name="new-session"           path="/sessions/new"                   handler={EditSession} />
		<Route name="new-session-challenge" path="/sessions/new/challenge/:chal"   handler={EditSession} />
		<Route name="edit-session"          path="/sessions/edit/:id"              handler={EditSession} />

		<NotFoundRoute handler={Sessions} />
	</Route>
);

module.exports = Routes;
