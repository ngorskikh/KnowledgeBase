"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4519],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,g=s["".concat(d,".").concat(f)]||s[f]||c[f]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const l={title:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",sidebar_position:1},o=void 0,i={unversionedId:"general/ad-filtering/how-ad-blocking-works",id:"general/ad-filtering/how-ad-blocking-works",title:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",description:"\u0412 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u0432 AdGuard \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043d\u0438\u0445 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0441\u0432\u043e\u0438\u043c\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u041d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0438\u0445 \u0432\u0441\u0435\u0445 \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u0438 \u0442\u0440\u0435\u043a\u0435\u0440\u044b. \u042d\u0442\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0438\u0437\u043d\u0443\u0442\u0440\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/general/ad-filtering/how-ad-blocking-works.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/how-ad-blocking-works",permalink:"/KnowledgeBase/ru/general/ad-filtering/how-ad-blocking-works",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/how-ad-blocking-works.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/KnowledgeBase/ru/"},next:{title:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b AdGuard",permalink:"/KnowledgeBase/ru/general/ad-filtering/adguard-filters"}},d={},u=[{value:"\u041e\u0431\u0449\u0438\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",id:"\u043e\u0431\u0449\u0438\u0435-\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",level:2},{value:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b",id:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b",level:2},{value:"\u0422\u0438\u043f\u044b \u043f\u0440\u0430\u0432\u0438\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",id:"\u0442\u0438\u043f\u044b-\u043f\u0440\u0430\u0432\u0438\u043b-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",level:2},{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043f\u0440\u0430\u0432\u0438\u043b\u0430-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438",level:3},{value:"\u041a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430",id:"\u043a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043f\u0440\u0430\u0432\u0438\u043b\u0430",level:3},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 HTML",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438-html",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0412 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u043e\u0432 AdGuard \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c, \u0438 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043d\u0438\u0445 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0441\u0432\u043e\u0438\u043c\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u041d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0438\u0445 \u0432\u0441\u0435\u0445 \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u0438 \u0442\u0440\u0435\u043a\u0435\u0440\u044b. \u042d\u0442\u0430 \u0441\u0442\u0430\u0442\u044c\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0438\u0437\u043d\u0443\u0442\u0440\u0438."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0412 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435 \u043c\u044b \u043d\u0435 \u043a\u0430\u0441\u0430\u0435\u043c\u0441\u044f DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438. \u042d\u0442\u043e \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043c\u0438 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043c\u0438. \u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435, \u0447\u0442\u043e\u0431\u044b ",(0,a.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work"},"\u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"),".")),(0,a.kt)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w",title:"\u0412\u0438\u0434\u0435\u043e\u043f\u043b\u0435\u0435\u0440 YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"\u043e\u0431\u0449\u0438\u0435-\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"},"\u041e\u0431\u0449\u0438\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"),(0,a.kt)("p",null,"\u0412 \u043e\u0441\u043d\u043e\u0432\u0435 \u043b\u044e\u0431\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u043b\u0435\u0436\u0430\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u044b. \u0424\u0438\u043b\u044c\u0442\u0440\u044b \u2014 \u044d\u0442\u043e \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0438\u0441\u043a\u0438 \u043f\u0440\u0430\u0432\u0438\u043b, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u043e\u043c. \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442 \u044d\u0442\u043e\u0442 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441. \u041e\u043d\u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u044e\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430 \u0438\u0445 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u044e\u0442 \u0442\u0435 \u0438\u043b\u0438 \u0438\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0432\u0435\u0431-\u0442\u0440\u0430\u0444\u0438\u043a\u043e\u043c: \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u0432\u0438\u0434 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0438 \u0442. \u0434."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png",alt:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b"})),(0,a.kt)("h2",{id:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u044b, \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u043d\u0430\u0434\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043e\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0449\u0438\u0445 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432."),(0,a.kt)("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u044b, \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0441\u0430\u043c\u0438 \u0441\u043e\u0431\u043e\u0439. \u041e\u043d\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043a\u0440\u043e\u043f\u043e\u0442\u043b\u0438\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432, \u043a\u0430\u043a \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432, \u0442\u0430\u043a \u0438 \u0432\u043e\u043b\u043e\u043d\u0442\u0451\u0440\u043e\u0432. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b (\u0442\u0430\u043a\u0438\u0435, \u043a\u0430\u043a \xab\u200e\u0416\u0443\u0440\u043d\u0430\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438\xbb\u200e), \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c, \u043a\u0430\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0438\u043b\u0438 \u0442\u0440\u0435\u043a\u0435\u0440\u0430. \u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u0443\u043f\u0440\u043e\u0449\u0451\u043d\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430: \u0432 \u043e\u0441\u043e\u0431\u043e \u0442\u0440\u0443\u0434\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0430\u0432\u0438\u043b, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0433\u043e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442."),(0,a.kt)("p",null,"\u0414\u0430\u0436\u0435 \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0444\u0438\u043b\u044c\u0442\u0440, \u043e\u043d\u043e \u043d\u0435 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0442\u0430\u043c \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430. \u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u0438 \u0441\u043f\u043e\u0441\u043e\u0431 \u0435\u0451 \u043f\u043e\u0434\u0430\u0447\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f, \u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0432\u0441\u043b\u0435\u0434 \u0437\u0430 \u043d\u0438\u043c\u0438. \u0418\u043d\u043e\u0433\u0434\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0430\u044e\u0442, \u0438\u043d\u043e\u0433\u0434\u0430 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u0430\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430 \u0438 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430, \u0430 \u0438\u043d\u043e\u0433\u0434\u0430 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c. \u0424\u0438\u043b\u044c\u0442\u0440\u044b \u0447\u0430\u0441\u0442\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c, \u043d\u043e \u0434\u0430\u0436\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442. \u0412\u043e\u0442 \u043f\u043e\u0447\u0435\u043c\u0443 \u043c\u043d\u043e\u0433\u0438\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0438\u043c\u0435\u044e\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b, \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0449\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043b\u0435\u0433\u043a\u043e \u0441\u043e\u043e\u0431\u0449\u0430\u0442\u044c \u043e \u043b\u044e\u0431\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0445 \u0441 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u043c\u0438, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043e\u043d\u0438 \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u044e\u0442\u0441\u044f."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png",alt:"\u0421\u0445\u0435\u043c\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430"})),(0,a.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 AdGuard ",(0,a.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"\u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u043e\u0442\u0447\u0451\u0442\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0431-\u0443\u0442\u0438\u043b\u0438\u0442\u044b"),". \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0436\u0430\u043b\u043e\u0431\u0430\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432, \u0430 \u043d\u0435 \u043d\u0430 \u043f\u043e\u0438\u0441\u043a\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u043f\u043e \u0432\u0441\u0435\u0439 \u0441\u0435\u0442\u0438."),(0,a.kt)("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0442\u0440\u0435\u043a\u0435\u0440\u043e\u0432, \u0432\u0438\u0434\u0436\u0435\u0442\u043e\u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u0435\u0439, \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u0440\u043e\u0434\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e \u043a\u0443\u043a\u0438 \u0438 \u0442. \u0434. \u0420\u0430\u0437\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e \u043f\u043e\u0434 \u0441\u0432\u043e\u0438 \u043d\u0443\u0436\u0434\u044b. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0430\u0439\u0442\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,a.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"filterlists.com"),", \u0433\u0434\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u044b \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432."),(0,a.kt)("p",null,"\u041c\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c \u0441\u0432\u043e\u0439 ",(0,a.kt)("a",{parentName:"p",href:"../adguard-filters"},"\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0432\u043d\u0443\u0442\u0440\u0438 AdGuard, \u0442\u0430\u043a \u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430\u043c\u0438."),(0,a.kt)("h2",{id:"\u0442\u0438\u043f\u044b-\u043f\u0440\u0430\u0432\u0438\u043b-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"},"\u0422\u0438\u043f\u044b \u043f\u0440\u0430\u0432\u0438\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0434\u043e\u0432 \u043f\u0440\u0430\u0432\u0438\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438, \u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0445 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0446\u0435\u043b\u044f\u043c. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0432\u0430\u043c\u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0438 \u0432 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u0430\u0448\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u0442\u0435 \u0438\u043b\u0438 \u0438\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0440\u0430\u0432\u0438\u043b \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f."),(0,a.kt)("h3",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043f\u0440\u0430\u0432\u0438\u043b\u0430-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b \u0443\u0432\u0438\u0434\u0435\u043b\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0438\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0435\u0451 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0438\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0435\u0431-\u0437\u0430\u043f\u0440\u043e\u0441. \u0421\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u2014 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441, \u0442\u0430\u043a \u0447\u0442\u043e \u043e\u043d \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0451\u0442 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u0430 \u0437\u043d\u0430\u0447\u0438\u0442, \u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u0430 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0441\u044f."),(0,a.kt)("p",null,"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0438\u0437 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 AdGuard \u043c\u043e\u0433\u0443\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0435\u0431-\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438. \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u2014 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0432 \u043f\u043b\u0430\u043d\u0435 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b, \u043d\u043e \u0443 \u043d\u0435\u0433\u043e \u0435\u0441\u0442\u044c \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438. \u0421\u0430\u043c\u044b\u0439 \u043e\u0447\u0435\u0432\u0438\u0434\u043d\u044b\u0439 \u0438\u0437 \u0432\u0441\u0435\u0445 \u2014 \u043d\u0430 \u043c\u0435\u0441\u0442\u0435 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u043c\u043e\u0436\u0435\u0442 \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0435 \u043c\u0435\u0441\u0442\u043e."),(0,a.kt)("h3",{id:"\u043a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043f\u0440\u0430\u0432\u0438\u043b\u0430"},"\u041a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430"),(0,a.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 DOM (Document Object Model \u0438\u043b\u0438 \xab\u200e\u043e\u0431\u044a\u0435\u043a\u0442\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\xbb), \u043f\u043e \u0441\u0443\u0442\u0438 \u2014 HTML-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0432\u0441\u0435\u0445 \u0435\u0451 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0442\u043e\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432 DOM. \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0443\u0431\u0438\u0440\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u044c DOM, \u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u0438\u043c \u043f\u043e\u043d\u044f\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0438\u043c\u0435\u043d\u043d\u043e \u043a\u0443\u0441\u043a\u0438 DOM \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0435 \u0438 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f, \u0430 \u043a\u0430\u043a\u0438\u0435 \u043d\u0435 \u0441\u0442\u043e\u0438\u0442 \u0442\u0440\u043e\u0433\u0430\u0442\u044c."),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u044b\u0445 \u0432\u044b\u0448\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432 \u0438 \u043e\u0441\u0442\u0430\u0442\u043a\u043e\u0432 \u0440\u0435\u043a\u043b\u0430\u043c\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438."),(0,a.kt)("h3",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u0430-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438-html"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 HTML"),(0,a.kt)("p",null,"\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0432\u044b\u0448\u0435\u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u044b\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0438 \u043a\u043e\u0441\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u0430\u0432\u0438\u043b \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0440\u044b\u0442\u044c \u0438\u043b\u0438 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u044e \u0440\u0435\u043a\u043b\u0430\u043c\u0443. \u041d\u043e \u0438\u043d\u043e\u0433\u0434\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0430\u043c HTML-\u043a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0435\u0449\u0451 \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 HTML-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430. \u0422\u0430\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0443 \u043d\u0430 HTML-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0434\u0430 \u0435\u0449\u0451 \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0441\u044c\u043c\u0430 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0442\u0438\u043f \u043f\u0440\u0430\u0432\u0438\u043b, \u0438 \u043e\u043d \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u043f\u0440\u0430\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445. HTML-\u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 AdGuard \u0434\u043b\u044f Windows, Mac \u0438 Android, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u043e\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0438 AdGuard \u0434\u043b\u044f Firefox."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u0415\u0441\u0442\u044c \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0438\u043f\u044b \u043f\u0440\u0430\u0432\u0438\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438, \u043d\u043e \u0434\u043b\u044f \u0438\u0445 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"../create-own-filters"},"\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u043c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u0430\u0432\u0438\u043b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0442\u0430\u0442\u044c\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"),".")))}c.isMDXComponent=!0}}]);