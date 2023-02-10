"use strict";(self.webpackChunkpod_lens_github_io=self.webpackChunkpod_lens_github_io||[]).push([[116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u66f4\u591a\u4fe1\u606f"},l=void 0,c={unversionedId:"more-info",id:"more-info",title:"\u66f4\u591a\u4fe1\u606f",description:"asciicast",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/more-info.md",sourceDirName:".",slug:"/more-info",permalink:"/zh/docs/next/more-info",draft:!1,editUrl:"https://github.com/sunny0826/pod-lens.github.io/edit/master/docs/more-info.md",tags:[],version:"current",frontMatter:{title:"\u66f4\u591a\u4fe1\u606f"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/next/"}},p={},i=[{value:"\u4ea4\u4e92\u5f0f\u64cd\u4f5c",id:"\u4ea4\u4e92\u5f0f\u64cd\u4f5c",level:2},{value:"\u5c55\u793a Pod \u76f8\u5173 K8S \u8d44\u6e90",id:"\u5c55\u793a-pod-\u76f8\u5173-k8s-\u8d44\u6e90",level:2},{value:"\u8f93\u5165 pod name \u6a21\u7cca\u5339\u914d",id:"\u8f93\u5165-pod-name-\u6a21\u7cca\u5339\u914d",level:3},{value:"\u6307\u5b9a LabelSelector",id:"\u6307\u5b9a-labelselector",level:3}],s={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://asciinema.org/a/400180"},(0,o.kt)("img",{parentName:"a",src:"https://asciinema.org/a/400180.svg",alt:"asciicast"}))),(0,o.kt)("h2",{id:"\u4ea4\u4e92\u5f0f\u64cd\u4f5c"},"\u4ea4\u4e92\u5f0f\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl pod-lens\n")),(0,o.kt)("h2",{id:"\u5c55\u793a-pod-\u76f8\u5173-k8s-\u8d44\u6e90"},"\u5c55\u793a Pod \u76f8\u5173 K8S \u8d44\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl pod-lens <pod-name>\n")),(0,o.kt)("h3",{id:"\u8f93\u5165-pod-name-\u6a21\u7cca\u5339\u914d"},"\u8f93\u5165 pod name \u6a21\u7cca\u5339\u914d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl pod-lens prometheus-prometheus-operator-prometheus-\nkubectl pod-lens prometheus-prometheus-operator-prometheus-* # fuzzy matching\n")),(0,o.kt)("h3",{id:"\u6307\u5b9a-labelselector"},"\u6307\u5b9a LabelSelector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl pod-lens <pod-name> -l app=demo\n")))}m.isMDXComponent=!0}}]);