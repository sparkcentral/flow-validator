"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationError = undefined;

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _construct = require("babel-runtime/core-js/reflect/construct");

var _construct2 = _interopRequireDefault(_construct);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Type = require("./Type");

var _AsyncType = require("../async/AsyncType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = (0, _construct2.default)(cls, (0, _from2.default)(arguments));
    (0, _setPrototypeOf2.default)(instance, (0, _getPrototypeOf2.default)(this));
    return instance;
  }

  ExtendableBuiltin.prototype = (0, _create2.default)(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (_setPrototypeOf2.default) {
    (0, _setPrototypeOf2.default)(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ValidationError = exports.ValidationError = function (_extendableBuiltin2) {
  (0, _inherits3.default)(ValidationError, _extendableBuiltin2);

  function ValidationError(payload) {
    (0, _classCallCheck3.default)(this, ValidationError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ValidationError.__proto__ || (0, _getPrototypeOf2.default)(ValidationError)).call(this, "ValidationError"));

    _this.payload = payload;
    return _this;
  }

  (0, _createClass3.default)(ValidationError, [{
    key: "toJSON",
    value: function toJSON() {
      var payload = {
        expected: this.payload.expected.toJSON(),
        got: this.payload.got
      };
      if (this.payload.description) payload.description = this.payload.description;
      if (this.payload.errors) {
        var _errors = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this.payload.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _key = _step.value;

            _errors[_key] = this.payload.errors[_key].toJSON();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        payload.errors = _errors;
      }
      return payload;
    }
  }]);
  return ValidationError;
}(_extendableBuiltin(Error));
//# sourceMappingURL=ValidationError.js.map