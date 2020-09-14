(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?o.a.createElement(h,s(s({ref:t},l),{},{components:r})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},193:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ea-create-dossier-async-aaabdba55a73108b5d54ded2bbae8101.png"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(105)),i={id:"t-1-create-dossier",title:"Create a dossier",sidebar_label:"Create a dossier"},s={unversionedId:"t-1-create-dossier",id:"t-1-create-dossier",isDocsHomePage:!1,title:"Create a dossier",description:"Why ?",source:"@site/docs/t-1-create-dossier.mdx",slug:"/t-1-create-dossier",permalink:"/docs/t-1-create-dossier",editUrl:"https://github.com/e-attestations/e-attestations-docs/tree/master/docs/t-1-create-dossier.mdx",version:"current",sidebar_label:"Create a dossier",sidebar:"docs",previous:{title:"Authentication URLs",permalink:"/docs/s-7-urls"},next:{title:"Responses format",permalink:"/docs/c-0-response-format"}},c=[{value:"Why ?",id:"why-",children:[]},{value:"How ?",id:"how-",children:[]},{value:"Create a dossier launches the workflow to thirdparty",id:"create-a-dossier-launches-the-workflow-to-thirdparty",children:[]},{value:"The asynchronous nature of dossier creation",id:"the-asynchronous-nature-of-dossier-creation",children:[{value:"Fetch creation results",id:"fetch-creation-results",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"why-"},"Why ?"),Object(a.b)("p",null,"The creation of a compliance monitoring 'dossier' in e-Attestations is at the heart of the thirdparty recruitment process."),Object(a.b)("p",null,"This step is also the recruitment phase of your third party who will then be informed by email that a follow-up file is pending."),Object(a.b)("h2",{id:"how-"},"How ?"),Object(a.b)("p",null,"You can create a dossier by using the POST http verb with ",Object(a.b)("inlineCode",{parentName:"p"},"/account/{account}/dossiers")," enpoint with a JSON body containing the parameters of your dossier."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Create a 'dossier' with POST to ",Object(a.b)("inlineCode",{parentName:"p"},"/account/{account}/dossiers"))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl --request POST \\\n  --url https://rs.test-e-attestations.com/api/v1/account/119631/dossiers \\\n  --header \'Authorization: Bearer {{token}}\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "companyIdType": "CIT001",\n    "companyIdValue": "50382936800045",\n    "thirdpartyCode": "",\n    "dossierReference": "DOSSIER_REF_X",\n    "description": "This is dossier for xxx",\n    "purchasingCategory": "",\n    "expirationDate": "2020-05-31",\n    "requiredDocuments": [ "JUSTIF_IMM" ],\n    "thirdpartyEmail": ["nobody@e-attestations.com"],\n    "userInCharge": ["nobody@e-attestations.com"]\n    }\'\n')),Object(a.b)("aside",null,"The compliance to be required depends on your needs, the nature of your third party, the market, exogenous parameters, etc. Your e-Attestations account manager is there to advise you."),Object(a.b)("h2",{id:"create-a-dossier-launches-the-workflow-to-thirdparty"},"Create a dossier launches the workflow to thirdparty"),Object(a.b)("p",null,"A continuous workflow then starts for the third party who will then have to file the proofs required by your dossier."),Object(a.b)("p",null,"When creating a dossier, the triggered workflow is asynchronous and is described as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"automatic fetch of third party's data"),Object(a.b)("li",{parentName:"ul"},"third party's invitation is sent thanks to the contact email"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"possibly")," sending request emails for documents or evidence requested if they're not already present"),Object(a.b)("li",{parentName:"ul"},"the calculation of a completeness indicator ('I001') representing the good health of the monitoring with regard to the requirement of the monitoring dossier")),Object(a.b)("p",null,"But also :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"regular reminders (by email) sent to third parties all along the dossier's life"),Object(a.b)("li",{parentName:"ul"},"updating data regularly and on events"),Object(a.b)("li",{parentName:"ul"},"production of other indicators and alarms"),Object(a.b)("li",{parentName:"ul"},"reporting services"),Object(a.b)("li",{parentName:"ul"},"diagnoses"),Object(a.b)("li",{parentName:"ul"},"e-Attestations advice and expertise")),Object(a.b)("h2",{id:"the-asynchronous-nature-of-dossier-creation"},"The asynchronous nature of dossier creation"),Object(a.b)("p",null,"Since the dossier creation processing can last several seconds, the process is ",Object(a.b)("strong",{parentName:"p"},"asynchronous "),"."),Object(a.b)("p",null,"When creating an identifier for monitoring the import processing (processId) is returned.\nYou will need to use it to know the result of the import asynchronously."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Async dossier creation",src:r(193).default})),Object(a.b)("h3",{id:"fetch-creation-results"},"Fetch creation results"),Object(a.b)("p",null,"The endpoint (GET) ",Object(a.b)("inlineCode",{parentName:"p"},"/account/{accountId}/dossier/processes")," makes it easy to follow and catch the import results."),Object(a.b)("p",null,'thanks to the identifier of the import process returned during the call "Creation of a folder "(POST / account / {accountId} / folders).'),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is important to check the call parameters carefully and to take into account the error codes and their meaning.")))}u.isMDXComponent=!0}}]);