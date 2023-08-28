"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6667],{4137:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var a=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(i),f=l,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||n;return i?a.createElement(h,r(r({ref:t},d),{},{components:i})):a.createElement(h,r({ref:t},d))}));function f(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=i.length,r=new Array(n);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<n;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},195:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=i(7462),l=(i(7294),i(4137));const n={title:"AdGuard filter policy",sidebar_position:6},r=void 0,s={unversionedId:"general/ad-filtering/filter-policy",id:"general/ad-filtering/filter-policy",title:"AdGuard filter policy",description:"When discussing AdGuard ad filters, one topic often comes up \u2014 whether AdGuard should block this or that ad. By setting the rules, we stick to specific criteria that are very similar to EasyList Policy, which we find correct and appropriate. However, we have made some changes to it.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/general/ad-filtering/filter-policy.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/filter-policy",permalink:"/KnowledgeBase/zh-TW/general/ad-filtering/filter-policy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/filter-policy.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"AdGuard filter policy",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to create your own ad filters",permalink:"/KnowledgeBase/zh-TW/general/ad-filtering/create-own-filters"},next:{title:"What is HTTPS filtering",permalink:"/KnowledgeBase/zh-TW/general/https-filtering/what-is-https-filtering"}},o={},c=[{value:"Terminology",id:"terminology",level:2},{value:"Common criteria",id:"common-criteria",level:2},{value:"Ad filters",id:"ad-filters",level:2},{value:"Tracking Protection filter",id:"tracking-protection-filter",level:2},{value:"AdGuard URL Tracking filter",id:"adguard-url-tracking-filter",level:2},{value:"Social Media filter",id:"social-media-filter",level:2},{value:"Annoyances filter",id:"annoyances-filter",level:2},{value:"Filter unblocking search ads and self-promotion",id:"filter-unblocking-search-ads-and-self-promotion",level:2},{value:"Quality requirements for filtering rules",id:"quality-requirements-for-filtering-rules",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When discussing AdGuard ad filters, one topic often comes up \u2014 whether AdGuard should block this or that ad. By setting the rules, we stick to specific criteria that are very similar to ",(0,l.kt)("a",{parentName:"p",href:"https://easylist.to/pages/policy.html"},"EasyList Policy"),", which we find correct and appropriate. However, we have made some changes to it."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png",alt:"To filter or not to filter"})),(0,l.kt)("h2",{id:"terminology"},"Terminology"),(0,l.kt)("p",null,"Throughout this text, we use the terms ",(0,l.kt)("strong",{parentName:"p"},"first party")," and ",(0,l.kt)("strong",{parentName:"p"},"third party"),"."),(0,l.kt)("p",null,'A "first party" is a website that a user visits intentionally and knowingly, plus a set of resources on the web operated by the same organization. In practice, we consider resources to belong to the same party if they are part of the same registrable domain: a public suffix plus one additional label. Example: ',(0,l.kt)("inlineCode",{parentName:"p"},"site.example"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"www.site.example"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"s.u.b.site.example")," belong to the same party because ",(0,l.kt)("inlineCode",{parentName:"p"},"site.example")," is their common registrable domain."),(0,l.kt)("p",null,'A "third party" is any party that does not fall within the definition of the first party above. Interactions with other parties are considered third-party, even if the user is transiently informed in context (for example, in the form of a redirect). Merely hovering over, muting, pausing, or closing a given piece of content does not constitute an intention to interact.'),(0,l.kt)("h2",{id:"common-criteria"},"Common criteria"),(0,l.kt)("p",null,"These equally apply to rules in all filters."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rules that often cause problems with the work of some websites will be deleted."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer.")),(0,l.kt)("h2",{id:"ad-filters"},"Ad filters"),(0,l.kt)("p",null,"This part describes the AdGuard Base filter, the Mobile Ads filter, and the following language-specific filters: Russian, German, Dutch, Spanish/Portuguese, Japanese, Turkish, Chinese, and French."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What shall these filters block?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"These filters will block ads wherever possible."),(0,l.kt)("li",{parentName:"ul"},"Ads should be blocked regardless of their reasons and goals."),(0,l.kt)("li",{parentName:"ul"},"We will block ads caused by malicious apps or extensions that inject ads. Please note that we do it only on the condition that you specify how to install such an app or extension.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Limitations and Exceptions")),(0,l.kt)("p",null,"If a rule is subject to the list of limitations described below, then it won\u2019t be added to the main filters."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Websites\u2019 own ads should not be removed on purpose. On the other hand, they should not be unblocked if it may cause third-party ads to reappear."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer."),(0,l.kt)("li",{parentName:"ul"},"Anti-adblock scripts will be blocked only if they limit or affect the functionality of a website."),(0,l.kt)("li",{parentName:"ul"},"Anti-adblock scripts will not be blocked in cases when it is prohibited by law."),(0,l.kt)("li",{parentName:"ul"},"Rules that often cause problems with the work of some websites will be deleted.")),(0,l.kt)("h2",{id:"tracking-protection-filter"},"Tracking Protection filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What will be blocked with this filter?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This filter will block all trackers that collect user personal data.")),(0,l.kt)("p",null,"We define ",(0,l.kt)("strong",{parentName:"p"},"tracking")," as collecting data regarding an individual\u2019s identity or activity across one or more websites. Even if such data is considered to be personally unidentifiable, it\u2019s still tracking."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tracker")," is an online script that has tracking as its only purpose, or as one of its purposes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Limitations and Exceptions")),(0,l.kt)("p",null,"If a rule is subject to the list of limitations described below, then it won\u2019t be added to this filter."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rules that cause problems with website functionality will be removed."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer.")),(0,l.kt)("h2",{id:"adguard-url-tracking-filter"},"AdGuard URL Tracking filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What will be blocked with this filter?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This filter will strip all tracking parameters from URLs.")),(0,l.kt)("p",null,"We define ",(0,l.kt)("strong",{parentName:"p"},"tracking")," as collecting data regarding an individual\u2019s identity or activity across one or more websites. Even if such data is considered to be personally unidentifiable, it\u2019s still tracking."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Limitations and Exceptions")),(0,l.kt)("p",null,"If a rule is subject to the list of limitations described below, then it won\u2019t be added to this filter."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rules that would reduce user security levels will be removed."),(0,l.kt)("li",{parentName:"ul"},"Rules that cause problems with website functionality will be removed."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer.")),(0,l.kt)("h2",{id:"social-media-filter"},"Social Media filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What will be blocked with this filter?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'This filter will block social media widgets (on third-party websites) such as "Like" and "Share" buttons, recommendation widgets, and more.')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Limitations and Exceptions")),(0,l.kt)("p",null,"If a rule is subject to the list of limitations described below, then it won\u2019t be added to this filter."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Rules that block widgets that are a part of a website\u2019s functionality, such as "Comments," "Embedded Post," "Surveys," or widgets that require authorization via social networks.'),(0,l.kt)("li",{parentName:"ul"},"Rules that block links to a website\u2019s communities in social networks."),(0,l.kt)("li",{parentName:"ul"},"Rules that cause problems with website functionality will be removed."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer.")),(0,l.kt)("h2",{id:"annoyances-filter"},"Annoyances filter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What will be blocked with this filter?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This filter will block obstructions on the page. These elements are not ads, but they obstruct the view and make it difficult to see the actual content of the website. Such elements include cookie notices, third-party widgets, in-page pop-ups, email subscription forms, banners with special offers, and aggressively placed social media widgets.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Limitations and Exceptions")),(0,l.kt)("p",null,"If a rule is subject to the list of limitations described below, then it won\u2019t be added to this filter."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rules that block elements that are essential for the website functioning (e.g. authorization forms) will not be blocked even if they satisfy other requirements."),(0,l.kt)("li",{parentName:"ul"},"Rules that cause problems with website functionality will be removed."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer.")),(0,l.kt)("h2",{id:"filter-unblocking-search-ads-and-self-promotion"},"Filter unblocking search ads and self-promotion"),(0,l.kt)("p",null,"Unlike other filters, this one ",(0,l.kt)("strong",{parentName:"p"},"unblocks")," certain ads. Read more about it in the ",(0,l.kt)("a",{parentName:"p",href:"../search-ads"},"article on search ads and self-promotion"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What will be unblocked with this filter?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Search ads (ads that you see among the results when using an online search engine)."),(0,l.kt)("li",{parentName:"ul"},"Website self-promotion (when an ad on a website is promoting this very website or other websites/social media/etc closely related to it).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Limitations and Exceptions")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rules that cause problems with website functionality will be removed."),(0,l.kt)("li",{parentName:"ul"},"Website-specific rules will be added only if a website has sufficient traffic. Traffic is determined by open statistics (if available) or by other means, such as followers on social media. A website's traffic is considered sufficient when it has 100 thousand visits per month. We will consider adding a rule for a website that's not that popular, but the final decision is up to the filter list maintainer.")),(0,l.kt)("h2",{id:"quality-requirements-for-filtering-rules"},"Quality requirements for filtering rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The rules should be as efficient as possible in terms of performance."),(0,l.kt)("li",{parentName:"ul"},"Exception rules should be as specific as possible in order to avoid unnecessary unblocking."),(0,l.kt)("li",{parentName:"ul"},"CSS and JS injection rules should be used as rarely as possible and only when it is impossible to block ads without them.")))}u.isMDXComponent=!0}}]);