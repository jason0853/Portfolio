var React = require('react');
var $ = require('jquery');

var ButtonResize = React.createClass({

	getInitialState: function() {
		return {
			resizeState: false
		};
	},

	updateScreenDimension: function() {

		var isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;

		if (!document.fullscreenElement &&
		      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { 
			this.setState({
				resizeState: false 
			});
		}
	},

	handleScreen: function() {

		// Check if it is currently being displayed fullscreen
		if (!document.fullscreenElement &&
		      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { 

			// Implement fullscreen mode
			if (document.documentElement.requestFullscreen) {
			      document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
			      document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			      document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
			      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
			this.setState({ resizeState: true });
		} else {		// Getting out of full screen mode
		    	if (document.exitFullscreen) {
		      	document.exitFullscreen();
		    	} else if (document.msExitFullscreen) {
		      	document.msExitFullscreen();
		    	} else if (document.mozCancelFullScreen) {
		      	document.mozCancelFullScreen();
		    	} else if (document.webkitExitFullscreen) {
		      	document.webkitExitFullscreen();
		    	}
		    	this.setState({ resizeState: false });
		}
	},

	componentDidMount: function() {
		window.addEventListener('resize', this.updateScreenDimension);

		$(document).on('keydown', function(e) {
			if (e.which == 122) {
				return false;
			}
		});
	},

	render: function() {
		var text = this.state.resizeState ? 'small' : 'full';
		return (
			<div id="buttonResize" onClick={this.handleScreen}>
				<span className={"glyphicon glyphicon-resize-" + text}></span>
			</div>
		);
	},

	

});

module.exports = ButtonResize;