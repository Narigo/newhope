import{S as t,i as e,s as n,e as r,t as o,k as s,c as a,a as l,g as c,d as f,n as h,f as i,F as u,h as d,b as p,I as m,l as g,H as v,G as $,J as E}from"../../chunks/vendor-f4c22ebf.js";import{p as j}from"../../chunks/stores-eebcf7ac.js";function b(t,e,n){const r=t.slice();return r[2]=e[n],r}function w(t,e,n){const r=t.slice();return r[5]=e[n],r}function x(t){let e,n,s,h=t[2].author+"";return{c(){e=r("p"),n=o("Von "),s=o(h)},l(t){e=a(t,"P",{});var r=l(e);n=c(r,"Von "),s=c(r,h),r.forEach(f)},m(t,r){i(t,e,r),u(e,n),u(e,s)},p(t,e){1&e&&h!==(h=t[2].author+"")&&d(s,h)},d(t){t&&f(e)}}}function y(t){let e,n,s=t[2].teaser+"";return{c(){e=r("p"),n=o(s)},l(t){e=a(t,"P",{});var r=l(e);n=c(r,s),r.forEach(f)},m(t,r){i(t,e,r),u(e,n)},p(t,e){1&e&&s!==(s=t[2].teaser+"")&&d(n,s)},d(t){t&&f(e)}}}function N(t){let e,n,m,g,v,$,E=t[5].title+"",j=t[5].teaser?` - ${t[5].teaser}`:"";return{c(){e=r("li"),n=r("a"),m=o(E),v=s(),$=o(j),this.h()},l(t){e=a(t,"LI",{class:!0});var r=l(e);n=a(r,"A",{href:!0});var o=l(n);m=c(o,E),o.forEach(f),v=h(r),$=c(r,j),r.forEach(f),this.h()},h(){p(n,"href",g=`${t[1].path.replace(/\/$/,"")}/${t[2].name}/${t[5].file}`),p(e,"class","svelte-146o7d9")},m(t,r){i(t,e,r),u(e,n),u(n,m),u(e,v),u(e,$)},p(t,e){1&e&&E!==(E=t[5].title+"")&&d(m,E),3&e&&g!==(g=`${t[1].path.replace(/\/$/,"")}/${t[2].name}/${t[5].file}`)&&p(n,"href",g),1&e&&j!==(j=t[5].teaser?` - ${t[5].teaser}`:"")&&d($,j)},d(t){t&&f(e)}}}function k(t){let e,n,p,g,v,$,E,j=t[2].title+"",b=t[2].author&&x(t),k=t[2].teaser&&y(t),H=t[2].notes,O=[];for(let r=0;r<H.length;r+=1)O[r]=N(w(t,H,r));return{c(){e=r("h2"),n=o(j),p=s(),b&&b.c(),g=s(),k&&k.c(),v=s(),$=r("ol");for(let t=0;t<O.length;t+=1)O[t].c();E=s()},l(t){e=a(t,"H2",{});var r=l(e);n=c(r,j),r.forEach(f),p=h(t),b&&b.l(t),g=h(t),k&&k.l(t),v=h(t),$=a(t,"OL",{});var o=l($);for(let e=0;e<O.length;e+=1)O[e].l(o);E=h(o),o.forEach(f)},m(t,r){i(t,e,r),u(e,n),i(t,p,r),b&&b.m(t,r),i(t,g,r),k&&k.m(t,r),i(t,v,r),i(t,$,r);for(let e=0;e<O.length;e+=1)O[e].m($,null);u($,E)},p(t,e){if(1&e&&j!==(j=t[2].title+"")&&d(n,j),t[2].author?b?b.p(t,e):(b=x(t),b.c(),b.m(g.parentNode,g)):b&&(b.d(1),b=null),t[2].teaser?k?k.p(t,e):(k=y(t),k.c(),k.m(v.parentNode,v)):k&&(k.d(1),k=null),3&e){let n;for(H=t[2].notes,n=0;n<H.length;n+=1){const r=w(t,H,n);O[n]?O[n].p(r,e):(O[n]=N(r),O[n].c(),O[n].m($,E))}for(;n<O.length;n+=1)O[n].d(1);O.length=H.length}},d(t){t&&f(e),t&&f(p),b&&b.d(t),t&&f(g),k&&k.d(t),t&&f(v),t&&f($),m(O,t)}}}function H(t){let e,n,r=t[0],o=[];for(let s=0;s<r.length;s+=1)o[s]=k(b(t,r,s));return{c(){e=s();for(let t=0;t<o.length;t+=1)o[t].c();n=g(),this.h()},l(t){v('[data-svelte="svelte-1vi5i11"]',document.head).forEach(f),e=h(t);for(let e=0;e<o.length;e+=1)o[e].l(t);n=g(),this.h()},h(){document.title="Notes of NewHope"},m(t,r){i(t,e,r);for(let e=0;e<o.length;e+=1)o[e].m(t,r);i(t,n,r)},p(t,[e]){if(3&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const a=b(t,r,s);o[s]?o[s].p(a,e):(o[s]=k(a),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:$,o:$,d(t){t&&f(e),m(o,t),t&&f(n)}}}var O=function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{c(r.next(t))}catch(e){s(e)}}function l(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}c((r=r.apply(t,e||[])).next())}))};const P=({page:t,fetch:e})=>O(void 0,void 0,void 0,(function*(){const n="/notes.json",r=yield e(n);if(r.ok){const e=yield r.json();return{props:Object.assign(Object.assign({},e),{page:t})}}return{status:r.status,error:new Error(`Could not load ${n}`)}}));function I(t,e,n){let r;E(t,j,(t=>n(1,r=t)));let{folders:o=[]}=e;return t.$$set=t=>{"folders"in t&&n(0,o=t.folders)},[o,r]}export default class extends t{constructor(t){super(),e(this,t,I,H,n,{folders:0})}}export{P as load};