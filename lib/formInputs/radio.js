'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var noop = function noop() {};

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onClick = _props.onClick,
          onChange = _props.onChange,
          onBlur = _props.onBlur,
          rest = _objectWithoutProperties(_props, ['value', 'onClick', 'onChange', 'onBlur']);

      var _context$formRadioGro = this.context.formRadioGroup,
          setValue = _context$formRadioGro.setValue,
          getValue = _context$formRadioGro.getValue,
          setTouched = _context$formRadioGro.setTouched,
          noTouch = _context$formRadioGro.props.noTouch;

      return _react2.default.createElement('input', _extends({}, rest, {
        type: 'radio',
        checked: getValue(false) === value,
        onChange: (0, _util.buildHandler)(onChange, noop),
        onClick: (0, _util.buildHandler)(onClick, function (e) {
          return setValue(value, noTouch);
        }),
        onBlur: (0, _util.buildHandler)(onBlur, function () {
          return setTouched();
        })
      }));
    }
  }]);

  return Radio;
}(_react2.default.Component);

Radio.contextTypes = {
  formRadioGroup: _propTypes2.default.object
};
exports.default = Radio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3JhZGlvLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJSYWRpbyIsInByb3BzIiwidmFsdWUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJyZXN0IiwiY29udGV4dCIsImZvcm1SYWRpb0dyb3VwIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsInNldFRvdWNoZWQiLCJub1RvdWNoIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7NkJBSVQ7QUFBQSxtQkFDOEMsS0FBS0MsS0FEbkQ7QUFBQSxVQUNBQyxLQURBLFVBQ0FBLEtBREE7QUFBQSxVQUNPQyxPQURQLFVBQ09BLE9BRFA7QUFBQSxVQUNnQkMsUUFEaEIsVUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLE1BRDFCLFVBQzBCQSxNQUQxQjtBQUFBLFVBQ3FDQyxJQURyQzs7QUFBQSxrQ0FPSixLQUFLQyxPQUFMLENBQWFDLGNBUFQ7QUFBQSxVQUdOQyxRQUhNLHlCQUdOQSxRQUhNO0FBQUEsVUFJTkMsUUFKTSx5QkFJTkEsUUFKTTtBQUFBLFVBS05DLFVBTE0seUJBS05BLFVBTE07QUFBQSxVQU1HQyxPQU5ILHlCQU1OWCxLQU5NLENBTUdXLE9BTkg7O0FBUVIsYUFDRSxvREFDTU4sSUFETjtBQUVFLGNBQUssT0FGUDtBQUdFLGlCQUFTSSxTQUFTLEtBQVQsTUFBb0JSLEtBSC9CO0FBSUUsa0JBQVUsd0JBQWFFLFFBQWIsRUFBdUJMLElBQXZCLENBSlo7QUFLRSxpQkFBUyx3QkFBYUksT0FBYixFQUFzQjtBQUFBLGlCQUFLTSxTQUFTUCxLQUFULEVBQWdCVSxPQUFoQixDQUFMO0FBQUEsU0FBdEIsQ0FMWDtBQU1FLGdCQUFRLHdCQUFhUCxNQUFiLEVBQXFCO0FBQUEsaUJBQU1NLFlBQU47QUFBQSxTQUFyQjtBQU5WLFNBREY7QUFVRDs7OztFQXRCZ0MsZ0JBQU1FLFM7O0FBQXBCYixLLENBQ1pjLFksR0FBZTtBQUNwQk4sa0JBQWdCLG9CQUFVTztBQUROLEM7a0JBREhmLEsiLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vL1xuaW1wb3J0IHsgYnVpbGRIYW5kbGVyIH0gZnJvbSAnLi91dGlsJ1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBmb3JtUmFkaW9Hcm91cDogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2xpY2ssIG9uQ2hhbmdlLCBvbkJsdXIsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBzZXRWYWx1ZSxcbiAgICAgIGdldFZhbHVlLFxuICAgICAgc2V0VG91Y2hlZCxcbiAgICAgIHByb3BzOiB7IG5vVG91Y2ggfSxcbiAgICB9ID0gdGhpcy5jb250ZXh0LmZvcm1SYWRpb0dyb3VwXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgIGNoZWNrZWQ9e2dldFZhbHVlKGZhbHNlKSA9PT0gdmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtidWlsZEhhbmRsZXIob25DaGFuZ2UsIG5vb3ApfVxuICAgICAgICBvbkNsaWNrPXtidWlsZEhhbmRsZXIob25DbGljaywgZSA9PiBzZXRWYWx1ZSh2YWx1ZSwgbm9Ub3VjaCkpfVxuICAgICAgICBvbkJsdXI9e2J1aWxkSGFuZGxlcihvbkJsdXIsICgpID0+IHNldFRvdWNoZWQoKSl9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIl19