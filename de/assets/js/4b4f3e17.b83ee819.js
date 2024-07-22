"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7013],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(4137));const r={title:"Schutz vor Phishing und Malware",sidebar_position:3},o=void 0,s={unversionedId:"general/browsing-security",id:"general/browsing-security",title:"Schutz vor Phishing und Malware",description:"Falling prey to phishing and malware remains a common issue. To enhance digital security, we\u2019ve incorporated special filters in AdGuard products to shield you from malicious and phishing websites. To date, we\u2019ve categorized over 15 million sites and built a database of 1.5 million websites known for phishing and malware. Using this database, AdGuard checks the websites you visit to protect you from online threats.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/general/browsing-security.md",sourceDirName:"general",slug:"/general/browsing-security",permalink:"/KnowledgeBase/de/general/browsing-security",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/browsing-security.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Schutz vor Phishing und Malware",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Local.adguard.org domain",permalink:"/KnowledgeBase/de/general/https-filtering/local-adguard-com-domain"},next:{title:"Stealth Mode",permalink:"/KnowledgeBase/de/general/stealth-mode"}},l={},d=[{value:"How does AdGuard check websites?\u200b",id:"how-does-adguard-check-websites",level:2},{value:"In apps",id:"in-apps",level:3},{value:"In browser extensions",id:"in-browser-extensions",level:3},{value:"Setting up phishing and malware protection in AdGuard products",id:"setting-up-phishing-and-malware-protection-in-adguard-products",level:2},{value:"What we block",id:"what-we-block",level:2},{value:"Maintaining our filters",id:"maintaining-our-filters",level:2},{value:"Want to help?\u200b",id:"want-to-help",level:3},{value:"False-positive responses\u200b",id:"false-positive-responses",level:3},{value:"If you are suspicious about a website",id:"if-you-are-suspicious-about-a-website",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Falling prey to phishing and malware remains a common issue. To enhance digital security, we\u2019ve incorporated special filters in AdGuard products to shield you from malicious and phishing websites. To date, we\u2019ve categorized over 15 million sites and built a database of 1.5 million websites known for phishing and malware. Using this database, AdGuard checks the websites you visit to protect you from online threats."),(0,i.kt)("p",null,"::: note"),(0,i.kt)("p",null,"We strictly do not collect or use any information about the websites you visit."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"how-does-adguard-check-websites"},"How does AdGuard check websites?\u200b"),(0,i.kt)("p",null,"Each time you visit a website, your local client exchanges information with our backend server in the form of hashes and hash prefixes. Based on this exchange, the local client determines whether or not the website is listed in the potentially dangerous websites database. There is a difference in the scope of this check for apps and extensions."),(0,i.kt)("h3",{id:"in-apps"},"In apps"),(0,i.kt)("p",null,"AdGuard provides the best possible protection by inspecting both the pages and all objects loaded on them. AdGuard checks URLs and domain names using hash prefixes, not the full URLs, so our servers retain no information about the websites you visit and your personal information is completely safe. Our servers respond to the app\u2019s query with a list of all possible addresses that match the hash prefix. When a potential threat is detected based on hash matches, access to that website is immediately blocked."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png",alt:"DNS warning"})),(0,i.kt)("h3",{id:"in-browser-extensions"},"In browser extensions"),(0,i.kt)("p",null,"Our browser extensions can only check domain names, not full URLs. They are also unable to check subqueries. This means that if there are potentially malicious elements on the page, they will be loaded even if the page itself is from a safe domain. The extension won\u2019t be able to protect against them. It's also important to note that the check performed is asynchronous, i.e. it happens at the same time as the page is loaded, so it\u2019s possible that malware could be loaded as well."),(0,i.kt)("h2",{id:"setting-up-phishing-and-malware-protection-in-adguard-products"},"Setting up phishing and malware protection in AdGuard products"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Windows"),": Activate the ",(0,i.kt)("em",{parentName:"li"},"Browsing Security")," module in the ",(0,i.kt)("em",{parentName:"li"},"Settings")," menu")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png",alt:"Browsing Security in Windows"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Mac"),": Enable the ",(0,i.kt)("em",{parentName:"li"},"Security")," module in ",(0,i.kt)("em",{parentName:"li"},"Preferences"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png",alt:"Security in Mac"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Android"),": Turn on ",(0,i.kt)("em",{parentName:"li"},"Browsing Security")," in the ",(0,i.kt)("em",{parentName:"li"},"Protection")," tab")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png",alt:"Browsing security in Android *mobile"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For iOS"),": Although there\u2019s no separate module, you can go to ",(0,i.kt)("em",{parentName:"li"},"Safari protection")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Filters")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Security")," and enable the available filters. Additionally, enable ",(0,i.kt)("em",{parentName:"li"},"DNS protection")," and select one of the AdGuard DNS servers")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg",alt:"Security in iOS *mobile"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Browser extensions"),": Enable ",(0,i.kt)("em",{parentName:"li"},"Phishing and malware protection")," in the ",(0,i.kt)("em",{parentName:"li"},"Settings")," tab. For enhanced protection, go to ",(0,i.kt)("em",{parentName:"li"},"Filters")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Security")," and activate available filters")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png",alt:"Schutz vor Phishing und Malware"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Private AdGuard DNS:")," Enable malware protection in ",(0,i.kt)("em",{parentName:"li"},"Server settings")," under ",(0,i.kt)("em",{parentName:"li"},"Security"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png",alt:"Security in DNS"})),(0,i.kt)("h2",{id:"what-we-block"},"What we block"),(0,i.kt)("p",null,"We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Phishing"},"Wikipedia article"),"."),(0,i.kt)("h2",{id:"maintaining-our-filters"},"Maintaining our filters"),(0,i.kt)("p",null,"AdGuard maintains an extensive database of phishing and malware websites, and it\u2019s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites."),(0,i.kt)("p",null,"We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future."),(0,i.kt)("h3",{id:"want-to-help"},"Want to help?\u200b"),(0,i.kt)("p",null,"Any help is welcome! If you encounter a phishing or malware website, please report it to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,i.kt)("h3",{id:"false-positive-responses"},"False-positive responses\u200b"),(0,i.kt)("p",null,"Occasionally, some non-malicious websites are added to AdGuard\u2019s filters. Wir tun unser Bestes, um den Prozentsatz der Falschmeldungen zu verringern, aber sie kommen trotzdem vor. If you encounter this behavior from AdGuard, please report the false positive to our technical support at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,i.kt)("h2",{id:"if-you-are-suspicious-about-a-website"},"If you are suspicious about a website"),(0,i.kt)("p",null,"If you suspect that a certain website might be dangerous, check it first by using our ",(0,i.kt)("a",{parentName:"p",href:"https://reports.adguard.com/welcome.html"},"security check tool"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png",alt:"Security check"})))}u.isMDXComponent=!0}}]);