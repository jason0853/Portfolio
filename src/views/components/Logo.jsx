var React = require('react');
var d3 = require('d3');

var Logo = React.createClass({

	componentDidMount: function() {
		// Define canvas
		var canvas = d3.select('#logo')
					.append('svg')
						.attr('width', 100)
						.attr('height', 70);

		// Define text
		var text = canvas.append('text')
						.attr('x', 27)
						.attr('y', 23)
						.attr('font-size', 13)
						.style('fill', '#fff')
						.style('font-family', 'Pacifico')
						.on('mouseover', function() {
							d3.select(this)
								.transition()
								.ease('cubic-out')
								.duration('500')
								.style('fill', '#333');
						})
						.on('mouseout', function() {
							d3.select(this)
								.transition()
								.ease('cubic-out')
								.delay('100')
								.duration('200')
								.style('fill', '#fff');
						});

		// Append <tspan> to do line break
		text.append('tspan')
				.attr('dy', 0)
				.attr('x', 27)
				.text('Jaesung');

		text.append('tspan')
				.attr('dy', '1.3em')
				.attr('x', 29)
				.text('Lee');
	},

	render: function() {
		return (
			<div id="logo"></div>
		);
	}

});

module.exports = Logo;