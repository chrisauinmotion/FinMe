(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_AppNavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/AppNavbar */ "./src/components/layout/AppNavbar.js");
/* harmony import */ var _components_layout_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/Dashboard */ "./src/components/layout/Dashboard.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/Login */ "./src/components/auth/Login.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/Register */ "./src/components/auth/Register.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/auth */ "./src/helpers/auth.js");
/* harmony import */ var _components_positions_BuyShares__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/positions/BuyShares */ "./src/components/positions/BuyShares.js");
/* harmony import */ var _components_positions_Trades__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/positions/Trades */ "./src/components/positions/Trades.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_16__);





var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/App.js";













var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_AppNavbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        exact: true,
        path: "/",
        component: Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["UserIsAuthenticated"])(_components_layout_Dashboard__WEBPACK_IMPORTED_MODULE_7__["default"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        exact: true,
        path: "/trades",
        component: Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["UserIsAuthenticated"])(_components_positions_Trades__WEBPACK_IMPORTED_MODULE_12__["default"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        exact: true,
        path: "/buyshares",
        component: Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["UserIsAuthenticated"])(_components_positions_BuyShares__WEBPACK_IMPORTED_MODULE_11__["default"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        exact: true,
        path: "/login",
        component: Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["UserIsNotAuthenticated"])(_components_auth_Login__WEBPACK_IMPORTED_MODULE_8__["default"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        exact: true,
        path: "/register",
        component: Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["UserIsNotAuthenticated"])(_components_auth_Register__WEBPACK_IMPORTED_MODULE_9__["default"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/auth/Login.js";




var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      email: '',
      password: ''
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var firebase = _this.props.firebase;
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      firebase.login({
        email: email,
        password: password
      }).catch(function (err) {
        return alert('Invalid Login Credentials');
      });
    };

    _this.onChange = function (e) {
      return _this.setState(Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    return _this;
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "text-center pb-4 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), " Login")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "email",
        required: true,
        value: this.state.email,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        required: true,
        value: this.state.password,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Login",
        className: "btn btn-success btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Login.propTypes = {
  firebase: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__["firebaseConnect"])()(Login));

/***/ }),

/***/ "./src/components/auth/Register.js":
/*!*****************************************!*\
  !*** ./src/components/auth/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/auth/Register.js";




var Register =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      email: '',
      password: ''
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var firebase = _this.props.firebase;
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;
      firebase.createUser({
        email: email,
        password: password
      }).catch(function (err) {
        return alert('That User Etiher Already Exists or You Are Entering an Invalid Email.  Please Try again.');
      });
    };

    _this.onChange = function (e) {
      return _this.setState(Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    };

    return _this;
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Register, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-md-6 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "text-center pb-4 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fas fa-lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), " Register")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "email",
        required: true,
        value: this.state.email,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        required: true,
        value: this.state.password,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Register",
        className: "btn btn-success btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }))))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Register.propTypes = {
  firebase: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__["firestoreConnect"])()(Register));

/***/ }),

/***/ "./src/components/layout/AppNavbar.js":
/*!********************************************!*\
  !*** ./src/components/layout/AppNavbar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/layout/AppNavbar.js";







var AppNavbar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppNavbar, _Component);

  function AppNavbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppNavbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppNavbar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isAuthenticated: false
    };

    _this.onLogoutClick = function (e) {
      e.preventDefault();

      _this.props.firebase.logout();
    };

    return _this;
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppNavbar, [{
    key: "render",
    value: function render() {
      var isAuthenticated = this.state.isAuthenticated;
      var auth = this.props.auth;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "navbar navbar-expand-sm navbar-dark bg-success mb-3 py--0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Stock Portfolio Tracker"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, isAuthenticated && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "navbar-nav mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-chart-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), " Dashboard")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/trades",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-file-invoice-dollar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), " Trades"))), isAuthenticated && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "navbar-nav ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#!",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, auth.email)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#!",
        className: "nav-link",
        onClick: this.onLogoutClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Logout"))), !isAuthenticated && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "navbar-nav ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/login",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/register",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Register"))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var auth = props.auth;

      if (auth.uid) {
        return {
          isAuthenticated: true
        };
      } else {
        return {
          isAuthenticated: false
        };
      }
    }
  }]);

  return AppNavbar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

AppNavbar.propTypes = {
  firebase: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_10__["firebaseConnect"])(), Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state, props) {
  return {
    auth: state.firebase.auth
  };
}))(AppNavbar));

/***/ }),

/***/ "./src/components/layout/Dashboard.js":
/*!********************************************!*\
  !*** ./src/components/layout/Dashboard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _positions_Positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../positions/Positions */ "./src/components/positions/Positions.js");
/* harmony import */ var _layout_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Sidebar */ "./src/components/layout/Sidebar.js");





var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/layout/Dashboard.js";




var Dashboard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, _Component);

  function Dashboard() {
    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Dashboard);

    return Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard).apply(this, arguments));
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Dashboard, [{
    key: "render",
    value: function render() {
      console.log(this.props.firestore);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_positions_Positions__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/components/layout/Sidebar.js":
/*!******************************************!*\
  !*** ./src/components/layout/Sidebar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/layout/Sidebar.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/buyshares",
    className: "btn btn-success btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), " Buy Shares"));
});

/***/ }),

/***/ "./src/components/layout/Spinner.js":
/*!******************************************!*\
  !*** ./src/components/layout/Spinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.gif */ "./src/components/layout/spinner.gif");
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/layout/Spinner.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Loading...",
    style: {
      width: '200px',
      margin: 'auto',
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/components/layout/spinner.gif":
/*!*******************************************!*\
  !*** ./src/components/layout/spinner.gif ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spinner.9e917f15.gif";

/***/ }),

/***/ "./src/components/positions/BuyShares.js":
/*!***********************************************!*\
  !*** ./src/components/positions/BuyShares.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/positions/BuyShares.js";








var BuyShares =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(BuyShares, _Component);

  function BuyShares() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BuyShares);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(BuyShares)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      ticker: '',
      shares: '',
      date: '',
      companyName: '',
      quotedPricePerShare: '',
      totalAmountDue: ''
    };

    _this.onChange = function (e) {
      return _this.setState(Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value));
    };

    _this.onClick =
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, ticker, shares) {
        var res, _res$data, companyName, latestPrice, account, totalAmountDue;

        return _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://api.iextrading.com/1.0/stock/".concat(ticker.toUpperCase(), "/quote")).catch(function (err) {
                  return alert('Invalid Ticker', err.response);
                });

              case 3:
                res = _context.sent;
                console.log(res.data);

                if (res && res.data) {
                  _res$data = res.data, companyName = _res$data.companyName, latestPrice = _res$data.latestPrice;
                  account = _this.state.account;
                  totalAmountDue = shares * +latestPrice.toFixed(0);

                  if (totalAmountDue < +account.balance) {
                    _this.setState({
                      companyName: companyName,
                      totalAmountDue: totalAmountDue,
                      quotedPricePerShare: +latestPrice.toFixed(0).toString()
                    });
                  } else {
                    alert('You Do Not Have a Sufficient Balance to Execute This Trade');
                  }
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          firestore = _this$props.firestore,
          history = _this$props.history,
          uid = _this$props.uid;
      var _this$state = _this.state,
          ticker = _this$state.ticker,
          companyName = _this$state.companyName,
          totalAmountDue = _this$state.totalAmountDue,
          shares = _this$state.shares,
          quotedPricePerShare = _this$state.quotedPricePerShare,
          account = _this$state.account,
          positions = _this$state.positions; //Reduce Account Balance

      var balanceUpdate = {
        balance: (+account.balance - +totalAmountDue.toFixed(0)).toString()
      };
      firestore.update({
        collection: 'account',
        doc: account.id
      }, balanceUpdate); //Create A Trade Record

      var date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
      var newTrade = {
        accountId: account.id,
        companyName: companyName,
        ticker: ticker,
        sharesPurchased: shares,
        date: date,
        priceAtPurchase: (+quotedPricePerShare.toFixed(0)).toString(),
        userId: uid
      };
      firestore.add({
        collection: 'trades'
      }, newTrade); //Update Current Position if You Already Own Shares, Create a New Position if Not

      var positionToUpdate = positions.find(function (position) {
        return ticker.toUpperCase() === position.ticker.toUpperCase();
      });

      if (positionToUpdate) {
        var updatedPosition = {
          sharesOwned: +shares + positionToUpdate.sharesOwned,
          totalValAtPurchase: (+positionToUpdate.totalValAtPurchase + +totalAmountDue.toFixed(0)).toString()
        };
        firestore.update({
          collection: 'positions',
          doc: positionToUpdate.id
        }, updatedPosition).then(function () {
          return history.push('/');
        });
      } else {
        var newPosition = {
          userId: uid,
          accountId: account.id,
          companyName: companyName,
          ticker: ticker,
          totalValAtPurchase: +totalAmountDue.toFixed(0).toString(),
          sharesOwned: shares
        };
        firestore.add({
          collection: 'positions'
        }, newPosition).then(function () {
          return history.push('/');
        });
      }
    };

    return _this;
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(BuyShares, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/",
        className: "btn btn-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-arrow-circle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), " Back To Dashboard"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "card-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Buy Shares"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "ticker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Ticker"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Enter Valid Ticker",
        name: "ticker",
        minLength: "1",
        required: true,
        onChange: this.onChange,
        value: this.state.ticker,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "shares",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Shares"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "shares",
        minLength: "1",
        required: true,
        onChange: this.onChange,
        value: this.state.shares,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "companyName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "companyName",
        minLength: "1",
        required: true,
        value: this.state.companyName,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "quotedPricePerShare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Quoted Price Per Share"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "quotedPricePerShare",
        minLength: "1",
        required: true,
        value: this.state.quotedPricePerShare,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "totalAmountDue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Total Amount Due"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "totalAmountDue",
        value: this.state.totalAmountDue,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      })), !this.state.totalAmountDue ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.onClick(e, _this2.state.ticker, _this2.state.shares);
        },
        className: "btn btn-secondary btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Get Quote") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "submit",
        value: "Execute Trade",
        className: "btn btn-success btn-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var account = props.account,
          uid = props.uid,
          positions = props.positions;

      if (account && uid && positions) {
        account = account.filter(function (account) {
          return account.userId === uid;
        })[0];
        positions = positions.filter(function (position) {
          return position.userId === uid;
        });
        return {
          account: account,
          positions: positions
        };
      }

      return null;
    }
  }]);

  return BuyShares;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

BuyShares.proptypes = {
  firestore: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired,
  account: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_12__["compose"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_14__["firestoreConnect"])([{
  collection: 'account'
}, {
  collection: 'positions'
}]), Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function (state, props) {
  return {
    account: state.firestore.ordered.account,
    positions: state.firestore.ordered.positions,
    uid: state.firebase.auth.uid
  };
}))(BuyShares));

/***/ }),

/***/ "./src/components/positions/Positions.js":
/*!***********************************************!*\
  !*** ./src/components/positions/Positions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");







var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/positions/Positions.js";








var Positions =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Positions, _Component);

  function Positions() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Positions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Positions)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      total: null
    };

    _this.onClick = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          firestore = _this$props.firestore,
          uid = _this$props.uid;
      var newAccount = {
        balance: '5000',
        userId: uid
      };
      firestore.add({
        collection: 'account'
      }, newAccount);
    };

    return _this;
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Positions, [{
    key: "getData",
    value: function () {
      var _getData = Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://api.iextrading.com/1.0/stock/AAPL/quote");

              case 2:
                res = _context.sent;
                console.log(res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getData() {
        return _getData.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          positions = _this$props2.positions,
          account = _this$props2.account,
          uid = _this$props2.uid;

      if (positions && account && uid) {
        account = account.filter(function (account) {
          return account.userId === uid;
        })[0];
        positions = positions.filter(function (position) {
          return position.userId === uid;
        });
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-money-check-alt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), " Portfolio")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, account ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
          className: "text-right text-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Acc Balance:", ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "$", parseFloat(account.balance).toFixed(2))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          onClick: function onClick(e) {
            return _this2.onClick(e, _this2.state.ticker, _this2.state.shares);
          },
          className: "btn btn-secondary btn-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Open Account"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
          className: "table table-striped",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          className: "thead-inverse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Company"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "Ticker"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Val @Purchase"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Cur Ttl Val"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Opening PX"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "Current PX"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Today's P/L"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "Lifetime P/L"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, positions && positions.map(function (position) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: position.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, position.companyName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, position.ticker), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, "$", parseFloat(position.totalValAtPurchase).toFixed(2)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }));
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_layout_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var account = props.account,
          uid = props.uid,
          positions = props.positions;

      if (account && uid && positions) {
        return {
          account: account,
          positions: positions,
          uid: uid
        };
      }

      return null;
    }
  }]);

  return Positions;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Positions.propTypes = {
  firebase: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  positions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_11__["compose"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_12__["firestoreConnect"])([{
  collection: 'account'
}, {
  collection: 'positions'
}]), Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(function (state, props) {
  return {
    account: state.firestore.ordered.account,
    positions: state.firestore.ordered.positions,
    uid: state.firebase.auth.uid
  };
}))(Positions));

/***/ }),

/***/ "./src/components/positions/Trades.js":
/*!********************************************!*\
  !*** ./src/components/positions/Trades.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");





var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/components/positions/Trades.js";







var Trades =
/*#__PURE__*/
function (_Component) {
  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Trades, _Component);

  function Trades() {
    Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Trades);

    return Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Trades).apply(this, arguments));
  }

  Object(_Users_przchris_web_projects_Udemy_React_TTP_FS20180728_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Trades, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          trades = _this$props.trades,
          uid = _this$props.uid;

      if (trades) {
        trades = trades.filter(function (trade) {
          return trade.userId === uid;
        });
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, trades.length ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-file-invoice-dollar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }), " Trades") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "fas fa-file-invoice-dollar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }), " No Trades"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
          className: "table table-striped",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("thead", {
          className: "thead-inverse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "Ticker"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "Shares"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Purchase Price"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Date"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, trades.length && trades.map(function (trade) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
            key: trade.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, trade.companyName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, trade.ticker), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, trade.sharesPurchased), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, "$", parseFloat(trade.priceAtPurchase).toFixed(2)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, trade.date));
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        });
      }
    }
  }]);

  return Trades;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Trades.propTypes = {
  firebase: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  trades: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__["firestoreConnect"])([{
  collection: 'trades'
}]), Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state, props) {
  return {
    trades: state.firestore.ordered.trades,
    uid: state.firebase.auth.uid
  };
}))(Trades));

/***/ }),

/***/ "./src/helpers/auth.js":
/*!*****************************!*\
  !*** ./src/helpers/auth.js ***!
  \*****************************/
/*! exports provided: UserIsAuthenticated, UserIsNotAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIsAuthenticated", function() { return UserIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIsNotAuthenticated", function() { return UserIsNotAuthenticated; });
/* harmony import */ var redux_auth_wrapper_history4_locationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-auth-wrapper/history4/locationHelper */ "./node_modules/redux-auth-wrapper/history4/locationHelper.js");
/* harmony import */ var redux_auth_wrapper_history4_locationHelper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_auth_wrapper_history4_locationHelper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_auth_wrapper_history4_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-auth-wrapper/history4/redirect */ "./node_modules/redux-auth-wrapper/history4/redirect.js");
/* harmony import */ var redux_auth_wrapper_history4_redirect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_auth_wrapper_history4_redirect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Spinner */ "./src/components/layout/Spinner.js");



var locationHelper = redux_auth_wrapper_history4_locationHelper__WEBPACK_IMPORTED_MODULE_0___default()({});
var UserIsAuthenticated = Object(redux_auth_wrapper_history4_redirect__WEBPACK_IMPORTED_MODULE_1__["connectedRouterRedirect"])({
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: _components_layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"],
  allowRedirectBack: true,
  redirectPath: function redirectPath(state, ownProps) {
    return locationHelper.getRedirectQueryParam(ownProps) || '/login';
  },
  authenticatingSelector: function authenticatingSelector(_ref) {
    var _ref$firebase = _ref.firebase,
        auth = _ref$firebase.auth,
        profile = _ref$firebase.profile,
        isInitializing = _ref$firebase.isInitializing;
    return !auth.isLoaded || isInitializing === true;
  },
  authenticatedSelector: function authenticatedSelector(_ref2) {
    var auth = _ref2.firebase.auth;
    return auth.isLoaded && !auth.isEmpty;
  }
});
var UserIsNotAuthenticated = Object(redux_auth_wrapper_history4_redirect__WEBPACK_IMPORTED_MODULE_1__["connectedRouterRedirect"])({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: _components_layout_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"],
  allowRedirectBack: false,
  redirectPath: function redirectPath(state, ownProps) {
    return locationHelper.getRedirectQueryParam(ownProps) || '/';
  },
  authenticatingSelector: function authenticatingSelector(_ref3) {
    var _ref3$firebase = _ref3.firebase,
        auth = _ref3$firebase.auth,
        isInitializing = _ref3$firebase.isInitializing;
    return !auth.isLoaded || isInitializing === true;
  },
  authenticatedSelector: function authenticatedSelector(_ref4) {
    var auth = _ref4.firebase.auth;
    return auth.isLoaded && auth.isEmpty;
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-firebase */ "./node_modules/react-redux-firebase/es/index.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-firestore */ "./node_modules/redux-firestore/es/index.js");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_4__);




 // Reducers
// @toDo

var firebaseConfig = {
  apiKey: 'AIzaSyD2czpcD9PIYh7oxjGZBQ6UneIAtQANTd8',
  authDomain: 'ttp-fs20180728.firebaseapp.com',
  databaseURL: 'https://ttp-fs20180728.firebaseio.com',
  projectId: 'ttp-fs20180728',
  storageBucket: 'ttp-fs20180728.appspot.com',
  messagingSenderId: '158621854382'
}; // React-Redux-Firbase Config

var rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}; // Initialize Firebase

firebase__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(firebaseConfig); // Initialize Firestore

var firestore = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
var settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings); // ReactReduxFirebase enhancer

var createStoreWithFirebase = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__["reactReduxFirebase"])(firebase__WEBPACK_IMPORTED_MODULE_1___default.a, rrfConfig), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_4__["reduxFirestore"])(firebase__WEBPACK_IMPORTED_MODULE_1___default.a))(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  firebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__["firebaseReducer"],
  firestore: redux_firestore__WEBPACK_IMPORTED_MODULE_4__["firestoreReducer"]
}); // Initial State

var initialState = {}; // Store

var store = createStoreWithFirebase(rootReducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__["reactReduxFirebase"])(firebase__WEBPACK_IMPORTED_MODULE_1___default.a), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/przchris/web_projects/Udemy-React/TTP-FS20180728/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/przchris/web_projects/Udemy-React/TTP-FS20180728/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map