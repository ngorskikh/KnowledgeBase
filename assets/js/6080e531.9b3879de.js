"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6361],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(r),f=n,m=c["".concat(u,".").concat(f)]||c[f]||s[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1218:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=r(7462),n=(r(7294),r(4137));const o={title:"Integration with AdGuard VPN",sidebar_position:8},i=void 0,d={unversionedId:"adguard-for-android/features/integration-with-vpn",id:"adguard-for-android/features/integration-with-vpn",title:"Integration with AdGuard VPN",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-android/features/integration-with-vpn.md",sourceDirName:"adguard-for-android/features",slug:"/adguard-for-android/features/integration-with-vpn",permalink:"/KnowledgeBase/adguard-for-android/features/integration-with-vpn",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/integration-with-vpn.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Integration with AdGuard VPN",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Rooted devices",permalink:"/KnowledgeBase/adguard-for-android/features/rooted"},next:{title:"Installation",permalink:"/KnowledgeBase/adguard-for-android/installation"}},u={},l=[],p={toc:l};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"AdGuard for Android creates a local VPN to filter traffic. Thus, other VPN apps cannot be used while AdGuard for Android is running. However, both AdGuard and ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN")," apps have Integrated modes that let you use them together."),(0,n.kt)("p",null,"In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. This allows AdGuard to create a VPN interface and block ads and trackers locally, while AdGuard VPN routes all traffic through a remote server."),(0,n.kt)("p",null,"If you disable AdGuard VPN, AdGuard will stop using it as an outbound proxy. If you disable AdGuard, AdGuard VPN will route traffic through its own VPN interface."),(0,n.kt)("p",null,"If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable ",(0,n.kt)("em",{parentName:"p"},"Integration with AdGuard VPN")," automatically. The same happens in reverse. Note that if you've enabled integration, you won't be able to manage app exclusions and connect to DNS servers from the AdGuard VPN app. You can specify apps to be routed through your VPN tunnel via ",(0,n.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Apps operating through proxy"),". To select a DNS server, open AdGuard \u2192 ",(0,n.kt)("em",{parentName:"p"},"Protection")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS protection")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS server"),"."))}s.isMDXComponent=!0}}]);