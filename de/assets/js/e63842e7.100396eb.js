"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1843],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(4137));const a={title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",sidebar_position:4},o=void 0,l={unversionedId:"adguard-for-mac/solving-problems/big-sur-issues",id:"adguard-for-mac/solving-problems/big-sur-issues",title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",description:"Dieser Artikel behandelt AdGuard f\xfcr Mac, einen multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. To see how it works, download the AdGuard app",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/big-sur-issues.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/big-sur-issues",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/big-sur-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/big-sur-issues.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Kompatibilit\xe4tsprobleme mit verschiedenen macOS-Versionen",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AdGuard auf macOS High Sierra und h\xf6her installieren",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/high-sierra-compatibility"},next:{title:"L\xf6sung von Installationsproblemen",permalink:"/KnowledgeBase/de/adguard-for-mac/solving-problems/installation-issues"}},s={},d=[{value:"Aktuell bestehende Probleme",id:"aktuell-bestehende-probleme",level:2},{value:"Monterey 12: derzeit bestehende Probleme",id:"monterey-12-derzeit-bestehende-probleme",level:3},{value:"Kompatibilit\xe4t mit iCloud Private Relay",id:"kompatibilit\xe4t-mit-icloud-private-relay",level:4},{value:"Kompatibilit\xe4t mit Protect Mail Activity",id:"kompatibilit\xe4t-mit-protect-mail-activity",level:4},{value:"Monterey 12, Big Sur 11.6 und h\xf6her: derzeit bestehende Probleme",id:"monterey-12-big-sur-116-und-h\xf6her-derzeit-bestehende-probleme",level:3},{value:"Kompatibilit\xe4t mit Cisco AnyConnect",id:"kompatibilit\xe4t-mit-cisco-anyconnect",level:4},{value:"Kompatibilit\xe4t mit Flutter",id:"kompatibilit\xe4t-mit-flutter",level:4},{value:"VPN-Apps mit Legacy-API",id:"vpn-apps-mit-legacy-api",level:4},{value:"Bereits behobene Probleme",id:"bereits-behobene-probleme",level:2},{value:"Kompatibilit\xe4t mit Little Snitch 5",id:"kompatibilit\xe4t-mit-little-snitch-5",level:3},{value:"Kompatibilit\xe4t mit lokalen Proxys",id:"kompatibilit\xe4t-mit-lokalen-proxys",level:3},{value:"Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys",id:"beispiel-1-konfigurieren-eines-upstream-shadowsocks-proxys",level:4},{value:"Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys",id:"beispiel-2-konfigurieren-eines-upstream-surge-proxys",level:4},{value:"Alternativen zur Verwendung einer Netzwerkerweiterung",id:"alternativen-zur-verwendung-einer-netzwerkerweiterung",level:2},{value:"Verwenden des Filtermodus \u201eAutomatischer Proxy\u201c",id:"automatic-proxy",level:3},{value:"Aktivieren der Kernel-Erweiterung in Big Sur und Monterey",id:"kernel-extension",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Mac, einen multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. To see how it works, ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,i.kt)("h2",{id:"aktuell-bestehende-probleme"},"Aktuell bestehende Probleme"),(0,i.kt)("p",null,"Jedes Jahr ver\xf6ffentlicht Apple eine neue Version von macOS, die innovative L\xf6sungen einf\xfchrt und neue n\xfctzliche Funktionen hinzuf\xfcgt. Einige von ihnen, wie Netzwerk-Erweiterungs API (Big Sur) oder iCloud Private Relay (Monterey), verursachen jedoch einige Probleme f\xfcr viele Anwendungen, wobei AdGuard keine Ausnahme bildet. In diesem Artikel betrachten wir die bekannten Probleme, die f\xfcr jede macOS-Version spezifisch sind, und auch die m\xf6glichen L\xf6sungen."),(0,i.kt)("h3",{id:"monterey-12-derzeit-bestehende-probleme"},"Monterey 12: derzeit bestehende Probleme"),(0,i.kt)("p",null,"Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben."),(0,i.kt)("h4",{id:"kompatibilit\xe4t-mit-icloud-private-relay"},"Kompatibilit\xe4t mit iCloud Private Relay"),(0,i.kt)("p",null,"Derzeit k\xf6nnen AdGuard und iCloud Private Relay nicht gleichzeitig funktionieren. AdGuard kann keine Werbung blockieren, da iCloud Private Relay den Datenverkehr verschl\xfcsselt, bevor AdGuard Netzwerkverbindungen filtern kann. Wenn iCloud Private Relay aktiv ist, wird jegliche Filterung (einschlie\xdflich lokaler Filterung) unm\xf6glich. Daher kann AdGuard in Safari keinen Datenverkehr filtern oder eine DNS-Filterung durchf\xfchren. Aus diesem Grund verwendet AdGuard standardm\xe4\xdfig die \u201eStandardroute\u201c, die iCloud Private Relay deaktiviert."),(0,i.kt)("p",null,"F\xfcr ein tieferes Verst\xe4ndnis dieses Problems lesen Sie bitte ",(0,i.kt)("a",{parentName:"p",href:"../icloud-private-relay"},"diesen Artikel"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Empfohlene L\xf6sung")),(0,i.kt)("p",null,"Wir empfehlen die Verwendung von AdGuard zusammen mit einem traditionelleren VPN-Dienst wie ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/"},"AdGuard VPN"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alternative L\xf6sung")),(0,i.kt)("p",null,"Sie k\xf6nnen verhindern, dass AdGuard die  \u201eStandardroute\u201c verwendet, indem Sie sie deaktivieren. Dies kann \xfcber Erweiterte Einstellungen \u2192 ",(0,i.kt)("inlineCode",{parentName:"p"},"network.extension.monterey.force.split.tunnel")," erfolgen. Beachten Sie, dass die Aktivierung dieser Einstellung zu den oben beschriebenen Problemen f\xfchrt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg",alt:"Erweiterte Einstellungen *border"})),(0,i.kt)("h4",{id:"kompatibilit\xe4t-mit-protect-mail-activity"},"Kompatibilit\xe4t mit Protect Mail Activity"),(0,i.kt)("p",null,"Die Mail-App von Apple verwendet jetzt einen Proxy, um die IP-Adressen der Nutzer:innen zu verbergen, wenn Bilder aus E-Mails heruntergeladen werden. Es funktioniert jedoch nicht, wenn eine VPN-Verbindung aktiv ist. Da AdGuard als VPN behandelt wird, werden Bilder nicht automatisch vorgeladen."),(0,i.kt)("p",null,"F\xfcr ein tieferes Verst\xe4ndnis dieses Problems lesen Sie bitte ",(0,i.kt)("a",{parentName:"p",href:"../protect-mail-activity"},"diesen Artikel"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Empfohlene L\xf6sung")),(0,i.kt)("p",null,"An dieser Stelle empfehlen wir die Verwendung eines traditionelleren VPN-Dienstes wie AdGuard VPN anstelle der neuen Datenschutzfunktionen von Apple."),(0,i.kt)("h3",{id:"monterey-12-big-sur-116-und-h\xf6her-derzeit-bestehende-probleme"},"Monterey 12, Big Sur 11.6 und h\xf6her: derzeit bestehende Probleme"),(0,i.kt)("p",null,"Diese Probleme wurden von Apple noch nicht oder nur teilweise behoben."),(0,i.kt)("h4",{id:"kompatibilit\xe4t-mit-cisco-anyconnect"},"Kompatibilit\xe4t mit Cisco AnyConnect"),(0,i.kt)("p",null,"AdGuard will not work together with Cisco AnyConnect while in the ",(0,i.kt)("em",{parentName:"p"},"Network Extension")," mode. Sie m\xfcssen AdGuard in den Modus ",(0,i.kt)("em",{parentName:"p"},"Automatischer Proxy")," schalten. Folgen Sie dazu ",(0,i.kt)("a",{parentName:"p",href:"#automatic-proxy"},"dieser Anleitung"),"."),(0,i.kt)("h4",{id:"kompatibilit\xe4t-mit-flutter"},"Kompatibilit\xe4t mit Flutter"),(0,i.kt)("p",null,"This problem is solved in Flutter 2.2, released in June 2021. But to fix it for applications developed in Flutter, you need to wait for updates."),(0,i.kt)("p",null,'If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Monterey or Big Sur, you will run into problems: projects won\'t open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use AdGuard in ",(0,i.kt)("a",{parentName:"p",href:"#automatic-proxy"},"Automatic Proxy")," mode.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Disable SIP and switch AdGuard to Kernel Extension mode as explained ",(0,i.kt)("a",{parentName:"p",href:"#kernel-extension"},"here"),"."))),(0,i.kt)("h4",{id:"vpn-apps-mit-legacy-api"},"VPN-Apps mit Legacy-API"),(0,i.kt)("p",null,"Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open AdGuard's menu."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("em",{parentName:"li"},"Preferences..."),"."),(0,i.kt)("li",{parentName:"ol"},"Switch to the ",(0,i.kt)("em",{parentName:"li"},"Network")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"Applications...")," button."),(0,i.kt)("li",{parentName:"ol"},"Find the app you want to exclude and uncheck the checkbox next to it.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg",alt:"Filtered applications"})),(0,i.kt)("h2",{id:"bereits-behobene-probleme"},"Bereits behobene Probleme"),(0,i.kt)("p",null,"These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur."),(0,i.kt)("h3",{id:"kompatibilit\xe4t-mit-little-snitch-5"},"Kompatibilit\xe4t mit Little Snitch 5"),(0,i.kt)("p",null,"At this moment, Network Extension mode in AdGuard isn't compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://obdev.at/products/littlesnitch/index.html"},"Little Snitch 5"),". When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates."),(0,i.kt)("p",null,"It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to ",(0,i.kt)("a",{parentName:"p",href:"#automatic-proxy"},(0,i.kt)("strong",{parentName:"a"},"Automatic Proxy"))," filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug."),(0,i.kt)("h3",{id:"kompatibilit\xe4t-mit-lokalen-proxys"},"Kompatibilit\xe4t mit lokalen Proxys"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Now AdGuard can filter local proxies (mostly) without any problems. If you encounter any issues in OS versions 11.1+, or if you're using Big Sur 11.0, remove the local proxy from System settings and configure an upstream proxy in AdGuard by following the instruction below.")),(0,i.kt)("p",null,"To configure an upstream proxy in AdGuard for Mac in Big Sur:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open AdGuard's settings\xa0 ",(0,i.kt)("em",{parentName:"li"},"Preferences \u2192 Network \u2192 Outbound proxy"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose HTTP,\xa0HTTPS,\xa0SOCKS4\xa0or\xa0SOCKS5, depending on your proxy type."),(0,i.kt)("li",{parentName:"ol"},"Fill in the fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host"),"\xa0is the IP address of your proxy server,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port"),"\xa0is the desired port number to be used by the proxy server,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"password"),"\xa0are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable.")))),(0,i.kt)("p",null,"If you run into any problems, please contact our tech support at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,i.kt)("h4",{id:"beispiel-1-konfigurieren-eines-upstream-shadowsocks-proxys"},"Beispiel 1: Konfigurieren eines Upstream-Shadowsocks-Proxys"),(0,i.kt)("p",null,"Here's an example of how to configure an upstream proxy for ",(0,i.kt)("a",{parentName:"p",href:"https://shadowsocks.org"},"Shadowsocks"),"."),(0,i.kt)("p",null,"First of all, you need a working server side for your proxy. Most likely, to set it up, you would use a JSON file like this (",(0,i.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," values were chosen randomly here):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "server":"111.222.333.444",\n   "server_port":8388,\n   "local_port":1080,\n   "password":"barfoo!",\n   "timeout":600,\n   "method":"chacha20-ietf-poly1305"\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can find more information about how to get started on ",(0,i.kt)("a",{parentName:"p",href:"https://shadowsocks.org/guide/what-is-shadowsocks.html"},"Shadowsocks website"),".")),(0,i.kt)("p",null,"Then you'd have to install Shadowsocks client on your Mac. Make sure that you select 'Manual Mode' or 'Auto Mode' in its settings! The configuration won't work if you select 'Global Mode' (or 'Auto Mode' in Big Sur versions prior to 11.1)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg",alt:"Select Manual Mode or Auto Mode in settings *mobile"})),(0,i.kt)("p",null,"Now go to ",(0,i.kt)("em",{parentName:"p"},"AdGuard menu \u2192 Advanced \u2192 Advanced Settings...")," and set the ",(0,i.kt)("em",{parentName:"p"},"Value")," area of the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream.proxy")," setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"socks5://localhost:1080"),'. Notice that you need to use "local_port" value from the JSON file here.'),(0,i.kt)("p",null,"Because Shadowsocks uses SOCKS5, you also need to set the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream.proxy.socks5udp")," setting in AdGuard Advanced Settings to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to make AdGuard route UDP traffic to the proxy server."),(0,i.kt)("h4",{id:"beispiel-2-konfigurieren-eines-upstream-surge-proxys"},"Beispiel 2: Konfigurieren eines Upstream-Surge-Proxys"),(0,i.kt)("p",null,"In Big Sur v11.1+, there are no known conflicts between AdGuard and Surge proxy. If you are using an older version of Big Sur (prior to 11.1), check that ",(0,i.kt)("strong",{parentName:"p"},"System Proxy")," in the bottom right corner is disabled. Otherwise, Surge won't work with AdGuard. On the other hand, ",(0,i.kt)("strong",{parentName:"p"},"Enhanced Mode")," can be enabled without causing a conflict in any Big Sur version."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png",alt:"Configuring an upstream Surge proxy *border"})),(0,i.kt)("p",null,"Now go to ",(0,i.kt)("em",{parentName:"p"},"Preferences \u2192 Network \u2192 Outbound proxy")," and fill in the fields. For SOCKS5 proxy type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host"),": localhost"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port"),": 6153 For HTTP proxy type:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host"),": localhost"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port"),": 6152")),(0,i.kt)("h2",{id:"alternativen-zur-verwendung-einer-netzwerkerweiterung"},"Alternativen zur Verwendung einer Netzwerkerweiterung"),(0,i.kt)("p",null,"It's impossible to foresee each and every possible problem that can pop up in Big Sur or Monterey, there are countless various hardware/software and settings configurations. If you face any compatibility issues, please contact our support team, but feel free to try one of these workarounds first."),(0,i.kt)("h3",{id:"automatic-proxy"},"Verwenden des Filtermodus \u201eAutomatischer Proxy\u201c"),(0,i.kt)("p",null,"If you face problems in Big Sur or Monterey which can't be resolved by any of the methods above, you can try switching AdGuard to ",(0,i.kt)("em",{parentName:"p"},"Automatic proxy")," mode."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open AdGuard's menu."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("em",{parentName:"li"},"Preferences..."),"."),(0,i.kt)("li",{parentName:"ol"},"Switch to the ",(0,i.kt)("em",{parentName:"li"},"Network")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"Select Mode...")," button."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("em",{parentName:"li"},"Automatic Proxy"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg",alt:"Switch AdGuard to Automatic proxy mode"})),(0,i.kt)("p",null,"Now AdGuard has automatically added a ",(0,i.kt)("strong",{parentName:"p"},".pac")," file to your Mac's network settings, so that the system will consider AdGuard a proxy and try to send all traffic through AdGuard."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Some apps may ignore this system setting and their traffic will not be filtered.")),(0,i.kt)("h3",{id:"kernel-extension"},"Aktivieren der Kernel-Erweiterung in Big Sur und Monterey"),(0,i.kt)("p",null,"By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"Apple symbol")," in the Menu bar."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("em",{parentName:"li"},"Restart\u2026")),(0,i.kt)("li",{parentName:"ol"},"Hold down ",(0,i.kt)("em",{parentName:"li"},"Command-R")," to reboot into Recovery Mode."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("em",{parentName:"li"},"Utilities"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("em",{parentName:"li"},"Terminal"),"."),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"csrutil disable"),"."),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("em",{parentName:"li"},"Return")," or ",(0,i.kt)("em",{parentName:"li"},"Enter")," on your keyboard."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"Apple symbol")," in the Menu bar."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("em",{parentName:"li"},"Restart\u2026"))),(0,i.kt)("p",null,"Nachdem SIP deaktiviert ist, aktivieren Sie die Kernel-Erweiterung folgenderma\xdfen:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg",alt:"Kernel-Erweiterung aktivieren"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open AdGuard's menu."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("em",{parentName:"li"},"Preferences..."),"."),(0,i.kt)("li",{parentName:"ol"},"Switch to the ",(0,i.kt)("em",{parentName:"li"},"Network")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("em",{parentName:"li"},"Select Mode...")," button."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("em",{parentName:"li"},"Kernel Extension"),"."),(0,i.kt)("li",{parentName:"ol"},"Confirm that you want to switch to Kernel Extension.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Wir empfehlen jedoch nur, diese Methode zu verwenden, wenn alles andere fehlschl\xe4gt, da dies zu unerwarteten Problemen f\xfchren kann.")))}u.isMDXComponent=!0}}]);