"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6014],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=s,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,a=new Array(l);a[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),s=(r(7294),r(4137));const l={title:"Formes plurielles",sidebar_position:4},a=void 0,i={unversionedId:"miscellaneous/contribute/translate/plural-forms",id:"miscellaneous/contribute/translate/plural-forms",title:"Formes plurielles",description:"Il y a beaucoup de diff\xe9rences entre les langues du monde. L'une de ces diff\xe9rences est l'utilisation de formes plurielles qui peuvent causer d'\xe9normes difficult\xe9s en mati\xe8re de localisation.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/miscellaneous/contribute/translate/plural-forms.md",sourceDirName:"miscellaneous/contribute/translate",slug:"/miscellaneous/contribute/translate/plural-forms",permalink:"/KnowledgeBase/fr/miscellaneous/contribute/translate/plural-forms",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/translate/plural-forms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Formes plurielles",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Directives et recommandations",permalink:"/KnowledgeBase/fr/miscellaneous/contribute/translate/guidelines"},next:{title:"Comment hi\xe9rarchiser les traductions des fichiers Crowdin",permalink:"/KnowledgeBase/fr/miscellaneous/contribute/translate/translation-priority"}},o={},u=[{value:"Que signifient les formes plurielles ?",id:"plurals",level:2},{value:"O\xf9 peut-on apprendre plus sur le nombre de formes plurielles ?",id:"where-to-learn",level:2},{value:"Les pluriels dans les traductions de AdGuard",id:"translations",level:2},{value:"1. Phrases avec des cl\xe9s de cha\xeene se terminant par <code>.singular</code>, <code>.dual</code>, <code>.plural</code>",id:"1type",level:3},{value:"2. Les cha\xeenes avec des noms singuliers et pluriels s\xe9par\xe9s par des virgules",id:"2type",level:3},{value:"3. Les cha\xeenes qui utilisent le mod\xe8le d\xe9velopp\xe9 par Crowdin",id:"3type",level:3},{value:"4. Les cha\xeenes avec des mod\xe8les s\xe9par\xe9s par le signe de la barre verticale",id:"4type",level:3},{value:"R\xe9sum\xe9 bref",id:"summury",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Il y a beaucoup de diff\xe9rences entre les langues du monde. L'une de ces diff\xe9rences est l'utilisation de formes plurielles qui peuvent causer d'\xe9normes difficult\xe9s en mati\xe8re de localisation."),(0,s.kt)("p",null,"Nous vous recommandons vivement de lire attentivement cet article pour en savoir plus sur les formes plurielles et la fa\xe7on dont elles sont utilis\xe9es dans les traductions AdGuard."),(0,s.kt)("h2",{id:"plurals"},"Que signifient les formes plurielles ?"),(0,s.kt)("p",null,"Les substantifs dans les langues diff\xe9rentes peuvent avoir plusieurs formes de mots au pluriel. Leur utilisation d\xe9pend du nombre de choses dont vous parlez."),(0,s.kt)("p",null,"Par exemple, les mots anglais ont deux formes de mots lorsqu'ils parlent de quelque chose au singulier, comme ",(0,s.kt)("em",{parentName:"p"},"'one star'"),", et au pluriel \u2013 ",(0,s.kt)("em",{parentName:"p"},"'two stars'"),". Peu importe que vous disiez cinq, vingt-six ou m\xeame cinq cent trente-deux \xab stars\xbb \u2014 la terminaison \xab s \xbb restera la m\xeame. Mais certaines langues ne peuvent contenir qu'une ou plusieurs formes plurielles."),(0,s.kt)("p",null,"Contrairement \xe0 l'anglais, la langue polonaise a trois formes plurielles de noms. L'une d'entre elles est utilis\xe9e pour parler de quelque chose au singulier, une autre forme est utilis\xe9e au pluriel, mais avec des nombres se terminant par 2\u20144, \xe0 l'exclusion de 12\u201414, et la troisi\xe8me forme \u2014 pour les mots avec d'autres nombres devant eux."),(0,s.kt)("p",null,"Jetons un coup d'\u0153il \xe0 cette image. Vous pouvez voir ici les groupes de chiffres qui d\xe9terminent la forme d'un mot lorsqu'on se trouve en face de lui."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png",alt:"Polonais"})),(0,s.kt)("p",null,"Pour mieux comprendre, \xe9tablissons un petit parall\xe8le entre l'anglais et le polonais :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  La version anglaise :                                                 Les \xe9quivalents polonais :\n\n  1. forme \u2014 It takes one hour.                                     1. forme \u2014 Zajmuje to godzin\u0119.\n  2. forme \u2014 It takes two hours.                                    2. forme \u2014 Zajmuje to dwie godziny.\n  3. forme \u2014 It takes five hours.                                   3. forme \u2014 Zajmuje to pi\u0119\u0107 godzin.\n")),(0,s.kt)("p",null,"Maintenant c'est clair que le polonais ",(0,s.kt)("em",{parentName:"p"},"'godzin\u0119'")," (heure) a trois formes diff\xe9rentes, alors que le mot anglais ne change de forme avec des nombres donn\xe9s que deux fois."),(0,s.kt)("p",null,"Sans parler du polonais, il existe encore de nombreuses autres langues qui ont trois formes plurielles et plus, telles que le russe, le serbe, le slovaque, le tch\xe8que, etc. Mais tous n'ob\xe9issent pas \xe0 la m\xeame r\xe8gle. C'est pourquoi c'est si important de savoir combien de formes plurielles votre langue contient et comment les appliquer correctement."),(0,s.kt)("h2",{id:"where-to-learn"},"O\xf9 peut-on apprendre plus sur le nombre de formes plurielles ?"),(0,s.kt)("p",null,"Faisant face \xe0 une traduction qui n\xe9cessite l'utilisation de pluriels, vous ne pourrez peut-\xeatre pas vous rendre compte tout de suite du nombre de formes de mots que contient votre langue."),(0,s.kt)("p",null,"Voici quelques sources d'informations que vous pouvez utiliser."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Guide de localisation")," contient une large liste de langues. Le nombre de formes plurielles pour les langues diff\xe9rentes est indiqu\xe9 de cette fa\xe7on\xa0: ",(0,s.kt)("inlineCode",{parentName:"p"},"nplurals=2"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"nplurals=4")," et ainsi de suite. Le chiffre apr\xe8s le signe \xc9gal ",(0,s.kt)("inlineCode",{parentName:"p"},"=")," signifie le nombre de formes plurielles de la langue respective."),(0,s.kt)("p",null,"En outre, vous pouvez obtenir des informations sur les formes plurielles dans le r\xe9pertoire ",(0,s.kt)("a",{parentName:"p",href:"http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules"},"Unicode Common Locale Data Repository")," (CLDR). Les r\xe8gles plurielles CLDR indiquent une forme de mot suppl\xe9mentaire pour les nombres d\xe9cimaux (1.5\xa0; 2.3\xa0; 100.1\u2026), mais nous ne les utilisons pas dans les traductions AdGuard."),(0,s.kt)("h2",{id:"translations"},"Les pluriels dans les traductions de AdGuard"),(0,s.kt)("p",null,"Tout d'abord, nous tenons \xe0 pr\xe9ciser que toutes les traductions AdGuard ne requi\xe8rent pas l'utilisation du pluriel."),(0,s.kt)("p",null,"Actuellement, nous avons 4 types de cha\xeenes sur Crowdin qui impliquent l'utilisation de pluriels."),(0,s.kt)("p",null,"Examinons-les de plus pr\xe8s."),(0,s.kt)("h3",{id:"1type"},"1. Phrases avec des cl\xe9s de cha\xeene se terminant par ",(0,s.kt)("inlineCode",{parentName:"h3"},".singular"),", ",(0,s.kt)("inlineCode",{parentName:"h3"},".dual"),", ",(0,s.kt)("inlineCode",{parentName:"h3"},".plural")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png",alt:"crowdin *border"})),(0,s.kt)("p",null,"La plupart d'entre elles sont repr\xe9sent\xe9es dans le projet ",(0,s.kt)("inlineCode",{parentName:"p"},"AdGuard for Windows")," et consistent en seulement un ou deux mots :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"jours;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"extensions;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"heures"))),(0,s.kt)("p",null,'Veuillez pr\xeater attention aux cl\xe9s de cha\xeene de ces phrases et au champ "Contexte" o\xf9 vous trouverez des remarques importantes sur les pluriels. Les cl\xe9s de cha\xeenes peuvent contenir des mots ',(0,s.kt)("inlineCode",{parentName:"p"},"Singular"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Dual"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Plural")," (ex.",(0,s.kt)("inlineCode",{parentName:"p"},"FormatDayDeclensionDual"),"). Dans ce cas, vous devez laisser la forme plurielle appropri\xe9e telle qu'elle est sp\xe9cifi\xe9e dans la cl\xe9."),(0,s.kt)("h3",{id:"2type"},"2. Les cha\xeenes avec des noms singuliers et pluriels s\xe9par\xe9s par des virgules"),(0,s.kt)("p",null,"Ce type de cha\xeenes est principalement concentr\xe9 dans le projet ",(0,s.kt)("inlineCode",{parentName:"p"},"AdGuard for Android"),"."),(0,s.kt)("p",null,"Veuillez consulter l'exemple :"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png",alt:"crowdin *border"})),(0,s.kt)("p",null,"S'il existe 3 formes plurielles de noms dans votre langue (comme en polonais), veuillez \xe9crire toutes les formes plurielles s\xe9par\xe9es par des virgules."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"heure, heures \u2014 godzin\u0119, godziny, godzin")),(0,s.kt)("p",null,"Dans le cas o\xf9 un nom n'a que 2 formes, ce n'est pas n\xe9cessaire d'\xe9crire deux fois la m\xeame forme (",(0,s.kt)("em",{parentName:"p"},"typiquement uniquement pour ce type de cha\xeenes avec des pluriels !"),"). Cependant, ce ne sera pas une erreur si vous r\xe9p\xe9tez le formulaire deux fois."),(0,s.kt)("h3",{id:"3type"},"3. Les cha\xeenes qui utilisent le mod\xe8le d\xe9velopp\xe9 par Crowdin"),(0,s.kt)("p",null,"Il s'agit de la m\xe9thode la plus conviviale pour traduire les cha\xeenes de caract\xe8res contenant des pluriels."),(0,s.kt)("p",null,"Crowdin sugg\xe8re aux utilisateurs de traduire un certain nombre de phrases avec diff\xe9rentes formes plurielles."),(0,s.kt)("p",null,"Si votre langue ne propose qu'une seule forme plurielle, vous ne verrez alors qu'une seule phrase \xe0 traduire. S'il s'agit de trois formes ou plus, Crowdin vous fournira la cha\xeene divis\xe9e en deux ou trois autres cha\xeenes \xe0 traduire."),(0,s.kt)("p",null,"Par exemple :"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png",alt:"crowdin *border"})),(0,s.kt)("p",null,'Soyez attentifs pendant la traduction de ces cha\xeenes et quand vous les approuvez. Si vous n\'avez aucune id\xe9e de la signification du champ "Autre", il vous suffit de coller le m\xeame formulaire que dans le champ "Plusieurs". Les traductions des champs "Plusieurs" et "Autres" peuvent \xeatre identiques.'),(0,s.kt)("h3",{id:"4type"},"4. Les cha\xeenes avec des mod\xe8les s\xe9par\xe9s par le signe de la barre verticale"),(0,s.kt)("p",null,"C'est le type de cha\xeenes AdGuard le plus compliqu\xe9 qui est principalement utilis\xe9 dans le projet ",(0,s.kt)("inlineCode",{parentName:"p"},"AdGuard Websites"),"."),(0,s.kt)("p",null,"Faites attention \xe0 la pr\xe9sence d'une barre verticale entre les phrases et des espaces r\xe9serv\xe9s ",(0,s.kt)("strong",{parentName:"p"},"%count%")," dans les phrases sources \u2014 cela vous aidera \xe0 identifier les phrases pour lesquelles les traductions ont besoin de l'utilisation du pluriel."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png",alt:"crowdin *border"})),(0,s.kt)("p",null,"Maintenant, imaginons \u2014 vous faites face \xe0 une cha\xeene de ce genre : ",(0,s.kt)("inlineCode",{parentName:"p"},"Standard license for %count% computer | Standard license for %count% computers"),"."),(0,s.kt)("p",null,"Que faut-il savoir pour traduire cela correctement ?"),(0,s.kt)("p",null,"Appelons les phrases qui sont divis\xe9es par un signe de barre verticale ",(0,s.kt)("strong",{parentName:"p"},'"mod\xe8les"'),", car elles servent en effet de mod\xe8les pour les phrases qui comportent des quantit\xe9s diff\xe9rentes."),(0,s.kt)("p",null,"Pour en revenir \xe0 l'exemple, comme la langue anglaise ne comprend que deux formulaires, il devrait y avoir respectivement deux mod\xe8les\xa0:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Standard license for *%count%* computer | Standard license for *%count%* computers")),(0,s.kt)("p",null,"o\xf9 ",(0,s.kt)("strong",{parentName:"p"},"template 1")," est la license Standard pour ",(0,s.kt)("em",{parentName:"p"},"%count%")," ordinateur,"),(0,s.kt)("p",null,"et le ",(0,s.kt)("strong",{parentName:"p"},"template 2")," est une licence Standard pour ",(0,s.kt)("em",{parentName:"p"},"%count%")," ordinateurs"),(0,s.kt)("p",null,"Une autre chose importante \xe0 laquelle vous devriez pr\xeater attention c'est les espaces r\xe9serv\xe9s ",(0,s.kt)("strong",{parentName:"p"},"%count%")," qui, comme d'habitude, se placent avant les mots qu'ils d\xe9finissent. De diff\xe9rents nombres appara\xeetront ici au lieu de ",(0,s.kt)("strong",{parentName:"p"},"%count%"),", en fonction des mod\xe8les choisis."),(0,s.kt)("p",null,"Dans le cas d'une langue ayant, par exemple, trois formes de pluriel, il doit y avoir trois mod\xe8les s\xe9par\xe9s par deux barres verticales."),(0,s.kt)("p",null,"Par exemple, lorsque nous traduisons la phrase mentionn\xe9e ci-dessus en slovaque, qui, selon la r\xe8gle du ",(0,s.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Guide de la localisation")," a trois formes de mots, la traduction correcte sera comme suit\xa0:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"**\u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010d | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010de | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010dov**")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png",alt:"Slovaque"})),(0,s.kt)("p",null,"Dans ce cas, nous voyons trois mod\xe8les qui contiennent trois formes du mot ",(0,s.kt)("em",{parentName:"p"},'"po\u010d\xedta\u010d"')," (ordinateur) en slovaque."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Si nous ignorons l'une des formes et n'utilisons que deux mod\xe8les pour le slovaque au lieu de trois, le syst\xe8me ne pourra pas prendre un mod\xe8le appropri\xe9 pour certains nombres")," et, par cons\xe9quent, nous aurons des erreurs de grammaire dans les phrases, comme en anglais : ",(0,s.kt)("em",{parentName:"p"},"Standard license for 5 computer"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Utilisez toujours autant de formes qu'il existe dans votre langue, m\xeame lorsque le mot lui-m\xeame a moins de formes de mots."))),(0,s.kt)("p",null,"Par exemple, le mot serbe ",(0,s.kt)("em",{parentName:"p"},"'ra\u010dunar'")," (ordinateur) n'a que deux formes. Mais il existe 3 formes plurielles en serbe."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png",alt:"Serbe"})),(0,s.kt)("p",null,"Ainsi, la traduction de l'anglais vers le serbe devrait \xeatre\xa0:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"**Standardna licenca za *%count%* ra\u010dunar | Standardna licenca za *%count%* ra\u010dunara | Standardna licenca za *%count%* ra\u010dunara**")),(0,s.kt)("p",null,"Bien qu'il soit \xe9vident que les deux derniers mod\xe8les ne pr\xe9sentent aucune diff\xe9rence, il est tr\xe8s important de respecter la r\xe8gle : ",(0,s.kt)("strong",{parentName:"p"},"Le nombre de mod\xe8les doit refl\xe9ter le nombre de formes plurielles de la langue concern\xe9e !"),"(typiquement pour ce type de cha\xeenes avec des pluriels)."),(0,s.kt)("h3",{id:"summury"},"R\xe9sum\xe9 bref"),(0,s.kt)("p",null,"Lors de la traduction de projets AdGuard, portez une attention particuli\xe8re aux phrases qui n\xe9cessitent l'utilisation de formes plurielles."),(0,s.kt)("p",null,"Alors que les trois premiers types de cha\xeenes sont plus ou moins faciles \xe0 r\xe9aliser, le quatri\xe8me type demande plus de vigilance."),(0,s.kt)("p",null,"Encore une fois : si vous rencontrez une phrase originale comportant deux \xe9l\xe9ments importants : ",(0,s.kt)("strong",{parentName:"p"},"le signe de la barre verticale")," et ",(0,s.kt)("strong",{parentName:"p"},"%count%")," les espaces r\xe9serv\xe9s, veuillez faire ce qui suit :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"R\xe9f\xe9rez-vous \xe0 la r\xe8gle du pluriel d\u2019une langue dans laquelle vous traduisez ;")),(0,s.kt)("p",null,"Le nombre de vos mod\xe8les doit \xeatre coh\xe9rent avec le nombre de formes plurielles que comprend votre langue, m\xeame dans les cas o\xf9 certains mots ont eux-m\xeames moins de formes. Deux formes plurielles \u2014 deux mod\xe8les de traduction ; cinq formes plurielles \u2014 cinq mod\xe8les, etc."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"N'oubliez pas d'utiliser le signe de la barre verticale entre les mod\xe8les, comme il est repr\xe9sent\xe9 dans les cha\xeenes originales ;")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Ne traduisez pas, ne remplissez pas et ne supprimez pas les espaces r\xe9serv\xe9s ",(0,s.kt)("strong",{parentName:"p"},"%count%"),"."))),(0,s.kt)("p",null,"En suivant ces r\xe8gles simples, vous aiderez les d\xe9veloppeurs AdGuard \xe0 \xe9viter de nombreuses complications inutiles lors du processus de localisation."))}d.isMDXComponent=!0}}]);