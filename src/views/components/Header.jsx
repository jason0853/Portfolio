var React = require('react');
var $ = require('jquery');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;


// react-router
var IndexLink = require('react-router').IndexLink;
var Link = require('react-router').Link;

// views/components
var Logo = require('./Logo.jsx');
var ButtonResize = require('./ButtonResize.jsx');

var Header = React.createClass({
	getInitialState: function() {
		return {
			open: false
		};
	},

	handleToggle: function() {
		this.setState({
			open: !this.state.open
		}, function() {
			if (this.state.open === true) {
				$('#header').find('.icon-bar:eq(0)').removeClass('glyphicon glyphicon-menu-down');
				$('#header').find('.icon-bar:eq(0)').addClass('glyphicon glyphicon-menu-up');
			} else {
				$('#header').find('.icon-bar:eq(0)').removeClass('glyphicon glyphicon-menu-up');
				$('#header').find('.icon-bar:eq(0)').addClass('glyphicon glyphicon-menu-down');
			}
		});
	},

	componentDidMount: function() {
		// Added classname to toggle button
		$('#header').find('.icon-bar:eq(0)').addClass('glyphicon glyphicon-menu-down');
	},

	render: function() {
		 
		var location = this.props.location;
		var cvClass = location.pathname === '/' ? 'selected' : '';
		var webClass = location.pathname.match(/^\/web/)  ? 'selected' : '';
	
		return (
			<Navbar id="header" inverse fixedTop onToggle={this.handleToggle}>
			    	<Navbar.Header>
			      	<Navbar.Brand>
			        		<a href="#">
			        			<Logo />
			        		</a>
			      	</Navbar.Brand>
			      	<Navbar.Toggle />
			    	</Navbar.Header>
			    	<Navbar.Collapse>
				      <Nav>
				        	<li className={"gnb " + cvClass}>
				        		<IndexLink to="/"><span data-hover="CV">CV</span></IndexLink>
				        	</li>
				        	<li className={"gnb " + webClass}>
				        		<Link to="web"><span data-hover="WEB">WEB</span></Link>
				        	</li>
				      </Nav>
			    	</Navbar.Collapse>
			    	<ButtonResize />
			</Navbar>
		);
	}

});

module.exports = Header;