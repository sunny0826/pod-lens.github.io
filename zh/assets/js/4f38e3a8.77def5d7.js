"use strict";(self.webpackChunkpod_lens_github_io=self.webpackChunkpod_lens_github_io||[]).push([[674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={title:"\u5feb\u901f\u5f00\u59cb",slug:"/"},a=void 0,i={unversionedId:"getting-started",id:"version-v0.2.0/getting-started",title:"\u5feb\u901f\u5f00\u59cb",description:"\u9700\u8981",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.2.0/getting-started.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/v0.2.0/",draft:!1,editUrl:"https://github.com/sunny0826/pod-lens.github.io/edit/master/versioned_docs/version-v0.2.0/getting-started.md",tags:[],version:"v0.2.0",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",slug:"/"},sidebar:"version-v0.2.0/docs",next:{title:"\u66f4\u591a\u4fe1\u606f",permalink:"/zh/docs/v0.2.0/more-info"}},c={},s=[{value:"\u9700\u8981",id:"\u9700\u8981",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5e2e\u52a9\u4fe1\u606f",id:"\u5e2e\u52a9\u4fe1\u606f",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9700\u8981"},"\u9700\u8981"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes 1.10.0+"),(0,o.kt)("li",{parentName:"ul"},"Kubectl 1.13.0+"),(0,o.kt)("li",{parentName:"ul"},"Krew 0.4.0+")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl krew install pod-lens\n")),(0,o.kt)("h2",{id:"\u5e2e\u52a9\u4fe1\u606f"},"\u5e2e\u52a9\u4fe1\u606f"),(0,o.kt)("p",null,"\u67e5\u770b\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl pod-lens -h\n")),(0,o.kt)("h2",{id:"thats-it"},"That's it!"),(0,o.kt)("p",null,"\u606d\u559c! \u60a8\u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u548c\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl pod-lens")," \u4e86\uff01"))}d.isMDXComponent=!0}}]);