'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Link = exports.SharingButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n'], ['\n  border-radius: 5px;\n  transition: 25ms ease-out;\n  padding: 0.5em 0.75em;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em;\n  display: inline-block;\n\n  svg {\n    width: 1em;\n    height: 1em;\n    vertical-align: top;\n\n    &:not(:only-child) {\n      margin-right: 0.4em;\n    }\n  }\n\n  ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  text-decoration: none;\n  color: #fff;\n  margin: 0.5em;\n  display: inline-block;\n\n  svg {\n    width: 1em;\n    height: 1em;\n    vertical-align: top;\n\n    &:not(:only-child) {\n      margin-right: 0.4em;\n    }\n  }\n\n  ', ';\n\n  ', ';\n\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    svg {\n      vertical-align: middle;\n    }\n  '], ['\n    svg {\n      vertical-align: middle;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    svg {\n      stroke: #232323;\n      fill: none;\n    }\n  '], ['\n    svg {\n      stroke: #232323;\n      fill: none;\n    }\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    svg {\n      stroke: #fff;\n      fill: none;\n    }\n  '], ['\n    svg {\n      stroke: #fff;\n      fill: none;\n    }\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  fill: #fff;\n  stroke: none;\n\n  ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  fill: #fff;\n  stroke: none;\n\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    fill: #fff;\n    stroke: none\n  '], ['\n    fill: #fff;\n    stroke: none\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SharingButton = exports.SharingButton = _styledComponents2.default.div(_templateObject);

var Link = exports.Link = _styledComponents2.default.a(_templateObject2, (0, _styledIs2.default)('small')(_templateObject3), (0, _styledIs2.default)('simple')(_templateObject4), (0, _styledIs2.default)('simpleReverse')(_templateObject5));

var Icon = exports.Icon = _styledComponents2.default.div(_templateObject6, (0, _styledIs.isOr)('solid', 'solidcircle')(_templateObject7));