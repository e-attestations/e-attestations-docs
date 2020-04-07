(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(132)),c={id:"r-1-postman",title:"Postman collection",sidebar_label:"Postman collection"},i={id:"r-1-postman",title:"Postman collection",description:'To go even faster and facilitate the integration and exploration of our API we provide <a href = "https://raw.githubusercontent.com/e-attestations/ea-api-rest-postman/master/eAttestations- API-REST-multi-version.postman_collection.json "> a Postman collection </a> which you can import into postman and test quickly.',source:"@site/docs/r-1-postman.md",permalink:"/docs/r-1-postman",sidebar_label:"Postman collection",sidebar:"docs",previous:{title:"Error Codes",permalink:"/docs/d-2-error-codes"},next:{title:"OpenAPI v3",permalink:"/docs/r-2-openapiv3"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To go even faster and facilitate the integration and exploration of our API we provide ",Object(a.b)("a",{href:"https://raw.githubusercontent.com/e-attestations/ea-api-rest-postman/master/eAttestations- API-REST-multi-version.postman_collection.json "}," a Postman collection ")," which you can import into postman and test quickly."),Object(a.b)("p",null,"You will have to define some variables (user, password and server_url) to use this test suite."),Object(a.b)("p",null,"You can also explore each of the scenarios to functionally understand the possible use of the API."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Example of using newman")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'npx newman run "EA_API_REST.postman_collection.json" \\\n  --global-var username="<user>" \\\n  --global-var password="<password>" \\\n  --global-var server_url="https://rs.dev-e-attestations.com"\n')),Object(a.b)("p",null,"You can download Postman via ",Object(a.b)("a",{href:"https://www.getpostman.com/downloads/"}," this link ")," or use newman via ",Object(a.b)("a",{href:"https://github.com/postmanlabs/newman "}," this link "),"."))}p.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(f,i({ref:t},l,{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);