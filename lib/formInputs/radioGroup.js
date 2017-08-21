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

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
  }

  _createClass(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        formRadioGroup: this
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          field = _props.field,
          showErrors = _props.showErrors,
          _props$errorBefore = _props.errorBefore,
          errorBefore = _props$errorBefore === undefined ? true : _props$errorBefore,
          isForm = _props.isForm,
          errorProps = _props.errorProps,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['field', 'showErrors', 'errorBefore', 'isForm', 'errorProps', 'children']);

      return _react2.default.createElement(
        _formInput2.default,
        {
          field: field,
          showErrors: showErrors,
          errorBefore: errorBefore,
          isForm: isForm,
          errorProps: errorProps
        },
        function (api) {
          _extends(_this2, api);
          return _react2.default.createElement(
            'radiogroup',
            rest,
            children
          );
        }
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.Component);

RadioGroup.childContextTypes = {
  formRadioGroup: _propTypes2.default.object
};
exports.default = RadioGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3JhZGlvR3JvdXAuanMiXSwibmFtZXMiOlsiUmFkaW9Hcm91cCIsImZvcm1SYWRpb0dyb3VwIiwicHJvcHMiLCJmaWVsZCIsInNob3dFcnJvcnMiLCJlcnJvckJlZm9yZSIsImlzRm9ybSIsImVycm9yUHJvcHMiLCJjaGlsZHJlbiIsInJlc3QiLCJhcGkiLCJDb21wb25lbnQiLCJjaGlsZENvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7OztBQURBOzs7SUFHcUJBLFU7Ozs7Ozs7Ozs7O3NDQUlBO0FBQ2pCLGFBQU87QUFDTEMsd0JBQWdCO0FBRFgsT0FBUDtBQUdEOzs7NkJBQ1M7QUFBQTs7QUFBQSxtQkFTSixLQUFLQyxLQVREO0FBQUEsVUFFTkMsS0FGTSxVQUVOQSxLQUZNO0FBQUEsVUFHTkMsVUFITSxVQUdOQSxVQUhNO0FBQUEsc0NBSU5DLFdBSk07QUFBQSxVQUlOQSxXQUpNLHNDQUlRLElBSlI7QUFBQSxVQUtOQyxNQUxNLFVBS05BLE1BTE07QUFBQSxVQU1OQyxVQU5NLFVBTU5BLFVBTk07QUFBQSxVQU9OQyxRQVBNLFVBT05BLFFBUE07QUFBQSxVQVFIQyxJQVJHOztBQVVSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU9OLEtBRFQ7QUFFRSxzQkFBWUMsVUFGZDtBQUdFLHVCQUFhQyxXQUhmO0FBSUUsa0JBQVFDLE1BSlY7QUFLRSxzQkFBWUM7QUFMZDtBQU9HLHVCQUFPO0FBQ04sMkJBQW9CRyxHQUFwQjtBQUNBLGlCQUNFO0FBQUE7QUFBZ0JELGdCQUFoQjtBQUNHRDtBQURILFdBREY7QUFLRDtBQWRILE9BREY7QUFrQkQ7Ozs7RUFyQ3FDLGdCQUFNRyxTOztBQUF6QlgsVSxDQUNaWSxpQixHQUFvQjtBQUN6Qlgsa0JBQWdCLG9CQUFVWTtBQURELEM7a0JBRFJiLFUiLCJmaWxlIjoicmFkaW9Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbi8vXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uL2Zvcm1JbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBmb3JtUmFkaW9Hcm91cDogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuICBnZXRDaGlsZENvbnRleHQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtUmFkaW9Hcm91cDogdGhpcyxcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZCxcbiAgICAgIHNob3dFcnJvcnMsXG4gICAgICBlcnJvckJlZm9yZSA9IHRydWUsXG4gICAgICBpc0Zvcm0sXG4gICAgICBlcnJvclByb3BzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1JbnB1dFxuICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgIHNob3dFcnJvcnM9e3Nob3dFcnJvcnN9XG4gICAgICAgIGVycm9yQmVmb3JlPXtlcnJvckJlZm9yZX1cbiAgICAgICAgaXNGb3JtPXtpc0Zvcm19XG4gICAgICAgIGVycm9yUHJvcHM9e2Vycm9yUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHthcGkgPT4ge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgYXBpKVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cmFkaW9ncm91cCB7Li4ucmVzdH0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvcmFkaW9ncm91cD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L0Zvcm1JbnB1dD5cbiAgICApXG4gIH1cbn1cbiJdfQ==