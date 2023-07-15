(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{68476:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n,o=r(59499),c=r(4730),a=r(67294),i=r(50029),u=r(87794),s=r.n(u),p=r(68493),f=r.n(p);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}!function(e){e.CONTENT_TYPE="content_type_uid",e.HASH="live_preview"}(n||(n={}));var v,O=function(){var e,t,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},f().livePreview);return null===(e=r.config)||void 0===e||null===(t=e.stackSdk)||void 0===t?void 0:t.live_preview},b=function(){var e,t=O()||{},r=t[n.CONTENT_TYPE],c=t[n.HASH];return r&&c?(e={},(0,o.Z)(e,n.CONTENT_TYPE,r),(0,o.Z)(e,n.HASH,c),e):void 0},g=r(16835),d=r(92777),E=r(82262),R=r(78428),h=r.n(R),y=r(39593),w=r.n(y),P=r(25892),_=r(15832),j=r.n(_),m=r(34155);!function(e){e[e.error=0]="error",e[e.warn=1]="warn",e[e.info=2]="info",e[e.http=3]="http",e[e.verbose=4]="verbose",e[e.debug=5]="debug"}(v||(v={}));var N,T,k,D,S=j().format.printf((function(e){var t=e.level,r=e.message,n=e.timestamp;return"".concat(n," [").concat(t,"]: ").concat(r)})),C=j().createLogger({level:m.env.LOG_LEVEL||"info",format:j().format.json(),transports:[new(j().transports.Console)({format:j().format.combine(j().format.colorize(),j().format.timestamp({format:"DD/MM/YYYY HH:mm:ss"}),S)})]});function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.ROOT="/"}(N||(N={})),function(e){e.NOT_FOUND_SLUG="/404",e.GENERIC_ERROR_SLUG="/error"}(T||(T={})),function(e){e[e.OK=200]="OK",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR"}(k||(k={})),function(e){e.INTERNAL_SERVER_ERROR="Internal Server Error",e.API_ERROR="API Server Error"}(D||(D={}));var Z=6e4*Number(P.Z.cacheTTL)||void 0,I=new(w())({ttl:Z,max:250}),L=function(){function e(t,r){(0,d.Z)(this,e),this.apiAddress=t,this.config=r}return(0,E.Z)(e,[{key:"getPageContent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=A(A({},t),{},{url:encodeURIComponent(e)}),n=Object.keys(r).map((function(e){return"".concat(e,"=").concat(r[e])})).join("&");return this.get("/articleapi/page/?".concat(n))}},{key:"getRedirect",value:function(e){return this.get("/articleapi/redirects/?url=".concat(e))}},{key:"getErrorPageData",value:function(e,t){var r=(0,g.Z)(e,3),n=r[0],o=r[1],c=r[2],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t===k.NOT_FOUND?T.NOT_FOUND_SLUG:T.GENERIC_ERROR_SLUG,u=A(A({},a),{},{url:encodeURIComponent("/".concat([n,o,c,i].join("/").replace(/(\/\/+)/g,"/")))}),s=Object.keys(u).map((function(e){return"".concat(e,"=").concat(u[e])})).join("&");return this.get("/articleapi/page/?".concat(s))}},{key:"getPageUrls",value:function(){return this.get("/articleapi/urls")}},{key:"getDictionary",value:function(e){return this.getCached("/articleapi/dictionary?locale=".concat(e),"dictionary-".concat(e))}},{key:"getCached",value:function(){var e=(0,i.Z)(s().mark((function e(t,r){var n,o,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=I.get(r),o=function(){return C.info("Response to GET request: ".concat(t," is served from ").concat(n?"cache":"network"))},!n){e.next=6;break}return o(),e.abrupt("return",n);case 6:return e.next=8,this.get(t);case 8:return c=e.sent,Z&&I.set(r,c),o(),e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(0),C.error(e.t0),e.abrupt("return",{statusCode:k.INTERNAL_SERVER_ERROR});case 18:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=(0,i.Z)(s().mark((function e(t){var r,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.apiAddress).concat(t),e.prev=1,n={headers:A({},this.config.headers),agent:P.Z.sslCertificate?new(h().Agent)({ca:P.Z.sslCertificate}):void 0},e.next=5,fetch(r,n);case 5:if(null===(o=e.sent)||void 0===o||!o.ok){e.next=11;break}return e.next=9,o.json();case 9:return e.t0=e.sent,e.abrupt("return",{statusCode:200,data:e.t0});case 11:return C.error("failed to GET ".concat(r,": ").concat(null===o||void 0===o?void 0:o.status," ").concat(null===o||void 0===o?void 0:o.statusText)),e.abrupt("return",{statusCode:o.status||k.INTERNAL_SERVER_ERROR});case 15:return e.prev=15,e.t1=e.catch(1),C.error(e.t1),e.abrupt("return",{statusCode:k.INTERNAL_SERVER_ERROR});case 19:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();P.Z.contentApiUrl||C.error("NEXT_PUBLIC_CONTENT_API_URL environment variable is missing");var x=P.Z.contentApiUrl?new L(P.Z.contentApiUrl,{headers:{clientApplicationId:P.Z.clientApplicationId||"sch-com-frontend-ssg",correlationId:P.Z.correlationId||" "}}):null,G=r(20277),H=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().init({enable:P.Z.environment!==G.q.PRODUCTION,ssr:!1,stackDetails:{apiKey:P.Z.contentStackApiKey}});case 3:r(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Unable to setup ContentStack Live Preview");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();!t&&P.Z.environment!==G.q.PRODUCTION&&window&&window.top!==window.self&&e()}),[]),{isLivePreviewEnabled:t}},V=r(69727),Y=r(85893),F=["pageData","pageUrl"];function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B,M=(B=V.default,function(e){var t=e.pageData,r=e.pageUrl,n=(0,c.Z)(e,F),o=function(e,t,r){var n=(0,a.useState)(),o=n[0],c=n[1];return(0,a.useEffect)((function(){var t=function(){var e=(0,i.Z)(s().mark((function e(){var t,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=3;break}return console.error("Preview Data Fetching: ContentApiService is not defined"),e.abrupt("return");case 3:if(!(t=b())){e.next=10;break}return e.next=7,x.getPageContent(r,t);case 7:n=e.sent,o=n.data,c(o);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e&&f().onEntryChange(t)}),[e]),{pageData:o||t}}(H().isLivePreviewEnabled,t,r),u=o.pageData;return(0,Y.jsx)(B,q(q({},n),{},{pageData:u,pageUrl:r}))})},52361:function(){},94616:function(){},85811:function(){},62828:function(){}}]);