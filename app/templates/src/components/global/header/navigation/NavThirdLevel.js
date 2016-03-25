var React = require('react/addons');

var NavThirdLevel = React.createClass({
	propTypes: {
		button       : React.PropTypes.shape({
			buttonName : React.PropTypes.string.isRequired
		})
	},

	render: function () {
		return (
				<li>
					<a href={this.props.button.href}>{this.props.button.buttonName}</a>
				</li>
		);
	}
});

module.exports = NavThirdLevel;
