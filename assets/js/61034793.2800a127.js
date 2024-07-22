"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7354],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,w=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return r?o.createElement(w,s(s({ref:t},u),{},{components:r})):o.createElement(w,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(4137));const a={title:"Known issues of AdGuard for Windows",sidebar_position:10},s=void 0,i={unversionedId:"adguard-for-windows/solving-problems/known-issues",id:"adguard-for-windows/solving-problems/known-issues",title:"Known issues of AdGuard for Windows",description:"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-windows/solving-problems/known-issues.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/known-issues",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/known-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/known-issues.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Known issues of AdGuard for Windows",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/adguard-for-windows/solving-problems/dns-leaks"},next:{title:"Documentation for admins",permalink:"/KnowledgeBase/adguard-for-windows/admins-documentation"}},d={},l=[{value:"AdGuard for Windows and AdGuard VPN for Windows compatibility issues",id:"adguard-for-windows-and-adguard-vpn-for-windows-compatibility-issues",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"adguard-for-windows-and-adguard-vpn-for-windows-compatibility-issues"},"AdGuard for Windows and AdGuard VPN for Windows compatibility issues"),(0,n.kt)("p",null,"Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some of their default settings may cause the apps to work incorrectly when they run at the same time."),(0,n.kt)("p",null,"There are two specific settings in AdGuard for Windows: ",(0,n.kt)("em",{parentName:"p"},"Use redirect driver mode")," and ",(0,n.kt)("em",{parentName:"p"},"Filter localhost"),". By default, the first is disabled, and the second is enabled. Changing any of these settings will inevitably disrupt AdGuard's filtering if both AdGuard Ad Blocker and AdGuard VPN are enabled on your device."),(0,n.kt)("p",null,"Changing these settings is only necessary to resolve issues related to the simultaneous operation of AdGuard Ad Blocker and network-level apps such as antiviruses, VPNs, and network filters. If you come across a situation where you need to change the default state of the above settings and still want AdGuard Ad Blocker and AdGuard VPN to work simultaneously and correctly \u2014 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose"},"create an issue on GitHub")," so we can help you personally."),(0,n.kt)("p",null,"We are currently working on overcoming the above-listed limitations of the simultaneous work of our apps."))}c.isMDXComponent=!0}}]);