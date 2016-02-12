var React = require('react/addons');
var MortarJS = require('../../app-container').MortarJS;

// Bricks
var Br = MortarJS.require('components', 'Row', 'Column', 'Form', 'Table');

// Assets
var logo = require('../../../mortar-logo.png');

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
					<Br.Row>
						<Br.Column grid="lg" size="4">
							<br />
							<img src={logo} width="300" />
						</Br.Column>
						<Br.Column grid="lg" size="6">
							<h1 className="page-header">Welcome to Mortar JS!</h1>
							<br />
							<p>Mortar JS is an opensource framework built with React that aims to make interacting and updating data quick, easy, and powerful. It can best be described as an Admin UI, allowing developers to quickly build sites to interface with an API, allowing users to safely interface with data, without accessing the database directly.</p>
							<p>Mortar is made of multiple Bricks (components) that work together to display and edit data. Tables, modal windows, buttons, form inputs and more are all included.</p>
							<p>Checkout the <a href="http://docs.mortarjs.io/" target="_blank">documentation</a> or the <a href="http://playground.mortarjs.io/" target="_blank">playground</a> to get started!</p>
						</Br.Column>
					</Br.Row>
				</div>
			</div>
		);
	}
});

module.exports = Dashboard;
