(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(651);
// EXTERNAL MODULE: ./src/utils/api.tsx + 1 modules
var api = __webpack_require__(728);
;// CONCATENATED MODULE: ./src/utils/toStringId.ts
const toStringId = value => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/articles/[id]/index.tsx





const Page = props => {
  const {
    blog
  } = props;
  const router = (0,client_router.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("main", {});
};

const getStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: []
  };
};
const getStaticProps = async context => {
  const {
    params
  } = context;

  if (!(params !== null && params !== void 0 && params.id)) {
    throw new Error("Error: ID not found");
  }

  const id = toStringId(params.id);

  try {
    const blog = await api/* client.v1.articles._id */.L.v1.articles._id(id).$get({
      query: {
        fields: "id,title,body,publishedAt,tags"
      }
    });
    return {
      props: {
        blog
      },
      revalidate: 60
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
};
/* harmony default export */ const _id_ = (Page);

/***/ }),

/***/ 717:
/***/ ((module) => {

"use strict";
module.exports = require("@aspida/fetch");

/***/ }),

/***/ 838:
/***/ ((module) => {

"use strict";
module.exports = require("aspida");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [920,728], () => (__webpack_exec__(360)));
module.exports = __webpack_exports__;

})();