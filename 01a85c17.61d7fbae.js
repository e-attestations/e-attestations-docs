(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(122),l=t(120);a.default=function(e){var a=e.tags,t={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)}));var n=Object.entries(t).sort((function(e,a){var t=e[0],n=a[0];return t===n?0:t>n?1:-1})).map((function(e){var t=e[0],n=e[1];return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((function(e){return r.a.createElement(l.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(c.a,{title:"Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);