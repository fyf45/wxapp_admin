"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("./style/common.scss");

require("./common/js/http.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 默认主题
// 重置样式
// http
_vue["default"].config.productionTip = false;

_vue["default"].use(_elementUi["default"]);

_vue["default"].prototype.$axios = _axios["default"]; // 验证是否已登录

_router["default"].beforeEach(function (to, from, next) {
  if (to.path == '/login') {
    sessionStorage.removeItem('BIGDATA_PLATFORM');
  } // 判断进入的页面需不需要登录


  if (to.matched.some(function (res) {
    return res.meta.requireAuth;
  })) {
    if (sessionStorage.getItem('BIGDATA_PLATFORM')) {
      next();
      return false;
    } else {
      next({
        path: '/login'
      });
    }
  } else {
    next();
  }
});
/* eslint-disable no-new */


new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');