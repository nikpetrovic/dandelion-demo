'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var ContentAdd = React.createClass({
  displayName: 'ContentAdd',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
    );
  }

});

module.exports = ContentAdd;