var React = require('react');

// Mortar
var Mortar = require('mortarjs');
var Dispatcher = Mortar.Dispatcher;
var Br = Mortar.require('components', 'Row', 'Column', 'Form');
var FormStore = Mortar.Stores.FormStore;
var ResourceComponentMixin = Mortar.Mixins.ResourceComponentMixin;


/**
 * Wrapper for the Mortar application
 *
 * @type {*|exports}
 */
module.exports = React.createClass({
	mixins: [ResourceComponentMixin],

	getInitialState: function() {
		return {
			workingResource: {
				name: ''
			}
		};
	},

	formKey: 'main',

	componentDidMount: function() {
		this._componentDidMount();
	},

	componentWillUnmount: function() {
		this._componentWillUnmount();
	},

	pageConfig: function() {
		return {
			stores: [
				{
					store          : FormStore,
					changeListener : this.bindResource
				}
			]
		};
	},

	bindResource: function() {
		this.setState({
			workingResource: FormStore.getResource(this.formKey)
		});
	},

	render: function() {
		return (
			<Br.Row>
				<Br.Column grid="lg" size="6" classes="col-lg-offset-3">
					<div>
						<h1>Welcome to Mortar! {this.state.workingResource.name} </h1>
						<Br.Form key="welcomeForm" formKey={this.formKey} bindResource={this.state.workingResource}>
		 					<Br.Form.Input fieldKey="name" type="text" label="What's your name?" required="true" />
						</Br.Form>
					</div>
				</Br.Column>
			</Br.Row>
		);
	}
});