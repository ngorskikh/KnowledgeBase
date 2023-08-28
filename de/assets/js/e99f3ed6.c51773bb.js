"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2691],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={title:"How to collect Windows system logs",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-windows/solving-problems/system-logs",id:"adguard-for-windows/solving-problems/system-logs",title:"How to collect Windows system logs",description:"Dieser Artikel behandelt AdGuard f\xfcr Windows, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/system-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/system-logs",permalink:"/KnowledgeBase/de/adguard-for-windows/solving-problems/system-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/system-logs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to collect Windows system logs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to collect AdGuard installation logs",permalink:"/KnowledgeBase/de/adguard-for-windows/solving-problems/installation-logs"},next:{title:"Common installer errors",permalink:"/KnowledgeBase/de/adguard-for-windows/solving-problems/common-installer-errors"}},s={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Windows, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"laden Sie die AdGuard-App herunter"))),(0,a.kt)("p",null,"To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Press ",(0,a.kt)("em",{parentName:"p"},"Win + R"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the window that appears type in ",(0,a.kt)("inlineCode",{parentName:"p"},"eventvwr")," and click ",(0,a.kt)("em",{parentName:"p"},"OK"),":"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png",alt:"Run window *mobile"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Event Viewer window appears as shown in the picture."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png",alt:"Event viewer *border"})),(0,a.kt)("p",{parentName:"li"},"To save files that we need, do the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("em",{parentName:"p"},"Application"),": ",(0,a.kt)("em",{parentName:"p"},"Event Viewer (Local)")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"Windows Logs")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"Application"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Right-click ",(0,a.kt)("em",{parentName:"p"},"Application")," and in the drop-down menu select ",(0,a.kt)("em",{parentName:"p"},"Save All Events As..."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select a name and where to save, click ",(0,a.kt)("em",{parentName:"p"},"Save"),". Select ",(0,a.kt)("em",{parentName:"p"},"Display information for the following languages"),". You need to tick the box next to ",(0,a.kt)("em",{parentName:"p"},"English"),". Click ",(0,a.kt)("em",{parentName:"p"},"OK"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("em",{parentName:"p"},"System"),": ",(0,a.kt)("em",{parentName:"p"},"Event Viewer (Local)")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"Windows Logs")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"System"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Right-click ",(0,a.kt)("em",{parentName:"p"},"System")," and in the drop-down menu select ",(0,a.kt)("em",{parentName:"p"},"Save All Events As..."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose a destination folder, enter the name, click ",(0,a.kt)("em",{parentName:"p"},"Save"),". Select ",(0,a.kt)("em",{parentName:"p"},"Display information for the following languages"),". You need to tick the box next to ",(0,a.kt)("em",{parentName:"p"},"English"),". Click ",(0,a.kt)("em",{parentName:"p"},"OK"),"."))))),(0,a.kt)("p",null,"Please send the two files that you've recently saved to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),"."))}d.isMDXComponent=!0}}]);