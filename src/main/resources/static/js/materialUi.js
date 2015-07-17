//let React = require('react'),
//  mui = require('material-ui'),
//  RaisedButton = mui.RaisedButton;
//
//let SomeAwesomeComponent = React.createClass({
//
//  childContextTypes: {
//    muiTheme: React.PropTypes.object
//  },
//
//  getChildContext() {
//    return {
//      muiTheme: ThemeManager.getCurrentTheme()
//    };
//  },
//
//  render() {
//    return (
//        <RaisedButton label="Default" />
//    );
//  }
//
//});
//
//module.exports = MyAwesomeReactComponent;

require([ "js/commons" ], function(util) {
	// This function is called when scripts/helper/util.js is loaded.
	// If util.js calls define(), then this function is not fired until
	// util's dependencies have loaded, and the util argument will hold
	// the module value for "helper/util".
});

require(['lib/material-ui/0.10.1/index']);

var React = require(['lib/reactjs/0.13.3/react-with-addons']);
