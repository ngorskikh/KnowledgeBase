"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8372],{4137:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(g,i(i({ref:t},l),{},{components:a})):n.createElement(g,i({ref:t},l))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const o={title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:17},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",id:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",title:"How to use Samsung Pay with AdGuard in South Korea",description:"Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. To see how it works, download the AdGuard app",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"How to install AdGuard for Android TV",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/adguard-for-android-tv"},next:{title:"Features overview",permalink:"/KnowledgeBase/fr/adguard-for-ios/overview"}},u={},d=[],l={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. To see how it works, ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,r.kt)("p",null,"A number of users have encountered an issue where Samsung Pay does not work while AdGuard is running. This issue occurs almost exclusively on devices registered in South Korea."),(0,r.kt)("p",null,"What is causing this issue? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. By default, AdGuard uses a local VPN to filter traffic, which can cause problems when using Samsung Pay."),(0,r.kt)("p",null,"As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can be avoided with the ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay")," feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.")),(0,r.kt)("p",null,"To enable ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay"),", follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"General")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Advanced"),"\u2192 ",(0,r.kt)("em",{parentName:"p"},"Low-level settings"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay")," and move the slider to the right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tap ",(0,r.kt)("em",{parentName:"p"},"Allow permissions")," and give AdGuard access to information about the use of other apps."))),(0,r.kt)("p",null,"We need it to collect statistics about the operation of Samsung Pay in order for the ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay")," feature to work."),(0,r.kt)("p",null,"After enabling this feature, when you switch from Samsung Pay to AdGuard, the following message will appear as shown in the screenshot."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png",alt:"samsungpay *mobile"})),(0,r.kt)("p",null,"Alternatively, you can disable filtering for Samsung Pay in ",(0,r.kt)("em",{parentName:"p"},"App management"),". Simply go to the ",(0,r.kt)("em",{parentName:"p"},"App management")," screen (third tab from the bottom), find Samsung Pay in the list, and turn off the switch at ",(0,r.kt)("em",{parentName:"p"},"Route traffic through AdGuard"),"."))}p.isMDXComponent=!0}}]);