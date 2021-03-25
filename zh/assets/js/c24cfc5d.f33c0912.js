(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(96)),i={title:"Getting Started",slug:"/"},c={unversionedId:"getting-started",id:"version-vv0.1.x/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Requirements",source:"@site/versioned_docs/version-vv0.1.x/getting-started.md",slug:"/",permalink:"/zh/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-vv0.1.x/getting-started.md",version:"vv0.1.x",sidebar:"version-vv0.1.x/docs",next:{title:"More Info",permalink:"/zh/docs/more-info"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"help info",id:"help-info",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Kubernetes 1.10.0+"),Object(a.b)("li",{parentName:"ul"},"Kubectl 1.13.0+"),Object(a.b)("li",{parentName:"ul"},"Krew 0.4.0+")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"kubectl krew install pod-lens\n")),Object(a.b)("h2",{id:"help-info"},"help info"),Object(a.b)("p",null,"View the help information."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"kubectl pod-lens -h\n")),Object(a.b)("h2",{id:"thats-it"},"That's it!"),Object(a.b)("p",null,"Congratulations! You've successfully install and run your ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl pod-lens"),"."))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);