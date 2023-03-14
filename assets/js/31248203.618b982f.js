"use strict";(self.webpackChunksevencorners_styleguide=self.webpackChunksevencorners_styleguide||[]).push([[5281],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>p});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,p=f["".concat(i,".").concat(d)]||f[d]||m[d]||a;return t?n.createElement(p,l(l({ref:r},s),{},{components:t})):n.createElement(p,l({ref:r},s))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[f]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},964:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>g,toc:()=>O});var n=t(7462),o=t(7294),a=t(3905),l=t(9102),c=t.n(l);const i="compContainer_eX6N",u="white_ZTGT",s="dark_UT3w",f="copyIcon_rjIX";function m(e){let{name:r,color:t}=e;const n=c()(),[a,l]=o.useState(!1),m="secondary"===r||"warning"===r||"grey"===r||"grey-2"===r;return o.createElement(o.Fragment,null,o.createElement("div",{className:i,style:{backgroundColor:t},onClick:()=>{n.copyToClipboard(t),l(!0),setTimeout((()=>{l(!1)}),250)}},o.createElement("p",{className:m?s:u},o.createElement("strong",null,r)),o.createElement("div",{className:f},a?o.createElement("span",null,"Copied!"):o.createElement("i",{className:"fa-regular fa-copy"})),o.createElement("code",null,t)))}const d="compContainer_bOAu";const p=function(e){let{swatches:r}=e;return o.createElement(o.Fragment,null,o.createElement("div",{className:d},r.map(((e,r)=>o.createElement(o.Fragment,{key:r},o.createElement(m,{name:e.name,color:e.color}))))))},y={sidebar_position:1,slug:"/colors"},b="Colors",g={unversionedId:"brand/colors",id:"brand/colors",title:"Colors",description:"<ColorSwatchGrid",source:"@site/docs/brand/colors.mdx",sourceDirName:"brand",slug:"/colors",permalink:"/sevencorners-styleguide/colors",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/colors"},sidebar:"tutorialSidebar",previous:{title:"Brand",permalink:"/sevencorners-styleguide/category/brand"},next:{title:"Logos",permalink:"/sevencorners-styleguide/logos"}},v={},O=[],h={toc:O};function w(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colors"},"Colors"),(0,a.kt)(p,{swatches:[{color:"#602651",name:"primary"},{color:"#ffb837",name:"secondary"},{color:"#4a4a4a",name:"dark"},{color:"#333132",name:"dark-2"},{color:"#ffffff",name:"grey"},{color:"#c0c1c2",name:"grey-2"},{color:"#5f636c",name:"grey-3"},{color:"#14A56F",name:"success"},{color:"#d8cf13",name:"warning"},{color:"#E53B08",name:"danger"},{color:"#7952b3",name:"info"},{color:"#2C2E34",name:"dark-slate-grey"},{color:"#151415",name:"black"}],mdxType:"ColorSwatchGrid"}))}w.isMDXComponent=!0},9102:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,o=(n=t(7294))&&n.__esModule?n:{default:n};function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,l,c=[],i=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(c.push(n.value),c.length!==r);i=!0);}catch(s){u=!0,o=s}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw o}}return c}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=function(){var e=a(o.default.useState("Copy"),2),r=e[0],t=e[1],n=o.default.useRef(null);return{copyToClipboard:function(e){var r=null==n?void 0:n.current,o=e||(r?null==r?void 0:r.innerText:""),a=document.createElement("textarea");a.value=o,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),t("Copied!")},copyState:r,contentRef:n}};r.default=c,e.exports=r.default}}]);