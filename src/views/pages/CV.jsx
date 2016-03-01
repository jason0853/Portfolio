var React = require('react');

var Video = require('../components/Video.jsx');
var CubeBox = require('../components/CubeBox.jsx');
var Resume = require('../components/Resume.jsx');
var Skill = require('../components/Skill.jsx');


var CV = React.createClass({

	render: function() {
		return (
			<div id="cv">
				<Video />
				<CubeBox />
				<Resume />
				<Skill />
			</div>
		);
	}

});

module.exports = CV;