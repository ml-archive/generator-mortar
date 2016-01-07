// External Requirements
var React                  = require('react/addons');
var Router                 = require('react-router');
var assign                 = require('react/lib/Object.assign');
var MortarJS               = require('../../../../bootstrap').MortarJS;

// Fuzz Components
var Fz              = MortarJS.require('components', 'Row', 'Column', 'Form', 'Table', 'PaginatedButtons', 'PerPageSelector');
var CodeBlock1      = require('raw!./components/code_block_1.txt');
var ResourceActions = MortarJS.Actions.ResourceActions;

// Stores
var FormStore              = MortarJS.Stores.FormStore;
var UsersResourceStore     = require('../../../../stores/UsersResourceStore'); //@TODO change if this doesn't work

// Mixins
var ResourceComponentMixin = MortarJS.Mixins.ResourceComponentMixin;

/**
 * Table
 *
 * @type {*|Function}
 */
var Table = React.createClass({
	mixins: [ResourceComponentMixin, Router.Navigation],

	getInitialState: function () {
		return {
			workingResource: {},
			params: {},
			users: {},
			formIsValid: true
		}
	},

	resourceActions: new ResourceActions('users'),

	pageConfig: function() {
		return {
			stores: [
				{
					store: FormStore
				},
				{
					store: UsersResourceStore,
					bindTo: 'users',
					action: UsersResourceStore.getResourceListData,
					options: this.getOptions
				}
			]
		}
	},

	componentDidMount: function() {
		this.requestTableData();
		this._componentDidMount();
	},

	componentWillUnmount: function() {
		this._componentWillUnmount();
	},

	getOptions: {
		modifiers: {
			include: []
		},
		dataNode: 'data'
	},

	requestTableData: function(modifiers) {
		this.getOptions.modifiers = assign(this.getOptions.modifiers, modifiers, {});

		this.resourceActions.listResource(this.getOptions);
	},

	tableKeys: {
		'First Name': 'first_name',
		'Last Name': 'last_name',
		'Phone': 'phone_number',
		'email': 'email'
	},

	render: function() {
		var tableOptions = {};

		return (
			<div id="page-wrapper">
				<div id="page-content">
					<div id="content"><h1>Table</h1></div>
				</div>
				<div className="panel panel-default">
					<Fz.Row>
						<Fz.Column grid="lg" size="12">
							<p>Tables are a great way to display lots of data, and have a large number of options to configure the output and interactions with that data.</p>
							<p>Each table takes a set of "table keys" that tell Mortar what data to display from the API.  These can map 1:1 to properties on the JSON response from an API, or can be mutated using "tableOptions" to change the output before being rendered.</p>
						</Fz.Column>
					</Fz.Row>
					<Fz.Row>
						<Fz.Column grid="lg" size="6">
							<Fz.Table data={this.state.users}
								dataKeys={this.tableKeys}
								title={'Table'}
								options={tableOptions} />

							<Fz.PaginatedButtons actionMethod={this.requestTableData} />
							<Fz.PerPageSelector actionMethod={this.requestTableData} />
						</Fz.Column>
						<Fz.Column grid="lg" size="6">
							<pre className="prettyprint">
								<code className="language-js">
									{CodeBlock1}
								</code>
							</pre>
						</Fz.Column>
					</Fz.Row>
				</div>
			</div>
		);

	}
});

module.exports = Table;

