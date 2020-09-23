(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{31:function(e,n,t){e.exports=t(59)},36:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(23),i=t.n(c),l=(t(36),t(12)),o=t(4),u=t.n(o),s=t(10),m=t(7),f=t(1),h=t(2);function d(){var e=Object(f.a)(["\n    font-size: 11px;\n    width: 64px;\n    margin: 3px 5px 0;\n"]);return d=function(){return e},e}function b(){var e=Object(f.a)(["\n    width: 20vw;\n"]);return b=function(){return e},e}function p(){var e=Object(f.a)(["\n    width: 14vw;\n"]);return p=function(){return e},e}function v(){var e=Object(f.a)(["\n    border: 1px solid #cccccc;\n    width: 14vw;\n"]);return v=function(){return e},e}var E=h.a.td(v()),g=Object(h.a)(E)(p()),w=Object(h.a)(E)(b()),k=h.a.button(d());function j(e){return r.a.createElement("tr",null,r.a.createElement(w,null,e.name),r.a.createElement(E,null,e.ticker),r.a.createElement(E,null,"$",parseFloat(Number(e.price.toFixed(4)))),r.a.createElement(E,null,e.showBalance?e.balance:"-"," "),r.a.createElement(g,null,r.a.createElement("form",{action:"#",method:"POST"},r.a.createElement(k,{className:"btn btn-info",onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)}},"Refresh Price"),r.a.createElement(k,{className:"btn btn-warning",onClick:function(n){n.preventDefault(),e.handleTransaction(!0,e.tickerId)}},"Buy"),r.a.createElement(k,{className:"btn btn-danger",onClick:function(n){n.preventDefault(),e.handleTransaction(!1,e.tickerId)}},"Sell"))))}function O(){var e=Object(f.a)(["\n    font-size: 1rem;\n"]);return O=function(){return e},e}var x=h.a.table(O());function y(e){return r.a.createElement(x,{className:"table table-primary table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Ticker"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Balance"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.coinData.map((function(n){var t=n.key,a=n.name,c=n.ticker,i=n.price,l=n.balance;return r.a.createElement(j,{key:t,handleRefresh:e.handleRefresh,handleTransaction:e.handleTransaction,name:a,ticker:c,price:i,showBalance:e.showBalance,balance:l,tickerId:t})}))))}var B=t(27),S=t(28),N=t(30),C=t(29);function D(){var e=Object(f.a)(["\n    font-size: 3rem;\n    line-heigth: 8rem;\n    font-weight: bold;\n    min-width: 300px;\n    "]);return D=function(){return e},e}function T(){var e=Object(f.a)(["\n    background-color: #282c34;\n    min-height: 10vh;\n    width: 100%\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: rgb(255, 255, 255);\n"]);return T=function(){return e},e}var I=h.a.header(T()),z=h.a.h1(D()),F=function(e){Object(N.a)(t,e);var n=Object(C.a)(t);function t(){return Object(B.a)(this,t),n.apply(this,arguments)}return Object(S.a)(t,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement("div",null,r.a.createElement(z,null,"Coin Exchange.")))}}]),t}(a.Component);function R(){var e=Object(f.a)(["\n    width: 150px;\n    vertical-align: middle;\n"]);return R=function(){return e},e}function P(){var e=Object(f.a)(["\n    margin: 0 8px;\n"]);return P=function(){return e},e}function U(){var e=Object(f.a)(["\n    min-width: 250px;\n    margin: 0.5rem 0 0 2.5rem;\n    font-size: 1.5em;\n    text-align: left;\n    vertical-align: middle;\n"]);return U=function(){return e},e}function q(){var e=Object(f.a)(["\n    font-size: 2rem;\n    text-align: center;\n    margin: 0 auto 2rem auto;    \n    margion-buttom: 2rem;\n    line heighth: 3rem;\n"]);return q=function(){return e},e}var J=h.a.section(q()),V=h.a.div(U()),W=h.a.button(P()),$=Object(h.a)(W)(R()),A=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function H(e){var n=e.showBalance?"Hide Balance":"Show Balance",t="\xa0";e.showBalance&&(t=r.a.createElement(r.a.Fragment,null,A.format(e.amount)));var a="btn "+(e.showBalance?"btn-warning":"btn-info");return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null,t),r.a.createElement(J,null,r.a.createElement($,{onClick:e.handleBalanceVisibiltyChange,className:a},n),r.a.createElement(W,{className:"btn btn-success",onClick:e.handleBrrrr},r.a.createElement("i",{className:"fas fa-hand-holding-usd"}))))}var M=t(6),G=t.n(M);t(55),t(56);function K(){var e=Object(f.a)(["\n  text-align: center;\n  background-color: #553d74;\n  color: #cccccc;\n  "]);return K=function(){return e},e}var L=h.a.div(K());var Q=function(e){var n=Object(a.useState)(1e4),t=Object(m.a)(n,2),c=t[0],i=t[1],o=Object(a.useState)(!1),f=Object(m.a)(o,2),h=f[0],d=f[1],b=Object(a.useState)([]),p=Object(m.a)(b,2),v=p[0],E=p[1],g=function(){var e=Object(s.a)(u.a.mark((function e(){var n,t,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",a=t.map((function(e){return G.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(a);case 8:r=e.sent,c=r.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:n.quotes.USD.price}})),E(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){0===v.length&&g()}));var w=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,G.a.get(t);case 3:a=e.sent,r=a.data.quotes.USD.price,c=v.map((function(e){var t=Object(l.a)({},e);return n===e.key&&(t.price=r),t})),E(c);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(L,null,r.a.createElement(F,null),r.a.createElement(H,{amount:c,showBalance:h,handleBrrrr:function(){i((function(e){return e+1200}))},handleBalanceVisibiltyChange:function(){d((function(e){return!e}))}}),r.a.createElement(y,{coinData:v,showBalance:h,handleTransaction:function(e,n){var t=e?1:-1,a=v.map((function(e){var a=Object(l.a)({},e);return n===e.key&&(a.balance+=t,i((function(e){return e-t*a.price}))),a}));E(a)},handleRefreh:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.91c88743.chunk.js.map