'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (small, solid, medium, big, circle, solidcircle, Fill, Circle, CircleSolid, name) {
  var buttonLabel = !small ? _react2.default.createElement(
    'span',
    null,
    !big ? name : 'Share on ' + name
  ) : null;

  if (solid) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      Fill(),
      ' ',
      buttonLabel
    );
  }

  if (circle) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      Circle(),
      ' ',
      buttonLabel
    );
  }

  if (solidcircle) {
    return _react2.default.createElement(
      _react.Fragment,
      null,
      CircleSolid(),
      ' ',
      buttonLabel
    );
  }

  return _react2.default.createElement(
    _react.Fragment,
    null,
    Fill(),
    ' ',
    buttonLabel
  );
};