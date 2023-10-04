"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var ReactColor = _interopRequireWildcard(require("react-color"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _reactAdmin = require("react-admin");
var _ColorSquare = require("./ColorSquare");
var _excluded = ["className", "colorSquareOptions", "helperText", "label", "picker", "pickerOptions", "resource", "source"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorPicker = function ColorPicker(props) {
  var className = props.className,
    colorSquareOptions = props.colorSquareOptions,
    helperText = props.helperText,
    label = props.label,
    picker = props.picker,
    pickerOptions = props.pickerOptions,
    resource = props.resource,
    source = props.source,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useInput = (0, _reactAdmin.useInput)(_objectSpread({
      resource: resource,
      source: source
    }, rest)),
    field = _useInput.field,
    _useInput$fieldState = _useInput.fieldState,
    error = _useInput$fieldState.error,
    invalid = _useInput$fieldState.invalid,
    isTouched = _useInput$fieldState.isTouched,
    isSubmitted = _useInput.formState.isSubmitted,
    id = _useInput.id,
    isRequired = _useInput.isRequired;
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    showPicker = _React$useState2[0],
    setShowPicker = _React$useState2[1];
  var initialColor = React.useRef(field.value);
  var handleChange = function handleChange(_ref) {
    var hex = _ref.hex;
    field.onChange(hex);
  };
  var handleCancel = function handleCancel() {
    setShowPicker(false);
    field.onChange(initialColor.current);
  };
  var handleConfirm = function handleConfirm() {
    setShowPicker(false);
  };
  var Picker = ReactColor["".concat(picker, "Picker")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_TextField["default"], (0, _extends2["default"])({}, (0, _reactAdmin.sanitizeInputRestProps)(rest), field, {
    id: id,
    className: (0, _clsx["default"])('ra-input', "ra-input-".concat(source), className),
    error: (isTouched || isSubmitted) && invalid,
    label: /*#__PURE__*/React.createElement(_reactAdmin.FieldTitle, {
      label: label,
      source: source,
      resource: resource,
      isRequired: isRequired
    }),
    helperText: /*#__PURE__*/React.createElement(_reactAdmin.InputHelperText, {
      touched: isTouched || isSubmitted,
      error: error === null || error === void 0 ? void 0 : error.message,
      helperText: helperText
    }),
    InputProps: {
      endAdornment: /*#__PURE__*/React.createElement(_ColorSquare.ColorSquare, (0, _extends2["default"])({}, colorSquareOptions, {
        backgroundColor: field.value
      }))
    },
    onClick: function onClick() {
      return setShowPicker(true);
    }
  })), /*#__PURE__*/React.createElement(_Dialog["default"], {
    open: showPicker
  }, /*#__PURE__*/React.createElement(_DialogContent["default"], null, /*#__PURE__*/React.createElement(Picker, (0, _extends2["default"])({}, pickerOptions, {
    header: label,
    color: field.value,
    onChangeComplete: handleChange,
    onAccept: handleConfirm,
    onCancel: handleCancel
  })))));
};
exports.ColorPicker = ColorPicker;
ColorPicker.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].string,
  pickerOptions: _propTypes["default"].object,
  colorSquareOptions: _propTypes["default"].shape({
    height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
    width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
  }),
  source: _propTypes["default"].string,
  picker: function picker(props, propName, componentName) {
    return !ReactColor["".concat(props[propName], "Picker")] && new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`."));
  }
};
ColorPicker.defaultProps = {
  defaultValue: '',
  colorSquareOptions: {},
  margin: 'dense',
  picker: 'Photoshop',
  pickerOptions: {},
  variant: 'filled'
};