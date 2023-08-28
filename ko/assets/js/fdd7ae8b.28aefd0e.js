"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3106],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),c=i,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(4137));const o={title:"How to enable system-wide filtering in AdGuard for iOS",sidebar_position:2},a=void 0,l={unversionedId:"adguard-for-ios/solving-problems/system-wide-filtering",id:"adguard-for-ios/solving-problems/system-wide-filtering",title:"How to enable system-wide filtering in AdGuard for iOS",description:"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 iOS\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 AdGuard \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud574 \ubcf4\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/system-wide-filtering.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/system-wide-filtering",permalink:"/KnowledgeBase/ko/adguard-for-ios/solving-problems/system-wide-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/system-wide-filtering.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to enable system-wide filtering in AdGuard for iOS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud504\ub9ac\ubbf8\uc5c4 \uae30\ub2a5\uc744 \ud65c\uc131\ud654\ud558\ub294 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/adguard-for-ios/solving-problems/premium-activation"},next:{title:"FaceTime\uacfc\uc758 \ud638\ud658\uc131 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/adguard-for-ios/solving-problems/facetime-compatibility-issues"}},s={},d=[{value:"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud544\ud130\ub9c1 \uc815\ubcf4",id:"\uc2dc\uc2a4\ud15c-\uc804\uccb4-\ud544\ud130\ub9c1-\uc815\ubcf4",level:2},{value:"How to add custom DNS filter/hosts file",id:"how-to-add-custom-dns-filterhosts-file",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\uc774 \ubb38\uc11c\ub294 \uc2dc\uc2a4\ud15c \uc218\uc900\uc5d0\uc11c \uae30\uae30\ub97c \ubcf4\ud638\ud558\ub294 \ub2e4\uae30\ub2a5 \uad11\uace0 \ucc28\ub2e8\uae30\uc778 iOS\uc6a9 AdGuard\uc5d0 \ub300\ud574 \ub2e4\ub8f9\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"AdGuard \uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc")," \ud574 \ubcf4\uc138\uc694.")),(0,i.kt)("h2",{id:"\uc2dc\uc2a4\ud15c-\uc804\uccb4-\ud544\ud130\ub9c1-\uc815\ubcf4"},"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud544\ud130\ub9c1 \uc815\ubcf4"),(0,i.kt)("p",null,"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud544\ud130\ub9c1\uc740 Safari \ube0c\ub77c\uc6b0\uc800 \uc678\ubd80, \uc989 \ub2e4\ub978 \uc571\uacfc \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uad11\uace0 \ubc0f \ucd94\uc801\uae30\ub97c \ucc28\ub2e8\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. This article will tell you how to enable it on your iOS device."),(0,i.kt)("p",null,"On iOS, the only way to block ads and trackers system-wide is to use ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"DNS filtering"),"."),(0,i.kt)("p",null,"First, you have to enable DNS protection. To do so:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("em",{parentName:"li"},"AdGuard for iOS"),"."),(0,i.kt)("li",{parentName:"ol"},"Tap ",(0,i.kt)("em",{parentName:"li"},"Protection")," icon (the second icon in the bottom menu bar)."),(0,i.kt)("li",{parentName:"ol"},"Turn ",(0,i.kt)("em",{parentName:"li"},"DNS protection")," switch on.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG",alt:"DNS \ubcf4\ud638 \ud654\uba74 *mobile_border"})),(0,i.kt)("p",null,"Now, if your purpose is to block ads and trackers system-wide, you have three options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use AdGuard DNS filter (",(0,i.kt)("em",{parentName:"li"},"Protection")," (the shield icon in the bottom menu) \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS filtering")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS filters")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"AdGuard DNS filter"),")."),(0,i.kt)("li",{parentName:"ol"},"Use AdGuard DNS server (",(0,i.kt)("em",{parentName:"li"},"Protection")," (the shield icon in the bottom menu) \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS server")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"AdGuard DNS"),") or another blocking DNS server to your liking."),(0,i.kt)("li",{parentName:"ol"},"Add a custom DNS filter/hosts file to your liking.")),(0,i.kt)("p",null,"The first and third option have several advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can use any DNS server at your discretion and you are not tied up to a specific blocking server, because the filter does the blocking."),(0,i.kt)("li",{parentName:"ul"},"You can add multiple DNS filters and/or hosts files (although using too many might slow down AdGuard).")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"DNS \ud544\ud130\ub9c1 \uc791\ub3d9 \ubc29\uc2dd"})),(0,i.kt)("h2",{id:"how-to-add-custom-dns-filterhosts-file"},"How to add custom DNS filter/hosts file"),(0,i.kt)("p",null,"You can add any DNS filter or hosts file you like."),(0,i.kt)("p",null,"For the sake of the example, let's add ",(0,i.kt)("a",{parentName:"p",href:"https://oisd.nl/"},"OISD Blocklist Big"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy this link: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://big.oisd.nl")," (it's a link for OISD Blocklist Big filter)"),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("em",{parentName:"li"},"Protection")," (the shield icon in the bottom menu) \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS protection")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS filtering")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"DNS filters"),"."),(0,i.kt)("li",{parentName:"ol"},"Tap ",(0,i.kt)("em",{parentName:"li"},"Add a filter"),"."),(0,i.kt)("li",{parentName:"ol"},"Paste the link into the filter URL field."),(0,i.kt)("li",{parentName:"ol"},"Tap ",(0,i.kt)("em",{parentName:"li"},"Next")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Add"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg",alt:"DNS \ud544\ud130 \ud654\uba74 \ucd94\uac00 *mobile_border"})),(0,i.kt)("p",null,"Add any number of other DNS filters the same way by pasting a different URL at step 4. ",(0,i.kt)("a",{parentName:"p",href:"https://filterlists.com"},"\uc5ec\uae30"),"\uc5d0\uc11c \ub2e4\uc591\ud55c \ud544\ud130\uc640 \ub9c1\ud06c\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);