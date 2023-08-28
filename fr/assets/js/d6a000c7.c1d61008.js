"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1003],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={title:"Advanced Settings guide",sidebar_position:9},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/advanced-settings",id:"adguard-for-mac/solving-problems/advanced-settings",title:"Advanced Settings guide",description:"Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment cela fonctionne, t\xe9l\xe9chargez l'application AdGuard",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/advanced-settings.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/advanced-settings",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/advanced-settings",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/advanced-settings.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Advanced Settings guide",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Protect Mail Activity and AdGuard",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/protect-mail-activity"},next:{title:"Setting up filtering in Tor Browser",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/tor-filtering"}},s={},p=[{value:"How to reach the Advanced settings",id:"how-to-reach-the-advanced-settings",level:2},{value:"Advanced settings",id:"advanced-settings",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Cet article parle de AdGuard pour Mac, un bloqueur de contenus multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment cela fonctionne, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"t\xe9l\xe9chargez l'application AdGuard"))),(0,a.kt)("h2",{id:"how-to-reach-the-advanced-settings"},"How to reach the Advanced settings"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Changing ",(0,a.kt)("em",{parentName:"p"},"Low-level settings")," can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support team has asked you to do it.")),(0,a.kt)("p",null,"To go to ",(0,a.kt)("em",{parentName:"p"},"Advanced settings"),", follow this route: the AdGuard icon at the tray menu \u2192 the gear icon \u2192 Advanced \u2192 Advanced settings."),(0,a.kt)("h2",{id:"advanced-settings"},"Advanced settings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.extension.exclude.domains")),(0,a.kt)("p",null,"The listed domains will be excluded from filtering in the ",(0,a.kt)("em",{parentName:"p"},"Network Extension")," mode. Use a comma or line break to separate values."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.extension.exclude.ports")),(0,a.kt)("p",null,"The listed ports will be excluded from filtering in the ",(0,a.kt)("em",{parentName:"p"},"Network Extension")," mode. Use a comma or line break to separate values."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.extension.route.exclude")),(0,a.kt)("p",null,"The listed routes will be excluded from filtering in the ",(0,a.kt)("em",{parentName:"p"},"Network Extension")," mode. Set routes using an IP address or destination CIDR. Separate values with commas or line breaks."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.extension.http.downgrade.bundleids")),(0,a.kt)("p",null,"Here you can specify a list of applications for which the HTTP/2 protocol will be downgraded to HTTP/1.1 in the ",(0,a.kt)("em",{parentName:"p"},"Network Extension")," filtering mode. The bundle ID should be separated by a comma or a line break."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")),(0,a.kt)("p",null,'Here you can prohibit AdGuard from using the "default route" which is enabled by default in the ',(0,a.kt)("em",{parentName:"p"},"Network Extension"),' mode on macOS Monterey. AdGuard uses "default route" to disable iCloud Private Relay and Protect Mail Activity, as it cannot operate in unison with them.'),(0,a.kt)("p",null,"You will find more information about the problem ",(0,a.kt)("a",{parentName:"p",href:"../icloud-private-relay"},"in this article"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.extension.dns.redirect.exclude.bundleids")),(0,a.kt)("p",null,"Here you can specify a list of applications that make DNS queries directly not via system DNS resolver (for example, some VPN clients or DNS filtering applications). DNS filtering will be disabled for them in the ",(0,a.kt)("em",{parentName:"p"},"Network Extension mode"),". The bundle IDs should be separated by a comma or line break."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.dns.filter.secure.request")),(0,a.kt)("p",null,"Redirects secure DNS requests to a local DNS proxy, if there is one available."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.https.ocsp.check")),(0,a.kt)("p",null,"By setting ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you enable HTTPS certificate revocation checking."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.tcp.keepalive.enabled")),(0,a.kt)("p",null,"Periodically sends TCP packets over an idle connection to ensure that it remains active and to renew NAT timeouts."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.tcp.keepalive.interval.seconds")),(0,a.kt)("p",null,"Idle time, in seconds, before sending a keepalive probe. If 0 is specified, the system will use the default value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.tcp.keepalive.timeout.seconds")),(0,a.kt)("p",null,"Time, in seconds, before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.https.ech.enabled")),(0,a.kt)("p",null,"Uses a local DNS proxy to look for configs in the ECH Config Lists. If found, encrypts ClientHellos."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.https.enforce.certificate.transparency")),(0,a.kt)("p",null,"Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.filtering.localnetwork")),(0,a.kt)("p",null,"By setting ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you enable local network filtering."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"network.filtering.localhost")),(0,a.kt)("p",null,"By setting ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you enable LoopBack filtering."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.bootstrap.ips")),(0,a.kt)("p",null,"Here you can enter the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.ips")),(0,a.kt)("p",null,"Here you can specify a list of IP addresses of DNS servers that will be used as backups in case the encrypted DNS server fails to respond."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.on.upstreams.failure.enabled")),(0,a.kt)("p",null,"Normal queries will be redirected to a fallback upstream if all normal upstreams fail."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.detect.search.domains")),(0,a.kt)("p",null,"This option enables automatic detection of the local network domain, which will be automatically redirected to the fallback DNS server instead of the main DNS server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.fallback.domains")),(0,a.kt)("p",null,"Here you can list domains for which the fallback DNS server will be used instead of the main DNS server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")),(0,a.kt)("p",null,"Here you can specify the type of DNS server response to blocked requests, corresponding to ad-blocker-style rules."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 \u2014 respond with REFUSED"),(0,a.kt)("li",{parentName:"ul"},"1 \u2014 respond with NXDOMAIN"),(0,a.kt)("li",{parentName:"ul"},"2 \u2014 respond with 0.0.0.0 or the addresses specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv4.address")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv6.address"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode")),(0,a.kt)("p",null,"Here you can specify the type of DNS server response to blocked requests, corresponding to hosts rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0 \u2014 respond with REFUSED"),(0,a.kt)("li",{parentName:"ul"},"1 \u2014 respond with NXDOMAIN"),(0,a.kt)("li",{parentName:"ul"},"2 \u2014 respond with 0.0.0.0 or the addresses specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv4.address")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"dns.proxy.blocking.response.IPv6.address"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv4.address")),(0,a.kt)("p",null,'Here you can specify the IPv4 address that will be returned in response to blocked "A" requests when ',(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode"),' is set to the response type "ADDRESS".'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocking.response.IPv6.address")),(0,a.kt)("p",null,'Here you can specify the IPv6 address that will be returned in response to blocked "AAAA" requests when ',(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.adblockrules.blocking.mode")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.hostrules.blocking.mode"),' is set to the response type "ADDRESS".'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.block.AAAA.requests")),(0,a.kt)("p",null,"Here you can enable IPv6 DNS query blocking."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.blocked.response.TTL.in.seconds")),(0,a.kt)("p",null,"Here you can specify the TTL (time to live) value that will be returned in response to a blocked request."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.parallel.upstream.queries.enabled")),(0,a.kt)("p",null,"All upstreams are queried simultaneously. The first response is returned."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.servfail.on.upstreams.failure.enabled")),(0,a.kt)("p",null,"Responds to upstream failure with a SERVFAIL packet."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.http3.enabled")),(0,a.kt)("p",null,"Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dns.proxy.block.encrypted.client.hello.response")),(0,a.kt)("p",null,"Removes the Encrypted Client Hello parameters from responses."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stealth.antidpi.http.split.fragment.size")),(0,a.kt)("p",null,"Adjusts the size of the HTTP request fragmentation. Accepted values: 1\u20131500. If an invalid size is specified, the system will use the default value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stealth.antidpi.clienthello.split.fragment.size")),(0,a.kt)("p",null,"This option specifies the size of TCP packet fragmentation, which helps avoid deep packet inspection. Accepted values: 1\u20131500. If an invalid size is specified, the system will use the default value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stealth.antidpi.http.space.juggling")),(0,a.kt)("p",null,'Adds extra space between the HTTP method and the URL and removes space after the "Host:" field.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"subscription.link.interception.userscript")),(0,a.kt)("p",null,"Activate this feature if you want AdGuard to automatically intercept the URLs of userscripts and open the installation window."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"subscription.link.interception.filter")),(0,a.kt)("p",null,"Activate this feature if you want AdGuard to automatically intercept subscription URLs (for example, abp:subscribe, etc.) and open the custom filter setup window."))}u.isMDXComponent=!0}}]);