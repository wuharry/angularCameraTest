
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
    'index.csr.html': {size: 507, hash: '4355dcac1e477343059f1073c1183f2b0195d307ade7517cfbe4fe589971ffe7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: '2795610e690a02279c67562b9ed7a3977913034b42690f821c64b7252aa32cc8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6012, hash: 'bdf38785ade90d4fc5f4023c0d1bba866632f3c79bc95fd3ff30d03422d9715f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
