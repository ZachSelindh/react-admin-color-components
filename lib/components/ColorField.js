"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorField = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _reactAdmin = require("react-admin");
var _get = _interopRequireDefault(require("lodash/get"));
var _ColorSquare = require("./ColorSquare");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ColorField = function ColorField(props) {
  var source = props.source,
    className = props.className,
    colorSquareOptions = props.colorSquareOptions;
  var record = (0, _reactAdmin.useRecordContext)(props);
  var fieldValue = (0, _get["default"])(record, source);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(_ColorSquare.ColorSquare, (0, _extends2["default"])({}, colorSquareOptions, {
    backgroundColor: fieldValue
  })), /*#__PURE__*/React.createElement(_Typography["default"], {
    className: className
  }, fieldValue));
};
exports.ColorField = ColorField;
ColorField.propTypes = {
  className: _propTypes["default"].string,
  record: _propTypes["default"].object,
  source: _propTypes["default"].string.isRequired
};
ColorField.defaultProps = {
  className: '',
  source: '',
  colorSquareOptions: {}
};