var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

if (typeof APP == 'undefined') {
	var APP = {};
}

APP.HelloMessage = HelloMessage;