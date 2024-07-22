"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2512],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),d=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,b=c["".concat(i,".").concat(f)]||c[f]||p[f]||a;return r?o.createElement(b,s(s({ref:t},u),{},{components:r})):o.createElement(b,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<a;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(7462),n=(r(7294),r(4137));const a={title:"Filters",sidebar_position:1},s=void 0,l={unversionedId:"adguard-browser-extension/features/filters",id:"adguard-browser-extension/features/filters",title:"Filters",description:"This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, download the AdGuard app",source:"@site/docs/adguard-browser-extension/features/filters.md",sourceDirName:"adguard-browser-extension/features",slug:"/adguard-browser-extension/features/filters",permalink:"/KnowledgeBase/adguard-browser-extension/features/filters",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/features/filters.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Filters",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AdGuard and AdGuard Pro",permalink:"/KnowledgeBase/adguard-for-ios/adguard-and-adguard-pro"},next:{title:"Stealth Mode",permalink:"/KnowledgeBase/adguard-browser-extension/features/stealth-mode"}},i={},d=[{value:"Custom filters",id:"custom-filters",level:2},{value:"User rules",id:"user-rules",level:2},{value:"Allowlist",id:"allowlist",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters \u2014 sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. As a result, you stop seeing ads on your webpages."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png",alt:"Filters *border"})),(0,n.kt)("p",null,"All filters are grouped according to their role. For example, there are categories for ad-blocking filters, privacy protection filters, social media-related filters, etc. You can enable either individual filters or the entire group at once."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png",alt:"Ad blocking filters *border"})),(0,n.kt)("h2",{id:"custom-filters"},"Custom filters"),(0,n.kt)("p",null,"While the features of other filter groups are more or less predictable, there is a group called ",(0,n.kt)("em",{parentName:"p"},"Custom")," that may raise additional questions."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png",alt:"Custom filters *border"})),(0,n.kt)("p",null,"In this tab, you can add filters that are not present in the extension by default. There are plenty of ",(0,n.kt)("a",{parentName:"p",href:"https://filterlists.com"},"publicly available filters on the Internet"),". Moreover, you can create and add your own filters. In fact, you can build any set of filters and customize ad blocking the way you like."),(0,n.kt)("p",null,"To add a filter, just click ",(0,n.kt)("em",{parentName:"p"},"Add custom filter"),", enter the URL or the file path of the filter you want to be added and click ",(0,n.kt)("em",{parentName:"p"},"Next"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png",alt:"Add a custom filter *border"})),(0,n.kt)("h2",{id:"user-rules"},"User rules"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"User rules")," is another tool that helps you customize the blocking of ads."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png",alt:"User rules *border"})),(0,n.kt)("p",null,"There are several ways to add new rules. The most straightforward is to just type a rule in, but it requires some knowledge of the ",(0,n.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"rule syntax"),"."),(0,n.kt)("p",null,"You can import a ready-to-use filter list from a text file as well. ",(0,n.kt)("strong",{parentName:"p"},"Make sure that different rules are separated by line breaks.")," Note that importing a ready-to-use filter list is better done in the Custom filters tab."),(0,n.kt)("p",null,"Besides, you can export your own filtering rules. This option is good for transferring your list of rules between browsers or devices."),(0,n.kt)("p",null,"When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in ",(0,n.kt)("em",{parentName:"p"},"User rules"),"."),(0,n.kt)("h2",{id:"allowlist"},"Allowlist"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"allowlist")," is used to exclude certain websites from filtering. Blocking rules are not applied to the websites on the list."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png",alt:"Allowlist *border"})),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"allowlist")," can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the ",(0,n.kt)("em",{parentName:"p"},"Invert allowlist")," option."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png",alt:"Invert allowlist *border"})),(0,n.kt)("p",null,"You can also import and export existing allowlists. It is useful, for instance, if you want to apply the same allowing rules in each of your browsers."))}p.isMDXComponent=!0}}]);