"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1365],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return r?o.createElement(h,l(l({ref:t},p),{},{components:r})):o.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(4137));const a={title:"Low-level Settings guide",sidebar_position:5},l=void 0,i={unversionedId:"adguard-for-ios/solving-problems/low-level-settings",id:"adguard-for-ios/solving-problems/low-level-settings",title:"Low-level Settings guide",description:"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/adguard-for-ios/solving-problems/low-level-settings.md",sourceDirName:"adguard-for-ios/solving-problems",slug:"/adguard-for-ios/solving-problems/low-level-settings",permalink:"/KnowledgeBase/zh-TW/adguard-for-ios/solving-problems/low-level-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/solving-problems/low-level-settings.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Low-level Settings guide",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to block YouTube ads",permalink:"/KnowledgeBase/zh-TW/adguard-for-ios/solving-problems/block-youtube-ads"},next:{title:"Features overview",permalink:"/KnowledgeBase/zh-TW/adguard-browser-extension/overview"}},s={},d=[{value:"How to reach the Low-level settings",id:"how-to-reach-the-low-level-settings",level:2},{value:"Low-level settings",id:"low-level-settings",level:2},{value:"Tunnel mode",id:"tunnel-mode",level:3},{value:"Blocking mode",id:"blocking-mode",level:3},{value:"Block IPv6",id:"block-ipv6",level:3},{value:"Blocked response TTL",id:"blocked-response-ttl",level:3},{value:"Bootstrap servers",id:"bootstrap-servers",level:3},{value:"Fallback servers",id:"fallback-servers",level:3},{value:"Background app refresh time",id:"background-app-refresh-time",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("h2",{id:"how-to-reach-the-low-level-settings"},"How to reach the Low-level settings"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Changing ",(0,n.kt)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.")),(0,n.kt)("p",null,"To go to ",(0,n.kt)("em",{parentName:"p"},"Low-level settings"),", tap the gear icon at the bottom right of the screen to open ",(0,n.kt)("em",{parentName:"p"},"Settings"),". Select the ",(0,n.kt)("em",{parentName:"p"},"General")," section and then toggle on the ",(0,n.kt)("em",{parentName:"p"},"Advanced mode")," switch, after that the ",(0,n.kt)("em",{parentName:"p"},"Advanced settings")," section will appear below. Tap ",(0,n.kt)("em",{parentName:"p"},"Advanced settings")," to reach the ",(0,n.kt)("em",{parentName:"p"},"Low-level settings")," section."),(0,n.kt)("h2",{id:"low-level-settings"},"Low-level settings"),(0,n.kt)("h3",{id:"tunnel-mode"},"Tunnel mode"),(0,n.kt)("p",null,"There are two main tunnel modes: ",(0,n.kt)("em",{parentName:"p"},"Split")," and ",(0,n.kt)("em",{parentName:"p"},"Full"),". ",(0,n.kt)("em",{parentName:"p"},"Split-Tunnel"),' mode provides compatibility of AdGuard and so-called "Personal VPN" apps. In ',(0,n.kt)("em",{parentName:"p"},"Full-Tunnel")," mode no other VPN can work simultaneously with AdGuard."),(0,n.kt)("p",null,"There is a specific feature of ",(0,n.kt)("em",{parentName:"p"},"Split-Tunnel"),' mode: if DNS proxy does not perform well, for example, if the response from the AdGuard DNS server was not returned in time, iOS will "amerce" it and reroute traffic through DNS server, specified in iOS settings. No ads are blocked at this time and DNS traffic is not encrypted.'),(0,n.kt)("p",null,"In ",(0,n.kt)("em",{parentName:"p"},"Full-Tunnel")," mode only the DNS server specified in AdGuard settings is used. If it does not respond, the Internet will simply not work. Enabled ",(0,n.kt)("em",{parentName:"p"},"Full-Tunnel")," mode may cause the incorrect performance of some programs (for instance, Facetime), and lead to problems with app updates."),(0,n.kt)("p",null,"By default, AdGuard uses ",(0,n.kt)("em",{parentName:"p"},"Split-Tunnel")," mode as the most stable option."),(0,n.kt)("p",null,"There is also an additional mode called ",(0,n.kt)("em",{parentName:"p"},"Full-Tunnel (without VPN icon)"),". This is exactly the same as ",(0,n.kt)("em",{parentName:"p"},"Full-Tunnel")," mode, but it is set up so that the VPN icon is not displayed in the system line."),(0,n.kt)("h3",{id:"blocking-mode"},"Blocking mode"),(0,n.kt)("p",null,"In this module you can select the way AdGuard will respond to DNS queries that should be blocked: REFUSED \u2014 respond with REFUSED code NXDOMAIN \u2014 respond with NXDOMAIN code Unspecified IP \u2014 respond with zero IP address Custom IP \u2014 respond with a manually set IP address"),(0,n.kt)("h3",{id:"block-ipv6"},"Block IPv6"),(0,n.kt)("p",null,"By moving the toggle to the right, you activate IPv6 query blocking (AAAA requests)."),(0,n.kt)("h3",{id:"blocked-response-ttl"},"Blocked response TTL"),(0,n.kt)("p",null,"Here you can specify the TTL (time to live) value that will be returned in response to a blocked request."),(0,n.kt)("h3",{id:"bootstrap-servers"},"Bootstrap servers"),(0,n.kt)("p",null,"For DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC a bootstrap server is required for getting the IP address of the main DNS server. If not specified, the DNS server from iOS settings is used as the bootstrap server."),(0,n.kt)("h3",{id:"fallback-servers"},"Fallback servers"),(0,n.kt)("p",null,"Here you can specify an alternate server to which a request will be rerouted if the main server fails to respond. If not specified, the system DNS server will be used as the fallback. It is also possible to specify ",(0,n.kt)("inlineCode",{parentName:"p"},"none"),", in this case, there will be no fallback server set and only the main DNS server will be used."),(0,n.kt)("h3",{id:"background-app-refresh-time"},"Background app refresh time"),(0,n.kt)("p",null,"Here you can select the frequency at which the application will check for filter updates while in the background. Note that update checks will not be performed more often than the specified period, but the exact intervals may not be respected."))}u.isMDXComponent=!0}}]);