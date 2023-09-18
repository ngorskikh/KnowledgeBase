"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5504],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(7462),a=(r(7294),r(4137));const n={title:"\u0421ertificate installation issues on devices with Android 11+",sidebar_position:12},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/manual-certificate",id:"adguard-for-android/solving-problems/manual-certificate",title:"\u0421ertificate installation issues on devices with Android 11+",description:"Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/manual-certificate.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/manual-certificate",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/manual-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/manual-certificate.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u0421ertificate installation issues on devices with Android 11+",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/firefox-certificates"},next:{title:"Certificate installation in a Secure folder",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/secure-folder"}},d={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("p",null,"To be able to filter HTTPS traffic (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to ",(0,a.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"install it manually"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/video.gif",alt:"Certificate *mobile_border"})),(0,a.kt)("p",null,"If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Restart AdGuard."),(0,a.kt)("li",{parentName:"ol"},"Try to install the correct certificate (AdGuard Personal CA) one more time.")),(0,a.kt)("p",null,"If you still encounter a problem and can't install the certificate, please contact our support team at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))}u.isMDXComponent=!0}}]);