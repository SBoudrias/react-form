'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputSelect(_ref) {
  var options = _ref.options,
      field = _ref.field,
      showErrors = _ref.showErrors,
      errorBefore = _ref.errorBefore,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      isForm = _ref.isForm,
      noTouch = _ref.noTouch,
      errorProps = _ref.errorProps,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ['options', 'field', 'showErrors', 'errorBefore', 'onChange', 'onBlur', 'isForm', 'noTouch', 'errorProps', 'placeholder']);

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

      var resolvedOptions = options.find(function (d) {
        return d.value === '';
      }) ? options : [{
        label: placeholder || 'Select One...',
        value: '',
        disabled: true
      }].concat(_toConsumableArray(options));
      var selectedIndex = resolvedOptions.findIndex(function (d) {
        return d.value === getValue();
      });
      var nullIndex = resolvedOptions.findIndex(function (d) {
        return d.value === '';
      });
      return _react2.default.createElement(
        'select',
        _extends({}, rest, {
          onChange: (0, _util.buildHandler)(onChange, function (e) {
            var val = resolvedOptions[e.target.value].value;
            setValue(val, noTouch);
          }),
          onBlur: (0, _util.buildHandler)(onBlur, function () {
            return setTouched();
          }),
          value: selectedIndex > -1 ? selectedIndex : nullIndex
        }),
        resolvedOptions.map(function (option, i) {
          return _react2.default.createElement(
            'option',
            { key: option.value, value: i, disabled: option.disabled },
            option.label
          );
        })
      );
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSW5wdXRTZWxlY3QiLCJvcHRpb25zIiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImlzRm9ybSIsIm5vVG91Y2giLCJlcnJvclByb3BzIiwicGxhY2Vob2xkZXIiLCJyZXN0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsInNldFRvdWNoZWQiLCJyZXNvbHZlZE9wdGlvbnMiLCJmaW5kIiwiZCIsInZhbHVlIiwibGFiZWwiLCJkaXNhYmxlZCIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJudWxsSW5kZXgiLCJ2YWwiLCJlIiwidGFyZ2V0IiwibWFwIiwib3B0aW9uIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBS3dCQSxlOztBQUx4Qjs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7QUFGQTs7O0FBSWUsU0FBU0EsZUFBVCxPQVlaO0FBQUEsTUFYREMsT0FXQyxRQVhEQSxPQVdDO0FBQUEsTUFWREMsS0FVQyxRQVZEQSxLQVVDO0FBQUEsTUFUREMsVUFTQyxRQVREQSxVQVNDO0FBQUEsTUFSREMsV0FRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsUUFPQyxRQVBEQSxRQU9DO0FBQUEsTUFOREMsTUFNQyxRQU5EQSxNQU1DO0FBQUEsTUFMREMsTUFLQyxRQUxEQSxNQUtDO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsV0FFQyxRQUZEQSxXQUVDO0FBQUEsTUFERUMsSUFDRjs7QUFDRCxTQUNFO0FBQUE7QUFBQTtBQUNFLGFBQU9ULEtBRFQ7QUFFRSxrQkFBWUMsVUFGZDtBQUdFLG1CQUFhQyxXQUhmO0FBSUUsY0FBUUcsTUFKVjtBQUtFLGtCQUFZRTtBQUxkO0FBT0cscUJBQXdDO0FBQUEsVUFBckNHLFFBQXFDLFNBQXJDQSxRQUFxQztBQUFBLFVBQTNCQyxRQUEyQixTQUEzQkEsUUFBMkI7QUFBQSxVQUFqQkMsVUFBaUIsU0FBakJBLFVBQWlCOztBQUN2QyxVQUFNQyxrQkFBa0JkLFFBQVFlLElBQVIsQ0FBYTtBQUFBLGVBQUtDLEVBQUVDLEtBQUYsS0FBWSxFQUFqQjtBQUFBLE9BQWIsSUFDcEJqQixPQURvQixJQUdwQjtBQUNFa0IsZUFBT1QsZUFBZSxlQUR4QjtBQUVFUSxlQUFPLEVBRlQ7QUFHRUUsa0JBQVU7QUFIWixPQUhvQiw0QkFRakJuQixPQVJpQixFQUF4QjtBQVVBLFVBQU1vQixnQkFBZ0JOLGdCQUFnQk8sU0FBaEIsQ0FDcEI7QUFBQSxlQUFLTCxFQUFFQyxLQUFGLEtBQVlMLFVBQWpCO0FBQUEsT0FEb0IsQ0FBdEI7QUFHQSxVQUFNVSxZQUFZUixnQkFBZ0JPLFNBQWhCLENBQTBCO0FBQUEsZUFBS0wsRUFBRUMsS0FBRixLQUFZLEVBQWpCO0FBQUEsT0FBMUIsQ0FBbEI7QUFDQSxhQUNFO0FBQUE7QUFBQSxxQkFDTVAsSUFETjtBQUVFLG9CQUFVLHdCQUFhTixRQUFiLEVBQXVCLGFBQUs7QUFDcEMsZ0JBQU1tQixNQUFNVCxnQkFBZ0JVLEVBQUVDLE1BQUYsQ0FBU1IsS0FBekIsRUFBZ0NBLEtBQTVDO0FBQ0FOLHFCQUFTWSxHQUFULEVBQWNoQixPQUFkO0FBQ0QsV0FIUyxDQUZaO0FBTUUsa0JBQVEsd0JBQWFGLE1BQWIsRUFBcUI7QUFBQSxtQkFBTVEsWUFBTjtBQUFBLFdBQXJCLENBTlY7QUFPRSxpQkFBT08sZ0JBQWdCLENBQUMsQ0FBakIsR0FBcUJBLGFBQXJCLEdBQXFDRTtBQVA5QztBQVNHUix3QkFBZ0JZLEdBQWhCLENBQW9CLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ2xDLGlCQUNFO0FBQUE7QUFBQSxjQUFRLEtBQUtELE9BQU9WLEtBQXBCLEVBQTJCLE9BQU9XLENBQWxDLEVBQXFDLFVBQVVELE9BQU9SLFFBQXREO0FBQ0dRLG1CQUFPVDtBQURWLFdBREY7QUFLRCxTQU5BO0FBVEgsT0FERjtBQW1CRDtBQXpDSCxHQURGO0FBNkNEIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vXG5pbXBvcnQgeyBidWlsZEhhbmRsZXIgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL2Zvcm1JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUlucHV0U2VsZWN0ICh7XG4gIG9wdGlvbnMsXG4gIGZpZWxkLFxuICBzaG93RXJyb3JzLFxuICBlcnJvckJlZm9yZSxcbiAgb25DaGFuZ2UsXG4gIG9uQmx1cixcbiAgaXNGb3JtLFxuICBub1RvdWNoLFxuICBlcnJvclByb3BzLFxuICBwbGFjZWhvbGRlcixcbiAgLi4ucmVzdFxufSkge1xuICByZXR1cm4gKFxuICAgIDxGb3JtSW5wdXRcbiAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgIHNob3dFcnJvcnM9e3Nob3dFcnJvcnN9XG4gICAgICBlcnJvckJlZm9yZT17ZXJyb3JCZWZvcmV9XG4gICAgICBpc0Zvcm09e2lzRm9ybX1cbiAgICAgIGVycm9yUHJvcHM9e2Vycm9yUHJvcHN9XG4gICAgPlxuICAgICAgeyh7IHNldFZhbHVlLCBnZXRWYWx1ZSwgc2V0VG91Y2hlZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkT3B0aW9ucyA9IG9wdGlvbnMuZmluZChkID0+IGQudmFsdWUgPT09ICcnKVxuICAgICAgICAgID8gb3B0aW9uc1xuICAgICAgICAgIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogcGxhY2Vob2xkZXIgfHwgJ1NlbGVjdCBPbmUuLi4nLFxuICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgXVxuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gcmVzb2x2ZWRPcHRpb25zLmZpbmRJbmRleChcbiAgICAgICAgICBkID0+IGQudmFsdWUgPT09IGdldFZhbHVlKClcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBudWxsSW5kZXggPSByZXNvbHZlZE9wdGlvbnMuZmluZEluZGV4KGQgPT4gZC52YWx1ZSA9PT0gJycpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBvbkNoYW5nZT17YnVpbGRIYW5kbGVyKG9uQ2hhbmdlLCBlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gcmVzb2x2ZWRPcHRpb25zW2UudGFyZ2V0LnZhbHVlXS52YWx1ZVxuICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWwsIG5vVG91Y2gpXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uQmx1cj17YnVpbGRIYW5kbGVyKG9uQmx1ciwgKCkgPT4gc2V0VG91Y2hlZCgpKX1cbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEluZGV4ID4gLTEgPyBzZWxlY3RlZEluZGV4IDogbnVsbEluZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyZXNvbHZlZE9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17aX0gZGlzYWJsZWQ9e29wdGlvbi5kaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L0Zvcm1JbnB1dD5cbiAgKVxufVxuIl19