var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var MyReactBootstrap = require('./myReactBootstrap');
var MyLib = require('./myLib');
var ReactDatagrid = require('./reactDatagrid');

var App = React.createClass({
	render: function() {
		return (
				<div>
					<h1>Nikola</h1>
					<MyReactBootstrap />
				</div>
		);
	}
});

React.render(<App />, document.getElementById('example'));