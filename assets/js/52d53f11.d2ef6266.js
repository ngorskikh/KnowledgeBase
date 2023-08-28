"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5864],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,c=p["".concat(o,".").concat(m)]||p[m]||f[m]||s;return r?a.createElement(c,n(n({ref:t},d),{},{components:r})):a.createElement(c,n({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var u=2;u<s;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(7462),i=(r(7294),r(4137));const s={title:"AdGuard filters",sidebar_position:2},n=void 0,l={unversionedId:"general/ad-filtering/adguard-filters",id:"general/ad-filtering/adguard-filters",title:"AdGuard filters",description:"This article is about the filters that we develop and that come pre-installed in AdGuard. To check them out, you can download the AdGuard app",source:"@site/docs/general/ad-filtering/adguard-filters.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/adguard-filters",permalink:"/KnowledgeBase/general/ad-filtering/adguard-filters",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/adguard-filters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"AdGuard filters",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How ad blocking works",permalink:"/KnowledgeBase/general/ad-filtering/how-ad-blocking-works"},next:{title:"Search ads and self-promotion",permalink:"/KnowledgeBase/general/ad-filtering/search-ads"}},o={},u=[{value:"AdGuard filters",id:"adguard-filters",level:2},{value:"AdGuard Filters Policy",id:"adguard-filters-policy",level:2},{value:"Contributing to AdGuard filters",id:"contributing-to-adguard-filters",level:2},{value:"Report Issues",id:"report-issues",level:3},{value:"Suggest Filtering Rules",id:"suggest-filtering-rules",level:3},{value:"Other ways to contribute",id:"other-ways-to-contribute",level:3}],d={toc:u};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This article is about the filters that we develop and that come pre-installed in AdGuard. To check them out, you can ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,i.kt)("p",null,"This article is about the filters we create to use in AdGuard and other ad-blocking software (e.g., uBlock Origin). Filters are sets of rules in text format used by AdGuard apps and programs to filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers. Filters contain lists of rules based on their purpose. Language filters include rules for corresponding language segments of the Internet (e.g., German filter). Task-based filters group rules that fulfil a specific task, such as Social media filter or Tracking Protection filter. Enabling or disabling a filter makes it easier to work with the entire list of rules at once."),(0,i.kt)("h2",{id:"adguard-filters"},"AdGuard filters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base filter")," removes ads from websites with English content. Originally based on ",(0,i.kt)("a",{parentName:"li",href:"https://easylist.to/"},"EasyList")," and modified by us. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tracking Protection filter")," \u2014 comprehensive list of various online counters and web analytics tools. Use it to hide your actions online and avoid tracking. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL Tracking filter")," enhances privacy by removing tracking parameters from URLs. When a user opts to block tracking parameters in Stealth Mode, this filter will be enabled automatically. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Social media filter"),' removes numerous "Like" and "Tweet" buttons and other social media integrations on popular websites. ',(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Annoyances filter")," blocks irritating elements on web pages. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt"},"View rules"),"\nIncludes the following AdGuard filters (all of them can be enabled separately from the Annoyances filter):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- **Cookie Notices** blocks cookie notices on web pages. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)\n- **Popups** blocks all kinds of pop-ups that are not necessary for websites' operation. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)\n- **Mobile App Banners** blocks banners that promote mobile apps of websites. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)\n- **Widgets** blocks third-party widgets: online assistants, live support chats, etc. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)\n- **Other Annoyances** blocks elements that do not fall under the popular categories of annoyances. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter unblocking search ads and self-promotions")," unblocks ads that may be useful to users. Learn more about this filter on ",(0,i.kt)("a",{parentName:"li",href:"../search-ads"},"this page"),". ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Russian filter")," removes ads from websites in Russian. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"German filter")," removes ads from websites in German. Originally based on the ",(0,i.kt)("a",{parentName:"li",href:"https://easylist.to/"},"EasyList Germany")," filter and subsequently modified by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"French filter")," removes ads from websites in French. Originally based on the ",(0,i.kt)("a",{parentName:"li",href:"https://forums.lanik.us/viewforum.php?f=91"},"Liste FR")," filter and subsequently modified by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Japanese filter")," removes ads from websites in Japanese. Originally based on the ",(0,i.kt)("a",{parentName:"li",href:"https://www.fanboy.co.nz/fanboy-japanese.txt"},"Fanboy\u2019s Japanese")," filter and subsequently modified by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dutch filter")," removes ads from websites in Dutch. Originally based on the ",(0,i.kt)("a",{parentName:"li",href:"https://easylist.to/"},"EasyList Dutch")," filter and subsequently modified by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Spanish/Portuguese filter")," removes ads from websites in Spanish and Portuguese. Originally based on the ",(0,i.kt)("a",{parentName:"li",href:"https://www.fanboy.co.nz/fanboy-espanol.txt"},"Fanboy\u2019s Spanish/Portuguese")," filter and subsequently modified by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Turkish filter")," removes ads from websites in Turkish. Created by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Chinese filter")," removes ads from websites in Chinese. Originally based on the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/easylist/easylistchina"},"EasyList China")," filter and subsequently modified by us according to the complaints from users. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Experimental filter")," serves to test some new filtering rules that can potentially cause conflicts and mess with websites' work. In case these rules perform without any issues, they get added to main filters. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mobile ads filter")," blocks ads on mobile devices. Contains all known mobile ad networks. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt"},"View rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DNS filter")," \u2014 composed of several other filters (AdGuard Base filter, Social media filter, Spyware filter, Mobile ads filter, EasyList and EasyPrivacy) and simplified specifically to be better compatible with DNS-level ad blocking. This filter is used by ",(0,i.kt)("a",{parentName:"li",href:"https://adguard-dns.io/kb"},"AdGuard DNS")," servers to block ads and tracking. ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt"},"View rules"))),(0,i.kt)("h2",{id:"adguard-filters-policy"},"AdGuard Filters Policy"),(0,i.kt)("p",null,"Our filter policy defines what AdGuard filters should block and what they should not, as well as the rules for adding and removing rules from filters. Read the full text of ",(0,i.kt)("a",{parentName:"p",href:"../filter-policy"},"AdGuard filter policy")," for detailed information."),(0,i.kt)("h2",{id:"contributing-to-adguard-filters"},"Contributing to AdGuard filters"),(0,i.kt)("p",null,"We are blessed with a unique community that not only loves AdGuard but also gives back. Many people volunteer in various ways to make AdGuard's user experience better for everybody. You are welcome to join the band and make a difference. We will do our part and happily reward the most active community. So, what can you do?"),(0,i.kt)("h3",{id:"report-issues"},"Report Issues"),(0,i.kt)("p",null,"We rely on the community to let us know about issues with our filters. It helps us use our time more efficiently and keep filters constantly updated. To submit a report, please use this ",(0,i.kt)("a",{parentName:"p",href:"https://agrd.io/report"},"web reporting tool"),"."),(0,i.kt)("h3",{id:"suggest-filtering-rules"},"Suggest Filtering Rules"),(0,i.kt)("p",null,"You will find many open issues in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub filter repository"),". Each one refers to a problem with a website, such as a missed ad or a false positive. Pick an issue and suggest your own rules in the comments. AdGuard filter engineers will review your suggestions and, if approved, add your rules to AdGuard filters."),(0,i.kt)("p",null,"Here is the ",(0,i.kt)("a",{parentName:"p",href:"../create-own-filters"},"official documentation")," on the syntax of AdGuard filtering rules. Please read it carefully: it will help you create your own filtering rules."),(0,i.kt)("h3",{id:"other-ways-to-contribute"},"Other ways to contribute"),(0,i.kt)("p",null,"Here is ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/contribute.html"},"a dedicated page")," for people willing to contribute to AdGuard in other ways."))}f.isMDXComponent=!0}}]);