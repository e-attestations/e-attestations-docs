(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(117)),c={id:"c-5-documents",title:"Documents",sidebar_label:"Documents"},i={unversionedId:"c-5-documents",id:"c-5-documents",isDocsHomePage:!1,title:"Documents",description:"Documents are elements of the compliance evidence for requirement's request and defined by e-Attestations as a document type with generally one type of document per requirement and for which a response is provided by e-Attestations or the third party itself.",source:"@site/docs/c-5-documents.mdx",slug:"/c-5-documents",permalink:"/docs/c-5-documents",editUrl:"https://github.com/e-attestations/e-attestations-docs/tree/master/docs/c-5-documents.mdx",version:"current",sidebar_label:"Documents",sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/c-4-requirement"},next:{title:"Files",permalink:"/docs/c-6-files"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Documents are elements of the compliance evidence for requirement's request and defined by e-Attestations as a document type with generally one type of document per requirement and for which a response is provided by e-Attestations or the third party itself."),Object(a.b)("p",null,"A 'document' can also be called as an evidence and can be :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a signature"),Object(a.b)("li",{parentName:"ul"},"data"),Object(a.b)("li",{parentName:"ul"},"one or more files"),Object(a.b)("li",{parentName:"ul"},"a set of data from a form to be completed by the declarant\netc.")),Object(a.b)("p",null,"A 'document' has a validity and therefore an expiry that the e-Attestations platform monitors continuously."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Example of dossier's documents GET request ",Object(a.b)("inlineCode",{parentName:"p"},"/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "content": [\n        {\n            "documentId": 510893525,\n            "documentCode": "JUSTIF_IMM",\n            "name": "JUSTIF_IMM",\n            "requestDate": "2018-09-19T10:02:46.435",\n            "present": true,\n            "listFileInformation": [\n                {\n                    "fileId": 4575539,\n                    "uploadDate": "2019-03-19T00:22:22.31",\n                    "fileUUID": "8d76e532ec39daa965da354e72a9cfa35c43c2ab",\n                    "fileCreation": "2019-03-19T00:22:22.299",\n                    "fileSize": 75422,\n                    "expirationDate": "2019-09-19T23:59:59.999"\n                }\n            ]\n        },\n        {\n            "documentId": 510893524,\n            "documentCode": "ATT_VIGI",\n            "name": "ATT_VIGI",\n            "requestDate": "2018-09-19T10:02:46.382",\n            "present": true,\n            "listFileInformation": [\n                {\n                    "fileId": 4224544,\n                    "uploadDate": "2018-10-30T08:57:17.765",\n                    "fileUUID": "22945cf9490f46396fb2f6e6bf716d383836cb9f",\n                    "fileCreation": "2018-10-30T08:57:17.759",\n                    "fileSize": 73927,\n                    "expirationDate": "2019-03-31T23:59:59.999"\n                }\n            ]\n        }\n    ]\n}\n')))}l.isMDXComponent=!0}}]);