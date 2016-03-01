var React = require('react');
var $ = require('jquery');
var d3 = require('d3');

var SNS = React.createClass({

	componentDidMount: function() {
		var width = $('#sns').width();
		var height = $('#sns').height();
		var dataSet = [
			{logo: 't', url: 'https://twitter.com/js0853'},
			{logo: 'f', url: 'https://www.facebook.com/js0853'},
			{logo: 'i', url: 'https://www.instagram.com/js0853/'}
		];

		var svg = d3.select('#sns').append('svg')
					.attr('width', width)
					.attr('height', height);

		var buttonGroup = svg.selectAll('g')
							.data(dataSet)
							.enter()
							.append('a')
							.attr("xlink:href", function(d) { return d.url; })
							.style('text-decoration', 'none')
							.append('g')
							.attr('transform', function(d, i) {  return 'translate('+ width / 2 + ',' + (i+3) * 32 + ')'; })
							.on("mouseover", function(d,i) {
						        	d3.select(this).selectAll('circle').transition()
						        		.style('fill', '#565656')
						            	.ease('elastic')
						            	.duration('500')
						            	.attr('r', 17)
						      	d3.select(this).selectAll('text').transition()
						      		.style('fill', '#fff')
						            	.ease('elastic')
						            	.duration('500')
						            	.attr('font-size', 25);
						    	})
							.on("mouseout", function(d,i) {
						        	d3.select(this).selectAll('circle').transition()
						            	.style('fill', '#fff')
						            	.ease('quad')
						            	.delay('100')
						            	.duration('200')
						            	.attr('r', 12);
						        	d3.select(this).selectAll('text').transition()
						        		.style('fill', '#565656')
						            	.ease('quad')
						            	.delay('100')
						            	.duration('200')
						            	.attr('font-size', 20);
						  	});

		buttonGroup.append('circle')
			.attr('r', 12)
			.attr('fill', '#fff')
			.attr('cursor', 'pointer');

		buttonGroup.append('text')
			.attr('x', -2)
			.attr('y', 7)
			.attr('font-size', 20)
			.attr('cursor', 'pointer')
			.style('fill', '#565656')
			.text(function(d) { return d.logo; });
	},

	render: function() {
		return (
			<div id="sns">
			</div>
		);
	}

});

module.exports = SNS;