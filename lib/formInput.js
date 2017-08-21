'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _formField = require('./formField');

var _formField2 = _interopRequireDefault(_formField);

var _formError = require('./formError');

var _formError2 = _interopRequireDefault(_formError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function FormInput(_ref) {
  var field = _ref.field,
      _ref$showErrors = _ref.showErrors,
      showErrors = _ref$showErrors === undefined ? true : _ref$showErrors,
      errorBefore = _ref.errorBefore,
      isForm = _ref.isForm,
      className = _ref.className,
      children = _ref.children,
      _ref$errorProps = _ref.errorProps,
      errorProps = _ref$errorProps === undefined ? {} : _ref$errorProps;

  return _react2.default.createElement(
    _formField2.default,
    { field: field },
    function (_ref2) {
      var api = _objectWithoutProperties(_ref2, []);

      var showAnyErrors = showErrors && (isForm ? api.getTouched() === true : true);
      var classes = (0, _classnames2.default)('FormInput', {
        '-hasError': showAnyErrors && api.getTouched() && api.getError()
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes },
        errorBefore && showAnyErrors && _react2.default.createElement(_formError2.default, _extends({ field: field }, errorProps)),
        children(_extends({}, api)),
        !errorBefore && showAnyErrors && _react2.default.createElement(_formError2.default, _extends({ field: field }, errorProps))
      );
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtSW5wdXQuanMiXSwibmFtZXMiOlsiRm9ybUlucHV0IiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJpc0Zvcm0iLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImVycm9yUHJvcHMiLCJhcGkiLCJzaG93QW55RXJyb3JzIiwiZ2V0VG91Y2hlZCIsImNsYXNzZXMiLCJnZXRFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBTXdCQSxTOztBQU54Qjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSxTQUFULE9BUVo7QUFBQSxNQVBEQyxLQU9DLFFBUERBLEtBT0M7QUFBQSw2QkFOREMsVUFNQztBQUFBLE1BTkRBLFVBTUMsbUNBTlksSUFNWjtBQUFBLE1BTERDLFdBS0MsUUFMREEsV0FLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLE1BSERDLFNBR0MsUUFIREEsU0FHQztBQUFBLE1BRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLDZCQUREQyxVQUNDO0FBQUEsTUFEREEsVUFDQyxtQ0FEWSxFQUNaOztBQUNELFNBQ0U7QUFBQTtBQUFBLE1BQVcsT0FBT04sS0FBbEI7QUFDRyxxQkFBZ0I7QUFBQSxVQUFWTyxHQUFVOztBQUNmLFVBQU1DLGdCQUNKUCxlQUFlRSxTQUFTSSxJQUFJRSxVQUFKLE9BQXFCLElBQTlCLEdBQXFDLElBQXBELENBREY7QUFFQSxVQUFNQyxVQUFVLDBCQUNkLFdBRGMsRUFFZDtBQUNFLHFCQUFhRixpQkFBaUJELElBQUlFLFVBQUosRUFBakIsSUFBcUNGLElBQUlJLFFBQUo7QUFEcEQsT0FGYyxFQUtkUCxTQUxjLENBQWhCOztBQVFBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV00sT0FBaEI7QUFDR1IsdUJBQ0NNLGFBREQsSUFFQyw4REFBVyxPQUFPUixLQUFsQixJQUE2Qk0sVUFBN0IsRUFISjtBQUlHRCw4QkFDSUUsR0FESixFQUpIO0FBT0csU0FBQ0wsV0FBRCxJQUNDTSxhQURELElBRUMsOERBQVcsT0FBT1IsS0FBbEIsSUFBNkJNLFVBQTdCO0FBVEosT0FERjtBQWFEO0FBekJILEdBREY7QUE2QkQiLCJmaWxlIjoiZm9ybUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuL2Zvcm1GaWVsZCdcbmltcG9ydCBGb3JtRXJyb3IgZnJvbSAnLi9mb3JtRXJyb3InXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dCAoe1xuICBmaWVsZCxcbiAgc2hvd0Vycm9ycyA9IHRydWUsXG4gIGVycm9yQmVmb3JlLFxuICBpc0Zvcm0sXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGVycm9yUHJvcHMgPSB7fSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUZpZWxkIGZpZWxkPXtmaWVsZH0+XG4gICAgICB7KHsgLi4uYXBpIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2hvd0FueUVycm9ycyA9XG4gICAgICAgICAgc2hvd0Vycm9ycyAmJiAoaXNGb3JtID8gYXBpLmdldFRvdWNoZWQoKSA9PT0gdHJ1ZSA6IHRydWUpXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgICAgICAgICdGb3JtSW5wdXQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICctaGFzRXJyb3InOiBzaG93QW55RXJyb3JzICYmIGFwaS5nZXRUb3VjaGVkKCkgJiYgYXBpLmdldEVycm9yKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAge2Vycm9yQmVmb3JlICYmXG4gICAgICAgICAgICAgIHNob3dBbnlFcnJvcnMgJiZcbiAgICAgICAgICAgICAgPEZvcm1FcnJvciBmaWVsZD17ZmllbGR9IHsuLi5lcnJvclByb3BzfSAvPn1cbiAgICAgICAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgICAgICAgIC4uLmFwaSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgeyFlcnJvckJlZm9yZSAmJlxuICAgICAgICAgICAgICBzaG93QW55RXJyb3JzICYmXG4gICAgICAgICAgICAgIDxGb3JtRXJyb3IgZmllbGQ9e2ZpZWxkfSB7Li4uZXJyb3JQcm9wc30gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9Gb3JtRmllbGQ+XG4gIClcbn1cbiJdfQ==