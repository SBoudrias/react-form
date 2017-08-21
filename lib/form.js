'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDefaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};
var reop = function reop(d) {
  return d;
};

var FormDefaultProps = exports.FormDefaultProps = {
  loadState: noop,
  defaultValues: {},
  preValidate: reop,
  validate: function validate() {
    return null;
  },
  onValidationFail: noop,
  onChange: noop,
  saveState: noop,
  willUnmount: noop,
  preSubmit: reop,
  onSubmit: noop,
  postSubmit: noop
};

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.setAllValues = _this.setAllValues.bind(_this);
    _this.setValue = _this.setValue.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.setNestedError = _this.setNestedError.bind(_this);
    _this.getError = _this.getError.bind(_this);
    _this.getTouchedError = _this.getTouchedError.bind(_this);
    _this.setTouched = _this.setTouched.bind(_this);
    _this.getTouched = _this.getTouched.bind(_this);
    _this.addValue = _this.addValue.bind(_this);
    _this.removeValue = _this.removeValue.bind(_this);
    _this.swapValues = _this.swapValues.bind(_this);
    _this.setAllTouched = _this.setAllTouched.bind(_this);
    _this.resetForm = _this.resetForm.bind(_this);
    _this.submitForm = _this.submitForm.bind(_this);
    _this.getDefaultState = _this.getDefaultState.bind(_this); // using 'Default' since `Initial` will now throw deprecation warnings

    _this.state = _this.getDefaultState();
    return _this;
  }

  _createClass(Form, [{
    key: 'getDefaultState',
    value: function getDefaultState() {
      var _props = this.props,
          defaultValues = _props.defaultValues,
          values = _props.values,
          loadState = _props.loadState;


      var mergedValues = _extends({}, defaultValues, values);

      return loadState(this.props, this) || {
        values: _utils2.default.clone(mergedValues),
        touched: {},
        errors: {},
        nestedErrors: {}
      };
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        formAPI: this.getAPI()
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.emitChange(this.state, true);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var defaultValues = props.defaultValues,
          values = props.values;

      if (this.props.defaultValues === defaultValues && this.props.values === values) {
        return;
      }

      var mergedValues = this.props.defaultValues === defaultValues ? values : _extends({}, defaultValues, values);

      this.setFormState({
        values: mergedValues ? _utils2.default.clone(mergedValues) : {}
      }, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.willUnmount(this.state, this.props, this);
    }

    // API

  }, {
    key: 'setAllValues',
    value: function setAllValues(values, noTouch) {
      if (noTouch) {
        return this.setFormState({ values: values });
      }
      this.setFormState({ values: values, touched: {} });
    }
  }, {
    key: 'setValue',
    value: function setValue(field, value, noTouch) {
      var state = this.state;
      var values = _utils2.default.set(state.values, field, value);
      // Also set touched since the value is changing
      if (noTouch) {
        return this.setFormState({ values: values });
      }
      var touched = _utils2.default.set(state.touched, field);
      this.setFormState({ values: values, touched: touched });
    }
  }, {
    key: 'getValue',
    value: function getValue(field, fallback) {
      var state = this.state;
      var val = _utils2.default.get(state.values, field);
      return typeof val !== 'undefined' ? val : fallback;
    }
  }, {
    key: 'setNestedError',
    value: function setNestedError(field) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var nestedErrors = _utils2.default.set(this.state.nestedErrors, field, value);
      this.setFormState({ nestedErrors: nestedErrors });
    }
  }, {
    key: 'getError',
    value: function getError(field) {
      return _utils2.default.get(this.state.errors, field);
    }
  }, {
    key: 'getTouchedError',
    value: function getTouchedError(field) {
      if (this.getTouched(field)) {
        return this.getError(field);
      }
    }
  }, {
    key: 'setTouched',
    value: function setTouched(field) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var touched = _utils2.default.set(this.state.touched, field, value);
      this.setFormState({ touched: touched });
    }
  }, {
    key: 'getTouched',
    value: function getTouched(field) {
      var state = this.state;
      if (this.state.dirty === true || this.props.touched === true) {
        return true;
      }
      return _utils2.default.get(state.touched, field);
    }
  }, {
    key: 'addValue',
    value: function addValue(field, value) {
      var state = this.state;
      var values = _utils2.default.set(state.values, field, [].concat(_toConsumableArray(_utils2.default.get(state.values, field, [])), [value]));
      this.setFormState({ values: values });
    }
  }, {
    key: 'removeValue',
    value: function removeValue(field, index) {
      var state = this.state;
      var fieldValue = _utils2.default.get(state.values, field, []);
      var values = _utils2.default.set(state.values, field, [].concat(_toConsumableArray(fieldValue.slice(0, index)), _toConsumableArray(fieldValue.slice(index + 1))));
      this.setFormState({ values: values });
    }
  }, {
    key: 'swapValues',
    value: function swapValues(field, index, destIndex) {
      var state = this.state;

      var min = Math.min(index, destIndex);
      var max = Math.max(index, destIndex);

      var fieldValues = _utils2.default.get(state.values, field, []);
      var values = _utils2.default.set(state.values, field, [].concat(_toConsumableArray(fieldValues.slice(0, min)), [fieldValues[max]], _toConsumableArray(fieldValues.slice(min + 1, max)), [fieldValues[min]], _toConsumableArray(fieldValues.slice(max + 1))));
      this.setFormState({ values: values });
    }
  }, {
    key: 'setAllTouched',
    value: function setAllTouched() {
      var dirty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var state = arguments[1];

      this.setFormState(_extends({}, state, {
        dirty: !!dirty
      }));
    }
  }, {
    key: 'resetForm',
    value: function resetForm() {
      return this.setFormState(this.getDefaultState(), true);
    }
  }, {
    key: 'submitForm',
    value: function submitForm(e) {
      e && e.preventDefault && e.preventDefault(e);
      var state = this.state;
      var errors = this.validate(state.values, state, this.props);
      if (errors) {
        if (!state.dirty) {
          this.setAllTouched(true, { errors: errors });
        }
        return this.props.onValidationFail(state.values, state, this.props, this);
      }
      var preSubmitValues = this.props.preSubmit(state.values, state, this.props, this);
      this.props.onSubmit(preSubmitValues, state, this.props, this);
      this.props.postSubmit(preSubmitValues, state, this.props, this);
    }

    // Utils

  }, {
    key: 'getAPI',
    value: function getAPI() {
      return {
        setAllValues: this.setAllValues,
        setValue: this.setValue,
        getValue: this.getValue,
        setNestedError: this.setNestedError,
        getError: this.getError,
        getTouchedError: this.getTouchedError,
        setTouched: this.setTouched,
        getTouched: this.getTouched,
        addValue: this.addValue,
        removeValue: this.removeValue,
        swapValues: this.swapValues,
        setAllTouched: this.setAllTouched,
        resetForm: this.resetForm,
        submitForm: this.submitForm
      };
    }
  }, {
    key: 'setFormState',
    value: function setFormState(newState, silent) {
      var _this2 = this;

      if (newState && newState.values && !newState.errors) {
        newState.values = this.props.preValidate(newState.values, newState, this.props, this);
        newState.errors = this.validate(newState.values, newState, this.props);
      }
      this.setState(newState, function () {
        _this2.props.saveState(_this2.state, _this2.props, _this2);
        if (!silent) {
          _this2.emitChange(_this2.state, _this2.props);
        }
      });
    }
  }, {
    key: 'emitChange',
    value: function emitChange(state, initial) {
      this.props.onChange(state, this.props, initial, this);
    }
  }, {
    key: 'validate',
    value: function validate(values, state, props) {
      var errors = this.props.validate(removeNestedErrorValues(values, this.state ? this.state.nestedErrors : {}), state, props, this);
      return cleanErrors(errors);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props, this.state, this.getAPI());

      var children = props.children,
          rest = _objectWithoutProperties(props, ['children']);

      var resolvedChild = typeof children === 'function' ? children(rest) : children;
      return resolvedChild;
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.defaultProps = FormDefaultProps;
Form.childContextTypes = { formAPI: _propTypes2.default.object };
exports.default = Form;

// Utils

function cleanErrors(err) {
  if (_utils2.default.isObject(err)) {
    var resolved = _utils2.default.mapValues(err, cleanErrors);
    var found = _utils2.default.pickBy(resolved, function (d) {
      return d;
    });
    return Object.keys(found).length ? resolved : undefined;
  }
  if (_utils2.default.isArray(err)) {
    var _resolved = err.map(cleanErrors);
    var _found = _resolved.find(function (d) {
      return d;
    });
    return _found ? _resolved : undefined;
  }
  return err;
}

// removeNestedErrorValues recurses the values object and turns any
// field that has a truthy corresponding nested form error field into undefined.
// This allows properly validating a nested form by detecting that undefined value
// in the validation function
function removeNestedErrorValues(values, nestedErrors) {
  var recurse = function recurse(current) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (_utils2.default.isObject(current)) {
      return _utils2.default.mapValues(current, function (d, i) {
        return recurse(d, [].concat(_toConsumableArray(path), [i]));
      });
    }
    if (_utils2.default.isArray(current)) {
      return current.map(function (d, key) {
        return recurse(d, [].concat(_toConsumableArray(path), [key]));
      });
    }
    if (!_utils2.default.isObject(current) && !_utils2.default.isArray(current) && current) {
      return _utils2.default.set(values, path, undefined);
    }
    return current;
  };
  recurse(nestedErrors);
  return values;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJyZW9wIiwiZCIsIkZvcm1EZWZhdWx0UHJvcHMiLCJsb2FkU3RhdGUiLCJkZWZhdWx0VmFsdWVzIiwicHJlVmFsaWRhdGUiLCJ2YWxpZGF0ZSIsIm9uVmFsaWRhdGlvbkZhaWwiLCJvbkNoYW5nZSIsInNhdmVTdGF0ZSIsIndpbGxVbm1vdW50IiwicHJlU3VibWl0Iiwib25TdWJtaXQiLCJwb3N0U3VibWl0IiwiRm9ybSIsInByb3BzIiwic2V0QWxsVmFsdWVzIiwiYmluZCIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJzZXROZXN0ZWRFcnJvciIsImdldEVycm9yIiwiZ2V0VG91Y2hlZEVycm9yIiwic2V0VG91Y2hlZCIsImdldFRvdWNoZWQiLCJhZGRWYWx1ZSIsInJlbW92ZVZhbHVlIiwic3dhcFZhbHVlcyIsInNldEFsbFRvdWNoZWQiLCJyZXNldEZvcm0iLCJzdWJtaXRGb3JtIiwiZ2V0RGVmYXVsdFN0YXRlIiwic3RhdGUiLCJ2YWx1ZXMiLCJtZXJnZWRWYWx1ZXMiLCJjbG9uZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJuZXN0ZWRFcnJvcnMiLCJmb3JtQVBJIiwiZ2V0QVBJIiwiZW1pdENoYW5nZSIsInNldEZvcm1TdGF0ZSIsIm5vVG91Y2giLCJmaWVsZCIsInZhbHVlIiwic2V0IiwiZmFsbGJhY2siLCJ2YWwiLCJnZXQiLCJkaXJ0eSIsImluZGV4IiwiZmllbGRWYWx1ZSIsInNsaWNlIiwiZGVzdEluZGV4IiwibWluIiwiTWF0aCIsIm1heCIsImZpZWxkVmFsdWVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJlU3VibWl0VmFsdWVzIiwibmV3U3RhdGUiLCJzaWxlbnQiLCJzZXRTdGF0ZSIsImluaXRpYWwiLCJyZW1vdmVOZXN0ZWRFcnJvclZhbHVlcyIsImNsZWFuRXJyb3JzIiwiY2hpbGRyZW4iLCJyZXN0IiwicmVzb2x2ZWRDaGlsZCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0IiwiZXJyIiwiaXNPYmplY3QiLCJyZXNvbHZlZCIsIm1hcFZhbHVlcyIsImZvdW5kIiwicGlja0J5IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQXJyYXkiLCJtYXAiLCJmaW5kIiwicmVjdXJzZSIsImN1cnJlbnQiLCJwYXRoIiwiaSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCO0FBQ0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPO0FBQUEsU0FBS0MsQ0FBTDtBQUFBLENBQWI7O0FBRU8sSUFBTUMsOENBQW1CO0FBQzlCQyxhQUFXSixJQURtQjtBQUU5QkssaUJBQWUsRUFGZTtBQUc5QkMsZUFBYUwsSUFIaUI7QUFJOUJNLFlBQVU7QUFBQSxXQUFNLElBQU47QUFBQSxHQUpvQjtBQUs5QkMsb0JBQWtCUixJQUxZO0FBTTlCUyxZQUFVVCxJQU5vQjtBQU85QlUsYUFBV1YsSUFQbUI7QUFROUJXLGVBQWFYLElBUmlCO0FBUzlCWSxhQUFXWCxJQVRtQjtBQVU5QlksWUFBVWIsSUFWb0I7QUFXOUJjLGNBQVlkO0FBWGtCLENBQXpCOztJQWNEZSxJOzs7QUFHSixnQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDRHQUNaQSxLQURZOztBQUdsQixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsT0FBaEI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0YsSUFBZCxPQUFoQjtBQUNBLFVBQUtHLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkgsSUFBcEIsT0FBdEI7QUFDQSxVQUFLSSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0osSUFBZCxP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TUFBTWtELFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxPQUFELEVBQXdCO0FBQUEsUUFBZEMsSUFBYyx1RUFBUCxFQUFPOztBQUN0QyxRQUFJLGdCQUFFZCxRQUFGLENBQVdhLE9BQVgsQ0FBSixFQUF5QjtBQUN2QixhQUFPLGdCQUFFWCxTQUFGLENBQVlXLE9BQVosRUFBcUIsVUFBQ3hGLENBQUQsRUFBSTBGLENBQUosRUFBVTtBQUNwQyxlQUFPSCxRQUFRdkYsQ0FBUiwrQkFBZXlGLElBQWYsSUFBcUJDLENBQXJCLEdBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDtBQUNELFFBQUksZ0JBQUVOLE9BQUYsQ0FBVUksT0FBVixDQUFKLEVBQXdCO0FBQ3RCLGFBQU9BLFFBQVFILEdBQVIsQ0FBWSxVQUFDckYsQ0FBRCxFQUFJMkYsR0FBSixFQUFZO0FBQzdCLGVBQU9KLFFBQVF2RixDQUFSLCtCQUFleUYsSUFBZixJQUFxQkUsR0FBckIsR0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdEO0FBQ0QsUUFBSSxDQUFDLGdCQUFFaEIsUUFBRixDQUFXYSxPQUFYLENBQUQsSUFBd0IsQ0FBQyxnQkFBRUosT0FBRixDQUFVSSxPQUFWLENBQXpCLElBQStDQSxPQUFuRCxFQUE0RDtBQUMxRCxhQUFPLGdCQUFFM0MsR0FBRixDQUFNYixNQUFOLEVBQWN5RCxJQUFkLEVBQW9CTixTQUFwQixDQUFQO0FBQ0Q7QUFDRCxXQUFPSyxPQUFQO0FBQ0QsR0FmRDtBQWdCQUQsVUFBUWxELFlBQVI7QUFDQSxTQUFPTCxNQUFQO0FBQ0QiLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBfIGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcmVvcCA9IGQgPT4gZFxuXG5leHBvcnQgY29uc3QgRm9ybURlZmF1bHRQcm9wcyA9IHtcbiAgbG9hZFN0YXRlOiBub29wLFxuICBkZWZhdWx0VmFsdWVzOiB7fSxcbiAgcHJlVmFsaWRhdGU6IHJlb3AsXG4gIHZhbGlkYXRlOiAoKSA9PiBudWxsLFxuICBvblZhbGlkYXRpb25GYWlsOiBub29wLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgc2F2ZVN0YXRlOiBub29wLFxuICB3aWxsVW5tb3VudDogbm9vcCxcbiAgcHJlU3VibWl0OiByZW9wLFxuICBvblN1Ym1pdDogbm9vcCxcbiAgcG9zdFN1Ym1pdDogbm9vcCxcbn1cblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBGb3JtRGVmYXVsdFByb3BzXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHsgZm9ybUFQSTogUHJvcFR5cGVzLm9iamVjdCB9XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zZXRBbGxWYWx1ZXMgPSB0aGlzLnNldEFsbFZhbHVlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRWYWx1ZSA9IHRoaXMuc2V0VmFsdWUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0VmFsdWUgPSB0aGlzLmdldFZhbHVlLmJpbmQodGhpcylcbiAgICB0aGlzLnNldE5lc3RlZEVycm9yID0gdGhpcy5zZXROZXN0ZWRFcnJvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRFcnJvciA9IHRoaXMuZ2V0RXJyb3IuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0VG91Y2hlZEVycm9yID0gdGhpcy5nZXRUb3VjaGVkRXJyb3IuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0VG91Y2hlZCA9IHRoaXMuc2V0VG91Y2hlZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRUb3VjaGVkID0gdGhpcy5nZXRUb3VjaGVkLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZFZhbHVlID0gdGhpcy5hZGRWYWx1ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW1vdmVWYWx1ZSA9IHRoaXMucmVtb3ZlVmFsdWUuYmluZCh0aGlzKVxuICAgIHRoaXMuc3dhcFZhbHVlcyA9IHRoaXMuc3dhcFZhbHVlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRBbGxUb3VjaGVkID0gdGhpcy5zZXRBbGxUb3VjaGVkLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2V0Rm9ybSA9IHRoaXMucmVzZXRGb3JtLmJpbmQodGhpcylcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGVmYXVsdFN0YXRlID0gdGhpcy5nZXREZWZhdWx0U3RhdGUuYmluZCh0aGlzKSAvLyB1c2luZyAnRGVmYXVsdCcgc2luY2UgYEluaXRpYWxgIHdpbGwgbm93IHRocm93IGRlcHJlY2F0aW9uIHdhcm5pbmdzXG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXREZWZhdWx0U3RhdGUoKVxuICB9XG5cbiAgZ2V0RGVmYXVsdFN0YXRlICgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXMsIHZhbHVlcywgbG9hZFN0YXRlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBtZXJnZWRWYWx1ZXMgPSB7XG4gICAgICAuLi5kZWZhdWx0VmFsdWVzLFxuICAgICAgLi4udmFsdWVzLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBsb2FkU3RhdGUodGhpcy5wcm9wcywgdGhpcykgfHwge1xuICAgICAgICB2YWx1ZXM6IF8uY2xvbmUobWVyZ2VkVmFsdWVzKSxcbiAgICAgICAgdG91Y2hlZDoge30sXG4gICAgICAgIGVycm9yczoge30sXG4gICAgICAgIG5lc3RlZEVycm9yczoge30sXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybUFQSTogdGhpcy5nZXRBUEkoKSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSh0aGlzLnN0YXRlLCB0cnVlKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAocHJvcHMpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXMsIHZhbHVlcyB9ID0gcHJvcHNcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXMgPT09IGRlZmF1bHRWYWx1ZXMgJiZcbiAgICAgIHRoaXMucHJvcHMudmFsdWVzID09PSB2YWx1ZXNcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZFZhbHVlcyA9XG4gICAgICB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZXMgPT09IGRlZmF1bHRWYWx1ZXNcbiAgICAgICAgPyB2YWx1ZXNcbiAgICAgICAgOiB7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLnZhbHVlcyB9XG5cbiAgICB0aGlzLnNldEZvcm1TdGF0ZShcbiAgICAgIHtcbiAgICAgICAgdmFsdWVzOiBtZXJnZWRWYWx1ZXMgPyBfLmNsb25lKG1lcmdlZFZhbHVlcykgOiB7fSxcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMud2lsbFVubW91bnQodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcywgdGhpcylcbiAgfVxuXG4gIC8vIEFQSVxuICBzZXRBbGxWYWx1ZXMgKHZhbHVlcywgbm9Ub3VjaCkge1xuICAgIGlmIChub1RvdWNoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRGb3JtU3RhdGUoeyB2YWx1ZXMgfSlcbiAgICB9XG4gICAgdGhpcy5zZXRGb3JtU3RhdGUoeyB2YWx1ZXMsIHRvdWNoZWQ6IHt9IH0pXG4gIH1cblxuICBzZXRWYWx1ZSAoZmllbGQsIHZhbHVlLCBub1RvdWNoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgdmFsdWVzID0gXy5zZXQoc3RhdGUudmFsdWVzLCBmaWVsZCwgdmFsdWUpXG4gICAgLy8gQWxzbyBzZXQgdG91Y2hlZCBzaW5jZSB0aGUgdmFsdWUgaXMgY2hhbmdpbmdcbiAgICBpZiAobm9Ub3VjaCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0Rm9ybVN0YXRlKHsgdmFsdWVzIH0pXG4gICAgfVxuICAgIGNvbnN0IHRvdWNoZWQgPSBfLnNldChzdGF0ZS50b3VjaGVkLCBmaWVsZClcbiAgICB0aGlzLnNldEZvcm1TdGF0ZSh7IHZhbHVlcywgdG91Y2hlZCB9KVxuICB9XG5cbiAgZ2V0VmFsdWUgKGZpZWxkLCBmYWxsYmFjaykge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHZhbCA9IF8uZ2V0KHN0YXRlLnZhbHVlcywgZmllbGQpXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnID8gdmFsIDogZmFsbGJhY2tcbiAgfVxuXG4gIHNldE5lc3RlZEVycm9yIChmaWVsZCwgdmFsdWUgPSB0cnVlKSB7XG4gICAgY29uc3QgbmVzdGVkRXJyb3JzID0gXy5zZXQodGhpcy5zdGF0ZS5uZXN0ZWRFcnJvcnMsIGZpZWxkLCB2YWx1ZSlcbiAgICB0aGlzLnNldEZvcm1TdGF0ZSh7IG5lc3RlZEVycm9ycyB9KVxuICB9XG5cbiAgZ2V0RXJyb3IgKGZpZWxkKSB7XG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuc3RhdGUuZXJyb3JzLCBmaWVsZClcbiAgfVxuXG4gIGdldFRvdWNoZWRFcnJvciAoZmllbGQpIHtcbiAgICAgIGlmICh0aGlzLmdldFRvdWNoZWQoZmllbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXJyb3IoZmllbGQpO1xuICAgICAgfVxuICB9XG5cbiAgc2V0VG91Y2hlZCAoZmllbGQsIHZhbHVlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRvdWNoZWQgPSBfLnNldCh0aGlzLnN0YXRlLnRvdWNoZWQsIGZpZWxkLCB2YWx1ZSlcbiAgICB0aGlzLnNldEZvcm1TdGF0ZSh7IHRvdWNoZWQgfSlcbiAgfVxuXG4gIGdldFRvdWNoZWQgKGZpZWxkKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgaWYgKHRoaXMuc3RhdGUuZGlydHkgPT09IHRydWUgfHwgdGhpcy5wcm9wcy50b3VjaGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gXy5nZXQoc3RhdGUudG91Y2hlZCwgZmllbGQpXG4gIH1cblxuICBhZGRWYWx1ZSAoZmllbGQsIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgdmFsdWVzID0gXy5zZXQoc3RhdGUudmFsdWVzLCBmaWVsZCwgW1xuICAgICAgLi4uXy5nZXQoc3RhdGUudmFsdWVzLCBmaWVsZCwgW10pLFxuICAgICAgdmFsdWUsXG4gICAgXSlcbiAgICB0aGlzLnNldEZvcm1TdGF0ZSh7IHZhbHVlcyB9KVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUgKGZpZWxkLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBfLmdldChzdGF0ZS52YWx1ZXMsIGZpZWxkLCBbXSlcbiAgICBjb25zdCB2YWx1ZXMgPSBfLnNldChzdGF0ZS52YWx1ZXMsIGZpZWxkLCBbXG4gICAgICAuLi5maWVsZFZhbHVlLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgIC4uLmZpZWxkVmFsdWUuc2xpY2UoaW5kZXggKyAxKSxcbiAgICBdKVxuICAgIHRoaXMuc2V0Rm9ybVN0YXRlKHsgdmFsdWVzIH0pXG4gIH1cblxuICBzd2FwVmFsdWVzIChmaWVsZCwgaW5kZXgsIGRlc3RJbmRleCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgbWluID0gTWF0aC5taW4oaW5kZXgsIGRlc3RJbmRleClcbiAgICBjb25zdCBtYXggPSBNYXRoLm1heChpbmRleCwgZGVzdEluZGV4KVxuXG4gICAgY29uc3QgZmllbGRWYWx1ZXMgPSBfLmdldChzdGF0ZS52YWx1ZXMsIGZpZWxkLCBbXSlcbiAgICBjb25zdCB2YWx1ZXMgPSBfLnNldChzdGF0ZS52YWx1ZXMsIGZpZWxkLCBbXG4gICAgICAuLi5maWVsZFZhbHVlcy5zbGljZSgwLCBtaW4pLFxuICAgICAgZmllbGRWYWx1ZXNbbWF4XSxcbiAgICAgIC4uLmZpZWxkVmFsdWVzLnNsaWNlKG1pbiArIDEsIG1heCksXG4gICAgICBmaWVsZFZhbHVlc1ttaW5dLFxuICAgICAgLi4uZmllbGRWYWx1ZXMuc2xpY2UobWF4ICsgMSksXG4gICAgXSlcbiAgICB0aGlzLnNldEZvcm1TdGF0ZSh7IHZhbHVlcyB9KVxuICB9XG5cbiAgc2V0QWxsVG91Y2hlZCAoZGlydHkgPSB0cnVlLCBzdGF0ZSkge1xuICAgIHRoaXMuc2V0Rm9ybVN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZGlydHk6ICEhZGlydHksXG4gICAgfSlcbiAgfVxuXG4gIHJlc2V0Rm9ybSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Rm9ybVN0YXRlKHRoaXMuZ2V0RGVmYXVsdFN0YXRlKCksIHRydWUpXG4gIH1cblxuICBzdWJtaXRGb3JtIChlKSB7XG4gICAgZSAmJiBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoZSlcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlKHN0YXRlLnZhbHVlcywgc3RhdGUsIHRoaXMucHJvcHMpXG4gICAgaWYgKGVycm9ycykge1xuICAgICAgaWYgKCFzdGF0ZS5kaXJ0eSkge1xuICAgICAgICB0aGlzLnNldEFsbFRvdWNoZWQodHJ1ZSwgeyBlcnJvcnMgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uVmFsaWRhdGlvbkZhaWwoc3RhdGUudmFsdWVzLCBzdGF0ZSwgdGhpcy5wcm9wcywgdGhpcylcbiAgICB9XG4gICAgY29uc3QgcHJlU3VibWl0VmFsdWVzID0gdGhpcy5wcm9wcy5wcmVTdWJtaXQoXG4gICAgICBzdGF0ZS52YWx1ZXMsXG4gICAgICBzdGF0ZSxcbiAgICAgIHRoaXMucHJvcHMsXG4gICAgICB0aGlzXG4gICAgKVxuICAgIHRoaXMucHJvcHMub25TdWJtaXQocHJlU3VibWl0VmFsdWVzLCBzdGF0ZSwgdGhpcy5wcm9wcywgdGhpcylcbiAgICB0aGlzLnByb3BzLnBvc3RTdWJtaXQocHJlU3VibWl0VmFsdWVzLCBzdGF0ZSwgdGhpcy5wcm9wcywgdGhpcylcbiAgfVxuXG4gIC8vIFV0aWxzXG4gIGdldEFQSSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldEFsbFZhbHVlczogdGhpcy5zZXRBbGxWYWx1ZXMsXG4gICAgICBzZXRWYWx1ZTogdGhpcy5zZXRWYWx1ZSxcbiAgICAgIGdldFZhbHVlOiB0aGlzLmdldFZhbHVlLFxuICAgICAgc2V0TmVzdGVkRXJyb3I6IHRoaXMuc2V0TmVzdGVkRXJyb3IsXG4gICAgICBnZXRFcnJvcjogdGhpcy5nZXRFcnJvcixcbiAgICAgIGdldFRvdWNoZWRFcnJvcjogdGhpcy5nZXRUb3VjaGVkRXJyb3IsXG4gICAgICBzZXRUb3VjaGVkOiB0aGlzLnNldFRvdWNoZWQsXG4gICAgICBnZXRUb3VjaGVkOiB0aGlzLmdldFRvdWNoZWQsXG4gICAgICBhZGRWYWx1ZTogdGhpcy5hZGRWYWx1ZSxcbiAgICAgIHJlbW92ZVZhbHVlOiB0aGlzLnJlbW92ZVZhbHVlLFxuICAgICAgc3dhcFZhbHVlczogdGhpcy5zd2FwVmFsdWVzLFxuICAgICAgc2V0QWxsVG91Y2hlZDogdGhpcy5zZXRBbGxUb3VjaGVkLFxuICAgICAgcmVzZXRGb3JtOiB0aGlzLnJlc2V0Rm9ybSxcbiAgICAgIHN1Ym1pdEZvcm06IHRoaXMuc3VibWl0Rm9ybSxcbiAgICB9XG4gIH1cblxuICBzZXRGb3JtU3RhdGUgKG5ld1N0YXRlLCBzaWxlbnQpIHtcbiAgICBpZiAobmV3U3RhdGUgJiYgbmV3U3RhdGUudmFsdWVzICYmICFuZXdTdGF0ZS5lcnJvcnMpIHtcbiAgICAgIG5ld1N0YXRlLnZhbHVlcyA9IHRoaXMucHJvcHMucHJlVmFsaWRhdGUoXG4gICAgICAgIG5ld1N0YXRlLnZhbHVlcyxcbiAgICAgICAgbmV3U3RhdGUsXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHRoaXNcbiAgICAgIClcbiAgICAgIG5ld1N0YXRlLmVycm9ycyA9IHRoaXMudmFsaWRhdGUobmV3U3RhdGUudmFsdWVzLCBuZXdTdGF0ZSwgdGhpcy5wcm9wcylcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zYXZlU3RhdGUodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcywgdGhpcylcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSh0aGlzLnN0YXRlLCB0aGlzLnByb3BzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBlbWl0Q2hhbmdlIChzdGF0ZSwgaW5pdGlhbCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUsIHRoaXMucHJvcHMsIGluaXRpYWwsIHRoaXMpXG4gIH1cblxuICB2YWxpZGF0ZSAodmFsdWVzLCBzdGF0ZSwgcHJvcHMpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnByb3BzLnZhbGlkYXRlKFxuICAgICAgcmVtb3ZlTmVzdGVkRXJyb3JWYWx1ZXMoXG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdGhpcy5zdGF0ZSA/IHRoaXMuc3RhdGUubmVzdGVkRXJyb3JzIDoge31cbiAgICAgICksXG4gICAgICBzdGF0ZSxcbiAgICAgIHByb3BzLFxuICAgICAgdGhpc1xuICAgIClcbiAgICByZXR1cm4gY2xlYW5FcnJvcnMoZXJyb3JzKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4udGhpcy5nZXRBUEkoKSxcbiAgICB9XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgICBjb25zdCByZXNvbHZlZENoaWxkID1cbiAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHJlc3QpIDogY2hpbGRyZW5cbiAgICByZXR1cm4gcmVzb2x2ZWRDaGlsZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gY2xlYW5FcnJvcnMgKGVycikge1xuICBpZiAoXy5pc09iamVjdChlcnIpKSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBfLm1hcFZhbHVlcyhlcnIsIGNsZWFuRXJyb3JzKVxuICAgIGNvbnN0IGZvdW5kID0gXy5waWNrQnkocmVzb2x2ZWQsIGQgPT4gZClcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZm91bmQpLmxlbmd0aCA/IHJlc29sdmVkIDogdW5kZWZpbmVkXG4gIH1cbiAgaWYgKF8uaXNBcnJheShlcnIpKSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSBlcnIubWFwKGNsZWFuRXJyb3JzKVxuICAgIGNvbnN0IGZvdW5kID0gcmVzb2x2ZWQuZmluZChkID0+IGQpXG4gICAgcmV0dXJuIGZvdW5kID8gcmVzb2x2ZWQgOiB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gZXJyXG59XG5cbi8vIHJlbW92ZU5lc3RlZEVycm9yVmFsdWVzIHJlY3Vyc2VzIHRoZSB2YWx1ZXMgb2JqZWN0IGFuZCB0dXJucyBhbnlcbi8vIGZpZWxkIHRoYXQgaGFzIGEgdHJ1dGh5IGNvcnJlc3BvbmRpbmcgbmVzdGVkIGZvcm0gZXJyb3IgZmllbGQgaW50byB1bmRlZmluZWQuXG4vLyBUaGlzIGFsbG93cyBwcm9wZXJseSB2YWxpZGF0aW5nIGEgbmVzdGVkIGZvcm0gYnkgZGV0ZWN0aW5nIHRoYXQgdW5kZWZpbmVkIHZhbHVlXG4vLyBpbiB0aGUgdmFsaWRhdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gcmVtb3ZlTmVzdGVkRXJyb3JWYWx1ZXMgKHZhbHVlcywgbmVzdGVkRXJyb3JzKSB7XG4gIGNvbnN0IHJlY3Vyc2UgPSAoY3VycmVudCwgcGF0aCA9IFtdKSA9PiB7XG4gICAgaWYgKF8uaXNPYmplY3QoY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBfLm1hcFZhbHVlcyhjdXJyZW50LCAoZCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjdXJzZShkLCBbLi4ucGF0aCwgaV0pXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoXy5pc0FycmF5KGN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gY3VycmVudC5tYXAoKGQsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVjdXJzZShkLCBbLi4ucGF0aCwga2V5XSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICghXy5pc09iamVjdChjdXJyZW50KSAmJiAhXy5pc0FycmF5KGN1cnJlbnQpICYmIGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBfLnNldCh2YWx1ZXMsIHBhdGgsIHVuZGVmaW5lZClcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuICByZWN1cnNlKG5lc3RlZEVycm9ycylcbiAgcmV0dXJuIHZhbHVlc1xufVxuIl19