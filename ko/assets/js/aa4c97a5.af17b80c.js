"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3776],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(4137));const o={title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/har",id:"adguard-for-android/solving-problems/har",title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",description:"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 Android\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/har.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/har",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/har",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/har.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to get system logs",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/logcat"},next:{title:"Low-level settings guide",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/low-level-settings"}},s={},d=[{value:"HAR \ud30c\uc77c\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",id:"har-\ud30c\uc77c\uc774\ub780-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95",id:"har-\ud30c\uc77c-\uc218\uc9d1-\ubc29\ubc95",level:2},{value:"How to analyze HAR files",id:"how-to-analyze-har-files",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 Android\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,a.kt)("h2",{id:"har-\ud30c\uc77c\uc774\ub780-\ubb34\uc5c7\uc778\uac00\uc694"},"HAR \ud30c\uc77c\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?"),(0,a.kt)("p",null,"HAR(HTTP ARchive) \ud615\uc2dd\uc740 \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc640 \uc0ac\uc774\ud2b8 \uac04\uc758 \uc0c1\ud638 \uc791\uc6a9\uc744 \ub85c\uae45\ud558\uae30 \uc704\ud55c JSON \ud615\uc2dd\uc758 \uc544\uce74\uc774\ube0c \ud30c\uc77c\ub85c, \ube0c\ub77c\uc6b0\uc800\uac00 \ubd88\ub7ec\uc624\ub294 \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ub0b4\ubcf4\ub0b4\ub294 \ub370 \uc774\uc6a9\ub418\ub294 HTTP \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \ubcf4\uad00 \ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. HAR \ud30c\uc77c \ud615\uc2dd\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"p",href:"http://www.softwareishard.com/blog/har-12-spec/"},"softwareishard.com"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"har-\ud30c\uc77c-\uc218\uc9d1-\ubc29\ubc95"},"HAR \ud30c\uc77c \uc218\uc9d1 \ubc29\ubc95"),(0,a.kt)("p",null,"\uac04\ud639 \uc7ac\uc0dd\uc0b0\ud558\uae30 \uc5b4\ub824\uc6b4 \ud2b9\uc815 \uad11\uace0\ub97c \ucc28\ub2e8\ud558\uae30 \uc704\ud574 HAR \ud30c\uc77c \ubd84\uc11d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. HAR \ud30c\uc77c\uc744 \uc218\uc9d1\ud558\ub824\uba74 \ub2e4\uc74c \ub2e8\uacc4\ub97c \ub530\ub974\uc2ed\uc2dc\uc624."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open AdGuard and go to ",(0,a.kt)("strong",{parentName:"li"},"Settings")," (\u2699 icon in the lower right corner)."),(0,a.kt)("li",{parentName:"ol"},"Tap ",(0,a.kt)("strong",{parentName:"li"},"General")," \u2192",(0,a.kt)("strong",{parentName:"li"},"Advanced")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Low-level settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Scroll down and activate ",(0,a.kt)("strong",{parentName:"li"},"Capture HAR")," in the Filtering section."),(0,a.kt)("li",{parentName:"ol"},"Open the app and perform the necessary actions to reproduce the problem."),(0,a.kt)("li",{parentName:"ol"},"Turn ",(0,a.kt)("strong",{parentName:"li"},"Capture HAR")," off."),(0,a.kt)("li",{parentName:"ol"},"Go back to ",(0,a.kt)("strong",{parentName:"li"},"Advanced"),"."),(0,a.kt)("li",{parentName:"ol"},"Tap ",(0,a.kt)("strong",{parentName:"li"},"Export logs and system info")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Allow")," (if necessary) \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".har \ud30c\uc77c\uc744 AdGuard \uc9c0\uc6d0 \ud300\uc5d0 \ubcf4\ub0b4 \uc8fc\uc138\uc694.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.")),(0,a.kt)("h2",{id:"how-to-analyze-har-files"},"How to analyze HAR files"),(0,a.kt)("p",null,"\ub2e4\uc74c\uc740 HAR \ud30c\uc77c\uc744 \ubd84\uc11d\ud558\uae30 \uc704\ud55c \uba87 \uac00\uc9c0 \uc18c\uc2a4\uc785\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitgrimbo.github.io/harviewer/master/"},"HTTP \uc544\uce74\uc774\ube0c \ubdf0\uc5b4 \ub9c8\uc2a4\ud130"),"\ub294 HAR \ubd84\uc11d\uae30 \ub3c4\uad6c\ub85c, HTTP \ucd94\uc801 \ub3c4\uad6c\ub85c \uc0dd\uc131 \ub41c HTTP \uc544\uce74\uc774\ube0c (HAR) \ub85c\uadf8 \ud30c\uc77c\uc744 \uc2dc\uac01\ud654\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.telerik.com/fiddler"},"Fiddler"),"\ub294 \uc6f9 \ub514\ubc84\uae45 \ud504\ub85d\uc2dc\ub85c, \ucef4\ud4e8\ud130\uc640 \uc778\ud130\ub137 \uac04\uc758 \ubaa8\ub4e0 HTTP(S) \ud2b8\ub798\ud53d\uc744 \ucea1\ucc98, \uac80\uc0ac, \ubaa8\ub2c8\ud130\ub9c1\ud558\uace0 \ubaa8\uc758 \uc694\uccad\uc744 \uc218\ud589\ud558\uace0 \ub124\ud2b8\uc6cc\ud06c \ubb38\uc81c\ub97c \uc9c4\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}u.isMDXComponent=!0}}]);