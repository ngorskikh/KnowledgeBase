"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1784],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return r?o.createElement(f,n(n({ref:t},c),{},{components:r})):o.createElement(f,n({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var d=2;d<i;d++)n[d]=r[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const i={title:"Moving the CA certificate to the system store on rooted devices",sidebar_position:14},n=void 0,s={unversionedId:"adguard-for-android/solving-problems/https-certificate-for-rooted",id:"adguard-for-android/solving-problems/https-certificate-for-rooted",title:"Moving the CA certificate to the system store on rooted devices",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/docs/adguard-for-android/solving-problems/https-certificate-for-rooted.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/https-certificate-for-rooted",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/https-certificate-for-rooted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/https-certificate-for-rooted.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Moving the CA certificate to the system store on rooted devices",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Certificate installation in a Secure folder",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/secure-folder"},next:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/adguard-for-android/solving-problems/compatibility-issues"}},l={},d=[{value:"How to install AdGuard&#39;s certificate to the system store",id:"how-to-install-adguards-certificate-to-the-system-store",level:2},{value:"Known issues with Chrome and Chromium-based browsers",id:"known-issues-with-chrome-and-chromium-based-browsers",level:2},{value:"Bromite browser",id:"bromite-browser",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("p",null,"AdGuard for Android can ",(0,a.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"filter encrypted HTTPS traffic"),", thus blocking most ads and trackers on websites. On rooted devices, AdGuard also allows you to filter HTTPS traffic in apps. HTTPS filtering requires adding AdGuard's CA certificate to the list of trusted certificates."),(0,a.kt)("p",null,"On non-rooted devices, CA certificates can be installed to the ",(0,a.kt)("strong",{parentName:"p"},"user store"),". Only a limited subset of apps (mostly browsers) trust CA certificates installed to the user store, meaning HTTPS filtering will work only for such apps."),(0,a.kt)("p",null,"On rooted devices, you can install a certificate to the ",(0,a.kt)("strong",{parentName:"p"},"system store"),". That will allow AdGuard to filer HTTPS traffic in other apps as well."),(0,a.kt)("p",null,"Here's how to do that."),(0,a.kt)("h2",{id:"how-to-install-adguards-certificate-to-the-system-store"},"How to install AdGuard's certificate to the system store"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("em",{parentName:"p"},"AdGuard \u2192 Settings \u2192 Filtering \u2192 Network \u2192 HTTPS filtering \u2192 Security certificates"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you don't have any certificate yet, ",(0,a.kt)("strong",{parentName:"p"},"install the AdGuard Personal CA into the user store"),". This will allow AdGuard to filter HTTPS traffic in browsers.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install the AdGuard Intermediate CA into the user store"),". You'll need it to run the adguardcert Magisk module that allows you to move certificates to the system store."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png",alt:"Install the certificate *mobile_border"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/adguardcert/releases/latest/"},"latest release of the ",(0,a.kt)("strong",{parentName:"a"},"adguardcert")," Magisk module"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("em",{parentName:"p"},"Magisk \u2192 Modules \u2192 Install from storage")," and select the downloaded ",(0,a.kt)("strong",{parentName:"p"},"adguardcert")," file. This will move the AdGuard Personal CA from the user store to the system store."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png",alt:"Open Magisk modules *mobile"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png",alt:"Install from storage *mobile"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png",alt:"Select adguardcert *mobile"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tap ",(0,a.kt)("strong",{parentName:"p"},"Reboot"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png",alt:"Reboot the device *mobile"})))),(0,a.kt)("p",null,"After the transfer, the ",(0,a.kt)("strong",{parentName:"p"},"AdGuard Personal CA")," in the system store will allow you to filter HTTPS traffic in apps, while the ",(0,a.kt)("strong",{parentName:"p"},"AdGuard Intermediate CA")," in the user store will allow you to filter HTTPS traffic in Chromium-based browsers (see below why)."),(0,a.kt)("h2",{id:"known-issues-with-chrome-and-chromium-based-browsers"},"Known issues with Chrome and Chromium-based browsers"),(0,a.kt)("p",null,"Chrome and other Chromium-based browsers require Certificate Transparency (CT) logs for certificates located in the system store. CT logs don't contain information about certificates issued by HTTPS-filtering apps. Therefore, AdGuard requires an additional certificate in the user store to filter HTTPS traffic in these browsers."),(0,a.kt)("h3",{id:"bromite-browser"},"Bromite browser"),(0,a.kt)("p",null,"In addition to the above issue, Bromite doesn't trust certificates in the user store by default. To filter HTTPS traffic there, open Bromite, go to ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://flags"),", and set ",(0,a.kt)("em",{parentName:"p"},"Allow user certificates")," to ",(0,a.kt)("em",{parentName:"p"},"Enabled"),". ",(0,a.kt)("strong",{parentName:"p"},"This applies to both rooted and non-rooted devices"),"."))}p.isMDXComponent=!0}}]);