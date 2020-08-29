'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _common = require('../common');

var _wrapper = require('./wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonFactory = function ButtonFactory(_ref) {
  var small = _ref.small,
      solid = _ref.solid,
      medium = _ref.medium,
      big = _ref.big,
      circle = _ref.circle,
      solidcircle = _ref.solidcircle,
      simple = _ref.simple,
      simpleReverse = _ref.simpleReverse,
      Button = _ref.buttonComponent,
      IconFill = _ref.iconFill,
      IconCircle = _ref.iconCircle,
      IconCircleSolid = _ref.iconCircleSolid,
      name = _ref.name,
      ariaName = _ref.ariaName,
      href = _ref.href,
      label = _ref.label,
      _ref$target = _ref.target,
      target = _ref$target === undefined ? '_blank' : _ref$target,
      props = _objectWithoutProperties(_ref, ['small', 'solid', 'medium', 'big', 'circle', 'solidcircle', 'simple', 'simpleReverse', 'buttonComponent', 'iconFill', 'iconCircle', 'iconCircleSolid', 'name', 'ariaName', 'href', 'label', 'target']);

  var usedLabel = typeof label === 'function' ? label(ariaName || name) : 'Share on ' + (ariaName || name);
  return _react2.default.createElement(
    _common.Link,
    {
      href: href,
      simple: simple,
      simpleReverse: simpleReverse,
      target: target,
      rel: 'noreferrer noopener',
      'aria-label': usedLabel,
      title: usedLabel
    },
    simple || simpleReverse ? _react2.default.createElement(IconFill, props) : _react2.default.createElement(
      Button,
      _extends({ small: small, solidcircle: solidcircle }, props),
      _react2.default.createElement(
        _common.Icon,
        {
          solid: !solid && !circle && !solidcircle || solid,
          solidcircle: solidcircle,
          'aria-hidden': 'true'
        },
        (0, _wrapper2.default)(small, solid, medium, big, circle, solidcircle, IconFill, IconCircle, IconCircleSolid, name)
      )
    )
  );
};

exports.default = ButtonFactory;