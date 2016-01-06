module.exports = function (headerConfig, navbarConfig) {
	var React = require('react/addons');
	var NavBar = require('./navigation/NavBar')(navbarConfig);
	var HeaderLogo = require('./HeaderLogo');
	var HeaderButtons = require('./HeaderButtons');

	/**
	 * The nav header wrapper component
	 * @type {*|Function}
	 */
	return React.createClass({
		render: function () {
			return (
				<nav className="navbar navbar-inverse" role="navigation" style={{marginBottom: 0}}>
					<div className="navbar-header">
						<HeaderLogo {...headerConfig} />
					</div>

					<HeaderButtons {...headerConfig} />

					<div className="navbar-collapse collapse navbar-responsive-collapse" role="navigation">
						<NavBar />
					</div>
				</nav>
			)
		}
	});
};
