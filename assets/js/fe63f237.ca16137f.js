"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7521],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),b=n,m=c["".concat(d,".").concat(b)]||c[b]||u[b]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(4137));const a={title:"Compatibility with the standalone app",sidebar_position:4},i=void 0,s={unversionedId:"adguard-browser-extension/compatibility",id:"adguard-browser-extension/compatibility",title:"Compatibility with the standalone app",description:"This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, download the AdGuard app",source:"@site/docs/adguard-browser-extension/compatibility.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/compatibility",permalink:"/KnowledgeBase/adguard-browser-extension/compatibility",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/compatibility.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Compatibility with the standalone app",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to install",permalink:"/KnowledgeBase/adguard-browser-extension/installation"},next:{title:"Browser-protected pages",permalink:"/KnowledgeBase/adguard-browser-extension/protected-pages"}},d={},l=[{value:"AdGuard Browser Assistant",id:"adguard-browser-assistant",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"While AdGuard Browser Extension can block ads in browsers, ",(0,n.kt)("a",{parentName:"p",href:"/adguard-browser-extension/comparison-standalone"},"AdGuard standalone programs")," filter all the traffic on your device, including from browsers and apps."),(0,n.kt)("p",null,"If you decide to install both the extension and the standalone program on your PC, you may encounter some compatibility issues. The problem is that in some cases the application and the extension may interfere with each other. Some websites will no longer be protected by the desktop program and will only be protected by the extension, which has fewer options. Also, filtering may work incorrectly for some websites. Therefore, we don't recommend using the extension together with the application."),(0,n.kt)("p",null,"If you have the desktop version of AdGuard installed on your PC, it is better to use AdGuard Browser Assistant instead of the extension."),(0,n.kt)("h2",{id:"adguard-browser-assistant"},"AdGuard Browser Assistant"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/ad_blocker_browser_extension_assistant.png",alt:"AdGuard Browser Assistant *mobile_border"})),(0,n.kt)("p",null,"AdGuard Browser Assistant is a browser extension that works and feels just like AdGuard Browser Extension, but it's much lighter and doesn't interfere with the desktop apps. You can ",(0,n.kt)("a",{parentName:"p",href:"/adguard-for-windows/browser-assistant"},"read more about Browser Assistant for Windows")," or ",(0,n.kt)("a",{parentName:"p",href:"/adguard-for-mac/features/browser-assistant"},"Mac"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-assistant/overview.html"},"download it from our website"),"."),(0,n.kt)("p",null,"AdGuard Browser Assistant is available in all major browsers."))}u.isMDXComponent=!0}}]);