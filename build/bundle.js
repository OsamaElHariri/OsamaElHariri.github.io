var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function d(){return f("")}function p(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function g(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e,n,a){t.style.setProperty(e,n,a?"important":"")}let w,b;function x(){if(void 0===w){w=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){w=!0}}return w}function y(t,e,n){t.classList[n?"add":"remove"](e)}function k(t){b=t}function T(){if(!b)throw new Error("Function called outside component initialization");return b}function S(t){T().$$.on_mount.push(t)}const A=[],_=[],D=[],j=[],E=Promise.resolve();let O=!1;function I(t){D.push(t)}let M=!1;const C=new Set;function H(){if(!M){M=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];k(e),z(e.$$)}for(k(null),A.length=0;_.length;)_.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];C.has(e)||(C.add(e),e())}D.length=0}while(A.length);for(;j.length;)j.pop()();O=!1,M=!1,C.clear()}}function z(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const G=new Set;let L;function B(){L={r:0,c:[],p:L}}function P(){L.r||a(L.c),L=L.p}function N(t,e){t&&t.i&&(G.delete(t),t.i(e))}function W(t,e,n,a){if(t&&t.o){if(G.has(t))return;G.add(t),L.c.push((()=>{G.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}}function q(t){t&&t.c()}function F(t,n,o,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,o),i||I((()=>{const n=l.map(e).filter(r);c?c.push(...n):a(n),t.$$.on_mount=[]})),u.forEach(I)}function J(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(A.push(t),O||(O=!0,E.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,r,o,i,s,c,u=[-1]){const f=b;k(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(m.ctx=o?o(e,r.props||{},((t,n,...a)=>{const r=a.length?a[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),d&&R(e,t)),n})):[],m.update(),d=!0,a(m.before_update),m.fragment=!!i&&i(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();r.intro&&N(e.$$.fragment),F(e,r.target,r.anchor,r.customElement),H()}k(f)}class K{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n;return{c(){n=u("div"),n.innerHTML='<a style="top: 0px; left: 5%" href="https://github.com/OsamaElHariri" class="svelte-1l0xbvn"><div class="contact-circle primary-contact-color svelte-1l0xbvn"><i class="fab fa-github fa-2x"></i> \n            <div class="title-text svelte-1l0xbvn">GitHub</div></div></a> \n\n    <a style="top: 260px; left: 35%" href="https://www.linkedin.com/in/osama-el-hariri-0b2b1714b/" class="svelte-1l0xbvn"><div class="contact-circle secondary-contact-color svelte-1l0xbvn"><i class="fab fa-linkedin fa-2x"></i> \n            <div class="title-text svelte-1l0xbvn">LinkedIn</div></div></a> \n\n    <a style="top: 80px; left: 60%" href="mailto:osama.hariri.dev@gmail.com" class="svelte-1l0xbvn"><div class="contact-circle secondary-contact-color svelte-1l0xbvn"><i class="fas fa-envelope fa-2x"></i> \n            <div class="title-text svelte-1l0xbvn">Email</div></div></a>',h(n,"class","contact-section svelte-1l0xbvn")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class Y extends K{constructor(t){super(),U(this,t,null,V,o,{})}}function Q(t){let e,n,a,r;return{c(){e=u("div"),n=f(t[0]),a=m(),r=u("div"),r.innerHTML='<hr class="svelte-kmzt6u"/>',h(e,"class","divider-text body-text svelte-kmzt6u"),h(r,"class","hr-chunk svelte-kmzt6u")},m(t,o){s(t,e,o),i(e,n),s(t,a,o),s(t,r,o)},p(t,e){1&e&&$(n,t[0])},d(t){t&&l(e),t&&l(a),t&&l(r)}}}function X(e){let n,a,r,o=e[0]&&Q(e);return{c(){n=u("div"),a=u("div"),a.innerHTML='<hr class="svelte-kmzt6u"/>',r=m(),o&&o.c(),h(a,"class","hr-chunk svelte-kmzt6u"),h(n,"class","divider-with-text svelte-kmzt6u")},m(t,e){s(t,n,e),i(n,a),i(n,r),o&&o.m(n,null)},p(t,[e]){t[0]?o?o.p(t,e):(o=Q(t),o.c(),o.m(n,null)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&l(n),o&&o.d()}}}function Z(t,e,n){let{text:a=""}=e;return t.$$set=t=>{"text"in t&&n(0,a=t.text)},[a]}class tt extends K{constructor(t){super(),U(this,t,Z,X,o,{text:0})}}function et(e){let n;return{c(){n=u("div"),v(n,"padding-top",e[0]+"px"),v(n,"padding-left",e[1])},m(t,e){s(t,n,e)},p(t,[e]){1&e&&v(n,"padding-top",t[0]+"px"),2&e&&v(n,"padding-left",t[1])},i:t,o:t,d(t){t&&l(n)}}}function nt(t,e,n){let{vertical:a=0}=e,{horizontal:r=0}=e;return t.$$set=t=>{"vertical"in t&&n(0,a=t.vertical),"horizontal"in t&&n(1,r=t.horizontal)},[a,r]}class at extends K{constructor(t){super(),U(this,t,nt,et,o,{vertical:0,horizontal:1})}}function rt(t,e,n){const a=t.slice();return a[2]=e[n],a[4]=n,a}function ot(t){let e,n,a=t[0].text+"";return{c(){e=u("div"),n=f(a),h(e,"class","overline-text secondary-text-color")},m(t,a){s(t,e,a),i(e,n)},p(t,e){1&e&&a!==(a=t[0].text+"")&&$(n,a)},d(t){t&&l(e)}}}function it(t){let e,n=t[0].links,a=[];for(let e=0;e<n.length;e+=1)a[e]=st(rt(t,n,e));return{c(){e=u("div");for(let t=0;t<a.length;t+=1)a[t].c();h(e,"class","footer-actions svelte-1dm7ko")},m(t,n){s(t,e,n);for(let t=0;t<a.length;t+=1)a[t].m(e,null)},p(t,r){if(1&r){let o;for(n=t[0].links,o=0;o<n.length;o+=1){const i=rt(t,n,o);a[o]?a[o].p(i,r):(a[o]=st(i),a[o].c(),a[o].m(e,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=n.length}},d(t){t&&l(e),c(a,t)}}}function st(t){let e,n,a,r,o,c,f,d;return{c(){e=u("a"),n=u("i"),o=m(),h(n,"class",a=t[2].icon+" fa-2x svelte-1dm7ko"),h(n,"title",r=t[2].title),h(e,"href",c=t[2].url),h(e,"class","svelte-1dm7ko")},m(a,r){s(a,e,r),i(e,n),i(e,o),f||(d=p(e,"click",g(t[1])),f=!0)},p(t,o){1&o&&a!==(a=t[2].icon+" fa-2x svelte-1dm7ko")&&h(n,"class",a),1&o&&r!==(r=t[2].title)&&h(n,"title",r),1&o&&c!==(c=t[2].url)&&h(e,"href",c)},d(t){t&&l(e),f=!1,d()}}}function lt(e){let n;function a(t,e){return t[0].links?it:ot}let r=a(e),o=r(e);return{c(){o.c(),n=d()},m(t,e){o.m(t,e),s(t,n,e)},p(t,[e]){r===(r=a(t))&&o?o.p(t,e):(o.d(1),o=r(t),o&&(o.c(),o.m(n.parentNode,n)))},i:t,o:t,d(t){o.d(t),t&&l(n)}}}function ct(t,e,n){let{footerData:a}=e;return t.$$set=t=>{"footerData"in t&&n(0,a=t.footerData)},[a,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)}]}class ut extends K{constructor(t){super(),U(this,t,ct,lt,o,{footerData:0})}}function ft(t){let e,n,a=t[0].text+"";return{c(){e=u("div"),n=f(a),h(e,"class","header-text")},m(t,a){s(t,e,a),i(e,n)},p(t,e){1&e&&a!==(a=t[0].text+"")&&$(n,a)},d(t){t&&l(e)}}}function mt(t){let e,n,a;return{c(){e=u("img"),e.src!==(n=t[0].image)&&h(e,"src",n),h(e,"alt",a=t[0].imageAlt),h(e,"class","svelte-1pknrtp")},m(t,n){s(t,e,n)},p(t,r){1&r&&e.src!==(n=t[0].image)&&h(e,"src",n),1&r&&a!==(a=t[0].imageAlt)&&h(e,"alt",a)},d(t){t&&l(e)}}}function dt(e){let n;function a(t,e){return t[0].image?mt:ft}let r=a(e),o=r(e);return{c(){o.c(),n=d()},m(t,e){o.m(t,e),s(t,n,e)},p(t,[e]){r===(r=a(t))&&o?o.p(t,e):(o.d(1),o=r(t),o&&(o.c(),o.m(n.parentNode,n)))},i:t,o:t,d(t){o.d(t),t&&l(n)}}}function pt(t,e,n){let{data:a}=e;return t.$$set=t=>{"data"in t&&n(0,a=t.data)},[a]}class gt extends K{constructor(t){super(),U(this,t,pt,dt,o,{data:0})}}function ht(t){let e,n,r,o,c,d,w,b,k,T,S,A,_,D,j,E,O,M,C,H,z,G,L,B,P,R,U,K,V,Y,Q,X,Z,et,nt=t[0].title+"",rt=t[0].subtitle+"",ot=t[0].infoText+"";return b=new tt({props:{text:t[0].dividerText}}),_=new at({props:{vertical:"16"}}),j=new gt({props:{data:t[0].main}}),O=new at({props:{vertical:"4"}}),B=new at({props:{vertical:"16"}}),K=new at({props:{vertical:"4"}}),Y=new ut({props:{footerData:t[0].footer}}),{c(){e=u("div"),n=m(),r=u("main"),o=u("div"),c=u("div"),d=f(nt),w=m(),q(b.$$.fragment),k=m(),T=u("div"),S=f(rt),A=m(),q(_.$$.fragment),D=m(),q(j.$$.fragment),E=m(),q(O.$$.fragment),M=m(),C=u("div"),H=u("div"),z=u("div"),G=f(ot),L=m(),q(B.$$.fragment),P=m(),R=u("div"),U=m(),q(K.$$.fragment),V=m(),q(Y.$$.fragment),h(e,"class","screen-fade main-background-color svelte-dhwd1l"),y(e,"expanded",t[7]),h(c,"class","title-text svelte-dhwd1l"),h(T,"class","body-text secondary-text-color"),h(H,"class","more-info-text svelte-dhwd1l"),h(R,"class","more-info-fade svelte-dhwd1l"),h(C,"class","more-info svelte-dhwd1l"),h(o,"class","panel-layout-color main-panel-container svelte-dhwd1l"),y(o,"absolute",t[1]),v(r,"height",t[5]+"px"),v(r,"width",t[3]+"px"),h(r,"class","svelte-dhwd1l"),I((()=>t[9].call(r))),y(r,"expanded",t[7]),y(r,"contracted",t[6])},m(a,f){s(a,e,f),s(a,n,f),s(a,r,f),i(r,o),i(o,c),i(c,d),i(o,w),F(b,o,null),i(o,k),i(o,T),i(T,S),i(o,A),F(_,o,null),i(o,D),F(j,o,null),i(o,E),F(O,o,null),i(o,M),i(o,C),i(C,H),i(H,z),i(z,G),i(H,L),F(B,H,null),i(C,P),i(C,R),i(o,U),F(K,o,null),i(o,V),F(Y,o,null),Q=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=u("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const a=x();let r;return a?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=p(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=p(n.contentWindow,"resize",e)}),i(t,n),()=>{(a||r&&n.contentWindow)&&r(),l(n)}}(r,t[9].bind(r)),X=!0,Z||(et=[p(e,"click",g(t[8])),p(o,"click",g(t[8]))],Z=!0)},p(t,[n]){128&n&&y(e,"expanded",t[7]),(!X||1&n)&&nt!==(nt=t[0].title+"")&&$(d,nt);const a={};1&n&&(a.text=t[0].dividerText),b.$set(a),(!X||1&n)&&rt!==(rt=t[0].subtitle+"")&&$(S,rt);const i={};1&n&&(i.data=t[0].main),j.$set(i),(!X||1&n)&&ot!==(ot=t[0].infoText+"")&&$(G,ot);const s={};1&n&&(s.footerData=t[0].footer),Y.$set(s),2&n&&y(o,"absolute",t[1]),(!X||32&n)&&v(r,"height",t[5]+"px"),(!X||8&n)&&v(r,"width",t[3]+"px"),128&n&&y(r,"expanded",t[7]),64&n&&y(r,"contracted",t[6])},i(t){X||(N(b.$$.fragment,t),N(_.$$.fragment,t),N(j.$$.fragment,t),N(O.$$.fragment,t),N(B.$$.fragment,t),N(K.$$.fragment,t),N(Y.$$.fragment,t),X=!0)},o(t){W(b.$$.fragment,t),W(_.$$.fragment,t),W(j.$$.fragment,t),W(O.$$.fragment,t),W(B.$$.fragment,t),W(K.$$.fragment,t),W(Y.$$.fragment,t),X=!1},d(t){t&&l(e),t&&l(n),t&&l(r),J(b),J(_),J(j),J(O),J(B),J(K),J(Y),Q(),Z=!1,a(et)}}}function $t(t,e,n){let a,r,o,i,{activity:s}=e,l=!1,c=!1,u=!1;return S((async()=>{n(5,i=o),n(3,r=a),n(1,l=!0)})),t.$$set=t=>{"activity"in t&&n(0,s=t.activity)},[s,l,a,r,o,i,c,u,function(){n(7,u=!u),n(6,c=!u)},function(){o=this.clientHeight,a=this.clientWidth,n(4,o),n(2,a)}]}class vt extends K{constructor(t){super(),U(this,t,$t,ht,o,{activity:0})}}function wt(e){let n,a;return{c(){n=u("div"),a=f(e[0]),h(n,"class","header-text panel-layout-color svelte-59wrc")},m(t,e){s(t,n,e),i(n,a)},p(t,[e]){1&e&&$(a,t[0])},i:t,o:t,d(t){t&&l(n)}}}function bt(t,e,n){let{title:a}=e;return t.$$set=t=>{"title"in t&&n(0,a=t.title)},[a]}class xt extends K{constructor(t){super(),U(this,t,bt,wt,o,{title:0})}}function yt(t,e,n){const a=t.slice();return a[2]=e[n],a[4]=n,a}function kt(e){let n,a,r,o;return a=new vt({props:{activity:e[2]}}),{c(){n=u("div"),q(a.$$.fragment),r=m(),h(n,"class","list-panel svelte-7iv6aa")},m(t,e){s(t,n,e),F(a,n,null),i(n,r),o=!0},p:t,i(t){o||(N(a.$$.fragment,t),o=!0)},o(t){W(a.$$.fragment,t),o=!1},d(t){t&&l(n),J(a)}}}function Tt(t){let e,n,a,r,o,f,d;n=new xt({props:{title:t[0].header}}),r=new at({props:{vertical:"12"}});let p=t[1],g=[];for(let e=0;e<p.length;e+=1)g[e]=kt(yt(t,p,e));const $=t=>W(g[t],1,1,(()=>{g[t]=null}));return{c(){e=u("div"),q(n.$$.fragment),a=m(),q(r.$$.fragment),o=m(),f=u("div");for(let t=0;t<g.length;t+=1)g[t].c();h(f,"class","content-list svelte-7iv6aa")},m(t,l){s(t,e,l),F(n,e,null),i(e,a),F(r,e,null),i(e,o),i(e,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null);d=!0},p(t,[e]){const a={};if(1&e&&(a.title=t[0].header),n.$set(a),2&e){let n;for(p=t[1],n=0;n<p.length;n+=1){const a=yt(t,p,n);g[n]?(g[n].p(a,e),N(g[n],1)):(g[n]=kt(a),g[n].c(),N(g[n],1),g[n].m(f,null))}for(B(),n=p.length;n<g.length;n+=1)$(n);P()}},i(t){if(!d){N(n.$$.fragment,t),N(r.$$.fragment,t);for(let t=0;t<p.length;t+=1)N(g[t]);d=!0}},o(t){W(n.$$.fragment,t),W(r.$$.fragment,t),g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)W(g[t]);d=!1},d(t){t&&l(e),J(n),J(r),c(g,t)}}}function St(t,e,n){let{content:a}=e,r=a.activities.map((t=>{let e,n,a=!1;if(t.main||(t.main={}),t.footer||(t.footer={}),t.data&&(t.data.startDate&&(e=new Date(t.data.startDate)),t.data.endDate&&(a="present"==t.data.endDate,n=a?new Date:new Date(t.data.endDate))),e&&n){if(!t.main.text&&!t.main.image){let a=(r=e,(o=n).getMonth()-r.getMonth()+12*(o.getFullYear()-r.getFullYear()));if(a<12)t.main.text=a+" months";else{let e=Math.round(a/12*10)/10;t.main.text=`${e} years`}}if(!t.footer.text&&!t.footer.links){let r=e.toLocaleDateString("en",{year:"numeric",month:"short"}),o=a?"present":n.toLocaleDateString("en",{year:"numeric",month:"short"});t.footer.text=`${r} - ${o}`}}var r,o;return t}));return t.$$set=t=>{"content"in t&&n(0,a=t.content)},[a,r]}class At extends K{constructor(t){super(),U(this,t,St,Tt,o,{content:0})}}function _t(t,e,n){const a=t.slice();return a[13]=e[n],a[15]=n,a}function Dt(t){let e,n,r,o,c,d,g=t[13]+"";function w(){return t[3](t[15])}function b(){return t[4](t[15])}return{c(){e=u("div"),n=u("div"),r=f(g),o=m(),h(n,"class","letter svelte-3hih4d"),v(n,"transform","scale("+(1+.25*t[1][t[15]])+", "+(1+.5*-t[1][t[15]])+")"),h(e,"class","letter-wrapper svelte-3hih4d")},m(t,a){s(t,e,a),i(e,n),i(n,r),i(e,o),c||(d=[p(e,"click",w),p(e,"mouseenter",b)],c=!0)},p(e,a){t=e,1&a&&g!==(g=t[13]+"")&&$(r,g),2&a&&v(n,"transform","scale("+(1+.25*t[1][t[15]])+", "+(1+.5*-t[1][t[15]])+")")},d(t){t&&l(e),c=!1,a(d)}}}function jt(e){let n,a=e[0],r=[];for(let t=0;t<a.length;t+=1)r[t]=Dt(_t(e,a,t));return{c(){n=u("div");for(let t=0;t<r.length;t+=1)r[t].c();h(n,"class","word svelte-3hih4d")},m(t,e){s(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(7&e){let o;for(a=t[0],o=0;o<a.length;o+=1){const i=_t(t,a,o);r[o]?r[o].p(i,e):(r[o]=Dt(i),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}},i:t,o:t,d(t){t&&l(n),c(r,t)}}}function Et(t,e,n){let{text:a=""}=e;const r=t=>{let e=t,n=0;return{getRawStrength:()=>e,getStrength:()=>e*Math.sin(n/2),update:()=>{n+=1,e*=.9}}},o=a.split("").map((t=>[]));let i=a.split("").map((t=>0));const s=()=>{n(1,i=o.map(((t,e)=>{let n=0;return t.forEach((t=>{t.update(),n+=t.getStrength()*(n-2)/2})),n})))},l=(t,e,n)=>{let i=e;if(i<0||i>=a.length)return;const s=Math.pow(.6,Math.abs(t-i));s<.1||setTimeout((()=>{o[i].push(r(s)),l(t,n(i),n)}),100)},c=t=>{o[t].push(r(1)),o.forEach(((t,e)=>{o[e]=o[e].filter((t=>t.getRawStrength()>.01))})),l(t,t+1,(t=>t+1)),l(t,t-1,(t=>t-1))},u=()=>{f=requestAnimationFrame(u),s()};let f;var m;S((()=>{u()})),m=()=>{f&&cancelAnimationFrame(f)},T().$$.on_destroy.push(m);return t.$$set=t=>{"text"in t&&n(0,a=t.text)},[a,i,c,t=>c(t),t=>c(t)]}class Ot extends K{constructor(t){super(),U(this,t,Et,jt,o,{text:0})}}function It(e){let n,a;return{c(){n=u("div"),a=u("div"),h(a,"class","shape svelte-k9n807"),v(a,"background-color",e[2]),v(a,"width",e[3]+"px"),v(a,"height",e[3]+"px"),h(n,"class","shape-wrapper svelte-k9n807"),v(n,"top",e[1]),v(n,"left",e[0])},m(t,e){s(t,n,e),i(n,a)},p(t,[e]){2&e&&v(n,"top",t[1]),1&e&&v(n,"left",t[0])},i:t,o:t,d(t){t&&l(n)}}}function Mt(t,e,n){let{x:a}=e,{y:r}=e,o=Math.random()<.5?"#DB2955":"#499167",i=90+50*Math.random();return t.$$set=t=>{"x"in t&&n(0,a=t.x),"y"in t&&n(1,r=t.y)},[a,r,o,i]}class Ct extends K{constructor(t){super(),U(this,t,Mt,It,o,{x:0,y:1})}}function Ht(e){let n,a,r,o,c,f,d,p,g,$,v,w,b,x,y,k,T;return a=new Ct({props:{x:"25%",y:"50px"}}),o=new Ct({props:{x:"10%",y:"200px"}}),f=new Ct({props:{x:"20%",y:"450px"}}),p=new Ct({props:{x:"70%",y:"90px"}}),$=new Ct({props:{x:"85%",y:"250px"}}),w=new Ct({props:{x:"75%",y:"500px"}}),x=new Ct({props:{x:"65%",y:"1000px"}}),k=new Ct({props:{x:"18%",y:"1200px"}}),{c(){n=u("div"),q(a.$$.fragment),r=m(),q(o.$$.fragment),c=m(),q(f.$$.fragment),d=m(),q(p.$$.fragment),g=m(),q($.$$.fragment),v=m(),q(w.$$.fragment),b=m(),q(x.$$.fragment),y=m(),q(k.$$.fragment),h(n,"class","texture-container svelte-z6unws")},m(t,e){s(t,n,e),F(a,n,null),i(n,r),F(o,n,null),i(n,c),F(f,n,null),i(n,d),F(p,n,null),i(n,g),F($,n,null),i(n,v),F(w,n,null),i(n,b),F(x,n,null),i(n,y),F(k,n,null),T=!0},p:t,i(t){T||(N(a.$$.fragment,t),N(o.$$.fragment,t),N(f.$$.fragment,t),N(p.$$.fragment,t),N($.$$.fragment,t),N(w.$$.fragment,t),N(x.$$.fragment,t),N(k.$$.fragment,t),T=!0)},o(t){W(a.$$.fragment,t),W(o.$$.fragment,t),W(f.$$.fragment,t),W(p.$$.fragment,t),W($.$$.fragment,t),W(w.$$.fragment,t),W(x.$$.fragment,t),W(k.$$.fragment,t),T=!1},d(t){t&&l(n),J(a),J(o),J(f),J(p),J($),J(w),J(x),J(k)}}}class zt extends K{constructor(t){super(),U(this,t,null,Ht,o,{})}}var Gt=[{header:"Work Experience",activities:[{title:"FullStack Developer",dividerText:"at",subtitle:"Toters",infoText:"Toters is a food delivery company. I worked on web projects developed using Angular and React. I also worked on the server side using the Laravel framework. The company and team were growing rapidly, so I had the chance to be a part of a fast-paced start up that is growing quickly.",data:{startDate:"2019-10",endDate:"present"}},{title:"Mobile and Web Developer",dividerText:"at",subtitle:"Ubanquity (rebranded to Layer)",infoText:"Ubanquity is all about e-banking. I was in charge of adding new features and maintaining an existing AngularJS web app. I was also part of the team that stared a new mobile app project in Flutter that was going to be the flagship product.",data:{startDate:"2018-6",endDate:"2019-11"}},{title:"Data Entry/ VBA Developer",dividerText:"at",subtitle:"American University of Beirut",infoText:"This was a work study oportunity while I was a university student. The job mainly consisted of entering data into Excel sheets. While doing that, I wrote some VBA scripts to speed up some repetitive tasks.",data:{startDate:"2017-10",endDate:"2017-12"}}]},{header:"Side Projects",activities:[{title:"StampChat",subtitle:"Mobile App with Microservices Backend",infoText:"A mobile chat app written in flutter! Users can chat normally, and they can STAMP a message by tapping anywhere on the screen. I used a basic microservices backend architecture for this app, and the deployments were made easire by using Kubernetes.",main:{image:"images/projects/stampchat_logo.png",imageAlt:"StampChat"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/StampChat_App"}]}},{title:"HamsterWheel",subtitle:"Templating Language",infoText:"A language that allows writing templates to loop over CSV files, processing each row and sending the output to a target file. This was a very nice intro to how compilers work. This was written using the Rust language.",main:{image:"images/projects/hamsterwheel_logo.png",imageAlt:"HamsterWheel"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/HamsterWheel"}]}},{title:"Godot Open Source Contributions",subtitle:"Open Source",infoText:"I contributed to the open source Godot game engine. My contributions were centered around the game editor; fixing some issues and adding small features. Contributing and having my code merged into a huge project like this is fascinating. It's actually that easy for anyone to start contributing code to an open source project.",main:{image:"images/projects/godot.png",imageAlt:"Godot"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/godotengine/godot/pulls?q=author%3AOsamaElHariri"}]}}]},{header:"Game Side Projects",activities:[{title:"Orik's Lantern",subtitle:"Desktop Game",infoText:"An awesome 2D platformer made with Godot! Follow Orik's journey as he struggles to accept the events of a tragic incident that happened to him long ago",main:{image:"images/projects/oriks_lantern.png",imageAlt:"Orik's Lantern"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/oriks_lantern"},{icon:"fas fa-rocket",title:"Play Now",url:"https://yamsandbread.itch.io/oriks-journey-demo"}]}},{title:"STORM A BREWIN'",subtitle:"Game Jam Browser Game",infoText:"My entry to the GMTK 2020 game jam (a 2 day jam). The theme was Out of Control, so I made this browser game were you need to help a couple of sailors row their boat to shore.",main:{image:"images/projects/storms_brewin.png",imageAlt:"Storm A Brewin'"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/GMTK_JAM_2020"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://yamsandbread.itch.io/storm-a-brewin"}]}},{title:"Spirit Chains",subtitle:"Browser Game",infoText:"I wanted to make a top down roguelite, and this is what I came up with. This is a browser game that has the player start slow, and ramps up the difficulty as players get more an more upgrades. There are a handeful of enemies and a couple of bosses, as well as a couple of nice cut scene.",main:{image:"images/projects/spirit_chains.png",imageAlt:"Spirit Chains"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/SpiritChainRoguelite"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/spirit-chains-roguelite"}]}},{title:"Sibi the Little Hero",subtitle:"Browser Game",infoText:"A 2D platformer written in TypeScript using Phaser. I learned some music theory prior to making this game, and so I wrote the score for this one myself. The main mechanic is how you can dig into the platforms, then jump out to avoid the obstacles.",main:{image:"images/projects/sibi.png",imageAlt:"Sibi"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/SibiTheLittleHero"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/sibi-the-little-hero"}]}},{title:"Laszlo's Tower",subtitle:"Game Jam Desktop Game",infoText:"A top down game made using Godot for the GitHub GameOff2018. This game jam ran for a whole month and it's theme was HYBRID. During that time I got really familiar with the Godot game engine. This was also my first game jam, and overall I'd say it was a great experience.",main:{image:"images/projects/laszlos_tower.png",imageAlt:"Laszlo's Tower"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/LaszlosTower"},{icon:"fas fa-rocket",title:"Play Now",url:"https://yamsandbread.itch.io/laszlos-tower"}]}},{title:"Survivor's Journey",subtitle:"Broser Game",infoText:"The first game I made. I used PhaserJS for this one. The game is inspired by Nitrome's Oodlegobs. It's nothing fancy, but it's a start that I'm happy with.",main:{image:"images/projects/survivors_journey.png",imageAlt:"Survivor's Journey"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/Survivors-_Journey_HTML5_Phaser"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/survivors-journey"}]}}]}];function Lt(t,e,n){const a=t.slice();return a[0]=e[n],a[2]=n,a}function Bt(e){let n,a,r,o,i,c;return n=new at({props:{vertical:"28"}}),r=new At({props:{content:e[0]}}),i=new at({props:{vertical:"28"}}),{c(){q(n.$$.fragment),a=m(),q(r.$$.fragment),o=m(),q(i.$$.fragment)},m(t,e){F(n,t,e),s(t,a,e),F(r,t,e),s(t,o,e),F(i,t,e),c=!0},p:t,i(t){c||(N(n.$$.fragment,t),N(r.$$.fragment,t),N(i.$$.fragment,t),c=!0)},o(t){W(n.$$.fragment,t),W(r.$$.fragment,t),W(i.$$.fragment,t),c=!1},d(t){J(n,t),t&&l(a),J(r,t),t&&l(o),J(i,t)}}}function Pt(t){let e,n,a,r,o,f,d,p,g,$,v,w,b,x,y,k,T,S,A,_,D;e=new zt({}),r=new at({props:{vertical:"160"}}),d=new Ot({props:{text:"OSAMA"}}),b=new at({props:{vertical:"160"}});let j=Gt,E=[];for(let e=0;e<j.length;e+=1)E[e]=Bt(Lt(t,j,e));const O=t=>W(E[t],1,1,(()=>{E[t]=null}));return k=new at({props:{vertical:"160"}}),S=new Y({}),_=new at({props:{vertical:"160"}}),{c(){q(e.$$.fragment),n=m(),a=u("main"),q(r.$$.fragment),o=m(),f=u("div"),q(d.$$.fragment),p=m(),g=u("h2"),g.textContent="Software Engineer",$=m(),v=u("p"),v.textContent="About text",w=m(),q(b.$$.fragment),x=m();for(let t=0;t<E.length;t+=1)E[t].c();y=m(),q(k.$$.fragment),T=m(),q(S.$$.fragment),A=m(),q(_.$$.fragment),h(f,"class","personal-info svelte-1r2k6qm"),h(a,"class","svelte-1r2k6qm")},m(t,l){F(e,t,l),s(t,n,l),s(t,a,l),F(r,a,null),i(a,o),i(a,f),F(d,f,null),i(f,p),i(f,g),i(f,$),i(f,v),i(a,w),F(b,a,null),i(a,x);for(let t=0;t<E.length;t+=1)E[t].m(a,null);i(a,y),F(k,a,null),i(a,T),F(S,a,null),i(a,A),F(_,a,null),D=!0},p(t,[e]){if(0&e){let n;for(j=Gt,n=0;n<j.length;n+=1){const r=Lt(t,j,n);E[n]?(E[n].p(r,e),N(E[n],1)):(E[n]=Bt(r),E[n].c(),N(E[n],1),E[n].m(a,y))}for(B(),n=j.length;n<E.length;n+=1)O(n);P()}},i(t){if(!D){N(e.$$.fragment,t),N(r.$$.fragment,t),N(d.$$.fragment,t),N(b.$$.fragment,t);for(let t=0;t<j.length;t+=1)N(E[t]);N(k.$$.fragment,t),N(S.$$.fragment,t),N(_.$$.fragment,t),D=!0}},o(t){W(e.$$.fragment,t),W(r.$$.fragment,t),W(d.$$.fragment,t),W(b.$$.fragment,t),E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)W(E[t]);W(k.$$.fragment,t),W(S.$$.fragment,t),W(_.$$.fragment,t),D=!1},d(t){J(e,t),t&&l(n),t&&l(a),J(r),J(d),J(b),c(E,t),J(k),J(S),J(_)}}}return new class extends K{constructor(t){super(),U(this,t,null,Pt,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
