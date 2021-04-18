var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function d(){return f("")}function p(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function g(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}let b,v;function y(){if(void 0===b){b=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){b=!0}}return b}function x(t,e,n){t.classList[n?"add":"remove"](e)}function k(t){v=t}function T(){if(!v)throw new Error("Function called outside component initialization");return v}function j(t){T().$$.on_mount.push(t)}function S(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const A=[],O=[],_=[],D=[],L=Promise.resolve();let E=!1;function I(t){_.push(t)}let M=!1;const C=new Set;function H(){if(!M){M=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];k(e),z(e.$$)}for(k(null),A.length=0;O.length;)O.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];C.has(e)||(C.add(e),e())}_.length=0}while(A.length);for(;D.length;)D.pop()();E=!1,M=!1,C.clear()}}function z(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const G=new Set;let B;function P(){B={r:0,c:[],p:B}}function N(){B.r||i(B.c),B=B.p}function W(t,e){t&&t.i&&(G.delete(t),t.i(e))}function F(t,e,n,i){if(t&&t.o){if(G.has(t))return;G.add(t),B.c.push((()=>{G.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function J(t){t&&t.c()}function R(t,n,a,o){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,a),o||I((()=>{const n=l.map(e).filter(r);c?c.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(I)}function q(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(A.push(t),E||(E=!0,L.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,r,a,o,s,c,u=[-1]){const f=v;k(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(m.ctx=a?a(e,r.props||{},((t,n,...i)=>{const r=i.length?i[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),d&&U(e,t)),n})):[],m.update(),d=!0,i(m.before_update),m.fragment=!!o&&o(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();r.intro&&W(e.$$.fragment),R(e,r.target,r.anchor,r.customElement),H()}k(f)}class V{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let n;return{c(){n=u("div"),n.innerHTML='<a href="https://www.linkedin.com/in/osama-el-hariri-0b2b1714b/" class="svelte-9hlmwm"><div class="contact-circle secondary-contact-color social-circle svelte-9hlmwm"><i class="fab fa-linkedin fa-2x"></i> \n            <div class="title-text svelte-9hlmwm">LinkedIn</div></div></a> \n\n    <a href="https://github.com/OsamaElHariri" class="svelte-9hlmwm"><div class="contact-circle primary-contact-color code-circle svelte-9hlmwm"><i class="fab fa-github fa-2x"></i> \n            <div class="title-text svelte-9hlmwm">GitHub</div></div></a> \n\n    <a href="mailto:osama.hariri.dev@gmail.com" class="svelte-9hlmwm"><div class="contact-circle secondary-contact-color mail-circle svelte-9hlmwm"><i class="fas fa-envelope fa-2x"></i> \n            <div class="title-text svelte-9hlmwm">Email</div></div></a>',h(n,"class","contact-section svelte-9hlmwm")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class Q extends V{constructor(t){super(),K(this,t,null,Y,a,{})}}const X=[];function Z(e,n=t){let i;const r=[];function o(t){if(a(e,t)&&(e=t,i)){const t=!X.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),X.push(n,e)}if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,s=t){const l=[a,s];return r.push(l),1===r.length&&(i=n(o)||t),a(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(i(),i=null)}}}}const tt=Z(0),et=Z(0);function nt(t){let e,n,i,r;return{c(){e=u("div"),n=f(t[0]),i=m(),r=u("div"),r.innerHTML='<hr class="svelte-kmzt6u"/>',h(e,"class","divider-text body-text svelte-kmzt6u"),h(r,"class","hr-chunk svelte-kmzt6u")},m(t,a){s(t,e,a),o(e,n),s(t,i,a),s(t,r,a)},p(t,e){1&e&&$(n,t[0])},d(t){t&&l(e),t&&l(i),t&&l(r)}}}function it(e){let n,i,r,a=e[0]&&nt(e);return{c(){n=u("div"),i=u("div"),i.innerHTML='<hr class="svelte-kmzt6u"/>',r=m(),a&&a.c(),h(i,"class","hr-chunk svelte-kmzt6u"),h(n,"class","divider-with-text svelte-kmzt6u")},m(t,e){s(t,n,e),o(n,i),o(n,r),a&&a.m(n,null)},p(t,[e]){t[0]?a?a.p(t,e):(a=nt(t),a.c(),a.m(n,null)):a&&(a.d(1),a=null)},i:t,o:t,d(t){t&&l(n),a&&a.d()}}}function rt(t,e,n){let{text:i=""}=e;return t.$$set=t=>{"text"in t&&n(0,i=t.text)},[i]}class at extends V{constructor(t){super(),K(this,t,rt,it,a,{text:0})}}function ot(e){let n;return{c(){n=u("div"),w(n,"padding-top",e[0]+"px"),w(n,"padding-left",e[1]+"px")},m(t,e){s(t,n,e)},p(t,[e]){1&e&&w(n,"padding-top",t[0]+"px"),2&e&&w(n,"padding-left",t[1]+"px")},i:t,o:t,d(t){t&&l(n)}}}function st(t,e,n){let{vertical:i=0}=e,{horizontal:r=0}=e;return t.$$set=t=>{"vertical"in t&&n(0,i=t.vertical),"horizontal"in t&&n(1,r=t.horizontal)},[i,r]}class lt extends V{constructor(t){super(),K(this,t,st,ot,a,{vertical:0,horizontal:1})}}function ct(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function ut(t){let e,n,i=t[0].text+"";return{c(){e=u("div"),n=f(i),h(e,"class","overline-text secondary-text-color")},m(t,i){s(t,e,i),o(e,n)},p(t,e){1&e&&i!==(i=t[0].text+"")&&$(n,i)},d(t){t&&l(e)}}}function ft(t){let e,n=t[0].links,i=[];for(let e=0;e<n.length;e+=1)i[e]=mt(ct(t,n,e));return{c(){e=u("div");for(let t=0;t<i.length;t+=1)i[t].c();h(e,"class","footer-actions svelte-1dm7ko")},m(t,n){s(t,e,n);for(let t=0;t<i.length;t+=1)i[t].m(e,null)},p(t,r){if(1&r){let a;for(n=t[0].links,a=0;a<n.length;a+=1){const o=ct(t,n,a);i[a]?i[a].p(o,r):(i[a]=mt(o),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(t){t&&l(e),c(i,t)}}}function mt(t){let e,n,i,r,a,c,f,d;return{c(){e=u("a"),n=u("i"),a=m(),h(n,"class",i=t[2].icon+" fa-2x svelte-1dm7ko"),h(n,"title",r=t[2].title),h(e,"href",c=t[2].url),h(e,"class","svelte-1dm7ko")},m(i,r){s(i,e,r),o(e,n),o(e,a),f||(d=p(e,"click",g(t[1])),f=!0)},p(t,a){1&a&&i!==(i=t[2].icon+" fa-2x svelte-1dm7ko")&&h(n,"class",i),1&a&&r!==(r=t[2].title)&&h(n,"title",r),1&a&&c!==(c=t[2].url)&&h(e,"href",c)},d(t){t&&l(e),f=!1,d()}}}function dt(e){let n;function i(t,e){return t[0].links?ft:ut}let r=i(e),a=r(e);return{c(){a.c(),n=d()},m(t,e){a.m(t,e),s(t,n,e)},p(t,[e]){r===(r=i(t))&&a?a.p(t,e):(a.d(1),a=r(t),a&&(a.c(),a.m(n.parentNode,n)))},i:t,o:t,d(t){a.d(t),t&&l(n)}}}function pt(t,e,n){let{footerData:i}=e;return t.$$set=t=>{"footerData"in t&&n(0,i=t.footerData)},[i,function(e){S(t,e)}]}class gt extends V{constructor(t){super(),K(this,t,pt,dt,a,{footerData:0})}}function ht(t){let e,n,i=t[0].text+"";return{c(){e=u("div"),n=f(i),h(e,"class","header-text")},m(t,i){s(t,e,i),o(e,n)},p(t,e){1&e&&i!==(i=t[0].text+"")&&$(n,i)},d(t){t&&l(e)}}}function $t(t){let e,n,i;return{c(){e=u("img"),e.src!==(n=t[0].image)&&h(e,"src",n),h(e,"alt",i=t[0].imageAlt),h(e,"class","svelte-1pknrtp")},m(t,n){s(t,e,n)},p(t,r){1&r&&e.src!==(n=t[0].image)&&h(e,"src",n),1&r&&i!==(i=t[0].imageAlt)&&h(e,"alt",i)},d(t){t&&l(e)}}}function wt(e){let n;function i(t,e){return t[0].image?$t:ht}let r=i(e),a=r(e);return{c(){a.c(),n=d()},m(t,e){a.m(t,e),s(t,n,e)},p(t,[e]){r===(r=i(t))&&a?a.p(t,e):(a.d(1),a=r(t),a&&(a.c(),a.m(n.parentNode,n)))},i:t,o:t,d(t){a.d(t),t&&l(n)}}}function bt(t,e,n){let{data:i}=e;return t.$$set=t=>{"data"in t&&n(0,i=t.data)},[i]}class vt extends V{constructor(t){super(),K(this,t,bt,wt,a,{data:0})}}function yt(t){let e,n,i,r,a,c,f,d,$;return e=new lt({props:{horizontal:"8"}}),{c(){J(e.$$.fragment),n=m(),i=u("a"),r=u("i"),h(r,"class",a=t[0].subtitleLink.icon+" fa-3x secondary-text-color svelte-1elrbj5"),h(i,"href",c=t[0].subtitleLink.url),h(i,"class","svelte-1elrbj5")},m(a,l){R(e,a,l),s(a,n,l),s(a,i,l),o(i,r),f=!0,d||($=p(i,"click",g(t[10])),d=!0)},p(t,e){(!f||1&e&&a!==(a=t[0].subtitleLink.icon+" fa-3x secondary-text-color svelte-1elrbj5"))&&h(r,"class",a),(!f||1&e&&c!==(c=t[0].subtitleLink.url))&&h(i,"href",c)},i(t){f||(W(e.$$.fragment,t),f=!0)},o(t){F(e.$$.fragment,t),f=!1},d(t){q(e,t),t&&l(n),t&&l(i),d=!1,$()}}}function xt(t){let e,n,i,r,a,c,d,b,v,k,T,j,S,A,O,_,D,L,E,M,C,H,z,G,B,U,K,V,Y,Q,X,Z,tt,et,nt=t[0].title+"",it=t[0].subtitle+"",rt=t[0].infoText+"";c=new at({props:{text:t[0].dividerText}});let ot=t[0].subtitleLink&&t[0].subtitleLink.icon&&yt(t);return S=new lt({props:{vertical:"16"}}),O=new vt({props:{data:t[0].main}}),D=new lt({props:{vertical:"4"}}),G=new lt({props:{vertical:"16"}}),V=new lt({props:{vertical:"4"}}),Q=new gt({props:{footerData:t[0].footer}}),{c(){e=u("main"),n=u("div"),i=u("div"),r=f(nt),a=m(),J(c.$$.fragment),d=m(),b=u("div"),v=u("div"),k=f(it),T=m(),ot&&ot.c(),j=m(),J(S.$$.fragment),A=m(),J(O.$$.fragment),_=m(),J(D.$$.fragment),L=m(),E=u("div"),M=u("div"),C=u("div"),H=f(rt),z=m(),J(G.$$.fragment),B=m(),U=u("div"),K=m(),J(V.$$.fragment),Y=m(),J(Q.$$.fragment),h(i,"class","title-text svelte-1elrbj5"),h(v,"class","body-text"),h(b,"class","subtitle secondary-text-color svelte-1elrbj5"),h(M,"class","more-info-text svelte-1elrbj5"),h(U,"class","more-info-fade svelte-1elrbj5"),h(E,"class","more-info svelte-1elrbj5"),h(n,"class","panel-layout-color main-panel-container svelte-1elrbj5"),x(n,"absolute",t[1]),w(e,"height",t[5]+"px"),w(e,"width",t[3]+"px"),h(e,"class","svelte-1elrbj5"),I((()=>t[11].call(e))),x(e,"expanded",t[7]),x(e,"contracted",t[6]),x(e,"recent-open",t[8])},m(f,m){s(f,e,m),o(e,n),o(n,i),o(i,r),o(n,a),R(c,n,null),o(n,d),o(n,b),o(b,v),o(v,k),o(b,T),ot&&ot.m(b,null),o(n,j),R(S,n,null),o(n,A),R(O,n,null),o(n,_),R(D,n,null),o(n,L),o(n,E),o(E,M),o(M,C),o(C,H),o(M,z),R(G,M,null),o(E,B),o(E,U),o(n,K),R(V,n,null),o(n,Y),R(Q,n,null),X=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=u("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const i=y();let r;return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=p(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=p(n.contentWindow,"resize",e)}),o(t,n),()=>{(i||r&&n.contentWindow)&&r(),l(n)}}(e,t[11].bind(e)),Z=!0,tt||(et=p(n,"click",g(t[9])),tt=!0)},p(t,[i]){(!Z||1&i)&&nt!==(nt=t[0].title+"")&&$(r,nt);const a={};1&i&&(a.text=t[0].dividerText),c.$set(a),(!Z||1&i)&&it!==(it=t[0].subtitle+"")&&$(k,it),t[0].subtitleLink&&t[0].subtitleLink.icon?ot?(ot.p(t,i),1&i&&W(ot,1)):(ot=yt(t),ot.c(),W(ot,1),ot.m(b,null)):ot&&(P(),F(ot,1,1,(()=>{ot=null})),N());const o={};1&i&&(o.data=t[0].main),O.$set(o),(!Z||1&i)&&rt!==(rt=t[0].infoText+"")&&$(H,rt);const s={};1&i&&(s.footerData=t[0].footer),Q.$set(s),2&i&&x(n,"absolute",t[1]),(!Z||32&i)&&w(e,"height",t[5]+"px"),(!Z||8&i)&&w(e,"width",t[3]+"px"),128&i&&x(e,"expanded",t[7]),64&i&&x(e,"contracted",t[6]),256&i&&x(e,"recent-open",t[8])},i(t){Z||(W(c.$$.fragment,t),W(ot),W(S.$$.fragment,t),W(O.$$.fragment,t),W(D.$$.fragment,t),W(G.$$.fragment,t),W(V.$$.fragment,t),W(Q.$$.fragment,t),Z=!0)},o(t){F(c.$$.fragment,t),F(ot),F(S.$$.fragment,t),F(O.$$.fragment,t),F(D.$$.fragment,t),F(G.$$.fragment,t),F(V.$$.fragment,t),F(Q.$$.fragment,t),Z=!1},d(t){t&&l(e),q(c),ot&&ot.d(),q(S),q(O),q(D),q(G),q(V),q(Q),X(),tt=!1,et()}}}function kt(t,e,n){let i,r,a,o,{activity:s}=e,l=!1,c=!1,u=!1,f=0,m=!1;function d(){n(7,u=!u),n(6,c=!u)}return tt.subscribe((t=>{n(8,m=t==f)})),et.subscribe((t=>{u&&d()})),j((async()=>{n(5,o=a),n(3,r=i),n(1,l=!0)})),t.$$set=t=>{"activity"in t&&n(0,s=t.activity)},[s,l,i,r,a,o,c,u,m,function(){d(),u?tt.update((t=>{let e=t+1;return f=e,e})):et.update((t=>t+1))},function(e){S(t,e)},function(){a=this.clientHeight,i=this.clientWidth,n(4,a),n(2,i)}]}class Tt extends V{constructor(t){super(),K(this,t,kt,xt,a,{activity:0})}}function jt(e){let n,i;return{c(){n=u("div"),i=f(e[0]),h(n,"class","header-text panel-layout-color svelte-59wrc")},m(t,e){s(t,n,e),o(n,i)},p(t,[e]){1&e&&$(i,t[0])},i:t,o:t,d(t){t&&l(n)}}}function St(t,e,n){let{title:i}=e;return t.$$set=t=>{"title"in t&&n(0,i=t.title)},[i]}class At extends V{constructor(t){super(),K(this,t,St,jt,a,{title:0})}}function Ot(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function _t(e){let n,i,r,a;return i=new Tt({props:{activity:e[2]}}),{c(){n=u("div"),J(i.$$.fragment),r=m(),h(n,"class","list-panel svelte-7iv6aa")},m(t,e){s(t,n,e),R(i,n,null),o(n,r),a=!0},p:t,i(t){a||(W(i.$$.fragment,t),a=!0)},o(t){F(i.$$.fragment,t),a=!1},d(t){t&&l(n),q(i)}}}function Dt(t){let e,n,i,r,a,f,d;n=new At({props:{title:t[0].header}}),r=new lt({props:{vertical:"12"}});let p=t[1],g=[];for(let e=0;e<p.length;e+=1)g[e]=_t(Ot(t,p,e));const $=t=>F(g[t],1,1,(()=>{g[t]=null}));return{c(){e=u("div"),J(n.$$.fragment),i=m(),J(r.$$.fragment),a=m(),f=u("div");for(let t=0;t<g.length;t+=1)g[t].c();h(f,"class","content-list svelte-7iv6aa")},m(t,l){s(t,e,l),R(n,e,null),o(e,i),R(r,e,null),o(e,a),o(e,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null);d=!0},p(t,[e]){const i={};if(1&e&&(i.title=t[0].header),n.$set(i),2&e){let n;for(p=t[1],n=0;n<p.length;n+=1){const i=Ot(t,p,n);g[n]?(g[n].p(i,e),W(g[n],1)):(g[n]=_t(i),g[n].c(),W(g[n],1),g[n].m(f,null))}for(P(),n=p.length;n<g.length;n+=1)$(n);N()}},i(t){if(!d){W(n.$$.fragment,t),W(r.$$.fragment,t);for(let t=0;t<p.length;t+=1)W(g[t]);d=!0}},o(t){F(n.$$.fragment,t),F(r.$$.fragment,t),g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)F(g[t]);d=!1},d(t){t&&l(e),q(n),q(r),c(g,t)}}}function Lt(t,e,n){let{content:i}=e,r=i.activities.map((t=>{let e,n,i=!1;if(t.main||(t.main={}),t.footer||(t.footer={}),t.data&&(t.data.startDate&&(e=new Date(t.data.startDate)),t.data.endDate&&(i="present"==t.data.endDate,n=i?new Date:new Date(t.data.endDate))),e&&n){if(!t.main.text&&!t.main.image){let i=(r=e,(a=n).getMonth()-r.getMonth()+12*(a.getFullYear()-r.getFullYear()));if(i<12)t.main.text=i+" months";else{let e=Math.round(i/12*10)/10;t.main.text=`${e} years`}}if(!t.footer.text&&!t.footer.links){let r=e.toLocaleDateString("en",{year:"numeric",month:"short"}),a=i?"present":n.toLocaleDateString("en",{year:"numeric",month:"short"});t.footer.text=`${r} - ${a}`}}var r,a;return t}));return t.$$set=t=>{"content"in t&&n(0,i=t.content)},[i,r]}class Et extends V{constructor(t){super(),K(this,t,Lt,Dt,a,{content:0})}}function It(t,e,n){const i=t.slice();return i[13]=e[n],i[15]=n,i}function Mt(t){let e,n,r,a,c,d,g=t[13]+"";function b(){return t[3](t[15])}function v(){return t[4](t[15])}return{c(){e=u("div"),n=u("div"),r=f(g),a=m(),h(n,"class","letter svelte-1t4djij"),w(n,"transform","scale("+(1+.25*t[1][t[15]])+", "+(1+.5*-t[1][t[15]])+")"),h(e,"class","letter-wrapper svelte-1t4djij")},m(t,i){s(t,e,i),o(e,n),o(n,r),o(e,a),c||(d=[p(e,"click",b),p(e,"mouseenter",v)],c=!0)},p(e,i){t=e,1&i&&g!==(g=t[13]+"")&&$(r,g),2&i&&w(n,"transform","scale("+(1+.25*t[1][t[15]])+", "+(1+.5*-t[1][t[15]])+")")},d(t){t&&l(e),c=!1,i(d)}}}function Ct(e){let n,i=e[0],r=[];for(let t=0;t<i.length;t+=1)r[t]=Mt(It(e,i,t));return{c(){n=u("div");for(let t=0;t<r.length;t+=1)r[t].c();h(n,"class","word svelte-1t4djij")},m(t,e){s(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,[e]){if(7&e){let a;for(i=t[0],a=0;a<i.length;a+=1){const o=It(t,i,a);r[a]?r[a].p(o,e):(r[a]=Mt(o),r[a].c(),r[a].m(n,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=i.length}},i:t,o:t,d(t){t&&l(n),c(r,t)}}}function Ht(t,e,n){let{text:i=""}=e;const r=t=>{let e=t,n=0;return{getRawStrength:()=>e,getStrength:()=>e*Math.sin(n/2),update:()=>{n+=1,e*=.9}}},a=i.split("").map((t=>[]));let o=i.split("").map((t=>0));const s=()=>{n(1,o=a.map(((t,e)=>{let n=0;return t.forEach((t=>{t.update(),n+=t.getStrength()*(n-2)/2})),n})))},l=(t,e,n)=>{let o=e;if(o<0||o>=i.length)return;const s=Math.pow(.6,Math.abs(t-o));s<.1||setTimeout((()=>{a[o].push(r(s)),l(t,n(o),n)}),100)},c=t=>{a[t].push(r(1)),a.forEach(((t,e)=>{a[e]=a[e].filter((t=>t.getRawStrength()>.01))})),l(t,t+1,(t=>t+1)),l(t,t-1,(t=>t-1))},u=()=>{f=requestAnimationFrame(u),s()};let f;var m;j((()=>{u()})),m=()=>{f&&cancelAnimationFrame(f)},T().$$.on_destroy.push(m);return t.$$set=t=>{"text"in t&&n(0,i=t.text)},[i,o,c,t=>c(t),t=>c(t)]}class zt extends V{constructor(t){super(),K(this,t,Ht,Ct,a,{text:0})}}function Gt(e){let n,i;return{c(){n=u("div"),i=u("div"),h(i,"class","shape svelte-1yyolpr"),w(i,"background-color",e[3]),w(i,"width",e[4]+"px"),w(i,"height",e[4]+"px"),x(i,"shift-origin",e[2]),h(n,"class","shape-wrapper svelte-1yyolpr"),w(n,"top",e[1]),w(n,"left",e[0])},m(t,e){s(t,n,e),o(n,i)},p(t,[e]){4&e&&x(i,"shift-origin",t[2]),2&e&&w(n,"top",t[1]),1&e&&w(n,"left",t[0])},i:t,o:t,d(t){t&&l(n)}}}function Bt(t,e,n){let{x:i}=e,{y:r}=e,{shiftOrigin:a=!1}=e,o=Math.random()<.5?"#DB2955":"#499167",s=100+30*Math.random();return t.$$set=t=>{"x"in t&&n(0,i=t.x),"y"in t&&n(1,r=t.y),"shiftOrigin"in t&&n(2,a=t.shiftOrigin)},[i,r,a,o,s]}class Pt extends V{constructor(t){super(),K(this,t,Bt,Gt,a,{x:0,y:1,shiftOrigin:2})}}function Nt(e){let n,i,r,a,c,f,d,p,g,$,w,b,v,y,x,k,T;return i=new Pt({props:{x:"22%",y:"50px"}}),a=new Pt({props:{x:"10%",y:"200px"}}),f=new Pt({props:{x:"20%",y:"450px"}}),p=new Pt({props:{x:"88%",y:"90px",shiftOrigin:"true"}}),$=new Pt({props:{x:"95%",y:"250px",shiftOrigin:"true"}}),b=new Pt({props:{x:"85%",y:"500px",shiftOrigin:"true"}}),y=new Pt({props:{x:"83%",y:"1000px",shiftOrigin:"true"}}),k=new Pt({props:{x:"18%",y:"1200px"}}),{c(){n=u("div"),J(i.$$.fragment),r=m(),J(a.$$.fragment),c=m(),J(f.$$.fragment),d=m(),J(p.$$.fragment),g=m(),J($.$$.fragment),w=m(),J(b.$$.fragment),v=m(),J(y.$$.fragment),x=m(),J(k.$$.fragment),h(n,"class","texture-container svelte-z6unws")},m(t,e){s(t,n,e),R(i,n,null),o(n,r),R(a,n,null),o(n,c),R(f,n,null),o(n,d),R(p,n,null),o(n,g),R($,n,null),o(n,w),R(b,n,null),o(n,v),R(y,n,null),o(n,x),R(k,n,null),T=!0},p:t,i(t){T||(W(i.$$.fragment,t),W(a.$$.fragment,t),W(f.$$.fragment,t),W(p.$$.fragment,t),W($.$$.fragment,t),W(b.$$.fragment,t),W(y.$$.fragment,t),W(k.$$.fragment,t),T=!0)},o(t){F(i.$$.fragment,t),F(a.$$.fragment,t),F(f.$$.fragment,t),F(p.$$.fragment,t),F($.$$.fragment,t),F(b.$$.fragment,t),F(y.$$.fragment,t),F(k.$$.fragment,t),T=!1},d(t){t&&l(n),q(i),q(a),q(f),q(p),q($),q(b),q(y),q(k)}}}class Wt extends V{constructor(t){super(),K(this,t,null,Nt,a,{})}}var Ft=[{header:"Work Experience",activities:[{title:"FullStack Developer",dividerText:"at",subtitle:"Toters",subtitleLink:{icon:"fab fa-linkedin",url:"https://www.linkedin.com/company/toters-delivery/mycompany/"},infoText:"Toters is an order delivery company. I worked on web projects developed using Angular and React. I also worked on the server side using the Laravel framework. The company and team were growing rapidly, so I had the chance to be a part of a fast-paced start up that is growing quickly.",data:{startDate:"2019-11",endDate:"present"}},{title:"Mobile and Web Developer",dividerText:"at",subtitle:"Ubanquity (rebranded to Layer)",subtitleLink:{icon:"fab fa-linkedin",url:"https://www.linkedin.com/company/wearelayer/"},infoText:"Ubanquity is all about e-banking. I was in charge of adding new features and maintaining an existing AngularJS web app. I was also part of the team that stared a new mobile app project in Flutter that was going to be the flagship product.",data:{startDate:"2018-6",endDate:"2019-10"}},{title:"Data Entry/ VBA Developer",dividerText:"at",subtitle:"American University of Beirut",subtitleLink:{icon:"fab fa-linkedin",url:"https://www.linkedin.com/school/american-university-of-beirut/"},infoText:"This was a work study oportunity while I was a university student. The job mainly consisted of entering data into Excel sheets. While doing that, I wrote some VBA scripts to speed up some repetitive tasks.",data:{startDate:"2017-10",endDate:"2017-12"}}]},{header:"Side Projects",activities:[{title:"StampChat",subtitle:"Mobile App with Microservices Backend",infoText:"A mobile chat app written in flutter! Users can chat normally, and they can STAMP a message by tapping anywhere on the screen. I used a basic microservices backend architecture for this app, and the deployments were made easire by using Kubernetes.",main:{image:"images/projects/stampchat_logo.png",imageAlt:"StampChat"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/StampChat_App"}]}},{title:"HamsterWheel",subtitle:"Templating Language",infoText:"A language that allows writing templates to loop over CSV files, processing each row and sending the output to a target file. This was a very nice intro to how compilers work. This was written using the Rust language.",main:{image:"images/projects/hamsterwheel_logo.png",imageAlt:"HamsterWheel"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/HamsterWheel"}]}},{title:"Godot Open Source Contributions",subtitle:"Open Source",infoText:"I contributed to the open source Godot game engine. My contributions were centered around the game editor; fixing some issues and adding small features. Contributing and having my code merged into a huge project like this is fascinating. It's actually that easy for anyone to start contributing code to an open source project.",main:{image:"images/projects/godot.png",imageAlt:"Godot"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/godotengine/godot/pulls?q=author%3AOsamaElHariri"}]}}]},{header:"Game Side Projects",activities:[{title:"Orik's Lantern",subtitle:"Desktop Game",infoText:"An awesome 2D platformer made with Godot! Follow Orik's journey as he struggles to accept the events of a tragic incident that happened to him long ago",main:{image:"images/projects/oriks_lantern.png",imageAlt:"Orik's Lantern"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/oriks_lantern"},{icon:"fas fa-rocket",title:"Play Now",url:"https://yamsandbread.itch.io/oriks-journey-demo"}]}},{title:"STORM A BREWIN'",subtitle:"Game Jam Browser Game",infoText:"My entry to the GMTK 2020 game jam (a 2 day jam). The theme was Out of Control, so I made this browser game were you need to help a couple of sailors row their boat to shore.",main:{image:"images/projects/storms_brewin.png",imageAlt:"Storm A Brewin'"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/GMTK_JAM_2020"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://yamsandbread.itch.io/storm-a-brewin"}]}},{title:"Spirit Chains",subtitle:"Browser Game",infoText:"I wanted to make a top down roguelite, and this is what I came up with. This is a browser game that has the player start slow, and ramps up the difficulty as players get more an more upgrades. There are a handeful of enemies and a couple of bosses, as well as a couple of nice cut scene.",main:{image:"images/projects/spirit_chains.png",imageAlt:"Spirit Chains"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/SpiritChainRoguelite"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/spirit-chains-roguelite"}]}},{title:"Sibi the Little Hero",subtitle:"Browser Game",infoText:"A 2D platformer written in TypeScript using Phaser. I learned some music theory prior to making this game, and so I wrote the score for this one myself. The main mechanic is how you can dig into the platforms, then jump out to avoid the obstacles.",main:{image:"images/projects/sibi.png",imageAlt:"Sibi"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/SibiTheLittleHero"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/sibi-the-little-hero"}]}},{title:"Laszlo's Tower",subtitle:"Game Jam Desktop Game",infoText:"A top down game made using Godot for the GitHub GameOff2018. This game jam ran for a whole month and it's theme was HYBRID. During that time I got really familiar with the Godot game engine. This was also my first game jam, and overall I'd say it was a great experience.",main:{image:"images/projects/laszlos_tower.png",imageAlt:"Laszlo's Tower"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/LaszlosTower"},{icon:"fas fa-rocket",title:"Play Now",url:"https://yamsandbread.itch.io/laszlos-tower"}]}},{title:"Survivor's Journey",subtitle:"Broser Game",infoText:"The first game I made. I used PhaserJS for this one. The game is inspired by Nitrome's Oodlegobs. It's nothing fancy, but it's a start that I'm happy with.",main:{image:"images/projects/survivors_journey.png",imageAlt:"Survivor's Journey"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/Survivors-_Journey_HTML5_Phaser"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/survivors-journey"}]}}]}];function Jt(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function Rt(e){let n,i,r,a,o,c;return n=new lt({props:{vertical:"28"}}),r=new Et({props:{content:e[2]}}),o=new lt({props:{vertical:"28"}}),{c(){J(n.$$.fragment),i=m(),J(r.$$.fragment),a=m(),J(o.$$.fragment)},m(t,e){R(n,t,e),s(t,i,e),R(r,t,e),s(t,a,e),R(o,t,e),c=!0},p:t,i(t){c||(W(n.$$.fragment,t),W(r.$$.fragment,t),W(o.$$.fragment,t),c=!0)},o(t){F(n.$$.fragment,t),F(r.$$.fragment,t),F(o.$$.fragment,t),c=!1},d(t){q(n,t),t&&l(i),q(r,t),t&&l(a),q(o,t)}}}function qt(t){let e,n,i,r,a,f,d,$,w,b,v,y,k,T,j,S,A,O,_,D,L,E,I,M,C;e=new Wt({}),f=new lt({props:{vertical:"160"}}),w=new zt({props:{text:"OSAMA"}}),j=new lt({props:{vertical:"160"}});let H=Ft,z=[];for(let e=0;e<H.length;e+=1)z[e]=Rt(Jt(t,H,e));const G=t=>F(z[t],1,1,(()=>{z[t]=null}));return O=new lt({props:{vertical:"160"}}),D=new Q({}),E=new lt({props:{vertical:"160"}}),{c(){J(e.$$.fragment),n=m(),i=u("div"),r=m(),a=u("main"),J(f.$$.fragment),d=m(),$=u("div"),J(w.$$.fragment),b=m(),v=u("h2"),v.textContent="Software Engineer",y=m(),k=u("div"),k.textContent="Interested in all things software. Especially interested in software at large scales and game \n\t\tdevelopment as well as new fields like machine learning and blockchain. I'm currently\n\t\tbased in Beirut, Lebanon.",T=m(),J(j.$$.fragment),S=m();for(let t=0;t<z.length;t+=1)z[t].c();A=m(),J(O.$$.fragment),_=m(),J(D.$$.fragment),L=m(),J(E.$$.fragment),h(i,"class","screen-fade main-background-color svelte-wv83lw"),x(i,"blur-visible",t[0]),h($,"class","personal-info svelte-wv83lw"),h(k,"class","body-text about-text svelte-wv83lw"),h(a,"class","svelte-wv83lw")},m(l,c){R(e,l,c),s(l,n,c),s(l,i,c),s(l,r,c),s(l,a,c),R(f,a,null),o(a,d),o(a,$),R(w,$,null),o($,b),o($,v),o(a,y),o(a,k),o(a,T),R(j,a,null),o(a,S);for(let t=0;t<z.length;t+=1)z[t].m(a,null);o(a,A),R(O,a,null),o(a,_),R(D,a,null),o(a,L),R(E,a,null),I=!0,M||(C=p(i,"click",g(t[1])),M=!0)},p(t,[e]){if(1&e&&x(i,"blur-visible",t[0]),0&e){let n;for(H=Ft,n=0;n<H.length;n+=1){const i=Jt(t,H,n);z[n]?(z[n].p(i,e),W(z[n],1)):(z[n]=Rt(i),z[n].c(),W(z[n],1),z[n].m(a,A))}for(P(),n=H.length;n<z.length;n+=1)G(n);N()}},i(t){if(!I){W(e.$$.fragment,t),W(f.$$.fragment,t),W(w.$$.fragment,t),W(j.$$.fragment,t);for(let t=0;t<H.length;t+=1)W(z[t]);W(O.$$.fragment,t),W(D.$$.fragment,t),W(E.$$.fragment,t),I=!0}},o(t){F(e.$$.fragment,t),F(f.$$.fragment,t),F(w.$$.fragment,t),F(j.$$.fragment,t),z=z.filter(Boolean);for(let t=0;t<z.length;t+=1)F(z[t]);F(O.$$.fragment,t),F(D.$$.fragment,t),F(E.$$.fragment,t),I=!1},d(t){q(e,t),t&&l(n),t&&l(i),t&&l(r),t&&l(a),q(f),q(w),q(j),c(z,t),q(O),q(D),q(E),M=!1,C()}}}function Ut(t,e,n){let i=!1;return et.subscribe((t=>{t&&n(0,i=!1)})),tt.subscribe((t=>{t&&n(0,i=!0)})),[i,()=>{et.update((t=>t+1))}]}return new class extends V{constructor(t){super(),K(this,t,Ut,qt,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
