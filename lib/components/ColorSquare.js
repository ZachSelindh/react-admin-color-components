"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorSquare = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var ColorSquare = (0, _styles.styled)('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return 'backgroundColor' !== prop && 'width' !== prop && 'height' !== prop;
  }
})(function (_ref) {
  var backgroundColor = _ref.backgroundColor,
    width = _ref.width,
    height = _ref.height;
  return {
    width: width,
    height: height,
    background: backgroundColor,
    marginRight: '0.5em'
  };
});
exports.ColorSquare = ColorSquare;
ColorSquare.propTypes = {
  backgroundColor: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
ColorSquare.defaultProps = {
  width: '1.5em',
  height: '1.5em'
};