var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var $ = require('jquery');

var Resume = React.createClass({

	render: function() {
		return (
			<div id="resume">
				<h2>Curriculum Vitae</h2>
				<Grid>
					<Row className="show-grid">
					  	<Col xs={12} mdOffset={1} md={10}>
						  	<div className="intro">
						  		<h3>Intro</h3>
								Though I&#39;ve started working as a front-end developer in late 2013, I&#39;m so interested in build automation & trend library.
								Front-end development is evolving with new library and framework these days. I enjoy learning those skills and making web&app application by using them.
								One of my strong advantage is to solve problems, searching documents which is written in English. Even if I have been handling javascript language, I&#39;ve been 
								studying about server-side language and DB and UI/UX interactive design to collaborate with co-workers smoothly, I trust it could help improve work efficiency of work.														
								I&#39;m so proud of my job and I love it, since I&#39;ve worked in IT field. All I can do is to keep my passion for new skills.
						  	</div>
						  	<div className="edu_ex">
						  		<h3>Education & Experience</h3>
						  		<div className="part">
						  			<p className="date_place">Feb. 2015 ~ present - NEMUSOFT Corp., Seoul</p>
									<p><span className="glyphicon glyphicon-ok-circle"></span> Front-end Developer</p>
									<ul>
										<li>Develop websites of public institutions</li>
										<li>Maintain Comico Webtoon Service</li>
										<li>Responsible for Front-end Development</li>
									</ul>
								</div>
						  		<div className="part">
						  			<p className="date_place">Dec. 2013 ~ Jan. 2015 - HelloWorld Corp., Seoul</p>
									<p><span className="glyphicon glyphicon-ok-circle"></span> Front-end Developer</p>
									<ul>
										<li>Joined Delivery web & mobile web application and Cargo management system project.</li>
										<li>Responsive web design</li>
										<li>Responsible for UI development</li>
									</ul>
								</div>
						  		<div className="part">
									<p className="date_place">March. 2012 ~ May. 2013 - HandsKorea Corp., Korea </p>
									<p><span className="glyphicon glyphicon-ok-circle"></span> Assistant & consultant</p>
									<ul>
										<li>Handle and send documents about foreign teachers to Korea teachers by mail</li>
										<li>Email useful information to foreign teachers</li>
										<li>Summarize resume and cover letter and translate English into Korean</li>
										<li>Organize the event for HSK teachers</li>
									</ul>
								</div>
						  		<div className="part">
						  			<p className="date_place">Mar. 2006 ~ Feb. 2012 - University of Yongin, Korea</p>
									<p><span className="glyphicon glyphicon-ok-circle"></span> Bachelor of Art - English</p>
								</div>
						  	</div>
					  	</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

module.exports = Resume;