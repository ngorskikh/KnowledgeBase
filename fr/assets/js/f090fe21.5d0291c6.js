"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[348],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(o),m=n,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return o?r.createElement(g,l(l({ref:t},u),{},{components:o})):r.createElement(g,l({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8249:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(7462),n=(o(7294),o(4137));const a={title:"How to collect debug logs",sidebar_position:2},l=void 0,i={unversionedId:"adguard-for-android/solving-problems/log",id:"adguard-for-android/solving-problems/log",title:"How to collect debug logs",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/log.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/log",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/log",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/log.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to collect debug logs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Battery and traffic consumption issues",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/battery"},next:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/fr/adguard-for-android/solving-problems/tasker"}},d={},s=[{value:"Collecting debug log",id:"collecting-debug-log",level:3}],u={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"Dans cet article, nous vous guiderons le long du processus de collecte des journaux de d\xe9bogage, une \xe9tape de d\xe9pannage essentielle pour r\xe9soudre les probl\xe8mes complexes qui peuvent survenir. Debug logs provide detailed insight into the inner workings of AdGuard for Android. If the AdGuard support team asks you to provide debug logs, simply follow these instructions."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"AdGuard s'engage \xe0 prot\xe9ger votre vie priv\xe9e. We strictly follow our ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy/android.html"},"Privacy Policy")," and do not collect any private information about users. Avant d'envoyer vos journaux \xe0 l'\xe9quipe d'assistance, veuillez consulter le fichier car il peut contenir des informations suppl\xe9mentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au pr\xe9alable.")),(0,n.kt)("h3",{id:"collecting-debug-log"},"Collecting debug log"),(0,n.kt)("p",null,"To collect ",(0,n.kt)("strong",{parentName:"p"},"debug")," log and send it to us you need to perform following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"General")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Advanced"),"."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("em",{parentName:"li"},"Logging level")," and set it to ",(0,n.kt)("em",{parentName:"li"},"Debug"),"."),(0,n.kt)("li",{parentName:"ol"},"Reproduce the problem and try to remember the exact time it occurred."),(0,n.kt)("li",{parentName:"ol"},"Wait a while, then return to ",(0,n.kt)("em",{parentName:"li"},"Settings")," and choose the ",(0,n.kt)("em",{parentName:"li"},"Support")," tab. Tap ",(0,n.kt)("em",{parentName:"li"},"Report a bug")," and complete the required fields. Don't forget to check the ",(0,n.kt)("em",{parentName:"li"},"Send app logs and system info")," checkbox. Finally tap ",(0,n.kt)("em",{parentName:"li"},"Send"),".")),(0,n.kt)("p",null,"If you're interested in following the resolution of your issue and engaging in a dialogue with the developers, we recommend that you take the following steps after completing the first three:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Wait a while, then return to the ",(0,n.kt)("em",{parentName:"li"},"Advanced")," screen and export logs via ",(0,n.kt)("em",{parentName:"li"},"Export logs and system info"),". Then report a bug on GitHub by following these ",(0,n.kt)("a",{parentName:"li",href:"/KnowledgeBase/fr/guides/report-bugs"},"instructions"),"."),(0,n.kt)("li",{parentName:"ol"},"After creating an issue on GitHub, send the log file to ",(0,n.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Include the time of the bug and attach a link to your issue or its number (it appears as #number next to the title). Alternatively, you can upload the log file to Google Drive and send it to ",(0,n.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Add the file link to your GitHub issue")))}p.isMDXComponent=!0}}]);