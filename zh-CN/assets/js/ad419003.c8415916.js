"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9902],{4137:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):d(d({},t),e)),l},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(l),k=r,N=s["".concat(p,".").concat(k)]||s[k]||v[k]||n;return l?a.createElement(N,d(d({ref:t},u),{},{components:l})):a.createElement(N,d({ref:t},u))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,d=new Array(n);d[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var o=2;o<n;o++)d[o]=l[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},918:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=l(7462),r=(l(7294),l(4137));const n={title:"\u4f4e\u7ea7\u8bbe\u7f6e",sidebar_position:6},d=void 0,i={unversionedId:"adguard-for-android/solving-problems/low-level-settings",id:"adguard-for-android/solving-problems/low-level-settings",title:"\u4f4e\u7ea7\u8bbe\u7f6e",description:"\u672c\u6587\u6240\u8ff0 AdGuard Android \u7248\u662f\u5728\u7cfb\u7edf\u7ea7\u4e0a\u4fdd\u62a4\u8bbe\u5907\u7684\u591a\u529f\u80fd\u7684\u5e7f\u544a\u62e6\u622a\u5668\u3002 \u8981\u4e86\u89e3\u5de5\u4f5c\u539f\u7406\uff0c\u8bf7\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/low-level-settings",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u4f4e\u7ea7\u8bbe\u7f6e",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u6536\u96c6 HAR \u6587\u4ef6",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/har"},next:{title:"\u5982\u4f55\u5728 YouTube \u5e94\u7528\u4e2d\u62e6\u622a\u5e7f\u544a",permalink:"/KnowledgeBase/zh-CN/adguard-for-android/solving-problems/youtube-ads"}},p={},o=[{value:"\u5982\u4f55\u8fdb\u5165\u4f4e\u7ea7\u8bbe\u7f6e",id:"\u5982\u4f55\u8fdb\u5165\u4f4e\u7ea7\u8bbe\u7f6e",level:2},{value:"\u4f4e\u7ea7\u8bbe\u7f6e",id:"\u4f4e\u7ea7\u8bbe\u7f6e",level:2},{value:"DNS \u4fdd\u62a4\u529f\u80fd",id:"dns-\u4fdd\u62a4\u529f\u80fd",level:3},{value:"\u540e\u5907\u4e0a\u6e38",id:"\u540e\u5907\u4e0a\u6e38",level:4},{value:"\u540e\u5907\u57df\u540d",id:"\u540e\u5907\u57df\u540d",level:4},{value:"\u68c0\u6d4b\u641c\u7d22\u57df\u540d",id:"\u68c0\u6d4b\u641c\u7d22\u57df\u540d",level:4},{value:"Bootstrap \u4e0a\u6e38",id:"bootstrap-\u4e0a\u6e38",level:4},{value:"adblock \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",id:"adblock-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",level:4},{value:"host \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",id:"host-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f",level:4},{value:"DNS \u8bf7\u6c42\u8d85\u65f6",id:"dns-\u8bf7\u6c42\u8d85\u65f6",level:4},{value:"\u5c4f\u853d\u7684 TTL \u5e94\u7b54",id:"\u5c4f\u853d\u7684-ttl-\u5e94\u7b54",level:4},{value:"DNS \u7f13\u5b58\u5927\u5c0f",id:"dns-\u7f13\u5b58\u5927\u5c0f",level:4},{value:"ECH \u62e6\u622a",id:"ech-\u62e6\u622a",level:4},{value:"\u5ffd\u7565\u4e0d\u53ef\u7528\u7684\u51fa\u7ad9\u4ee3\u7406",id:"\u5ffd\u7565\u4e0d\u53ef\u7528\u7684\u51fa\u7ad9\u4ee3\u7406",level:4},{value:"\u4e3a DNS-over-HTTPS \u4e0a\u6e38\u8bd5\u7528 HTTP/3",id:"\u4e3a-dns-over-https-\u4e0a\u6e38\u8bd5\u7528-http3",level:4},{value:"SERVFAIL \u6545\u969c\u54cd\u5e94",id:"servfail-\u6545\u969c\u54cd\u5e94",level:4},{value:"\u5bf9\u975e\u540e\u5907\u57df\u540d\u4f7f\u7528\u540e\u5907\u529f\u80fd",id:"\u5bf9\u975e\u540e\u5907\u57df\u540d\u4f7f\u7528\u540e\u5907\u529f\u80fd",level:4},{value:"\u9a8c\u8bc1 DNS \u4e0a\u6e38",id:"\u9a8c\u8bc1-dns-\u4e0a\u6e38",level:4},{value:"Filter secure DNS",id:"filter-secure-dns",level:4},{value:"\u8fc7\u6ee4",id:"\u8fc7\u6ee4",level:3},{value:"\u6355\u83b7 HAR",id:"\u6355\u83b7-har",level:4},{value:"HTTPS \u8fc7\u6ee4",id:"https-\u8fc7\u6ee4",level:3},{value:"Encrypted Client Hello",id:"encrypted-client-hello",level:4},{value:"OCSP \u68c0\u67e5",id:"ocsp-\u68c0\u67e5",level:4},{value:"\u91cd\u5b9a\u5411 DNS-over-HTTPS \u8bf7\u6c42",id:"\u91cd\u5b9a\u5411-dns-over-https-\u8bf7\u6c42",level:4},{value:"\u8fc7\u6ee4 HTTP/3",id:"\u8fc7\u6ee4-http3",level:4},{value:"\u51fa\u7ad9\u4ee3\u7406",id:"\u51fa\u7ad9\u4ee3\u7406",level:3},{value:"\u663e\u793a\u300c\u8fc7\u6ee4 DNS \u8bf7\u6c42\u300d\u8bbe\u7f6e",id:"\u663e\u793a\u8fc7\u6ee4-dns-\u8bf7\u6c42\u8bbe\u7f6e",level:4},{value:"\u9632\u62a4",id:"\u9632\u62a4",level:3},{value:"\u7aef\u53e3\u8303\u56f4",id:"\u7aef\u53e3\u8303\u56f4",level:4},{value:"\u8bb0\u5f55\u5df2\u5220\u9664\u7684 HTML \u4e8b\u4ef6",id:"\u8bb0\u5f55\u5df2\u5220\u9664\u7684-html-\u4e8b\u4ef6",level:4},{value:"Scriplet \u8c03\u8bd5",id:"scriplet-\u8c03\u8bd5",level:4},{value:"\u6392\u9664\u7684\u5e94\u7528",id:"\u6392\u9664\u7684\u5e94\u7528",level:4},{value:"QUIC \u65c1\u8def\u5305",id:"quic-\u65c1\u8def\u5305",level:4},{value:"\u7f51\u7edc\u66f4\u6539\u65f6\u91cd\u65b0\u914d\u7f6e\u81ea\u52a8\u4ee3\u7406",id:"\u7f51\u7edc\u66f4\u6539\u65f6\u91cd\u65b0\u914d\u7f6e\u81ea\u52a8\u4ee3\u7406",level:4},{value:"IPv6 \u8fc7\u6ee4",id:"ipv6-\u8fc7\u6ee4",level:4},{value:"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684 IPv4 \u8303\u56f4",id:"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684-ipv4-\u8303\u56f4",level:4},{value:"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684 IPv6 \u8303\u56f4",id:"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684-ipv6-\u8303\u56f4",level:4},{value:"\u51fa\u7ad9\u5957\u63a5\u5b57\u7684 TCP \u4fdd\u6d3b",id:"\u51fa\u7ad9\u5957\u63a5\u5b57\u7684-tcp-\u4fdd\u6d3b",level:4},{value:"\u672c\u5730 VPN \u8bbe\u7f6e",id:"\u672c\u5730-vpn-\u8bbe\u7f6e",level:3},{value:"\u64a4\u9500 VPN \u7684\u6062\u590d\u5ef6\u8fdf",id:"\u64a4\u9500-vpn-\u7684\u6062\u590d\u5ef6\u8fdf",level:4},{value:"\u4e3a\u64a4\u9500\u7684 VPN \u6062\u590d\u91cd\u65b0\u5b89\u6392\u5ef6\u8fdf",id:"\u4e3a\u64a4\u9500\u7684-vpn-\u6062\u590d\u91cd\u65b0\u5b89\u6392\u5ef6\u8fdf",level:4},{value:"\u6700\u5927\u4f20\u8f93\u5355\u5143\uff08MTU\uff09",id:"\u6700\u5927\u4f20\u8f93\u5355\u5143mtu",level:4},{value:"\u81ea\u52a8\u6062\u590d VPN \u8fde\u63a5",id:"\u81ea\u52a8\u6062\u590d-vpn-\u8fde\u63a5",level:4},{value:"\u6570\u636e\u5305\u6355\u83b7\uff08PCAP\uff09",id:"\u6570\u636e\u5305\u6355\u83b7pcap",level:4},{value:"\u5c06 Wi-Fi \u7f51\u5173\u63a5\u5165 VPN \u8def\u7531\u4e2d",id:"\u5c06-wi-fi-\u7f51\u5173\u63a5\u5165-vpn-\u8def\u7531\u4e2d",level:4},{value:"IPv4 \u5730\u5740",id:"ipv4-\u5730\u5740",level:4},{value:"\u5f3a\u5236\u8def\u7531 LAN IPv4",id:"\u5f3a\u5236\u8def\u7531-lan-ipv4",level:4},{value:"\u8def\u7531\u6240\u6709 LAN IPv4 \u8fde\u63a5",id:"\u8def\u7531\u6240\u6709-lan-ipv4-\u8fde\u63a5",level:4},{value:"IPv6 \u5730\u5740",id:"ipv6-\u5730\u5740",level:4},{value:"\u5176\u5b83",id:"\u5176\u5b83",level:3},{value:"\u68c0\u6d4b Samsung Pay",id:"\u68c0\u6d4b-samsung-pay",level:4}],u={toc:o};function v(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6240\u8ff0 AdGuard Android \u7248\u662f\u5728\u7cfb\u7edf\u7ea7\u4e0a\u4fdd\u62a4\u8bbe\u5907\u7684\u591a\u529f\u80fd\u7684\u5e7f\u544a\u62e6\u622a\u5668\u3002 \u8981\u4e86\u89e3\u5de5\u4f5c\u539f\u7406\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f"),"\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u8fdb\u5165\u4f4e\u7ea7\u8bbe\u7f6e"},"\u5982\u4f55\u8fdb\u5165\u4f4e\u7ea7\u8bbe\u7f6e"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u6539\u300c",(0,r.kt)("em",{parentName:"p"},"\u4f4e\u7ea7\u8bbe\u7f6e"),"\u300d\u53ef\u80fd\u4f1a\u5bfc\u81f4 AdGuard \u7684\u6027\u80fd\u51fa\u73b0\u95ee\u9898\uff0c\u4e5f\u53ef\u80fd\u4f1a\u65ad\u5f00\u7f51\u7edc\u8fde\u63a5\u6216\u4fb5\u5bb3\u5b89\u5168\u548c\u9690\u79c1\u3002 \u5982\u679c\u60a8\u77e5\u9053\u81ea\u5df1\u5728\u8bbe\u7f6e\u4ec0\u4e48\uff0c\u6216\u8005\u662f\u6211\u4eec\u7684\u5ba2\u6237\u652f\u6301\u8981\u6c42\u60a8\u8fd9\u6837\u505a\uff0c\u8bf7\u6253\u5f00\u6b64\u90e8\u5206\u3002")),(0,r.kt)("p",null,"\u8981\u8f6c\u5230\u300c",(0,r.kt)("em",{parentName:"p"},"\u4f4e\u7ea7\u8bbe\u7f6e"),"\u300d\uff0c\u8bf7\u6253\u5f00 AdGuard \u5e94\u7528\u5e76\u70b9\u51fb\u5c4f\u5e55\u53f3\u4e0b\u89d2\u7684\u9f7f\u8f6e\u56fe\u6807\u3002 \u7136\u540e\u8fdb\u5165\u8f6c\u5230\u300c",(0,r.kt)("em",{parentName:"p"},"\u5e38\u89c4\u300d\u2192\u300c\u9ad8\u7ea7\u300d\u2192\u300c\u4f4e\u7ea7\u8bbe\u7f6e\u300d"),"\u3002"),(0,r.kt)("h2",{id:"\u4f4e\u7ea7\u8bbe\u7f6e"},"\u4f4e\u7ea7\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5728 4.0 \u7248\u7684 AdGuard Android \u7248\u4e2d\uff0c\u6211\u4eec\u5f7b\u5e95\u91cd\u65b0\u8bbe\u8ba1\u4e86\u4f4e\u7ea7\u8bbe\u7f6e\uff1a\u5c06\u5b83\u4eec\u5212\u5206\u4e3a\u4e3b\u9898\u5757\uff0c\u4f7f\u5b83\u4eec\u66f4\u52a0\u6e05\u6670\uff0c\u6dfb\u52a0\u5bf9\u8f93\u5165\u503c\u548c\u5176\u4ed6\u5b89\u5168\u9600\u7684\u9a8c\u8bc1\uff0c\u5220\u9664\u5e76\u6dfb\u52a0\u4e00\u4e9b\u8bbe\u7f6e\u3002"),(0,r.kt)("h3",{id:"dns-\u4fdd\u62a4\u529f\u80fd"},"DNS \u4fdd\u62a4\u529f\u80fd"),(0,r.kt)("h4",{id:"\u540e\u5907\u4e0a\u6e38"},"\u540e\u5907\u4e0a\u6e38"),(0,r.kt)("p",null,"\u5728\u914d\u7f6e\u7684\u670d\u52a1\u5668\u4e0d\u53ef\u7528\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u540e\u5907 DNS \u89e3\u6790\u5668\u3002 \u5171\u6709\u4e09\u4e2a\u9009\u9879\uff1a\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u52a8 DNS"),"\u300d\u300c",(0,r.kt)("em",{parentName:"p"},"\u65e0"),"\u300d\u548c\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u5b9a\u4e49 DNS"),"\u300d\u3002 \u5982\u679c\u7528\u6237\u672a\u6307\u5b9a\u540e\u5907\u670d\u52a1\u5668\uff0c\u8f6f\u4ef6\u5c06\u4f7f\u7528\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u52a8 DNS"),"\u300d\uff0c\u662f\u6307\u7cfb\u7edf DNS \u6216 AdGuard DNS\u3002 \u300c",(0,r.kt)("em",{parentName:"p"},"\u65e0"),"\u300d\u610f\u5473\u7740\u6ca1\u6709\u540e\u5907\u670d\u52a1\u5668\u3002 \u9009\u62e9\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u5b9a\u4e49 DNS"),"\u300d\uff0c\u7528\u6237\u53ef\u4ee5\u5217\u51fa\u4f5c\u4e3a\u4e0a\u6e38\u4f7f\u7528\u7684 IPv4 \u548c IPv6 \u670d\u52a1\u5668\u5730\u5740\u3002"),(0,r.kt)("h4",{id:"\u540e\u5907\u57df\u540d"},"\u540e\u5907\u57df\u540d"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u7528\u6237\u53ef\u4ee5\u5217\u51fa\u5c06\u76f4\u63a5\u8f6c\u53d1\u5230\u540e\u5907\u4e0a\u6e38\uff08\u5982\u679c\u5b58\u5728\uff09\u7684\u57df\u540d\u3002"),(0,r.kt)("h4",{id:"\u68c0\u6d4b\u641c\u7d22\u57df\u540d"},"\u68c0\u6d4b\u641c\u7d22\u57df\u540d"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0cAdGuard \u5c06\u68c0\u6d4b\u641c\u7d22\u57df\u540d\u5e76\u81ea\u52a8\u5c06\u5b83\u4eec\u8f6c\u53d1\u5230\u540e\u5907\u4e0a\u6e38\u3002"),(0,r.kt)("h4",{id:"bootstrap-\u4e0a\u6e38"},"Bootstrap \u4e0a\u6e38"),(0,r.kt)("p",null,"DoH\u3001DoT \u548c DoQ \u670d\u52a1\u5668\u7684 Bootstrap DNS\u3002 \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u52a8 DNS"),"\u300d\u5373\u7cfb\u7edf DNS \u6216 AdGuard DNS\u3002 \u9009\u62e9\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u5b9a\u4e49 DNS"),"\u300d\uff0c\u53ef\u4ee5\u5217\u51fa\u4f5c\u4e3a Bootstrap \u4e0a\u6e38\u4f7f\u7528\u7684 IPv4 \u548c IPv6 \u670d\u52a1\u5668\u5730\u5740\u3002"),(0,r.kt)("h4",{id:"adblock-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"},"adblock \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u53ef\u4ee5\u6839\u636e adblock \u89c4\u5219\u8bed\u6cd5\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"||example.org^"),"\uff09\u6307\u5b9a\u88ab DNS \u89c4\u5219\u963b\u6b62\u7684\u57df\u540d\u7684\u54cd\u5e94\u7c7b\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528 REFUSED \u54cd\u5e94"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de NXDOMAIN \u54cd\u5e94"),(0,r.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u81ea\u5b9a\u4e49 IP \u5730\u5740\uff08\u53ef\u5728\u6b64\u5904\u6307\u5b9a IPv4 \u548c IPv6 \u5730\u5740\uff09")),(0,r.kt)("h4",{id:"host-\u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"},"host \u89c4\u5219\u7684\u62e6\u622a\u6a21\u5f0f"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u6839\u636e\u4e3b\u673a\u89c4\u5219\u8bed\u6cd5\u6307\u5b9a DNS \u89c4\u5219\u963b\u6b62\u7684\u57df\u540d\u54cd\u5e94\u7c7b\u578b\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"<ip> <domain> 0.0.0.0 example.com"),"\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528 REFUSED \u54cd\u5e94"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de NXDOMAIN \u54cd\u5e94"),(0,r.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u81ea\u5b9a\u4e49 IP \u5730\u5740\uff08\u53ef\u5728\u6b64\u5904\u6307\u5b9a IPv4 \u548c IPv6 \u5730\u5740\uff09")),(0,r.kt)("h4",{id:"dns-\u8bf7\u6c42\u8d85\u65f6"},"DNS \u8bf7\u6c42\u8d85\u65f6"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6307\u5b9a AdGuard \u5728\u4f7f\u7528\u540e\u5907\u670d\u52a1\u5668\u4e4b\u524d\uff0c\u7b49\u5f85\u9009\u5b9a DNS \u670d\u52a1\u5668\u54cd\u5e94\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002 \u5982\u679c\u6570\u503c\u65e0\u6548\u6216\u4e3a\u7a7a\uff0c\u8981\u4f7f\u7528\u7684\u6570\u503c\u4e3a 5000\u3002"),(0,r.kt)("h4",{id:"\u5c4f\u853d\u7684-ttl-\u5e94\u7b54"},"\u5c4f\u853d\u7684 TTL \u5e94\u7b54"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u6307\u5b9a\u8bf7\u6c42\u54cd\u5e94\u963b\u585e\u65f6\u8fd4\u56de\u7684 TTL\uff08\u751f\u5b58\u65f6\u95f4\uff09\u503c\u3002"),(0,r.kt)("h4",{id:"dns-\u7f13\u5b58\u5927\u5c0f"},"DNS \u7f13\u5b58\u5927\u5c0f"),(0,r.kt)("p",null,"\u60a8\u53ef\u5728\u6b64\u5904\u6307\u5b9a\u7f13\u5b58\u54cd\u5e94\u7684\u6700\u5927\u6570\u91cf\u3002 \u9ed8\u8ba4\u503c\u4e3a 1000\u3002"),(0,r.kt)("h4",{id:"ech-\u62e6\u622a"},"ECH \u62e6\u622a"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\uff0cAdGuard \u4f1a\u4ece DNS \u54cd\u5e94\u4e2d\u53bb\u9664 Encrypted Client Hello \u53c2\u6570\u3002"),(0,r.kt)("h4",{id:"\u5ffd\u7565\u4e0d\u53ef\u7528\u7684\u51fa\u7ad9\u4ee3\u7406"},"\u5ffd\u7565\u4e0d\u53ef\u7528\u7684\u51fa\u7ad9\u4ee3\u7406"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5728\u51fa\u7ad9\u4ee3\u7406\u4e0d\u53ef\u7528\u65f6\u76f4\u63a5\u53d1\u9001 DNS \u8bf7\u6c42\u3002"),(0,r.kt)("h4",{id:"\u4e3a-dns-over-https-\u4e0a\u6e38\u8bd5\u7528-http3"},"\u4e3a DNS-over-HTTPS \u4e0a\u6e38\u8bd5\u7528 HTTP/3"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u4f7f\u7528 HTTP/3 \u52a0\u901f DoH \u4e0a\u6e38\u7684 DNS \u67e5\u8be2\u89e3\u6790\u3002 \u5426\u5219\uff0cAdGuard \u5c06\u6062\u590d\u5176\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5e76\u4f7f\u7528 HTTP/2 \u53d1\u9001 DNS-over-HTTPS \u7684\u6240\u6709 DNS \u8bf7\u6c42\u3002"),(0,r.kt)("h4",{id:"servfail-\u6545\u969c\u54cd\u5e94"},"SERVFAIL \u6545\u969c\u54cd\u5e94"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0c\u82e5\u6240\u6709\u4e0a\u6e38\uff08\u5305\u62ec\u540e\u5907\u4e0a\u6e38\uff09\u90fd\u65e0\u6cd5\u54cd\u5e94\uff0cAdGuard \u5c06\u5411\u5ba2\u6237\u7aef\u53d1\u9001 SERVFAIL \u54cd\u5e94\u3002"),(0,r.kt)("h4",{id:"\u5bf9\u975e\u540e\u5907\u57df\u540d\u4f7f\u7528\u540e\u5907\u529f\u80fd"},"\u5bf9\u975e\u540e\u5907\u57df\u540d\u4f7f\u7528\u540e\u5907\u529f\u80fd"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5bf9\u6240\u6709\u57df\u540d\u4f7f\u7528\u540e\u5907\u4e0a\u6e38\u3002 \u5426\u5219\uff0c\u53ea\u6709\u5728\u542f\u7528\u4e86\u76f8\u5e94\u9009\u9879\u7684\u60c5\u51b5\u4e0b\uff0c\u540e\u5907\u4e0a\u6e38\u624d\u4f1a\u7528\u4e8e\u540e\u5907\u57df\u548c\u641c\u7d22\u57df\u3002"),(0,r.kt)("h4",{id:"\u9a8c\u8bc1-dns-\u4e0a\u6e38"},"\u9a8c\u8bc1 DNS \u4e0a\u6e38"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5728\u6dfb\u52a0\u6216\u66f4\u65b0\u81ea\u5b9a\u4e49 DNS \u670d\u52a1\u5668\u4e4b\u524d\u6d4b\u8bd5 DNS \u4e0a\u6e38\u3002"),(0,r.kt)("h4",{id:"filter-secure-dns"},"Filter secure DNS"),(0,r.kt)("p",null,"If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a ",(0,r.kt)("em",{parentName:"p"},"Secure DNS")," (or similar) setting. You can use ",(0,r.kt)("em",{parentName:"p"},"Filter secure DNS")," in two different modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter on the fly"),". In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn\u2019t redirect it to the local DNS proxy. If a DNS server is specified in the browser\u2019s settings, this server will handle the DoH traffic for this browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Redirect to DNS proxy"),". In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard\u2019s DNS settings will handle all DoH traffic"))),(0,r.kt)("h3",{id:"\u8fc7\u6ee4"},"\u8fc7\u6ee4"),(0,r.kt)("h4",{id:"\u6355\u83b7-har"},"\u6355\u83b7 HAR"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u6355\u83b7 HAR \u6587\u4ef6\u3002 \u5b83\u4f1a\u5728\u5e94\u7528\u7a0b\u5e8f\u7f13\u5b58\u76ee\u5f55\u5185\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a\u300char\u300d\u7684\u76ee\u5f55\uff0c\u5e76\u5c06 HAR 1.2 \u683c\u5f0f\u7684\u6240\u6709\u5df2\u8fc7\u6ee4 HTTP \u8bf7\u6c42\u4fe1\u606f\u50a8\u5b58\u5728\u90a3\u91cc\uff0c\u8fd9\u4e9b\u4fe1\u606f\u53ef\u901a\u8fc7 Fiddler \u7a0b\u5e8f\u8fdb\u884c\u5206\u6790\u3002"),(0,r.kt)("p",null,"\u4ec5\u5c06\u5176\u7528\u4e8e\u8c03\u8bd5\u76ee\u7684\uff01"),(0,r.kt)("h3",{id:"https-\u8fc7\u6ee4"},"HTTPS \u8fc7\u6ee4"),(0,r.kt)("h4",{id:"encrypted-client-hello"},"Encrypted Client Hello"),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a\u52a0\u5bc6\u7684\u4e92\u8054\u7f51\u8fde\u63a5\u90fd\u6709\u4e00\u4e2a\u672a\u52a0\u5bc6\u7684\u90e8\u5206\uff0c \u5c31\u662f\u53d1\u9001\u7684\u7b2c\u4e00\u4e2a\u6570\u636e\u5305\uff0c\u5305\u542b\u7528\u6237\u8981\u8fde\u63a5\u7684\u670d\u52a1\u5668\u540d\u79f0\u3002 Encrypted ClientHello\uff08ECH\uff09\u7684\u6280\u672f\u80fd\u591f\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u6210\u529f\u52a0\u5bc6\u6700\u540e\u4e00\u4f4d\u672a\u52a0\u5bc6\u7684\u4fe1\u606f\u3002 \u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u542f\u7528\u300c",(0,r.kt)("em",{parentName:"p"},"Encrypted ClientHello"),"\u300d\u9009\u9879\u3002 \u672c\u529f\u80fd\u4f7f\u7528\u672c\u5730 DNS \u4ee3\u7406\u67e5\u627e\u57df\u540d\u7684 ECH \u914d\u7f6e\u3002 \u5982\u679c\u627e\u5230\uff0c\u5c06\u5bf9 ClientHello \u6570\u636e\u5305\u8fdb\u884c\u52a0\u5bc6\u3002"),(0,r.kt)("h4",{id:"ocsp-\u68c0\u67e5"},"OCSP \u68c0\u67e5"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u6267\u884c\u5f02\u6b65 OCSP \u68c0\u67e5\uff0c\u4ee5\u83b7\u53d6\u7f51\u7ad9 SSL \u8bc1\u4e66\u7684\u540a\u9500\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u89c4\u5b9a\u7684\u8d85\u65f6\u65f6\u95f4\u5185\u5b8c\u6210OCSP\u68c0\u67e5\uff0cAdGuard\u5c06\u7acb\u5373\u963b\u6b62\u8fde\u63a5\uff08\u5982\u679c\u8bc1\u4e66\u88ab\u540a\u9500\uff09\u6216\u5efa\u7acb\u8fde\u63a5\uff08\u5982\u679c\u8bc1\u4e66\u6709\u6548\uff09\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9a8c\u8bc1\u65f6\u95f4\u8fc7\u957f\uff0cAdGuard \u5c06\u5141\u8bb8\u8fde\u63a5\uff0c\u540c\u65f6\u7ee7\u7eed\u5728\u540e\u53f0\u68c0\u67e5\u8bc1\u4e66\u72b6\u6001\u3002 \u5982\u679c\u8bc1\u4e66\u88ab\u64a4\u9500\uff0c\u5f53\u524d\u548c\u5c06\u6765\u8be5\u57df\u540d\u7684\u8fde\u63a5\u5c06\u88ab\u963b\u6b62\u3002"),(0,r.kt)("h4",{id:"\u91cd\u5b9a\u5411-dns-over-https-\u8bf7\u6c42"},"\u91cd\u5b9a\u5411 DNS-over-HTTPS \u8bf7\u6c42"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0c\u9664\u4e86\u65e0\u52a0\u5bc6 DNS \u8bf7\u6c42\u5916\uff0cAdGuard \u8fd8\u4f1a\u5c06 DNS-over-HTTPS \u8bf7\u6c42\u91cd\u5b9a\u5411\u5230\u672c\u5730 DNS \u4ee3\u7406\u3002 \u6211\u4eec\u5efa\u8bae\u7981\u7528\u540e\u5907\u4e0a\u6e38\uff0c\u5e76\u4ec5\u4f7f\u7528\u52a0\u5bc6\u7684 DNS \u670d\u52a1\u5668\uff0c\u4ee5\u4fdd\u62a4\u9690\u79c1\u3002"),(0,r.kt)("h4",{id:"\u8fc7\u6ee4-http3"},"\u8fc7\u6ee4 HTTP/3"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u9664\u8fc7\u6ee4\u5176\u4ed6\u8bf7\u6c42\u7c7b\u578b\u5916\uff0c\u8fd8\u4f1a\u8fc7\u6ee4\u901a\u8fc7 HTTP/3 \u53d1\u9001\u7684\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"\u51fa\u7ad9\u4ee3\u7406"},"\u51fa\u7ad9\u4ee3\u7406"),(0,r.kt)("h4",{id:"\u663e\u793a\u8fc7\u6ee4-dns-\u8bf7\u6c42\u8bbe\u7f6e"},"\u663e\u793a\u300c\u8fc7\u6ee4 DNS \u8bf7\u6c42\u300d\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u529f\u80fd\uff0c\u300c",(0,r.kt)("em",{parentName:"p"},"\u8fc7\u6ee4 DNS \u8bf7\u6c42"),"\u300d\u5f00\u5173\u5c06\u663e\u793a\u5728\u300c",(0,r.kt)("em",{parentName:"p"},"\u6dfb\u52a0\u4ee3\u7406\u670d\u52a1\u5668"),"\u300d\u5bf9\u8bdd\u6846\u4e2d\u3002 \u4f7f\u7528\u5b83\u53ef\u4ee5\u8fc7\u6ee4\u901a\u8fc7\u6307\u5b9a\u4ee3\u7406\u7684 DNS \u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"\u9632\u62a4"},"\u9632\u62a4"),(0,r.kt)("h4",{id:"\u7aef\u53e3\u8303\u56f4"},"\u7aef\u53e3\u8303\u56f4"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u6307\u5b9a\u5e94\u8fc7\u6ee4\u7684\u7aef\u53e3\u8303\u56f4\u3002"),(0,r.kt)("h4",{id:"\u8bb0\u5f55\u5df2\u5220\u9664\u7684-html-\u4e8b\u4ef6"},"\u8bb0\u5f55\u5df2\u5220\u9664\u7684 HTML \u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5728\u300c",(0,r.kt)("em",{parentName:"p"},"\u6700\u8fd1\u6d3b\u52a8"),"\u300d\u4e2d\u8bb0\u5f55\u88ab\u963b\u6b62\u7684 HTML \u5143\u7d20\u3002"),(0,r.kt)("h4",{id:"scriplet-\u8c03\u8bd5"},"Scriplet \u8c03\u8bd5"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cScriptlets \u4e2d\u7684\u8c03\u8bd5\u5c06\u88ab\u6fc0\u6d3b\uff0c\u6d4f\u89c8\u5668\u65e5\u5fd7\u5c06\u8bb0\u5f55 Scriptlets \u89c4\u5219\u7684\u5e94\u7528\u60c5\u51b5\u3002"),(0,r.kt)("h4",{id:"\u6392\u9664\u7684\u5e94\u7528"},"\u6392\u9664\u7684\u5e94\u7528"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u5217\u51fa\u8981\u4ece AdGuard \u4fdd\u62a4\u4e2d\u6392\u9664\u7684\u5305\u540d\u79f0\u548c UID\u3002"),(0,r.kt)("h4",{id:"quic-\u65c1\u8def\u5305"},"QUIC \u65c1\u8def\u5305"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u6307\u5b9a AdGuard \u5e94\u7ed5\u8fc7 QUIC \u6d41\u91cf\u7684\u5305\u540d\u79f0\u3002"),(0,r.kt)("h4",{id:"\u7f51\u7edc\u66f4\u6539\u65f6\u91cd\u65b0\u914d\u7f6e\u81ea\u52a8\u4ee3\u7406"},"\u7f51\u7edc\u66f4\u6539\u65f6\u91cd\u65b0\u914d\u7f6e\u81ea\u52a8\u4ee3\u7406"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0c\u5f53\u8bbe\u5907\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u7f51\u7edc\u65f6\uff0cAdGuard \u4fdd\u62a4\u5c06\u91cd\u65b0\u542f\u52a8\uff0c\u91cd\u65b0\u914d\u7f6e\u81ea\u52a8\u4ee3\u7406\u8bbe\u7f6e\u3002 \u4ec5\u5f53\u300c",(0,r.kt)("em",{parentName:"p"},"\u8def\u7531\u6a21\u5f0f"),"\u300d\u8bbe\u7f6e\u4e3a\u300c",(0,r.kt)("em",{parentName:"p"},"\u81ea\u52a8\u4ee3\u7406"),"\u300d\u65f6\uff0c\u6b64\u8bbe\u7f6e\u624d\u9002\u7528\u3002"),(0,r.kt)("h4",{id:"ipv6-\u8fc7\u6ee4"},"IPv6 \u8fc7\u6ee4"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5728 IPv6 \u7f51\u7edc\u63a5\u53e3\u53ef\u7528\u65f6\u8fc7\u6ee4 IPv6 \u7f51\u7edc\u3002"),(0,r.kt)("h4",{id:"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684-ipv4-\u8303\u56f4"},"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684 IPv4 \u8303\u56f4"),(0,r.kt)("p",null,"\u672c\u8282\u4e2d\u5217\u51fa\u7684 IPv4 \u8303\u56f4\u7684\u8fc7\u6ee4\u5df2\u7981\u7528\u3002"),(0,r.kt)("h4",{id:"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684-ipv6-\u8303\u56f4"},"\u65e0\u9700\u8fdb\u884c\u8fc7\u6ee4\u7684 IPv6 \u8303\u56f4"),(0,r.kt)("p",null,"\u672c\u8282\u6240\u5217 IPv6 \u8303\u56f4\u7684\u8fc7\u6ee4\u529f\u80fd\u5df2\u7981\u7528\u3002"),(0,r.kt)("h4",{id:"\u51fa\u7ad9\u5957\u63a5\u5b57\u7684-tcp-\u4fdd\u6d3b"},"\u51fa\u7ad9\u5957\u63a5\u5b57\u7684 TCP \u4fdd\u6d3b"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5728\u6307\u5b9a\u65f6\u95f4\u6bb5\u540e\u53d1\u9001\u4fdd\u6d3b\u63a2\u6d4b\uff0c\u4ee5\u786e\u4fdd TCP \u8fde\u63a5\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002 \u5728\u8fd9\u91cc\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u542f\u52a8\u4fdd\u6d3b\u63a2\u6d4b\u4e4b\u524d\u7684\u7a7a\u95f2\u65f6\u95f4\u4ee5\u53ca\u5bf9\u65e0\u54cd\u5e94\u5bf9\u7b49\u65b9\u8fdb\u884c\u4fdd\u6d3b\u63a2\u6d4b\u4e4b\u95f4\u7684\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u5728\u5c1d\u8bd5\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u54cd\u5e94\u5931\u8d25\u8fbe\u5230\u89c4\u5b9a\u7684\u6b21\u6570\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5173\u95ed TCP \u8fde\u63a5\u3002"),(0,r.kt)("h3",{id:"\u672c\u5730-vpn-\u8bbe\u7f6e"},"\u672c\u5730 VPN \u8bbe\u7f6e"),(0,r.kt)("h4",{id:"\u64a4\u9500-vpn-\u7684\u6062\u590d\u5ef6\u8fdf"},"\u64a4\u9500 VPN \u7684\u6062\u590d\u5ef6\u8fdf"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5728 AdGuard \u88ab\u7b2c\u4e09\u65b9 VPN \u5e94\u7528\u7a0b\u5e8f\u64a4\u9500\u6216\u5220\u9664 VPN \u914d\u7f6e\u6587\u4ef6\u540e\u5c1d\u8bd5\u6062\u590d VPN \u4fdd\u62a4\u4e4b\u524d\u7684\u5ef6\u8fdf\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002 \u9ed8\u8ba4\u503c\u4e3a 5000 \u6beb\u79d2\u3002"),(0,r.kt)("h4",{id:"\u4e3a\u64a4\u9500\u7684-vpn-\u6062\u590d\u91cd\u65b0\u5b89\u6392\u5ef6\u8fdf"},"\u4e3a\u64a4\u9500\u7684 VPN \u6062\u590d\u91cd\u65b0\u5b89\u6392\u5ef6\u8fdf"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u8bbe\u7f6e AdGuard \u5728\u88ab\u7b2c\u4e09\u65b9 VPN \u5e94\u7528\u7a0b\u5e8f\u64a4\u9500\u6216\u5220\u9664 VPN \u914d\u7f6e\u6587\u4ef6\u540e\u91cd\u65b0\u5b89\u6392 VPN \u4fdd\u62a4\u6062\u590d\u4e4b\u524d\u7684\u5ef6\u8fdf\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002 \u9ed8\u8ba4\u503c\u4e3a 5000 \u6beb\u79d2\u3002"),(0,r.kt)("h4",{id:"\u6700\u5927\u4f20\u8f93\u5355\u5143mtu"},"\u6700\u5927\u4f20\u8f93\u5355\u5143\uff08MTU\uff09"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u8bbe\u7f6e VPN \u63a5\u53e3\u7684\u6700\u5927\u4f20\u8f93\u5355\u5143 \uff08MTU\uff09\u3002 \u63a8\u8350\u8303\u56f4\u662f 1500\u20131900."),(0,r.kt)("h4",{id:"\u81ea\u52a8\u6062\u590d-vpn-\u8fde\u63a5"},"\u81ea\u52a8\u6062\u590d VPN \u8fde\u63a5"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u7684\u672c\u5730 VPN \u5c06\u5728\u56e0\u7f51\u7edc\u7f3a\u5931\u3001\u7cfb\u7559\u6216\u4f4e\u529f\u8017\u6a21\u5f0f\u800c\u5173\u95ed\u540e\u81ea\u52a8\u91cd\u65b0\u542f\u7528\u3002"),(0,r.kt)("h4",{id:"\u6570\u636e\u5305\u6355\u83b7pcap"},"\u6570\u636e\u5305\u6355\u83b7\uff08PCAP\uff09"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u5728\u5e94\u7528\u7a0b\u5e8f\u7f13\u5b58\u76ee\u5f55\u4e2d\u521b\u5efa\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp.pcap")," \uff08\u4f8b\u5982 1682599851461.pcap\uff09\u3002 \u8be5\u6587\u4ef6\u5217\u51fa\u4e86\u901a\u8fc7 VPN \u4f20\u8f93\u7684\u6240\u6709\u7f51\u7edc\u6570\u636e\u5305\uff0c\u53ef\u4ee5\u4f7f\u7528 Wireshark \u7a0b\u5e8f\u8fdb\u884c\u5206\u6790\u3002"),(0,r.kt)("h4",{id:"\u5c06-wi-fi-\u7f51\u5173\u63a5\u5165-vpn-\u8def\u7531\u4e2d"},"\u5c06 Wi-Fi \u7f51\u5173\u63a5\u5165 VPN \u8def\u7531\u4e2d"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0c\u5728\u4f7f\u7528 Wi-Fi \u65f6\uff0c\u7f51\u5173 IP \u5730\u5740\u5c06\u6dfb\u52a0\u5230 VPN \u8def\u7531\u4e2d\u3002"),(0,r.kt)("h4",{id:"ipv4-\u5730\u5740"},"IPv4 \u5730\u5740"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u8f93\u5165\u5c06\u7528\u4e8e\u521b\u5efa TUN \u63a5\u53e3\u7684 IP \u5730\u5740\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5730\u5740\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"172.18.11.218"),"\u3002"),(0,r.kt)("h4",{id:"\u5f3a\u5236\u8def\u7531-lan-ipv4"},"\u5f3a\u5236\u8def\u7531 LAN IPv4"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u8fc7\u6ee4\u6240\u6709 LAN \u8fde\u63a5\uff0c\u5305\u62ec\u672c\u5730 IPv4 \u7f51\u7edc\u6d41\u91cf\uff0c\u5373\u4f7f\u542f\u7528\u4e86 ",(0,r.kt)("em",{parentName:"p"},"\u8def\u7531\u6240\u6709 LAN IPv4 \u8fde\u63a5")," \u9009\u9879\u3002"),(0,r.kt)("h4",{id:"\u8def\u7531\u6240\u6709-lan-ipv4-\u8fde\u63a5"},"\u8def\u7531\u6240\u6709 LAN IPv4 \u8fde\u63a5"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0cAdGuard \u5c06\u4ece\u7b80\u5355\u7f51\u7edc\u8fc7\u6ee4\u4e2d\u6392\u9664\u5c40\u57df\u7f51\u8fde\u63a5\u3002 \u8fd9\u5bf9\u590d\u6742\u7684\u7f51\u7edc\u53ef\u80fd\u4e0d\u8d77\u4f5c\u7528\u3002 \u6b64\u8bbe\u7f6e\u4ec5\u9002\u7528\u4e8e\u300c",(0,r.kt)("em",{parentName:"p"},"\u5f3a\u5236\u8def\u7531 LAN IPv4"),"\u300d\u5df2\u7981\u7528\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h4",{id:"ipv6-\u5730\u5740"},"IPv6 \u5730\u5740"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u6b64\u5904\u8f93\u5165\u5c06\u7528\u4e8e\u521b\u5efa TUN \u63a5\u53e3\u7684 IP \u5730\u5740\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5730\u5740\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"2001:db8:ad:0:ff::"),"\u3002"),(0,r.kt)("h3",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,r.kt)("h4",{id:"\u68c0\u6d4b-samsung-pay"},"\u68c0\u6d4b Samsung Pay"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528\u6b64\u8bbe\u7f6e\uff0c\u5728\u4f7f\u7528 Samsung Pay \u65f6\u5c06\u6682\u505c AdGuard \u4fdd\u62a4\u3002 \u97e9\u56fd\u7528\u6237\u9700\u8981\u6b64\u529f\u80fd\uff0c\u56e0\u4e3a\u542f\u7528 AdGuard \u540e\uff0c\u4ed6\u4eec\u5728\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"},"Samsung Pay")," \u65f6\u9047\u5230\u4e86\u95ee\u9898\u3002"))}v.isMDXComponent=!0}}]);