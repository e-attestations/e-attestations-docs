(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(100));const i={id:"d-1-types",title:"Nomenclature",sidebar_label:"Nomenclature"},c={unversionedId:"d-1-types",id:"d-1-types",isDocsHomePage:!1,title:"Nomenclature",description:"Identifier type",source:"@site/docs/d-1-types.mdx",permalink:"/docs/d-1-types",editUrl:"https://github.com/e-attestations/e-attestations-docs/tree/master/docs/d-1-types.mdx",sidebar_label:"Nomenclature",sidebar:"docs",previous:{title:"Files",permalink:"/docs/c-6-files"},next:{title:"Error Codes",permalink:"/docs/d-2-error-codes"}},o=[{value:"Identifier type",id:"identifier-type",children:[]},{value:"Completeness indicator",id:"completeness-indicator",children:[]}],l={rightToc:o};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"identifier-type"},"Identifier type"),Object(a.b)("p",null,"An establishment or a company (in the legal person sense) is identified in the e-Attestations system using a national identifier code (SIRET, SIREN for France) or an international number (eg VAT identifier )."),Object(a.b)("p",null,"e-Attestations APIs offer two types of identifiers for Thirdparties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Code"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Country"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CIT001"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SIRET"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"France"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Identifier used in France to qualify establishments. Number of 14 digits verifying Luhn's algorithm ",Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"https://fr.wikipedia.org/wiki/Formule_de_Luhn"}),"Wikipedia"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CIT002"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TVA"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CEE"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Identifier used by the EEC for companies subject to corporation tax. More information on ",Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/VAT_identification_number"}),"Wikipedia"))))),Object(a.b)("p",null,"New types of identifiers may be implemented as the API evolves."),Object(a.b)("h2",{id:"completeness-indicator"},"Completeness indicator"),Object(a.b)("p",null,"e-Attestations completeness indicator provides simple information that the third party has fully covered the requirements for compliance required by client compliance."),Object(a.b)("p",null,'Example: a third party surveillance file is considered complete for the "due diligence" indicator, if all the documents relating to the due diligence are present and validated.'),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Code"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"I001"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Due diligence")))))}b.isMDXComponent=!0}}]);