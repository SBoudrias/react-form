'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputCheckbox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputCheckbox(_ref) {
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

      return _react2.default.createElement('input', _extends({}, rest, {
        type: 'checkbox',
        checked: getValue(),
        onChange: (0, _util.buildHandler)(onChange, function (e) {
          return setValue(e.target.checked, noTouch);
        }),
        onBlur: (0, _util.buildHandler)(onBlur, function () {
          return setTouched();
        })
      }));
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dENoZWNrYm94IiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImlzRm9ybSIsIm5vVG91Y2giLCJlcnJvclByb3BzIiwicmVzdCIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRUb3VjaGVkIiwiZSIsInRhcmdldCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUt3QkEsaUI7O0FBTHhCOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7QUFGQTs7O0FBSWUsU0FBU0EsaUJBQVQsT0FVWjtBQUFBLE1BVERDLEtBU0MsUUFUREEsS0FTQztBQUFBLE1BUkRDLFVBUUMsUUFSREEsVUFRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFDRSxhQUFPUixLQURUO0FBRUUsa0JBQVlDLFVBRmQ7QUFHRSxtQkFBYUMsV0FIZjtBQUlFLGNBQVFHLE1BSlY7QUFLRSxrQkFBWUU7QUFMZDtBQU9HLHFCQUF3QztBQUFBLFVBQXJDRSxRQUFxQyxTQUFyQ0EsUUFBcUM7QUFBQSxVQUEzQkMsUUFBMkIsU0FBM0JBLFFBQTJCO0FBQUEsVUFBakJDLFVBQWlCLFNBQWpCQSxVQUFpQjs7QUFDdkMsYUFDRSxvREFDTUgsSUFETjtBQUVFLGNBQUssVUFGUDtBQUdFLGlCQUFTRSxVQUhYO0FBSUUsa0JBQVUsd0JBQWFQLFFBQWIsRUFBdUI7QUFBQSxpQkFDL0JNLFNBQVNHLEVBQUVDLE1BQUYsQ0FBU0MsT0FBbEIsRUFBMkJSLE9BQTNCLENBRCtCO0FBQUEsU0FBdkIsQ0FKWjtBQU9FLGdCQUFRLHdCQUFhRixNQUFiLEVBQXFCO0FBQUEsaUJBQU1PLFlBQU47QUFBQSxTQUFyQjtBQVBWLFNBREY7QUFXRDtBQW5CSCxHQURGO0FBdUJEIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy9cbmltcG9ydCB7IGJ1aWxkSGFuZGxlciB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi4vZm9ybUlucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtSW5wdXRDaGVja2JveCAoe1xuICBmaWVsZCxcbiAgc2hvd0Vycm9ycyxcbiAgZXJyb3JCZWZvcmUsXG4gIG9uQ2hhbmdlLFxuICBvbkJsdXIsXG4gIGlzRm9ybSxcbiAgbm9Ub3VjaCxcbiAgZXJyb3JQcm9wcyxcbiAgLi4ucmVzdFxufSkge1xuICByZXR1cm4gKFxuICAgIDxGb3JtSW5wdXRcbiAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgIHNob3dFcnJvcnM9e3Nob3dFcnJvcnN9XG4gICAgICBlcnJvckJlZm9yZT17ZXJyb3JCZWZvcmV9XG4gICAgICBpc0Zvcm09e2lzRm9ybX1cbiAgICAgIGVycm9yUHJvcHM9e2Vycm9yUHJvcHN9XG4gICAgPlxuICAgICAgeyh7IHNldFZhbHVlLCBnZXRWYWx1ZSwgc2V0VG91Y2hlZCB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgY2hlY2tlZD17Z2V0VmFsdWUoKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtidWlsZEhhbmRsZXIob25DaGFuZ2UsIGUgPT5cbiAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQuY2hlY2tlZCwgbm9Ub3VjaClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkJsdXI9e2J1aWxkSGFuZGxlcihvbkJsdXIsICgpID0+IHNldFRvdWNoZWQoKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L0Zvcm1JbnB1dD5cbiAgKVxufVxuIl19