"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2345],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),c=i,k=s["".concat(l,".").concat(c)]||s[c]||u[c]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(7462),i=(n(7294),n(4137));const a={title:"\u5982\u4f55\u521b\u5efa Minidump \u6587\u4ef6\u4ee5\u4fee\u590d BSoD \u9519\u8bef",sidebar_position:8},o=void 0,p={unversionedId:"guides/minidump",id:"guides/minidump",title:"\u5982\u4f55\u521b\u5efa Minidump \u6587\u4ef6\u4ee5\u4fee\u590d BSoD \u9519\u8bef",description:"\u51e0\u4e4e\u6240\u6709 Windows \u7528\u6237\u90fd\u719f\u6089\u84dd\u5c4f\u6b7b\u673a \uff08BSoD\uff09 \u9519\u8bef\u3002 BSoD\uff08\u82f1\u8bed\uff1aBlue screen of death\uff09\u53d1\u751f\u5728 Windows \u7cfb\u7edf\u906d\u9047\u53ef\u80fd\u5f71\u54cd\u5b89\u5168\u7cfb\u7edf\u64cd\u4f5c\u7684\u95ee\u9898\u65f6\uff0c\u4f8b\u5982\u7b2c\u4e09\u65b9\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u3001\u786c\u4ef6\u6216 Microsoft \u4ee3\u7801\u51fa\u73b0\u95ee\u9898\u3002 \u8981\u89e3\u51b3\u84dd\u5c4f\u9519\u8bef\uff0c\u7528\u6237\u53ef\u4ee5\u83b7\u53d6 Minidump \u6587\u4ef6\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/minidump.md",sourceDirName:"guides",slug:"/guides/minidump",permalink:"/KnowledgeBase/zh-CN/guides/minidump",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/minidump.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u5982\u4f55\u521b\u5efa Minidump \u6587\u4ef6\u4ee5\u4fee\u590d BSoD \u9519\u8bef",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u4e3a Google Family Link \u542f\u7528 HTTPS \u8fc7\u6ee4",permalink:"/KnowledgeBase/zh-CN/guides/family-link-certificate"},next:{title:"\u5982\u4f55\u963b\u6b62\u63a8\u9001\u901a\u77e5",permalink:"/KnowledgeBase/zh-CN/guides/block-push-notifications"}},l={},m=[{value:"\u4ec0\u4e48\u662f Minidump \u6587\u4ef6\uff1f",id:"\u4ec0\u4e48\u662f-minidump-\u6587\u4ef6",level:2},{value:"\u8bbe\u7f6e Windows \u4ee5\u521b\u5efa Minidump \u6587\u4ef6",id:"\u8bbe\u7f6e-windows-\u4ee5\u521b\u5efa-minidump-\u6587\u4ef6",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u51e0\u4e4e\u6240\u6709 Windows \u7528\u6237\u90fd\u719f\u6089",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Blue_screen_of_death"},"\u84dd\u5c4f\u6b7b\u673a \uff08BSoD\uff09")," \u9519\u8bef\u3002 BSoD\uff08\u82f1\u8bed\uff1aBlue screen of death\uff09\u53d1\u751f\u5728 Windows \u7cfb\u7edf\u906d\u9047\u53ef\u80fd\u5f71\u54cd\u5b89\u5168\u7cfb\u7edf\u64cd\u4f5c\u7684\u95ee\u9898\u65f6\uff0c\u4f8b\u5982\u7b2c\u4e09\u65b9\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u3001\u786c\u4ef6\u6216 Microsoft \u4ee3\u7801\u51fa\u73b0\u95ee\u9898\u3002 \u8981\u89e3\u51b3\u84dd\u5c4f\u9519\u8bef\uff0c\u7528\u6237\u53ef\u4ee5\u83b7\u53d6 Minidump \u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-minidump-\u6587\u4ef6"},"\u4ec0\u4e48\u662f Minidump \u6587\u4ef6\uff1f"),(0,i.kt)("p",null,"Minidump \u6587\u4ef6\u662f\u4e00\u4e2a\u5305\u542b\u6709\u5173\u7cfb\u7edf\u5d29\u6e83\u4fe1\u606f\u7684\u8f6c\u50a8\u6587\u4ef6\u3002 \u5b83\u662f\u5728\u84dd\u5c4f\u51fa\u73b0\u4e4b\u524d\u521b\u5efa\u7684\uff0c\u4ec5\u5305\u542b\u53ef\u7528\u4e8e\u89e3\u51b3\u95ee\u9898\u7684\u6700\u5c11\u91cf\u6709\u7528\u4fe1\u606f\u96c6\u3002 Minidump \u6587\u4ef6\u901a\u5e38\u5177\u6709 ",(0,i.kt)("em",{parentName:"p"},".dmp")," \u6269\u5c55\u540d\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5728 Windows 10 \u4e0a\uff0c\u84dd\u5c4f\u663e\u793a\u4e00\u4e2a\u505c\u6b62\u4ee3\u7801\u548c\u4e00\u4e2a QR \u7801\u3002 \u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u4fe1\u606f\u5728\u7f51\u7edc\u4e0a\u641c\u7d22\u7279\u5b9a\u95ee\u9898\u3002")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u521b\u5efa Minidump \u6587\u4ef6\u88ab\u7981\u7528\uff0c\u56e0\u6b64\u5728\u6211\u4eec\u66f4\u8be6\u7ec6\u5730\u8ba8\u8bba\u5982\u4f55\u4f7f\u7528\u8be5\u8f6c\u50a8\u6587\u4ef6\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u542f\u7528\u5b83\u3002"),(0,i.kt)("h2",{id:"\u8bbe\u7f6e-windows-\u4ee5\u521b\u5efa-minidump-\u6587\u4ef6"},"\u8bbe\u7f6e Windows \u4ee5\u521b\u5efa Minidump \u6587\u4ef6"),(0,i.kt)("p",null,"\u5373\u4f7f\u60a8\u7684\u7535\u8111\u6ca1\u6709\u51fa\u73b0\u84dd\u5c4f\u9519\u8bef\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u8bbe\u7f6e\u6b64\u9009\u9879\u3002\u8fd9\u662f\u4e00\u4e2a\u666e\u904d\u5efa\u8bae\uff0c\u4e0d\u4e00\u5b9a\u4e0e AdGuard \u670d\u52a1\u6709\u5173\u3002 \u8bf7\u6309\u7167\u4e0b\u9762\u7684\u6307\u793a\u8bf4\u660e\u81ea\u52a8\u521b\u5efa Minidump \u6587\u4ef6\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 Windows \u641c\u7d22\u680f\u4e2d\u8f93\u5165 ",(0,i.kt)("em",{parentName:"p"},"sysdm.cpl"),"\uff0c\u7136\u540e\u5355\u51fb\u300c",(0,i.kt)("strong",{parentName:"p"},"\u6253\u5f00"),"\u300d\u3002 ",(0,i.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u5c5e\u6027\u63a7\u5236\u9762\u677f\u83dc\u5355"),"\u7a97\u53e3\u5c06\u51fa\u73b0\u5728\u5c4f\u5e55\u4e0a\u3002"),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u6216\u8005\uff0c\u5355\u51fb\u300c",(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,i.kt)("strong",{parentName:"p"},"\u7cfb\u7edf"),"\u300d\u2192\u300c",(0,i.kt)("strong",{parentName:"p"},"\u5173\u4e8e"),"\u300d\u2192\u300c",(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7\u7cfb\u7edf\u8bbe\u7f6e"),"\u300d\u3002")))),(0,i.kt)("p",null,":::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"![\u7cfb\u7edf\u5c5e\u6027 *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230\u300c",(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7"),"\u300d\u6807\u7b7e\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u300c",(0,i.kt)("strong",{parentName:"p"},"\u542f\u52a8\u548c\u6062\u590d"),"\u300d\u90e8\u5206\uff0c\u5355\u51fb\u300c",(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png",alt:"\u542f\u52a8\u548c\u6062\u590d *mobile_border"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8bf7\u542f\u7528\u4ee5\u4e0b\u4e09\u4e2a\u9009\u9879\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u7cfb\u7edf\u65e5\u5fd7\u5199\u5165\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u91cd\u542f"),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u5199\u8c03\u8bd5\u4fe1\u606f \u2192 \u5c0f\u5185\u5b58\u8f6c\u50a8\uff08256KB\uff09")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/nmr4eThree_options.png",alt:"\u5feb\u901f\u64cd\u4f5c *mobile_border"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb\u300c",(0,i.kt)("strong",{parentName:"p"},"\u786e\u5b9a"),"\u300d\u5e94\u7528\u8bbe\u7f6e\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u91cd\u542f\u8ba1\u7b97\u673a\u3002"))),(0,i.kt)("p",null,"\u60a8\u5df2\u6210\u529f\u542f\u7528 Minidump \u6587\u4ef6\u3002 \u73b0\u5728\uff0c\u7cfb\u7edf\u5d29\u6e83\u65f6\u8f6c\u50a8\u6587\u4ef6\u5c06\u81ea\u52a8\u521b\u5efa\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cMinidump \u6587\u4ef6\u5b58\u50a8\u5728 ",(0,i.kt)("strong",{parentName:"p"},"%SystemRoot%\\Minidump")," \u6587\u4ef6\u5939\u4e2d\u3002 \u7528\u6237\u53ef\u4ee5\u66f4\u6539\u76ee\u5f55\u4f4d\u7f6e\u4e3a\u81ea\u5df1\u559c\u6b22\u7684\u4f4d\u7f6e\uff0c\u4f46\u8bf7\u8bb0\u4f4f\uff0c\u8bb8\u591a\u7a0b\u5e8f\u90fd\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u67e5\u627e\u6b64\u4f4d\u7f6e\uff0c\u56e0\u6b64\u6211\u4eec\u5efa\u8bae\u60a8\u4e0d\u8981\u66f4\u6539\u4f4d\u7f6e\u3002")))}u.isMDXComponent=!0}}]);