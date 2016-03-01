var React = require('react');

var Video = require('../components/Video.jsx');


var CV = React.createClass({

	render: function() {
		return (
			<div id="cv">
				<Video />
			</div>
		);
	}

});

module.exports = CV;