'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormField;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormField(_ref, context) {
  var field = _ref.field,
      children = _ref.children;

  var bind = function bind(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args2[_key2] = arguments[_key2];
      }

      return fn.apply(undefined, args.concat(args2));
    };
  };
  return children(field ? _utils2.default.mapValues(context.formAPI, function (d) {
    return bind(d, field);
  }) : context.formAPI);
}
//

FormField.contextTypes = {
  formAPI: _propTypes2.default.object
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb3JtRmllbGQuanMiXSwibmFtZXMiOlsiRm9ybUZpZWxkIiwiY29udGV4dCIsImZpZWxkIiwiY2hpbGRyZW4iLCJiaW5kIiwiZm4iLCJhcmdzIiwiYXJnczIiLCJtYXBWYWx1ZXMiLCJmb3JtQVBJIiwiZCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBSXdCQSxTOztBQUp4Qjs7OztBQUVBOzs7Ozs7QUFFZSxTQUFTQSxTQUFULE9BQXlDQyxPQUF6QyxFQUFrRDtBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCOztBQUMvRCxNQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsRUFBRDtBQUFBLHNDQUFRQyxJQUFSO0FBQVFBLFVBQVI7QUFBQTs7QUFBQSxXQUFpQjtBQUFBLHlDQUFJQyxLQUFKO0FBQUlBLGFBQUo7QUFBQTs7QUFBQSxhQUFjRixvQkFBTUMsSUFBTixRQUFlQyxLQUFmLEVBQWQ7QUFBQSxLQUFqQjtBQUFBLEdBQWI7QUFDQSxTQUFPSixTQUNMRCxRQUFRLGdCQUFFTSxTQUFGLENBQVlQLFFBQVFRLE9BQXBCLEVBQTZCO0FBQUEsV0FBS0wsS0FBS00sQ0FBTCxFQUFRUixLQUFSLENBQUw7QUFBQSxHQUE3QixDQUFSLEdBQTRERCxRQUFRUSxPQUQvRCxDQUFQO0FBR0Q7QUFSRDs7QUFTQVQsVUFBVVcsWUFBVixHQUF5QjtBQUN2QkYsV0FBUyxvQkFBVUc7QUFESSxDQUF6QiIsImZpbGUiOiJmb3JtRmllbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUZpZWxkICh7IGZpZWxkLCBjaGlsZHJlbiB9LCBjb250ZXh0KSB7XG4gIGNvbnN0IGJpbmQgPSAoZm4sIC4uLmFyZ3MpID0+ICguLi5hcmdzMikgPT4gZm4oLi4uYXJncywgLi4uYXJnczIpXG4gIHJldHVybiBjaGlsZHJlbihcbiAgICBmaWVsZCA/IF8ubWFwVmFsdWVzKGNvbnRleHQuZm9ybUFQSSwgZCA9PiBiaW5kKGQsIGZpZWxkKSkgOiBjb250ZXh0LmZvcm1BUElcbiAgKVxufVxuRm9ybUZpZWxkLmNvbnRleHRUeXBlcyA9IHtcbiAgZm9ybUFQSTogUHJvcFR5cGVzLm9iamVjdCxcbn1cbiJdfQ==