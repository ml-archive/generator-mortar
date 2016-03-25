var React = require('react/addons');
var HeaderButtonDropDownItem = require('./HeaderButtonDropdownItem');
<% if (installType == "auth") {
%>var SignOutLink = require('../../authentication/login/SignOutHeaderLink');
var RequirePermissions = require('../../authentication/RequirePermissions');<%
} %>

var HeaderButtonDropdown = React.createClass({
	propTypes: {
		items : React.PropTypes.string.isRequired
	},

	buildItems: function () {
		return this.props.items.map(function (item, index) {
			<% if (installType == "auth") {
			%>if (Array.isArray(item.permissions)) {
				return (
					<RequirePermissions key={index} requiredPermissions={item.permissions}>
						<HeaderButtonDropDownItem key={index} {...item} />
					</RequirePermissions>
				)
			} else {
				return <HeaderButtonDropDownItem key={index} {...item} />;
			}<% } else {
				%>return <HeaderButtonDropDownItem key={index} {...item} />;<%
			} %>
		});
	},

	render: function () {
		return (
			<ul className="dropdown-menu dropdown-user">
				{this.buildItems()}<% if (installType == "auth") {%><SignOutLink /><%} %>
			</ul>
		);
	}
});

module.exports = HeaderButtonDropdown;
