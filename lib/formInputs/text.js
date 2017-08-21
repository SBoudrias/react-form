'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputText(_ref) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3RleHQuanMiXSwibmFtZXMiOlsiRm9ybUlucHV0VGV4dCIsImZpZWxkIiwic2hvd0Vycm9ycyIsImVycm9yQmVmb3JlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJpc0Zvcm0iLCJub1RvdWNoIiwiZXJyb3JQcm9wcyIsInJlc3QiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwic2V0VG91Y2hlZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBS3dCQSxhOztBQUx4Qjs7OztBQUVBOztBQUNBOzs7Ozs7O0FBRkE7OztBQUllLFNBQVNBLGFBQVQsT0FVWjtBQUFBLE1BVERDLEtBU0MsUUFUREEsS0FTQztBQUFBLE1BUkRDLFVBUUMsUUFSREEsVUFRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFDRSxhQUFPUixLQURUO0FBRUUsa0JBQVlDLFVBRmQ7QUFHRSxtQkFBYUMsV0FIZjtBQUlFLGNBQVFHLE1BSlY7QUFLRSxrQkFBWUU7QUFMZDtBQU9HLHFCQUF3QztBQUFBLFVBQXJDRSxRQUFxQyxTQUFyQ0EsUUFBcUM7QUFBQSxVQUEzQkMsUUFBMkIsU0FBM0JBLFFBQTJCO0FBQUEsVUFBakJDLFVBQWlCLFNBQWpCQSxVQUFpQjs7QUFDdkMsYUFDRSxvREFDTUgsSUFETjtBQUVFLGVBQU9FLFNBQVMsRUFBVCxDQUZUO0FBR0Usa0JBQVUsd0JBQWFQLFFBQWIsRUFBdUI7QUFBQSxpQkFDL0JNLFNBQVNHLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbEIsRUFBeUJSLE9BQXpCLENBRCtCO0FBQUEsU0FBdkIsQ0FIWjtBQU1FLGdCQUFRLHdCQUFhRixNQUFiLEVBQXFCO0FBQUEsaUJBQU1PLFlBQU47QUFBQSxTQUFyQjtBQU5WLFNBREY7QUFVRDtBQWxCSCxHQURGO0FBc0JEIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IHsgYnVpbGRIYW5kbGVyIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9mb3JtSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dFRleHQgKHtcbiAgZmllbGQsXG4gIHNob3dFcnJvcnMsXG4gIGVycm9yQmVmb3JlLFxuICBvbkNoYW5nZSxcbiAgb25CbHVyLFxuICBpc0Zvcm0sXG4gIG5vVG91Y2gsXG4gIGVycm9yUHJvcHMsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUlucHV0XG4gICAgICBmaWVsZD17ZmllbGR9XG4gICAgICBzaG93RXJyb3JzPXtzaG93RXJyb3JzfVxuICAgICAgZXJyb3JCZWZvcmU9e2Vycm9yQmVmb3JlfVxuICAgICAgaXNGb3JtPXtpc0Zvcm19XG4gICAgICBlcnJvclByb3BzPXtlcnJvclByb3BzfVxuICAgID5cbiAgICAgIHsoeyBzZXRWYWx1ZSwgZ2V0VmFsdWUsIHNldFRvdWNoZWQgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB2YWx1ZT17Z2V0VmFsdWUoJycpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2J1aWxkSGFuZGxlcihvbkNoYW5nZSwgZSA9PlxuICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSwgbm9Ub3VjaClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkJsdXI9e2J1aWxkSGFuZGxlcihvbkJsdXIsICgpID0+IHNldFRvdWNoZWQoKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L0Zvcm1JbnB1dD5cbiAgKVxufVxuIl19