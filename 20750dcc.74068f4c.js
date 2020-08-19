(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(130)),i={id:"c-4-requirement",title:"Requirements",sidebar_label:"Requirements"},c={id:"c-4-requirement",title:"Requirements",description:"Requirements are resource related to a set of requests in the business area of \u200b\u200bthe client (legal, compliance, business, etc.).",source:"@site/docs/c-4-requirements.md",permalink:"/docs/c-4-requirement",sidebar_label:"Requirements",sidebar:"docs",previous:{title:"Dossiers",permalink:"/docs/c-3-dossiers"},next:{title:"Documents",permalink:"/docs/c-5-documents"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Requirements are resource related to a set of requests in the business area of \u200b\u200bthe client (legal, compliance, business, etc.)."),Object(a.b)("p",null,"As part of the continuous monitoring of third party compliance, a requirement is materialized in the workflow by a requested evidence ('document') and awaiting a response."),Object(a.b)("p",null,"In most case response has already been provided by thirdparty or e-Attestations."),Object(a.b)("p",null,"This response is most often provided by e-Attestations, which catalogs and aggregates the responses from numerous data sources from various administrations and trusted data providers."),Object(a.b)("p",null,"The answer can also be given by the thirdparty himself in several cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a file with a required document"),Object(a.b)("li",{parentName:"ul"},"entering specific data"),Object(a.b)("li",{parentName:"ul"},"one or more documents and their linked file(s)"),Object(a.b)("li",{parentName:"ul"},"a dated and auditable electronic signature"),Object(a.b)("li",{parentName:"ul"},"any other element requested constituting proof of compliance in the context of monitoring.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Example of GET one's 'dossier' requirements ",Object(a.b)("inlineCode",{parentName:"p"},"/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/requirements"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "content": [\n        {\n            "documentId": 1,\n            "accountId": 119631,\n            "code": "ATT_VIGI",\n            "name": "Attestationdevigilance6mois",\n            "dossierId": 836261\n        },\n        {\n            "documentId": 2,\n            "accountId": 119631,\n            "code": "JUSTIF_IMM",\n            "name": "Justificatifdimmatriculation",\n            "dossierId": 836261\n        }\n    ]\n}\n')))}l.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);