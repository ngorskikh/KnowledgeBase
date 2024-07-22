"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7737],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),v=s(n),m=o,k=v["".concat(p,".").concat(m)]||v[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(4137));const r={title:"DNS ochrana",sidebar_position:2},i=void 0,l={unversionedId:"adguard-for-ios/features/dns-protection",id:"adguard-for-ios/features/dns-protection",title:"DNS ochrana",description:"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, st\xe1hn\u011bte si AdGuard pro Android",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-ios/features/dns-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/dns-protection",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/dns-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/dns-protection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"DNS ochrana",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ochrana Safari",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/safari-protection"},next:{title:"Pokro\u010dil\xe1 ochrana",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/advanced-protection"}},p={},s=[{value:"Implementace DNS",id:"dns-implementation",level:3},{value:"DNS servery",id:"dns-servers",level:3},{value:"Z\xe1kladn\xed ov\u011b\u0159ov\xe1n\xed HTTP pro DNS-over-HTTPS",id:"z\xe1kladn\xed-ov\u011b\u0159ov\xe1n\xed-http-pro-dns-over-https",level:4},{value:"Nastaven\xed s\xedt\u011b",id:"network-settings",level:3},{value:"DNS filtrov\xe1n\xed",id:"dns-filtering",level:3},{value:"DNS filtry",id:"dns-filters",level:4},{value:"Seznam povolen\xfdch a seznam zak\xe1zan\xfdch",id:"allowlist-blocklist",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si AdGuard pro Android"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering/"},"Modul DNS ochrana")," zvy\u0161uje va\u0161e soukrom\xed \u0161ifrov\xe1n\xedm va\u0161eho provozu DNS. Na rozd\xedl od blokov\xe1n\xed obsahu v Safari funguje DNS ochrana v cel\xe9m syst\xe9mu, tj. i mimo Safari, v aplikac\xedch a dal\u0161\xedch prohl\xed\u017ee\u010d\xedch. P\u0159ed pou\u017eit\xedm tohoto modulu jej mus\xedte povolit. M\u016f\u017eete to ud\u011blat na domovsk\xe9 obrazovce klepnut\xedm na ikonu \u0161t\xedtu v horn\xed \u010d\xe1sti obrazovky nebo p\u0159echodem na kartu ",(0,o.kt)("em",{parentName:"p"},"Ochrana")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"DNS ochrana"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Aby bylo mo\u017en\xe9 spravovat nastaven\xed DNS, vy\u017eaduj\xed aplikace AdGuardu vytvo\u0159en\xed lok\xe1ln\xed VPN. Provoz nebude sm\u011brov\xe1n p\u0159es \u017e\xe1dn\xe9 vzd\xe1len\xe9 servery. P\u0159esto v\xe1s syst\xe9m po\u017e\xe1d\xe1 o potvrzen\xed opr\xe1vn\u011bn\xed k p\u0159\xedstupu.")),(0,o.kt)("h3",{id:"dns-implementation"},"Implementace DNS"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg",alt:"DNS implementation screen *mobile_border"})),(0,o.kt)("p",null,"Tato \u010d\xe1st m\xe1 dv\u011b mo\u017enosti: AdGuard a Nativn\xed implementace. V podstat\u011b se jedn\xe1 o dva zp\u016fsoby nastaven\xed DNS."),(0,o.kt)("p",null,"V nativn\xed implementaci se o DNS star\xe1 syst\xe9m, nikoli aplikace. To znamen\xe1, \u017ee AdGuard nemus\xed vytv\xe1\u0159et lok\xe1ln\xed VPN. Bohu\u017eel v\xe1m to nepom\u016f\u017ee obej\xedt syst\xe9mov\xe1 omezen\xed a pou\u017e\xedvat AdGuard spolu s jin\xfdmi aplikacemi zalo\u017een\xfdmi na VPN \u2014 pokud je povolena jak\xe1koli VPN, nativn\xed DNS je ignorov\xe1n. V d\u016fsledku toho nebudete moci filtrovat provoz lok\xe1ln\u011b ani pou\u017e\xedvat n\xe1\u0161 zbrusu nov\xfd protokol ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/dns-over-quic.html"},"DNS-over-QUIC (DoQ)"),"."),(0,o.kt)("h3",{id:"dns-servers"},"DNS servery"),(0,o.kt)("p",null,"Dal\u0161\xed \u010d\xe1st, kter\xe1 se zobraz\xed na obrazovce Ochrana DNS, je DNS server. Zobrazuje aktu\xe1ln\u011b vybran\xfd DNS server a typ \u0161ifrov\xe1n\xed. Chcete-li n\u011bkter\xfd z nich zm\u011bnit, klepn\u011bte na tla\u010d\xedtko a p\u0159ejd\u011bte na obrazovku DNS serveru."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg",alt:"DNS servers *mobile_border"})),(0,o.kt)("p",null,"Servery se li\u0161\xed rychlost\xed, pou\u017eit\xfdm protokolem, d\u016fv\u011bryhodnost\xed, z\xe1sadami protokolov\xe1n\xed atd. Ve v\xfdchoz\xedm nastaven\xed nab\xeddne AdGuard n\u011bkolik DNS server\u016f z t\u011bch nejobl\xedben\u011bj\u0161\xedch (v\u010detn\u011b AdGuard DNS). Klepnut\xedm na libovoln\xfd server zm\u011bn\xedte typ \u0161ifrov\xe1n\xed (pokud takovou mo\u017enost vlastn\xedk serveru poskytuje) nebo zobraz\xedte domovskou str\xe1nku serveru. P\u0159idali jsme \u0161t\xedtky jako ",(0,o.kt)("inlineCode",{parentName:"p"},"Bez zaznamen\xe1v\xe1n\xed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Blokov\xe1n\xed reklam"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Zabezpe\u010den\xed"),", abychom v\xe1m usnadnili v\xfdb\u011br."),(0,o.kt)("p",null,"V doln\xed \u010d\xe1sti obrazovky je nav\xedc mo\u017enost p\u0159idat vlastn\xed DNS server. Podporuje b\u011b\u017en\xe9 servery, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC."),(0,o.kt)("h4",{id:"z\xe1kladn\xed-ov\u011b\u0159ov\xe1n\xed-http-pro-dns-over-https"},"Z\xe1kladn\xed ov\u011b\u0159ov\xe1n\xed HTTP pro DNS-over-HTTPS"),(0,o.kt)("p",null,"Tato funkce p\u0159in\xe1\u0161\xed mo\u017enosti ov\u011b\u0159ov\xe1n\xed protokolu HTTP do DNS, kter\xe1 nem\xe1 vestav\u011bn\xe9 ov\u011b\u0159ov\xe1n\xed. Ov\u011b\u0159ov\xe1n\xed v DNS je u\u017eite\u010dn\xe9, pokud chcete omezit p\u0159\xedstup k vlastn\xedmu DNS serveru na konkr\xe9tn\xed u\u017eivatele."),(0,o.kt)("p",null,"Chcete-li tuto funkci povolit:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"V AdGuard DNS p\u0159ejd\u011bte do ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed serveru")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"Za\u0159\xedzen\xed")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"Nastaven\xed")," a zm\u011b\u0148te DNS server na server s ov\u011b\u0159ov\xe1n\xedm. Kliknut\xedm na ",(0,o.kt)("em",{parentName:"li"},"Zam\xedtnout dal\u0161\xed protokoly")," odeberete dal\u0161\xed mo\u017enosti pou\u017eit\xed protokolu, ponech\xe1te zapnut\xe9 pouze ov\u011b\u0159ov\xe1n\xed DNS-over-HTTPS a zabr\xe1n\xedte jeho pou\u017eit\xed t\u0159et\xedmi stranami. Zkop\xedrujte vygenerovanou adresu.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png",alt:"DNS-over-HTTPS with authentication"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"V AdGuard pro iOS p\u0159ejd\u011bte na ",(0,o.kt)("em",{parentName:"li"},"Ochrana")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS ochrana")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS server")," a vlo\u017ete vygenerovanou adresu do pole ",(0,o.kt)("em",{parentName:"li"},"P\u0159idat vlastn\xed DNS server"),". Ulo\u017ete a vyberte novou konfiguraci.")),(0,o.kt)("p",null,"Chcete-li zkontrolovat, zda je v\u0161e spr\xe1vn\u011b nastaveno, nav\u0161tivte na\u0161i ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/en/test.html"},"str\xe1nku diagnostiky"),"."),(0,o.kt)("h3",{id:"network-settings"},"Nastaven\xed s\xedt\u011b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg",alt:"Network settings screen *mobile_border"})),(0,o.kt)("p",null,"U\u017eivatel\xe9 mohou na obrazovce Nastaven\xed s\xedt\u011b tak\xe9 \u0159e\u0161it zabezpe\u010den\xed DNS. ",(0,o.kt)("em",{parentName:"p"},"Filtrov\xe1n\xed mobiln\xedch dat")," a ",(0,o.kt)("em",{parentName:"p"},"Filtrov\xe1n\xed Wi-Fi")," povoluj\xed nebo zakazuj\xed DNS ochranu pro p\u0159\xedslu\u0161n\xe9 typy s\xedt\xed. D\xe1le ve ",(0,o.kt)("em",{parentName:"p"},"v\xfdjimk\xe1ch Wi-Fi")," m\u016f\u017eete vylou\u010dit konkr\xe9tn\xed s\xedt\u011b Wi-Fi z ochrany DNS (m\u016f\u017eete nap\u0159\xedklad cht\xedt vylou\u010dit svou dom\xe1c\xed s\xed\u0165, pokud pou\u017e\xedv\xe1te ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-home/overview.html"},"AdGuard Home"),")."),(0,o.kt)("h3",{id:"dns-filtering"},"DNS filtrov\xe1n\xed"),(0,o.kt)("p",null,"DNS filtrov\xe1n\xed umo\u017e\u0148uje p\u0159izp\u016fsobit provoz DNS povolen\xedm filtru AdGuard DNS, p\u0159id\xe1n\xedm vlastn\xedch filtr\u016f DNS a pou\u017eit\xedm seznamu zak\xe1zan\xe1ch/povolen\xfdch DNS."),(0,o.kt)("p",null,"Jak z\xedskat p\u0159\xedstup:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ochrana")," (ikona \u0161t\xedtu v doln\xed li\u0161t\u011b menu) \u2192 ",(0,o.kt)("em",{parentName:"p"},"DNS ochrana")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"DNS filtrov\xe1n\xed")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg",alt:"DNS filtering screen *mobile_border"})),(0,o.kt)("h4",{id:"dns-filters"},"DNS filtry"),(0,o.kt)("p",null,"Podobn\u011b jako filtry v prohl\xed\u017ee\u010di Safari jsou DNS filtry sadami pravidel zapsan\xfdch podle speci\xe1ln\xed ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-filtering-syntax/"},"syntaxe"),". AdGuard bude monitorovat provoz DNS a blokovat po\u017eadavky, kter\xe9 odpov\xeddaj\xed jednomu nebo v\xedce pravidl\u016fm. M\u016f\u017eete pou\u017e\xedt filtry, jako je ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardSDNSFilter"},"filtr AdGuard DNS"),", nebo p\u0159idat soubory hostitel\u016f jako filtry. Lze p\u0159id\xe1vat v\xedce filtr\u016f sou\u010dasn\u011b. Chcete-li v\u011bd\u011bt, jak na to, seznamte se s ",(0,o.kt)("a",{parentName:"p",href:"adguard-for-ios/solving-problems/system-wide-filtering"},"touto vy\u010derp\xe1vaj\xedc\xed p\u0159\xedru\u010dkou"),"."),(0,o.kt)("h4",{id:"allowlist-blocklist"},"Seznam povolen\xfdch a seznam zak\xe1zan\xfdch"),(0,o.kt)("p",null,"Krom\u011b DNS filtr\u016f m\u016f\u017eete filtrov\xe1n\xed DNS c\xedlen\u011b ovlivnit p\u0159id\xe1n\xedm jednotliv\xfdch dom\xe9n do seznamu zak\xe1zan\xfdch nebo do seznamu povolen\xfdch. Seznam zak\xe1zan\xfdch dokonce podporuje stejnou syntaxi DNS a oba tyto seznamy lze importovat a exportovat, stejn\u011b jako seznam povolen\xfdch v aplikaci Safari pro blokov\xe1n\xed obsahu."))}u.isMDXComponent=!0}}]);