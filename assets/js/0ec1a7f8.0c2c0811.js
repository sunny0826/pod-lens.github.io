"use strict";(self.webpackChunkpod_lens_github_io=self.webpackChunkpod_lens_github_io||[]).push([[139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={title:"Getting Started",slug:"/"},i=void 0,a={unversionedId:"getting-started",id:"version-v0.1.5/getting-started",title:"Getting Started",description:"Requirements",source:"@site/versioned_docs/version-v0.1.5/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/v0.1.5/",draft:!1,editUrl:"https://github.com/sunny0826/pod-lens.github.io/edit/master/versioned_docs/version-v0.1.5/getting-started.md",tags:[],version:"v0.1.5",frontMatter:{title:"Getting Started",slug:"/"},sidebar:"version-v0.1.5/docs",next:{title:"More Info",permalink:"/docs/v0.1.5/more-info"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"help info",id:"help-info",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.10.0+"),(0,l.kt)("li",{parentName:"ul"},"Kubectl 1.13.0+"),(0,l.kt)("li",{parentName:"ul"},"Krew 0.4.0+")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl krew install pod-lens\n")),(0,l.kt)("h2",{id:"help-info"},"help info"),(0,l.kt)("p",null,"View the help information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl pod-lens -h\n")),(0,l.kt)("h2",{id:"thats-it"},"That's it!"),(0,l.kt)("p",null,"Congratulations! You've successfully install and run your ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl pod-lens"),"."))}d.isMDXComponent=!0}}]);