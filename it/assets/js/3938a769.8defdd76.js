"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4465],{4137:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={title:"How to create a minidump file to fix the BSoD error",sidebar_position:8},i=void 0,l={unversionedId:"guides/minidump",id:"guides/minidump",title:"How to create a minidump file to fix the BSoD error",description:"Almost all Windows users are familiar with the Blue Screen of Death (BSoD) error unfortunately. BSoD occurs when the Windows system encounters problems that can affect safe system operation, such as problems with third-party driver code, hardware, or Microsoft code. To solve the blue screen error, users can use a minidump file.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/guides/minidump.md",sourceDirName:"guides",slug:"/guides/minidump",permalink:"/KnowledgeBase/it/guides/minidump",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/minidump.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to create a minidump file to fix the BSoD error",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"How to enable HTTPS filtering for Google Family Link",permalink:"/KnowledgeBase/it/guides/family-link-certificate"}},s={},p=[{value:"What is Minidump file",id:"what-is-minidump-file",level:2},{value:"Set up Windows to create the Minidump file",id:"set-up-windows-to-create-the-minidump-file",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Almost all Windows users are familiar with the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_screen_of_death"},"Blue Screen of Death (BSoD)")," error unfortunately. BSoD occurs when the Windows system encounters problems that can affect safe system operation, such as problems with third-party driver code, hardware, or Microsoft code. To solve the blue screen error, users can use a minidump file."),(0,o.kt)("h2",{id:"what-is-minidump-file"},"What is Minidump file"),(0,o.kt)("p",null,"A minidump file is a file that contains the information about the nature of the system crash. It is created just before the blue screen appears and it has the minimum amount of useful information that can be used to solve the problem. The minidump file usually has a ",(0,o.kt)("em",{parentName:"p"},".dmp")," extension."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On Windows 10, the blue screen shows a stop code and a QR code. The user can use this information and search the Web for the specific problem.")),(0,o.kt)("p",null,"The option to create the minidump file is disabled by default, so before we go into more detail on how to use the file, let\u2019s take a closer look at how to enable it."),(0,o.kt)("h2",{id:"set-up-windows-to-create-the-minidump-file"},"Set up Windows to create the Minidump file"),(0,o.kt)("p",null,"Even if you don\u2019t experience any BSoD crash errors,  you can still set this option \u2014 this is a general recommendation, not necessarily related to AdGuard products. Please follow the instructions below to automatically create the minidump file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("em",{parentName:"p"},"sysdm.cpl")," in the Windows search bar and click ",(0,o.kt)("strong",{parentName:"p"},"Open"),". The ",(0,o.kt)("strong",{parentName:"p"},"System Properties Control Panel Menu")," window will appear on the screen."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Alternatively, click ",(0,o.kt)("strong",{parentName:"p"},"Settings")," \u2192  ",(0,o.kt)("strong",{parentName:"p"},"System")," \u2192  ",(0,o.kt)("strong",{parentName:"p"},"About")," \u2192  ",(0,o.kt)("strong",{parentName:"p"},"Advanced system settings"),".")))),(0,o.kt)("p",null,":::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Startup and Recovery")," section, click ",(0,o.kt)("strong",{parentName:"p"},"Settings"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png",alt:"Startup and Recovery *mobile_border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable the following three options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Write an event to the system log"),(0,o.kt)("li",{parentName:"ul"},"Automatically restart"),(0,o.kt)("li",{parentName:"ul"},"Writing debugging information \u2192 Small memory dump (256 kb)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/nmr4eThree_options.png",alt:"Three options *mobile_border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"OK")," to apply the settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart the computer."))),(0,o.kt)("p",null,"You've successfully enabled the minidump file. Now it will be created automatically when the system crashes."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default the minidump file is stored in the ",(0,o.kt)("strong",{parentName:"p"},"%SystemRoot%\\Minidump")," folder. You can change the directory location to whatever you like, but please remember that a lot of programs are set to look for this location by default, so we recommend that you do not change the location.")))}u.isMDXComponent=!0}}]);