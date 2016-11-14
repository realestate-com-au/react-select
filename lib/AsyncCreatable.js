'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var AsyncCreatable = _react2['default'].createClass({
	displayName: 'AsyncCreatableSelect',

	render: function render() {
		var _this = this;

		return _react2['default'].createElement(
			_Select2['default'].Async,
			this.props,
			function (_ref) {
				var ref = _ref.ref;

				var asyncProps = _objectWithoutProperties(_ref, ['ref']);

				var asyncRef = ref;
				return _react2['default'].createElement(
					_Select2['default'].Creatable,
					asyncProps,
					function (_ref2) {
						var ref = _ref2.ref;

						var creatableProps = _objectWithoutProperties(_ref2, ['ref']);

						var creatableRef = ref;
						return _this.props.children(_extends({}, creatableProps, {
							ref: function ref(select) {
								creatableRef(select);
								asyncRef(select);
								_this.select = select;
							}
						}));
					}
				);
			}
		);
	}
});

function defaultChildren(props) {
	return _react2['default'].createElement(_Select2['default'], props);
};

var propTypes = {
	children: _react2['default'].PropTypes.func.isRequired };

// Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
var defaultProps = {
	children: defaultChildren
};

AsyncCreatable.propTypes = propTypes;
AsyncCreatable.defaultProps = defaultProps;

module.exports = AsyncCreatable;