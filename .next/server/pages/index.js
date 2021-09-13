"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./src/utils/api.tsx + 1 modules
var api = __webpack_require__(728);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/components/introduction.tsx




const Introduction = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "about"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      style: {
        textAlign: 'center'
      },
      children: ["\u7A7A\u5C71\u4EBA\u4E0D\u898B", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u4F46\u805E\u4EBA\u8A9E\u97FF", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u8FD4\u666F\u5165\u6DF1\u6797", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u5FA9\u7167\u9752\u82D4\u4E0A"]
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "links"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://twitter.com/factalmusic",
          children: "toilet"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://soundcloud.com/factal",
          children: "trash can"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/factal",
          children: "a pile of garbage"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://factal.bandcamp.com/",
          children: "flea market"
        })
      })]
    })]
  });
};

/* harmony default export */ const introduction = (Introduction);
;// CONCATENATED MODULE: ./pages/index.tsx






const Page = props => {
  const {
    siteData,
    blogList
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: siteData.title
    }), /*#__PURE__*/jsx_runtime_.jsx(introduction, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "POWRED BY SUPER UNCHI CODING"
    })]
  });
};

const getStaticProps = async () => {
  const siteDataPromise = api/* client.v1.sitedata.$get */.L.v1.sitedata.$get({
    query: {
      fields: "title"
    }
  });
  const blogListPromise = api/* client.v1.articles.$get */.L.v1.articles.$get({
    query: {
      fields: "id,title"
    }
  });
  const [siteData, blogList] = await Promise.all([siteDataPromise, blogListPromise]);
  return {
    props: {
      siteData,
      blogList
    },
    revalidate: 60
  };
};
/* harmony default export */ const pages = (Page);

/***/ }),

/***/ 717:
/***/ ((module) => {

module.exports = require("@aspida/fetch");

/***/ }),

/***/ 838:
/***/ ((module) => {

module.exports = require("aspida");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [728], () => (__webpack_exec__(709)));
module.exports = __webpack_exports__;

})();