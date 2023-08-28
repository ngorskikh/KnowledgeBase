"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9001],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(a),m=o,b=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(4137));const r={title:"Testovac\xed beta program AdGuard",sidebar_position:1},i=void 0,l={unversionedId:"miscellaneous/contribute/beta-testing",id:"miscellaneous/contribute/beta-testing",title:"Testovac\xed beta program AdGuard",description:"Aplikace AdGuard existuje prakticky pro v\u0161echny hlavn\xed platformy a pro v\u0161echny pravideln\u011b vyd\xe1v\xe1me aktualizace. To by nebylo mo\u017en\xe9 bez beta testov\xe1n\xed a hlavn\u011b bez beta tester\u016f. Chcete se st\xe1t jedn\xedm z nich? Zde se dozv\xedte, jak to m\u016f\u017eete ud\u011blat.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/miscellaneous/contribute/beta-testing.md",sourceDirName:"miscellaneous/contribute",slug:"/miscellaneous/contribute/beta-testing",permalink:"/KnowledgeBase/cs/miscellaneous/contribute/beta-testing",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/beta-testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Testovac\xed beta program AdGuard",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Instalace",permalink:"/KnowledgeBase/cs/adguard-content-blocker/installation"},next:{title:"Aktualizace datab\xe1ze znalost\xed",permalink:"/KnowledgeBase/cs/miscellaneous/contribute/updating-knowledge-base"}},p={},d=[{value:"Jak se st\xe1t beta testerem",id:"intro",level:2},{value:"Jak nahl\xe1sit chybu",id:"report-a-bug",level:2},{value:"Jak aktivovat kl\xed\u010d pro beta verzi v aplikaci pro iOS",id:"ios",level:2},{value:"Co je\u0161t\u011b?",id:"co-je\u0161t\u011b",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aplikace AdGuard existuje prakticky pro v\u0161echny hlavn\xed platformy a pro v\u0161echny pravideln\u011b vyd\xe1v\xe1me aktualizace. To by nebylo mo\u017en\xe9 bez beta testov\xe1n\xed a hlavn\u011b bez beta tester\u016f. Chcete se st\xe1t jedn\xedm z nich? Zde se dozv\xedte, jak to m\u016f\u017eete ud\u011blat."),(0,o.kt)("h2",{id:"intro"},"Jak se st\xe1t beta testerem"),(0,o.kt)("p",null,"Na\u0161e po\u017eadavky jsou jednoduch\xe9: pou\u017e\xedvejte AdGuard, p\u0159ejd\u011bte na beta verzi a\u017e bude k dispozici a nahlaste v\u0161echny zji\u0161t\u011bn\xe9 chyby. Abyste se v\u0161ak mohli st\xe1t na\u0161\xedm beta testerem, budete pot\u0159ebovat bu\u010f ",(0,o.kt)("a",{parentName:"p",href:"https://forum.adguard.com/index.php"},"f\xf3rum"),", nebo \xfa\u010det ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," (nebo oboj\xed), tak\u017ee si to mo\u017en\xe1 budete cht\xedt nejprve vy\u0159\xeddit."),(0,o.kt)("p",null,"V ka\u017ed\xe9m p\u0159\xedpad\u011b jsou v\u0161echny pot\u0159ebn\xe9 informace shrom\xe1\u017ed\u011bny na ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/beta.html"},"vyhrazen\xe9 str\xe1nce"),"."),(0,o.kt)("p",null,"Pokud chcete p\u0159esko\u010dit \u010d\xe1st s popisem a p\u0159ej\xedt rovnou k akci, m\u016f\u017eete se p\u0159ihl\xe1sit ",(0,o.kt)("a",{parentName:"p",href:"https://surveys.adguard.com/beta_testing_program/form.html"},"zde"),". Va\u0161e \u017e\xe1dost bude zkontrolov\xe1na b\u011bhem 1-3 pracovn\xedch dn\u016f a odpov\u011b\u010f obdr\u017e\xedte e-mailem."),(0,o.kt)("h2",{id:"report-a-bug"},"Jak nahl\xe1sit chybu"),(0,o.kt)("p",null,"Pokud jste si v\u0161imli chyby nebo se jen chcete pod\u011blit o sv\u016fj n\xe1vrh, dejte n\xe1m v\u011bd\u011bt n\u011bkter\xfdm z mo\u017en\xfdch zp\u016fsob\u016f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na ",(0,o.kt)("a",{parentName:"p",href:"https://forum.adguard.com/index.php"},"forum.adguard.com")," a zalo\u017ete tam nov\xe9 vl\xe1kno (nebo najd\u011bte st\xe1vaj\xedc\xed) v ",(0,o.kt)("a",{parentName:"p",href:"https://forum.adguard.com/index.php?categories/48/"},"kategorii 'Beta testov\xe1n\xed'"),". P\u0159e\u010dt\u011bte si ",(0,o.kt)("a",{parentName:"p",href:"https://forum.adguard.com/index.php?threads/14859/"},"pravidla f\xf3ra"),";")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte na ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/"},"GitHub")," a najd\u011bte vhodn\xfd repozit\xe1\u0159. Vytvo\u0159te tam nov\xfd probl\xe9m a podrobn\u011b popi\u0161te chybu nebo po\u017eadavek na funkci."))),(0,o.kt)("p",null,"Dv\u011b v\xfd\u0161e uveden\xe9 metody jsou nejvhodn\u011bj\u0161\xed, ale v p\u0159\xedpad\u011b pot\u0159eby m\u016f\u017eete pou\u017e\xedt i jin\xe9:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Najdete n\xe1s na r\u016fzn\xfdch platform\xe1ch soci\xe1ln\xedch m\xe9di\xed, nap\u0159. ",(0,o.kt)("a",{parentName:"p",href:"https://www.facebook.com/AdguardEn/"},"Facebook"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/Adguard/"},"Reddit")," atd. To v\u0161ak nen\xed nejefektivn\u011bj\u0161\xed zp\u016fsob, jak diskutovat o technick\xfdch z\xe1le\u017eitostech.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Po\u0161lete e-mail na\u0161emu t\xfdmu podpory z karty Podpora v aplikaci nebo napi\u0161te p\u0159\xedmo na adresu ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))),(0,o.kt)("h2",{id:"ios"},"Jak aktivovat kl\xed\u010d pro beta verzi v aplikaci pro iOS"),(0,o.kt)("p",null,"Pokud jste ji\u017e obdr\u017eeli kl\xed\u010d pro beta verzi a je uveden ve va\u0161em \xfa\u010dtu ",(0,o.kt)("inlineCode",{parentName:"p"},"adguard.com"),", p\u0159ejd\u011bte do aplikace a otev\u0159ete \u010d\xe1st s licenc\xed (Z\xedskat Premium). Tam zadejte p\u0159ihla\u0161ovac\xed \xfadaje z AdGuard \xfa\u010dtu. Pot\xe9 se automaticky zp\u0159\xedstupn\xed pr\xe9miov\xe9 funkce."),(0,o.kt)("h3",{id:"co-je\u0161t\u011b"},"Co je\u0161t\u011b?"),(0,o.kt)("p",null,"V\xedc k tomu nen\xed t\u0159eba dod\xe1vat. P\u0159i hled\xe1n\xed chyb se nemus\xedte nijak zdr\u017eovat. AdGuard m\u016f\u017eete nad\xe1le pou\u017e\xedvat jako obvykle. Pokud v\u0161ak naraz\xedte na chybu, nahlaste ji. Samoz\u0159ejm\u011b ocen\xedme jakoukoli dodate\u010dnou snahu a/nebo dodate\u010dnou aktivitu na f\xf3ru atd."),(0,o.kt)("p",null,"P\u0159\xedle\u017eitostn\u011b budete dost\xe1vat na\u0161e informa\u010dn\xed bulletiny, kter\xe9 v\xe1s budou informovat o nejnov\u011bj\u0161\xedch zm\u011bn\xe1ch v beta verzi (pokud jste je p\u0159ehl\xe9dli) a dal\u0161\xedch d\u016fle\u017eit\xfdch novink\xe1ch. M\u016f\u017eete se kdykoliv odhl\xe1sit z odb\u011bru."))}c.isMDXComponent=!0}}]);