"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2633],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(4137));const a={title:"How to collect AdGuard installation logs",sidebar_position:4},l=void 0,i={unversionedId:"adguard-for-windows/solving-problems/installation-logs",id:"adguard-for-windows/solving-problems/installation-logs",title:"How to collect AdGuard installation logs",description:"\u672c\u6587\u9002\u7528\u4e8e Windows \u7248\u7684 AdGuard\uff0c\u5b83\u662f\u4e00\u79cd\u591a\u529f\u80fd\u5e7f\u544a\u62e6\u622a\u5668\uff0c\u53ef\u5728\u7cfb\u7edf\u7ea7\u522b\u4fdd\u62a4\u7528\u6237\u7684\u8bbe\u5907\u3002 To see how it works, download the AdGuard app",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/installation-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/installation-logs",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/installation-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/installation-logs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to collect AdGuard installation logs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to collect AdGuard logs",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/adguard-logs"},next:{title:"How to collect Windows system logs",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/system-logs"}},s={},d=[],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u6587\u9002\u7528\u4e8e Windows \u7248\u7684 AdGuard\uff0c\u5b83\u662f\u4e00\u79cd\u591a\u529f\u80fd\u5e7f\u544a\u62e6\u622a\u5668\uff0c\u53ef\u5728\u7cfb\u7edf\u7ea7\u522b\u4fdd\u62a4\u7528\u6237\u7684\u8bbe\u5907\u3002 To see how it works, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("p",null,"If any problems occur during the installation of AdGuard, the support team might ask you to collect and send them AdGuard installation logs. In this case you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("em",{parentName:"p"},"Run")," command in Start menu or press ",(0,o.kt)("em",{parentName:"p"},"Win + R")," on the keyboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in ",(0,o.kt)("em",{parentName:"p"},"%tmp%")," and click ",(0,o.kt)("em",{parentName:"p"},"OK"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/install-logs-1.png",alt:"Open temp folder *mobile"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the opened folder select all files starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"Adguard")," and add them to archive (using WinRAR or any other archiving software)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/install-logs-2.png",alt:"AdGuard installation log files *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Send this archive to AdGuard tech support at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),"."))))}c.isMDXComponent=!0}}]);