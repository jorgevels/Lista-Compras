(()=>{"use strict";var e={895:()=>{try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:6.4.1"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.4.1"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.1"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.1"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.1"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const n=new Set;const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||r(a.precache),c=e=>e||r(a.runtime);function o(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}let h;function l(e){e.then((()=>{}))}class u{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const d=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");function f(e,t){const s=t();return e.waitUntil(s),s}async function p(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,c=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(c,i)}let g,w;const m=new WeakMap,y=new WeakMap,_=new WeakMap,b=new WeakMap,v=new WeakMap;let R={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return E(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function x(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(L(this),t),E(m.get(this))}:function(...t){return E(e.apply(L(this),t))}:function(t,...s){const n=e.call(L(this),t,...s);return _.set(n,t.sort?t.sort():[t]),E(n)}}function C(e){return"function"==typeof e?x(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));y.set(e,t)}(e),t=e,(g||(g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,R):e);var t}function E(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(E(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&m.set(t,e)})).catch((()=>{})),v.set(t,e),t}(e);if(b.has(e))return b.get(e);const t=C(e);return t!==e&&(b.set(e,t),v.set(t,e)),t}const L=e=>v.get(e);const q=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],U=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(U.get(t))return U.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=D.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!q.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return U.set(t,r),r}R=(e=>({...e,get:(t,s,n)=>k(t,s)||e.get(t,s,n),has:(t,s)=>!!k(t,s)||e.has(t,s)}))(R);s(550);const N="cache-entries",T=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class I{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(N,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),E(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=T(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(N,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(N,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(N).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const e of a)await s.delete(N,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+T(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),c=E(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(E(i.result),e.oldVersion,e.newVersion,E(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class K{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new I(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,l(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class M{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);l(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){0}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&function(e){n.add(e)}((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===c())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new K(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(977);function P(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class A{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class S{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}s(873);function O(e){return"string"==typeof e?new Request(e):e}class W{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new u,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let n=O(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=O(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const a=O(e);var r;await(r=0,new Promise((e=>setTimeout(e,r))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:d(i.url)});const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),f=this.hasCallback("cacheDidUpdate"),p=f?await async function(e,t,s,n){const a=o(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===o(t.url,s))return e.match(t,n)}(u,i.clone(),["__WB_REVISION__"],l):null;try{await u.put(i,f?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of n)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:p,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=O(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class B{constructor(e={}){this.cacheName=c(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new W(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(e,s,n){let a;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,e),!a||"error"===a.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:t,event:n,request:s}),a)break;if(!a)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class j extends B{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(j.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=a.integrity,r=e.integrity,i=!r||r===t;if(n=await s.fetch(new Request(e,{integrity:r||t})),t&&i){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,n.clone());0}}return n}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==j.copyRedirectedCacheableResponsesPlugin&&(n===j.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(j.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}j.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},j.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class F{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new j({cacheName:i(e),plugins:[...t,new S({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:a}=P(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return f(e,(async()=>{const t=new A;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return f(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let H;const $=()=>(H||(H=new F),H);s(80);const V=e=>e&&"object"==typeof e?e:{handle:e};class G{constructor(e,t,s="GET"){this.handler=V(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=V(e)}}class Q extends G{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class J{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,V(e))}setCatchHandler(e){this._catchHandler=V(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let z;const X=()=>(z||(z=new J,z.addFetchListener(),z.addCacheListener()),z);function Y(e,s,n){let a;if("string"==typeof e){const t=new URL(e,location.href);0;a=new G((({url:e})=>e.href===t.href),s,n)}else if(e instanceof RegExp)a=new Q(e,s,n);else if("function"==typeof e)a=new G(e,s,n);else{if(!(e instanceof G))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return X().registerRoute(a),a}class Z extends G{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}class ee extends B{async _handle(e,s){let n,a=await s.cacheMatch(e);if(a)0;else{0;try{a=await s.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}0}if(!a)throw new t("no-response",{url:e.url,error:n});return a}}const te={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class se extends B{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(te)}async _handle(e,s){const n=s.fetchAndCachePut(e).catch((()=>{}));let a,r=await s.cacheMatch(e);if(r)0;else{0;try{r=await n}catch(e){e instanceof Error&&(a=e)}}if(!r)throw new t("no-response",{url:e.url,error:a});return r}}var ne;s(895);class ae{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class re{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new ae(e)}}self.addEventListener("activate",(()=>self.clients.claim())),self.skipWaiting(),function(e){$().precache(e)}([{'revision':'58a75079de2d8d1f85f14a8a7dba58eb','url':'./index.html'},{'revision':'98adf355ad555f1dec05407f557846a1','url':'61.bundle.js'},{'revision':'5b0944e284302af8ae311e82aa7fe1b4','url':'android-chrome-192x192.png'},{'revision':'67c0cd6f74daa718e1c7f5e5f84e30d5','url':'android-chrome-512x512.png'},{'revision':'08ebe463baf36b039b52c9105fcc3a98','url':'apple-touch-icon-167x167.png'},{'revision':'ad61a6b75f955751a0b33c69fce2ac96','url':'apple-touch-icon-180x180.png'},{'revision':'dda01c3ad9cd41520e1e57cd1c4a5f6c','url':'assets/android-chrome-144x144.png'},{'revision':'5b0944e284302af8ae311e82aa7fe1b4','url':'assets/android-chrome-192x192.png'},{'revision':'33498b1a288fbf7b82bdc16c7c206b52','url':'assets/android-chrome-256x256.png'},{'revision':'e12f276dd78631e0e9d3c2e854aeae6c','url':'assets/android-chrome-36x36.png'},{'revision':'329d465d159b8f6fd95b7f8911f5faac','url':'assets/android-chrome-384x384.png'},{'revision':'83276521deef3a9a4b0d0f17414dbc39','url':'assets/android-chrome-48x48.png'},{'revision':'67c0cd6f74daa718e1c7f5e5f84e30d5','url':'assets/android-chrome-512x512.png'},{'revision':'8e3535567d52d1cb2c3a3e33c20c4611','url':'assets/android-chrome-72x72.png'},{'revision':'6981fadb6d1675513acbb70b2d1dfa90','url':'assets/android-chrome-96x96.png'},{'revision':'07bb7c1005c9729e4cd26af145fc9dcb','url':'assets/apple-touch-icon-1024x1024.png'},{'revision':'1780dfbfa5809f9ce5ca3a362a8bd563','url':'assets/apple-touch-icon-114x114.png'},{'revision':'2a03356ca10b37bba2897df4b93eda43','url':'assets/apple-touch-icon-120x120.png'},{'revision':'bde9712fc5af6b1ed94a56091ab01f66','url':'assets/apple-touch-icon-144x144.png'},{'revision':'cf525d576ebf436de01acf4e1678f7fa','url':'assets/apple-touch-icon-152x152.png'},{'revision':'08ebe463baf36b039b52c9105fcc3a98','url':'assets/apple-touch-icon-167x167.png'},{'revision':'ad61a6b75f955751a0b33c69fce2ac96','url':'assets/apple-touch-icon-180x180.png'},{'revision':'20428ff641b11470f7957a6e34d36ecc','url':'assets/apple-touch-icon-57x57.png'},{'revision':'fc8ae745a4f77318259d2ccffb6a176a','url':'assets/apple-touch-icon-60x60.png'},{'revision':'a18a790f787e5bb05b508972e3c40b23','url':'assets/apple-touch-icon-72x72.png'},{'revision':'626e6798f575270222f580ef8508123c','url':'assets/apple-touch-icon-76x76.png'},{'revision':'ad61a6b75f955751a0b33c69fce2ac96','url':'assets/apple-touch-icon-precomposed.png'},{'revision':'ad61a6b75f955751a0b33c69fce2ac96','url':'assets/apple-touch-icon.png'},{'revision':'0f792183479ca096cc1632e351d45e28','url':'assets/apple-touch-startup-image-1125x2436.png'},{'revision':'d79f83ea7dc72059ee92800596e79055','url':'assets/apple-touch-startup-image-1136x640.png'},{'revision':'5c343239b3d9737856a866bd74834ba3','url':'assets/apple-touch-startup-image-1242x2208.png'},{'revision':'9a4d35bc4d662910ae2320110b4a5626','url':'assets/apple-touch-startup-image-1242x2688.png'},{'revision':'8a2a2899bf9006f8c64f23b360d42a92','url':'assets/apple-touch-startup-image-1334x750.png'},{'revision':'7dfbbb1abc3ee73c0246af6351a4427f','url':'assets/apple-touch-startup-image-1536x2048.png'},{'revision':'84ba31694331aa112684475b0c7964b3','url':'assets/apple-touch-startup-image-1620x2160.png'},{'revision':'5df208a648e4f7b5abaac764ffd43239','url':'assets/apple-touch-startup-image-1668x2224.png'},{'revision':'352e37fc21024b5f67869e08f4950930','url':'assets/apple-touch-startup-image-1668x2388.png'},{'revision':'49cc7757f102c28caa00db225e15ab57','url':'assets/apple-touch-startup-image-1792x828.png'},{'revision':'1ad229b704e30979f8f27cf681e7f92c','url':'assets/apple-touch-startup-image-2048x1536.png'},{'revision':'7f74034797af0c2b0ba21d9870b0c87c','url':'assets/apple-touch-startup-image-2048x2732.png'},{'revision':'6dd2ad7420a12c3ae9afe3543c04fe11','url':'assets/apple-touch-startup-image-2160x1620.png'},{'revision':'7bab2ea82f5d00cf979b767711b49103','url':'assets/apple-touch-startup-image-2208x1242.png'},{'revision':'5b29772d474f08ca61ae7aa5118eb8f3','url':'assets/apple-touch-startup-image-2224x1668.png'},{'revision':'5bb90f8754c68a1785e02b3a2b9fe0e0','url':'assets/apple-touch-startup-image-2388x1668.png'},{'revision':'c26e699838c0d7578ca0d1208734e0a1','url':'assets/apple-touch-startup-image-2436x1125.png'},{'revision':'9cd1946673b40e2c790f92b321bf4db9','url':'assets/apple-touch-startup-image-2688x1242.png'},{'revision':'275306217e772615f84b6d61b222d769','url':'assets/apple-touch-startup-image-2732x2048.png'},{'revision':'b8bd5bf1493259b6d1e664f312ef2ea3','url':'assets/apple-touch-startup-image-640x1136.png'},{'revision':'9229539d2987b03900ed00da6e2b137a','url':'assets/apple-touch-startup-image-750x1334.png'},{'revision':'79655b22cba15c15e6728fb28780b9c8','url':'assets/apple-touch-startup-image-828x1792.png'},{'revision':'09c8b7d4aa3c010bd7428a648b19c40a','url':'assets/browserconfig.xml'},{'revision':'24bd117feb79704be71e77bad0e6d361','url':'assets/coast-228x228.png'},{'revision':null,'url':'assets/common.68c87bb25f423bbf0529.js'},{'revision':'6b1ee8f8beb55f51a269f7dfe73b387f','url':'assets/common.68c87bb25f423bbf0529.js.LICENSE.txt'},{'revision':'2fbf024f02e89bda18c077564efddc5c','url':'assets/favicon-16x16.png'},{'revision':'29470f4681b1c5ba234d92d36edb0f21','url':'assets/favicon-32x32.png'},{'revision':'83276521deef3a9a4b0d0f17414dbc39','url':'assets/favicon-48x48.png'},{'revision':'267393fcad7fe6b27644a338b5826444','url':'assets/favicon.ico'},{'revision':'9d4835ba38605ef6869d97840b25bf43','url':'assets/firefox_app_128x128.png'},{'revision':'54f26c905ea4ff2ab6af7270eca94755','url':'assets/firefox_app_512x512.png'},{'revision':'d7155de6cde76a5f5c9e554b6e4c91cc','url':'assets/firefox_app_60x60.png'},{'revision':'e0f070deb8ccdf55e39505dd35b24767','url':'assets/home.css'},{'revision':'8f937e6cb8b0041867f5fdd92a877dbe','url':'assets/manifest.json'},{'revision':'fcf1fe66a751ce0617afdff6a45c9dda','url':'assets/manifest.webapp'},{'revision':'dda01c3ad9cd41520e1e57cd1c4a5f6c','url':'assets/mstile-144x144.png'},{'revision':'7e9bbe68b6600696f3bd4c34728682af','url':'assets/mstile-150x150.png'},{'revision':'8509e7e2ef54de9aec54ccdea1e8c790','url':'assets/mstile-310x150.png'},{'revision':'e76fd63fe4a7452fcae6d4ab6f7720c5','url':'assets/mstile-310x310.png'},{'revision':'b4b9e6722b15d2df3c3d30cd9b3cc453','url':'assets/mstile-70x70.png'},{'revision':null,'url':'assets/vendor.91037cbf4b69f83085ef.js'},{'revision':'69d7f24562cacc2f90361b350cdafe4b','url':'assets/vendor.91037cbf4b69f83085ef.js.LICENSE.txt'},{'revision':'9c10c3e1d8b13834620902e87eb3761b','url':'assets/vendors.css'},{'revision':'bdf74913e4208a8dc56a7006b655fdee','url':'assets/yandex-browser-50x50.png'},{'revision':'ed98d1268dd97313e3d1e2053facd924','url':'assets/yandex-browser-manifest.json'},{'revision':'d0e7c52d0283afea39b8a0b59e13591c','url':'favicon.ico'},{'revision':'982261e90f6d90189a42386e68dfb222','url':'home.bundle.js'},{'revision':'d632c7363c46640c62f34a7cc97c4727','url':'manifest.json'}]),function(e){const t=$();Y(new Z(t,e))}(ne),Y((function(e){return"https://fonts.googleapis.com"===e.url.origin}),new se({cacheName:"google-fonts-stylesheets"})),Y((function(e){return"https://fonts.gstatic.com"===e.url.origin}),new ee({cacheName:"google-fonts-webfonts",plugins:[new re({statuses:[0,200]}),new M({maxAgeSeconds:31536e3,maxEntries:30})]})),Y((function(e){var t=e.url;return"https://listacompras-ts.herokuapp.com"===t.origin&&t.pathname.startsWith("/api/v1")}),new se({cacheName:"movie-api-response",plugins:[new re({statuses:[0,200]}),new M({maxEntries:1})]})),Y((function(e){return"image"===e.request.destination}),new ee({cacheName:"images",plugins:[new re({statuses:[0,200]}),new M({maxEntries:60,maxAgeSeconds:2592e3})]})),Y((function(e){var t=e.request;return"script"===t.destination||"style"===t.destination}),new se({cacheName:"static-resources"}))})()})();