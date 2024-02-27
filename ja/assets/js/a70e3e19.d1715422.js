"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9686],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||n;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8948:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=t(7462),o=(t(7294),t(4137));const n={title:"How to collect logs in AdGuard for Safari",sidebar_position:4},i=void 0,l={unversionedId:"adguard-for-safari/solving-problems/logs",id:"adguard-for-safari/solving-problems/logs",title:"How to collect logs in AdGuard for Safari",description:"This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, download the AdGuard app",source:"@site/docs/adguard-for-safari/solving-problems/logs.md",sourceDirName:"adguard-for-safari/solving-problems",slug:"/adguard-for-safari/solving-problems/logs",permalink:"/KnowledgeBase/ja/adguard-for-safari/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to collect logs in AdGuard for Safari",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Filtering doesn\u2019t stop when AdGuard for Safari is disabled",permalink:"/KnowledgeBase/ja/adguard-for-safari/solving-problems/filters-after-disable"},next:{title:"AdGuard for Safari doesn\u2019t work in private tabs on macOS Sonoma",permalink:"/KnowledgeBase/ja/adguard-for-safari/solving-problems/private-sonoma"}},s={},d=[{value:"How to collect logs",id:"how-to-collect-logs",level:3}],u={toc:d};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("p",null,"To analyze and diagnose various problems that may occur with AdGuard for Safari, the AdGuard support service may need its log files. These files contain records of errors and other software events. Below are brief instructions on how to collect logs and send them to support if necessary."),(0,o.kt)("h3",{id:"how-to-collect-logs"},"How to collect logs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard for Safari app."),(0,o.kt)("li",{parentName:"ol"},"Scroll down and click ",(0,o.kt)("em",{parentName:"li"},"Export logs"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a location to save the .zip file and click ",(0,o.kt)("em",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,"Now you can send this file to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com")," or attach it to your bug report on GitHub:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"AdGuard for Safari GitHub repo")," and click ",(0,o.kt)("em",{parentName:"li"},"New issue"),"."),(0,o.kt)("li",{parentName:"ol"},"Send the log file to ",(0,o.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Include the time of the bug and attach a link to your issue or its number (it appears as #number next to the title).\nAlternatively, you can upload the log file to Google Drive and send it to ",(0,o.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Add the file link to your GitHub issue.")))}c.isMDXComponent=!0}}]);