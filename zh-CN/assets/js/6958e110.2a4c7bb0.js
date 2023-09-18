"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6007],{4137:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>v});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),k=p(l),v=n,c=k["".concat(o,".").concat(v)]||k[v]||s[v]||r;return l?a.createElement(c,i(i({ref:t},u),{},{components:l})):a.createElement(c,i({ref:t},u))}));function v(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<r;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}k.displayName="MDXCreateElement"},749:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var a=l(7462),n=(l(7294),l(4137));const r={title:"\u9ad8\u7ea7\uff08\u4f4e\u7ea7\uff09\u8bbe\u7f6e\u6307\u5357",sidebar_position:7},i=void 0,d={unversionedId:"adguard-for-windows/solving-problems/low-level-settings",id:"adguard-for-windows/solving-problems/low-level-settings",title:"\u9ad8\u7ea7\uff08\u4f4e\u7ea7\uff09\u8bbe\u7f6e\u6307\u5357",description:"\u672c\u6587\u9002\u7528\u4e8e Windows \u7248\u7684 AdGuard\uff0c\u5b83\u662f\u4e00\u79cd\u591a\u529f\u80fd\u5e7f\u544a\u62e6\u622a\u5668\uff0c\u53ef\u5728\u7cfb\u7edf\u7ea7\u522b\u4fdd\u62a4\u7528\u6237\u7684\u8bbe\u5907\u3002 To see how it works, download the AdGuard app",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/low-level-settings",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u9ad8\u7ea7\uff08\u4f4e\u7ea7\uff09\u8bbe\u7f6e\u6307\u5357",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Common installer errors",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/common-installer-errors"},next:{title:"How to create a dump file",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/dump-file"}},o={},p=[{value:"\u5982\u4f55\u8f6c\u5230\u9ad8\u7ea7\u8bbe\u7f6e",id:"\u5982\u4f55\u8f6c\u5230\u9ad8\u7ea7\u8bbe\u7f6e",level:2},{value:"\u9ad8\u7ea7\u8bbe\u7f6e",id:"\u9ad8\u7ea7\u8bbe\u7f6e",level:2},{value:"\u62e6\u622a TCP \u5feb\u901f\u6253\u5f00",id:"\u62e6\u622a-tcp-\u5feb\u901f\u6253\u5f00",level:3},{value:"\u4f7f\u7528 Encrypted ClientHello",id:"\u4f7f\u7528-encrypted-clienthello",level:3},{value:"\u68c0\u67e5\u7f51\u7ad9\u7684\u8bc1\u4e66\u900f\u660e\u5ea6",id:"\u68c0\u67e5\u7f51\u7ad9\u7684\u8bc1\u4e66\u900f\u660e\u5ea6",level:3},{value:"\u542f\u7528 SSL/TLS \u8bc1\u4e66\u64a4\u9500\u68c0\u67e5",id:"\u542f\u7528-ssltls-\u8bc1\u4e66\u64a4\u9500\u68c0\u67e5",level:3},{value:"\u5728\u8bbe\u7f6e\u4e2d\u663e\u793a AdGuard VPN",id:"\u5728\u8bbe\u7f6e\u4e2d\u663e\u793a-adguard-vpn",level:3},{value:"\u8fc7\u6ee4\u65f6\u6309\u5b8c\u6574\u8def\u5f84\u6392\u9664\u5e94\u7528",id:"\u8fc7\u6ee4\u65f6\u6309\u5b8c\u6574\u8def\u5f84\u6392\u9664\u5e94\u7528",level:3},{value:"\u542f\u7528 AdGuard \u5f39\u7a97\u901a\u77e5",id:"\u542f\u7528-adguard-\u5f39\u7a97\u901a\u77e5",level:3},{value:"\u81ea\u52a8\u622a\u53d6\u8fc7\u6ee4\u5668\u8ba2\u9605 URL",id:"\u81ea\u52a8\u622a\u53d6\u8fc7\u6ee4\u5668\u8ba2\u9605-url",level:3},{value:"Filter HTTP/3",id:"filter-http3",level:3},{value:"\u4f7f\u7528\u91cd\u5b9a\u5411\u9a71\u52a8\u6a21\u5f0f",id:"\u4f7f\u7528\u91cd\u5b9a\u5411\u9a71\u52a8\u6a21\u5f0f",level:3},{value:"\u968f\u7cfb\u7edf\u542f\u52a8\u65f6\u663e\u793a\u4e3b\u7a97\u53e3",id:"\u968f\u7cfb\u7edf\u542f\u52a8\u65f6\u663e\u793a\u4e3b\u7a97\u53e3",level:3},{value:"\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u542f\u7528\u8fc7\u6ee4",id:"\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u542f\u7528\u8fc7\u6ee4",level:3},{value:"\u8fc7\u6ee4 localhost \u8fde\u63a5",id:"\u8fc7\u6ee4-localhost-\u8fde\u63a5",level:3},{value:"\u4ece\u8fc7\u6ee4\u4e2d\u6392\u9664\u7279\u5b9a IP \u8303\u56f4",id:"\u4ece\u8fc7\u6ee4\u4e2d\u6392\u9664\u7279\u5b9a-ip-\u8303\u56f4",level:3},{value:"\u542f\u7528 HAR \u5199\u5165",id:"\u542f\u7528-har-\u5199\u5165",level:3},{value:"\u5728\u666e\u901a\u7684 HTTP \u8bf7\u6c42\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u7a7a\u95f4",id:"\u5728\u666e\u901a\u7684-http-\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u7a7a\u95f4",level:3},{value:"\u8c03\u6574\u521d\u59cb TLS \u6570\u636e\u5305\u7684\u788e\u7247\u5927\u5c0f",id:"\u8c03\u6574\u521d\u59cb-tls-\u6570\u636e\u5305\u7684\u788e\u7247\u5927\u5c0f",level:3},{value:"\u666e\u901a HTTP \u8bf7\u6c42\u7247\u6bb5\u5927\u5c0f",id:"\u666e\u901a-http-\u8bf7\u6c42\u7247\u6bb5\u5927\u5c0f",level:3},{value:"\u663e\u793a QUIC",id:"\u663e\u793a-quic",level:3},{value:"\u542f\u7528 TCP \u4fdd\u6d3b\uff08keepalive\uff09",id:"\u542f\u7528-tcp-\u4fdd\u6d3bkeepalive",level:3},{value:"TCP \u4fdd\u6d3b\u95f4\u9694",id:"tcp-\u4fdd\u6d3b\u95f4\u9694",level:3},{value:"TCP \u4fdd\u6d3b\u8d85\u65f6",id:"tcp-\u4fdd\u6d3b\u8d85\u65f6",level:3},{value:"\u62e6\u622a Java",id:"\u62e6\u622a-java",level:3},{value:"DNS \u670d\u52a1\u5668\u7684\u8d85\u65f6\u671f\u9650",id:"dns-\u670d\u52a1\u5668\u7684\u8d85\u65f6\u671f\u9650",level:3},{value:"\u5c06 HTTP/3 \u7528\u4e8e DNS-over-HTTPS",id:"\u5c06-http3-\u7528\u4e8e-dns-over-https",level:3},{value:"\u4f7f\u7528\u5907\u7528 DNS \u4e0a\u6e38",id:"\u4f7f\u7528\u5907\u7528-dns-\u4e0a\u6e38",level:3},{value:"\u5e76\u884c\u67e5\u8be2 DNS \u4e0a\u6e38",id:"\u5e76\u884c\u67e5\u8be2-dns-\u4e0a\u6e38",level:3},{value:"\u59cb\u7ec8\u54cd\u5e94\u6545\u969c\u7684 DNS \u67e5\u8be2",id:"\u59cb\u7ec8\u54cd\u5e94\u6545\u969c\u7684-dns-\u67e5\u8be2",level:3},{value:"\u542f\u7528\u5b89\u5168 DNS \u8bf7\u6c42\u7684\u8fc7\u6ee4",id:"\u542f\u7528\u5b89\u5168-dns-\u8bf7\u6c42\u7684\u8fc7\u6ee4",level:3},{value:"host \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",id:"host-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",level:3},{value:"adblock \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",id:"adblock-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49 IPv4 \u5730\u5740",id:"\u81ea\u5b9a\u4e49-ipv4-\u5730\u5740",level:3},{value:"\u81ea\u5b9a\u4e49 IPv6 \u5730\u5740",id:"\u81ea\u5b9a\u4e49-ipv6-\u5730\u5740",level:3},{value:"\u540e\u5907\uff08Fallback\uff09\u670d\u52a1\u5668",id:"\u540e\u5907fallback\u670d\u52a1\u5668",level:3},{value:"\u62e6\u622a ECH",id:"\u62e6\u622a-ech",level:3},{value:"\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668\u7684\u5217\u8868",id:"\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668\u7684\u5217\u8868",level:3},{value:"\u81ea\u5b9a\u4e49 bootstrap \u5730\u5740\u7684\u5217\u8868",id:"\u81ea\u5b9a\u4e49-bootstrap-\u5730\u5740\u7684\u5217\u8868",level:3},{value:"DNS \u6392\u9664\u9879",id:"dns-\u6392\u9664\u9879",level:3},{value:"\u4ece DNS \u8fc7\u6ee4\u4e2d\u6392\u9664\u6307\u5b9a\u7684 Wi-Fi \u7f51\u7edc\u540d\u79f0\uff08SSID\uff09",id:"\u4ece-dns-\u8fc7\u6ee4\u4e2d\u6392\u9664\u6307\u5b9a\u7684-wi-fi-\u7f51\u7edc\u540d\u79f0ssid",level:3}],u={toc:p};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u6587\u9002\u7528\u4e8e Windows \u7248\u7684 AdGuard\uff0c\u5b83\u662f\u4e00\u79cd\u591a\u529f\u80fd\u5e7f\u544a\u62e6\u622a\u5668\uff0c\u53ef\u5728\u7cfb\u7edf\u7ea7\u522b\u4fdd\u62a4\u7528\u6237\u7684\u8bbe\u5907\u3002 To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"\u4ee5\u524d\u79f0\u4e3a\u4f4e\u7ea7\u8bbe\u7f6e\u7684\u300c\u9ad8\u7ea7\u8bbe\u7f6e\u300d\u4e3b\u8981\u5305\u542b\u8d85\u51fa\u666e\u901a\u7528\u6237\u80fd\u529b\u7684\u9009\u9879\uff0c\u5e76\u4e14\u5728\u65e5\u5e38\u4f7f\u7528\u4e2d\u4e0d\u4f7f\u7528\u3002 AdGuard Windows \u7248\u7684\u8bbe\u8ba1\u5141\u8bb8\u7528\u6237\u4e0d\u6539\u53d8\u4efb\u4f55\u9ad8\u7ea7\u8bbe\u7f6e\uff0c\u800c\u6709\u6548\u5730\u4f7f\u7528\u8f6f\u4ef6\u3002\u4e0d\u8fc7\uff0c\u9ad8\u7ea7\u8bbe\u7f6e\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u6216\u89e3\u51b3\u4e00\u4e2a\u4e0d\u5e38\u89c1\u7684\u95ee\u9898\u65f6\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u76f2\u76ee\u5730\u66f4\u6539\u300c",(0,n.kt)("em",{parentName:"p"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d\u53ef\u80fd\u4f1a\u5bfc\u81f4 AdGuard \u7684\u8fd0\u4f5c\u95ee\u9898\uff0c\u4e5f\u4f1a\u65ad\u5f00\u4e92\u8054\u7f51\u8fde\u63a5\u6216\u4fb5\u5bb3\u5b89\u5168\u548c\u9690\u79c1\u3002 \u53ea\u6709\u7528\u6237\u786e\u5b9a\u81ea\u5df1\u5728\u505a\u4ec0\u4e48\u6216\u6211\u4eec\u7684\u652f\u6301\u56e2\u961f\u8981\u6c42\u8fd9\u6837\u505a\uff0c\u7528\u6237\u624d\u5e94\u8be5\u66f4\u6539\u8fd9\u4e9b\u8bbe\u7f6e\u3002")),(0,n.kt)("h2",{id:"\u5982\u4f55\u8f6c\u5230\u9ad8\u7ea7\u8bbe\u7f6e"},"\u5982\u4f55\u8f6c\u5230\u9ad8\u7ea7\u8bbe\u7f6e"),(0,n.kt)("p",null,"\u8981\u8fdb\u5165\u300c",(0,n.kt)("em",{parentName:"p"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d\uff0c\u8bf7\u5728\u4e3b\u7a97\u53e3\u5355\u51fb",(0,n.kt)("em",{parentName:"p"},"\u300c\u8bbe\u7f6e\u300d\u2192\u300c\u5e38\u89c4\u8bbe\u7f6e\u300d"),"\uff0c\u7136\u540e\u5411\u4e0b\u6eda\u52a8\u5230\u300c",(0,n.kt)("em",{parentName:"p"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d\u3002 \u6216\u8005\u5728\u6258\u76d8\u83dc\u5355\u4e2d\u9009\u62e9",(0,n.kt)("em",{parentName:"p"},"\u300c\u9ad8\u7ea7\u300d\u2192\u300c\u9ad8\u7ea7\u8bbe\u7f6e\u2026\u300d"),"\u3002"),(0,n.kt)("h2",{id:"\u9ad8\u7ea7\u8bbe\u7f6e"},"\u9ad8\u7ea7\u8bbe\u7f6e"),(0,n.kt)("p",null,"\u4e00\u65e6\u7528\u6237\u6253\u5f00\u9ad8\u7ea7\u8bbe\u7f6e\uff0c\u4f1a\u770b\u5230\u4ee5\u4e0b\u9009\u9879:"),(0,n.kt)("h3",{id:"\u62e6\u622a-tcp-\u5feb\u901f\u6253\u5f00"},"\u62e6\u622a TCP \u5feb\u901f\u6253\u5f00"),(0,n.kt)("p",null,"\u5982\u679c\u542f\u7528\uff0cAdGuard \u5c06\u963b\u6b62 Edge \u6d4f\u89c8\u5668\u4e2d\u7684 TCP \u5feb\u901f\u6253\u5f00\u3002 \u8981\u5e94\u7528\u8bbe\u7f6e\uff0c\u8bf7\u91cd\u65b0\u542f\u52a8\u6d4f\u89c8\u5668\u3002"),(0,n.kt)("h3",{id:"\u4f7f\u7528-encrypted-clienthello"},"\u4f7f\u7528 Encrypted ClientHello"),(0,n.kt)("p",null,"\u6bcf\u4e00\u4e2a\u52a0\u5bc6\u7684\u4e92\u8054\u7f51\u8fde\u63a5\u90fd\u6709\u4e00\u4e2a\u672a\u52a0\u5bc6\u7684\u90e8\u5206\uff0c \u5c31\u662f\u53d1\u9001\u7684\u7b2c\u4e00\u4e2a\u6570\u636e\u5305\uff0c\u5305\u542b\u7528\u6237\u8981\u8fde\u63a5\u7684\u670d\u52a1\u5668\u540d\u79f0\u3002 Encrypted ClientHello\uff08ECH\uff09\u7684\u6280\u672f\u80fd\u591f\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u6210\u529f\u52a0\u5bc6\u6700\u540e\u4e00\u4f4d\u672a\u52a0\u5bc6\u7684\u4fe1\u606f\u3002 \u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u542f\u7528\u300c",(0,n.kt)("em",{parentName:"p"},"\u4f7f\u7528 Encrypted ClientHello"),"\u300d\u9009\u9879\u3002 It uses a local DNS proxy to look for the ECH configuration for the domain. \u5982\u679c\u627e\u5230\uff0c\u5c06\u5bf9 ClientHello \u6570\u636e\u5305\u8fdb\u884c\u52a0\u5bc6\u3002"),(0,n.kt)("h3",{id:"\u68c0\u67e5\u7f51\u7ad9\u7684\u8bc1\u4e66\u900f\u660e\u5ea6"},"\u68c0\u67e5\u7f51\u7ad9\u7684\u8bc1\u4e66\u900f\u660e\u5ea6"),(0,n.kt)("p",null,"\u57fa\u4e8e Chrome \u8bc1\u4e66\u900f\u660e\u5ea6\uff08\u82f1\u6587\uff1aChrome Certificate Transparency\uff0c\u7b80\u79f0\uff1aChrome CT\uff09\u653f\u7b56\u9a8c\u8bc1\u57df\u540d\u5185\u6240\u6709\u8bc1\u4e66\u7684\u771f\u5b9e\u6027\u3002 If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. \u800c Chrome \u5219\u4f1a\u5c4f\u853d\u5b83\u3002"),(0,n.kt)("h3",{id:"\u542f\u7528-ssltls-\u8bc1\u4e66\u64a4\u9500\u68c0\u67e5"},"\u542f\u7528 SSL/TLS \u8bc1\u4e66\u64a4\u9500\u68c0\u67e5"),(0,n.kt)("p",null,"\u542f\u7528\u540e\uff0c\u6b64\u9009\u9879\u5c06\u8fd0\u884c\u5f02\u6b65 OCSP \u68c0\u67e5\uff0c\u4ee5\u68c0\u67e5\u7f51\u7ad9\u7684 SSL/TLS \u8bc1\u4e66\u662f\u5426\u88ab\u64a4\u9500\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5728\u6700\u77ed\u8d85\u65f6\u65f6\u95f4\u5185\u5b8c\u6210 OCSP \u68c0\u67e5\uff0cAdGuard \u4f1a\u7acb\u5373\u5e94\u7528\u68c0\u67e5\u7ed3\u679c\uff1b\u5982\u679c\u8bc1\u4e66\u88ab\u64a4\u9500\uff0c\u5219\u963b\u65ad\u8fde\u63a5\uff0c\u5982\u679c\u8bc1\u4e66\u6709\u6548\uff0c\u5219\u91cd\u65b0\u5efa\u7acb\u8fde\u63a5\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u9a8c\u8bc1\u65f6\u95f4\u8fc7\u957f\uff0cAdGuard \u5c06\u5efa\u7acb\u8fde\u63a5\u5e76\u5728\u540e\u53f0\u7ee7\u7eed\u68c0\u67e5\u3002 \u5982\u679c\u8bc1\u4e66\u88ab\u64a4\u9500\uff0c\u5f53\u524d\u548c\u5c06\u6765\u8be5\u57df\u540d\u7684\u8fde\u63a5\u5c06\u88ab\u963b\u6b62\u3002"),(0,n.kt)("h3",{id:"\u5728\u8bbe\u7f6e\u4e2d\u663e\u793a-adguard-vpn"},"\u5728\u8bbe\u7f6e\u4e2d\u663e\u793a AdGuard VPN"),(0,n.kt)("p",null,"\u542f\u7528\u6b64\u9009\u9879\u53ef\u8ba9\u7528\u6237\u5728\u8bbe\u7f6e\u4e2d\u663e\u793a AdGuard VPN \u9009\u9879\u5361\uff0c\u4ee5\u4fbf\u8f7b\u677e\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\u548c\u4ea7\u54c1\u7684\u7f51\u7ad9\u3002"),(0,n.kt)("h3",{id:"\u8fc7\u6ee4\u65f6\u6309\u5b8c\u6574\u8def\u5f84\u6392\u9664\u5e94\u7528"},"\u8fc7\u6ee4\u65f6\u6309\u5b8c\u6574\u8def\u5f84\u6392\u9664\u5e94\u7528"),(0,n.kt)("p",null,"\u5982\u679c\u7528\u6237\u4e0d\u60f3 AdGuard \u8fc7\u6ee4\u67d0\u6b3e\u7279\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u6d41\u91cf\uff0c\u8bf7\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u7684\u5b8c\u6574\u8def\u5f84\u3002\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u5c06\u88ab\u6392\u9664\u5728\u8fc7\u6ee4\u4e4b\u5916\u3002 \u8bf7\u7528\u5206\u53f7\u5206\u9694\u4e0d\u540c\u7684\u8def\u5f84\u3002"),(0,n.kt)("h3",{id:"\u542f\u7528-adguard-\u5f39\u7a97\u901a\u77e5"},"\u542f\u7528 AdGuard \u5f39\u7a97\u901a\u77e5"),(0,n.kt)("p",null,"\u542f\u7528\u6b64\u529f\u80fd\u67e5\u770b AdGuard \u5f39\u51fa\u5f0f\u901a\u77e5\u3002 \u901a\u77e5\u4e0d\u7ecf\u5e38\u51fa\u73b0\uff0c\u53ea\u5305\u542b\u91cd\u8981\u7684\u4fe1\u606f\u3002 \u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6258\u76d8\u83dc\u5355\u6765\u53ec\u56de\u6700\u540e\u7684\u5f39\u51fa\u901a\u77e5\u3002"),(0,n.kt)("h3",{id:"\u81ea\u52a8\u622a\u53d6\u8fc7\u6ee4\u5668\u8ba2\u9605-url"},"\u81ea\u52a8\u622a\u53d6\u8fc7\u6ee4\u5668\u8ba2\u9605 URL"),(0,n.kt)("p",null,"\u5982\u679c\u7528\u6237\u60f3\u8ba9 AdGuard \u81ea\u52a8\u62e6\u622a\u8fc7\u6ee4\u5668\u8ba2\u9605 URL\uff08\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"abp:subscribe")," \u7b49\uff09\u5e76\u6253\u5f00\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668\u5b89\u88c5\u5bf9\u8bdd\u6846\uff0c\u8bf7\u542f\u7528\u6b64\u529f\u80fd\u3002"),(0,n.kt)("h3",{id:"filter-http3"},"Filter HTTP/3"),(0,n.kt)("p",null,"If this option is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types."),(0,n.kt)("h3",{id:"\u4f7f\u7528\u91cd\u5b9a\u5411\u9a71\u52a8\u6a21\u5f0f"},"\u4f7f\u7528\u91cd\u5b9a\u5411\u9a71\u52a8\u6a21\u5f0f"),(0,n.kt)("p",null,"\u5982\u679c\u542f\u7528\u8be5\u9009\u9879\uff0cAdGuard \u5c06\u62e6\u622a\u6240\u6709\u6d41\u91cf\uff0c\u5e76\u5c06\u5176\u91cd\u5b9a\u5411\u5230\u672c\u5730\u4ee3\u7406\u670d\u52a1\u5668\u8fdb\u884c\u8fdb\u4e00\u6b65\u8fc7\u6ee4\u3002"),(0,n.kt)("p",null,"\u5426\u5219\uff0cAdGuard \u5c06\u5bf9\u6240\u6709\u6d41\u91cf\u8fdb\u884c\u5b9e\u65f6\u8fc7\u6ee4\uff0c\u800c\u4e0d\u8fdb\u884c\u91cd\u5b9a\u5411\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u5c06\u8ba4\u4e3a AdGuard \u662f\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u7684\u552f\u4e00\u4e00\u6b3e\u5e94\u7528\u7a0b\u5e8f\uff08\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u7684\u6d41\u91cf\u901a\u8fc7 AdGuard \u8def\u7531\uff09\u3002 \u7f3a\u70b9\u662f\u672c\u529f\u80fd\u4f1a\u964d\u4f4e\u7cfb\u7edf\u9632\u706b\u5899\u7684\u6709\u6548\u6027\u3002 \u597d\u5904\u662f\u8fd9\u79cd\u65b9\u6cd5\u5de5\u4f5c\u8d77\u6765\u5feb\u4e86\u4e00\u70b9\u3002"),(0,n.kt)("h3",{id:"\u968f\u7cfb\u7edf\u542f\u52a8\u65f6\u663e\u793a\u4e3b\u7a97\u53e3"},"\u968f\u7cfb\u7edf\u542f\u52a8\u65f6\u663e\u793a\u4e3b\u7a97\u53e3"),(0,n.kt)("p",null,"\u542f\u7528\u6b64\u9009\u9879\u53ef\u5728\u52a0\u8f7d\u7cfb\u7edf\u540e\u6253\u5f00 AdGuard \u4e3b\u7a97\u53e3\u3002 \u8bf7\u6ce8\u610f\uff0c\u672c\u529f\u80fd\u4e0d\u5f71\u54cd\u5b9e\u9645\u8fc7\u6ee4\u670d\u52a1\u662f\u5426\u542f\u52a8\uff0c\u6b64\u8bbe\u7f6e\u4f4d\u4e8e",(0,n.kt)("em",{parentName:"p"},"\u300c\u8bbe\u7f6e\u300d\u2192\u300c\u5e38\u89c4\u8bbe\u7f6e\u300d"),"\u4e2d\u3002"),(0,n.kt)("h3",{id:"\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u542f\u7528\u8fc7\u6ee4"},"\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u542f\u7528\u8fc7\u6ee4"),(0,n.kt)("p",null,"\u4ece v7.12 \u7248\u672c\u5f00\u59cb\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u300cAdGuard \u968f\u7cfb\u7edf\u542f\u52a8\u300d\u9009\u9879\u88ab\u7981\u7528\uff0cAdGuard \u670d\u52a1\u4e0d\u4f1a\u5728\u64cd\u4f5c\u7cfb\u7edf\u542f\u52a8\u540e\u5f00\u59cb\u8fc7\u6ee4\u6d41\u91cf\u3002 \u8fd9\u610f\u5473\u7740\uff0cAdGuard \u670d\u52a1\u662f\u4ee5\u201c\u5f85\u673a\u201d\u6a21\u5f0f\u542f\u52a8\u7684\u3002 \u542f\u7528\u6b64\u9009\u9879\uff0c\u4f7f AdGuard \u8fc7\u6ee4\u6d41\u91cf\uff0c\u5373\u4f7f\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u542f\u52a8\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before v7.12, the AdGuard service started in filtering mode by default (even if the ",(0,n.kt)("em",{parentName:"p"},"Launch AdGuard at system start-up")," was disabled). If you were satisfied with the old behavior, enable this option.")),(0,n.kt)("h3",{id:"\u8fc7\u6ee4-localhost-\u8fde\u63a5"},"\u8fc7\u6ee4 localhost \u8fde\u63a5"),(0,n.kt)("p",null,"\u5982\u679c\u7528\u6237\u5e0c\u671b AdGuard \u8fc7\u6ee4\u73af\u56de\uff08Loopback\uff09\u8fde\u63a5\uff0c\u8bf7\u9009\u4e2d\u590d\u9009\u6846\u3002 \u5982\u679c\u7528\u6237\u5df2\u5b89\u88c5 AdGuard VPN\uff0c\u6b64\u9009\u9879\u5c06\u59cb\u7ec8\u5904\u4e8e\u5f00\u542f\u72b6\u6001\uff0c\u5426\u5219 AdGuard VPN \u5c06\u65e0\u6cd5\u5de5\u4f5c\u3002"),(0,n.kt)("h3",{id:"\u4ece\u8fc7\u6ee4\u4e2d\u6392\u9664\u7279\u5b9a-ip-\u8303\u56f4"},"\u4ece\u8fc7\u6ee4\u4e2d\u6392\u9664\u7279\u5b9a IP \u8303\u56f4"),(0,n.kt)("p",null,"\u5982\u679c\u7528\u6237\u4e0d\u5e0c\u671b AdGuard \u8fc7\u6ee4\u7279\u5b9a\u7684\u5b50\u7f51\uff0c\u8bf7\u542f\u7528\u6b64\u529f\u80fd\uff0c\u5e76\u5728\u4e0b\u9762",(0,n.kt)("strong",{parentName:"p"},"\u300c\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684 IP \u8303\u56f4\u300d"),"\u6307\u5b9a CIDR \u8868\u8bb0\u4e2d\u7684 IP \u8303\u56f4\uff08\u4f8b\u5982 98.51.100.14/24\uff09\u3002"),(0,n.kt)("h3",{id:"\u542f\u7528-har-\u5199\u5165"},"\u542f\u7528 HAR \u5199\u5165"),(0,n.kt)("p",null,"\u6b64\u9009\u9879",(0,n.kt)("strong",{parentName:"p"},"\u4ec5\u7528\u4e8e\u8c03\u8bd5\u76ee\u7684"),"\u3002 \u5982\u679c\u52fe\u9009\u590d\u9009\u6807\u8bb0\uff0cAdGuard \u5c06\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b HAR 1.2 \u683c\u5f0f\u7684\u6240\u6709\u5df2\u8fc7\u6ee4 HTTP \u8bf7\u6c42\u7684\u4fe1\u606f\u3002 \u8fd9\u4e2a\u6587\u4ef6\u53ef\u4ee5\u7528 Fiddler \u5e94\u7528\u7a0b\u5e8f\u5206\u6790\u3002 \u6ce8\u610f\uff0c\u8fd9\u53ef\u80fd\u4f1a\u663e\u8457\u964d\u4f4e\u7f51\u9875\u52a0\u8f7d\u901f\u5ea6\u3002"),(0,n.kt)("h3",{id:"\u5728\u666e\u901a\u7684-http-\u8bf7\u6c42\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u7a7a\u95f4"},"\u5728\u666e\u901a\u7684 HTTP \u8bf7\u6c42\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u7a7a\u95f4"),(0,n.kt)("p",null,"\u5728 HTTP \u65b9\u6cd5\u548c URL \u4e4b\u95f4\u6dfb\u52a0\u989d\u5916\u7684\u7a7a\u683c\uff0c\u5e76\u5728\u201c\u4e3b\u673a\u201d\uff08Host\uff09\u5b57\u6bb5\u540e\u5220\u9664\u7a7a\u683c\u4ee5\u907f\u514d\u6df1\u5ea6\u5305\u68c0\u6d4b\u3002 \u4f8b\u5982\uff0c\u8bf7\u6c42"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /foo/bar/ HTTP/1.1\nHost: example.org")),(0,n.kt)("p",null,"\u5c06\u8f6c\u6362\u4e3a"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /foo/bar/ HTTP/1.1\nHost: example.org")),(0,n.kt)("p",null,"\u6b64\u9009\u9879\u4ec5\u5728\u542f\u7528\u9690\u8eab\u6a21\u5f0f\u7684\u300c",(0,n.kt)("em",{parentName:"p"},"\u4fdd\u62a4\u514d\u53d7 DPI \u5f71\u54cd"),"\u300d\u9009\u9879\u65f6\u88ab\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"\u8c03\u6574\u521d\u59cb-tls-\u6570\u636e\u5305\u7684\u788e\u7247\u5927\u5c0f"},"\u8c03\u6574\u521d\u59cb TLS \u6570\u636e\u5305\u7684\u788e\u7247\u5927\u5c0f"),(0,n.kt)("p",null,"\u6307\u5b9a TCP \u6570\u636e\u5305\u788e\u7247\u7684\u5927\u5c0f\uff0c\u907f\u514d\u6df1\u5ea6\u5305\u68c0\u6d4b\u3002 This option only affects secured (HTTPS) traffic."),(0,n.kt)("p",null,"\u5982\u679c\u5f00\u542f\u8be5\u9009\u9879\uff0cAdGuard \u5c06\u521d\u59cb TLS \u6570\u636e\u5305\uff08ClientHello \u6570\u636e\u5305\uff09\u5206\u6210\u4e24\u90e8\u5206\uff1a\u7b2c\u4e00\u90e8\u5206\u5305\u542b\u6307\u5b9a\u7684\u957f\u5ea6\uff0c\u7b2c\u4e8c\u90e8\u5206\u5305\u542b\u5269\u4f59\u7684\u957f\u5ea6\uff0c\u76f4\u5230\u6574\u4e2a\u521d\u59cb TLS \u6570\u636e\u5305\u7684\u957f\u5ea6\u3002"),(0,n.kt)("p",null,"Valid values: 1\u20131500. \u5982\u679c\u6307\u5b9a\u65e0\u6548\u5927\u5c0f\uff0c\u5c06\u4f7f\u7528\u7cfb\u7edf\u9009\u62e9\u7684\u6570\u503c\u3002 \u6b64\u9009\u9879\u4ec5\u5728\u542f\u7528\u9690\u8eab\u6a21\u5f0f\u7684\u300c",(0,n.kt)("em",{parentName:"p"},"\u4fdd\u62a4\u514d\u53d7 DPI \u5f71\u54cd"),"\u300d\u9009\u9879\u65f6\u88ab\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"\u666e\u901a-http-\u8bf7\u6c42\u7247\u6bb5\u5927\u5c0f"},"\u666e\u901a HTTP \u8bf7\u6c42\u7247\u6bb5\u5927\u5c0f"),(0,n.kt)("p",null,"\u8c03\u6574 HTTP \u8bf7\u6c42\u7247\u6bb5\u5927\u5c0f\u3002 \u6b64\u9009\u9879\u4ec5\u5f71\u54cd\u666e\u901a HTTP \u6d41\u91cf\u3002 \u5f00\u542f\u8be5\u9009\u9879\u540e\uff0cAdGuard \u4f1a\u5c06\u521d\u59cb\u6570\u636e\u5305\u5206\u6210\u4e24\u90e8\u5206\uff1a\u7b2c\u4e00\u90e8\u5206\u662f\u6307\u5b9a\u7684\u957f\u5ea6\uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u6307\u5b9a\u7684\u957f\u5ea6\uff0c\u76f4\u5230\u539f\u59cb\u6570\u636e\u5305\u7684\u957f\u5ea6\u3002"),(0,n.kt)("p",null,"Valid values: 1\u20131500. \u5982\u679c\u6307\u5b9a\u65e0\u6548\u5927\u5c0f\uff0c\u5c06\u4f7f\u7528\u7cfb\u7edf\u9009\u62e9\u7684\u6570\u503c\u3002 \u6b64\u9009\u9879\u4ec5\u5728\u542f\u7528\u9690\u8eab\u6a21\u5f0f\u7684\u300c",(0,n.kt)("em",{parentName:"p"},"\u4fdd\u62a4\u514d\u53d7 DPI \u5f71\u54cd"),"\u300d\u9009\u9879\u65f6\u88ab\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"\u663e\u793a-quic"},"\u663e\u793a QUIC"),(0,n.kt)("p",null,"\u5141\u8bb8\u5728\u8fc7\u6ee4\u65e5\u5fd7\u4e2d\u663e\u793a QUIC \u534f\u8bae\u8bb0\u5f55\u3002 \u4ec5\u9002\u7528\u4e8e\u88ab\u963b\u6b62\u7684\u8bf7\u6c42\u3002"),(0,n.kt)("h3",{id:"\u542f\u7528-tcp-\u4fdd\u6d3bkeepalive"},"\u542f\u7528 TCP \u4fdd\u6d3b\uff08keepalive\uff09"),(0,n.kt)("p",null,"\u5b9a\u671f\u5728 IDLE \u8fde\u63a5\u4e0a\u53d1\u9001 TCP \u6570\u636e\u5305\uff0c\u4ee5\u786e\u4fdd\u5b83\u662f\u4fdd\u6d3b\u7684\uff0c\u5e76\u66f4\u65b0 NAT \u8d85\u65f6\u3002 \u6b64\u9009\u9879\u53ef\u7528\u4e8e\u7ed5\u8fc7\u67d0\u4e9b ISP\uff08\u4e92\u8054\u7f51\u670d\u52a1\u63d0\u4f9b\u5546\uff09\u4f7f\u7528\u7684\u4e25\u683c\u7684\u7f51\u7edc\u5730\u5740\u8f6c\u6362\uff08NAT\uff09\u8bbe\u7f6e\u3002"),(0,n.kt)("h3",{id:"tcp-\u4fdd\u6d3b\u95f4\u9694"},"TCP \u4fdd\u6d3b\u95f4\u9694"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u5728\u53d1\u9001 keepalive \u63a2\u6d4b\u4e4b\u524d\u7684\u7a7a\u95f2\u65f6\u95f4\u6bb5\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002 If 0 is specified, the value selected by the system will be used."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This setting only works when the ",(0,n.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled.")),(0,n.kt)("h3",{id:"tcp-\u4fdd\u6d3b\u8d85\u65f6"},"TCP \u4fdd\u6d3b\u8d85\u65f6"),(0,n.kt)("p",null,"Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. \u5982\u679c\u6307\u5b9a 0\uff0c\u4f7f\u7528\u7cfb\u7edf\u9009\u62e9\u7684\u6570\u503c\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This setting only works when the ",(0,n.kt)("em",{parentName:"p"},"Enable TCP keepalive")," option is enabled.")),(0,n.kt)("h3",{id:"\u62e6\u622a-java"},"\u62e6\u622a Java"),(0,n.kt)("p",null,"\u4e00\u4e9b\u7f51\u7ad9\u548c Web \u670d\u52a1\u4ecd\u7136\u652f\u6301 Java \u63d2\u4ef6\u3002 \u4f5c\u4e3a Java \u63d2\u4ef6\u57fa\u7840\u7684 API \u5b58\u5728\u4e25\u91cd\u7684\u5b89\u5168\u6f0f\u6d1e\u3002 \u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u53ef\u4ee5\u7981\u7528\u6b64\u7c7b\u63d2\u4ef6\u3002 \u7136\u800c\uff0c\u5373\u4f7f\u7528\u6237\u51b3\u5b9a\u4f7f\u7528",(0,n.kt)("em",{parentName:"p"},"\u300c\u62e6\u622a Java\u300d"),"\u9009\u9879\uff0cJavaScript \u4ecd\u7136\u4f1a\u88ab\u542f\u7528\u3002"),(0,n.kt)("h3",{id:"dns-\u670d\u52a1\u5668\u7684\u8d85\u65f6\u671f\u9650"},"DNS \u670d\u52a1\u5668\u7684\u8d85\u65f6\u671f\u9650"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6307\u5b9a AdGuard \u5728\u4f7f\u7528\u540e\u5907\u670d\u52a1\u5668\u4e4b\u524d\uff0c\u7b49\u5f85\u9009\u5b9a DNS \u670d\u52a1\u5668\u54cd\u5e94\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002 \u5982\u679c\u6570\u503c\u65e0\u6548\u6216\u4e3a\u7a7a\uff0c\u8981\u4f7f\u7528\u7684\u6570\u503c\u4e3a 5000\u3002"),(0,n.kt)("h3",{id:"\u5c06-http3-\u7528\u4e8e-dns-over-https"},"\u5c06 HTTP/3 \u7528\u4e8e DNS-over-HTTPS"),(0,n.kt)("p",null,"\u5982\u679c\u6240\u9009\u4e0a\u6e38\u652f\u6301\u6b64\u534f\u8bae\uff0c\u4e3a DNS-over-HTTPS \u4e0a\u6e38\u542f\u7528 HTTP/3 \u4ee5\u52a0\u901f\u8fde\u63a5\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u542f\u7528\u8be5\u9009\u9879\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u6240\u6709 DNS \u8bf7\u6c42\u90fd\u5c06\u901a\u8fc7 HTTP/3 \u53d1\u9001\u3002"),(0,n.kt)("h3",{id:"\u4f7f\u7528\u5907\u7528-dns-\u4e0a\u6e38"},"\u4f7f\u7528\u5907\u7528 DNS \u4e0a\u6e38"),(0,n.kt)("p",null,"Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail."),(0,n.kt)("h3",{id:"\u5e76\u884c\u67e5\u8be2-dns-\u4e0a\u6e38"},"\u5e76\u884c\u67e5\u8be2 DNS \u4e0a\u6e38"),(0,n.kt)("p",null,"All upstreams will be queried in parallel and the first response is returned. \u7531\u4e8e DNS \u67e5\u8be2\u4ee5\u5e76\u884c\u65b9\u5f0f\u5904\u7406\uff0c\u56e0\u6b64\u542f\u7528\u6b64\u529f\u80fd\u53ef\u4ee5\u63d0\u9ad8\u4e0a\u7f51\u901f\u5ea6\u3002"),(0,n.kt)("h3",{id:"\u59cb\u7ec8\u54cd\u5e94\u6545\u969c\u7684-dns-\u67e5\u8be2"},"\u59cb\u7ec8\u54cd\u5e94\u6545\u969c\u7684 DNS \u67e5\u8be2"),(0,n.kt)("p",null,"\u5982\u679c\u5730\u5740\u89e3\u6790\u5728\u6bcf\u4e2a\u8f6c\u53d1\u7684\u4e0a\u6e38\u4ee5\u53ca\u540e\u5907\u57df\u540d\u4e0a\u5931\u8d25\uff0c\u5bf9 DNS \u8bf7\u6c42\u7684\u54cd\u5e94\u5c06\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"SERVFAIL"),"\u3002"),(0,n.kt)("h3",{id:"\u542f\u7528\u5b89\u5168-dns-\u8bf7\u6c42\u7684\u8fc7\u6ee4"},"\u542f\u7528\u5b89\u5168 DNS \u8bf7\u6c42\u7684\u8fc7\u6ee4"),(0,n.kt)("p",null,"AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests."),(0,n.kt)("h3",{id:"host-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"},"host \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u9009\u62e9 AdGuard \u5c06\u6839\u636e ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax"},"hosts \u89c4\u5219\u7684\u8bed\u6cd5"),"\u5bf9\u88ab DNS \u89c4\u5219\u963b\u6b62\u7684\u57df\u540d\u4f5c\u51fa\u53cd\u5e94\u7684\u65b9\u5f0f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u300cREFUSED\u300d\u7684\u9519\u8bef\u4f5c\u51fa\u56de\u5e94"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u300cNxDomain\u300d\u7684\u9519\u8bef\u4f5c\u51fa\u56de\u5e94"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 IP \u5730\u5740\u4f5c\u51fa\u56de\u5e94")),(0,n.kt)("h3",{id:"adblock-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"},"adblock \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u9009\u62e9 AdGuard \u5c06\u6839\u636e ",(0,n.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax"}," adblock \u89c4\u5219\u7684\u8bed\u6cd5"),"\u5bf9\u88ab DNS \u89c4\u5219\u963b\u6b62\u7684\u57df\u540d\u4f5c\u51fa\u53cd\u5e94\u7684\u65b9\u5f0f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u300cREFUSED\u300d\u7684\u9519\u8bef\u4f5c\u51fa\u56de\u5e94"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u300cNxDomain\u300d\u7684\u9519\u8bef\u4f5c\u51fa\u56de\u5e94"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 IP \u5730\u5740\u4f5c\u51fa\u56de\u5e94")),(0,n.kt)("h3",{id:"\u81ea\u5b9a\u4e49-ipv4-\u5730\u5740"},"\u81ea\u5b9a\u4e49 IPv4 \u5730\u5740"),(0,n.kt)("p",null,"\u5982\u679c\u5728 host \u89c4\u5219\u7684\u300c\u62e6\u622a\u6a21\u5f0f\u300d\u6216 adblock \u89c4\u5219\u7684\u300c\u62e6\u622a\u6a21\u5f0f\u300d\u4e2d\u9009\u62e9\u300c\u81ea\u5b9a\u4e49 IP \u5730\u5740\u300d\uff0c\u6240\u6709\u88ab\u963b\u6b62\u7684\u300cA\u300d\u8bf7\u6c42\u5c06\u8fd4\u56de\u8be5 IP \u5730\u5740. \u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0cAdGuard \u5c06\u56de\u590d\u9ed8\u8ba4\u7684\u300cREFUSED\u300d\u9519\u8bef\u3002"),(0,n.kt)("h3",{id:"\u81ea\u5b9a\u4e49-ipv6-\u5730\u5740"},"\u81ea\u5b9a\u4e49 IPv6 \u5730\u5740"),(0,n.kt)("p",null,"\u5982\u679c\u5728 host \u89c4\u5219\u7684\u300c\u62e6\u622a\u6a21\u5f0f\u300d\u6216 adblock \u89c4\u5219\u7684\u300c\u62e6\u622a\u6a21\u5f0f\u300d\u4e2d\u9009\u62e9\u300c\u81ea\u5b9a\u4e49 IP \u5730\u5740\u300d\uff0c\u6240\u6709\u88ab\u963b\u6b62\u7684\u300cAAAA\u300d\u8bf7\u6c42\u5c06\u8fd4\u56de\u8be5 IP \u5730\u5740. \u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0cAdGuard \u5c06\u56de\u590d\u9ed8\u8ba4\u7684\u300cREFUSED\u300d\u9519\u8bef\u3002"),(0,n.kt)("h3",{id:"\u540e\u5907fallback\u670d\u52a1\u5668"},"\u540e\u5907\uff08Fallback\uff09\u670d\u52a1\u5668"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u540e\u5907 DNS \u670d\u52a1\u5668\uff0c\u5982\u679c\u4e3b\u670d\u52a1\u5668\u672a\u80fd\u5728\u4e0b\u4e00\u8282\u6307\u5b9a\u7684\u8d85\u65f6\u671f\u9650\u5185\u505a\u51fa\u54cd\u5e94\uff0cDNS \u8bf7\u6c42\u5c06\u88ab\u91cd\u65b0\u8def\u7531\u5230\u540e\u5907\u670d\u52a1\u5668\u3002 \u6709\u4e09\u4e2a\u9009\u9879\u53ef\u4f9b\u9009\u62e9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f7f\u7528\u540e\u5907\u670d\u52a1\u5668\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7cfb\u7edf\u9ed8\u8ba4\u7684\u670d\u52a1\u5668\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u670d\u52a1\u5668\u3002")),(0,n.kt)("h3",{id:"\u62e6\u622a-ech"},"\u62e6\u622a ECH"),(0,n.kt)("p",null,"\u5982\u679c\u542f\u7528\uff0cAdGuard \u5c06\u4ece\u54cd\u5e94\u4e2d\u53bb\u9664 Encrypted Client Hello \u53c2\u6570\u3002"),(0,n.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668\u7684\u5217\u8868"},"\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668\u7684\u5217\u8868"),(0,n.kt)("p",null,"\u5982\u679c\u7528\u6237\u5e0c\u671b AdGuard \u4f7f\u7528\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668\uff0c\u8bf7\u5728\u6b64\u90e8\u5206\u5217\u51fa\u5b83\u4eec\uff0c\u6bcf\u884c\u4e00\u4e2a\u3002"),(0,n.kt)("h3",{id:"\u81ea\u5b9a\u4e49-bootstrap-\u5730\u5740\u7684\u5217\u8868"},"\u81ea\u5b9a\u4e49 bootstrap \u5730\u5740\u7684\u5217\u8868"),(0,n.kt)("p",null,"Bootstrap \u662f\u4e00\u4e2a\u4e2d\u95f4 DNS \u670d\u52a1\u5668\uff0c\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5728\u300c",(0,n.kt)("em",{parentName:"p"},"DNS \u4fdd\u62a4"),"\u300d\u4e2d\u9009\u62e9\u7684\u5b89\u5168 DNS \u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002 \u5f53\u4f7f\u7528\u7528\u5b57\u6bcd\u8868\u793a\u670d\u52a1\u5668\u5730\u5740\u7684\u534f\u8bae\uff08\u4f8b\u5982 DNS-over-TLS\uff09\u65f6\uff0c\u9700\u8981\u8fd9\u6837\u7684\u201c\u4e2d\u95f4\u7acb\u573a\u201d\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cbootstrap \u5145\u5f53\u7ffb\u8bd1\u5668\uff0c\u5c06\u5b57\u6bcd\u8f6c\u6362\u4e3a\u7cfb\u7edf\u53ef\u4ee5\u7406\u89e3\u7684\u6570\u5b57\u3002"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u7cfb\u7edf DNS \u89e3\u6790\u5668\uff0c\u521d\u59cb bootstrap \u8bf7\u6c42\u901a\u8fc7\u7aef\u53e353\u53d1\u51fa\u3002 \u5982\u679c\u8be5\u65b9\u5f0f\u4e0d\u9002\u5408\uff0c\u8bf7\u6309\u4ece\u4e0a\u5230\u4e0b\u7684\u987a\u5e8f\u5217\u51fa\u5c06\u7528\u4e8e\u786e\u5b9a\u52a0\u5bc6 DNS \u670d\u52a1\u5668\u5730\u5740\u7684 DNS \u670d\u52a1\u5668\u7684 IP \u5730\u5740\u3002 \u6307\u5b9a\u7684 IP \u5730\u5740\u5c06\u6309\u5217\u51fa\u7684\u987a\u5e8f\u5e94\u7528\u3002 \u5982\u679c\u7528\u6237\u6307\u5b9a\u7684\u5730\u5740\u65e0\u6548\uff0c\u6216\u8005\u6ca1\u6709\u6307\u5b9a\u5730\u5740\uff0c\u7cfb\u7edf IP \u5c06\u88ab\u4f7f\u7528\u3002"),(0,n.kt)("h3",{id:"dns-\u6392\u9664\u9879"},"DNS \u6392\u9664\u9879"),(0,n.kt)("p",null,"\u6240\u6709\u5bf9\u8fd9\u91cc\u5217\u51fa\u7684\u57df\u540d\u7684 DNS \u8bf7\u6c42\u5c06\u88ab\u91cd\u5b9a\u5411\u5230\u7cfb\u7edf\u9ed8\u8ba4\u7684 DNS \u670d\u52a1\u5668\uff0c\u800c\u4e0d\u662f\u5728\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u4e2d\u6307\u5b9a\u7684 DNS \u670d\u52a1\u5668\u3002 \u6b64\u5916\uff0cDNS \u62e6\u622a\u89c4\u5219\u5c06\u4e0d\u4f1a\u5e94\u7528\u4e8e\u6b64\u7c7b\u8bf7\u6c42\u3002"),(0,n.kt)("h3",{id:"\u4ece-dns-\u8fc7\u6ee4\u4e2d\u6392\u9664\u6307\u5b9a\u7684-wi-fi-\u7f51\u7edc\u540d\u79f0ssid"},"\u4ece DNS \u8fc7\u6ee4\u4e2d\u6392\u9664\u6307\u5b9a\u7684 Wi-Fi \u7f51\u7edc\u540d\u79f0\uff08SSID\uff09"),(0,n.kt)("p",null,"DNS protection will not include Wi-Fi networks listed in this section. \u6bcf\u884c\u6307\u5b9a\u4e00\u4e2a Wi-Fi \u7f51\u7edc\u540d\u79f0\uff08SSID\uff09\u3002 \u5982\u679c\u4e00\u4e2a\u7279\u5b9a\u7684 Wi-Fi \u7f51\u7edc\u5df2\u7ecf\u88ab AdGuard Home \u6216\u5176\u4ed6 DNS \u4fdd\u62a4\u7cfb\u7edf\u4fdd\u62a4\uff0c\u6b64\u529f\u80fd\u5f88\u5b9e\u7528\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u518d\u6b21\u8fc7\u6ee4 DNS \u8bf7\u6c42\u662f\u591a\u4f59\u7684\u3002"))}s.isMDXComponent=!0}}]);