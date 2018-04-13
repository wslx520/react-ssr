/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _App = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = 3001;\n\napp.use((0, _cors2.default)());\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res, next) {\n\n    var activeRoute = _routes2.default.find(function (route) {\n        return (0, _reactRouterDom.matchPath)(req.url, route);\n    }) || {};\n    console.log('activeRoute', activeRoute);\n    var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();\n\n    promise.then(function (data) {\n        var context = { data: data };\n        var name = 'server';\n        var markup = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.url, context: context },\n            _react2.default.createElement(_App2.default, null)\n        ));\n\n        res.send('\\n<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n    <title>React SSR with react-router</title>\\n    <link href=\"/public/main.css\" rel=\"stylesheet\" />\\n    <script src=\"/bundle.js\" defer></script>\\n    <script>window.__INITIAL_DATA__ = ' + (0, _serializeJavascript2.default)(data) + ';</script>\\n</head>\\n<body>\\n    <div id=\"app\">' + markup + '</div>\\n</body>\\n</html>    \\n    ');\n    }).catch(next);\n});\n\napp.listen(port, function () {\n    console.log('Server is started on port: ' + port);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Navbar = __webpack_require__(/*! ./Navbar */ \"./src/shared/Navbar.jsx\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _NoMatch = __webpack_require__(/*! ./NoMatch */ \"./src/shared/NoMatch.jsx\");\n\nvar _NoMatch2 = _interopRequireDefault(_NoMatch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Navbar2.default, null),\n                _react2.default.createElement(\n                    _reactRouterDom.Switch,\n                    null,\n                    _routes2.default.map(function (_ref) {\n                        var path = _ref.path,\n                            exact = _ref.exact,\n                            C = _ref.component,\n                            rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n                        return _react2.default.createElement(_reactRouterDom.Route, {\n                            key: path,\n                            path: path,\n                            exact: exact,\n                            render: function render(props) {\n                                return _react2.default.createElement(C, _extends({}, props, rest));\n                            }\n                        });\n                    }),\n                    _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {\n                            return _react2.default.createElement(_NoMatch2.default, props);\n                        } })\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Grid.jsx":
/*!*****************************!*\
  !*** ./src/shared/Grid.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Grid = function (_Component) {\n    _inherits(Grid, _Component);\n\n    function Grid(props) {\n        _classCallCheck(this, Grid);\n\n        var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));\n\n        var repos = void 0;\n        if (false) {} else {\n            repos = props.staticContext.data;\n        }\n        _this.state = {\n            repos: repos,\n            loading: repos ? false : true\n        };\n        return _this;\n    }\n\n    _createClass(Grid, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            if (!this.state.repos) {\n                this.fetchRepos(this.props.match.params.id);\n            }\n        }\n    }, {\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            var _props = this.props,\n                match = _props.match,\n                fetchInitialData = _props.fetchInitialData;\n\n\n            if (nextProps.match.params.id !== match.params.id) {\n                this.fetchRepos(nextProps.match.params.id);\n            }\n        }\n    }, {\n        key: 'fetchRepos',\n        value: function fetchRepos(lang) {\n            var _this2 = this;\n\n            this.setState({\n                loading: true\n            });\n            this.props.fetchInitialData(lang).then(function (repos) {\n                return _this2.setState(function () {\n                    return {\n                        repos: repos,\n                        loading: false\n                    };\n                });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _state = this.state,\n                repos = _state.repos,\n                loading = _state.loading;\n\n            if (loading) {\n                return _react2.default.createElement(\n                    'h1',\n                    null,\n                    'LOADING'\n                );\n            }\n            return _react2.default.createElement(\n                'ul',\n                { style: { display: 'flex', flexWrap: 'wrap' } },\n                repos.map(function (_ref) {\n                    var name = _ref.name,\n                        owner = _ref.owner,\n                        stargazers_count = _ref.stargazers_count,\n                        html_url = _ref.html_url;\n                    return _react2.default.createElement(\n                        'li',\n                        { key: name, style: { margin: 30 } },\n                        _react2.default.createElement(\n                            'ul',\n                            null,\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: html_url },\n                                    name\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                '@',\n                                owner.login\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                stargazers_count,\n                                ' stars'\n                            )\n                        )\n                    );\n                })\n            );\n        }\n    }]);\n\n    return Grid;\n}(_react.Component);\n\nexports.default = Grid;\n\n//# sourceURL=webpack:///./src/shared/Grid.jsx?");

/***/ }),

/***/ "./src/shared/Home.jsx":
/*!*****************************!*\
  !*** ./src/shared/Home.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = Home;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Home() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        'select a language'\n    );\n}\n\n//# sourceURL=webpack:///./src/shared/Home.jsx?");

/***/ }),

/***/ "./src/shared/Navbar.jsx":
/*!*******************************!*\
  !*** ./src/shared/Navbar.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Navbar;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar languages = [{\n  name: 'All',\n  param: 'all'\n}, {\n  name: 'JavaScript',\n  param: 'javascript'\n}, {\n  name: 'Ruby',\n  param: 'ruby'\n}, {\n  name: 'Python',\n  param: 'python'\n}, {\n  name: 'Java',\n  param: 'java'\n}];\nfunction Navbar() {\n  return _react2.default.createElement(\n    'ul',\n    null,\n    languages.map(function (_ref) {\n      var name = _ref.name,\n          param = _ref.param;\n      return _react2.default.createElement(\n        'li',\n        { key: param },\n        _react2.default.createElement(\n          _reactRouterDom.NavLink,\n          { activeStyle: { fontWeight: 'bold' }, to: '/popular/' + param },\n          name\n        )\n      );\n    })\n  );\n}\n\n//# sourceURL=webpack:///./src/shared/Navbar.jsx?");

/***/ }),

/***/ "./src/shared/NoMatch.jsx":
/*!********************************!*\
  !*** ./src/shared/NoMatch.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = NoMatch;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction NoMatch() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        '404'\n    );\n}\n\n//# sourceURL=webpack:///./src/shared/NoMatch.jsx?");

/***/ }),

/***/ "./src/shared/api.js":
/*!***************************!*\
  !*** ./src/shared/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.fetchPopularRepos = fetchPopularRepos;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction fetchPopularRepos(language) {\n    var url = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');\n    console.log(url);\n    return (0, _isomorphicFetch2.default)(url).then(function (data) {\n        return data.json();\n    }).then(function (repos) {\n        return repos.items;\n    }).catch(function (err) {\n        console.warn(err);\n        return null;\n    });\n}\n\n//# sourceURL=webpack:///./src/shared/api.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Home = __webpack_require__(/*! ./Home */ \"./src/shared/Home.jsx\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Grid = __webpack_require__(/*! ./Grid */ \"./src/shared/Grid.jsx\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _api = __webpack_require__(/*! ./api */ \"./src/shared/api.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n    path: '/',\n    exact: true,\n    component: _Home2.default\n}, {\n    path: '/popular/:id',\n    component: _Grid2.default,\n    fetchInitialData: function fetchInitialData() {\n        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n        console.log('ppppppppppp', path);\n        return (0, _api.fetchPopularRepos)(path.split('/').pop());\n    }\n\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });