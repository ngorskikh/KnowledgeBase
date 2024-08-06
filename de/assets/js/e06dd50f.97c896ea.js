"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3542],{4137:(e,n,i)=>{i.d(n,{Zo:()=>g,kt:()=>c});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var u=r.createContext({}),s=function(e){var n=r.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},g=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,g=d(e,["components","mdxType","originalType","parentName"]),k=s(i),c=t,h=k["".concat(u,".").concat(c)]||k[c]||o[c]||l;return i?r.createElement(h,a(a({ref:n},g),{},{components:i})):r.createElement(h,a({ref:n},g))}));function c(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,a=new Array(l);a[0]=k;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:t,a[1]=d;for(var s=2;s<l;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}k.displayName="MDXCreateElement"},76:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=i(7462),t=(i(7294),i(4137));const l={title:"Filterrichtlinie von AdGuard",sidebar_position:6},a=void 0,d={unversionedId:"general/ad-filtering/filter-policy",id:"general/ad-filtering/filter-policy",title:"Filterrichtlinie von AdGuard",description:"Bei AdGuard folgen wir seit langem bestimmten Grunds\xe4tzen bei der Erstellung unserer Filter, die zusammen mit den Filterbeschreibungen unten als Teil unserer Filterrichtlinien aufgef\xfchrt sind.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/general/ad-filtering/filter-policy.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/filter-policy",permalink:"/KnowledgeBase/de/general/ad-filtering/filter-policy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/filter-policy.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Filterrichtlinie von AdGuard",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to create your own ad filters",permalink:"/KnowledgeBase/de/general/ad-filtering/create-own-filters"},next:{title:"What is HTTPS filtering",permalink:"/KnowledgeBase/de/general/https-filtering/what-is-https-filtering"}},u={},s=[{value:"Gemeinsame Kriterien",id:"gemeinsame-kriterien",level:2},{value:"Werbeblockierung",id:"werbeblockierung",level:2},{value:"Begriffe",id:"begriffe",level:3},{value:"Filter",id:"filter",level:3},{value:"Der Zweck dieser Filter",id:"der-zweck-dieser-filter",level:3},{value:"Beschr\xe4nkungen und Ausnahmen",id:"beschr\xe4nkungen-und-ausnahmen",level:3},{value:"Tracking-Schutzfilter",id:"tracking-schutzfilter",level:2},{value:"Begriffe",id:"begriffe-1",level:3},{value:"Filter",id:"filter-1",level:3},{value:"Der Zweck dieser Filter",id:"der-zweck-dieser-filter-1",level:3},{value:"Beschr\xe4nkungen und Ausnahmen",id:"beschr\xe4nkungen-und-ausnahmen-1",level:3},{value:"Bel\xe4stigungsfilter",id:"bel\xe4stigungsfilter",level:2},{value:"Begriffe",id:"begriffe-2",level:3},{value:"Filter",id:"filter-2",level:3},{value:"Der Zweck dieser Filter",id:"der-zweck-dieser-filter-2",level:3},{value:"AdGuard Cookie-Hinweise-Filter",id:"adguard-cookie-hinweise-filter",level:4},{value:"AdGuard Pop-up-Filter",id:"adguard-pop-up-filter",level:4},{value:"AdGuard-Filter gegen Mobile-App-Banner",id:"adguard-filter-gegen-mobile-app-banner",level:4},{value:"AdGuard Widgets-Filter",id:"adguard-widgets-filter",level:4},{value:"AdGuard-Filter gegen andere Bel\xe4stigungen",id:"adguard-filter-gegen-andere-bel\xe4stigungen",level:4},{value:"Social-Media-Filter",id:"social-media-filter",level:2},{value:"Filter",id:"filter-3",level:3},{value:"Der Zweck dieser Filter",id:"der-zweck-dieser-filter-3",level:3},{value:"Beschr\xe4nkungen und Ausnahmen",id:"beschr\xe4nkungen-und-ausnahmen-2",level:3},{value:"Sonstiges",id:"sonstiges",level:2},{value:"Begriffe",id:"begriffe-3",level:3},{value:"Filter",id:"filter-4",level:3},{value:"Der Zweck dieser Filter",id:"der-zweck-dieser-filter-4",level:3},{value:"Filter zum Anzeigen von n\xfctzlicher Werbung",id:"filter-zum-anzeigen-von-n\xfctzlicher-werbung",level:4},{value:"AdGuard DNS-Filter",id:"adguard-dns-filter",level:4},{value:"AdGuard Experimenteller Filter",id:"adguard-experimenteller-filter",level:4}],g={toc:s};function o(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,r.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Bei AdGuard folgen wir seit langem bestimmten Grunds\xe4tzen bei der Erstellung unserer Filter, die zusammen mit den Filterbeschreibungen unten als Teil unserer Filterrichtlinien aufgef\xfchrt sind."),(0,t.kt)("h2",{id:"gemeinsame-kriterien"},"Gemeinsame Kriterien"),(0,t.kt)("p",null,"Diese Kriterien gelten gleicherma\xdfen f\xfcr die Regeln aller Filter."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Regeln f\xfcr eine bestimmte Website werden nur hinzugef\xfcgt, wenn gen\xfcgend Traffic vorhanden ist. Der Traffic wird anhand \xf6ffentlicher Statistiken (sofern verf\xfcgbar) oder indirekter Indikatoren wie der Anzahl der Abonnenten in sozialen Netzwerken ermittelt. Der Traffic einer Website gilt als ausreichend, wenn er 100.000 Besuche pro Monat erreicht. Wir werden erw\xe4gen, eine Regel f\xfcr eine weniger beliebte Seite hinzuzuf\xfcgen, aber die endg\xfcltige Entscheidung liegt bei den Filterentwickler:innen. Websites mit geringem Traffic sollten dennoch auf Analyse- und Werbenetzwerke von Drittanbietern \xfcberpr\xfcft werden"),(0,t.kt)("li",{parentName:"ul"},"Die Entscheidung \xfcber Content-Farmen (Websites, die gro\xdfe Mengen an Inhalten produzieren, die in erster Linie darauf abzielen, eine hohe Sichtbarkeit in den Suchergebnissen zu erreichen und Werbeeinnahmen zu generieren) wird von den Filterentwickler:innen in Abh\xe4ngigkeit von der Qualit\xe4t der Inhalte getroffen")),(0,t.kt)("p",null,"Qualit\xe4tsanforderungen f\xfcr Filterregeln:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Regeln d\xfcrfen sich nicht negativ auf die Leistung der Websites auswirken"),(0,t.kt)("li",{parentName:"ul"},"Die Entsperrungsregeln m\xfcssen so spezifisch wie m\xf6glich sein, um unn\xf6tige Entsperrungen zu vermeiden"),(0,t.kt)("li",{parentName:"ul"},"JavaScript-Regeln sollten so sparsam wie m\xf6glich und nur dann eingesetzt werden, wenn das Blockieren von Werbung ohne sie nicht m\xf6glich ist")),(0,t.kt)("h2",{id:"werbeblockierung"},"Werbeblockierung"),(0,t.kt)("h3",{id:"begriffe"},"Begriffe"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Werbeblocker")," ist ein Software- oder Hardware-Tool zum Filtern, Ausblenden oder Blockieren von Werbung und anderen Elementen auf Webseiten. Werbeblocker wurden entwickelt, um die Benutzerfreundlichkeit zu verbessern, die Ladezeiten von Seiten zu verk\xfcrzen, den Internetverkehr zu verringern, Werbung und st\xf6rende Elemente zu blockieren und den Datenschutz beim Surfen auf Websites und bei der Nutzung von Apps zu verbessern."),(0,t.kt)("p",null,"Ein ",(0,t.kt)("strong",{parentName:"p"},"Filter")," (oder eine ",(0,t.kt)("strong",{parentName:"p"},"Filterliste"),") ist ein Satz von Filterregeln, der dazu dient, Inhalte zu filtern und verschiedene Arten von Werbung zu blockieren. Diese Filter arbeiten normalerweise auf der Ebene des Webbrowsers, der Programme oder des DNS-Servers."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Anti-Adblock")," ist eine Technologie, die von Websites oder Apps eingesetzt wird, um das Blockieren von Werbung zu erkennen und auf verschiedene Weise darauf zu reagieren: Nachverfolgung, Wiedereinblendung der Werbung, Aufforderung zur Deaktivierung des Werbeblockers (sog. \u201eAdblock-Walls\u201c). Es gibt verschiedene Arten von Anti-Adblocks:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Anti-Adblock, der den Inhalt der Website blockiert, ohne eine Alternative anzubieten: Um die Website weiter nutzen zu k\xf6nnen, muss der Werbeblocker auf der Website deaktiviert werden"),(0,t.kt)("li",{parentName:"ul"},"\u201eAnti-Adblock-Wall\u201c mit alternativen Optionen, wie z. B. dem Kauf eines Abonnements, um den Werbeblocker weiterhin nutzen zu k\xf6nnen"),(0,t.kt)("li",{parentName:"ul"},"Informationsmeldungen, die nicht zum Handeln verpflichten: Die Nutzer:innen werden aufgefordert, den Werbeblocker zu deaktivieren, aber diese Meldungen k\xf6nnen geschlossen werden, so dass die Nutzer:innen die Website weiterhin ohne Einschr\xe4nkungen nutzen k\xf6nnen"),(0,t.kt)("li",{parentName:"ul"},"Implementierung von alternativer Werbung als Reaktion auf die Nutzung von Werbeblockern: Websites f\xfchren alternative Werbung ein, wenn Werbeblocker erkannt werden"),(0,t.kt)("li",{parentName:"ul"},"Paywall: eine Methode zur Monetarisierung von Inhalten, bei der die Inhalte teilweise oder vollst\xe4ndig vor den Nutzer:innen verborgen werden, mit einer Meldung, die sie auffordert, ein Abonnement f\xfcr den Zugriff zu erwerben")),(0,t.kt)("h3",{id:"filter"},"Filter"),(0,t.kt)("p",null,"AdGuard-Filter zum Blockieren von Werbung umfassen:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AdGuard Basisfilter"),(0,t.kt)("li",{parentName:"ul"},"AdGuard-Filter gegen mobile Werbung"),(0,t.kt)("li",{parentName:"ul"},"Regionale Filter nach Sprachprinzip \u2014 Chinesisch, Niederl\xe4ndisch, Franz\xf6sisch, Deutsch, Japanisch, Russisch, Spanisch/Portugiesisch, T\xfcrkisch, und Ukrainisch")),(0,t.kt)("h3",{id:"der-zweck-dieser-filter"},"Der Zweck dieser Filter"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Der Basisfilter")," blockiert Werbung auf englischsprachigen Websites und solchen, f\xfcr die es keinen eigenen Filter gibt. Er enth\xe4lt auch allgemeine Filterregeln, die f\xfcr alle Websites unabh\xe4ngig von der Sprache gelten"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Filter gegen mobile Werbung")," blockiert Werbung auf mobilen Versionen von Websites und in mobilen Apps. Es gibt keine Unterteilung nach Sprachen"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Sprachspezifische Filter")," folgen der gleichen Politik wie der ",(0,t.kt)("strong",{parentName:"li"},"Basisfilter"),", sind aber auf Websites in bestimmten Sprachen beschr\xe4nkt")),(0,t.kt)("p",null,"Das Ziel von Werbeblockern ist es, alle Arten von Werbung auf Websites, in Apps und auf bestimmten Ger\xe4ten, die Werbung aus dem Internet laden k\xf6nnen, zu blockieren:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Banner \u2014 Werbeanzeigen, die als Bilder in verschiedenen Bereichen von Webseiten angezeigt werden"),(0,t.kt)("li",{parentName:"ul"},"Teaser \u2014 textliche oder grafische, oft animierte Anzeigen, die die Besucher:innen neugierig machen sollen (sensationelle \xdcberschriften, aufmerksamkeitsstarke Bilder) und zum Anklicken des Banners verleiten (Clickbait)"),(0,t.kt)("li",{parentName:"ul"},"Textanzeigen \u2014 Werbung in Form von Text, einschlie\xdflich Links"),(0,t.kt)("li",{parentName:"ul"},"Modale Anzeigen \u2014 Werbung, die pl\xf6tzlich \xfcber dem aktuellen Inhalt in Form von modalen Fenstern angezeigt wird"),(0,t.kt)("li",{parentName:"ul"},"Popunders \u2014 Werbung, die sich in einem separaten Fenster unter dem aktuellen Fenster \xf6ffnet, wenn sie irgendwo auf der Seite angeklickt wird"),(0,t.kt)("li",{parentName:"ul"},"Umleitungswerbung (redirect advertising) \u2014 Mechanismen, die den Nutzer:innen nach dem Anklicken automatisch auf eine andere Website umleiten"),(0,t.kt)("li",{parentName:"ul"},"Als Website-Inhalte getarnte Werbung, die beim Anklicken Seiten mit beworbenen Produkten oder nicht verwandten Inhalten \xf6ffnet"),(0,t.kt)("li",{parentName:"ul"},"Videoanzeigen \u2014 Werbevideos, die in Videoinhalte oder in separate Werbeelemente auf Websites und in Apps eingebettet sind"),(0,t.kt)("li",{parentName:"ul"},"Interaktive Anzeigen \u2014 Werbung, mit der die Nutzer:innen interagieren k\xf6nnen (z. B. Spiele und Umfragen, nach deren Beendigung sich das beworbene Objekt \xf6ffnet)"),(0,t.kt)("li",{parentName:"ul"},"Interstitial-Anzeigen \u2014 bildschirmf\xfcllende Werbung auf mobilen Ger\xe4ten, die die Oberfl\xe4che der App oder des Webbrowsers verdeckt"),(0,t.kt)("li",{parentName:"ul"},"Anzeigenreste, die gro\xdfe Fl\xe4chen einnehmen oder sich deutlich von ihrem Hintergrund abheben und die Aufmerksamkeit der Besucher:innen auf sich ziehen (au\xdfer kaum erkennbaren oder unauff\xe4lligen)"),(0,t.kt)("li",{parentName:"ul"},"Anti-Adblock-Werbung \u2014 alternative Werbung, die auf der Website angezeigt wird, wenn die Hauptwerbung blockiert ist"),(0,t.kt)("li",{parentName:"ul"},"K\xf6derelemente, die von mehreren bekannten Adblock-Erkennungsskripten verwendet werden, um das Vorhandensein eines Werbeblockers f\xfcr verschiedene Ziele zu erkennen, einschlie\xdflich der \xc4nderung der Art und Weise, wie Werbung angezeigt wird, Fingerprinting usw."),(0,t.kt)("li",{parentName:"ul"},"Website-eigene Werbung, wenn sie durch allgemeine Filterregeln gesperrt wurde (siehe ",(0,t.kt)("em",{parentName:"li"},"Beschr\xe4nkungen und Ausnahmen"),")"),(0,t.kt)("li",{parentName:"ul"},"Anti-Adblock-Skripte, die die Nutzung der Website verhindern (siehe ",(0,t.kt)("em",{parentName:"li"},"Beschr\xe4nkungen und Ausnahmen"),")"),(0,t.kt)("li",{parentName:"ul"},"Werbung, die durch Malware eingeschleust wird, wenn detaillierte Informationen \xfcber die Art des Ladens oder die Schritte zur Reproduktion bereitgestellt werden"),(0,t.kt)("li",{parentName:"ul"},"Unerw\xfcnschtes Mining \u2014 Skripte, die ohne Zustimmung der Nutzer:innen Kryptow\xe4hrungen sch\xfcrfen")),(0,t.kt)("h3",{id:"beschr\xe4nkungen-und-ausnahmen"},"Beschr\xe4nkungen und Ausnahmen"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Website-eigene Werbung sollte nicht bewusst gesperrt werden. Sie sollte jedoch nicht entsperrt werden, wenn das Sperren auf allgemeine Filterregeln zur\xfcckzuf\xfchren ist"),(0,t.kt)("li",{parentName:"ul"},"Ma\xdfnahmen zum Zugriff auf Inhalte wie Paywalls werden nicht gesperrt"),(0,t.kt)("li",{parentName:"ul"},"In folgenden F\xe4llen werden die Anti-Adblock-Walls blockiert:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Sie bestehen aggressiv auf der Deaktivierung oder Entfernung des Werbeblockers oder verhindern effektiv die Nutzung der Website"),(0,t.kt)("li",{parentName:"ul"},"Sie enthalten falsche und irref\xfchrende Beschreibungen der m\xf6glichen Folgen der Verwendung von Werbeblockern"),(0,t.kt)("li",{parentName:"ul"},"Sie setzen Besucher:innen dem Risiko von Malware aus \u2014 wenn nicht gesperrte Werbung aus dubiosen Quellen stammt"))),(0,t.kt)("li",{parentName:"ul"},"Es werden keine Werbeblocker-Erkennungsmeldungen blockiert, die mindestens eines der folgenden Kriterien erf\xfcllen:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Sie erm\xf6glichen die Nutzung der Website und \xfcberlagern nicht die gro\xdfe Menge an Inhalten"),(0,t.kt)("li",{parentName:"ul"},"Sie bieten eine Alternative zum Deaktivieren eines Werbeblockers, da diese Alternative weder die Privatsph\xe4re noch die Sicherheit der Nutzer:innen gef\xe4hrdet"),(0,t.kt)("li",{parentName:"ul"},"Sie erm\xf6glichen den Zugang zum Inhalt der Website oder bieten einen praktikablen Gegenwert, der die Privatsph\xe4re oder Sicherheit der Nutzer:innen nicht gef\xe4hrdet"),(0,t.kt)("li",{parentName:"ul"},"Einige \xe4ltere Regeln k\xf6nnen weiterhin Meldungen blockieren, die eines oder mehrere dieser Kriterien erf\xfcllen. Wenn solche Regeln identifiziert werden, werden sie gem\xe4\xdf dieser Richtlinie behandelt"))),(0,t.kt)("li",{parentName:"ul"},"Mining-Pools werden nicht blockiert, wenn sie \xf6ffentlich sind und nicht ausschlie\xdflich zu b\xf6swilligen Zwecken genutzt werden")),(0,t.kt)("h2",{id:"tracking-schutzfilter"},"Tracking-Schutzfilter"),(0,t.kt)("h3",{id:"begriffe-1"},"Begriffe"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Tracking")," \u2014 der Prozess der \xdcberwachung und Sammlung von Daten \xfcber Nutzer:innen und ihre Interaktionen mit Websites und Apps zu Marketingzwecken sowie zur Sammlung von Telemetriedaten \xfcber das Funktionieren von Websites oder Apps zum Zwecke der Analyse ihrer Funktionsweise. Dieser Prozess umfasst die Nachverfolgung der besuchten Seiten, der Verweildauer, der Interaktion mit Website-Elementen (z. B. Klicks, Eingaben in Formulare) und anderer Metriken. Tracking (Nachverfolgung) erm\xf6glicht es den Betreibern von Websites und Apps, das Nutzerverhalten besser zu verstehen, die Funktionalit\xe4t zu optimieren und Marketingstrategien anzupassen. Die Nachverfolgung dient auch dazu, die Leistung und die Nutzungsmuster zu \xfcberwachen und Probleme zu erkennen, damit die Entwickler die notwendigen Daten erhalten, um die Stabilit\xe4t und Qualit\xe4t der Website oder App zu verbessern. Auch wenn die gewonnenen Daten keinen R\xfcckschluss auf die Identit\xe4t einer Person zulassen, gelten solche Ma\xdfnahmen dennoch als Tracking."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Tracker")," \u2014 Software, die auf einer Website oder in einer App eingesetzt wird und dazu dient, Informationen \xfcber deren Funktion und die Aktionen der Besucher:innen zu sammeln. Sie verfolgt die Interaktion der Benutzer:innen mit der Website oder App und zeichnet Daten \xfcber Seitenaufrufe, Verweildauer, Klicks, Formular\xfcbertragungen und andere Ereignisse auf. Tracker dienen somit Website- und App-Betreibern als Tool zur Analyse des Nutzerverhaltens, zur Verbesserung der Nutzererfahrung und zur Optimierung von Inhalten und Werbung."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"URL-Tracking-Parameter")," \u2014 ein Teil der Adresse, der von Analysesystemen zu Links hinzugef\xfcgt wird oder in einigen Links auf Webseiten enthalten ist. Wenn eine Anfrage gestellt wird, kann dieser URL-Tracking-Parameter vom Backend eines Analysesystems oder einer Website verarbeitet werden, das daraus Informationen extrahiert. So k\xf6nnen beispielsweise URL-Tracking-Parameter Informationen \xfcber Klicks oder Werbekampagnen \xfcbermitteln. URL-Tracking-Parameter k\xf6nnen auch von Betrugsschutz- oder Bot-Erkennungssystemen verwendet werden."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Cookies")," \u2014 Dateien, die von Websites an Ger\xe4te gesendet und dort gespeichert werden. Diese Dateien enthalten verschiedene Informationen, die sowohl f\xfcr das Funktionieren der Website auf dem Ger\xe4t erforderlich sind als auch f\xfcr Analysezwecke verwendet werden: eindeutige Kennungen zur Verfolgung der Besucheraktivit\xe4ten auf der Website, Werbeparameter usw."),(0,t.kt)("h3",{id:"filter-1"},"Filter"),(0,t.kt)("p",null,"Die AdGuard-Filter zum Schutz vor Tracking enthalten:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AdGuard Tracking-Schutzfilter"),(0,t.kt)("li",{parentName:"ul"},"AdGuard URL-Tracking-Filter")),(0,t.kt)("h3",{id:"der-zweck-dieser-filter-1"},"Der Zweck dieser Filter"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Der Tracking-Schutzfilter")," wurde entwickelt, um Tracker zu blockieren, die pers\xf6nliche Daten der Nutzer:innen sammeln, und um die Privatsph\xe4re der Nutzer:innen zu verbessern."),(0,t.kt)("p",null,"Was genau wird durch diesen Filter blockiert?"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Skripte f\xfcr Analysesysteme"),(0,t.kt)("li",{parentName:"ul"},"Eigene Tracking-Skripte von Websites und Apps"),(0,t.kt)("li",{parentName:"ul"},"Maskierte CNAME-Tracker"),(0,t.kt)("li",{parentName:"ul"},"Tracking-Cookies"),(0,t.kt)("li",{parentName:"ul"},"Z\xe4hlpixel"),(0,t.kt)("li",{parentName:"ul"},"Tracking-APIs von Browsern"),(0,t.kt)("li",{parentName:"ul"},"Erkennung des Werbeblockers zu Trackingzwecken"),(0,t.kt)("li",{parentName:"ul"},"Datenschutz-Sandbox-Funktionalit\xe4t in Google Chrome und seine Ableger, die f\xfcr das Tracking verwendet werden (Google Topics API, Protected Audience API)")),(0,t.kt)("p",null,"Der ",(0,t.kt)("strong",{parentName:"p"},"URL-Tracking-Filter")," wurde entwickelt, um Tracking-Parameter aus Webadressen zu entfernen"),(0,t.kt)("h3",{id:"beschr\xe4nkungen-und-ausnahmen-1"},"Beschr\xe4nkungen und Ausnahmen"),(0,t.kt)("p",null,"Tracking-Schutzfilter sollten einen Tracker nicht blockieren, wenn dadurch das ordnungsgem\xe4\xdfe Funktionieren der Website beeintr\xe4chtigt w\xfcrde:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Anti-Bots und Schutz vor Betrug, wenn dies die Nutzung der Website beeintr\xe4chtigt. Zum Beispiel verursacht das Sperren mit PerimeterX oder hCaptcha Probleme, wenn die Website versucht, den Besucher mit einem Captcha zu verifizieren"),(0,t.kt)("li",{parentName:"ul"},"Fehlerverfolgungssysteme wie Sentry oder Bugsnag werden nicht blockiert")),(0,t.kt)("h2",{id:"bel\xe4stigungsfilter"},"Bel\xe4stigungsfilter"),(0,t.kt)("p",null,"Bel\xe4stigungsfilter zielen darauf ab, die Benutzerfreundlichkeit von Websites zu verbessern, indem sie Elemente auf Seiten blockieren, bei denen es sich nicht um Werbung handelt, die aber von der Interaktion mit der Website oder dem Konsum von Inhalten ablenken und diese st\xf6ren, z. B. verschiedene modale Fenster und interaktive Formulare, Cookie-Zustimmungsbenachrichtigungen und -Anfragen, Banner f\xfcr mobile Apps und verschiedene Widgets."),(0,t.kt)("h3",{id:"begriffe-2"},"Begriffe"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Cookie-Hinweis")," \u2014 ein Formular, das die Arten und Verwendung von Cookies auf einer Website beschreibt. Ein Cookie-Hinweis wird beim Besuch der Website angezeigt und informiert die Nutzer:innen dar\xfcber, dass die Website Cookies oder andere Tracking-Technologien verwendet, um personenbezogene Daten zu sammeln und zu nutzen, und erkl\xe4rt, warum und mit wem die gesammelten Daten geteilt werden."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"CMP (Consent Management Platform)")," \u2014 Software, die Websites bei der Einhaltung von Cookie-Nutzungsregeln unterst\xfctzt. CMPs schr\xe4nken die Verwendung von Cookies ein, bis die Zustimmung der Nutzer:innen vorliegt, und bieten den Nutzer:innen die M\xf6glichkeit, bestimmte Cookies zu akzeptieren und Datenschutzeinstellungen zu verwalten."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Widget")," \u2014 ein Element der Benutzeroberfl\xe4che, das die Funktionalit\xe4t einer Website erweitert. Web-Widgets werden in Webseiten integriert und k\xf6nnen interaktive Elemente wie Schaltfl\xe4chen, Formulare oder Banner enthalten. Sie k\xf6nnen den Nutzer:innen den Zugang zu bestimmten Diensten oder Inhalten erm\xf6glichen, ohne dass eine Navigation zu anderen Seiten erforderlich ist."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Pop-up")," \u2014 ein Fenster, das \xfcber der aktuellen Webseite angezeigt wird. Es dient dazu, zus\xe4tzliche Informationen, Werbung, Benachrichtigungen oder Dateneingabeformulare anzuzeigen. Pop-ups verdecken in der Regel den Blick auf den Hauptinhalt der Seite und erfordern eine Aktion, um sie zu schlie\xdfen, was l\xe4stig sein kann."),(0,t.kt)("h3",{id:"filter-2"},"Filter"),(0,t.kt)("p",null,"Zur besseren Anpassung sind die Bel\xe4stigungsfilter nach ihrem Zweck unterteilt:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AdGuard Cookie-Hinweise-Filter"),(0,t.kt)("li",{parentName:"ul"},"AdGuard Pop-up-Filter"),(0,t.kt)("li",{parentName:"ul"},"AdGuard-Filter gegen Mobile-App-Banner"),(0,t.kt)("li",{parentName:"ul"},"AdGuard Widgets-Filter"),(0,t.kt)("li",{parentName:"ul"},"AdGuard-Filter gegen andere Bel\xe4stigungen"),(0,t.kt)("li",{parentName:"ul"},"AdGuard Bel\xe4stigungsfilter \u2014 ein kombinierter Filter, der alle 5 speziellen Bel\xe4stigungsfilter enth\xe4lt")),(0,t.kt)("h3",{id:"der-zweck-dieser-filter-2"},"Der Zweck dieser Filter"),(0,t.kt)("h4",{id:"adguard-cookie-hinweise-filter"},"AdGuard Cookie-Hinweise-Filter"),(0,t.kt)("p",null,"Dieser Filter wurde entwickelt, um sowohl Cookie-Hinweise als auch Anfragen von Cookie-Verwaltungsplattformen (CMPs) zu sperren. F\xfcr Cookie-Hinweise und CMPs k\xf6nnen verschiedene Methoden angewandt werden. In den meisten F\xe4llen reicht es aus, die entsprechenden Skripte auszublenden oder zu sperren. Wenn jedoch die Funktionalit\xe4t der Website und die Anzeige von Inhalten Dritter die Zustimmung zu Cookies erfordern, werden die folgenden Methoden angewandt:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Scriptlets werden verwendet, um die Zustimmungsanfrage zu umgehen (praktisch nicht anwendbar auf Websites mit Beschr\xe4nkungen f\xfcr das Laden von Inhalten Dritter, bis eine Entscheidung getroffen wurde)"),(0,t.kt)("li",{parentName:"ul"},"Setzen eines Cookies oder Schl\xfcssels im lokalen Speicher der Website, so dass das Skript davon ausgeht, dass eine Wahl getroffen ist"),(0,t.kt)("li",{parentName:"ul"},"Simulation von Benutzeraktionen mit einer Regel, die eine bestimmte Schaltfl\xe4che anklickt und deren Ausf\xfchrung 10 Sekunden nach dem Laden unterbricht. Es bestehen zwei M\xf6glichkeiten:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Ablehnen (mit Ausnahme von funktionalen Cookies \u2014 je nach CMP-System) \u2014 die bevorzugte Option, da das Risiko, zus\xe4tzliche Analysetools zu laden, geringer ist"),(0,t.kt)("li",{parentName:"ul"},"Akzeptieren \u2014 diese Option wird als letztes Mittel verwendet, wenn andere Methoden fehlschlagen. In diesem Fall wird die Seite zus\xe4tzlich auf die Verwendung von Analysetools \xfcberpr\xfcft, die dann durch den ",(0,t.kt)("strong",{parentName:"li"},"AdGuard Tracking-Schutzfilter")," gesperrt werden")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("p",null,"In einigen F\xe4llen wird die Entscheidung, Regeln hinzuzuf\xfcgen, von den Filterentwicklern selbst getroffen. Meistens dann, wenn die bei der Simulation von Aktionen getroffene Wahl die Funktionalit\xe4t der Website beeintr\xe4chtigen w\xfcrde (z. B. k\xf6nnte die Verlaufsfunktion nicht funktionieren oder die Benutzereinstellungen w\xfcrden auf einer solchen Website nicht gespeichert)."),(0,t.kt)("h4",{id:"adguard-pop-up-filter"},"AdGuard Pop-up-Filter"),(0,t.kt)("p",null,"Dies ist ein Filter, der verschiedene Pop-ups auf Seiten blockiert, die f\xfcr die normale Nutzung der Website nicht notwendig sind. Dazu geh\xf6ren unter anderem folgende Pop-ups:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Anfragen f\xfcr die Genehmigung zum Empfang von Push-Benachrichtigungen"),(0,t.kt)("li",{parentName:"ul"},"Pop-ups und Formulare zum Abonnieren von Nachrichten, Werbeaktionen und verschiedenen Ereignissen, einschlie\xdflich der Kan\xe4le von Drittanbietern, \xfcber die sie empfangen werden k\xf6nnen (z. B. Google News, Telegram)"),(0,t.kt)("li",{parentName:"ul"},"Pop-ups, die die Privatsph\xe4re verletzen (nach Ermessen der Filterentwickler:innen) und die Nutzer:innen auffordern, den Werbeblocker zu deaktivieren"),(0,t.kt)("li",{parentName:"ul"},"Andere Arten von Pop-ups, die den Benutzer:innen st\xf6ren k\xf6nnen (im Ermessen der Filterentwickler:innen)")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Push-Benachrichtigungen werden nur auf Websites gesperrt, auf denen sie nicht f\xfcr praktische Zwecke verwendet werden. Beispielsweise werden solche Benachrichtigungen in E-Mail-Webclients oder Tools, die zu Arbeitszwecken verwendet werden, nicht gesperrt"),(0,t.kt)("li",{parentName:"ul"},"Einige Pop-ups, die nicht in die oben beschriebenen Kategorien fallen, aber dennoch die Benutzerfreundlichkeit beeintr\xe4chtigen, k\xf6nnen ebenfalls blockiert werden. Zum Beispiel Aufforderungen zur Registrierung auf einer Website oder Pop-ups, in denen die Funktionen der Website vorgestellt werden. Die Entscheidung wird von den Filterentwickler:innen getroffen"),(0,t.kt)("li",{parentName:"ul"},"Ma\xdfnahmen f\xfcr den Zugang zu Inhalten, bei denen der Nutzer f\xfcr den Zugang zum Inhalt bezahlen muss, d\xfcrfen nicht umgangen werden")),(0,t.kt)("h4",{id:"adguard-filter-gegen-mobile-app-banner"},"AdGuard-Filter gegen Mobile-App-Banner"),(0,t.kt)("p",null,"Dieser Filter blockiert Banner und Pop-ups, die Besucher:innen zur Installation mobiler Apps auffordern."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("p",null,"Banner in Website-Headern oder Website-Men\xfcs werden nicht blockiert, wenn sie nicht animiert sind und keinen wesentlichen Teil der Nutzfl\xe4che einnehmen. Die Entscheidung, ob ein Banner in der Fu\xdfzeile blockiert werden soll, wird von den Filterentwickler:innen von Fall zu Fall getroffen. In der Regel heben sich Banner in der Fu\xdfzeile nicht von anderen Elementen ab und sind nicht st\xf6rend."),(0,t.kt)("h4",{id:"adguard-widgets-filter"},"AdGuard Widgets-Filter"),(0,t.kt)("p",null,"Dies ist ein Filter, der verschiedene Widgets blockiert, die f\xfcr das Funktionieren der Website oder die Interaktion mit ihr nicht unbedingt erforderlich sind:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Widgets f\xfcr Inhaltsempfehlungen \u2014 verwandte Artikel, \xe4hnliche Websites, verschiedene personalisierte Empfehlungen"),(0,t.kt)("li",{parentName:"ul"},"Chat-Widgets, die nicht in den Inhalt integriert sind und nicht der Hauptinhalt der Seite sind"),(0,t.kt)("li",{parentName:"ul"},"Marketing-Widgets:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Chats f\xfcr die Kommunikation mit Assistenten oder Bots"),(0,t.kt)("li",{parentName:"ul"},"Widgets mit Produktempfehlungen, die den Nutzer:innen angezeigt werden"),(0,t.kt)("li",{parentName:"ul"},"Formulare f\xfcr R\xfcckrufe"))),(0,t.kt)("li",{parentName:"ul"},"Andere Widgets, die keiner eigenen Kategorie zugeordnet sind, aber die Seite optisch un\xfcbersichtlich machen k\xf6nnen: Wetter-Widgets, Wechselkurse, Stellenanzeigen und Spenden")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("p",null,"Was wird nicht blockiert?"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Widgets, die in engem Zusammenhang mit dem Inhalt der Seite stehen, z. B. Kommentarbereiche, Live-Chat-Streams, mit Ausnahme von unmoderierten Chats auf Websites mit inoffiziellen Streams, die oft mit Spam und \xe4hnlichen Inhalten gef\xfcllt sind"),(0,t.kt)("li",{parentName:"ul"},"Widgets f\xfcr Eigenwerbung und standortspezifische Werbema\xdfnahmen"),(0,t.kt)("li",{parentName:"ul"},"Spenden-Widgets, au\xdfer in den F\xe4llen, in denen sie einen gro\xdfen Teil der Seite einnehmen und sich deutlich vom Inhalt abheben. Die Entscheidung \xfcber die Blockierung wird von den Filterentwickler:innen getroffen")),(0,t.kt)("h4",{id:"adguard-filter-gegen-andere-bel\xe4stigungen"},"AdGuard-Filter gegen andere Bel\xe4stigungen"),(0,t.kt)("p",null,"Dieser Filter wurde entwickelt, um st\xf6rende Elemente zu blockieren, die in anderen Filtern nicht enthalten sind, und um verschiedene Optimierungen vorzunehmen. Er wird f\xfcr folgende Zwecke ben\xf6tigt:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Sperren von Eigenwerbung auf Websites (jede Art von Werbung f\xfcr Waren oder Dienstleistungen, die dem Eigent\xfcmer der Website geh\xf6ren, ohne dass er eine kommerzielle Verg\xfctung von einem Dritten erh\xe4lt), wenn sie als st\xf6rendes Element empfunden wird"),(0,t.kt)("li",{parentName:"ul"},"Sperren von st\xf6renden Elementen, die nicht in anderen Kategorien enthalten sind"),(0,t.kt)("li",{parentName:"ul"},"Entsperren von Aktionen auf der Seite, wie z. B. \xd6ffnen des Kontextmen\xfcs, Ausw\xe4hlen und Kopieren von Text, wenn diese gesperrt sind"),(0,t.kt)("li",{parentName:"ul"},"Beschleunigung von Countdown-Timern beim Laden von Dateien von Websites, wenn die Pr\xfcfung nicht vom Server gesteuert wird oder nicht behindert wird"),(0,t.kt)("li",{parentName:"ul"},"Anwendung verschiedener Regeln, die f\xfcr Filterentwickler:innen n\xfctzlich sein k\xf6nnen, zum Beispiel das Sperren der Web-Debugger-Erkennung")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("p",null,"Dieser Filter kann Regeln enthalten, die nicht f\xfcr alle Benutzer:innen geeignet sind. Manchmal ist es empfehlenswert, diesen Filter zu deaktivieren. Die Entscheidung, diesem Filter Regeln hinzuzuf\xfcgen, wird von den Filterentwickler:innen f\xfcr jede einzelne Regel getroffen."),(0,t.kt)("h2",{id:"social-media-filter"},"Social-Media-Filter"),(0,t.kt)("h3",{id:"filter-3"},"Filter"),(0,t.kt)("p",null,"AdGuard Social Media-Filter umfassen:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AdGuard Social-Media-Filter")),(0,t.kt)("h3",{id:"der-zweck-dieser-filter-3"},"Der Zweck dieser Filter"),(0,t.kt)("p",null,"Dieser Filter blockiert Widgets f\xfcr soziale Medien auf Websites von Drittanbietern, z. B. \u201eGef\xe4llt mir\u201c- und \u201eTeilen\u201c-Schaltfl\xe4chen, Gruppen-Widgets, Empfehlungen und \xe4hnliche Widgets."),(0,t.kt)("h3",{id:"beschr\xe4nkungen-und-ausnahmen-2"},"Beschr\xe4nkungen und Ausnahmen"),(0,t.kt)("p",null,"Widgets, die zur Funktionalit\xe4t oder zum Inhalt der Website geh\xf6ren, wie z. B. Kommentare, eingebettete Beitr\xe4ge, Umfragen sowie Widgets f\xfcr die Anmeldung bei sozialen Medien, werden nicht gesperrt. Auch Links zu den Social-Media-Seiten der Website werden nicht gesperrt."),(0,t.kt)("h2",{id:"sonstiges"},"Sonstiges"),(0,t.kt)("p",null,"Diese Gruppe enth\xe4lt Filter, die zum Blockieren von Werbung nicht unbedingt erforderlich sind."),(0,t.kt)("h3",{id:"begriffe-3"},"Begriffe"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Kontextbezogene Werbung")," ist eine Art der Internetwerbung, bei der die Werbung auf der Grundlage des Inhalts, der ausgew\xe4hlten Zielgruppe, des Standorts, der Zeit oder eines anderen Kontexts von Internetseiten angezeigt wird."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Suchwerbung")," ist eine Unterklasse der kontextbezogenen Werbung, bei der Anzeigen auf Grundlage der Suchanfrage der Besucher:innen angezeigt werden."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Eigenwerbung von Websites")," bezieht sich auf die Banner einer Website, die f\xfcr Waren und Dienstleistungen werben, die dem Eigent\xfcmer der Website geh\xf6ren und f\xfcr die er keine Verg\xfctung von Dritten erh\xe4lt."),(0,t.kt)("p",null,"Weitere Einzelheiten zu diesen Arten von Werbung finden Sie im ",(0,t.kt)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/search-ads/"},"Artikel \xfcber Suchanzeigen"),"."),(0,t.kt)("h3",{id:"filter-4"},"Filter"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Filter zum Anzeigen von n\xfctzlicher Werbung"),(0,t.kt)("li",{parentName:"ul"},"AdGuard DNS-Filter"),(0,t.kt)("li",{parentName:"ul"},"AdGuard Experimenteller Filter")),(0,t.kt)("h3",{id:"der-zweck-dieser-filter-4"},"Der Zweck dieser Filter"),(0,t.kt)("h4",{id:"filter-zum-anzeigen-von-n\xfctzlicher-werbung"},"Filter zum Anzeigen von n\xfctzlicher Werbung"),(0,t.kt)("p",null,"Dieser Filter entsperrt:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Kontextbezogene Werbung in den Suchergebnissen bei der Nutzung von Suchmaschinen (wie Google, Bing, Yandex, DuckDuckGo)"),(0,t.kt)("li",{parentName:"ul"},"Eigenwerbung von Websites")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Suchwerbung wird nur dann freigegeben, wenn sie der Suchanfrage entspricht, da sie kontextbezogen ist. Andernfalls bleibt die Werbung gesperrt"),(0,t.kt)("li",{parentName:"ul"},"Eigenwerbung wird nur dann freigeschaltet, wenn sie mit den Filterrichtlinien \xfcbereinstimmt. Eine Anfrage zum Entsperren kann von Filterentwickler:innen abgelehnt werden"),(0,t.kt)("li",{parentName:"ul"},"Andere Werbung wird nicht entsperrt")),(0,t.kt)("h4",{id:"adguard-dns-filter"},"AdGuard DNS-Filter"),(0,t.kt)("p",null,"Dieser Filter wird in AdGuard DNS verwendet und ist kein Ersatz f\xfcr die Werbeblocker-Filter."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("p",null,"Identisch mit Filtern, die Werbung blockieren."),(0,t.kt)("h4",{id:"adguard-experimenteller-filter"},"AdGuard Experimenteller Filter"),(0,t.kt)("p",null,"Dieser Filter ist f\xfcr das Testen und Debuggen von Regeln gedacht, die m\xf6glicherweise die Funktionalit\xe4t von Websites beeintr\xe4chtigen k\xf6nnen. Regeln werden von Filterentwickler:innen hinzugef\xfcgt, wenn eine bestimmte L\xf6sung getestet werden muss. Da der Filter f\xfcr Debugging-Zwecke konzipiert ist, sind seine Einschr\xe4nkungen minimal."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Beschr\xe4nkungen und Ausnahmen")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Regeln sollten nicht absichtlich die Funktionalit\xe4t von Websites beeintr\xe4chtigen"),(0,t.kt)("li",{parentName:"ul"},"Regeln sollten keine Werbung freigeben oder anderweitig gegen die Richtlinie versto\xdfen")))}o.isMDXComponent=!0}}]);