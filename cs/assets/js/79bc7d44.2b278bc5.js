"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8630],{4137:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),p=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,k=c["".concat(u,".").concat(m)]||c[m]||l[m]||o;return t?a.createElement(k,i(i({ref:r},s),{},{components:t})):a.createElement(k,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=c;var d={};for(var u in r)hasOwnProperty.call(r,u)&&(d[u]=r[u]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=t(7462),n=(t(7294),t(4137));const o={title:"Integrace s AdGuard VPN",sidebar_position:8},i=void 0,d={unversionedId:"adguard-for-android/features/integration-with-vpn",id:"adguard-for-android/features/integration-with-vpn",title:"Integrace s AdGuard VPN",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, st\xe1hn\u011bte si AdGuard pro Android",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/features/integration-with-vpn.md",sourceDirName:"adguard-for-android/features",slug:"/adguard-for-android/features/integration-with-vpn",permalink:"/KnowledgeBase/cs/adguard-for-android/features/integration-with-vpn",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/features/integration-with-vpn.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Integrace s AdGuard VPN",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Za\u0159\xedzen\xed s p\u0159\xedstupem root",permalink:"/KnowledgeBase/cs/adguard-for-android/features/rooted"},next:{title:"Instalace",permalink:"/KnowledgeBase/cs/adguard-for-android/installation"}},u={},p=[],s={toc:p};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si AdGuard pro Android"))),(0,n.kt)("p",null,"AdGuard pro Android vytv\xe1\u0159\xed lok\xe1ln\xed VPN pro filtrov\xe1n\xed provozu. P\u0159i spu\u0161t\u011bn\xe9 aplikaci AdGuard pro Android tedy nelze pou\u017e\xedvat jin\xe9 aplikace VPN. Aplikace AdGuard i ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN")," v\u0161ak maj\xed re\u017eimy integrace, kter\xe9 umo\u017e\u0148uj\xed jejich spole\u010dn\xe9 pou\u017e\xedv\xe1n\xed."),(0,n.kt)("p",null,"V tomto re\u017eimu funguje AdGuard VPN jako odchoz\xed proxy, p\u0159es kter\xfd Blok\xe1tor reklam AdGuard sm\u011bruje sv\u016fj provoz. To umo\u017e\u0148uje AdGuardu vytvo\u0159it rozhran\xed VPN a blokovat reklamy a sl\xeddi\u010de lok\xe1ln\u011b, zat\xedmco AdGuard VPN sm\u011bruje ve\u0161ker\xfd provoz p\u0159es vzd\xe1len\xfd server."),(0,n.kt)("p",null,"Pokud AdGuard VPN ukon\u010d\xedte, p\u0159estane ji AdGuard pou\u017e\xedvat jako odchoz\xed proxy server. Pokud AdGuard zak\xe1\u017eete, bude AdGuard VPN sm\u011brovat provoz p\u0159es vlastn\xed rozhran\xed VPN."),(0,n.kt)("p",null,"Pokud m\xe1te Blok\xe1tor reklam AdGuard a nainstalujete AdGuard VPN, blok\xe1tor reklam to detekuje a automaticky povol\xed ",(0,n.kt)("em",{parentName:"p"},"Integraci s AdGuard VPN"),". Tot\xe9\u017e se d\u011bje i obr\xe1cen\u011b. V\u0161imn\u011bte si, \u017ee pokud jste povolili integraci, nebudete moci spravovat v\xfdjimky aplikac\xed a p\u0159ipojovat se k DNS server\u016fm z aplikace AdGuard VPN. Aplikace, kter\xe9 maj\xed b\xfdt sm\u011brov\xe1ny p\u0159es tunel VPN, m\u016f\u017eete ur\u010dit prost\u0159ednictv\xedm ",(0,n.kt)("em",{parentName:"p"},"Nastaven\xed")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Filtrov\xe1n\xed")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"S\xed\u0165")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Aplikace provozovan\xe9 skrze proxy"),". Chcete-li vybrat DNS server, otev\u0159ete AdGuard \u2192 ",(0,n.kt)("em",{parentName:"p"},"Ochrana")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS ochrana")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"DNS server"),"."))}l.isMDXComponent=!0}}]);