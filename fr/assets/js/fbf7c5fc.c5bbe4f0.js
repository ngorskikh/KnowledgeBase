"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7328],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const i={title:"Certificate installation on devices with Android 11+",sidebar_position:12},o=void 0,l={unversionedId:"adguard-for-android/solving-problems/manual-certificate",id:"adguard-for-android/solving-problems/manual-certificate",title:"Certificate installation on devices with Android 11+",description:"Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. To see how it works, download the AdGuard app",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/manual-certificate.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/manual-certificate",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/manual-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/manual-certificate.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Certificate installation on devices with Android 11+",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/firefox-certificates"},next:{title:"Certificate installation in a Secure folder",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/secure-folder"}},p={},s=[],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Cet article parle de AdGuard pour Android, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"To be able to ",(0,n.kt)("a",{parentName:"p",href:"/KnowledgeBase/fr/general/https-filtering/what-is-https-filtering"},"filter HTTPS traffic")," (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of Android OS this was done automatically, but on Android 11 and later users have to install it manually."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif",alt:"Certificate *mobile_border"})),(0,n.kt)("p",null,"Follow these steps to install AdGuard certificate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you see the ",(0,n.kt)("em",{parentName:"p"},"HTTPS filtering is off")," notification, tap ",(0,n.kt)("em",{parentName:"p"},"Enable"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then you'll be presented with three screens that explain:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Why filter HTTPS traffic"),(0,n.kt)("li",{parentName:"ul"},"The safety of this filtering process"),(0,n.kt)("li",{parentName:"ul"},"The necessity of AdGuard certificate")),(0,n.kt)("p",{parentName:"li"},"Consecutively tap ",(0,n.kt)("em",{parentName:"p"},"Next")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Next")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Save certificate"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("em",{parentName:"p"},"Save")," at the bottom of the opened ",(0,n.kt)("em",{parentName:"p"},"Download")," folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After saving, tap ",(0,n.kt)("em",{parentName:"p"},"Open Settings"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("em",{parentName:"p"},"More security settings")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Encryption & credentials")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Install a certificate")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"CA certificate"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You might see a warning. If so, tap ",(0,n.kt)("em",{parentName:"p"},"Install anyway")," and enter your PIN if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the AdGuard certificate file. Its name should look like ",(0,n.kt)("em",{parentName:"p"},"adguard_1342_020322.crt"),"."))),(0,n.kt)("p",null,"You're all set! Once the certificate is installed successfully, you've enabled HTTPS filtering."),(0,n.kt)("p",null,'Please note that the steps provided are based on the Google Pixel 7 smartphone. If you\'re using a different Android device, the exact menu names or options might vary. For easier navigation consider searching for a certificate by entering "certificate" or "credentials" in the settings search bar.'),(0,n.kt)("p",null,"If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Restart AdGuard."),(0,n.kt)("li",{parentName:"ol"},"Try to install the correct certificate (AdGuard Personal CA) one more time.")),(0,n.kt)("p",null,"If you still encounter a problem and can't install the certificate, please contact our support team at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))}c.isMDXComponent=!0}}]);