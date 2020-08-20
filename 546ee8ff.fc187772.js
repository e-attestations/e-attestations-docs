(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,f=l["".concat(a,".").concat(d)]||l[d]||b[d]||c;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=(n(0),n(100));const c={id:"c-1-account",title:"Account",sidebar_label:"Account"},a={unversionedId:"c-1-account",id:"c-1-account",isDocsHomePage:!1,title:"Account",description:"This resource is the ordering customer and service subscriber to e-Attestations account.",source:"@site/docs/c-1-account.mdx",permalink:"/docs/c-1-account",editUrl:"https://github.com/e-attestations/e-attestations-docs/tree/master/docs/c-1-account.mdx",sidebar_label:"Account",sidebar:"docs",previous:{title:"Responses format",permalink:"/docs/c-0-response-format"},next:{title:"Thirdparties",permalink:"/docs/c-2-thirdparties"}},i=[],u={rightToc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This resource is the ordering customer and service subscriber to e-Attestations account."),Object(o.b)("p",null,"The account identifier is returned in the ",Object(o.b)("inlineCode",{parentName:"p"},"account_ids")," returned in the JWT token."),Object(o.b)("p",null,"In addition, you can also retrieve your account identifier from the ",Object(o.b)("inlineCode",{parentName:"p"},"/account")," endpoint without any parameters."),Object(o.b)("p",null,"All requests must include the customer identifier so that every time the account's activation and subscription to the service are verified"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"/account/<your_account_id_goes_here>")),Object(o.b)("aside",null,"You can store your account identifier in your configuration sets or choose to retrieve it dynamically. The latter solution being the most flexible."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"> Example for '/account'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n   "content": [\n       {\n           "id": 119631,\n           "creation": "2015-04-02T10:56:07.736",\n           "account": "CPTDO2E2FFC774EDD6637F",\n           "name": "Compte Test",\n           "company": "Compte Test",\n           "maxDossiers": 10,\n           "subscriptionDate": "2019-04-29T13:20:02.102973",\n           "subscriptionStatus": "ACTIVE",\n           "subscriptions": [\n               {\n                   "accountId": 119631,\n                   "key": "APIEDGE",\n                   "endSubscriptionDate": null,\n                   "startSubscriptionDate": "2019-04-29T13:20:02.102973",\n                   "status": "ACTIVE"\n               }\n           ]\n       }\n   ]\n}\n')))}s.isMDXComponent=!0}}]);