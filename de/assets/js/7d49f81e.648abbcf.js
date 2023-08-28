"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[463],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),u=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,w=p["".concat(d,".").concat(f)]||p[f]||c[f]||a;return t?n.createElement(w,i(i({ref:r},l),{},{components:t})):n.createElement(w,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9604:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(7462),o=(t(7294),t(4137));const a={title:"Known issues of AdGuard for Windows",sidebar_position:10},i=void 0,s={unversionedId:"adguard-for-windows/solving-problems/known-issues",id:"adguard-for-windows/solving-problems/known-issues",title:"Known issues of AdGuard for Windows",description:"Dieser Artikel behandelt AdGuard f\xfcr Windows, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/known-issues.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/known-issues",permalink:"/KnowledgeBase/de/adguard-for-windows/solving-problems/known-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/known-issues.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Known issues of AdGuard for Windows",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/de/adguard-for-windows/solving-problems/dns-leaks"},next:{title:"Documentation for admins",permalink:"/KnowledgeBase/de/adguard-for-windows/admins-documentation"}},d={},u=[{value:"AdGuard for Windows and AdGuard VPN for Windows compatibility issues",id:"adguard-for-windows-and-adguard-vpn-for-windows-compatibility-issues",level:2}],l={toc:u};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Windows, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"laden Sie die AdGuard-App herunter"))),(0,o.kt)("h2",{id:"adguard-for-windows-and-adguard-vpn-for-windows-compatibility-issues"},"AdGuard for Windows and AdGuard VPN for Windows compatibility issues"),(0,o.kt)("p",null,"Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some of their default settings may cause the apps to work incorrectly when they run at the same time."),(0,o.kt)("p",null,"There are two specific settings in AdGuard for Windows: ",(0,o.kt)("em",{parentName:"p"},"Use redirect driver mode")," and ",(0,o.kt)("em",{parentName:"p"},"Filter localhost"),". By default, the first is disabled, and the second is enabled. Changing any of these settings will inevitably disrupt AdGuard's filtering if both AdGuard Ad Blocker and AdGuard VPN are enabled on your device."),(0,o.kt)("p",null,"Changing these settings is only necessary to resolve issues related to the simultaneous operation of AdGuard Ad Blocker and network-level apps such as  antiviruses, VPNs, and network filters. If you come across a situation where you need to change the default state of the above settings and still want AdGuard Ad Blocker and AdGuard VPN to work simultaneously and correctly \u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose"},"create an issue on GitHub")," so we can help you personally."),(0,o.kt)("p",null,"We are currently working on overcoming the above-listed limitations of the simultaneous work of our apps."))}c.isMDXComponent=!0}}]);