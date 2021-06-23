(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(92)),a={id:"c-4-requirement",title:"Requirements",sidebar_label:"Requirements"},s={unversionedId:"c-4-requirement",id:"c-4-requirement",isDocsHomePage:!1,title:"Requirements",description:"Requirements are resources related to a set of requests in the business area of \u200b\u200bthe client (legal, compliance, business, etc.).",source:"@site/docs/c-4-requirements.mdx",slug:"/c-4-requirement",permalink:"/docs/c-4-requirement",version:"current",sidebar_label:"Requirements",sidebar:"docs",previous:{title:"Dossiers",permalink:"/docs/c-3-dossiers"},next:{title:"Documents",permalink:"/docs/c-5-documents"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Requirements are resources related to a set of requests in the business area of \u200b\u200bthe client (legal, compliance, business, etc.)."),Object(i.b)("p",null,"As part of the continuous monitoring of third party compliance, a requirement is materialized in the workflow by a requested evidence ('document') and awaiting a response."),Object(i.b)("p",null,"In most case response has already been provided by third parties or e-Attestations."),Object(i.b)("p",null,"This response is most often provided by e-Attestations, which catalogs and aggregates the responses from numerous data sources from various administrations and trusted data providers."),Object(i.b)("p",null,"The answer can also be given by the third party himself in several cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a file with a required document"),Object(i.b)("li",{parentName:"ul"},"entering specific data"),Object(i.b)("li",{parentName:"ul"},"one or more documents and their linked file(s)"),Object(i.b)("li",{parentName:"ul"},"a dated and auditable electronic signature"),Object(i.b)("li",{parentName:"ul"},"any other element requested constituting proof of compliance in the context of monitoring.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Example of GET one's 'dossier' requirements ",Object(i.b)("inlineCode",{parentName:"p"},"/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/requirements"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "content": [\n        {\n            "documentId": 494,\n            "accountId": 119631,\n            "code": "NIT0RSS",\n            "name": "NOTE-INSTRUCTIONS-TECHNIQUES-003-2012-Renseignements-surfaces-sinistrees",\n            "descriptionCategoryFr": "DOCUMENTS CONTRACTUELS",\n            "descriptionCategoryEn": "Contractual documents",\n            "descriptionFr": "NOTE INSTRUCTIONS TECHNIQUES 003-2012 Renseignements surfaces sinistr\xe9es",\n            "descriptionEn": "NOTE INSTRUCTIONS TECHNIQUES 003-2012 Renseignements surfaces sinistr\xe9es"\n        },\n        {\n            "documentId": 5,\n            "accountId": 119631,\n            "code": "LST_SAL_ETR",\n            "name": "Autorisationsdetravail",\n            "descriptionCategoryFr": "REGULARITE SOCIALE",\n            "descriptionCategoryEn": "Social regularity",\n            "descriptionFr": "Liste nominative des salari\xe9s \xe9trangers soumis \xe0 autorisation de travail",\n            "descriptionEn": "List of names of posted workers subjected to work permit"\n        }\n    ]\n}\n')))}l.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(b,s(s({ref:t},u),{},{components:n})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);