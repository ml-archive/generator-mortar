var React = require('react');

/**
 * Wrapper for the Mortar application
 *
 * @type {*|exports}
 */
export default class App extends React.Component {
	render() {
		return (
			<div>
        <h1> Welcome to Mortar! </h1>
				{this.props.children}
			</div>
		);
	}
}