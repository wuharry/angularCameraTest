
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularCameraTest/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularCameraTest"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 507, hash: '46d11b9ddfef77a1e98b9d2e5cb4f7e97c3d2ca4d4b3f84d81fb15fef8b3e539', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'f54f22a13e11ce57af0543a1cab59d7fb7dedee99b18ad90c5c50633386e9cdf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6189, hash: '6303e71875eeff9ba986419a495d885fd6839105107956bc71b24665c792ab85', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
