var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var $ = require('jquery');
var d3 = require('d3');


var Skill = React.createClass({

	componentDidMount: function() {

		var flag = false;
		// See D3 margin convention
		var margin = { top: 20, right: 10, bottom: 100, left: 40}
		      width = $('#barChart').width() - margin.right - margin.left;
		      height = $('#barChart').height() - margin.top - margin.bottom;

		function DrawBarChart(width, height) {
			var margin = { top: 20, right: 10, bottom: 100, left: 40}
		      width = $('#barChart').width() - margin.right - margin.left;
		      height = $('#barChart').height() - margin.top - margin.bottom;

			// Define SVG
			var svg = d3.select('#barChart')
					.append('svg')
					.attr({
						'width' : width + margin.right + margin.left,
						'height' : height + margin.top + margin.bottom
					})
					.append('g')
						.attr('transform', 'translate(' + margin.left + ', ' + margin.right + ')');

			// Define x y scale
			var xScale = d3.scale.ordinal()
							.rangeRoundBands([0, width], 0.2, 0.2);

			var yScale = d3.scale.linear()
							.range([height, 0]);
			// Define axis
			var xAxis = d3.svg.axis()
								.scale(xScale)
								.orient('bottom');

			var yAxis = d3.svg.axis()
								.scale(yScale)
								.orient('left')
								.tickFormat(function(d) {
									return d + '%';
								});

			// Data mapping
			d3.json('data/barChart.json', function(error, data) {
				if (error) console.log("Error: data not loaded");

				data.sort(function(a, b) {
					return b.percent - a. percent;
				});

				// Specify the domains of the x and y scales.
				xScale.domain(data.map(function(d) { return d.language; }) );
				yScale.domain([0, 100]);

				// Draw the bars  
				svg.selectAll('rect')
					.data(data)
					.enter()
					.append('rect')
					.attr('height', 0)
					.attr('y', height)
					.attr('rx', '5px')
					.transition().duration(3000)
					.delay(function(d, i) { return i * 200 })
					.attr({
						'x' : function(d) { return xScale(d.language); },
						'y' : function(d) { return yScale(d.percent); },
						'width' : xScale.rangeBand(),
						'height' : function(d) { return height - yScale(d.percent); }
					})
					.style('fill', '#666');

				//lable the bars
				svg.selectAll('text')
					.data(data)
					.enter()
					.append('text')
					.text(function(d) { return d.percent; })
					.attr('x', function(d) { return xScale(d.language) + xScale.rangeBand() / 2; })
					.attr('y', function(d) { return yScale(d.percent) + 17; })
					.style('fill', 'white')
					.style('text-anchor', 'middle');


				// Draw the xAxis
				svg.append('g')
					.attr('class', 'x axis')
					.attr('transform', 'translate(0, ' + height + ')')
					.call(xAxis)
					.selectAll('text')
					.attr('transform', 'rotate(-60)')
					.attr('dx', '-.8em')
					.attr('dy', '-.25em')
					.style('fill', '#aaa')
					.style('text-anchor', 'end');

				// Draw the yAxis
				svg.append('g')
					.attr('class', 'y axis')
					.call(yAxis)
					.style('fill', '#aaa');
			});
		}

		DrawBarChart(width, height);

		// function ShowDrawBarChart(width, height) {

		// 	var documentHeight = $(document).height();
		// 	var startPoint = documentHeight - ($('#barChart').height() + $('.contact').height() + 200);
		// 	var scrollTop = $(window).scrollTop();

		// 	if (scrollTop >= startPoint && !flag) {
		// 		DrawBarChart(width, height);
		// 		flag = true;
		// 	}
		// 	if (scrollTop < startPoint && flag) {
		// 		d3.select('#barChart').select('svg').remove();
		// 		flag = false;
		// 	}
		// }

		function ResizeDrawBarChart() {
			d3.select('#barChart').select('svg').remove();
			DrawBarChart(width, height);
		}


		// d3.select(window).on('scroll', ShowDrawBarChart);
		d3.select(window).on('resize', ResizeDrawBarChart);
	},

	render: function() {
		return (
			<div id="skill">
				<Grid>
					<Row className="show-grid">
					  	<Col xs={12} mdOffset={1} md={10}>
							<div className="skill_chart">
								<h3>Skill</h3>
								<div id="barChart"></div>
							</div>
					  	</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

module.exports = Skill;