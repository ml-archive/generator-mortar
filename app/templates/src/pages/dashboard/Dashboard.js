var React = require('react/addons');
var MortarJS = require('../../app-container').MortarJS;
var Br = MortarJS.require('components', 'Row', 'Column', 'Form', 'Table');

/**
 * The Instructors list page view component
 *
 * @type {*|Function}
 */
var Dashboard = React.createClass({
	render: function () {

		return (
			<div id="page-wrapper">
				<div id="page-content">
					<div id="content"></div>
					<Row>
						<Column grid="lg" size="6">
							<h1 className="page-header">Dashboard</h1>
						</Column>
					</Row>

					<Row>

					</Row>
				</div>
			</div>
		)
	}
});

module.exports = Dashboard;
