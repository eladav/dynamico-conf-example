'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var nativeBase = require('native-base');

var Header = function Header(_a) {
  var children = _a.children;
  return React.createElement(nativeBase.Header, null, children);
};

module.exports = Header;
