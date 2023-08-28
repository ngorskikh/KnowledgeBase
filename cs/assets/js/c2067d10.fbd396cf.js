"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1125],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(o),c=n,v=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return o?r.createElement(v,i(i({ref:t},u),{},{components:o})):r.createElement(v,i({ref:t},u))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=o(7462),n=(o(7294),o(4137));const a={title:"Jak vytvo\u0159it soubor v\xfdpisu",sidebar_position:8},i=void 0,p={unversionedId:"adguard-for-windows/solving-problems/dump-file",id:"adguard-for-windows/solving-problems/dump-file",title:"Jak vytvo\u0159it soubor v\xfdpisu",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Windows, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dump-file.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dump-file",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/dump-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dump-file.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Jak vytvo\u0159it soubor v\xfdpisu",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Pr\u016fvodce pokro\u010dil\xfdm (n\xedzko\xfarov\u0148ov\xfdm) nastaven\xedm",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/low-level-settings"},next:{title:"Mo\u017en\xe9 \xfaniky DNS",permalink:"/KnowledgeBase/cs/adguard-for-windows/solving-problems/dns-leaks"}},s={},l=[],u={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Windows, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,n.kt)("p",null,"K diagnostice p\u0159\xed\u010din mo\u017en\xfdch probl\xe9m\u016f, se kter\xfdmi se u\u017eivatel\xe9 mohou setkat p\u0159i pou\u017e\xedv\xe1n\xed AdGuardu, m\u016f\u017ee t\xfdm podpory pot\u0159ebovat soubor v\xfdpisu procesu. Soubor v\xfdpisu pom\xe1h\xe1 v\xfdvoj\xe1\u0159\u016fm zobrazit procesy, kter\xe9 byly v aplikaci v dan\xe9m \u010dasov\xe9m obdob\xed spu\u0161t\u011bny. N\xed\u017ee se m\u016f\u017eete pod\xedvat na pokyny, jak shrom\xe1\u017edit soubor v\xfdpisu v PC."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stiskn\u011bte ",(0,n.kt)("strong",{parentName:"p"},"Ctrl + Shift + Esc")," a klikn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Spr\xe1vce \xfaloh"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V menu vyberte ",(0,n.kt)("strong",{parentName:"p"},"Podrobnosti")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png",alt:"Task Manager details"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Klikn\u011bte prav\xfdm tla\u010d\xedtkem my\u0161i na proces, pro kter\xfd chcete vytvo\u0159it soubor v\xfdpisu (nap\u0159\xedklad t\xfdm podpory v\xe1s m\u016f\u017ee po\u017e\xe1dat o vytvo\u0159en\xed v\xfdpisu pro ",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"V rozev\xedrac\xedm menu klikn\u011bte na ",(0,n.kt)("strong",{parentName:"p"},"Vytvo\u0159it soubor v\xfdpisu"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Soubor byl \xfasp\u011b\u0161n\u011b vytvo\u0159en!"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png",alt:"Create dump file"})))),(0,n.kt)("p",null,"Po vytvo\u0159en\xed souboru v\xfdpisu p\u0159ejd\u011bte do um\xedst\u011bn\xed souboru. Ihned po vytvo\u0159en\xed souboru v\xfdpisu byste m\u011bli b\xfdt vyzv\xe1ni k otev\u0159en\xed slo\u017eky obsahuj\xedc\xed tento soubor. Jinak jej najdete ve slo\u017ece ",(0,n.kt)("strong",{parentName:"p"},"%tmp%"),". Vytvo\u0159en\xfd soubor v\xfdpisu (",(0,n.kt)("inlineCode",{parentName:"p"},".DMP"),") m\xe1 stejn\xfd n\xe1zev jako n\xe1zev procesu, kter\xfd jste vybrali v p\u0159edchoz\xedch kroc\xedch. Soubor je pom\u011brn\u011b velk\xfd, proto jej p\u0159ed odesl\xe1n\xedm na podporu zkomprimujte do archivu."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"AdGuard pro Windows m\xe1 dva spu\u0161t\u011bn\xe9 procesy (",(0,n.kt)("inlineCode",{parentName:"p"},"Adguard.exe")," a ",(0,n.kt)("inlineCode",{parentName:"p"},"AdguardSvc.exe"),"). Proto je t\u0159eba vytvo\u0159it soubor v\xfdpisu pro ka\u017ed\xfd proces zvl\xe1\u0161\u0165.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png",alt:"AdGuard processes"})),(0,n.kt)("p",null,"P\u0159i odes\xedl\xe1n\xed v\xfdpisu soubor\u016f t\xfdmu podpory p\u0159ilo\u017ete tak\xe9 z\xe1znamy aplikace AdGuard, abychom m\u011bli v\u011bt\u0161\xed \u0161anci probl\xe9m vy\u0159e\u0161it. ",(0,n.kt)("a",{parentName:"p",href:"../adguard-logs"},"Zde")," si m\u016f\u017eete prohl\xe9dnout pokyny ke shroma\u017e\u010fov\xe1n\xed souboru z\xe1znamu."))}d.isMDXComponent=!0}}]);