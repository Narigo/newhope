import{H as e,S as n,i as t,s,e as o,t as r,c as a,a as i,g as c,d as u,b as l,f,F as h,h as g,k as p,n as d,G as b,I as v,J as m}from"../../chunks/vendor-a6f63953.js";const $={subscribe:n=>(()=>{const n=e("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}})().page.subscribe(n)};function w(e,n,t){const s=e.slice();return s[2]=n[t],s}function x(e){let n,t,s,p,d,b=e[2].name+"";return{c(){n=o("li"),t=o("a"),s=r("note: "),p=r(b),this.h()},l(e){n=a(e,"LI",{});var o=i(n);t=a(o,"A",{href:!0});var r=i(t);s=c(r,"note: "),p=c(r,b),r.forEach(u),o.forEach(u),this.h()},h(){l(t,"href",d=`${e[1].path}/${e[2].name}`)},m(e,o){f(e,n,o),h(n,t),h(t,s),h(t,p)},p(e,n){1&n&&b!==(b=e[2].name+"")&&g(p,b),3&n&&d!==(d=`${e[1].path}/${e[2].name}`)&&l(t,"href",d)},d(e){e&&u(n)}}}function y(e){let n,t,s,l,g=e[0],m=[];for(let o=0;o<g.length;o+=1)m[o]=x(w(e,g,o));return{c(){n=o("h2"),t=r("notes of newhope"),s=p(),l=o("ul");for(let e=0;e<m.length;e+=1)m[e].c()},l(e){n=a(e,"H2",{});var o=i(n);t=c(o,"notes of newhope"),o.forEach(u),s=d(e),l=a(e,"UL",{});var r=i(l);for(let n=0;n<m.length;n+=1)m[n].l(r);r.forEach(u)},m(e,o){f(e,n,o),h(n,t),f(e,s,o),f(e,l,o);for(let n=0;n<m.length;n+=1)m[n].m(l,null)},p(e,[n]){if(3&n){let t;for(g=e[0],t=0;t<g.length;t+=1){const s=w(e,g,t);m[t]?m[t].p(s,n):(m[t]=x(s),m[t].c(),m[t].m(l,null))}for(;t<m.length;t+=1)m[t].d(1);m.length=g.length}},i:b,o:b,d(e){e&&u(n),e&&u(s),e&&u(l),v(m,e)}}}var E=function(e,n,t,s){return new(t||(t=Promise))((function(o,r){function a(e){try{c(s.next(e))}catch(n){r(n)}}function i(e){try{c(s.throw(e))}catch(n){r(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}c((s=s.apply(e,n||[])).next())}))};function _({page:e,fetch:n}){return E(this,void 0,void 0,(function*(){const e="/notes.json",t=yield n(e);return t.ok?{props:{notes:yield t.json()}}:{status:t.status,error:new Error(`Could not load ${e}`)}}))}function j(e,n,t){let s;m(e,$,(e=>t(1,s=e)));let{notes:o}=n;return e.$$set=e=>{"notes"in e&&t(0,o=e.notes)},[o,s]}export default class extends n{constructor(e){super(),t(this,e,j,y,s,{notes:0})}}export{_ as load};
