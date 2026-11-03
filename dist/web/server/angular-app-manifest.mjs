
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: "/",
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CMYZLQ2W.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CMYZLQ2W.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/the-iyasele-of-ohordua"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZYJIOAR6.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/achievements"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TPTEVT2F.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/articles"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DKOSZ3VH.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/articles/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Y5ZJM7ZB.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6DQQX464.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WYQLEZZS.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/search"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YTZ3JACL.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YTZ3JACL.js",
      "chunk-7VTQZRYK.js"
    ],
    "route": "/terms-of-use"
  },
  {
    "renderMode": 0,
    "status": 404,
    "preload": [
      "chunk-N3RVVDZL.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    "index.csr.html": {size: 18382, hash: "ab7cf88a236b0faa6b419f114c338133c7d4b6827ba4865450cd63fe5eee9da6", text: () => import("./assets-chunks/index_csr_html.mjs").then(m => m.default)},
    "index.server.html": {size: 11445, hash: "52b5a62f62b09867b7800083698f5566c25ea9e82506c97ce36782b322fccdd7", text: () => import("./assets-chunks/index_server_html.mjs").then(m => m.default)},
    "styles-G6H3U4TA.css": {size: 33303, hash: "kTuSHrmZKCw", text: () => import("./assets-chunks/styles-G6H3U4TA_css.mjs").then(m => m.default)}
  },
};
