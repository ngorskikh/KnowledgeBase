"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2324],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(7462),o=(r(7294),r(4137));const n={title:"How to get HAR files",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/har",id:"adguard-for-android/solving-problems/har",title:"How to get HAR files",description:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Android\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/har.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/har",permalink:"/KnowledgeBase/ja/adguard-for-android/solving-problems/har",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/har.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to get HAR files",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to get system logs",permalink:"/KnowledgeBase/ja/adguard-for-android/solving-problems/logcat"},next:{title:"Low Level Settings guide",permalink:"/KnowledgeBase/ja/adguard-for-android/solving-problems/low-level-settings"}},s={},d=[{value:"What are HAR files?",id:"what-are-har-files",level:2},{value:"How to get HAR files",id:"how-to-get-har-files",level:2},{value:"How to analyze HAR files",id:"how-to-analyze-har-files",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u591a\u6a5f\u80fd\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3001\u300cAdGuard for Android\u300d\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3044\u307e\u3059\u3002 \u5b9f\u969b\u306b\u4f7f\u3063\u3066\u307f\u308b\u306b\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"),"\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("h2",{id:"what-are-har-files"},"What are HAR files?"),(0,o.kt)("p",null,"The HAR (HTTP ARchive) format is a JSON-formatted archive file for logging of a web browser's interaction with a site. The specifications of HAR format defines an archival data for HTTP transactions that used by a browser to export detailed information about web pages it loads. More detailed description of HAR file format and its specification you can find at ",(0,o.kt)("a",{parentName:"p",href:"http://www.softwareishard.com/blog/har-12-spec/"},"softwareishard.com")," website."),(0,o.kt)("h2",{id:"how-to-get-har-files"},"How to get HAR files"),(0,o.kt)("p",null,"Sometimes we need to analyze it to block specific ads that are difficult to reproduce for some reason. To get HAR files follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open AdGuard and go to ",(0,o.kt)("strong",{parentName:"li"},"Settings")," (\u2699 icon in the lower right corner)."),(0,o.kt)("li",{parentName:"ol"},"Tap ",(0,o.kt)("strong",{parentName:"li"},"General")," \u2192",(0,o.kt)("strong",{parentName:"li"},"Advanced")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Low-level settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll down and activate ",(0,o.kt)("strong",{parentName:"li"},"Capture HAR")," in the Filtering section."),(0,o.kt)("li",{parentName:"ol"},"Open the app and perform the necessary actions to reproduce the problem."),(0,o.kt)("li",{parentName:"ol"},"Turn ",(0,o.kt)("strong",{parentName:"li"},"Capture HAR")," off."),(0,o.kt)("li",{parentName:"ol"},"Go back to ",(0,o.kt)("strong",{parentName:"li"},"Advanced"),"."),(0,o.kt)("li",{parentName:"ol"},"Tap ",(0,o.kt)("strong",{parentName:"li"},"Export logs and system info")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Allow")," (if necessary) \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please send the file with logs (that you've got as a result) to the AdGuard support service.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.")),(0,o.kt)("h2",{id:"how-to-analyze-har-files"},"How to analyze HAR files"),(0,o.kt)("p",null,"Here are some sources that we can recommend to analyze HAR files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitgrimbo.github.io/harviewer/master/"},"HTTP Archive Viewer master")," is a HAR analyzer tool, visualizes HTTP Archive (HAR) log files created by HTTP tracking tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.telerik.com/fiddler"},"Fiddler")," is a web debugging proxy, lets you capture, inspect, monitor all HTTP(S) traffic between your computer and the Internet, mock requests, and diagnose network issues.")))}c.isMDXComponent=!0}}]);