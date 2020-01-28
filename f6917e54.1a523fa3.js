(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(121)),c={id:"d-1-types",title:"Nomenclature",sidebar_label:"Nomenclature"},l={id:"d-1-types",title:"Nomenclature",description:"## Identifier type",source:"@site/docs/d-1-types.md",permalink:"/docs/d-1-types",sidebar_label:"Nomenclature",sidebar:"docs",previous:{title:"Files",permalink:"/docs/c-6-files"},next:{title:"Error Codes",permalink:"/docs/d-2-error-codes"}},o=[{value:"Identifier type",id:"identifier-type",children:[]},{value:"Completeness indicator",id:"completeness-indicator",children:[]}],b={rightToc:o},d="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"identifier-type"},"Identifier type"),Object(i.b)("p",null,"An establishment or a company (in the legal person sense) is identified in the e-Attestations system using a national identifier code (SIRET, SIREN for France) or an international number (eg VAT identifier )."),Object(i.b)("p",null,"e-Attestations APIs offer two types of identifiers for Thirdparties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Code"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Country"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CIT001"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SIRET"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"France"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Identifier used in France to qualify establishments. Number of 14 digits verifying Luhn's algorithm ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://fr.wikipedia.org/wiki/Formule_de_Luhn"}),"Wikipedia"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CIT002"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TVA"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CEE"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Identifier used by the EEC for companies subject to corporation tax. More information on ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/VAT_identification_number"}),"Wikipedia"))))),Object(i.b)("p",null,"New types of identifiers may be implemented as the API evolves."),Object(i.b)("h2",{id:"completeness-indicator"},"Completeness indicator"),Object(i.b)("p",null,"e-Attestations completeness indicator provides simple information that the third party has fully covered the requirements for compliance required by client compliance."),Object(i.b)("p",null,'Example: a third party surveillance file is considered complete for the "due diligence" indicator, if all the documents relating to the due diligence are present and validated.'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Code"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"I001"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Due diligence")))))}p.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,s=d[l+"."+p]||d[p]||b[p]||i;return n?r.a.createElement(s,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(s,Object.assign({},{ref:t},o))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[o]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);