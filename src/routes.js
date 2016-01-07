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
var Dashboard             = require('./pages/dashboard/Dashboard');

// Form Components
var DropdownSelect = require('./pages/components/form/DropdownSelect/DropdownSelect');
var Input = require('./pages/components/form/Input/Input');

// Visualization Components
var Table = require('./pages/components/visualization/table/Table');

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
		<Route name="index"                                                        handler={Dashboard} />

		<Route name="table" path="/components/table" handler={Table} />
		<Route name="dropdown" path="/components/dropdown" handler={DropdownSelect} />
		<Route name="input" path="/components/input" handler={Input} />

		<NotFoundRoute handler={Dashboard} />
	</Route>
);

module.exports = Routes;
