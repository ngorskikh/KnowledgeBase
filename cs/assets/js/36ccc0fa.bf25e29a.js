"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9446],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(o),c=r,v=d["".concat(s,".").concat(c)]||d[c]||l[c]||a;return o?n.createElement(v,i(i({ref:t},u),{},{components:o})):n.createElement(v,i({ref:t},u))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7292:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var n=o(7462),r=(o(7294),o(4137));const a={title:"Jak vytvo\u0159it soubor minidump pro opravu chyby BSoD",sidebar_position:8},i=void 0,p={unversionedId:"guides/minidump",id:"guides/minidump",title:"Jak vytvo\u0159it soubor minidump pro opravu chyby BSoD",description:"T\xe9m\u011b\u0159 v\u0161ichni u\u017eivatel\xe9 syst\xe9mu Windows bohu\u017eel znaj\xed chybu Modr\xe1 obrazovka smrti (BSoD). K BSoD doch\xe1z\xed, kdy\u017e syst\xe9m Windows naraz\xed na probl\xe9my, kter\xe9 mohou ovlivnit bezpe\u010dn\xfd provoz syst\xe9mu, nap\u0159. probl\xe9my s k\xf3dem ovlada\u010de t\u0159et\xed strany, hardwarem nebo k\xf3dem spole\u010dnosti Microsoft. K vy\u0159e\u0161en\xed chyby modr\xe9 obrazovky mohou u\u017eivatel\xe9 pou\u017e\xedt soubor minidump.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/guides/minidump.md",sourceDirName:"guides",slug:"/guides/minidump",permalink:"/KnowledgeBase/cs/guides/minidump",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/minidump.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Jak vytvo\u0159it soubor minidump pro opravu chyby BSoD",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Jak povolit HTTPS filtrov\xe1n\xed pro Google Family Link",permalink:"/KnowledgeBase/cs/guides/family-link-certificate"},next:{title:"How to block push notifications",permalink:"/KnowledgeBase/cs/guides/block-push-notifications"}},s={},m=[{value:"Co je soubor minidump?",id:"co-je-soubor-minidump",level:2},{value:"Nastaven\xed syst\xe9mu Windows pro vytvo\u0159en\xed souboru minidump",id:"nastaven\xed-syst\xe9mu-windows-pro-vytvo\u0159en\xed-souboru-minidump",level:2}],u={toc:m};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"T\xe9m\u011b\u0159 v\u0161ichni u\u017eivatel\xe9 syst\xe9mu Windows bohu\u017eel znaj\xed chybu ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_screen_of_death"},"Modr\xe1 obrazovka smrti (BSoD)"),". K BSoD doch\xe1z\xed, kdy\u017e syst\xe9m Windows naraz\xed na probl\xe9my, kter\xe9 mohou ovlivnit bezpe\u010dn\xfd provoz syst\xe9mu, nap\u0159. probl\xe9my s k\xf3dem ovlada\u010de t\u0159et\xed strany, hardwarem nebo k\xf3dem spole\u010dnosti Microsoft. K vy\u0159e\u0161en\xed chyby modr\xe9 obrazovky mohou u\u017eivatel\xe9 pou\u017e\xedt soubor minidump."),(0,r.kt)("h2",{id:"co-je-soubor-minidump"},"Co je soubor minidump?"),(0,r.kt)("p",null,"Soubor minidump je soubor, kter\xfd obsahuje informace o povaze p\xe1du syst\xe9mu. Vytvo\u0159\xed se t\u011bsn\u011b p\u0159ed zobrazen\xedm modr\xe9 obrazovky a obsahuje minimum u\u017eite\u010dn\xfdch informac\xed, kter\xe9 lze pou\u017e\xedt k \u0159e\u0161en\xed probl\xe9mu. Soubor minidump m\xe1 obvykle p\u0159\xedponu ",(0,r.kt)("em",{parentName:"p"},".dmp"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"V syst\xe9mu Windows 10 se na modr\xe9 obrazovce zobraz\xed k\xf3d pro ukon\u010den\xed a QR k\xf3d. U\u017eivatel m\u016f\u017ee tyto informace pou\u017e\xedt a vyhledat na webu konkr\xe9tn\xed probl\xe9m.")),(0,r.kt)("p",null,"Mo\u017enost vytvo\u0159en\xed souboru minidump je ve v\xfdchoz\xedm nastaven\xed zak\xe1z\xe1na, tak\u017ee ne\u017e se podrobn\u011bji sezn\xe1m\xedme s t\xedm, jak soubor pou\u017e\xedvat, pod\xedvejme se bl\xed\u017ee na to, jak tuto mo\u017enost povolit."),(0,r.kt)("h2",{id:"nastaven\xed-syst\xe9mu-windows-pro-vytvo\u0159en\xed-souboru-minidump"},"Nastaven\xed syst\xe9mu Windows pro vytvo\u0159en\xed souboru minidump"),(0,r.kt)("p",null,"Even if you don\u2019t experience any BSoD crash errors, you can still set this option \u2014 this is a general recommendation, not necessarily related to AdGuard products. Pro automatick\xe9 vytvo\u0159en\xed souboru minidump postupujte podle n\xed\u017ee uveden\xfdch pokyn\u016f."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Do vyhled\xe1vac\xedho pole Windows napi\u0161te ",(0,r.kt)("em",{parentName:"p"},"sysdm.cpl")," a klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Otev\u0159\xedt"),". Na obrazovce se zobraz\xed okno ",(0,r.kt)("strong",{parentName:"p"},"Vlastnosti syst\xe9mu"),"."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, click ",(0,r.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"System")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"About")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Advanced system settings"),".")))),(0,r.kt)("p",null,":::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"![System Properties *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na kartu ",(0,r.kt)("strong",{parentName:"p"},"Up\u0159esnit"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"V \u010d\xe1sti ",(0,r.kt)("strong",{parentName:"p"},"Spou\u0161t\u011bn\xed a zotaven\xed syst\xe9mu")," klikn\u011bte na ",(0,r.kt)("strong",{parentName:"p"},"Nastaven\xed"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png",alt:"Startup and Recovery *mobile_border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Povolte n\xe1sleduj\xedc\xed t\u0159i mo\u017enosti:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Zapsat ud\xe1lost do syst\xe9mov\xe9ho protokolu"),(0,r.kt)("li",{parentName:"ul"},"Automaticky restartovat"),(0,r.kt)("li",{parentName:"ul"},"Zapsat lad\xedc\xed informace \u2192 Zkr\xe1cen\xfd v\xfdpis stavu pam\u011bti (256 kb)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/nmr4eThree_options.png",alt:"Three options *mobile_border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kliknut\xedm na ",(0,r.kt)("strong",{parentName:"p"},"OK")," nastaven\xed ulo\u017ete.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restartujte po\u010d\xedta\u010d."))),(0,r.kt)("p",null,"\xdasp\u011b\u0161n\u011b jste povolili vytvo\u0159en\xed souboru minidump. Nyn\xed se automaticky vytvo\u0159\xed p\u0159i p\xe1du syst\xe9mu."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ve v\xfdchoz\xedm nastaven\xed je soubor minidump ulo\u017een ve slo\u017ece ",(0,r.kt)("strong",{parentName:"p"},"%SystemRoot%\\Minidump"),". Um\xedst\u011bn\xed adres\xe1\u0159e m\u016f\u017eete zm\u011bnit na libovoln\xe9, ale nezapome\u0148te, \u017ee mnoho program\u016f je nastaveno tak, aby toto um\xedst\u011bn\xed hledaly ve v\xfdchoz\xedm nastaven\xed, proto doporu\u010dujeme um\xedst\u011bn\xed nem\u011bnit.")))}l.isMDXComponent=!0}}]);