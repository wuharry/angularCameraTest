
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 495, hash: '53893dc2e09a4b19549b0c7189b069267bdfc2922c27ba06aeb72dd1ddad12df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '6804a8fda4510d290c2a799b3dda142dd9402e7c9285fe3806c3cb5ab48fe929', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6177, hash: 'efb4a6cdb6efa140d3a7ea8273603b014a4224e24927a03bef7660e9b3b6be23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
