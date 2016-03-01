var React = require('react');

var Header = require('../components/Header.jsx');


var Layout = React.createClass({
	contextTypes: {
	    router: React.PropTypes.object.isRequired
	},

	navigate: function() {
		this.context.router.push('/');
	},

	render: function() {
		return (
			<div id="layout">
				<Header location={this.props.location} />
				{this.props.children}
			</div>
		);
	}

});

module.exports = Layout;