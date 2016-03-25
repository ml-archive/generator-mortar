var React = require('react/addons');
var HeaderButton = require('./HeaderButton');
<% if (installType == "auth") {
%>var RequirePermissions = require('../../authentication/RequirePermissions');<%
} %>

var HeaderButtons = React.createClass({
	propTypes: {
		buttons : React.PropTypes.array
	},

	buildButtons: function () {
		return this.props.buttons.map(function(button, index) {
			<% if (installType == "auth") {
			%>if (Array.isArray(button.permissions)) {
				return (
					<RequirePermissions key={index} requiredPermissions={button.permissions}>
						<HeaderButton key={index} {...button} />
					</RequirePermissions>
				)
			} else {
				return <HeaderButton key={index} {...button} />;
			}<% } else {
				%>return <HeaderButton key={index} {...button} />;<%
			} %>
		});
	},

	render: function () {
		return (
			<ul className="nav navbar-nav navbar-right">
				{this.buildButtons()}
			</ul>
		);
	}
});

module.exports = HeaderButtons;
