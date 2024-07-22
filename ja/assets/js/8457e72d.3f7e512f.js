"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1851],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(n),c=a,d=k["".concat(i,".").concat(c)]||k[c]||u[c]||l;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(4137));const l={title:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u65b9\u6cd5",sidebar_position:5},p=void 0,o={unversionedId:"guides/take-screenshot",id:"guides/take-screenshot",title:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u65b9\u6cd5",description:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3068\u306f\u3001\u30d1\u30bd\u30b3\u30f3\u3084\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u753b\u9762\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u305f\u3082\u306e\u3067\u3001\u6a19\u6e96\u7684\u306a\u30c4\u30fc\u30eb\u3084\u5c02\u7528\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u30fb\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3057\u3066\u64ae\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/take-screenshot.md",sourceDirName:"guides",slug:"/guides/take-screenshot",permalink:"/KnowledgeBase/ja/guides/take-screenshot",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/take-screenshot.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u65b9\u6cd5",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u30d0\u30b0\u30fb\u4e0d\u5177\u5408\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",permalink:"/KnowledgeBase/ja/guides/report-bugs"},next:{title:"\u30a2\u30c9\u30a6\u30a7\u30a2\u3068\u30a6\u30a4\u30eb\u30b9",permalink:"/KnowledgeBase/ja/guides/adware"}},i={},m=[{value:"Android \u306e\u5834\u5408",id:"android",level:3},{value:"iOS \uff08iPhone/iPad\uff09\u306e\u5834\u5408",id:"ios",level:3},{value:"Windows \u306e\u5834\u5408",id:"windows",level:3},{value:"macOS \u306e\u5834\u5408",id:"mac",level:3}],s={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3068\u306f\u3001\u30d1\u30bd\u30b3\u30f3\u3084\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u306e\u753b\u9762\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u305f\u3082\u306e\u3067\u3001\u6a19\u6e96\u7684\u306a\u30c4\u30fc\u30eb\u3084\u5c02\u7528\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u30fb\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3057\u3066\u64ae\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b5\u30dd\u30fc\u30c8\u30c1\u30fc\u30e0\u304b\u3089\u3001\u554f\u984c\u3092\u3088\u308a\u3088\u304f\u628a\u63e1\u3059\u308b\u305f\u3081\u306b\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8981\u6c42\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002 \u3053\u3061\u3089\u3067\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3084\u30e2\u30d0\u30a4\u30eb\u7aef\u672b\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30ad\u30fc\u304c\u3059\u3079\u3066\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"android"},"Android \u306e\u5834\u5408"),(0,a.kt)("p",null,"Android\u7aef\u672b\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u6a5f\u7a2e\u3084\u30e1\u30fc\u30ab\u30fc\u306b\u3088\u3063\u3066\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u3001Android \u3067\u306f\u6b21\u306e\u30dc\u30bf\u30f3\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308c\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u97f3\u91cf\u4e0b\u3052\u308b\u30dc\u30bf\u30f3"),"\u3068",(0,a.kt)("em",{parentName:"strong"},"\u96fb\u6e90\u30dc\u30bf\u30f3"),"\u3092\u540c\u6642\u306b\u62bc\u3059"))),(0,a.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u753b\u9762\u5168\u4f53\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u3001\u5199\u771f\u3068\u3057\u3066\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002 \u64ae\u3063\u305f\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306f\u30ae\u30e3\u30e9\u30ea\u30fc\u306e\u300c",(0,a.kt)("em",{parentName:"p"},"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8"),"\u300d\u30d5\u30a9\u30eb\u30c0\u30fc\u3067\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u53e4\u3044\u30c7\u30d0\u30a4\u30b9\u306e\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u30db\u30fc\u30e0\u30dc\u30bf\u30f3"),"\u3068",(0,a.kt)("em",{parentName:"strong"},"\u96fb\u6e90\u30dc\u30bf\u30f3"),"\u3092\u540c\u6642\u306b\u62bc\u3059")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u623b\u308b\u30dc\u30bf\u30f3"),"\u3068",(0,a.kt)("em",{parentName:"strong"},"\u96fb\u6e90\u30dc\u30bf\u30f3"),"\u3092\u540c\u6642\u306b\u62bc\u3059"))),(0,a.kt)("p",null,"Android 8 \u4ee5\u964d\u3067\u306f\u3001\u4ed6\u306e\u64cd\u4f5c\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u753b\u9762\u4e0a\u3067\u624b\u3092 90 \u5ea6\u306e\u89d2\u5ea6\u3067\u30b9\u30ef\u30a4\u30d7\u3057\u3066\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u305f\u308a (Samsung \u30c7\u30d0\u30a4\u30b9)\u30013 \u672c\u306e\u6307\u3067\u4e0b\u306b\u30b9\u30ef\u30a4\u30d7\u3057\u305f\u308a (OnePlus \u30c7\u30d0\u30a4\u30b9) \u3059\u308b\u306a\u3069\u3068\u3044\u3046\u65b9\u6cd5\u3082\u3042\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u305f\u3081\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30e1\u30fc\u30ab\u30fc\u3084\u30e2\u30c7\u30eb\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002 \u30c7\u30d0\u30a4\u30b9\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3001\u6700\u9069\u306a\u65b9\u6cd5\u3092\u898b\u3064\u3051\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u3055\u3089\u306b\u3001\u7aef\u672b\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u5c02\u7528\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001 ",(0,a.kt)("em",{parentName:"p"},"Screenshot Easy"),"\u3001 ",(0,a.kt)("em",{parentName:"p"},"Screenshot Ultimate"),"\u3001 ",(0,a.kt)("em",{parentName:"p"},"Screenshot Snap"),"\u306a\u3069\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"ios"},"iOS \uff08iPhone/iPad\uff09\u306e\u5834\u5408"),(0,a.kt)("p",null,"iOS\u7aef\u672b\uff08\u53e4\u3044\u3082\u306e\u3092\u9664\u304f\uff09\u3067\u3042\u308c\u3070\u3001\u6a19\u6e96\u7684\u306a\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"iPhone/iPad\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u6b21\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u96fb\u6e90"),"\uff08\u30b5\u30a4\u30c9\uff09\u30dc\u30bf\u30f3\u3068 ",(0,a.kt)("em",{parentName:"strong"},"\u30db\u30fc\u30e0")," \u30dc\u30bf\u30f3\u3092\u540c\u6642\u306b\u62bc\u3057\u3001\u3059\u3070\u3084\u304f\u96e2\u3059"))),(0,a.kt)("p",null,"\u3010iPhone X\u4ee5\u964d\u306e\u5834\u5408\u3011"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u96fb\u6e90"),"\uff08\u30b5\u30a4\u30c9\uff09\u30dc\u30bf\u30f3\u3068 ",(0,a.kt)("em",{parentName:"strong"},"\u97f3\u91cf\u30a2\u30c3\u30d7"),"\u30dc\u30bf\u30f3\u3092\u540c\u6642\u306b\u62bc\u3057\u3001\u3059\u3070\u3084\u304f\u96e2\u3059"))),(0,a.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u753b\u9762\u5168\u4f53\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u3001\u5199\u771f\u3068\u3057\u3066\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002 \u6a19\u6e96\u306e\u300c\u30d5\u30a9\u30c8\u300d\u30a2\u30d7\u30ea\u3067\u5148\u307b\u3069\u3068\u3063\u305f\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"windows"},"Windows \u306e\u5834\u5408"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001 ",(0,a.kt)("em",{parentName:"strong"},"PrtScn"),"\u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"))),(0,a.kt)("p",null,"\u4e00\u90e8\u306e\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3\u3067\u306f\u3001 ",(0,a.kt)("em",{parentName:"p"},"Fn")," \u3092\u62bc\u3057\u306a\u304c\u3089 ",(0,a.kt)("em",{parentName:"p"},"PrtScn")," \u3092\u62bc\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u203bPrtScn\uff08Print Screen\uff09\u30ad\u30fc\u306f\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u306b\u3088\u3063\u3066PrntScrn\u3001PrtScn\u3001PrtScr\u3001PrtSc \u3068\u7565\u3057\u65b9\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"Windows\u306f\u753b\u9762\u5168\u4f53\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\u4f7f\u7528\u4e2d\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u6b21\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Alt")," \u3092\u62bc\u3057\u306a\u304c\u3089\u3001 ",(0,a.kt)("em",{parentName:"strong"},"PrtScn")," (\u6a5f\u7a2e\u306b\u3088\u3063\u3066\u306f ",(0,a.kt)("em",{parentName:"strong"},"Fn + Alt + PrtScn"),") \u3092\u62bc\u3057\u307e\u3059\u3002"))),(0,a.kt)("p",null,"\u753b\u9762\u4e0a\u306e\u7279\u5b9a\u9818\u57df\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u6b21\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"**"),"Win + Shift + S",(0,a.kt)("strong",{parentName:"li"},"**"))),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u3063\u305f\u5f8c\u3001\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002 \u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001 ",(0,a.kt)("em",{parentName:"p"},"Ctrl + V")," \u3068\u3044\u3046\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30ad\u30fc\u3067\u3001\u73fe\u5728\u7de8\u96c6\u4e2d\u306e\u6587\u66f8\u306b\u30da\u30fc\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u6a19\u6e96\u306e\u300c",(0,a.kt)("strong",{parentName:"p"},"\u30da\u30a4\u30f3\u30c8"),"\u300d\u30d7\u30ed\u30b0\u30e9\u30e0\uff08\u307e\u305f\u306f\u753b\u50cf\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\uff09\u3092\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002 Ctrl+V \u3001\u307e\u305f\u306f\u8cbc\u308a\u4ed8\u3051\u30dc\u30bf\u30f3\uff08\u901a\u5e38\u3001\u753b\u9762\u306e\u5de6\u4e0a\u9685\uff09\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u8cbc\u308a\u4ed8\u3051\u3001\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"Windows 8 \u3068 10 \u3067\u306f\u3001 ",(0,a.kt)("em",{parentName:"p"},"Win + PrtScn")," \u3068\u3044\u3046\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3067\u3001\u975e\u5e38\u306b\u7d20\u65e9\u304f\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30ad\u30fc\u3092\u62bc\u3059\u3068\u540c\u6642\u306b\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306f\u81ea\u52d5\u7684\u306b\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u300c",(0,a.kt)("em",{parentName:"p"},"\u5199\u771f"),"\u300d\u2192\u300c",(0,a.kt)("em",{parentName:"p"},"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8"),"\u300d\u30d5\u30a9\u30eb\u30c0\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u305f\u3081\u306e\u5c02\u7528\u30d7\u30ed\u30b0\u30e9\u30e0\u300c ",(0,a.kt)("em",{parentName:"p"},"Snipping Tool")," \u300d\u304c\u3042\u308a\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306e\u30b9\u30bf\u30fc\u30c8\u30e1\u30cb\u30e5\u30fc\u306b\u3042\u308b\u6a19\u6e96\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4e2d\u304b\u3089\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 Snipping Tool \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306e\u4efb\u610f\u306e\u9818\u57df\u307e\u305f\u306f\u753b\u9762\u5168\u4f53\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f7f\u3063\u3066\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u3063\u305f\u5f8c\u3001\u753b\u50cf\u3092\u7de8\u96c6\u3057\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306e\u4efb\u610f\u306e\u30d5\u30a9\u30eb\u30c0\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u307b\u304b\u3001 \u300c",(0,a.kt)("strong",{parentName:"p"},"PicPick"),"\u300d\u300c",(0,a.kt)("strong",{parentName:"p"},"Nimbus Screenshot"),"\u300d\u300c",(0,a.kt)("strong",{parentName:"p"},"Screenshot Captor"),"\u300d\u300c",(0,a.kt)("strong",{parentName:"p"},"Snipaste"),"\u300d\u300c",(0,a.kt)("strong",{parentName:"p"},"Monosnap"),"\u300d\u306a\u3069\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u305f\u3081\u306e\u69d8\u3005\u306a\u30a2\u30d7\u30ea\u3092\u4f7f\u3063\u3066\u307f\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"mac"},"macOS \u306e\u5834\u5408"),(0,a.kt)("p",null,"Mac\u3067\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"**"),"\u2318 Cmd + Shift + 3",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"}," \u3092\u540c\u6642\u306b\u62bc\u3057\u307e\u3059\u3002")))),(0,a.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u753b\u9762\u5168\u4f53\u304c\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u3001\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u73fe\u5728\u4f7f\u7528\u4e2d\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u6b21\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"*"),"\u2318 Cmd + Shift + 4 + Space",(0,a.kt)("strong",{parentName:"li"},"* \u3092\u540c\u6642\u306b\u9577\u62bc\u3057\u3057\u307e\u3059\u3002 \u30dd\u30a4\u30f3\u30bf\u30fc\u304c\u30ab\u30e1\u30e9\u30a2\u30a4\u30b3\u30f3\u306b\u5909\u308f\u308a\u307e\u3059\u3002 \u64ae\u308a\u305f\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u307e\u3059\u3002 \uff08\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306e\u64ae\u5f71\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u306b\u306f\u3001Esc\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u307e\u3059\u3002\uff09"))),(0,a.kt)("p",null,"\u753b\u9762\u4e0a\u306e\u7279\u5b9a\u9818\u57df\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u6b21\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"**"),"\u2318 Cmd + Shift + 5",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"}," \u3092\u62bc\u3057\u307e\u3059")),"\u3002 \u5341\u5b57\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u5fc5\u8981\u306a\u9818\u57df\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u30de\u30a6\u30b9\u307e\u305f\u306f\u30c8\u30e9\u30c3\u30af\u30d1\u30c3\u30c9\u3092\u96e2\u3059\u3068\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u304c\u64ae\u5f71\u3055\u308c\u307e\u3059\uff08Esc\u30ad\u30fc\u3067\u64ae\u5f71\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u3059\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u30bf\u30c3\u30c1\u30d0\u30fc")," (MacBook Pro)\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"**"),"\u2318 Cmd + Shift + 6",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"}," \u3092\u540c\u6642\u306b\u62bc\u3057\u307e\u3059\u3002")))),(0,a.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066",(0,a.kt)("em",{parentName:"p"},"\u30bf\u30c3\u30c1\u30d0\u30fc"),"\u5168\u4f53\u304c\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u3001\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306b\u4fdd\u5b58\u3057\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u4fdd\u5b58\u305b\u305a\u306b\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3059\u308b\u306b\u306f\u3001 ",(0,a.kt)("em",{parentName:"p"},"Ctrl")," \u3092\u62bc\u3057\u306a\u304c\u3089\u3001\u4e0a\u8a18\u306e\u3044\u305a\u308c\u304b\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u305d\u306e\u5f8c\u3001 ",(0,a.kt)("em",{parentName:"p"},"Cmd + V")," \u3067\u3001\uff08\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u304b\u3089\uff09\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u73fe\u5728\u7de8\u96c6\u4e2d\u306e\u6587\u66f8\u3001\u753b\u50cf\u3001\u30a2\u30d7\u30ea\u306a\u3069\u306b\u8cbc\u308a\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001 \u300c",(0,a.kt)("strong",{parentName:"p"},"\u30d7\u30ec\u30d3\u30e5\u30fc"),"\u300d\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001 \u300c",(0,a.kt)("strong",{parentName:"p"},"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b"),"\u300d \u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u64ae\u308b\uff08\u9078\u629e\u3057\u305f\u9818\u57df\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u3001\u307e\u305f\u306f\u753b\u9762\u5168\u4f53\uff09\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u300c",(0,a.kt)("strong",{parentName:"p"},"\u30d7\u30ec\u30d3\u30e5\u30fc"),"\u300d\u3067\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092 JPG\u3001TIFF\u3001PDF\u3001\u305d\u306e\u4ed6\u306e\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\u3067\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);