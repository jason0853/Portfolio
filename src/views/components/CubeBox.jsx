var React = require('react');
var $ = require('jquery');

var CubeBox = React.createClass({

	componentDidMount: function() {
		// Define #vid element variable
		var vidElem = document.getElementById('vid');
		
		// Occur event after Video is loadaddEventListener
		vidElem.addEventListener('loadeddata', function() {
			var videoHeight = $('#vid').height();
			var cubeboxHeight = $('#cubebox').height();
			
			function VerticalCenter (videoHeight, cubeboxHeight) {

				// Position vertical center
				$('#cubebox').css({ 'top': (videoHeight - cubeboxHeight) / 2 });	
			}
			
			// Execute VerticalCenter function
			VerticalCenter(videoHeight, cubeboxHeight);

			// Trigger resize event
			$(window).resize(function() {
			
				// Define local variable 
				var videoHeight = $('#video').height();
				var cubeboxHeight = $('#cubebox').height();

				// Execute VerticalCenter function		
				VerticalCenter(videoHeight, cubeboxHeight);
			});
		}, false);		
	},

	render: function() {
		return (
			<div id="cubebox">
				<div id="cube" className="animate">
					<div>FRONT-END</div>
					<div>FULLSTACK</div>
					<div>UI / UX</div>
					<div>WEB</div>
					<div>APP</div>
					<div>CREATOR</div>
				</div>
			</div>
		);
	}

});

module.exports = CubeBox;