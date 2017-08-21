'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputTextarea;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputTextarea(_ref) {
  var field = _ref.field,
      showErrors = _ref.showErrors,
      errorBefore = _ref.errorBefore,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      isForm = _ref.isForm,
      noTouch = _ref.noTouch,
      errorProps = _ref.errorProps,
      rest = _objectWithoutProperties(_ref, ['field', 'showErrors', 'errorBefore', 'onChange', 'onBlur', 'isForm', 'noTouch', 'errorProps']);

  return _react2.default.createElement(
    _formInput2.default,
    {
      field: field,
      showErrors: showErrors,
      errorBefore: errorBefore,
      isForm: isForm,
      errorProps: errorProps
    },
    function (_ref2) {
      var setValue = _ref2.setValue,
          getValue = _ref2.getValue,
          setTouched = _ref2.setTouched;

      return _react2.default.createElement('textarea', _extends({}, rest, {
        value: getValue(''),
        onChange: (0, _util.buildHandler)(onChange, function (e) {
          return setValue(e.target.value, noTouch);
        }),
        onBlur: (0, _util.buildHandler)(onBlur, function () {
          return setTouched();
        })
      }));
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3RleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dFRleHRhcmVhIiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImlzRm9ybSIsIm5vVG91Y2giLCJlcnJvclByb3BzIiwicmVzdCIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRUb3VjaGVkIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFLd0JBLGlCOztBQUx4Qjs7OztBQUVBOztBQUNBOzs7Ozs7O0FBRkE7OztBQUllLFNBQVNBLGlCQUFULE9BVVo7QUFBQSxNQVREQyxLQVNDLFFBVERBLEtBU0M7QUFBQSxNQVJEQyxVQVFDLFFBUkRBLFVBUUM7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxNQUhEQyxPQUdDLFFBSERBLE9BR0M7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxJQUNGOztBQUNELFNBQ0U7QUFBQTtBQUFBO0FBQ0UsYUFBT1IsS0FEVDtBQUVFLGtCQUFZQyxVQUZkO0FBR0UsbUJBQWFDLFdBSGY7QUFJRSxjQUFRRyxNQUpWO0FBS0Usa0JBQVlFO0FBTGQ7QUFPRyxxQkFBd0M7QUFBQSxVQUFyQ0UsUUFBcUMsU0FBckNBLFFBQXFDO0FBQUEsVUFBM0JDLFFBQTJCLFNBQTNCQSxRQUEyQjtBQUFBLFVBQWpCQyxVQUFpQixTQUFqQkEsVUFBaUI7O0FBQ3ZDLGFBQ0UsdURBQ01ILElBRE47QUFFRSxlQUFPRSxTQUFTLEVBQVQsQ0FGVDtBQUdFLGtCQUFVLHdCQUFhUCxRQUFiLEVBQXVCO0FBQUEsaUJBQy9CTSxTQUFTRyxFQUFFQyxNQUFGLENBQVNDLEtBQWxCLEVBQXlCUixPQUF6QixDQUQrQjtBQUFBLFNBQXZCLENBSFo7QUFNRSxnQkFBUSx3QkFBYUYsTUFBYixFQUFxQjtBQUFBLGlCQUFNTyxZQUFOO0FBQUEsU0FBckI7QUFOVixTQURGO0FBVUQ7QUFsQkgsR0FERjtBQXNCRCIsImZpbGUiOiJ0ZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vXG5pbXBvcnQgeyBidWlsZEhhbmRsZXIgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL2Zvcm1JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUlucHV0VGV4dGFyZWEgKHtcbiAgZmllbGQsXG4gIHNob3dFcnJvcnMsXG4gIGVycm9yQmVmb3JlLFxuICBvbkNoYW5nZSxcbiAgb25CbHVyLFxuICBpc0Zvcm0sXG4gIG5vVG91Y2gsXG4gIGVycm9yUHJvcHMsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUlucHV0XG4gICAgICBmaWVsZD17ZmllbGR9XG4gICAgICBzaG93RXJyb3JzPXtzaG93RXJyb3JzfVxuICAgICAgZXJyb3JCZWZvcmU9e2Vycm9yQmVmb3JlfVxuICAgICAgaXNGb3JtPXtpc0Zvcm19XG4gICAgICBlcnJvclByb3BzPXtlcnJvclByb3BzfVxuICAgID5cbiAgICAgIHsoeyBzZXRWYWx1ZSwgZ2V0VmFsdWUsIHNldFRvdWNoZWQgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWUoJycpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2J1aWxkSGFuZGxlcihvbkNoYW5nZSwgZSA9PlxuICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSwgbm9Ub3VjaClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkJsdXI9e2J1aWxkSGFuZGxlcihvbkJsdXIsICgpID0+IHNldFRvdWNoZWQoKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L0Zvcm1JbnB1dD5cbiAgKVxufVxuIl19