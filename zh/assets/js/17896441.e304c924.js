"use strict";(self.webpackChunkpod_lens_github_io=self.webpackChunkpod_lens_github_io||[]).push([[918],{819:(e,t,s)=>{s.d(t,{Z:()=>b});var n=s(7462),l=s(7294),a=s(6010),c=s(3746),o=s(195),i=s(7594),r=s.n(i),h=s(3618);const u="codeBlockContent_vqWU",d="codeBlockTitle_B2tn",g="codeBlock_wPnj",m="codeBlockWithTitle_hA62",p="copyButton_H_xL",k="codeBlockLines_fQUY";var j=s(6668);const y=/{([\d,-]+)}/,f=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},s=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${s})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},_=/(?:title=")(.*)(?:")/,b=e=>{let{children:t,className:s,metastring:i}=e;const{prism:b}=(0,j.L)(),[v,x]=(0,l.useState)(!1),[B,E]=(0,l.useState)(!1);(0,l.useEffect)((()=>{E(!0)}),[]);const $=(0,l.useRef)(null);let N=[],Z="";if(Array.isArray(t)&&(t=t.join("")),i&&y.test(i)){const e=i.match(y)[1];N=r()(e).filter((e=>e>0))}i&&_.test(i)&&(Z=i.match(_)[1]);let C=s&&s.replace(/language-/,"");!C&&b.defaultLanguage&&(C=b.defaultLanguage);let w=t.replace(/\n$/,"");if(0===N.length&&void 0!==C){let e="";const s=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"]);case"jsx":case"tsx":return f(["js","jsBlock","jsx"]);case"html":return f(["js","jsBlock","html"]);case"python":case"py":return f(["python"]);default:return f()}})(C),n=t.replace(/\n$/,"").split("\n");let l;for(let t=0;t<n.length;){const a=t+1,c=n[t].match(s);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${a},`;break;case"highlight-start":l=a;break;case"highlight-end":e+=`${l}-${a-1},`}n.splice(t,1)}else t+=1}N=r()(e),w=n.join("\n")}const L=()=>{(0,o.Z)(w),x(!0),setTimeout((()=>x(!1)),2e3)};return l.createElement(c.ZP,(0,n.Z)({},c.lG,{key:String(B),theme:h.Z,code:w,language:C}),(e=>{let{className:t,style:s,tokens:c,getLineProps:o,getTokenProps:i}=e;return l.createElement(l.Fragment,null,Z&&l.createElement("div",{style:s,className:d},Z),l.createElement("div",{className:u},l.createElement("div",{tabIndex:0,className:(0,a.Z)(t,g,"thin-scrollbar",{[m]:Z})},l.createElement("div",{className:k,style:s},c.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const s=o({line:e,key:t});return N.includes(t+1)&&(s.className=`${s.className} docusaurus-highlight-code-line`),l.createElement("div",(0,n.Z)({key:t},s),e.map(((e,t)=>l.createElement("span",(0,n.Z)({key:t},i({token:e,key:t}))))))})))),l.createElement("button",{ref:$,type:"button","aria-label":"Copy code to clipboard",className:(0,a.Z)(p),onClick:L},v?"Copied":"Copy")))}))}}}]);