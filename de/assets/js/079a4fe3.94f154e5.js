"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9005],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const o={title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:17},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",id:"adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",title:"How to use Samsung Pay with AdGuard in South Korea",description:"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"How to use Samsung Pay with AdGuard in South Korea",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"How to install AdGuard for Android TV",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/adguard-for-android-tv"},next:{title:"Funktions\xfcbersicht",permalink:"/KnowledgeBase/de/adguard-for-ios/overview"}},d={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"laden Sie die AdGuard-App herunter"))),(0,r.kt)("p",null,"A number of users have encountered an issue where Samsung Pay does not work while AdGuard is running. This issue occurs almost exclusively on devices registered in South Korea."),(0,r.kt)("p",null,"What is causing this issue? Sometimes Samsung Pay does not work on devices with VPN services running, and AdGuard is one of these apps. By default, AdGuard uses a local VPN to filter traffic, which can cause problems when using Samsung Pay."),(0,r.kt)("p",null,"As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can be avoided with the ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay")," feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature will work only if the Local VPN filtering mode is chosen in AdGuard settings. If another mode is being used, Samsung Pay will function without any interruptions.")),(0,r.kt)("p",null,"To enable ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay"),", follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"General")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Advanced"),"\u2192 ",(0,r.kt)("em",{parentName:"p"},"Low-level settings"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll to ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay")," and move the slider to the right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tap ",(0,r.kt)("em",{parentName:"p"},"Allow permissions")," and give AdGuard access to information about the use of other apps."))),(0,r.kt)("p",null,"We need it to collect statistics about the operation of Samsung Pay in order for the ",(0,r.kt)("em",{parentName:"p"},"Detect Samsung Pay")," feature to work."),(0,r.kt)("p",null,"After enabling this feature, when you switch from Samsung Pay to AdGuard, the following message will appear as shown in the screenshot."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png",alt:"samsungpay *mobile"})),(0,r.kt)("p",null,"Alternatively, you can disable filtering for Samsung Pay in ",(0,r.kt)("em",{parentName:"p"},"App management"),". Simply go to the ",(0,r.kt)("em",{parentName:"p"},"App management")," screen (third tab from the bottom), find Samsung Pay in the list, and turn off the switch at ",(0,r.kt)("em",{parentName:"p"},"Route traffic through AdGuard"),"."))}p.isMDXComponent=!0}}]);