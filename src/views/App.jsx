var React = require('react');
var ReactDOM = require('react-dom');

// react-router
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

// views/pages
var Layout = require('./pages/Layout.jsx');
var CV = require('./pages/CV.jsx');
var Web = require('./pages/Web.jsx');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={CV}></IndexRoute>
			<Route path="web" component={Web}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
);