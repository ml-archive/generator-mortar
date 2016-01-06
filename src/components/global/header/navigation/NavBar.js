module.exports = function (navbarConfig) {
	var React = require('react/addons');
	var NavButtons = require('./NavButtons')(navbarConfig);

	return React.createClass({
		render: function () {
			return (
				<div className="nav navbar-nav">
					<NavButtons />
				</div>
			)
		}
	});
};
