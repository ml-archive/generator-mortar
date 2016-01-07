// External Requirements
var React                  = require('react/addons');
var Router                 = require('react-router');
var assign                 = require('react/lib/Object.assign');
var MortarJS               = require('../../../bootstrap').MortarJS;

// Fuzz Components
var Fz                     = MortarJS.require('components', 'Row', 'Column', 'Form', 'Table', 'PaginatedButtons', 'PerPageSelector');
var ResourceActions        = MortarJS.Actions.ResourceActions;

// Stores
var FormStore              = MortarJS.Stores.FormStore;
var UsersResourceStore = require('../../../stores/UsersResourceStore'); //@TODO change if this doesn't work

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
		// @TODO: Fill me in!
	},

	render: function() {
		var tableOptions = {};

		return (
			<div id="page-wrapper">
				<div id="page-content">
					<div id="content"><h1>DropdownSelect</h1></div>
				</div>
				<Fz.Row>
					<Fz.Column grid="lg" size="12">
						<Fz.Table data={this.state.users}
							dataKeys={this.tableKeys}
							title={'DropdownSelect'}
							options={tableOptions} />

						<Fz.PaginatedButtons actionMethod={this.requestTableData} />
						<Fz.PerPageSelector actionMethod={this.requestTableData} />
					</Fz.Column>
				</Fz.Row>
			</div>
		);

	}
});

module.exports = DropdownSelect;

