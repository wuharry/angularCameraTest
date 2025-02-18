
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
    'index.csr.html': {size: 507, hash: '19185d35100438682d8737f2d7c31a334bf8430eda816c0af2b407d6afdd1bbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: '713ae8015de00903dfdc5a3a8dbe0f5b792cc875935282a225112bf5a576f7e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6185, hash: 'df43591fe2adb77c4cc66bf79f1752249cffa86502cfb144d12cdc9ad6bc86bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
