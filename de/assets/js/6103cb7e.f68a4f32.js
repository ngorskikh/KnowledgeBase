"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2026],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||a;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(4137));const a={title:"Zwei-Faktor-Authentifizierung",sidebar_position:3},l=void 0,o={unversionedId:"general/account/2fa",id:"general/account/2fa",title:"Zwei-Faktor-Authentifizierung",description:"Bei der Zwei-Faktor-Authentifizierung (oder 2FA) handelt es sich um eine Authentifizierungsmethode, bei der neben dem \xfcblichen Paar aus Benutzername und Kennwort ein zus\xe4tzlicher Nachweis f\xfcr die Anmeldung erforderlich ist. Dies geschieht aus Sicherheitsgr\xfcnden. Websites bieten in der Regel solche 2FA-Methoden wie einen per SMS gesendeten Code oder eine spezielle Authentifizierungs-App an.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/general/account/2fa.md",sourceDirName:"general/account",slug:"/general/account/2fa",permalink:"/KnowledgeBase/de/general/account/2fa",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/account/2fa.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Zwei-Faktor-Authentifizierung",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Was Sie im AdGuard-Konto tun k\xf6nnen",permalink:"/KnowledgeBase/de/general/account/features"},next:{title:"Was ist eine AdGuard-Lizenz?",permalink:"/KnowledgeBase/de/general/license/what-is"}},s={},u=[{value:"So richten Sie 2FA ein",id:"so-richten-sie-2fa-ein",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bei der Zwei-Faktor-Authentifizierung (oder 2FA) handelt es sich um eine Authentifizierungsmethode, bei der neben dem \xfcblichen Paar aus Benutzername und Kennwort ein zus\xe4tzlicher Nachweis f\xfcr die Anmeldung erforderlich ist. Dies geschieht aus Sicherheitsgr\xfcnden. Websites bieten in der Regel solche 2FA-Methoden wie einen per SMS gesendeten Code oder eine spezielle Authentifizierungs-App an."),(0,i.kt)("p",null,"Wir sehen das Hinzuf\xfcgen einer 2FA-Option als einen Vorteil. Wir verstehen auch, dass die Durchsetzung dieser Regelung einige Nutzer:innen irritieren kann. Deshalb haben wir diese Option f\xfcr Ihr pers\xf6nliches Konto auf adguard.com eingerichtet. Standardm\xe4\xdfig ist 2FA deaktiviert, wenn Sie ein neues Konto registrieren. Die 2FA kann manuell in den Einstellungen aktiviert werden. Was die derzeit verf\xfcgbaren Authentifizierungsmethoden angeht, so verwenden wir die bew\xe4hrte Methode: eine Authentifizierungs-App f\xfcr Android oder iOS. Sie k\xf6nnen fast alle verf\xfcgbaren Apps verwenden, und es gibt viele davon."),(0,i.kt)("p",null,"Wir empfehlen die Einrichtung einer Zwei-Faktor-Authentifizierung f\xfcr Ihr AdGuard-Konto. Es nimmt nicht viel Zeit in Anspruch, aber es hilft Ihnen, Ihre Lizenzschl\xfcssel, Abonnements und vor allem alle pers\xf6nlichen Daten, die mit Ihrem Konto verbunden sind, zu sch\xfctzen."),(0,i.kt)("h2",{id:"so-richten-sie-2fa-ein"},"So richten Sie 2FA ein"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Melden Sie sich bei Ihrem ",(0,i.kt)("a",{parentName:"li",href:"https://auth.adguard.com/login.html"},"AdGuard-Konto")," an und \xf6ffnen Sie den Tab \u201eEinstellungen\u201c:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/account_settings.png",alt:"AdGuard Kontoeinstellungen *border"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scrollen Sie nach unten zum Abschnitt ",(0,i.kt)("em",{parentName:"li"},"Passwort und 2FA")," und klicken Sie auf ",(0,i.kt)("strong",{parentName:"li"},"Aktivieren"),":")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_new.png",alt:"Die Schaltfl\xe4che \u201e\xc4ndern\u201d *border"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Befolgen Sie die Anweisungen auf dem Bildschirm, um eine Authentifizierungs-App zu installieren und den QR-Code zu scannen:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_enable.png",alt:"Der Verifizierungscode"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Wichtig"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bewahren Sie den Sicherungscode irgendwo auf. Er wird ben\xf6tigt, um Ihr Konto wiederherzustellen, falls Ihr Mobiltelefon verloren geht oder gestohlen wird")),(0,i.kt)("p",null,"Wenn Sie alles richtig gemacht haben, wird dies bei der n\xe4chsten Anmeldung angezeigt:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_success.png",alt:"Das Ergebnis *mobile"})),(0,i.kt)("p",null,"Verwenden Sie Ihre mobile Authentifizierungs-App, um den Code anzuzeigen und ihn einzugeben. Sie sollten jetzt angemeldet sein!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"HINWEIS")),": Wenn Sie einen Authentifizierungsfehler erhalten, \xfcberpr\xfcfen Sie die Uhr (Zeit/Datum) auf Ihrem Telefon. Stellen Sie sie bei Bedarf ein, da eine nicht synchronisierte Uhr die Ursache f\xfcr den Fehler sein kann."))}c.isMDXComponent=!0}}]);