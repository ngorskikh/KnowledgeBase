"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6159],{4137:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>p});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(i),p=r,f=h["".concat(l,".").concat(p)]||h[p]||u[p]||s;return i?a.createElement(f,n(n({ref:t},d),{},{components:i})):a.createElement(f,n({ref:t},d))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,n=new Array(s);n[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var c=2;c<s;c++)n[c]=i[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3294:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=i(7462),r=(i(7294),i(4137));const s={title:"What is HTTPS filtering",sidebar_position:1},n=void 0,o={unversionedId:"general/https-filtering/what-is-https-filtering",id:"general/https-filtering/what-is-https-filtering",title:"What is HTTPS filtering",description:"What is HTTPS?",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/https-filtering/what-is-https-filtering.md",sourceDirName:"general/https-filtering",slug:"/general/https-filtering/what-is-https-filtering",permalink:"/KnowledgeBase/es/general/https-filtering/what-is-https-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/https-filtering/what-is-https-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is HTTPS filtering",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AdGuard filter policy",permalink:"/KnowledgeBase/es/general/ad-filtering/filter-policy"},next:{title:"Known issues",permalink:"/KnowledgeBase/es/general/https-filtering/known-issues"}},l={},c=[{value:"What is HTTPS?",id:"what-is-https",level:3},{value:"What is a security certificate?",id:"what-is-a-security-certificate",level:3},{value:"Why does AdGuard need to be able to filter HTTPS?",id:"why-does-adguard-need-to-be-able-to-filter-https",level:3},{value:"How does HTTPS filtering work?",id:"how-does-https-filtering-work",level:3},{value:"Does my traffic remain encrypted and secure?",id:"does-my-traffic-remain-encrypted-and-secure",level:3},{value:"Financial websites and websites with sensitive personal data",id:"financial-websites-and-websites-with-sensitive-personal-data",level:3},{value:"Extended Validation (EV) certificates",id:"extended-validation-ev-certificates",level:3},{value:"Problems related to HTTPS filtering",id:"problems-related-to-https-filtering",level:3},{value:"HTTPS filtering issues on Android 7+",id:"https-filtering-issues-on-android-7",level:4},{value:"How to manually check HTTPS quality?",id:"how-to-manually-check-https-quality",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-https"},"What is HTTPS?"),(0,r.kt)("p",null,"HTTPS (HyperText Transfer Protocol Secure) is an extension of the HTTP protocol that supports encryption to increase security. This protocol is used to securely transmit valuable information like personal data, credit card details, etc."),(0,r.kt)("p",null,"Using HTTPS is highly advantageous because encrypted traffic is protected against eavesdropping by a third party, and we can only welcome this. HTTPS acceptance has been growing in recent years, mainly because it is ",(0,r.kt)("a",{parentName:"p",href:"https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html"},"encouraged by Google")," and also due to the emergence of a free certificate authority ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Let's_Encrypt"},"Let\u2019s Encrypt"),"."),(0,r.kt)("p",null,"The diagram below describes the difference between plain HTTP protocol and secure HTTPS protocol."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png",alt:"What is HTTPS?"})),(0,r.kt)("h3",{id:"what-is-a-security-certificate"},"What is a security certificate?"),(0,r.kt)("p",null,"Simply put, HTTPS means data encryption. But there\u2019s still a problem: how can you be sure that you\u2019ve established an encrypted connection with the right website? That\u2019s where security certificates come into play. A certificate serves as proof that the website is really what it tells you it is. If a website doesn\u2019t have such a certificate, or if the certificate contains incorrect information, the browser will not allow you to establish a secure connection. It is important that the certificate a website uses is issued by a certificate authority (CA) trusted by your browser. Such a CA guarantees that the SSL certificate is, indeed, issued to the website\u2019s owner."),(0,r.kt)("h3",{id:"why-does-adguard-need-to-be-able-to-filter-https"},"Why does AdGuard need to be able to filter HTTPS?"),(0,r.kt)("p",null,"Most websites are now using HTTPS, and the same applies to advertising. Here are a few popular websites where you can\u2019t remove ads without HTTPS filtering: youtube.com, facebook.com, and twitter.com."),(0,r.kt)("h3",{id:"how-does-https-filtering-work"},"How does HTTPS filtering work?"),(0,r.kt)("p",null,"If it were easy, HTTPS wouldn\u2019t be that secure. When a browser attempts to connect to a server, AdGuard establishes two secure connections: one with the browser (or another app) and the other with the server. The browser must trust AdGuard and the connections it creates. For this purpose, AdGuard generates a special (and unique) root certificate and installs it into the system and, when it is required, into some browsers (e.g., Firefox). Thus, AdGuard can see what is happening inside the secure connection and do its job \u2014 block ads and trackers."),(0,r.kt)("p",null,"For better understanding we depicted this process:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png",alt:"How does HTTPS filtering work"})),(0,r.kt)("h3",{id:"does-my-traffic-remain-encrypted-and-secure"},"Does my traffic remain encrypted and secure?"),(0,r.kt)("p",null,"Of course! Your connection with a remote server remains encrypted and secure. AdGuard, just like your browser, checks the server\u2019s certificate before deciding whether to filter it or not."),(0,r.kt)("p",null,"However, HTTPS filtering has its drawbacks. The most important one is that it hides from the browser the actual certificate of the website. Instead, the browser sees the certificate issued by AdGuard."),(0,r.kt)("p",null,"Because of this, we have taken additional measures to improve connection security."),(0,r.kt)("h3",{id:"financial-websites-and-websites-with-sensitive-personal-data"},"Financial websites and websites with sensitive personal data"),(0,r.kt)("p",null,"By default, AdGuard doesn\u2019t filter any information on websites of banks, payment systems, or websites with valuable personal data. We maintain a list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/HttpsExclusions"},"thousands of exclusions"),"."),(0,r.kt)("p",null,"If you believe some website should be added to this list, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/HttpsExclusions/issues/new"},"let us know"),"."),(0,r.kt)("h3",{id:"extended-validation-ev-certificates"},"Extended Validation (EV) certificates"),(0,r.kt)("p",null,"AdGuard allows you to disable filtering for all websites that use extended validation certificates."),(0,r.kt)("p",null,"An EV certificate offers a higher level of security and provides more guarantees than a regular certificate, proving that the website is not fraudulent or fake."),(0,r.kt)("h3",{id:"problems-related-to-https-filtering"},"Problems related to HTTPS filtering"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf"},"2017 study")," shows that 5 to 10% of HTTPS connections are established by HTTPS-filtering applications. It is usually done by various kinds of antivirus software. The bad news is that 24 out of 26 tested antiviruses reduced, in various ways, the connection security level, while two-thirds created connections prone to hacking."),(0,r.kt)("p",null,"The researchers came to a simple conclusion: the Internet security community should pay close attention to applications that filter secure connections. And the developers of such software must pay serious attention to the quality of filtering implementations."),(0,r.kt)("p",null,"We would like to note that AdGuard was not tested in the above study. We ran estimates according to their set of tests, and at the time of testing, we could have received the maximum score \u2014 A","*",". However, this score is not perfect. During the study, the researchers identified some issues that were omitted in the final evaluation."),(0,r.kt)("p",null,"Here at AdGuard, we fully agree with those conclusions. Moreover, we would like to be as open with users as possible and talk about the problems we are currently experiencing and the steps we are taking to improve the quality and security of the filtering mechanism. The list of these problems is sorted by priority."),(0,r.kt)("p",null,"Most of the problems discovered in the above study are related to certificate validation mechanisms. This is what we want to focus on first. We are working on a separate certificate validation library. Moreover, we want to make it open source. A ",(0,r.kt)("a",{parentName:"p",href:"../known-issues"},"separate article")," lists all the known drawbacks of HTTPS filtering in AdGuard and our plans to fix them."),(0,r.kt)("h4",{id:"https-filtering-issues-on-android-7"},"HTTPS filtering issues on Android 7+"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html"},"Starting from Android 7"),", developers have to explicitly indicate that their apps trust user-installed certificates. Not everyone wants to, or bothers with it. What does it mean for AdGuard? AdGuard installs a user certificate to be able to filter HTTPS traffic. If an app doesn't trust this certificate, its HTTPS traffic will not be filtered. What to do?"),(0,r.kt)("p",null,"The first thing worth mentioning is that many apps (even modern ones) still trust user certificates. Nothing has changed in this regard. Almost all browsers also trust such certificates. There may be some exotic browsers that do not, but they are a rare exception to common practice."),(0,r.kt)("p",null,"Finally, if your device is rooted, you can move the AdGuard certificate to the system storage. This way, you don't have to worry about any permissions a particular app may or may not have \u2014 HTTPS traffic will be filtered for modern apps just as well as for older ones. Please keep in mind that in this case, some additional security restrictions (e.g., HPKP or ",(0,r.kt)("inlineCode",{parentName:"p"},"Expect-CT"),") apply to AdGuard."),(0,r.kt)("h3",{id:"how-to-manually-check-https-quality"},"How to manually check HTTPS quality?"),(0,r.kt)("p",null,"There are several dedicated websites where you can check the quality of your HTTPS connection. These websites check if your browser (or, in our case, your browser plus AdGuard) is susceptible to common vulnerabilities. If you plan to use any program that filters HTTPS, not necessarily AdGuard (e.g., an antivirus), we advise that you check the connection quality on these websites."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ssllabs.com/ssltest/viewMyClient.html"},"https://www.ssllabs.com/ssltest/viewMyClient.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.howsmyssl.com/"},"https://www.howsmyssl.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://badssl.com/"},"https://badssl.com/"))))}u.isMDXComponent=!0}}]);