(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(119)),c={id:"c-5-documents",title:"Documents",sidebar_label:"Documents"},i={unversionedId:"c-5-documents",id:"c-5-documents",isDocsHomePage:!1,title:"Documents",description:"Documents are elements of the compliance evidence for requirement's request and defined by e-Attestations as a document type with generally one type of document per requirement and for which a response is provided by e-Attestations or the third party itself.",source:"@site/docs/c-5-documents.mdx",slug:"/c-5-documents",permalink:"/docs/c-5-documents",editUrl:"https://github.com/e-attestations/e-attestations-docs/tree/master/docs/c-5-documents.mdx",version:"current",sidebar_label:"Documents",sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/c-4-requirement"},next:{title:"Files",permalink:"/docs/c-6-files"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Documents are elements of the compliance evidence for requirement's request and defined by e-Attestations as a document type with generally one type of document per requirement and for which a response is provided by e-Attestations or the third party itself."),Object(o.b)("p",null,"An evidence can be:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a file upload by the thirdparty"),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"metadata")," generated by e-Attestations based on analysis and data processing"),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"formdata")," which is a set of data from a form to be completed by the declarant")),Object(o.b)("p",null,"etc."),Object(o.b)("p",null,"A 'document' has a validity and therefore an expiry that the e-Attestations platform monitors continuously."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Example of dossier's documents GET request ",Object(o.b)("inlineCode",{parentName:"p"},"/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "content": [\n                {\n                    "documentId": 511148274,\n                    "documentCode": "ADMP",\n                    "documentName": "Attestation d\u2019assurance multirisque professionnelle",\n                    "documentNameEn": null,\n                    "requestDate": "2018-12-04T10:03:49.031",\n                    "present": true,\n                    "isPresent": "true",\n                    "evidences": [\n                        {\n                            "id": 4337069,\n                            "uploadDate": "2018-12-04T10:17:38.008",\n                            "fileUUID": "d92a4c4e3af4ce21c4941a5c6bd7badb71d522e1",\n                            "fileCreation": "2018-12-04T10:17:38.004",\n                            "fileSize": 224457,\n                            "expirationDate": "2099-12-31T23:59:59.999",\n                            "metadata": {\n                                "verified": "false"\n                            },\n                            "formdata": [\n                                {\n                                    "type": "string",\n                                    "key": "f_670_ndc_0",\n                                    "title": "N\xb0 de contrat",\n                                    "order": 0,\n                                    "value": "TEST"\n                                },\n                                {\n                                    "type": "string",\n                                    "key": "f_670_nmdl_1",\n                                    "title": "Nom de l\'assureur ou du garant",\n                                    "order": 1,\n                                    "value": "TEST"\n                                },\n                                {\n                                    "type": "phone",\n                                    "key": "f_670_ndt_2",\n                                    "title": "N\xb0 de t\xe9l. de l\'assureur ou du garant",\n                                    "order": 2,\n                                    "value": "+33 1 00 00 00 00"\n                                },\n                                {\n                                    "type": "amount",\n                                    "key": "f_670_plfnd_3",\n                                    "title": "Plafond de garantie",\n                                    "order": 3,\n                                    "value": "666"\n                                }\n                            ]\n                        }\n                    ]\n                },\n    ]\n}\n')))}l.isMDXComponent=!0}}]);