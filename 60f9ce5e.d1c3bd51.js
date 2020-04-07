(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(132)),i={id:"s-6-jwt-2",title:"Keep in mind about JWT",sidebar_label:"Keep in mind about JWT"},c={id:"s-6-jwt-2",title:"Keep in mind about JWT",description:"Keep in mind that, the JWT ...",source:"@site/docs/s-6-jwt-2.md",permalink:"/docs/s-6-jwt-2",sidebar_label:"Keep in mind about JWT",sidebar:"docs",previous:{title:"Authorization & JWT",permalink:"/docs/s-2-jwt"},next:{title:"Authentication URLs",permalink:"/docs/s-7-urls"}},u=[],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Keep in mind that, the JWT ..."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'is valid for a few seconds. You must make sure of the duration of validity of your TOKEN thanks to the data "expires_in" which indicates to you in number of seconds before it expires at the time of its obtaining (for example 1800 seconds corresponding to 30 \')'),Object(a.b)("li",{parentName:"ul"},"is to be used in all API requests"),Object(a.b)("li",{parentName:"ul"},"resides in the ",Object(a.b)("strong",{parentName:"li"},"access_token")," property"),Object(a.b)("li",{parentName:"ul"},"needs to be set within an ",Object(a.b)("inlineCode",{parentName:"li"},"Authorization")," HHTP Header sous la forme :")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'curl -X GET \\\n  https://api.dev-e-attestations.com/api/v1/account/97862/dossiers \\\n    -H "Authorization: Bearer <JWT_TOKEN>"\n')))}s.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);