(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,O=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=(n(0),n(100)),o={id:"c-0-response-format",title:"Responses format",sidebar_label:"Responses format"},b={unversionedId:"c-0-response-format",id:"c-0-response-format",isDocsHomePage:!1,title:"Responses format",description:"Responses are in JSON format composed of the following (optional) attributes:",source:"@site/docs/c-0-response-format.mdx",permalink:"/docs/c-0-response-format",editUrl:"https://github.com/e-attestations/e-attestations-docs/tree/master/docs/c-0-response-format.mdx",sidebar_label:"Responses format",sidebar:"docs",previous:{title:"Create a dossier",permalink:"/docs/t-1-create-dossier"},next:{title:"Account",permalink:"/docs/c-1-account"}},l=[{value:"Encoding",id:"encoding",children:[]},{value:"HTTP codes",id:"http-codes",children:[]}],i={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Responses are in JSON format composed of the following (optional) attributes:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attributes"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"containing the result of the operation, if successful")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"page"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"requested the page number, returned only in case of paginated content")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"requested page size, returned in case of paginated content")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"totalElements"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"total number of items returned")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"messages"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"information, warning or error messages")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Example of messages")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  content: [\n    {\n      ...\n    }],\n  messages: {\n    warning: [\n      {\n        code: "W001",\n        message: "La cl\xe9 d\'API expire dans 3 jours"\n      }\n    ]\n  }\n}\n')),Object(c.b)("h2",{id:"encoding"},"Encoding"),Object(c.b)("p",null,"eAttestations APIs use UTF8 encoding"),Object(c.b)("h2",{id:"http-codes"},"HTTP codes"),Object(c.b)("p",null,"On every HTTP response a HTTP code with a value greater than 400 will indicate an error."),Object(c.b)("p",null,"These are the main HTTP code that developpers need to control on client side.\nin order to behave accordingly."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"HTTP Code"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Meaning"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"401"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unauthenticated user"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The request is not authenticated.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"403"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Access denied"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The request is not authorized")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"404"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"resource not found"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The requested resources or search did not fetch any result")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"500"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Internal server error"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something wrong happened on server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"503"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Server error"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something wrong happened on server side due to the request")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Example of messages send with HTTP error code > 400")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "timestamp": "2019-02-05T09:06:15.245+0000",\n    "status": 404,\n    "error": "Not Found",\n    "message": "No message available",\n    "path": "/api/v1/account/1234567/876543"\n}\n')))}s.isMDXComponent=!0}}]);