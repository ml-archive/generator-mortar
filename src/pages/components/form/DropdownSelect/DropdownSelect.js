// External Requirements
var React                  = require('react/addons');
var Router                 = require('react-router');
var assign                 = require('react/lib/Object.assign');
var MortarJS               = require('../../../../bootstrap').MortarJS;

// Fuzz Components
var Fz              = MortarJS.require('components', 'Row', 'Column', 'Form');
var CodeBlock1      = require('raw!./components/code_block_1.txt');
var CodeBlock2      = require('raw!./components/code_block_2.txt');
var ResourceActions = MortarJS.Actions.ResourceActions;

// Stores
var FormStore              = MortarJS.Stores.FormStore;
var UsersResourceStore             = require('../../../../stores/UsersResourceStore'); //@TODO change if this doesn't work

// Mixins
var ResourceComponentMixin = MortarJS.Mixins.ResourceComponentMixin;

/**
 * DropdownSelect
 *
 * @type {*|Function}
 */
var DropdownSelect = React.createClass({
	mixins: [ResourceComponentMixin, Router.Navigation],

	getInitialState: function () {
		return {
			workingResource: {},
			params: {},
			season: {},
			colors: [],
			formIsValid: true
		}
	},

	pageConfig: function() {
		return {
			stores: [
				{
					store: FormStore,
					changeListener: this.bindResource
				}
			]
		}
	},

	formKey: 'dropdownForm',

	componentDidMount: function() {
		this._componentDidMount();
	},

	componentWillUnmount: function() {
		this._componentWillUnmount();
	},

	bindResource: function () {
		this.setState({
			workingResource: FormStore.getResource(this.formKey),
		});

		console.log('this.state', this.state.workingResource);
	},

	dropdownOptions1: ['Winter', 'Spring', 'Summer', 'Fall'],

	dropdownOptions2: ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Taupe', 'Mauve'],

	render: function() {
		var tableOptions = {};

		return (
			<div id="page-wrapper">
				<div id="page-content">
					<div id="content"><h1>DropdownSelect</h1></div>
				</div>
				<Fz.Row>
					<Fz.Column grid="lg" size="10" classes="col-lg-offset-1">
						<div className="panel panel-default">
							<Fz.Row>
								<Fz.Column grid="lg" size="12">
									<p>Tables are a great way to display lots of data, and have a large number of options to configure the output and interactions with that data.</p>
									<p>Each table takes a set of "table keys" that tell Mortar what data to display from the API.  These can map 1:1 to properties on the JSON response from an API, or can be mutated using "tableOptions" to change the output before being rendered.</p>
								</Fz.Column>
							</Fz.Row>

							<Fz.Row>
								<Fz.Form key="myFancyForm" formKey={this.formKey} bindResource={this.state.workingResource}>
									<Fz.Column grid="lg" size="6">
										<Fz.Form.DropdownSelect fieldKey='season'
											options={this.dropdownOptions1}
											multiple={false} placeholder='Select a Season'
											required={true} />
									</Fz.Column>
									<Fz.Column grid="lg" size="6">
										<pre className="prettyprint">
											<code className="language-js">
												{CodeBlock1}
											</code>
										</pre>
									</Fz.Column>
								</Fz.Form>
							</Fz.Row>

							<Fz.Row>
								<Fz.Form key="myFancyForm" formKey={this.formKey} bindResource={this.state.workingResource}>
									<Fz.Column grid="lg" size="6">
										<Fz.Form.DropdownSelect fieldKey='colors'
											options={this.dropdownOptions2}
											multiple={true} placeholder='Select a Color'
											required={true} />
									</Fz.Column>
									<Fz.Column grid="lg" size="6">
										<pre className="prettyprint">
											<code className="language-js">
												{CodeBlock2}
											</code>
										</pre>
									</Fz.Column>
								</Fz.Form>
							</Fz.Row>

						</div>
					</Fz.Column>
				</Fz.Row>
			</div>
		);

	}
});

module.exports = DropdownSelect;

