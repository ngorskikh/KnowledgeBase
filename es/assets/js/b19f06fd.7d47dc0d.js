"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6475],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={title:"How to create a dump file",sidebar_position:8},i=void 0,s={unversionedId:"adguard-for-windows/solving-problems/dump-file",id:"adguard-for-windows/solving-problems/dump-file",title:"How to create a dump file",description:"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dump-file.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dump-file",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dump-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dump-file.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to create a dump file",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda de configuraci\xf3n avanzada (bajo nivel)",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/low-level-settings"},next:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dns-leaks"}},l={},p=[],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"descarga la aplicaci\xf3n AdGuard"))),(0,n.kt)("p",null,"To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press ",(0,n.kt)("strong",{parentName:"p"},"Ctrl + Shift + Esc")," and click ",(0,n.kt)("strong",{parentName:"p"},"Task Manager"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper menu bar select ",(0,n.kt)("strong",{parentName:"p"},"Details")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png",alt:"Task Manager details"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click the process that you want to create the dump file for (for example, the support team may ask you to create a dump for ",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the drop-down menu click ",(0,n.kt)("strong",{parentName:"p"},"Create dump file"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The file was created successfully!"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png",alt:"Create dump file"})))),(0,n.kt)("p",null,"After you\u2019ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the ",(0,n.kt)("strong",{parentName:"p"},"%tmp%")," folder. The created dump file (",(0,n.kt)("inlineCode",{parentName:"p"},".DMP"),") has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"AdGuard for Windows has two running processes (",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AdguardSvc.exe"),"). So you need to create the dump file separately for each process.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png",alt:"AdGuard processes"})),(0,n.kt)("p",null,"When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. ",(0,n.kt)("a",{parentName:"p",href:"../adguard-logs"},"Here")," you can check the instructions on how to collect the log file."))}u.isMDXComponent=!0}}]);