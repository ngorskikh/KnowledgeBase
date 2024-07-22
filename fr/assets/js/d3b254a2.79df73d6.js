"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1161],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||s;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const s={title:"Extensions",sidebar_position:8},i=void 0,o={unversionedId:"adguard-for-mac/features/extensions",id:"adguard-for-mac/features/extensions",title:"Extensions",description:"Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment il fonctionne, t\xe9l\xe9chargez l'application AdGuard",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-mac/features/extensions.md",sourceDirName:"adguard-for-mac/features",slug:"/adguard-for-mac/features/extensions",permalink:"/KnowledgeBase/fr/adguard-for-mac/features/extensions",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/features/extensions.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Extensions",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Assistant de navigateur",permalink:"/KnowledgeBase/fr/adguard-for-mac/features/browser-assistant"},next:{title:"R\xe9seau",permalink:"/KnowledgeBase/fr/adguard-for-mac/features/network"}},u={},l=[{value:"Assistant AdGuard (ancien)",id:"assistant-adguard-ancien",level:2},{value:"AdGuard Extra",id:"adguard-extra",level:2}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment il fonctionne, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"t\xe9l\xe9chargez l'application AdGuard"))),(0,a.kt)("p",null,"AdGuard vous permet d'installer des extensions, ou scripts utilisateur, pour augmenter les fonctionnalit\xe9s du navigateur. AdGuard peut fonctionner comme un gestionnaire de scripts utilisateur multi-navigateurs\xa0: vous n'avez pas besoin d'installer le m\xeame script utilisateur pour chaque navigateur."),(0,a.kt)("p",null,"Certains scripts utilisateur sont pr\xe9install\xe9s, d'autres peuvent \xeatre install\xe9s manuellement."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/extensions.png",alt:"Extensions"})),(0,a.kt)("h2",{id:"assistant-adguard-ancien"},"Assistant AdGuard (ancien)"),(0,a.kt)("p",null,"Ce script utilisateur vous permet de g\xe9rer la protection AdGuard directement depuis votre navigateur. Alors que le ",(0,a.kt)("a",{parentName:"p",href:"/adguard-for-mac/features/browser-assistant"},"nouvel Assistant")," est une extension de navigateur qui peut \xeatre install\xe9e \xe0 partir de la boutique de votre navigateur, l'ancien Assistant est un script utilisateur qui ne n\xe9cessite aucune installation suppl\xe9mentaire. Certaines fonctionnalit\xe9s sont les m\xeames pour les deux assistants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activation ou d\xe9sactivation de la protection d'un site web sp\xe9cifique"),(0,a.kt)("li",{parentName:"ul"},"Interrompez la protection pendant 30 secondes"),(0,a.kt)("li",{parentName:"ul"},"Bloquez une annonce manuellement"),(0,a.kt)("li",{parentName:"ul"},"Signalez un blocage incorrect")),(0,a.kt)("p",null,"Cependant, le nouvel Assistant est plus avanc\xe9. Il permet \xe9galement de g\xe9rer la protection AdGuard pour tous les sites web, de v\xe9rifier le certificat du site web, de g\xe9rer le filtrage HTTPS et d'ouvrir le journal de filtrage ou les param\xe8tres de l'application. Nous vous recommandons d'utiliser l'ancien Assistant uniquement si le nouvel Assistant n'est pas disponible."),(0,a.kt)("h2",{id:"adguard-extra"},"AdGuard Extra"),(0,a.kt)("p",null,"Ce script utilisateur r\xe9sout les probl\xe8mes de blocage des publicit\xe9s les plus complexes lorsque les r\xe8gles habituelles ne suffisent pas. Il emp\xeache \xe9galement les sites web de contourner les bloqueurs de publicit\xe9 et de r\xe9ins\xe9rer les publicit\xe9s bloqu\xe9es. Nous vous recommandons de le garder activ\xe9 \xe0 tout moment."),(0,a.kt)("p",null,"Pour installer un script utilisateur, cliquez sur ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),". Vous pouvez trouver des scripts utilisateur sur ",(0,a.kt)("a",{parentName:"p",href:"https://greasyfork.org/"},"greasyfork.org"),"."))}c.isMDXComponent=!0}}]);