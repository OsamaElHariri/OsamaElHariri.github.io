var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function d(){return f("")}function p(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function g(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}let v,w;function y(){if(void 0===v){v=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){v=!0}}return v}function x(t,e,n){t.classList[n?"add":"remove"](e)}function k(t){w=t}function T(){if(!w)throw new Error("Function called outside component initialization");return w}function j(t){T().$$.on_mount.push(t)}function A(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const S=[],D=[],O=[],_=[],L=Promise.resolve();let M=!1;function E(t){O.push(t)}let I=!1;const H=new Set;function C(){if(!I){I=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];k(e),G(e.$$)}for(k(null),S.length=0;D.length;)D.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];H.has(e)||(H.add(e),e())}O.length=0}while(S.length);for(;_.length;)_.pop()();M=!1,I=!1,H.clear()}}function G(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const z=new Set;let P;function B(){P={r:0,c:[],p:P}}function N(){P.r||i(P.c),P=P.p}function W(t,e){t&&t.i&&(z.delete(t),t.i(e))}function R(t,e,n,i){if(t&&t.o){if(z.has(t))return;z.add(t),P.c.push((()=>{z.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function q(t){t&&t.c()}function F(t,n,r,o){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,r),o||E((()=>{const n=l.map(e).filter(a);c?c.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(E)}function J(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(S.push(t),M||(M=!0,L.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,a,r,o,s,c,u=[-1]){const f=w;k(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:a.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(m.ctx=r?r(e,a.props||{},((t,n,...i)=>{const a=i.length?i[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=a)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](a),d&&U(e,t)),n})):[],m.update(),d=!0,i(m.before_update),m.fragment=!!o&&o(m.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();a.intro&&W(e.$$.fragment),F(e,a.target,a.anchor,a.customElement),C()}k(f)}class V{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){let n,i,a,r,c,f,d;return{c(){n=u("div"),i=u("a"),i.innerHTML='<div class="contact-circle secondary-contact-color social-circle svelte-ru1u9p"><i class="fab fa-linkedin fa-2x"></i> \n            <div class="title-text svelte-ru1u9p">LinkedIn</div></div>',a=m(),r=u("a"),r.innerHTML='<div class="contact-circle primary-contact-color code-circle svelte-ru1u9p"><i class="fab fa-github fa-2x"></i> \n            <div class="title-text svelte-ru1u9p">GitHub</div></div>',c=m(),f=u("a"),f.innerHTML='<div class="contact-circle secondary-contact-color mail-circle svelte-ru1u9p"><i class="fas fa-envelope fa-2x"></i> \n            <div class="title-text svelte-ru1u9p">Email</div></div>',h(i,"href","https://www.linkedin.com/in/osamaelhariri/"),h(i,"class","svelte-ru1u9p"),h(r,"href","https://github.com/OsamaElHariri"),h(r,"class","svelte-ru1u9p"),h(f,"href","mailto:osama.hariri.dev@gmail.com"),h(f,"class","svelte-ru1u9p"),h(n,"class",d=e[0]+" contact-section svelte-ru1u9p")},m(t,e){s(t,n,e),o(n,i),o(n,a),o(n,r),o(n,c),o(n,f)},p(t,[e]){1&e&&d!==(d=t[0]+" contact-section svelte-ru1u9p")&&h(n,"class",d)},i:t,o:t,d(t){t&&l(n)}}}function Q(t,e,n){let{variant:i}=e;return t.$$set=t=>{"variant"in t&&n(0,i=t.variant)},[i]}class X extends V{constructor(t){super(),K(this,t,Q,Y,r,{variant:0})}}const Z=[];function tt(e,n=t){let i;const a=[];function o(t){if(r(e,t)&&(e=t,i)){const t=!Z.length;for(let t=0;t<a.length;t+=1){const n=a[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(r,s=t){const l=[r,s];return a.push(l),1===a.length&&(i=n(o)||t),r(e),()=>{const t=a.indexOf(l);-1!==t&&a.splice(t,1),0===a.length&&(i(),i=null)}}}}const et=tt(0),nt=tt(0);function it(t){let e,n,i,a;return{c(){e=u("div"),n=f(t[0]),i=m(),a=u("div"),a.innerHTML='<hr class="svelte-kmzt6u"/>',h(e,"class","divider-text body-text svelte-kmzt6u"),h(a,"class","hr-chunk svelte-kmzt6u")},m(t,r){s(t,e,r),o(e,n),s(t,i,r),s(t,a,r)},p(t,e){1&e&&$(n,t[0])},d(t){t&&l(e),t&&l(i),t&&l(a)}}}function at(e){let n,i,a,r=e[0]&&it(e);return{c(){n=u("div"),i=u("div"),i.innerHTML='<hr class="svelte-kmzt6u"/>',a=m(),r&&r.c(),h(i,"class","hr-chunk svelte-kmzt6u"),h(n,"class","divider-with-text svelte-kmzt6u")},m(t,e){s(t,n,e),o(n,i),o(n,a),r&&r.m(n,null)},p(t,[e]){t[0]?r?r.p(t,e):(r=it(t),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},i:t,o:t,d(t){t&&l(n),r&&r.d()}}}function rt(t,e,n){let{text:i=""}=e;return t.$$set=t=>{"text"in t&&n(0,i=t.text)},[i]}class ot extends V{constructor(t){super(),K(this,t,rt,at,r,{text:0})}}function st(e){let n;return{c(){n=u("div"),b(n,"padding-top",e[0]+"px"),b(n,"padding-left",e[1]+"px")},m(t,e){s(t,n,e)},p(t,[e]){1&e&&b(n,"padding-top",t[0]+"px"),2&e&&b(n,"padding-left",t[1]+"px")},i:t,o:t,d(t){t&&l(n)}}}function lt(t,e,n){let{vertical:i=0}=e,{horizontal:a=0}=e;return t.$$set=t=>{"vertical"in t&&n(0,i=t.vertical),"horizontal"in t&&n(1,a=t.horizontal)},[i,a]}class ct extends V{constructor(t){super(),K(this,t,lt,st,r,{vertical:0,horizontal:1})}}function ut(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function ft(t){let e,n,i=t[0].text+"";return{c(){e=u("div"),n=f(i),h(e,"class","overline-text secondary-text-color")},m(t,i){s(t,e,i),o(e,n)},p(t,e){1&e&&i!==(i=t[0].text+"")&&$(n,i)},d(t){t&&l(e)}}}function mt(t){let e,n=t[0].links,i=[];for(let e=0;e<n.length;e+=1)i[e]=dt(ut(t,n,e));return{c(){e=u("div");for(let t=0;t<i.length;t+=1)i[t].c();h(e,"class","footer-actions svelte-1dm7ko")},m(t,n){s(t,e,n);for(let t=0;t<i.length;t+=1)i[t].m(e,null)},p(t,a){if(1&a){let r;for(n=t[0].links,r=0;r<n.length;r+=1){const o=ut(t,n,r);i[r]?i[r].p(o,a):(i[r]=dt(o),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(t){t&&l(e),c(i,t)}}}function dt(t){let e,n,i,a,r,c,f,d;return{c(){e=u("a"),n=u("i"),r=m(),h(n,"class",i=t[2].icon+" fa-2x svelte-1dm7ko"),h(n,"title",a=t[2].title),h(e,"href",c=t[2].url),h(e,"class","svelte-1dm7ko")},m(i,a){s(i,e,a),o(e,n),o(e,r),f||(d=p(e,"click",g(t[1])),f=!0)},p(t,r){1&r&&i!==(i=t[2].icon+" fa-2x svelte-1dm7ko")&&h(n,"class",i),1&r&&a!==(a=t[2].title)&&h(n,"title",a),1&r&&c!==(c=t[2].url)&&h(e,"href",c)},d(t){t&&l(e),f=!1,d()}}}function pt(e){let n;function i(t,e){return t[0].links?mt:ft}let a=i(e),r=a(e);return{c(){r.c(),n=d()},m(t,e){r.m(t,e),s(t,n,e)},p(t,[e]){a===(a=i(t))&&r?r.p(t,e):(r.d(1),r=a(t),r&&(r.c(),r.m(n.parentNode,n)))},i:t,o:t,d(t){r.d(t),t&&l(n)}}}function gt(t,e,n){let{footerData:i}=e;return t.$$set=t=>{"footerData"in t&&n(0,i=t.footerData)},[i,function(e){A(t,e)}]}class ht extends V{constructor(t){super(),K(this,t,gt,pt,r,{footerData:0})}}function $t(t){let e,n,i=t[0].text+"";return{c(){e=u("div"),n=f(i),h(e,"class","header-text")},m(t,i){s(t,e,i),o(e,n)},p(t,e){1&e&&i!==(i=t[0].text+"")&&$(n,i)},d(t){t&&l(e)}}}function bt(t){let e,n,i;return{c(){e=u("img"),e.src!==(n=t[0].image)&&h(e,"src",n),h(e,"alt",i=t[0].imageAlt),h(e,"class","svelte-1pknrtp")},m(t,n){s(t,e,n)},p(t,a){1&a&&e.src!==(n=t[0].image)&&h(e,"src",n),1&a&&i!==(i=t[0].imageAlt)&&h(e,"alt",i)},d(t){t&&l(e)}}}function vt(e){let n;function i(t,e){return t[0].image?bt:$t}let a=i(e),r=a(e);return{c(){r.c(),n=d()},m(t,e){r.m(t,e),s(t,n,e)},p(t,[e]){a===(a=i(t))&&r?r.p(t,e):(r.d(1),r=a(t),r&&(r.c(),r.m(n.parentNode,n)))},i:t,o:t,d(t){r.d(t),t&&l(n)}}}function wt(t,e,n){let{data:i}=e;return t.$$set=t=>{"data"in t&&n(0,i=t.data)},[i]}class yt extends V{constructor(t){super(),K(this,t,wt,vt,r,{data:0})}}function xt(t){let e,n,i,a,r,c,f,d,$;return e=new ct({props:{horizontal:"8"}}),{c(){q(e.$$.fragment),n=m(),i=u("a"),a=u("i"),h(a,"class",r=t[0].subtitleLink.icon+" fa-3x secondary-text-color svelte-1elrbj5"),h(i,"href",c=t[0].subtitleLink.url),h(i,"class","svelte-1elrbj5")},m(r,l){F(e,r,l),s(r,n,l),s(r,i,l),o(i,a),f=!0,d||($=p(i,"click",g(t[10])),d=!0)},p(t,e){(!f||1&e&&r!==(r=t[0].subtitleLink.icon+" fa-3x secondary-text-color svelte-1elrbj5"))&&h(a,"class",r),(!f||1&e&&c!==(c=t[0].subtitleLink.url))&&h(i,"href",c)},i(t){f||(W(e.$$.fragment,t),f=!0)},o(t){R(e.$$.fragment,t),f=!1},d(t){J(e,t),t&&l(n),t&&l(i),d=!1,$()}}}function kt(t){let e,n,i,a,r,c,d,v,w,k,T,j,A,S,D,O,_,L,M,I,H,C,G,z,P,U,K,V,Y,Q,X,Z,tt,et,nt,it,at=t[0].title+"",rt=t[0].subtitle+"",st=t[0].infoText+"";c=new ct({props:{vertical:"2"}}),v=new ot({props:{text:t[0].dividerText}});let lt=t[0].subtitleLink&&t[0].subtitleLink.icon&&xt(t);return D=new ct({props:{vertical:"16"}}),_=new yt({props:{data:t[0].main}}),M=new ct({props:{vertical:"8"}}),U=new ct({props:{vertical:"16"}}),Q=new ct({props:{vertical:"4"}}),Z=new ht({props:{footerData:t[0].footer}}),{c(){e=u("main"),n=u("div"),i=u("div"),a=f(at),r=m(),q(c.$$.fragment),d=m(),q(v.$$.fragment),w=m(),k=u("div"),T=u("div"),j=f(rt),A=m(),lt&&lt.c(),S=m(),q(D.$$.fragment),O=m(),q(_.$$.fragment),L=m(),q(M.$$.fragment),I=m(),H=u("div"),C=u("div"),G=u("div"),z=f(st),P=m(),q(U.$$.fragment),K=m(),V=u("div"),Y=m(),q(Q.$$.fragment),X=m(),q(Z.$$.fragment),h(i,"class","title-text svelte-1elrbj5"),h(T,"class","body-text"),h(k,"class","subtitle secondary-text-color svelte-1elrbj5"),h(C,"class","more-info-text svelte-1elrbj5"),h(V,"class","more-info-fade svelte-1elrbj5"),h(H,"class","more-info svelte-1elrbj5"),h(n,"class","panel-layout-color main-panel-container svelte-1elrbj5"),x(n,"absolute",t[1]),b(e,"height",t[5]+"px"),b(e,"width",t[3]+"px"),h(e,"class","svelte-1elrbj5"),E((()=>t[11].call(e))),x(e,"expanded",t[7]),x(e,"contracted",t[6]),x(e,"recent-open",t[8])},m(f,m){s(f,e,m),o(e,n),o(n,i),o(i,a),o(n,r),F(c,n,null),o(n,d),F(v,n,null),o(n,w),o(n,k),o(k,T),o(T,j),o(k,A),lt&&lt.m(k,null),o(n,S),F(D,n,null),o(n,O),F(_,n,null),o(n,L),F(M,n,null),o(n,I),o(n,H),o(H,C),o(C,G),o(G,z),o(C,P),F(U,C,null),o(H,K),o(H,V),o(n,Y),F(Q,n,null),o(n,X),F(Z,n,null),tt=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=u("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const i=y();let a;return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=p(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{a=p(n.contentWindow,"resize",e)}),o(t,n),()=>{(i||a&&n.contentWindow)&&a(),l(n)}}(e,t[11].bind(e)),et=!0,nt||(it=p(n,"click",g(t[9])),nt=!0)},p(t,[i]){(!et||1&i)&&at!==(at=t[0].title+"")&&$(a,at);const r={};1&i&&(r.text=t[0].dividerText),v.$set(r),(!et||1&i)&&rt!==(rt=t[0].subtitle+"")&&$(j,rt),t[0].subtitleLink&&t[0].subtitleLink.icon?lt?(lt.p(t,i),1&i&&W(lt,1)):(lt=xt(t),lt.c(),W(lt,1),lt.m(k,null)):lt&&(B(),R(lt,1,1,(()=>{lt=null})),N());const o={};1&i&&(o.data=t[0].main),_.$set(o),(!et||1&i)&&st!==(st=t[0].infoText+"")&&$(z,st);const s={};1&i&&(s.footerData=t[0].footer),Z.$set(s),2&i&&x(n,"absolute",t[1]),(!et||32&i)&&b(e,"height",t[5]+"px"),(!et||8&i)&&b(e,"width",t[3]+"px"),128&i&&x(e,"expanded",t[7]),64&i&&x(e,"contracted",t[6]),256&i&&x(e,"recent-open",t[8])},i(t){et||(W(c.$$.fragment,t),W(v.$$.fragment,t),W(lt),W(D.$$.fragment,t),W(_.$$.fragment,t),W(M.$$.fragment,t),W(U.$$.fragment,t),W(Q.$$.fragment,t),W(Z.$$.fragment,t),et=!0)},o(t){R(c.$$.fragment,t),R(v.$$.fragment,t),R(lt),R(D.$$.fragment,t),R(_.$$.fragment,t),R(M.$$.fragment,t),R(U.$$.fragment,t),R(Q.$$.fragment,t),R(Z.$$.fragment,t),et=!1},d(t){t&&l(e),J(c),J(v),lt&&lt.d(),J(D),J(_),J(M),J(U),J(Q),J(Z),tt(),nt=!1,it()}}}function Tt(t,e,n){let i,a,r,o,{activity:s}=e,l=!1,c=!1,u=!1,f=0,m=!1;function d(){n(7,u=!u),n(6,c=!u)}return et.subscribe((t=>{n(8,m=t==f)})),nt.subscribe((t=>{u&&d()})),j((async()=>{n(5,o=r),n(3,a=i),n(1,l=!0)})),t.$$set=t=>{"activity"in t&&n(0,s=t.activity)},[s,l,i,a,r,o,c,u,m,function(){d(),u?et.update((t=>{let e=t+1;return f=e,e})):nt.update((t=>t+1))},function(e){A(t,e)},function(){r=this.clientHeight,i=this.clientWidth,n(4,r),n(2,i)}]}class jt extends V{constructor(t){super(),K(this,t,Tt,kt,r,{activity:0})}}function At(e){let n,i;return{c(){n=u("div"),i=f(e[0]),h(n,"class","header-text panel-layout-color svelte-amrofu")},m(t,e){s(t,n,e),o(n,i)},p(t,[e]){1&e&&$(i,t[0])},i:t,o:t,d(t){t&&l(n)}}}function St(t,e,n){let{title:i}=e;return t.$$set=t=>{"title"in t&&n(0,i=t.title)},[i]}class Dt extends V{constructor(t){super(),K(this,t,St,At,r,{title:0})}}function Ot(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function _t(e){let n,i,a,r;return i=new jt({props:{activity:e[2]}}),{c(){n=u("div"),q(i.$$.fragment),a=m(),h(n,"class","list-panel svelte-7iv6aa")},m(t,e){s(t,n,e),F(i,n,null),o(n,a),r=!0},p:t,i(t){r||(W(i.$$.fragment,t),r=!0)},o(t){R(i.$$.fragment,t),r=!1},d(t){t&&l(n),J(i)}}}function Lt(t){let e,n,i,a,r,f,d;n=new Dt({props:{title:t[0].header}}),a=new ct({props:{vertical:"12"}});let p=t[1],g=[];for(let e=0;e<p.length;e+=1)g[e]=_t(Ot(t,p,e));const $=t=>R(g[t],1,1,(()=>{g[t]=null}));return{c(){e=u("div"),q(n.$$.fragment),i=m(),q(a.$$.fragment),r=m(),f=u("div");for(let t=0;t<g.length;t+=1)g[t].c();h(f,"class","content-list svelte-7iv6aa")},m(t,l){s(t,e,l),F(n,e,null),o(e,i),F(a,e,null),o(e,r),o(e,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null);d=!0},p(t,[e]){const i={};if(1&e&&(i.title=t[0].header),n.$set(i),2&e){let n;for(p=t[1],n=0;n<p.length;n+=1){const i=Ot(t,p,n);g[n]?(g[n].p(i,e),W(g[n],1)):(g[n]=_t(i),g[n].c(),W(g[n],1),g[n].m(f,null))}for(B(),n=p.length;n<g.length;n+=1)$(n);N()}},i(t){if(!d){W(n.$$.fragment,t),W(a.$$.fragment,t);for(let t=0;t<p.length;t+=1)W(g[t]);d=!0}},o(t){R(n.$$.fragment,t),R(a.$$.fragment,t),g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)R(g[t]);d=!1},d(t){t&&l(e),J(n),J(a),c(g,t)}}}function Mt(t,e,n){let{content:i}=e,a=i.activities.map((t=>{let e,n,i=!1;if(t.main||(t.main={}),t.footer||(t.footer={}),t.data&&(t.data.startDate&&(e=new Date(t.data.startDate)),t.data.endDate&&(i="present"==t.data.endDate,n=i?new Date:new Date(t.data.endDate))),e&&n){if(!t.subtitle){let i=(a=e,(r=n).getMonth()-a.getMonth()+12*(r.getFullYear()-a.getFullYear())),o=Math.floor(i/12),s=Math.floor(i-12*o);t.subtitle="",o>0&&(t.subtitle=`${o} year`,o>1&&(t.subtitle+="s")),s>0&&(t.subtitle&&(t.subtitle=`${t.subtitle} `),t.subtitle=`${t.subtitle}${s} month`,s>1&&(t.subtitle+="s"))}if(!t.footer.text&&!t.footer.links){let a=e.toLocaleDateString("en",{year:"numeric",month:"short"}),r=i?"present":n.toLocaleDateString("en",{year:"numeric",month:"short"});t.footer.text=`${a} - ${r}`}}var a,r;return t}));return t.$$set=t=>{"content"in t&&n(0,i=t.content)},[i,a]}class Et extends V{constructor(t){super(),K(this,t,Mt,Lt,r,{content:0})}}function It(t,e,n){const i=t.slice();return i[15]=e[n],i[17]=n,i}function Ht(t){let e,n,a,r,c,d,g=t[15]+"";function v(){return t[3](t[17])}function w(){return t[4](t[17])}return{c(){e=u("div"),n=u("div"),a=f(g),r=m(),h(n,"class","letter svelte-1t4djij"),b(n,"transform","scale("+(1+.25*t[1][t[17]])+", "+(1+.5*-t[1][t[17]])+")"),h(e,"class","letter-wrapper svelte-1t4djij")},m(t,i){s(t,e,i),o(e,n),o(n,a),o(e,r),c||(d=[p(e,"click",v),p(e,"mouseenter",w)],c=!0)},p(e,i){t=e,1&i&&g!==(g=t[15]+"")&&$(a,g),2&i&&b(n,"transform","scale("+(1+.25*t[1][t[17]])+", "+(1+.5*-t[1][t[17]])+")")},d(t){t&&l(e),c=!1,i(d)}}}function Ct(e){let n,i=e[0],a=[];for(let t=0;t<i.length;t+=1)a[t]=Ht(It(e,i,t));return{c(){n=u("div");for(let t=0;t<a.length;t+=1)a[t].c();h(n,"class","word svelte-1t4djij")},m(t,e){s(t,n,e);for(let t=0;t<a.length;t+=1)a[t].m(n,null)},p(t,[e]){if(7&e){let r;for(i=t[0],r=0;r<i.length;r+=1){const o=It(t,i,r);a[r]?a[r].p(o,e):(a[r]=Ht(o),a[r].c(),a[r].m(n,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=i.length}},i:t,o:t,d(t){t&&l(n),c(a,t)}}}function Gt(t,e,n){let{text:i=""}=e;const a=t=>{let e=t,n=0,i=0;return{getRawStrength:()=>e,getStrength:()=>e*Math.sin(n/2),update:a=>{i+=a,n+=50*a,e=Math.max(0,t-4*Math.pow(i,2))}}},r=i.split("").map((t=>[]));let o=i.split("").map((t=>0));const s=t=>{(t=>{n(1,o=r.map(((e,n)=>{let i=0;return e.forEach((e=>{e.update(t),i+=e.getStrength()*(i-1.4)/1.4})),i})))})(t)},l=(t,e,n)=>{let o=e;if(o<0||o>=i.length)return;const s=Math.pow(.6,Math.abs(t-o));s<.1||setTimeout((()=>{r[o].push(a(.7*s)),l(t,n(o),n)}),100)},c=t=>{r[t].push(a(.7)),r.forEach(((t,e)=>{r[e]=r[e].filter((t=>t.getRawStrength()>.01))})),l(t,t+1,(t=>t+1)),l(t,t-1,(t=>t-1))};let u,f=0,m=0;const d=t=>{f=(t-m)/1e3,m=t,u=requestAnimationFrame(d),s(f||1)};var p;j((()=>{d(0)})),p=()=>{u&&cancelAnimationFrame(u)},T().$$.on_destroy.push(p);return t.$$set=t=>{"text"in t&&n(0,i=t.text)},[i,o,c,t=>c(t),t=>c(t)]}class zt extends V{constructor(t){super(),K(this,t,Gt,Ct,r,{text:0})}}function Pt(e){let n,i;return{c(){n=u("div"),i=u("div"),h(i,"class","shape svelte-1yyolpr"),b(i,"background-color",e[3]),b(i,"width",e[4]+"px"),b(i,"height",e[4]+"px"),x(i,"shift-origin",e[2]),h(n,"class","shape-wrapper svelte-1yyolpr"),b(n,"top",e[1]),b(n,"left",e[0])},m(t,e){s(t,n,e),o(n,i)},p(t,[e]){4&e&&x(i,"shift-origin",t[2]),2&e&&b(n,"top",t[1]),1&e&&b(n,"left",t[0])},i:t,o:t,d(t){t&&l(n)}}}function Bt(t,e,n){let{x:i}=e,{y:a}=e,{shiftOrigin:r=!1}=e,o=Math.random()<.5?"#DB2955":"#499167",s=100+30*Math.random();return t.$$set=t=>{"x"in t&&n(0,i=t.x),"y"in t&&n(1,a=t.y),"shiftOrigin"in t&&n(2,r=t.shiftOrigin)},[i,a,r,o,s]}class Nt extends V{constructor(t){super(),K(this,t,Bt,Pt,r,{x:0,y:1,shiftOrigin:2})}}function Wt(e){let n,i,a,r,c,f,d,p,g,$,b,v,w,y,x,k,T;return i=new Nt({props:{x:"22%",y:"50px"}}),r=new Nt({props:{x:"10%",y:"200px"}}),f=new Nt({props:{x:"20%",y:"450px"}}),p=new Nt({props:{x:"88%",y:"90px",shiftOrigin:"true"}}),$=new Nt({props:{x:"95%",y:"250px",shiftOrigin:"true"}}),v=new Nt({props:{x:"85%",y:"500px",shiftOrigin:"true"}}),y=new Nt({props:{x:"83%",y:"1000px",shiftOrigin:"true"}}),k=new Nt({props:{x:"18%",y:"1200px"}}),{c(){n=u("div"),q(i.$$.fragment),a=m(),q(r.$$.fragment),c=m(),q(f.$$.fragment),d=m(),q(p.$$.fragment),g=m(),q($.$$.fragment),b=m(),q(v.$$.fragment),w=m(),q(y.$$.fragment),x=m(),q(k.$$.fragment),h(n,"class","texture-container svelte-z6unws")},m(t,e){s(t,n,e),F(i,n,null),o(n,a),F(r,n,null),o(n,c),F(f,n,null),o(n,d),F(p,n,null),o(n,g),F($,n,null),o(n,b),F(v,n,null),o(n,w),F(y,n,null),o(n,x),F(k,n,null),T=!0},p:t,i(t){T||(W(i.$$.fragment,t),W(r.$$.fragment,t),W(f.$$.fragment,t),W(p.$$.fragment,t),W($.$$.fragment,t),W(v.$$.fragment,t),W(y.$$.fragment,t),W(k.$$.fragment,t),T=!0)},o(t){R(i.$$.fragment,t),R(r.$$.fragment,t),R(f.$$.fragment,t),R(p.$$.fragment,t),R($.$$.fragment,t),R(v.$$.fragment,t),R(y.$$.fragment,t),R(k.$$.fragment,t),T=!1},d(t){t&&l(n),J(i),J(r),J(f),J(p),J($),J(v),J(y),J(k)}}}class Rt extends V{constructor(t){super(),K(this,t,null,Wt,r,{})}}var qt=[{header:"Work Experience",activities:[{title:"Toters",dividerText:"for",main:{text:"FullStack Developer"},subtitleLink:{icon:"fab fa-linkedin",url:"https://www.linkedin.com/company/toters-delivery/mycompany/"},infoText:"Toters is an order delivery company. I worked on web projects developed using Angular and React. I also worked on the server side using the Laravel framework. The company and team were growing rapidly, so I had the chance to be a part of a fast-paced start up that is growing quickly.",data:{startDate:"2019-11",endDate:"present"}},{title:"Ubanquity (now Layer)",dividerText:"for",main:{text:"Mobile and Web Developer"},subtitleLink:{icon:"fab fa-linkedin",url:"https://www.linkedin.com/company/wearelayer/"},infoText:"Ubanquity is all about e-banking. I was in charge of adding new features and maintaining an existing AngularJS web app. I was also part of the team that stared a new mobile app project in Flutter that was going to be the flagship product.",data:{startDate:"2018-6",endDate:"2019-10"}},{title:"American University of Beirut",dividerText:"for",main:{text:"Data Entry/ VBA Developer"},subtitleLink:{icon:"fab fa-linkedin",url:"https://www.linkedin.com/school/american-university-of-beirut/"},infoText:"This was a work study oportunity while I was a university student. The job mainly consisted of entering data into Excel sheets. While doing that, I wrote some VBA scripts to speed up some repetitive tasks.",data:{startDate:"2017-10",endDate:"2017-12"}}]},{header:"Open Source Contributions",activities:[{title:"Mask Network",subtitle:"Social Network Web3 Portal",infoText:"I contributed to this project as part of a hackathon. For this project, I integrated a different project called GoodGhosting into Mask as a plugin. This was an interesting technical and managerial challenge. Luckily all the people involved were amazing and we ended up launching the product!",main:{image:"images/projects/mask.svg",imageAlt:"Mask"},footer:{links:[{icon:"fab fa-github",title:"Pull Requests",url:"https://github.com/DimensionDev/Maskbook/pulls?q=author%3AOsamaElHariri+is%3Amerged+"}]}},{title:"Godot",subtitle:"Game Engine",infoText:"I contributed to the open source Godot game engine. My contributions were centered around the game editor; fixing some issues and adding small features. Contributing and having my code merged into a huge project like this is fascinating. It's actually that easy for anyone to start contributing code to an open source project.",main:{image:"images/projects/godot.png",imageAlt:"Godot"},footer:{links:[{icon:"fab fa-github",title:"Pull Requests",url:"https://github.com/godotengine/godot/pulls?q=author%3AOsamaElHariri++is%3Amerged"}]}},{title:"useDApp",subtitle:"Web3 React Framework",infoText:"I joined a hackathon in the blockchain space, and picked up this project as part of that hackathon. This project has very solid react code and I learned a lot from the feedback from the maintainers, both in the PR comments and the video calls we had.",main:{image:"images/projects/use_dapp.png",imageAlt:"useDApp"},footer:{links:[{icon:"fab fa-github",title:"Pull Requests",url:"https://github.com/EthWorks/useDApp/pulls?q=author%3AOsamaElHariri+is%3Amerged"}]}}]},{header:"Side Projects",activities:[{title:"StampChat",subtitle:"Mobile App with Microservices Backend",infoText:"A mobile chat app written in flutter! Users can chat normally, and they can STAMP a message by tapping anywhere on the screen. I used a basic microservices backend architecture for this app, and the deployments were made easire by using Kubernetes.",main:{image:"images/projects/stampchat_logo.png",imageAlt:"StampChat"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/StampChat_App"}]}},{title:"HamsterWheel",subtitle:"Templating Language",infoText:"A language that allows writing templates to loop over CSV files, processing each row and sending the output to a target file. This was a very nice intro to how compilers work. This was written using the Rust language.",main:{image:"images/projects/hamsterwheel_logo.png",imageAlt:"HamsterWheel"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/HamsterWheel"}]}}]},{header:"Game Side Projects",activities:[{title:"Orik's Lantern",subtitle:"Desktop Game",infoText:"An awesome 2D platformer made with Godot! Follow Orik's journey as he struggles to accept the events of a tragic incident that happened to him long ago",main:{image:"images/projects/oriks_lantern.png",imageAlt:"Orik's Lantern"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/oriks_lantern"},{icon:"fas fa-rocket",title:"Play Now",url:"https://yamsandbread.itch.io/oriks-journey-demo"}]}},{title:"STORM A BREWIN'",subtitle:"Game Jam Browser Game",infoText:"My entry to the GMTK 2020 game jam (a 2 day jam). The theme was Out of Control, so I made this browser game were you need to help a couple of sailors row their boat to shore.",main:{image:"images/projects/storms_brewin.png",imageAlt:"Storm A Brewin'"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/GMTK_JAM_2020"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://yamsandbread.itch.io/storm-a-brewin"}]}},{title:"Spirit Chains",subtitle:"Browser Game",infoText:"I wanted to make a top down roguelite, and this is what I came up with. This is a browser game that has the player start slow, and ramps up the difficulty as players get more an more upgrades. There are a handeful of enemies and a couple of bosses, as well as a couple of nice cut scene.",main:{image:"images/projects/spirit_chains.png",imageAlt:"Spirit Chains"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/SpiritChainRoguelite"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/spirit-chains-roguelite"}]}},{title:"Sibi the Little Hero",subtitle:"Browser Game",infoText:"A 2D platformer written in TypeScript using Phaser. I learned some music theory prior to making this game, and so I wrote the score for this one myself. The main mechanic is how you can dig into the platforms, then jump out to avoid the obstacles.",main:{image:"images/projects/sibi.png",imageAlt:"Sibi"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/SibiTheLittleHero"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/sibi-the-little-hero"}]}},{title:"Laszlo's Tower",subtitle:"Game Jam Desktop Game",infoText:"A top down game made using Godot for the GitHub GameOff2018. This game jam ran for a whole month and it's theme was HYBRID. During that time I got really familiar with the Godot game engine. This was also my first game jam, and overall I'd say it was a great experience.",main:{image:"images/projects/laszlos_tower.png",imageAlt:"Laszlo's Tower"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/LaszlosTower"},{icon:"fas fa-rocket",title:"Play Now",url:"https://yamsandbread.itch.io/laszlos-tower"}]}},{title:"Survivor's Journey",subtitle:"Browser Game",infoText:"The first game I made. I used PhaserJS for this one. The game is inspired by Nitrome's Oodlegobs. It's nothing fancy, but it's a start that I'm happy with.",main:{image:"images/projects/survivors_journey.png",imageAlt:"Survivor's Journey"},footer:{links:[{icon:"fab fa-github",title:"Source Code",url:"https://github.com/OsamaElHariri/Survivors-_Journey_HTML5_Phaser"},{icon:"fas fa-rocket",title:"Play Online Now",url:"https://www.kongregate.com/games/yamsandbread/survivors-journey"}]}}]}];function Ft(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function Jt(e){let n,i,a,r,o,c;return n=new ct({props:{vertical:"28"}}),a=new Et({props:{content:e[2]}}),o=new ct({props:{vertical:"28"}}),{c(){q(n.$$.fragment),i=m(),q(a.$$.fragment),r=m(),q(o.$$.fragment)},m(t,e){F(n,t,e),s(t,i,e),F(a,t,e),s(t,r,e),F(o,t,e),c=!0},p:t,i(t){c||(W(n.$$.fragment,t),W(a.$$.fragment,t),W(o.$$.fragment,t),c=!0)},o(t){R(n.$$.fragment,t),R(a.$$.fragment,t),R(o.$$.fragment,t),c=!1},d(t){J(n,t),t&&l(i),J(a,t),t&&l(r),J(o,t)}}}function Ut(t){let e,n,i,a,r,f,d,$,b,v,w,y,k,T,j,A,S,D,O,_,L,M,E,I,H,C,G;e=new Rt({}),f=new ct({props:{vertical:"160"}}),b=new zt({props:{text:"OSAMA"}}),w=new X({props:{variant:"tiny"}}),S=new ct({props:{vertical:"160"}});let z=qt,P=[];for(let e=0;e<z.length;e+=1)P[e]=Jt(Ft(t,z,e));const U=t=>R(P[t],1,1,(()=>{P[t]=null}));return _=new ct({props:{vertical:"160"}}),M=new X({}),I=new ct({props:{vertical:"160"}}),{c(){q(e.$$.fragment),n=m(),i=u("div"),a=m(),r=u("main"),q(f.$$.fragment),d=m(),$=u("div"),q(b.$$.fragment),v=m(),q(w.$$.fragment),y=m(),k=u("h2"),k.textContent="Software Engineer",T=m(),j=u("div"),j.textContent="Interested in all things software. Especially interested in software at large scales and game \n\t\tdevelopment as well as new fields like machine learning and blockchain. I join hackathons\n\t\tand contribute to open source!",A=m(),q(S.$$.fragment),D=m();for(let t=0;t<P.length;t+=1)P[t].c();O=m(),q(_.$$.fragment),L=m(),q(M.$$.fragment),E=m(),q(I.$$.fragment),h(i,"class","screen-fade main-background-color svelte-wv83lw"),x(i,"blur-visible",t[0]),h($,"class","personal-info svelte-wv83lw"),h(j,"class","body-text about-text svelte-wv83lw"),h(r,"class","svelte-wv83lw")},m(l,c){F(e,l,c),s(l,n,c),s(l,i,c),s(l,a,c),s(l,r,c),F(f,r,null),o(r,d),o(r,$),F(b,$,null),o($,v),F(w,$,null),o($,y),o($,k),o(r,T),o(r,j),o(r,A),F(S,r,null),o(r,D);for(let t=0;t<P.length;t+=1)P[t].m(r,null);o(r,O),F(_,r,null),o(r,L),F(M,r,null),o(r,E),F(I,r,null),H=!0,C||(G=p(i,"click",g(t[1])),C=!0)},p(t,[e]){if(1&e&&x(i,"blur-visible",t[0]),0&e){let n;for(z=qt,n=0;n<z.length;n+=1){const i=Ft(t,z,n);P[n]?(P[n].p(i,e),W(P[n],1)):(P[n]=Jt(i),P[n].c(),W(P[n],1),P[n].m(r,O))}for(B(),n=z.length;n<P.length;n+=1)U(n);N()}},i(t){if(!H){W(e.$$.fragment,t),W(f.$$.fragment,t),W(b.$$.fragment,t),W(w.$$.fragment,t),W(S.$$.fragment,t);for(let t=0;t<z.length;t+=1)W(P[t]);W(_.$$.fragment,t),W(M.$$.fragment,t),W(I.$$.fragment,t),H=!0}},o(t){R(e.$$.fragment,t),R(f.$$.fragment,t),R(b.$$.fragment,t),R(w.$$.fragment,t),R(S.$$.fragment,t),P=P.filter(Boolean);for(let t=0;t<P.length;t+=1)R(P[t]);R(_.$$.fragment,t),R(M.$$.fragment,t),R(I.$$.fragment,t),H=!1},d(t){J(e,t),t&&l(n),t&&l(i),t&&l(a),t&&l(r),J(f),J(b),J(w),J(S),c(P,t),J(_),J(M),J(I),C=!1,G()}}}function Kt(t,e,n){let i=!1;return nt.subscribe((t=>{t&&n(0,i=!1)})),et.subscribe((t=>{t&&n(0,i=!0)})),[i,()=>{nt.update((t=>t+1))}]}return new class extends V{constructor(t){super(),K(this,t,Kt,Ut,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
