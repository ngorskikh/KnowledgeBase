"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7932],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(4137));const i={title:"\u30b5\u30a4\u30c8\u4e0a\u554f\u984c\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",sidebar_position:3},o=void 0,l={unversionedId:"guides/report-website",id:"guides/report-website",title:"\u30b5\u30a4\u30c8\u4e0a\u554f\u984c\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",description:"\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u3001\u7279\u5b9a\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u306a\u304b\u3063\u305f\u308a\u3001\u30da\u30fc\u30b8\u306e\u8981\u7d20\u304c\u5d29\u308c\u305f\u308a\u30fb\u304a\u304b\u3057\u304f\u306a\u3063\u305f\u308a\u30fb\u58ca\u308c\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u554f\u984c\u306f\u3001\u4ee5\u4e0b\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u8981\u56e0\u3067\u767a\u751f\u3057\u305f\u308a\u3057\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/report-website.md",sourceDirName:"guides",slug:"/guides/report-website",permalink:"/KnowledgeBase/ja/guides/report-website",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/report-website.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u30b5\u30a4\u30c8\u4e0a\u554f\u984c\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to install a proxy certificate",permalink:"/KnowledgeBase/ja/guides/proxy-certificate"},next:{title:"How to report bugs",permalink:"/KnowledgeBase/ja/guides/report-bugs"}},s={},p=[{value:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",id:"report",level:2},{value:"AdGuard\u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u6a5f\u80fd\u306e\u5834\u5408",id:"extension",level:3},{value:"AdGuard for Windows \u306e\u5834\u5408",id:"windows",level:3},{value:"AdGuard for Android \u306e\u5834\u5408",id:"android",level:3},{value:"AdGuard for Mac \u306e\u5834\u5408",id:"mac",level:3},{value:"AdGuard for iOS \u306e\u5834\u5408",id:"ios",level:3},{value:"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u8a18\u5165\u3059\u308b\u65b9\u6cd5",id:"form",level:2},{value:"\u554f\u984c\u306e\u8a3a\u65ad\u65b9\u6cd5",id:"issue",level:2},{value:"<strong>\u30d5\u30a3\u30eb\u30bf</strong>",id:"\u30d5\u30a3\u30eb\u30bf",level:3},{value:"<strong>\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9</strong>",id:"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9",level:3},{value:"<strong>\u62e1\u5f35\u6a5f\u80fd</strong>",id:"\u62e1\u5f35\u6a5f\u80fd",level:3},{value:"<strong>\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30d6\u30ed\u30c3\u30ab\u30fc</strong>",id:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30d6\u30ed\u30c3\u30ab\u30fc",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u3001\u7279\u5b9a\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u306a\u304b\u3063\u305f\u308a\u3001\u30da\u30fc\u30b8\u306e\u8981\u7d20\u304c\u5d29\u308c\u305f\u308a\u30fb\u304a\u304b\u3057\u304f\u306a\u3063\u305f\u308a\u30fb\u58ca\u308c\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u554f\u984c\u306f\u3001\u4ee5\u4e0b\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u8981\u56e0\u3067\u767a\u751f\u3057\u305f\u308a\u3057\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u30eb\u30fc\u30eb\u304c\u6b63\u3057\u304f\u306a\u3044"),(0,n.kt)("li",{parentName:"ul"},"\u5e83\u544a\u3092\u8ffd\u52a0\u3059\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u5909\u66f4"),(0,n.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u304b\u3089\u306e\u30d5\u30a3\u30eb\u30bf\u30fc/\u62e1\u5f35\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u30d5\u30a3\u30eb\u30bf\u306e\u4f5c\u8005\u304c\u3001\u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u30df\u30b9\u3092\u3057\u305f"),(0,n.kt)("li",{parentName:"ul"},"\u5e83\u544a\u306e\u518d\u633f\u5165 Find more about this method in our ",(0,n.kt)("a",{parentName:"li",href:"https://adguard.com/en/blog/ad-reinsertion.html"},"blog"),".")),(0,n.kt)("p",null,"You can help us by filling in a form with examples of ads you have encountered. \u5831\u544a\u65b9\u6cd5\u306b\u95a2\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u304a\u4f7f\u3044\u306eOS\u306b\u5fdc\u3058\u305f\u624b\u9806\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"report"},"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. \u304a\u624b\u6570\u3067\u3059\u304c\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3060\u3051\u306f\u3054\u81ea\u8eab\u3067\u4f5c\u6210\u3057\u6dfb\u4ed8\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u306a\u304a\u3001",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"\u5831\u544a\u30d5\u30a9\u30fc\u30e0\u306e\u76f4\u30ea\u30f3\u30af"),"\u3092\u4f7f\u3063\u3066\u3054\u5831\u544a\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u60c5\u5831\u3092\u5168\u90e8\u624b\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("p",null,"\u5e83\u544a\u306e\u518d\u633f\u5165\u3084Web\u30b5\u30a4\u30c8\u306e\u8aa4\u8868\u793a\u306a\u3069\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5:"),(0,n.kt)("h3",{id:"extension"},"AdGuard\u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u6a5f\u80fd\u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the browser extension settings by clicking the corresponding icon;"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/5si74extension.png",alt:"extension_issue *mobile_border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"windows"},"AdGuard for Windows \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/adguard-for-windows/browser-assistant"},"AdGuard\u30d6\u30e9\u30a6\u30b6\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8"),"\u3092\u958b\u304d\u3001 \u300c",(0,n.kt)("strong",{parentName:"li"},"\u554f\u984c\u30fb\u4e0d\u5177\u5408\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u62bc\u3059")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-website-ja-2.png",alt:"windows *border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u306b\u6b8b\u308a\u306e\u5fc5\u8981\u4e8b\u9805\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"android"},"AdGuard for Android \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard\u30a2\u30d7\u30ea\u5185\u3067\u8a2d\u5b9a\u3092\u958b\u304f"),(0,n.kt)("li",{parentName:"ul"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u304a\u5ba2\u69d8\u30b5\u30dd\u30fc\u30c8"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u9069\u5207\u306a\u30d6\u30ed\u30c3\u30af\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u9078\u629e")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg",alt:"android *mobile_border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"mac"},"AdGuard for Mac \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/adguard-for-mac/browser-assistant"},"AdGuard\u30d6\u30e9\u30a6\u30b6\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8"),"\u3092\u958b\u304d\u3001 \u300c",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u5177\u5408\u30fb\u554f\u984c\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u62bc\u3059")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-website-ja-2.png",alt:"mac *mobile"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u306b\u6b8b\u308a\u306e\u5fc5\u8981\u4e8b\u9805\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"ios"},"AdGuard for iOS \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard\u30a2\u30d7\u30ea\u5185\u3067\u8a2d\u5b9a\uff08\u5de6\u4e0b\u306e\u2699\uff09\u3092\u958b\u304f"),(0,n.kt)("li",{parentName:"ul"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u304a\u5ba2\u69d8\u30b5\u30dd\u30fc\u30c8"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u9069\u5207\u306a\u30d6\u30ed\u30c3\u30af\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u9078\u629e")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/fnl9aios.jpeg",alt:"ios *mobile_border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u306b\u6b8b\u308a\u306e\u5fc5\u8981\u4e8b\u9805\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"form"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u8a18\u5165\u3059\u308b\u65b9\u6cd5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. \u304a\u624b\u6570\u3067\u3059\u304c\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3060\u3051\u306f\u3054\u81ea\u8eab\u3067\u4f5c\u6210\u3057\u6dfb\u4ed8\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u306a\u304a\u3001",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"\u5831\u544a\u30d5\u30a9\u30fc\u30e0\u306e\u76f4\u30ea\u30f3\u30af"),"\u3092\u4f7f\u3063\u3066\u3054\u5831\u544a\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u60c5\u5831\u3092\u5168\u90e8\u624b\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Filling in the form starts with detailing the type and version of a product;"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png",alt:"forma1 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify the type of problem and additional information on using third-party software (antivirus, VPN);"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png",alt:"forma2 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the address of the page and the browser (or the download link in case of an app) where you've encountered a problem;"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png",alt:"forma3 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Application configuration must be specified:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e2d\u306e\u30d5\u30a3\u30eb\u30bf\u30fc"),(0,n.kt)("li",{parentName:"ul"},"Stealth mode settings, if this function is enabled.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png",alt:"forma4 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"../take-screenshot"},"Provide a screenshot")," that captures the essence of a problem;"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Important"),": Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png",alt:"forma5 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide additional information that will help filter developers understand the situation;"),(0,n.kt)("p",{parentName:"li"},"Also enter your account on ",(0,n.kt)("strong",{parentName:"p"},"GitHub"),", if available (it's necessary for developers to be able to reach you in case they need some additional details);"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png",alt:"forma6 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check each step before sending the form;"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png",alt:"forma7 *mobile_border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You'll be provided with a link to track progress on your task."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png",alt:"forma8 *border"})))),(0,n.kt)("h2",{id:"issue"},"\u554f\u984c\u306e\u8a3a\u65ad\u65b9\u6cd5"),(0,n.kt)("p",null,"This option is suitable for those who aren\u2019t afraid of difficulties and don\u2019t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS."),(0,n.kt)("p",null,"For example, you are faced with a situation that your favorite website won\u2019t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:"),(0,n.kt)("h3",{id:"\u30d5\u30a3\u30eb\u30bf"},(0,n.kt)("strong",{parentName:"h3"},"\u30d5\u30a3\u30eb\u30bf")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("strong",{parentName:"li"},"Ad Blocker"),";"),(0,n.kt)("li",{parentName:"ol"},'If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;'),(0,n.kt)("li",{parentName:"ol"},'If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;'),(0,n.kt)("li",{parentName:"ol"},"If turning off all the filters hasn't produced any results, apply rule ",(0,n.kt)("strong",{parentName:"li"},"@@||example.com^$document,extension"),"; where ",(0,n.kt)("strong",{parentName:"li"},"example.com")," is an example site name that needs to be replaced by your own option;"),(0,n.kt)("li",{parentName:"ol"},"In case of failure (issue not solved), turn to section ",(0,n.kt)("strong",{parentName:"li"},"Stealth Mode"),".")),(0,n.kt)("h3",{id:"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9"},(0,n.kt)("strong",{parentName:"h3"},"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("strong",{parentName:"li"},"Stealth Mode"),";"),(0,n.kt)("li",{parentName:"ol"},"If this solved the problem, turn the module on and turn off the ",(0,n.kt)("strong",{parentName:"li"},"Stealth Mode"),' options one by one. This is done to detect which filters are "breaking" the page;'),(0,n.kt)("li",{parentName:"ol"},'If you have managed to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;'),(0,n.kt)("li",{parentName:"ol"},"In case of failure (issue not solved), turn to section ",(0,n.kt)("strong",{parentName:"li"},"Extensions"),".")),(0,n.kt)("h3",{id:"\u62e1\u5f35\u6a5f\u80fd"},(0,n.kt)("strong",{parentName:"h3"},"\u62e1\u5f35\u6a5f\u80fd")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Disable ",(0,n.kt)("strong",{parentName:"li"},"Extensions"),";"),(0,n.kt)("li",{parentName:"ol"},"If this solved the problem, turn on the module and turn off ",(0,n.kt)("strong",{parentName:"li"},"Extensions"),' settings one by one. This is done to find out which setting "breaks" the page;'),(0,n.kt)("li",{parentName:"ol"},'If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.')),(0,n.kt)("h3",{id:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30d6\u30ed\u30c3\u30ab\u30fc"},(0,n.kt)("strong",{parentName:"h3"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30d6\u30ed\u30c3\u30ab\u30fc")),(0,n.kt)("p",null,"Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites. If you are using such programs, first make sure that the problem is caused by ",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),": disable ",(0,n.kt)("strong",{parentName:"p"},"AdGuard")," filtering and try to reproduce the problem. If it remains, it means that the problem is caused by another application or browser. If the problem is caused by ",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),", follow the steps described in the previous paragraphs."))}u.isMDXComponent=!0}}]);