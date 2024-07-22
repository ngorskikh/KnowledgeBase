"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5595],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,u=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(u,p(p({ref:t},d),{},{components:n})):r.createElement(u,p({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={title:"How to export logs from the background page",sidebar_position:1},p=void 0,i={unversionedId:"adguard-browser-extension/solving-problems/logs",id:"adguard-browser-extension/solving-problems/logs",title:"How to export logs from the background page",description:"Exporting logs from the background page in the extension",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-browser-extension/solving-problems/logs.md",sourceDirName:"adguard-browser-extension/solving-problems",slug:"/adguard-browser-extension/solving-problems/logs",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to export logs from the background page",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u53d7\u6d4f\u89c8\u5668\u4fdd\u62a4\u7684\u7f51\u9875",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/protected-pages"},next:{title:"\u4e0e\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u7684\u6bd4\u8f83",permalink:"/KnowledgeBase/zh-CN/adguard-browser-extension/comparison-standalone"}},l={},s=[{value:"Exporting logs from the background page in the extension",id:"exporting-logs-from-the-background-page-in-the-extension",level:2},{value:"Chrome \u6d4f\u89c8\u5668",id:"chrome-\u6d4f\u89c8\u5668",level:3},{value:"Firefox \u6d4f\u89c8\u5668",id:"firefox-\u6d4f\u89c8\u5668",level:3},{value:"Sending logs",id:"sending-logs",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"exporting-logs-from-the-background-page-in-the-extension"},"Exporting logs from the background page in the extension"),(0,o.kt)("h3",{id:"chrome-\u6d4f\u89c8\u5668"},"Chrome \u6d4f\u89c8\u5668"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open AdGuard Browser Extension and, if possible, repeat the actions that led to the error. Note the exact time when the error occurred.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"chrome://extensions"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable ",(0,o.kt)("em",{parentName:"p"},"Developer mode"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png",alt:"Developer mode *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"background.html"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png",alt:"Background *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the tab ",(0,o.kt)("em",{parentName:"p"},"Console"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png",alt:"The Console tab *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the context menu and select ",(0,o.kt)("em",{parentName:"p"},"Save as\u2026"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png",alt:"Save as *border"})))),(0,o.kt)("h3",{id:"firefox-\u6d4f\u89c8\u5668"},"Firefox \u6d4f\u89c8\u5668"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open AdGuard Browser Extension and, if possible, repeat the actions that led to the error. Note the exact time when the error occurred.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"about:addons"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Debug Add-ons"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png",alt:"Debug Add-ons *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Inspect"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png",alt:"Inspect *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the tab ",(0,o.kt)("em",{parentName:"p"},"Console"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png",alt:"Console *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Save all Messages to File"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png",alt:"Save *border"})))),(0,o.kt)("h2",{id:"sending-logs"},"Sending logs"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AdGuard \u81f4\u529b\u4e8e\u4fdd\u62a4\u7528\u6237\u7684\u4e2a\u4eba\u9690\u79c1\u3002 We strictly follow our ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy/browser-extension.html"},"Privacy Policy")," and do not collect any private information about users. \u8bf7\u6ce8\u610f\uff1a\u5728\u5c06\u60a8\u7684\u65e5\u5fd7\u8bb0\u5f55\u53d1\u9001\u7ed9\u5ba2\u6237\u652f\u6301\u56e2\u961f\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u6587\u4ef6\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5305\u542b\u60a8\u4e0d\u60f3\u5206\u4eab\u7684\u9644\u52a0\u4fe1\u606f\u3002 \u5982\u679c\u5176\u4e2d\u5305\u542b\u6b64\u7c7b\u4e2a\u4eba\u4fe1\u606f\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5148\u5c06\u5176\u5220\u9664\u3002")),(0,o.kt)("p",null,"Now that you have collected the logs, please follow these steps to submit them to our development team:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Report the bug on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose"},"GitHub"),"."),(0,o.kt)("li",{parentName:"ol"},"Send your archive with logs and playback time to ",(0,o.kt)("inlineCode",{parentName:"li"},"devteam@adguard.com")," and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.")))}c.isMDXComponent=!0}}]);