(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{177:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ea-create-dossier-async-aaabdba55a73108b5d54ded2bbae8101.png"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(6),o=(r(0),r(92)),i={id:"t-1-create-dossier",title:"Create a dossier",sidebar_label:"Create a dossier"},s={unversionedId:"t-1-create-dossier",id:"t-1-create-dossier",isDocsHomePage:!1,title:"Create a dossier",description:"Why ?",source:"@site/docs/t-1-create-dossier.mdx",slug:"/t-1-create-dossier",permalink:"/docs/t-1-create-dossier",version:"current",sidebar_label:"Create a dossier",sidebar:"docs",previous:{title:"Authentication & Authorization",permalink:"/docs/s-1-jwt"},next:{title:"Responses format",permalink:"/docs/c-0-response-format"}},c=[{value:"Why ?",id:"why-",children:[]},{value:"How ?",id:"how-",children:[]},{value:"Create a dossier launches the workflow to third party",id:"create-a-dossier-launches-the-workflow-to-third-party",children:[]},{value:"The asynchronous nature of dossier creation",id:"the-asynchronous-nature-of-dossier-creation",children:[{value:"Fetch creation results",id:"fetch-creation-results",children:[]},{value:"What if the third party doesn&#39;t exist ?",id:"what-if-the-third-party-doesnt-exist-",children:[]},{value:"Error codes",id:"error-codes",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-"},"Why ?"),Object(o.b)("p",null,"The creation of a compliance monitoring 'dossier' in e-Attestations is at the heart of the third party recruitment process."),Object(o.b)("p",null,"This step is also the recruitment phase of your third party who will then be informed by email that a follow-up file is pending."),Object(o.b)("h2",{id:"how-"},"How ?"),Object(o.b)("p",null,"You can create a dossier by using the POST http verb with ",Object(o.b)("inlineCode",{parentName:"p"},"/account/{accountId}/dossiers")," enpoint with a JSON body containing the parameters of your dossier."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Create a 'dossier' with POST to ",Object(o.b)("inlineCode",{parentName:"p"},"/account/{accountId}/dossiers"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl --request POST \\\n  --url https://edge.test-e-attestations.com/api/v1/account/{{accountId}}/dossiers \\\n  --header \'Authorization: Bearer {{token}}\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "companyIdType": "CIT001",\n    "companyIdValue": "50382936800045",\n    "thirdpartyCode": "",\n    "dossierReference": "DOSSIER_REF_X",\n    "description": "This is dossier for xxx",\n    "purchasingCategory": "",\n    "expirationDate": "2020-05-31",\n    "requiredDocuments": [ "JUSTIF_IMM" ],\n    "thirdpartyEmail": ["nobody@e-attestations.com"],\n    "userInCharge": ["nobody@e-attestations.com"]\n    }\'\n')),Object(o.b)("aside",null,"The documents to be required depends on your needs, the nature of your third party, the market, exogenous parameters, etc. Your e-Attestations account manager is there to advise you."),Object(o.b)("h2",{id:"create-a-dossier-launches-the-workflow-to-third-party"},"Create a dossier launches the workflow to third party"),Object(o.b)("p",null,"A continuous workflow then starts for the third party who will have to fill the proofs required by your dossier."),Object(o.b)("p",null,"When creating a dossier, the triggered workflow is asynchronous and is described as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"automatic fetch of third party's data"),Object(o.b)("li",{parentName:"ul"},"third party's invitation is sent thanks to the contact email"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"possibly")," sending request emails for documents or evidence requested if they're not already present"),Object(o.b)("li",{parentName:"ul"},"the calculation of a completeness indicator ('I001') representing the good health of the monitoring with regard to the requirement of the monitoring dossier")),Object(o.b)("p",null,"But also :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"regular reminders (by email) sent to third parties all along the dossier's life"),Object(o.b)("li",{parentName:"ul"},"updating data regularly and on events"),Object(o.b)("li",{parentName:"ul"},"production of other indicators and alarms"),Object(o.b)("li",{parentName:"ul"},"reporting services"),Object(o.b)("li",{parentName:"ul"},"diagnoses"),Object(o.b)("li",{parentName:"ul"},"e-Attestations advice and expertise")),Object(o.b)("h2",{id:"the-asynchronous-nature-of-dossier-creation"},"The asynchronous nature of dossier creation"),Object(o.b)("p",null,"We process dossier creation asynchronously so you don't have to wait."),Object(o.b)("p",null,"It's a very powerful mecanism, giving a lot of flexibility and adaptability for the customer/system using APIs."),Object(o.b)("p",null,"'Dossier' creation is an ",Object(o.b)("strong",{parentName:"p"},"asynchronous process"),". This asynchronism is induced by the process (itself of an asynchronous nature) of qualification of third parties' information by our internal data sources."),Object(o.b)("p",null,"This endpoint launches the import process and returns a process identifier (processId).\nYou will need to use it to know the result of the import asynchronously."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Async dossier creation",src:r(177).default})),Object(o.b)("h3",{id:"fetch-creation-results"},"Fetch creation results"),Object(o.b)("p",null,"The endpoint (GET) ",Object(o.b)("inlineCode",{parentName:"p"},"/account/{accountId}/dossier/processes")," makes it easy to follow and catch the import results\nthanks to the identifier ",Object(o.b)("inlineCode",{parentName:"p"},"processId"),' of the import process returned during the call "Creation of a dossier "(POST / account / {accountId} / dossiers).'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It is important to check the call parameters carefully and to take into account the error codes and their meaning.")),Object(o.b)("h3",{id:"what-if-the-third-party-doesnt-exist-"},"What if the third party doesn't exist ?"),Object(o.b)("p",null,"If the third party does not exist, it is created in the e-Attestations platform."),Object(o.b)("p",null,"This is why we need third party identifier composed using ",Object(o.b)("inlineCode",{parentName:"p"},"companyIdType")," code and ",Object(o.b)("inlineCode",{parentName:"p"},"companyIdalue")," value."),Object(o.b)("p",null,"We advise you to always use your own keys (from your database or system) with the field ",Object(o.b)("inlineCode",{parentName:"p"},"thirdpartyCode"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For a given third party, the field ",Object(o.b)("inlineCode",{parentName:"p"},"thirdpartyCode")," must always be the same even if you create several dossiers for this third party."))),Object(o.b)("h3",{id:"error-codes"},"Error codes"),Object(o.b)("p",null,"During dossier creation API can raise error codes."),Object(o.b)("p",null,"this is the error codes you need to know and adapt you logic uppon."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Codes"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Errors when creating a folder"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E100"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"There is no third party for this criteria")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E101"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Error when qualifying the establishment")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E102"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The establishment does not exist")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E103"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The establishment is closed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E104"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Too many third parties for this criteria")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E112"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The supplier code (thirdpartyCode) already used for another supplier")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E113"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Non active ordering account")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E121"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Impossible to create a dossier based on TVA for a french thirdparty. Plesae use SIRET number")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E122"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Impossible to import a non French thirdparty, subscription is inactive for international third parties")))))}d.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(r),u=a,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return r?n.a.createElement(h,s(s({ref:t},l),{},{components:r})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);