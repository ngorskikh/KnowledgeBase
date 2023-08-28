"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1734],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={title:"Problems caused by multiple user profiles",sidebar_position:10},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/multiple-user-profiles",id:"adguard-for-android/solving-problems/multiple-user-profiles",title:"Problems caused by multiple user profiles",description:"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/multiple-user-profiles.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/multiple-user-profiles",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/multiple-user-profiles",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/multiple-user-profiles.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Problems caused by multiple user profiles",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"How to protect AdGuard from being disabled by the system",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/background-work"},next:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/firefox-certificates"}},s={},p=[{value:"Problems caused by multiple user profiles",id:"problems-caused-by-multiple-user-profiles",level:2},{value:"Problems caused by using a Restricted Mode profile",id:"problems-caused-by-using-a-restricted-mode-profile",level:2},{value:"Solutions",id:"solutions",level:3},{value:"Option 1: Grant permissions to AdGuard using ADB",id:"option-1-grant-permissions-to-adguard-using-adb",level:3},{value:"Option 2: Remove <em>restricted user account</em>",id:"option-2-remove-restricted-user-account",level:3},{value:"Option 3: Use AdGuard in <em>Local HTTP proxy mode</em> (requires root)",id:"option-3-use-adguard-in-local-http-proxy-mode-requires-root",level:3},{value:"LG and Samsung devices",id:"lg-and-samsung-devices",level:3},{value:"Samsung",id:"samsung",level:3},{value:"LG",id:"lg",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Android, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"descarga la aplicaci\xf3n AdGuard"))),(0,n.kt)("p",null,"In this article you will find the methods on how to solve problems with AdGuard when you set up ",(0,n.kt)("em",{parentName:"p"},"multiple accounts")," or ",(0,n.kt)("em",{parentName:"p"},"Restricted Profiles")," on your Android devices."),(0,n.kt)("h2",{id:"problems-caused-by-multiple-user-profiles"},"Problems caused by multiple user profiles"),(0,n.kt)("p",null,"On Android 9 and later, if AdGuard is installed for more than one user profile on your device, you may encounter problems when uninstalling the app. When you uninstall AdGuard from one user profile, the app will still appear on the app list, but you won't be able to uninstall or reinstall it. This happens because AdGuard is installed for a different user profile on the device."),(0,n.kt)("p",null,'If you try to reinstall AdGuard after an unsuccessful removal attempt, you will see the error message "You can\'t install the app on your device".'),(0,n.kt)("p",null,"To solve this problem, you need to uninstall the application for all users: go to Settings \u2192 All apps \u2192 AdGuard. Tap the three-dot menu in the top right corner and select ",(0,n.kt)("em",{parentName:"p"},"Uninstall for all users"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png",alt:"Uninstall *mobile border"})),(0,n.kt)("h2",{id:"problems-caused-by-using-a-restricted-mode-profile"},"Problems caused by using a Restricted Mode profile"),(0,n.kt)("p",null,"The owners of phones, tablets, or TVs running the Android 7+ operating system might face the problem caused by using ",(0,n.kt)("strong",{parentName:"p"},"a profile with Restricted Mode"),". If you have such a profile, ",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),", like other applications that use VPN, gets restrictions on selective filtering of VPN traffic. As a result, AdGuard cannot launch protection in a ",(0,n.kt)("strong",{parentName:"p"},"local VPN mode"),". Also, one of the reasons for this situation may be using ",(0,n.kt)("strong",{parentName:"p"},"Dual App/Dual Messenger profile")," on your device. Below are described the recommendations that you can apply when this problem occurs."),(0,n.kt)("h3",{id:"solutions"},"Solutions"),(0,n.kt)("p",null,"You have three ways to solve the issue:"),(0,n.kt)("h3",{id:"option-1-grant-permissions-to-adguard-using-adb"},"Option 1: Grant permissions to AdGuard using ADB"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This approach is available starting from ",(0,n.kt)("strong",{parentName:"p"},"AdGuard v3.5 nightly 6"),". If you're using an older version, you can get the latest update ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"here"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate the ",(0,n.kt)("strong",{parentName:"p"},"developer mode")," and enable ",(0,n.kt)("strong",{parentName:"p"},"USB debugging"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"Settings")," app phone;"),(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section, find the sub-item ",(0,n.kt)("strong",{parentName:"li"},"About phone"),";"),(0,n.kt)("li",{parentName:"ul"},"Tap the ",(0,n.kt)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,n.kt)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"System Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"li"},"Developer Options")," \u2192 Scroll down and enable ",(0,n.kt)("strong",{parentName:"li"},"USB debugging")," \u2192 Confirm debugging is enabled in the window ",(0,n.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully.")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you have any difficulties or additional questions, full instructions can be found ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"here"),".")))),(0,n.kt)("p",null,":::"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," adb; On the Windows platform, ",(0,n.kt)("strong",{parentName:"p"},"Samsung")," owners may need to install ",(0,n.kt)("a",{parentName:"p",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your device using a ",(0,n.kt)("strong",{parentName:"p"},"USB cable")," to the computer or laptop on which you installed ",(0,n.kt)("strong",{parentName:"p"},"ADB"),";")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"the command line")," on your PC:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cmd.exe")," if you are using ",(0,n.kt)("strong",{parentName:"li"},"Windows"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Terminal")," if you are using ",(0,n.kt)("strong",{parentName:"li"},"macOS"),";"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the command ",(0,n.kt)("inlineCode",{parentName:"p"},"adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS")," and press ",(0,n.kt)("strong",{parentName:"p"},"Enter"),"."))),(0,n.kt)("h3",{id:"option-2-remove-restricted-user-account"},"Option 2: Remove ",(0,n.kt)("em",{parentName:"h3"},"restricted user account")),(0,n.kt)("p",null,"About how to manage user accounts from an Android device you can ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"find here"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual messenger or Dual app features on ",(0,n.kt)("strong",{parentName:"p"},"Samsung")," or ",(0,n.kt)("strong",{parentName:"p"},"LG")," devices. You can read below how to fix the issue in these cases.")),(0,n.kt)("h3",{id:"option-3-use-adguard-in-local-http-proxy-mode-requires-root"},"Option 3: Use AdGuard in ",(0,n.kt)("em",{parentName:"h3"},"Local HTTP proxy mode")," (requires root)"),(0,n.kt)("p",null,"To enable this mode, open ",(0,n.kt)("strong",{parentName:"p"},"AdGuard Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering method")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Local HTTP proxy")),(0,n.kt)("h3",{id:"lg-and-samsung-devices"},"LG and Samsung devices"),(0,n.kt)("p",null,"Owners of ",(0,n.kt)("strong",{parentName:"p"},"LG")," or ",(0,n.kt)("strong",{parentName:"p"},"Samsung")," phones may also encounter a similar issue. It can be caused by using ",(0,n.kt)("strong",{parentName:"p"},"Dual App/Dual Messenger")," function (which automatically creates a restricted profile). To solve this issue, you need to disable this feature."),(0,n.kt)("h3",{id:"samsung"},"Samsung"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"Settings"),";"),(0,n.kt)("li",{parentName:"ul"},"Press ",(0,n.kt)("strong",{parentName:"li"},"Advanced"),";"),(0,n.kt)("li",{parentName:"ul"},"Scroll down and press ",(0,n.kt)("strong",{parentName:"li"},"Dual messenger"),";"),(0,n.kt)("li",{parentName:"ul"},"Disable the ",(0,n.kt)("strong",{parentName:"li"},"Dual messenger")," for all applications;"),(0,n.kt)("li",{parentName:"ul"},"Lock the device for 5 minutes;"),(0,n.kt)("li",{parentName:"ul"},"Unlock the screen and try again to create the VPN profile.")),(0,n.kt)("h3",{id:"lg"},"LG"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("strong",{parentName:"li"},"Settings"),";"),(0,n.kt)("li",{parentName:"ul"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"General")," tab;"),(0,n.kt)("li",{parentName:"ul"},"Scroll down and press ",(0,n.kt)("strong",{parentName:"li"},"Dual app"),";"),(0,n.kt)("li",{parentName:"ul"},"Remove all applications from the list;"),(0,n.kt)("li",{parentName:"ul"},"Reboot your device.")))}d.isMDXComponent=!0}}]);