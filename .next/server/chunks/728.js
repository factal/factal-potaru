"use strict";
exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client)
});

// EXTERNAL MODULE: external "@aspida/fetch"
var fetch_ = __webpack_require__(717);
var fetch_default = /*#__PURE__*/__webpack_require__.n(fetch_);
// EXTERNAL MODULE: external "aspida"
var external_aspida_ = __webpack_require__(838);
;// CONCATENATED MODULE: ./src/api/$api.ts
/* eslint-disable */
// prettier-ignore
 // prettier-ignore

// prettier-ignore
const api = ({
  baseURL,
  fetch
}) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/articles';
  const PATH1 = '/v1/sitedata';
  const GET = 'GET';
  return {
    v1: {
      articles: {
        _id: val2 => {
          const prefix2 = `${PATH0}/${val2}`;
          return {
            get: option => fetch(prefix, prefix2, GET, option).json(),
            $get: option => fetch(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: option => `${prefix}${prefix2}${option && option.query ? `?${(0,external_aspida_.dataToURLString)(option.query)}` : ''}`
          };
        },
        get: option => fetch(prefix, PATH0, GET, option).json(),
        $get: option => fetch(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: option => `${prefix}${PATH0}${option && option.query ? `?${(0,external_aspida_.dataToURLString)(option.query)}` : ''}`
      },
      sitedata: {
        get: option => fetch(prefix, PATH1, GET, option).json(),
        $get: option => fetch(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: option => `${prefix}${PATH1}${option && option.query ? `?${(0,external_aspida_.dataToURLString)(option.query)}` : ''}`
      }
    }
  };
}; // prettier-ignore


// prettier-ignore
/* harmony default export */ const $api = (api);
;// CONCATENATED MODULE: ./src/utils/api.tsx
var _f7685aBe6a4ffc;



const fetchConfig = {
  baseURL: 'https://factal-portal.microcms.io/api',
  headers: {
    "X-API-KEY": (_f7685aBe6a4ffc = '71f7685a-be6a-4ffc-9990-283c5e7a8a60') !== null && _f7685aBe6a4ffc !== void 0 ? _f7685aBe6a4ffc : ""
  }
};
const client = $api(fetch_default()(fetch, fetchConfig));

/***/ })

};
;