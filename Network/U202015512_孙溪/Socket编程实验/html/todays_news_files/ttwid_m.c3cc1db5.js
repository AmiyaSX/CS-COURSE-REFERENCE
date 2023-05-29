(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"016bea25580286dfc02a":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3"),i=n("a988b1c7716034685283"),o=n("5e1ea3455275b289e48e"),a=n("c2d8fd62e4f3cf961c32");var s=function e(t){var n=new o(t),s=i(o.prototype.request,n);return r.extend(s,o.prototype,n),r.extend(s,n),s.create=function(n){return e(a(t,n))},s}(n("bceddd70738dbacc20d1"));s.Axios=o,s.Cancel=n("d251bd67b520a4a53908"),s.CancelToken=n("30c3b06667f1bf67805d"),s.isCancel=n("4e53c24c61c1f8b8e30f"),s.VERSION=n("b26ce0e6dcfffee9eb8c").version,s.all=function(e){return Promise.all(e)},s.spread=n("03d97c40ea2427ef8b75"),s.isAxiosError=n("8e2c355b1719db1869b7"),e.exports=s,e.exports.default=s},"026e71eed8acc30ef216":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},"03d97c40ea2427ef8b75":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"14866002d3d6a00b53bf":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},"1a2d4c008cd78aac538b":function(e,t,n){"use strict";var r=n("5446642b3f74a9a85754"),i=n("fb7b9bdc54ff99dce3e8");e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},"1b30e41da96dce4cd25d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("d7c625d1f2819028b697"),i=r.__importDefault(n("39f523333f735579fc47")),o=r.__importStar(n("d318af27ff31345f07e9")),a={timeout:3e3,withCredentials:!0,headers:{"content-type":"application/x-www-form-urlencoded"}};t.collectFingerprintInfo=function(){return r.__awaiter(void 0,void 0,void 0,(function(){var e,t,n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,o.get()];case 1:return e=r.sent(),t={},n=o.hashComponents(e),Object.keys(e).forEach((function(n){t[n]=e[n].value||""})),[2,{info:t,id:n}]}}))}))};t.reportFingerprintInfo=function(e){var n;n=function(){!function(e){r.__awaiter(void 0,void 0,void 0,(function(){var n,o,s,c,u,f,l;return r.__generator(this,(function(r){switch(r.label){case 0:n=e.aid,o=e.host,s=void 0===o?"":o,r.label=1;case 1:return r.trys.push([1,5,,6]),[4,t.collectFingerprintInfo()];case 2:return c=r.sent(),u=c.info,(f=c.id)&&u?[4,i.default.post(s+"/ttwid/report_fingerprint/",{aid:n,fingerprint_values:u,fingerprint_id:f},a)]:[3,4];case 3:if(0!==(l=r.sent()).data.status_code)throw new Error(l.data.message);return[2,l.data||l];case 4:throw new Error("\u83b7\u53d6\u6307\u7eb9\u4fe1\u606f\u5931\u8d25");case 5:throw r.sent();case 6:return[2]}}))}))}(e)},"undefined"!=typeof window&&window.requestIdleCallback?window.requestIdleCallback(n):setTimeout(n,50)}},"30c3b06667f1bf67805d":function(e,t,n){"use strict";var r=n("d251bd67b520a4a53908");function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},"3131ea310f085a58fdc6":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3"),i=n("e334ced7f0d334e0434e"),o=n("363d70d6b9ee68700b88"),a=n("df2f2f4c6b3f2ec7e4c9"),s=n("1a2d4c008cd78aac538b"),c=n("026e71eed8acc30ef216"),u=n("6e915c7df6680c292819"),f=n("72616e3bc2cf53ffb5db"),l=n("625140c87b462f6b0b97"),d=n("d251bd67b520a4a53908");e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,b=e.headers,v=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete b["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";b.Authorization="Basic "+btoa(y+":"+w)}var _=s(e.baseURL,e.url);function E(){if(m){var r="getAllResponseHeaders"in m?c(m.getAllResponseHeaders()):null,o={data:v&&"text"!==v&&"json"!==v?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};i((function(e){t(e),g()}),(function(e){n(e),g()}),o),m=null}}if(m.open(e.method.toUpperCase(),a(_,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,"onloadend"in m?m.onloadend=E:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(E)},m.onabort=function(){m&&(n(f("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){n(f("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var O=(e.withCredentials||u(_))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;O&&(b[e.xsrfHeaderName]=O)}"setRequestHeader"in m&&r.forEach(b,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete b[t]:m.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),v&&"json"!==v&&(m.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){m&&(n(!e||e&&e.type?new d("canceled"):e),m.abort(),m=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),m.send(h)}))}},"363d70d6b9ee68700b88":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"3918643e305afe52a3ec":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.create;Object.create},"39f523333f735579fc47":function(e,t,n){e.exports=n("016bea25580286dfc02a")},"3cf299e99735608af1c3":function(e,t,n){"use strict";var r=n("a988b1c7716034685283"),i=Object.prototype.toString;function o(e){return Array.isArray(e)}function a(e){return void 0===e}function s(e){return"[object ArrayBuffer]"===i.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:o,isArrayBuffer:s,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===i.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&s(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:f,isStream:function(e){return c(e)&&f(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===i.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},"4e53c24c61c1f8b8e30f":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"5446642b3f74a9a85754":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},"58da1a5d9cfce2d8f8bb":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3"),i=n("bceddd70738dbacc20d1");e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},"596f4d1227b3cfbbfe97":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return c}));var r=n("3918643e305afe52a3ec"),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function o(e){return a(void 0,e)}function a(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=a(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function u(){return"object"==typeof self&&self.self===self}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var f=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,l.prototype.create),o}return Object(r.b)(t,e),t}(Error),l=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?d(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new f(i,s,r);return c},e}();function d(e,t){return e.replace(p,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var p=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=f^c&(u^f),a=1518500249):(o=c^u^f,a=1859775393):r<60?(o=c&u|f&(c|u),a=2400959708):(o=c^u^f,a=3395469782);i=(s<<5|s>>>27)+o+l+a+n[r]&4294967295;l=f,f=u,u=4294967295&(c<<30|c>>>2),c=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();function b(e,t){var n=new v(e,t);return n.subscribe.bind(n)}var v=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=g),void 0===r.error&&(r.error=g),void 0===r.complete&&(r.complete=g);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function g(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}).call(this,n("689ab41c75df387dee18"))},"5b55e0aba96216f987a5":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3"),i=n("58da1a5d9cfce2d8f8bb"),o=n("4e53c24c61c1f8b8e30f"),a=n("bceddd70738dbacc20d1"),s=n("d251bd67b520a4a53908");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"5e1ea3455275b289e48e":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3"),i=n("df2f2f4c6b3f2ec7e4c9"),o=n("c7161dcd8009df785cd1"),a=n("5b55e0aba96216f987a5"),s=n("c2d8fd62e4f3cf961c32"),c=n("87156728808ebe8c4a52"),u=c.validators;function f(e){this.defaults=e,this.interceptors={request:new o,response:new o}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!i){var l=[a,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(f),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var d=t;r.length;){var p=r.shift(),h=r.shift();try{d=p(d)}catch(b){h(b);break}}try{o=a(d)}catch(b){return Promise.reject(b)}for(;f.length;)o=o.then(f.shift(),f.shift());return o},f.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=f},"625140c87b462f6b0b97":function(e,t,n){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},"6545c16b3a13a6ca4ee7":function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},"6a69aa1ae723b5d1f894":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.COOKIE_READ_DEFAULT=0]="COOKIE_READ_DEFAULT",e[e.COOKIE_READ_TEA_PRIOR=1]="COOKIE_READ_TEA_PRIOR"}(t.CookieReadConfigEnum||(t.CookieReadConfigEnum={}))},"6e915c7df6680c292819":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"72616e3bc2cf53ffb5db":function(e,t,n){"use strict";var r=n("6545c16b3a13a6ca4ee7");e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},"87156728808ebe8c4a52":function(e,t,n){"use strict";var r=n("b26ce0e6dcfffee9eb8c").version,i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};i.transitional=function(e,t,n){return function(i,a,s){if(!1===e)throw new Error(function(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}(a," has been removed"+(t?" in "+t:"")));return t&&!o[a]&&(o[a]=!0),!e||e(i,a,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],a=t[o];if(a){var s=e[o],c=void 0===s||a(s,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}},validators:i}},"8e2c355b1719db1869b7":function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},"9b6650a046270e743bbd":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("d7c625d1f2819028b697").__importDefault(n("7a1eeed1211a72788b85")).default.polyfill();var r=n("bb01eee5d2c2fa334b83");t.TtWid=r.TtWid},a5cb17dbac5a1e7b36d8:function(e,t,n){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.create;Object.create;var i,o=n("596f4d1227b3cfbbfe97"),a=n("b2d4a2ee514d4fdd698f");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function s(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c,u=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(c||(c={}));var f,l={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},d=c.INFO,p=((i={})[c.DEBUG]="log",i[c.VERBOSE]="log",i[c.INFO]="info",i[c.WARN]="warn",i[c.ERROR]="error",i),h=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){(new Date).toISOString();var i=p[t];if(!i)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")")}},b=function(){function e(e){this.name=e,this._logLevel=d,this._logHandler=h,this._userLogHandler=null,u.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in c))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?l[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.DEBUG],e)),this._logHandler.apply(this,s([this,c.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.VERBOSE],e)),this._logHandler.apply(this,s([this,c.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.INFO],e)),this._logHandler.apply(this,s([this,c.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.WARN],e)),this._logHandler.apply(this,s([this,c.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,s([this,c.ERROR],e)),this._logHandler.apply(this,s([this,c.ERROR],e))},e}();function v(e){u.forEach((function(t){t.setLogLevel(e)}))}var g,m=((f={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",f["bad-app-name"]="Illegal App name: '{$appName}",f["duplicate-app"]="Firebase App named '{$appName}' already exists",f["app-deleted"]="Firebase App named '{$appName}' already deleted",f["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",f["invalid-log-argument"]="First argument to `onLog` must be null or a function.",f),y=new o.b("app","Firebase",m),w=((g={})["@firebase/app"]="fire-core",g["@firebase/analytics"]="fire-analytics",g["@firebase/app-check"]="fire-app-check",g["@firebase/auth"]="fire-auth",g["@firebase/database"]="fire-rtdb",g["@firebase/functions"]="fire-fn",g["@firebase/installations"]="fire-iid",g["@firebase/messaging"]="fire-fcm",g["@firebase/performance"]="fire-perf",g["@firebase/remote-config"]="fire-rc",g["@firebase/storage"]="fire-gcs",g["@firebase/firestore"]="fire-fst",g["fire-js"]="fire-js",g["firebase-wrapper"]="fire-js-all",g),_=new b("@firebase/app"),E=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=Object(o.f)(e),this.container=new a.b(t.name),this._addComponent(new a.a("app",(function(){return r}),"PUBLIC")),this.firebase_.INTERNAL.components.forEach((function(e){return r._addComponent(e)}))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t="[DEFAULT]"),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t="[DEFAULT]"),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){_.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw y.create("app-deleted",{appName:this.name_})},e}();E.prototype.name&&E.prototype.options||E.prototype.delete;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={});if("object"!=typeof i||null===i){i={name:i}}var a=i;void 0===a.name&&(a.name="[DEFAULT]");var s=a.name;if("string"!=typeof s||!s)throw y.create("bad-app-name",{appName:String(s)});if(Object(o.d)(t,s))throw y.create("duplicate-app",{appName:s});var c=new e(n,a,r);return t[s]=c,c},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-"+n);var o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){var u=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&u.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&c&&u.push("and"),c&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void _.warn(u.join(" "))}s(new a.a(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:v,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw y.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=l[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:c[n].toLowerCase(),message:a,args:i,type:t.name})}},r=0,i=u;r<i.length;r++){n(i[r])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t)},apps:null,SDK_VERSION:"8.5.0",INTERNAL:{registerComponent:s,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function i(e){if(e=e||"[DEFAULT]",!Object(o.d)(t,e))throw y.create("no-app",{appName:e});return t[e]}function s(a){var s=a.name;if(n.has(s))return _.debug("There were multiple attempts to register component "+s+"."),"PUBLIC"===a.type?r[s]:null;if(n.set(s,a),"PUBLIC"===a.type){var c=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[s])throw y.create("invalid-app-argument",{appName:s});return e[s]()};void 0!==a.serviceProps&&Object(o.g)(c,a.serviceProps),r[s]=c,e.prototype[s]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this._getService.bind(this,s);return n.apply(this,a.multipleInstances?e:[])}}for(var u=0,f=Object.keys(t);u<f.length;u++){var l=f[u];t[l]._addComponent(a)}return"PUBLIC"===a.type?r[s]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I=function e(){var t=O(E);return t.INTERNAL=r(r({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(o.g)(t,e)},createSubscribe:o.e,ErrorFactory:o.b,deepExtend:o.g}),t}(),S=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if(Object(o.h)()&&void 0!==self.firebase){_.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var C=self.firebase.SDK_VERSION;C&&C.indexOf("LITE")>=0&&_.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var A=I.initializeApp;I.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(o.i)()&&_.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),A.apply(void 0,e)};var j,k,x=I;(j=x).INTERNAL.registerComponent(new a.a("platform-logger",(function(e){return new S(e)}),"PRIVATE")),j.registerVersion("@firebase/app","0.6.21",k),j.registerVersion("fire-js","");t.a=x},a8770dcd7d66c1d1ad96:function(e,t,n){"use strict";n.r(t);var r=n("a5cb17dbac5a1e7b36d8");n.d(t,"default",(function(){return r.a}));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.a.registerVersion("firebase","8.5.0","app")},a988b1c7716034685283:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},b26ce0e6dcfffee9eb8c:function(e,t){e.exports={version:"0.26.1"}},b2d4a2ee514d4fdd698f:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;function a(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function c(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var u=n("596f4d1227b3cfbbfe97"),f=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),l=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Set}return e.prototype.get=function(e){void 0===e&&(e="[DEFAULT]");var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new u.a;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=r({identifier:"[DEFAULT]",optional:!1},e),n=t.identifier,i=t.optional,o=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(o)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:o})}catch(a){if(i)return null;throw a}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(d){}try{for(var r=a(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=s(i.value,2),c=o[0],u=o[1],f=this.normalizeInstanceIdentifier(c);try{var l=this.getOrInitializeService({instanceIdentifier:f});u.resolve(l)}catch(d){}}}catch(p){t={error:p}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return i(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(c(c([],s(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),s(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.instanceIdentifier,i=void 0===r?"[DEFAULT]":r,o=e.options,c=void 0===o?{}:o,u=this.normalizeInstanceIdentifier(i);if(this.isInitialized(u))throw Error(this.name+"("+u+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var f=this.getOrInitializeService({instanceIdentifier:u,options:c});try{for(var l=a(this.instancesDeferred.entries()),d=l.next();!d.done;d=l.next()){var p=s(d.value,2),h=p[0],b=p[1];u===this.normalizeInstanceIdentifier(h)&&b.resolve(f)}}catch(v){t={error:v}}finally{try{d&&!d.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return this.invokeOnInitCallbacks(f,u),f},e.prototype.onInit=function(e){var t=this;return this.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r;try{for(var i=a(this.onInitCallbacks),o=i.next();!o.done;o=i.next()){var s=o.value;try{s(e,t)}catch(c){}}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,o),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(a){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var d=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new l(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},bb01eee5d2c2fa334b83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("d7c625d1f2819028b697"),i=r.__importDefault(n("214eccfc06814c553a3c")),o=n("fd2ad04623398cb0b031"),a=n("6a69aa1ae723b5d1f894"),s={timeout:3e3,withCredentials:!0,headers:{"content-type":"application/x-www-form-urlencoded"}},c={apiKey:"AIzaSyCuM3x-qGZoez2mBUq1_RcNrRFysHdRxfY",authDomain:"byted-ucenter.firebaseapp.com",databaseURL:"https://byted-ucenter.firebaseio.com",projectId:"byted-ucenter",storageBucket:"byted-ucenter.appspot.com",messagingSenderId:"995120244681",appId:"1:995120244681:web:d175caeb43de4353deea18"},u=function(){function e(e){var t=this;this.host="",this.installations=null,this.fid="",this.autoReportFingerprint=!1,void 0===e.union&&(e.union=!0),void 0===e.needFid&&(e.needFid=!0),e.host&&(this.host=e.host),e&&e.headers&&(e.headers["content-type"]="application/x-www-form-urlencoded",s.headers=e.headers,delete e.headers),this.autoReportFingerprint=e.autoReportFingerprint||!1,e&&e.timeout&&(s.timeout=e.timeout,delete e.timeout),this.options=e;try{if(e.needFid){var r=n("a8770dcd7d66c1d1ad96");n("c5ee3a311b266595ccc9");var i=r.initializeApp(c,"byted-webapp-register").installations();i&&(this.installations=i,i.getId().then((function(e){void 0===e&&(e=""),t.fid=e})))}}catch(o){}}return e.prototype.checkWebId=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,o,c,u,f,l,d,p;return r.__generator(this,(function(h){switch(h.label){case 0:return h.trys.push([0,12,,13]),t=e||a.CookieReadConfigEnum.COOKIE_READ_DEFAULT,n="",this.options.needFid?(o=this.fid)?[3,2]:[4,this.getInstanceId()]:[3,3];case 1:o=h.sent(),h.label=2;case 2:n=o,h.label=3;case 3:return[4,i.default.post(this.host+"/ttwid/check/",r.__assign(r.__assign({},this.options),{fid:n,migrate_priority:t}),s)];case 4:if(c=h.sent(),u=c.data,l=(f=void 0===u?null:u)||c,!(f&&f.status_code>1001))return[3,11];d=f.migrate_info,h.label=5;case 5:return h.trys.push([5,10,,11]),this.options.union?[4,this.registerUnionWebId({migrate_info:d,fid:n})]:[3,7];case 6:return p=h.sent(),l=p,[3,9];case 7:return[4,this.registerOpenWebId({migrate_info:d,fid:n})];case 8:p=h.sent(),l=p,h.label=9;case 9:return[3,11];case 10:return h.sent(),[2,f||c];case 11:return this.autoReportFingerprint&&this.reportFingerprintInfo(),[2,l];case 12:throw h.sent();case 13:return[2]}}))}))},e.prototype.checkWebIdFromTea=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t,n,i,o;return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e=localStorage&&localStorage.getItem("__tea_cache_tokens_"+this.options.aid)||"",t=e&&JSON.parse(e)||{},n=t.web_id,(i=void 0===n?"":n)&&(o=new Date(Date.now()+864e5).toUTCString(),document.cookie="_tea_web_id="+i+"; expires="+o+"; path=/;"),[4,this.checkWebId(a.CookieReadConfigEnum.COOKIE_READ_TEA_PRIOR)];case 1:return[2,r.sent()];case 2:throw r.sent();case 3:return[2]}}))}))},e.prototype.registerUnionWebId=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,a,c,u,f,l,d,p,h,b,v;return r.__generator(this,(function(g){switch(g.label){case 0:return g.trys.push([0,6,,7]),n=this.options,o=n.unionHost,a=void 0===o?"":o,c=n.cbUrlProtocol,u=void 0===c?"":c,[4,i.default.post(a+"/ttwid/union/register/",r.__assign(r.__assign({},this.options),e),s)];case 1:if(f=g.sent(),l=f.data,!(d=void 0===l?null:l)||!d.redirect_url)return[3,5];g.label=2;case 2:return g.trys.push([2,4,,5]),p=d.redirect_url,u&&p&&(p=p.replace(/^https?/,u)),[4,i.default.get(p,s)];case 3:return h=g.sent(),t?[2,t(null,h.data||{})]:[2,h.data||{}];case 4:return b=g.sent(),t?[2,t(b,d||{})]:[2,d];case 5:if(t)return[2,t(new Error("ttwid union register error"))];throw new Error("ttwid union register error");case 6:if(v=g.sent(),t)return[2,t(v)];throw v;case 7:return[2]}}))}))},e.prototype.registerOpenWebId=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,i.default.post(this.host+"/ttwid/register/",r.__assign(r.__assign({},this.options),e),s)];case 1:return[2,t.sent().data];case 2:throw t.sent();case 3:return[2]}}))}))},e.prototype.getInstanceId=function(){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(t){return this.installations?[2,new Promise((function(t,n){return r.__awaiter(e,void 0,void 0,(function(){var e,n;return r.__generator(this,(function(r){switch(r.label){case 0:setTimeout((function(){t("")}),2e3),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.installations.getId()];case 2:return e=r.sent(),this.fid=e||"",t(e||""),[3,4];case 3:throw n=r.sent(),this.fid="",n;case 4:return[2]}}))}))}))]:[2,""]}))}))},e.prototype.deleteInstallation=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){try{this.installations&&this.installations.delete()}catch(t){throw t}return[2]}))}))},e.prototype.collectFingerprintInfo=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,o.collectFingerprintInfo()];case 1:return[2,e.sent()]}}))}))},e.prototype.reportFingerprintInfo=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,o.reportFingerprintInfo({aid:this.options.aid,host:this.host})];case 1:return[2,e.sent()]}}))}))},e}();t.TtWid=u},bceddd70738dbacc20d1:function(e,t,n){"use strict";(function(t){var r=n("3cf299e99735608af1c3"),i=n("14866002d3d6a00b53bf"),o=n("6545c16b3a13a6ca4ee7"),a=n("625140c87b462f6b0b97"),s={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(u=n("3131ea310f085a58fdc6")),u),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a){if("SyntaxError"===s.name)throw o(s,this,"E_JSON_PARSE");throw s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(s)})),e.exports=f}).call(this,n("ba0a6abf92c21dfb6c40"))},c2d8fd62e4f3cf961c32:function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},c5ee3a311b266595ccc9:function(e,t,n){"use strict";n.r(t);var r=n("a5cb17dbac5a1e7b36d8"),i=n("b2d4a2ee514d4fdd698f");var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}Object.create;function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}Object.create;var f,l=n("596f4d1227b3cfbbfe97"),d=n("2c5a5ea9b95521ddc6f6"),p=((f={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',f["not-registered"]="Firebase Installation is not registered.",f["installation-not-found"]="Firebase Installation not found.",f["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',f["app-offline"]="Could not process request. Application offline.",f["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",f),h=new l.b("installations","Installations",p);function b(e){return e instanceof l.c&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function g(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function m(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,h.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function y(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function w(e,t){var n=t.refreshToken,r=y(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)),r}function _(e){return a(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function E(e,t){var n=t.fid;return a(this,void 0,void 0,(function(){var t,r,i,o,a,c;return s(this,(function(s){switch(s.label){case 0:return t=v(e),r=y(e),i={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.26"},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,_((function(){return fetch(t,o)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return c=s.sent(),[2,{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:g(c.authToken)}];case 3:return[4,m("Create Installation",a)];case 4:throw s.sent()}}))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return btoa(String.fromCharCode.apply(String,function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}([],u(e)))).replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S=/^[cdef][\w-]{21}$/;function C(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return I(e).substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return S.test(t)?t:""}catch(n){return""}}function A(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j=new Map;function k(e,t){var n=A(e);x(n,t),function(e,t){var n=N();n&&n.postMessage({key:e,fid:t});R()}(n,t)}function x(e,t){var n,r,i=j.get(e);if(i)try{for(var o=c(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(s){n={error:s}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var T=null;function N(){return!T&&"BroadcastChannel"in self&&((T=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){x(e.data.key,e.data.fid)}),T}function R(){0===j.size&&T&&(T.close(),T=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,L="firebase-installations-store",D=null;function F(){return D||(D=Object(d.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(L)}}))),D}function U(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,a;return s(this,(function(s){switch(s.label){case 0:return n=A(e),[4,F()];case 1:return r=s.sent(),i=r.transaction(L,"readwrite"),[4,(o=i.objectStore(L)).get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||k(e,t.fid),[2,t]}}))}))}function z(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(i){switch(i.label){case 0:return t=A(e),[4,F()];case 1:return n=i.sent(),[4,(r=n.transaction(L,"readwrite")).objectStore(L).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function B(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,a,c;return s(this,(function(s){switch(s.label){case 0:return n=A(e),[4,F()];case 1:return r=s.sent(),i=r.transaction(L,"readwrite"),[4,(o=i.objectStore(L)).get(n)];case 2:return a=s.sent(),void 0!==(c=t(a))?[3,4]:[4,o.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,o.put(c,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!c||a&&a.fid===c.fid||k(e,c.fid),[2,c]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(i){switch(i.label){case 0:return[4,B(e,(function(n){var r=function(e){return V(e||{fid:C(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(h.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,E(e,t)];case 1:return n=i.sent(),[2,U(e,n)];case 2:return b(r=i.sent())&&409===r.customData.serverCode?[4,z(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,U(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:H(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function H(e){return a(this,void 0,void 0,(function(){var t,n,r,i;return s(this,(function(o){switch(o.label){case 0:return[4,M(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,O(100)];case 3:return o.sent(),[4,M(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,q(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function M(e){return B(e,(function(e){if(!e)throw h.create("installation-not-found");return V(e)}))}function V(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function W(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return a(this,void 0,void 0,(function(){var e,i,o,a,c,u,f;return s(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid;return v(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,t),i=w(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:"w:0.4.26"}},c={method:"POST",headers:i,body:JSON.stringify(a)},[4,_((function(){return fetch(e,c)}))];case 1:return(u=s.sent()).ok?[4,u.json()]:[3,3];case 2:return f=s.sent(),[2,g(f)];case 3:return[4,m("Generate Auth Token",u)];case 4:throw s.sent()}}))}))}function J(e,t){return void 0===t&&(t=!1),a(this,void 0,void 0,(function(){var n,r,i;return s(this,(function(c){switch(c.label){case 0:return[4,B(e.appConfig,(function(r){if(!K(r))throw h.create("not-registered");var i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=function(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){switch(i.label){case 0:return[4,$(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,O(100)];case 3:return i.sent(),[4,$(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,J(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw h.create("app-offline");var c=function(e){var t={requestStatus:1,requestTime:Date.now()};return o(o({},e),{authToken:t})}(r);return n=function(e,t){return a(this,void 0,void 0,(function(){var n,r,i;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,W(e,t)];case 1:return n=a.sent(),i=o(o({},t),{authToken:n}),[4,U(e.appConfig,i)];case 2:return a.sent(),[2,n];case 3:return!b(r=a.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,z(e.appConfig)];case 4:return a.sent(),[3,7];case 5:return i=o(o({},t),{authToken:{requestStatus:0}}),[4,U(e.appConfig,i)];case 6:a.sent(),a.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,c),c}))];case 1:return r=c.sent(),n?[4,n]:[3,3];case 2:return i=c.sent(),[3,4];case 3:i=r.authToken,c.label=4;case 4:return[2,i]}}))}))}function $(e){return B(e,(function(e){if(!K(e))throw h.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+1e4<Date.now()?o(o({},e),{authToken:{requestStatus:0}}):e}))}function K(e){return void 0!==e&&2===e.registrationStatus}function G(e){return a(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return[4,q(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o;return s(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid;return v(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t),r=w(e,t),i={method:"DELETE",headers:r},[4,_((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,m("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e,t){var n=e.appConfig;return function(e,t){N();var n=A(e),r=j.get(n);r||(r=new Set,j.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=A(e),r=j.get(n);r&&(r.delete(t),0===r.size&&j.delete(n),R())}(n,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return h.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(P=r.a).INTERNAL.registerComponent(new i.a("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");try{for(var r=c(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Z(o)}}catch(a){t={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(i){switch(i.label){case 0:return[4,q(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):J(e).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),a(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,G(e.appConfig)];case 1:return n.sent(),[4,J(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return a(this,void 0,void 0,(function(){var t,n;return s(this,(function(r){switch(r.label){case 0:return[4,B(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw h.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw h.create("app-offline");case 3:return[4,X(t,n)];case 4:return r.sent(),[4,z(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return Y(n,e)}}}),"PUBLIC")),P.registerVersion("@firebase/installations","0.4.26")},c7161dcd8009df785cd1:function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},d251bd67b520a4a53908:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},df2f2f4c6b3f2ec7e4c9:function(e,t,n){"use strict";var r=n("3cf299e99735608af1c3");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},e334ced7f0d334e0434e:function(e,t,n){"use strict";var r=n("72616e3bc2cf53ffb5db");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},fb7b9bdc54ff99dce3e8:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},fd2ad04623398cb0b031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("d7c625d1f2819028b697").__exportStar(n("1b30e41da96dce4cd25d"),t)}}]);
//# sourceMappingURL=ttwid_m.c3cc1db5.js.map