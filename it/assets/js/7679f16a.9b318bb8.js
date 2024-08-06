"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[624],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(4137));const a={title:"Cos'\xe8 un blocco di contenuti?",sidebar_position:1},o=void 0,l={unversionedId:"adguard-for-safari/features/content-blockers/content-blockers",id:"adguard-for-safari/features/content-blockers/content-blockers",title:"Cos'\xe8 un blocco di contenuti?",description:"Scheda dei blocchi di contenuti",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-safari/features/content-blockers/content-blockers.md",sourceDirName:"adguard-for-safari/features/content-blockers",slug:"/adguard-for-safari/features/content-blockers/",permalink:"/KnowledgeBase/it/adguard-for-safari/features/content-blockers/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/features/content-blockers/content-blockers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Cos'\xe8 un blocco di contenuti?",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Filtri",permalink:"/KnowledgeBase/it/adguard-for-safari/features/filters"},next:{title:"AdGuard Generale",permalink:"/KnowledgeBase/it/adguard-for-safari/features/content-blockers/adguard-general"}},c={},u=[],s={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png",alt:"Scheda dei blocchi di contenuti"})),(0,i.kt)("p",null,"Un blocco dei contenuti \xe8 un gruppo tematico di filtri. I filtri correlati alla privacy sono inclusi nel bloccatore di contenuti con il nome corrispondente, ",(0,i.kt)("em",{parentName:"p"},"AdGuard Privacy"),"."),(0,i.kt)("p",null,"Il Blocco dei contenuti \xe8 stato progettato per due motivi: strutturare i filtri e conformarsi alle limitazioni di Apple."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/blog/adguard-safari-1-5.html"},"Nel 2019"),", Apple ha inserito delle limitazioni sui bloccatori di inserzioni per Safari, consentendogli di utilizzare esclusivamente 50.000 regole di filtraggio simultaneamente. Poich\xe9 questo numero non era sufficiente affinch\xe9 un ad blocker fornisse una buona qualit\xe0 di filtraggio (Filtro di Base AdGuard da solo ha 30.000 regole di filtraggio), abbiamo suddiviso AdGuard per Safari in 6 blocchi dei contenuti ciascuno contenente fino a 50.000 regole."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/blog/adguard-for-safari-1-11.html"},"Nel 2022"),", Apple ha incrementato il limite delle regole di filtraggio per ogni bloccatore di contenuti a 150.000 regole applicate contemporaneamente. Per quanto riguarda AdGuard per Safari, \xe8 possibile abilitare fino a 900.000 regole per tutti e sei i blocchi dei contenuti."),(0,i.kt)("p",null,"Mentre il limite \xe8 stato aumentato, la struttura dei blocchi dei contenuti \xe8 rimasta la stessa."),(0,i.kt)("p",null,"Nella scheda Blocco dei Contenuti, puoi visualizzare quali sono abilitati, quante regole ognuno di essi sta utilizzando e quali filtri stanno funzionando."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Puoi gestire i filtri abilitati nella scheda dei Filtri. Nella sezione di Blocco dei Contenuti, puoi visualizzare soltanto l'elenco dei filtri gi\xe0 abilitati.")))}d.isMDXComponent=!0}}]);