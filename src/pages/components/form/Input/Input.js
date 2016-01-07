// External Requirements
var React                  = require('react/addons');
var Router                 = require('react-router');
var assign                 = require('react/lib/Object.assign');
var MortarJS               = require('../../../../app-container').MortarJS;
console.log('moratr', MortarJS);

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
 * Input
 *
 * @type {*|Function}
 */
var Input = React.createClass({
	mixins: [ResourceComponentMixin, Router.Navigation],

	getInitialState: function () {
		return {
			workingResource: {
				username: '',
				email: 'kmendes@fuzzproductions.com'
			},
			params: {},
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

	formKey: 'inputForm',

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
	},

	render: function() {
		var tableOptions = {};

		return (
			<div id="page-wrapper">
				<div id="page-content">
					<div id="content"><h1>Input</h1></div>
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
								<h3>Text Input</h3>
								<Fz.Form key="myFancyForm" formKey={this.formKey} bindResource={this.state.workingResource}>
									<Fz.Column grid="lg" size="6">
										<Fz.Column grid="lg" size="6">
											<Fz.Form.Input fieldKey="username" type="text" label="Username"  placeholder="Example: kmendes" required="true" />
										</Fz.Column>
										<Fz.Column grid="lg" size="6">
											<b>Username value:</b>
											<p>{this.state.workingResource.username}</p>
										</Fz.Column>
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
								<h3>Disabled field </h3>
								<Fz.Form key="myFancyForm" formKey={this.formKey} bindResource={this.state.workingResource}>
									<Fz.Column grid="lg" size="6">
										<Fz.Column grid="lg" size="6">
											<Fz.Form.Input fieldKey="email" type="email" label="Email"  placeholder="example@web.com" required="true" disabled={true} />
										</Fz.Column>
										<Fz.Column grid="lg" size="6">
											<b>Email value:</b>
											<p>{this.state.workingResource.email}</p>
										</Fz.Column>
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

module.exports = Input;

