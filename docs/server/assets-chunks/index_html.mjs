export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Demo1</title>
  <base href="/angularCameraTest/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">.camera-container[_ngcontent-ng-c228577756]{display:flex;flex-direction:column;align-items:center;gap:10px}.camera-view[_ngcontent-ng-c228577756]{width:100%;max-width:600px;height:auto;border:2px solid #000}input[type=range][_ngcontent-ng-c228577756]{width:80%}[_nghost-ng-c228577756]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--red-to-pink-to-purple-vertical-gradient: linear-gradient(180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%);--red-to-pink-to-purple-horizontal-gradient: linear-gradient(90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100%);--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-ng-c228577756]{font-size:3.125rem;color:var(--gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-ng-c228577756]{margin:0;color:var(--gray-700)}main[_ngcontent-ng-c228577756]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1rem;box-sizing:inherit;position:relative}.angular-logo[_ngcontent-ng-c228577756]{max-width:9.2rem}.content[_ngcontent-ng-c228577756]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}.content[_ngcontent-ng-c228577756]   h1[_ngcontent-ng-c228577756]{margin-top:1.75rem}.content[_ngcontent-ng-c228577756]   p[_ngcontent-ng-c228577756]{margin-top:1.5rem}.divider[_ngcontent-ng-c228577756]{width:1px;background:var(--red-to-pink-to-purple-vertical-gradient);margin-inline:.5rem}.pill-group[_ngcontent-ng-c228577756]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}.pill[_ngcontent-ng-c228577756]{display:flex;align-items:center;--pill-accent: var(--bright-blue);background:color-mix(in srgb,var(--pill-accent) 5%,transparent);color:var(--pill-accent);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-ng-c228577756]:hover{background:color-mix(in srgb,var(--pill-accent) 15%,transparent)}.pill-group[_ngcontent-ng-c228577756]   .pill[_ngcontent-ng-c228577756]:nth-child(6n+1){--pill-accent: var(--bright-blue)}.pill-group[_ngcontent-ng-c228577756]   .pill[_ngcontent-ng-c228577756]:nth-child(6n+2){--pill-accent: var(--french-violet)}.pill-group[_ngcontent-ng-c228577756]   .pill[_ngcontent-ng-c228577756]:nth-child(6n+3), .pill-group[_ngcontent-ng-c228577756]   .pill[_ngcontent-ng-c228577756]:nth-child(6n+4), .pill-group[_ngcontent-ng-c228577756]   .pill[_ngcontent-ng-c228577756]:nth-child(6n+5){--pill-accent: var(--hot-red)}.pill-group[_ngcontent-ng-c228577756]   svg[_ngcontent-ng-c228577756]{margin-inline-start:.25rem}.social-links[_ngcontent-ng-c228577756]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}.social-links[_ngcontent-ng-c228577756]   path[_ngcontent-ng-c228577756]{transition:fill .3s ease;fill:var(--gray-400)}.social-links[_ngcontent-ng-c228577756]   a[_ngcontent-ng-c228577756]:hover   svg[_ngcontent-ng-c228577756]   path[_ngcontent-ng-c228577756]{fill:var(--gray-900)}@media screen and (max-width: 650px){.content[_ngcontent-ng-c228577756]{flex-direction:column;width:max-content}.divider[_ngcontent-ng-c228577756]{height:1px;width:100%;background:var(--red-to-pink-to-purple-horizontal-gradient);margin-block:1.5rem}}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.1.6" _nghost-ng-c228577756 ngh="0" ng-server-context="ssg"><main _ngcontent-ng-c228577756 class="main"><div _ngcontent-ng-c228577756 class="content"><div _ngcontent-ng-c228577756 class="left-side"><h1 _ngcontent-ng-c228577756>Hello</h1><p _ngcontent-ng-c228577756>Congratulations! Your app is running. 🎉</p><div _ngcontent-ng-c228577756 class="camera-container"><button _ngcontent-ng-c228577756 jsaction="click:;">開啟相機</button><video _ngcontent-ng-c228577756 autoplay playsinline class="camera-view"></video><!----></div></div></div></main><router-outlet _ngcontent-ng-c228577756></router-outlet><!----></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-XPN7BBSP.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"12":"t0"},"c":{"12":[],"13":[]}}]}</script></body></html>`;