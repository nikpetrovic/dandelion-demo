'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var ImageLandscape = React.createClass({
  displayName: 'ImageLandscape',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z' })
    );
  }

});

module.exports = ImageLandscape;