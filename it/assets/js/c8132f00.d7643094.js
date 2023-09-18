"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1755],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(4137));const a={title:"How to create a dump file",sidebar_position:8},i=void 0,l={unversionedId:"adguard-for-windows/solving-problems/dump-file",id:"adguard-for-windows/solving-problems/dump-file",title:"How to create a dump file",description:"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dump-file.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dump-file",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/dump-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dump-file.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to create a dump file",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Advanced (low-level) Settings guide",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/low-level-settings"},next:{title:"Possible DNS leaks",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/dns-leaks"}},p={},s=[],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. The dump file helps developers to see the processes that were executed in the application over a given period of time. Below you can check on the instructions of how to collect the dump file on your PC."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press ",(0,n.kt)("strong",{parentName:"p"},"Ctrl + Shift + Esc")," and click ",(0,n.kt)("strong",{parentName:"p"},"Task Manager"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper menu bar select ",(0,n.kt)("strong",{parentName:"p"},"Details")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png",alt:"Task Manager details"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click the process that you want to create the dump file for (for example, the support team may ask you to create a dump for ",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the drop-down menu click ",(0,n.kt)("strong",{parentName:"p"},"Create dump file"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The file was created successfully!"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png",alt:"Create dump file"})))),(0,n.kt)("p",null,"After you\u2019ve created the dump file, please navigate to the file location. You should be prompted to open the folder containing the dump file right after its creation. Otherwise, you will be able to find it inside the ",(0,n.kt)("strong",{parentName:"p"},"%tmp%")," folder. The created dump file (",(0,n.kt)("inlineCode",{parentName:"p"},".DMP"),") has the same name as the name of the process you chose in the previous steps. The file is quite large, so please compress it into an archive before sending to support."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"AdGuard for Windows has two running processes (",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AdguardSvc.exe"),"). So you need to create the dump file separately for each process.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png",alt:"AdGuard processes"})),(0,n.kt)("p",null,"When you send the dump files to the support team, please also attach the AdGuard application logs so we have a better chance at solving the problem. ",(0,n.kt)("a",{parentName:"p",href:"../adguard-logs"},"Here")," you can check the instructions on how to collect the log file."))}u.isMDXComponent=!0}}]);