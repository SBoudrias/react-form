'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputNestedForm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputNestedForm(_ref) {
  var field = _ref.field,
      children = _ref.children,
      errorProps = _ref.errorProps,
      rest = _objectWithoutProperties(_ref, ['field', 'children', 'errorProps']);

  return _react2.default.createElement(
    _formInput2.default,
    { field: field, errorBefore: true, isForm: true, errorProps: errorProps },
    function (_ref2) {
      var setValue = _ref2.setValue,
          getValue = _ref2.getValue,
          getTouched = _ref2.getTouched,
          setNestedError = _ref2.setNestedError;

      if (Array.isArray(children)) {
        // console.warn(
        //   "NestedForm's only child must be a single ReactForm component. Using the first child of:",
        //   children,
        // )
        children = children[0];
      }
      return _react2.default.cloneElement(children, _extends({}, rest, {
        /* Let the parent form set defaultValues */
        values: getValue(),
        /* Respond to the parent form's dirty submission attempts */
        touched: getTouched(),
        /* Notify the parent of any nestedForm-level errors and values */
        onChange: function onChange(_ref3, props, initial) {
          var values = _ref3.values,
              errors = _ref3.errors;

          errors ? setNestedError(true) : setNestedError(false);
          setValue(values, initial);
        }
      }));
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL25lc3RlZEZvcm0uanMiXSwibmFtZXMiOlsiRm9ybUlucHV0TmVzdGVkRm9ybSIsImZpZWxkIiwiY2hpbGRyZW4iLCJlcnJvclByb3BzIiwicmVzdCIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJnZXRUb3VjaGVkIiwic2V0TmVzdGVkRXJyb3IiLCJBcnJheSIsImlzQXJyYXkiLCJjbG9uZUVsZW1lbnQiLCJ2YWx1ZXMiLCJ0b3VjaGVkIiwib25DaGFuZ2UiLCJwcm9wcyIsImluaXRpYWwiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUl3QkEsbUI7O0FBSnhCOzs7O0FBRUE7Ozs7Ozs7QUFEQTs7O0FBR2UsU0FBU0EsbUJBQVQsT0FLWjtBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLElBQ0Y7O0FBQ0QsU0FDRTtBQUFBO0FBQUEsTUFBVyxPQUFPSCxLQUFsQixFQUF5QixpQkFBekIsRUFBcUMsWUFBckMsRUFBNEMsWUFBWUUsVUFBeEQ7QUFDRyxxQkFBd0Q7QUFBQSxVQUFyREUsUUFBcUQsU0FBckRBLFFBQXFEO0FBQUEsVUFBM0NDLFFBQTJDLFNBQTNDQSxRQUEyQztBQUFBLFVBQWpDQyxVQUFpQyxTQUFqQ0EsVUFBaUM7QUFBQSxVQUFyQkMsY0FBcUIsU0FBckJBLGNBQXFCOztBQUN2RCxVQUFJQyxNQUFNQyxPQUFOLENBQWNSLFFBQWQsQ0FBSixFQUE2QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxtQkFBV0EsU0FBUyxDQUFULENBQVg7QUFDRDtBQUNELGFBQU8sZ0JBQU1TLFlBQU4sQ0FBbUJULFFBQW5CLGVBQ0ZFLElBREU7QUFFTDtBQUNBUSxnQkFBUU4sVUFISDtBQUlMO0FBQ0FPLGlCQUFTTixZQUxKO0FBTUw7QUFDQU8sa0JBQVUseUJBQXFCQyxLQUFyQixFQUE0QkMsT0FBNUIsRUFBd0M7QUFBQSxjQUFyQ0osTUFBcUMsU0FBckNBLE1BQXFDO0FBQUEsY0FBN0JLLE1BQTZCLFNBQTdCQSxNQUE2Qjs7QUFDaERBLG1CQUFTVCxlQUFlLElBQWYsQ0FBVCxHQUFnQ0EsZUFBZSxLQUFmLENBQWhDO0FBQ0FILG1CQUFTTyxNQUFULEVBQWlCSSxPQUFqQjtBQUNEO0FBVkksU0FBUDtBQVlEO0FBckJILEdBREY7QUF5QkQiLCJmaWxlIjoibmVzdGVkRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL2Zvcm1JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUlucHV0TmVzdGVkRm9ybSAoe1xuICBmaWVsZCxcbiAgY2hpbGRyZW4sXG4gIGVycm9yUHJvcHMsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUlucHV0IGZpZWxkPXtmaWVsZH0gZXJyb3JCZWZvcmUgaXNGb3JtIGVycm9yUHJvcHM9e2Vycm9yUHJvcHN9PlxuICAgICAgeyh7IHNldFZhbHVlLCBnZXRWYWx1ZSwgZ2V0VG91Y2hlZCwgc2V0TmVzdGVkRXJyb3IgfSkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXG4gICAgICAgICAgLy8gICBcIk5lc3RlZEZvcm0ncyBvbmx5IGNoaWxkIG11c3QgYmUgYSBzaW5nbGUgUmVhY3RGb3JtIGNvbXBvbmVudC4gVXNpbmcgdGhlIGZpcnN0IGNoaWxkIG9mOlwiLFxuICAgICAgICAgIC8vICAgY2hpbGRyZW4sXG4gICAgICAgICAgLy8gKVxuICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW5bMF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAvKiBMZXQgdGhlIHBhcmVudCBmb3JtIHNldCBkZWZhdWx0VmFsdWVzICovXG4gICAgICAgICAgdmFsdWVzOiBnZXRWYWx1ZSgpLFxuICAgICAgICAgIC8qIFJlc3BvbmQgdG8gdGhlIHBhcmVudCBmb3JtJ3MgZGlydHkgc3VibWlzc2lvbiBhdHRlbXB0cyAqL1xuICAgICAgICAgIHRvdWNoZWQ6IGdldFRvdWNoZWQoKSxcbiAgICAgICAgICAvKiBOb3RpZnkgdGhlIHBhcmVudCBvZiBhbnkgbmVzdGVkRm9ybS1sZXZlbCBlcnJvcnMgYW5kIHZhbHVlcyAqL1xuICAgICAgICAgIG9uQ2hhbmdlOiAoeyB2YWx1ZXMsIGVycm9ycyB9LCBwcm9wcywgaW5pdGlhbCkgPT4ge1xuICAgICAgICAgICAgZXJyb3JzID8gc2V0TmVzdGVkRXJyb3IodHJ1ZSkgOiBzZXROZXN0ZWRFcnJvcihmYWxzZSlcbiAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlcywgaW5pdGlhbClcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfX1cbiAgICA8L0Zvcm1JbnB1dD5cbiAgKVxufVxuIl19