(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const F="modulepreload",q=function(t){return"/"+t},E={},B=function(e,o,n){let r=Promise.resolve();if(o&&o.length>0){const s=document.getElementsByTagName("link");r=Promise.all(o.map(i=>{if(i=q(i),i in E)return;E[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":F,a||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),a)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},z=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),x=__DEFINES__;Object.keys(x).forEach(t=>{const e=t.split(".");let o=z;for(let n=0;n<e.length;n++){const r=e[n];n===e.length-1?o[r]=x[t]:o=o[r]||(o[r]={})}});class W{constructor(e,o){this.logger=e,this.importUpdatedModule=o,this.hotModulesMap=new Map,this.disposeMap=new Map,this.pruneMap=new Map,this.dataMap=new Map,this.customListenersMap=new Map,this.ctxToListenersMap=new Map}async notifyListeners(e,o){const n=this.customListenersMap.get(e);n&&await Promise.allSettled(n.map(r=>r(o)))}prunePaths(e){e.forEach(o=>{const n=this.pruneMap.get(o);n&&n(this.dataMap.get(o))})}warnFailedUpdate(e,o){e.message.includes("fetch")||this.logger.error(e),this.logger.error(`[hmr] Failed to reload ${o}. This could be due to syntax errors or importing non-existent modules. (see errors above)`)}async fetchUpdate(e){const{path:o,acceptedPath:n}=e,r=this.hotModulesMap.get(o);if(!r)return;let s;const i=o===n,a=r.callbacks.filter(({deps:c})=>c.includes(n));if(i||a.length>0){const c=this.disposeMap.get(n);c&&await c(this.dataMap.get(n));try{s=await this.importUpdatedModule(e)}catch(d){this.warnFailedUpdate(d,n)}}return()=>{for(const{deps:d,fn:l}of a)l(d.map(f=>f===n?s:void 0));const c=i?o:`${n} via ${o}`;this.logger.debug(`[vite] hot updated: ${c}`)}}}const j=__HMR_CONFIG_NAME__,D=__BASE__||"/",V=`
<style>
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  width: 800px;
  color: var(--window-color);
  margin: 30px auto;
  padding: 25px 40px;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

pre.frame::-webkit-scrollbar {
  display: block;
  height: 5px;
}

pre.frame::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

pre.frame {
  scrollbar-width: thin;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
  line-height: 1.8;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}

kbd {
  line-height: 1.5;
  font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgb(38, 40, 44);
  color: rgb(166, 167, 171);
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem 0.0625rem 0.1875rem;
  border-style: solid;
  border-color: rgb(54, 57, 64);
  border-image: initial;
}
</style>
<div class="backdrop" part="backdrop">
  <div class="window" part="window">
    <pre class="message" part="message"><span class="plugin" part="plugin"></span><span class="message-body" part="message-body"></span></pre>
    <pre class="file" part="file"></pre>
    <pre class="frame" part="frame"></pre>
    <pre class="stack" part="stack"></pre>
    <div class="tip" part="tip">
      Click outside, press <kbd>Esc</kbd> key, or fix the code to dismiss.<br>
      You can also disable this overlay by setting
      <code part="config-option-name">server.hmr.overlay</code> to <code part="config-option-value">false</code> in <code part="config-file-name">${j}.</code>
    </div>
  </div>
</div>
`,M=/(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g,g=/^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm,{HTMLElement:G=class{}}=globalThis;class A extends G{constructor(e,o=!0){var n;super(),this.root=this.attachShadow({mode:"open"}),this.root.innerHTML=V,g.lastIndex=0;const r=e.frame&&g.test(e.frame),s=r?e.message.replace(g,""):e.message;e.plugin&&this.text(".plugin",`[plugin:${e.plugin}] `),this.text(".message-body",s.trim());const[i]=(((n=e.loc)===null||n===void 0?void 0:n.file)||e.id||"unknown file").split("?");e.loc?this.text(".file",`${i}:${e.loc.line}:${e.loc.column}`,o):e.id&&this.text(".file",i),r&&this.text(".frame",e.frame.trim()),this.text(".stack",e.stack,o),this.root.querySelector(".window").addEventListener("click",a=>{a.stopPropagation()}),this.addEventListener("click",()=>{this.close()}),this.closeOnEsc=a=>{(a.key==="Escape"||a.code==="Escape")&&this.close()},document.addEventListener("keydown",this.closeOnEsc)}text(e,o,n=!1){const r=this.root.querySelector(e);if(!n)r.textContent=o;else{let s=0,i;for(M.lastIndex=0;i=M.exec(o);){const{0:a,index:c}=i;if(c!=null){const d=o.slice(s,c);r.appendChild(document.createTextNode(d));const l=document.createElement("a");l.textContent=a,l.className="file-link",l.onclick=()=>{fetch(new URL(`${D}__open-in-editor?file=${encodeURIComponent(a)}`,import.meta.url))},r.appendChild(l),s+=d.length+a.length}}}}close(){var e;(e=this.parentNode)===null||e===void 0||e.removeChild(this),document.removeEventListener("keydown",this.closeOnEsc)}}const m="vite-error-overlay",{customElements:v}=globalThis;v&&!v.get(m)&&v.define(m,A);console.debug("[vite] connecting...");const y=new URL(import.meta.url),Y=__SERVER_HOST__,L=__HMR_PROTOCOL__||(y.protocol==="https:"?"wss":"ws"),N=__HMR_PORT__,S=`${__HMR_HOSTNAME__||y.hostname}:${N||y.port}${__HMR_BASE__}`,$=__HMR_DIRECT_TARGET__,_=__BASE__||"/",P=[];let u;try{let t;N||(t=()=>{u=R(L,$,()=>{const e=new URL(import.meta.url),o=e.host+e.pathname.replace(/@vite\/client$/,"");console.error(`[vite] failed to connect to websocket.
your current setup:
  (browser) ${o} <--[HTTP]--> ${Y} (server)
  (browser) ${S} <--[WebSocket (failing)]--> ${$} (server)
Check out your Vite / network configuration and https://vitejs.dev/config/server-options.html#server-hmr .`)}),u.addEventListener("open",()=>{console.info("[vite] Direct websocket connection fallback. Check out https://vitejs.dev/config/server-options.html#server-hmr to remove the previous connection error.")},{once:!0})}),u=R(L,S,t)}catch(t){console.error(`[vite] failed to connect to websocket (${t}). `)}function R(t,e,o){const n=new WebSocket(`${t}://${e}`,"vite-hmr");let r=!1;return n.addEventListener("open",()=>{r=!0,p("vite:ws:connect",{webSocket:n})},{once:!0}),n.addEventListener("message",async({data:s})=>{K(JSON.parse(s))}),n.addEventListener("close",async({wasClean:s})=>{if(!s){if(!r&&o){o();return}p("vite:ws:disconnect",{webSocket:n}),console.log("[vite] server connection lost. polling for restart..."),await te(t,e),location.reload()}}),n}function O(t){const e=new URL(t,location.toString());return e.searchParams.delete("direct"),e.pathname+e.search}let T=!0;const U=new WeakSet,J=t=>{let e;return()=>{e&&(clearTimeout(e),e=null),e=setTimeout(()=>{location.reload()},t)}},C=J(50),k=new W(console,async function({acceptedPath:e,timestamp:o,explicitImportRequired:n}){const[r,s]=e.split("?");return await B(()=>import(_+r.slice(1)+`?${n?"import&":""}t=${o}${s?`&${s}`:""}`),__vite__mapDeps([]))});async function K(t){switch(t.type){case"connected":console.debug("[vite] connected."),ne(),setInterval(()=>{u.readyState===u.OPEN&&u.send('{"type":"ping"}')},__HMR_TIMEOUT__);break;case"update":if(p("vite:beforeUpdate",t),T&&X()){window.location.reload();return}else I(),T=!1;await Promise.all(t.updates.map(async e=>{if(e.type==="js-update")return ee(k.fetchUpdate(e));const{path:o,timestamp:n}=e,r=O(o),s=Array.from(document.querySelectorAll("link")).find(a=>!U.has(a)&&O(a.href).includes(r));if(!s)return;const i=`${_}${r.slice(1)}${r.includes("?")?"&":"?"}t=${n}`;return new Promise(a=>{const c=s.cloneNode();c.href=new URL(i,s.href).href;const d=()=>{s.remove(),console.debug(`[vite] css hot updated: ${r}`),a()};c.addEventListener("load",d),c.addEventListener("error",d),U.add(s),s.after(c)})})),p("vite:afterUpdate",t);break;case"custom":{p(t.event,t.data);break}case"full-reload":if(p("vite:beforeFullReload",t),t.path&&t.path.endsWith(".html")){const e=decodeURI(location.pathname),o=_+t.path.slice(1);(e===o||t.path==="/index.html"||e.endsWith("/")&&e+"index.html"===o)&&C();return}else C();break;case"prune":p("vite:beforePrune",t),k.prunePaths(t.paths);break;case"error":{p("vite:error",t);const e=t.err;Q?Z(e):console.error(`[vite] Internal Server Error
${e.message}
${e.stack}`);break}default:return t}}function p(t,e){k.notifyListeners(t,e)}const Q=__HMR_ENABLE_OVERLAY__;function Z(t){I(),document.body.appendChild(new A(t))}function I(){document.querySelectorAll(m).forEach(t=>t.close())}function X(){return document.querySelectorAll(m).length}let w=!1,b=[];async function ee(t){if(b.push(t),!w){w=!0,await Promise.resolve(),w=!1;const e=[...b];b=[],(await Promise.all(e)).forEach(o=>o&&o())}}async function te(t,e,o=1e3){const n=t==="wss"?"https":"http",r=async()=>{try{return await fetch(`${n}://${e}`,{mode:"no-cors",headers:{Accept:"text/x-vite-ping"}}),!0}catch{}return!1};if(!await r())for(await H(o);;)if(document.visibilityState==="visible"){if(await r())break;await H(o)}else await oe()}function H(t){return new Promise(e=>setTimeout(e,t))}function oe(){return new Promise(t=>{const e=async()=>{document.visibilityState==="visible"&&(t(),document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)})}const re=new Map;"document"in globalThis&&document.querySelectorAll("style[data-vite-dev-id]").forEach(t=>{re.set(t.getAttribute("data-vite-dev-id"),t)});function ne(){u.readyState===1&&(P.forEach(t=>u.send(t)),P.length=0)}
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
