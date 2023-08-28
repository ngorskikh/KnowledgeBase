"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6711],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const o={title:"Battery and traffic consumption issues",sidebar_position:1},i=void 0,s={unversionedId:"adguard-for-android/solving-problems/battery",id:"adguard-for-android/solving-problems/battery",title:"Battery and traffic consumption issues",description:"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, laden Sie die AdGuard-App herunter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/battery.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/battery",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/battery",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/battery.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Battery and traffic consumption issues",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/KnowledgeBase/de/adguard-for-android/installation"},next:{title:"How to collect debug logs",permalink:"/KnowledgeBase/de/adguard-for-android/solving-problems/log"}},l={},d=[{value:"Own battery usage stats screen",id:"own-battery-usage-stats-screen",level:3},{value:"How much battery resource does AdGuard really consume?",id:"how-much-battery-resource-does-adguard-really-consume",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Dieser Artikel behandelt AdGuard f\xfcr Android, einem multifunktionalen Werbeblocker, der Ihr Ger\xe4t auf Systemebene sch\xfctzt. Um zu sehen, wie es funktioniert, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"laden Sie die AdGuard-App herunter"))),(0,n.kt)("p",null,"On Android devices running OS 6 and earlier, built-in statistics often attributed high data and/or battery usage to AdGuard. This was because AdGuard counted all the traffic it filtered from various apps. As a result, AdGuard's share of total data and battery usage was overstated, while other apps were understated."),(0,n.kt)("p",null,"With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data."),(0,n.kt)("p",null,"However, AdGuard users can always get a true picture of the situation on the ",(0,n.kt)("em",{parentName:"p"},"Battery usage")," screen."),(0,n.kt)("h3",{id:"own-battery-usage-stats-screen"},"Own battery usage stats screen"),(0,n.kt)("p",null,"You can access it by navigating to ",(0,n.kt)("em",{parentName:"p"},"Statistics")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Battery usage"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/articles/battery/1.png",alt:"Battery stats *mobile_border"})),(0,n.kt)("p",null,"Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. Besides that, there\u2019s also a numeric breakdown of the relevant data and a short technical explanation."),(0,n.kt)("h3",{id:"how-much-battery-resource-does-adguard-really-consume"},"How much battery resource does AdGuard really consume?"),(0,n.kt)("p",null,"First, let us lay down a bit of theory and links with necessary data."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: ",(0,n.kt)("a",{parentName:"p",href:"https://source.android.com/devices/tech/power/values.html"},"https://source.android.com/devices/tech/power/values.html"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: ",(0,n.kt)("a",{parentName:"p",href:"https://source.android.com/devices/tech/power/values.html"},"https://source.android.com/devices/tech/power/values.html")),(0,n.kt)("p",{parentName:"li"},"For example, from the table above:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"wifi.active=")," 31mA additional consumption in mAh caused by WiFi data exchange."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"radio.active=")," 100-300mA additional consumption in mAh caused by data exchange over Mobile network."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"cpu.active=")," 100-200mA additional consumption in mAh caused by CPU work.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating battery resource consumption let's get rid of 'Mobile/WiFi packets' and stcik to 'CPU'."),(0,n.kt)("p",{parentName:"li"},"Formula to calculate the consumption:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},'"CPU TIME (ms)" X "cpu.active" / (60 ',(0,n.kt)("em",{parentName:"p"},"60"),' 1000) = "POWER USE mAh"')),(0,n.kt)("p",{parentName:"li"},"Let's put real numbers into this formula."),(0,n.kt)("p",{parentName:"li"},"Let's take ",(0,n.kt)("em",{parentName:"p"},"CPU total")," from the second screenshot and convert into milliseconds: 506000"),(0,n.kt)("p",{parentName:"li"},"A coefficient ",(0,n.kt)("em",{parentName:"p"},"cpu.active")," for 2GHz will be roughly equal to 225mAh"),(0,n.kt)("p",{parentName:"li"},"Final result:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"506000 ",(0,n.kt)("em",{parentName:"p"},"225 / (60")," 60 * 1000) = 31,625mAh")))),(0,n.kt)("h3",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Real consumption is ",(0,n.kt)("strong",{parentName:"p"},"several times less")," than it is shown in Android statistics. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh."))}c.isMDXComponent=!0}}]);