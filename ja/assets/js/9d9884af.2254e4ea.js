"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9182],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,k=u["".concat(l,".").concat(c)]||u[c]||s[c]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(7462),i=(n(7294),n(4137));const a={title:"BSoD\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u305f\u3081\u306eminidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5",sidebar_position:8},o=void 0,p={unversionedId:"guides/minidump",id:"guides/minidump",title:"BSoD\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u305f\u3081\u306eminidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5",description:"\u307b\u3068\u3093\u3069\u306eWindows\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u6b8b\u5ff5\u306a\u304c\u3089\u30d6\u30eb\u30fc\u30b9\u30af\u30ea\u30fc\u30f3\u30aa\u30d6\u30c7\u30b9\uff08BSoD\uff09\u30a8\u30e9\u30fc\u306b\u76f4\u9762\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002 BSoD\u306f\u3001Windows\u30b7\u30b9\u30c6\u30e0\u304c\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30c9\u30e9\u30a4\u30d0\u30fc\u30b3\u30fc\u30c9\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3001\u30de\u30a4\u30af\u30ed\u30bd\u30d5\u30c8\u306e\u30b3\u30fc\u30c9\u306e\u554f\u984c\u306e\u3088\u3046\u306a\u3001\u5b89\u5168\u306a\u30b7\u30b9\u30c6\u30e0\u64cd\u4f5c\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u554f\u984c\u306b\u906d\u9047\u3057\u305f\u3068\u304d\u306b\u767a\u751f\u3057\u307e\u3059\u3002 \u30d6\u30eb\u30fc\u30b9\u30af\u30ea\u30fc\u30f3\u30a8\u30e9\u30fc\u3092\u89e3\u6c7a\u3059\u308b\u306b\u306f\u3001\u30df\u30cb\u30c0\u30f3\u30d7\uff08minidump\uff09\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/minidump.md",sourceDirName:"guides",slug:"/guides/minidump",permalink:"/KnowledgeBase/ja/guides/minidump",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/minidump.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"BSoD\u30a8\u30e9\u30fc\u3092\u4fee\u6b63\u3059\u308b\u305f\u3081\u306eminidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Google \u30d5\u30a1\u30df\u30ea\u30fc\u30ea\u30f3\u30af\u3067HTTPS\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5",permalink:"/KnowledgeBase/ja/guides/family-link-certificate"},next:{title:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u30d6\u30ed\u30c3\u30af\u3059\u308b\u65b9\u6cd5",permalink:"/KnowledgeBase/ja/guides/block-push-notifications"}},l={},m=[{value:"\u30df\u30cb\u30c0\u30f3\u30d7\uff08minidump\uff09\u30d5\u30a1\u30a4\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b?",id:"\u30df\u30cb\u30c0\u30f3\u30d7minidump\u30d5\u30a1\u30a4\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b",level:2},{value:"minidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306bWindows\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u65b9\u6cd5",id:"minidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306bwindows\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u65b9\u6cd5",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u307b\u3068\u3093\u3069\u306eWindows\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u6b8b\u5ff5\u306a\u304c\u3089",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_screen_of_death"},"\u30d6\u30eb\u30fc\u30b9\u30af\u30ea\u30fc\u30f3\u30aa\u30d6\u30c7\u30b9\uff08BSoD\uff09"),"\u30a8\u30e9\u30fc\u306b\u76f4\u9762\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002 BSoD\u306f\u3001Windows\u30b7\u30b9\u30c6\u30e0\u304c\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30c9\u30e9\u30a4\u30d0\u30fc\u30b3\u30fc\u30c9\u3001\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3001\u30de\u30a4\u30af\u30ed\u30bd\u30d5\u30c8\u306e\u30b3\u30fc\u30c9\u306e\u554f\u984c\u306e\u3088\u3046\u306a\u3001\u5b89\u5168\u306a\u30b7\u30b9\u30c6\u30e0\u64cd\u4f5c\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u554f\u984c\u306b\u906d\u9047\u3057\u305f\u3068\u304d\u306b\u767a\u751f\u3057\u307e\u3059\u3002 \u30d6\u30eb\u30fc\u30b9\u30af\u30ea\u30fc\u30f3\u30a8\u30e9\u30fc\u3092\u89e3\u6c7a\u3059\u308b\u306b\u306f\u3001\u30df\u30cb\u30c0\u30f3\u30d7\uff08minidump\uff09\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30df\u30cb\u30c0\u30f3\u30d7minidump\u30d5\u30a1\u30a4\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b"},"\u30df\u30cb\u30c0\u30f3\u30d7\uff08minidump\uff09\u30d5\u30a1\u30a4\u30eb\u3068\u306f\u4f55\u3067\u3059\u304b?"),(0,i.kt)("p",null,"\u30df\u30cb\u30c0\u30f3\u30d7\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30af\u30e9\u30c3\u30b7\u30e5\u306e\u6027\u8cea\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u542b\u3080\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002 \u30d6\u30eb\u30fc\u30b9\u30af\u30ea\u30fc\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u76f4\u524d\u306b\u4f5c\u6210\u3055\u308c\u3001\u554f\u984c\u89e3\u6c7a\u306b\u4f7f\u3048\u308b\u6700\u4f4e\u9650\u306e\u6709\u76ca\u306a\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30df\u30cb\u30c0\u30f3\u30d7\u30d5\u30a1\u30a4\u30eb\u306e\u62e1\u5f35\u5b50\u306f\u901a\u5e38",(0,i.kt)("em",{parentName:"p"},".dmp"),"\u3067\u3059\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Windows 10\u3067\u306f\u3001\u30d6\u30eb\u30fc\u30b9\u30af\u30ea\u30fc\u30f3\u306b\u30b9\u30c8\u30c3\u30d7\u30b3\u30fc\u30c9\u3068QR\u30b3\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u30e6\u30fc\u30b6\u30fc\u306f\u3053\u306e\u60c5\u5831\u3092\u4f7f\u3063\u3066\u3001\u7279\u5b9a\u306e\u554f\u984c\u3092\u30a6\u30a7\u30d6\u3067\u691c\u7d22\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("p",null,"\u30df\u30cb\u30c0\u30f3\u30d7\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u4f7f\u3044\u65b9\u3092\u8a73\u3057\u304f\u8aac\u660e\u3059\u308b\u524d\u306b\u3001\u4f5c\u6210\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8a73\u3057\u304f\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("h2",{id:"minidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306bwindows\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u65b9\u6cd5"},"minidump\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306bWindows\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u65b9\u6cd5"),(0,i.kt)("p",null,"Even if you don\u2019t experience any BSoD crash errors, you can still set this option \u2014 this is a general recommendation, not necessarily related to AdGuard products. \u30df\u30cb\u30c0\u30f3\u30d7\u30d5\u30a1\u30a4\u30eb\u3092\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Windows\u306e\u691c\u7d22\u30d0\u30fc\u306b\u300c",(0,i.kt)("em",{parentName:"p"},"sysdm.cpl"),"\u300d\u3068\u5165\u529b\u3057\u3001\u300c",(0,i.kt)("strong",{parentName:"p"},"\u958b\u304f"),"\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 ",(0,i.kt)("strong",{parentName:"p"},"\u30b7\u30b9\u30c6\u30e0\u30fb\u30d7\u30ed\u30d1\u30c6\u30a3\u30fb\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d1\u30cd\u30eb\u30fb\u30e1\u30cb\u30e5\u30fc"),"\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively, click ",(0,i.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"System")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"About")," \u2192 ",(0,i.kt)("strong",{parentName:"p"},"Advanced system settings"),".")))),(0,i.kt)("p",null,":::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![\u30b7\u30b9\u30c6\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3 *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u8a73\u7d30\u8a2d\u5b9a"),"\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3068\u30ea\u30ab\u30d0\u30ea"),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001",(0,i.kt)("strong",{parentName:"p"},"\u8a2d\u5b9a"),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png",alt:"\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3068\u30ea\u30ab\u30d0\u30ea *mobile_border"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e3\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3057\u307e\u3059:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30b7\u30b9\u30c6\u30e0\u30ed\u30b0\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u66f8\u304d\u8fbc\u3080"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52d5\u7684\u306b\u518d\u8d77\u52d5"),(0,i.kt)("li",{parentName:"ul"},"\u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u306e\u66f8\u304d\u8fbc\u307f \u2192 \u5c0f\u578b\u30e1\u30e2\u30ea\u30fc\u30c0\u30f3\u30d7\uff08256kb\uff09")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/nmr4eThree_options.png",alt:"3\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3 *mobile_border"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"OK"),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u8a2d\u5b9a\u3092\u9069\u7528\u3057\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3092\u518d\u8d77\u52d5\u3057\u307e\u3059\u3002"))),(0,i.kt)("p",null,"\u3053\u308c\u3067\u30df\u30cb\u30c0\u30f3\u30d7\u30d5\u30a1\u30a4\u30eb\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3057\u305f\u3002 \u3053\u308c\u3067\u3001\u30b7\u30b9\u30c6\u30e0\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3057\u305f\u3068\u304d\u306b\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30df\u30cb\u30c0\u30f3\u30d7\u30d5\u30a1\u30a4\u30eb\u306f",(0,i.kt)("strong",{parentName:"p"},"%SystemRoot%\\Minidump"),"\u30d5\u30a9\u30eb\u30c0\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u5834\u6240\u306f\u597d\u304d\u306a\u3088\u3046\u306b\u5909\u66f4\u3067\u304d\u307e\u3059\u304c\u3001\u591a\u304f\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3053\u306e\u5834\u6240\u3092\u63a2\u3059\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0}}]);