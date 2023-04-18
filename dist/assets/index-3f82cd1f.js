(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const we=(e,t)=>e===t,N=Symbol("solid-proxy"),Ae=Symbol("solid-dev-component"),O={equals:we};let xe=Te;const w=1,j=2,ce={owned:null,cleanups:null,context:null,owner:null};var T=null;let U=null,h=null,d=null,C=null,B=0;function Pe(e,t){const n=h,l=T,i=e.length===0,r=i?ce:{owned:null,cleanups:null,context:null,owner:t===void 0?l:t},o=i?e:()=>e(()=>b(()=>H(r)));T=r,h=null;try{return k(o,!0)}finally{h=n,T=l}}function ue(e,t){t=t?Object.assign({},O,t):O;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=i=>(typeof i=="function"&&(i=i(n.value)),de(n,i));return[me.bind(n),l]}function _(e,t,n){const l=_e(e,t,!1,w);G(l)}function S(e,t,n){n=n?Object.assign({},O,n):O;const l=_e(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,G(l),me.bind(l)}function b(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function fe(e,t){const n=Symbol("context");return{id:n,Provider:Ie(n),defaultValue:e}}function ae(e){let t;return(t=$e(T,e.id))!==void 0?t:e.defaultValue}function he(e){const t=S(e),n=S(()=>Y(t()));return n.toArray=()=>{const l=n();return Array.isArray(l)?l:l!=null?[l]:[]},n}function me(){if(this.sources&&this.state)if(this.state===w)G(this);else{const e=d;d=null,k(()=>D(this),!1),d=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function de(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=U&&U.running;o&&U.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?d.push(r):C.push(r),r.observers&&pe(r)),o||(r.state=w)}if(d.length>1e6)throw d=[],new Error},!1)),t}function G(e){if(!e.fn)return;H(e);const t=T,n=h,l=B;h=T=e,ke(e,e.value,l),h=n,T=t}function ke(e,t,n){let l;try{l=e.fn(t)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(H),e.owned=null),e.updatedAt=n+1,ye(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?de(e,l):e.value=l,e.updatedAt=n)}function _e(e,t,n,l=w,i){const r={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:T,context:null,pure:n};return T===null||T!==ce&&(T.owned?T.owned.push(r):T.owned=[r]),r}function ge(e){if(e.state===0)return;if(e.state===j)return D(e);if(e.suspense&&b(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)G(e);else if(e.state===j){const l=d;d=null,k(()=>D(e,t[0]),!1),d=l}}function k(e,t){if(d)return e();let n=!1;t||(d=[]),C?n=!0:C=[],B++;try{const l=e();return Ee(n),l}catch(l){n||(C=null),d=null,ye(l)}}function Ee(e){if(d&&(Te(d),d=null),e)return;const t=C;C=null,t.length&&k(()=>xe(t),!1)}function Te(e){for(let t=0;t<e.length;t++)ge(e[t])}function D(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const i=l.state;i===w?l!==t&&(!l.updatedAt||l.updatedAt<B)&&ge(l):i===j&&D(l,t)}}}function pe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=j,n.pure?d.push(n):C.push(n),n.observers&&pe(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();l<i.length&&(r.sourceSlots[o]=l,i[l]=r,n.observerSlots[l]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ye(e){throw e}function $e(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:$e(e.owner,t):void 0}function Y(e){if(typeof e=="function"&&!e.length)return Y(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const l=Y(e[n]);Array.isArray(l)?t.push.apply(t,l):t.push(l)}return t}return e}function Ie(e,t){return function(l){let i;return _(()=>i=b(()=>(T.context={[e]:l.value},he(()=>l.children))),void 0),i}}function f(e,t){return b(()=>e(t||{}))}function I(){return!0}const J={get(e,t,n){return t===N?n:e.get(t)},has(e,t){return t===N?!0:e.has(t)},set:I,deleteProperty:I,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:I,deleteProperty:I}},ownKeys(e){return e.keys()}};function V(e){return(e=typeof e=="function"?e():e)?e:{}}function Le(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&N in i,e[l]=typeof i=="function"?(t=!0,S(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const r=V(e[i])[l];if(r!==void 0)return r}},has(l){for(let i=e.length-1;i>=0;i--)if(l in V(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(V(e[i])));return[...new Set(l)]}},J);const n={};for(let l=e.length-1;l>=0;l--)if(e[l]){const i=Object.getOwnPropertyDescriptors(e[l]);for(const r in i)r in n||Object.defineProperty(n,r,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const s=(e[o]||{})[r];if(s!==void 0)return s}}})}return n}function Ne(e,...t){const n=new Set(t.flat());if(N in e){const i=t.map(r=>new Proxy({get(o){return r.includes(o)?e[o]:void 0},has(o){return r.includes(o)&&o in e},keys(){return r.filter(o=>o in e)}},J));return i.push(new Proxy({get(r){return n.has(r)?void 0:e[r]},has(r){return n.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!n.has(r))}},J)),i}const l=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(l).filter(i=>!n.has(i))),t.map(i=>{const r={};for(let o=0;o<i.length;o++){const s=i[o];s in e&&Object.defineProperty(r,s,l[s]?l[s]:{get(){return e[s]},set(){return!0},enumerable:!0})}return r})}const Oe=e=>`Stale read from <${e}>.`;function je(e){let t=!1;const n=(r,o)=>r[0]===o[0]&&(t?r[1]===o[1]:!r[1]==!o[1])&&r[2]===o[2],l=he(()=>e.children),i=S(()=>{let r=l();Array.isArray(r)||(r=[r]);for(let o=0;o<r.length;o++){const s=r[o].when;if(s)return t=!!r[o].keyed,[o,s,r[o]]}return[-1]},void 0,{equals:n});return S(()=>{const[r,o,s]=i();if(r<0)return e.fallback;const c=s.children;return typeof c=="function"&&c.length>0?b(()=>c(t?o:()=>{if(b(i)[0]!==r)throw Oe("Match");return s.when})):c},void 0,void 0)}function R(e){return e}const De=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Me=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...De]),Fe=new Set(["innerHTML","textContent","innerText","children"]),We=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Be=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ge(e,t){const n=Be[e];return typeof n=="object"?n[t]?n.$:void 0:n}const He=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ze=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ue={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ve(e,t,n){let l=n.length,i=t.length,r=l,o=0,s=0,c=t[i-1].nextSibling,u=null;for(;o<i||s<r;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const m=r<l?s?n[s-1].nextSibling:n[r-s]:c;for(;s<r;)e.insertBefore(n[s++],m)}else if(r===s)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[s]===t[i-1]){const m=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--r],m),t[i]=n[r]}else{if(!u){u=new Map;let a=s;for(;a<r;)u.set(n[a],a++)}const m=u.get(t[o]);if(m!=null)if(s<m&&m<r){let a=o,y=1,E;for(;++a<i&&a<r&&!((E=u.get(t[a]))==null||E!==m+y);)y++;if(y>m-s){const Ce=t[o];for(;s<m;)e.insertBefore(n[s++],Ce)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const ne="_$DX_DELEGATE";function Re(e,t,n,l={}){let i;return Pe(r=>{i=r,t===document?e():p(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{i(),t.textContent=""}}function $(e,t,n){let l;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>(l||(l=i())).cloneNode(!0):()=>b(()=>document.importNode(l||(l=i()),!0));return r.cloneNode=r,r}function qe(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let l=0,i=e.length;l<i;l++){const r=e[l];n.has(r)||(n.add(r),t.addEventListener(r,et))}}function M(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ke(e,t,n,l){l==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,l)}function g(e,t){t==null?e.removeAttribute("class"):e.className=t}function Xe(e,t,n,l){if(l)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function P(e,t,n={}){const l=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const s=i[r];!s||s==="undefined"||t[s]||(ie(e,s,!1),delete n[s])}for(r=0,o=l.length;r<o;r++){const s=l[r],c=!!t[s];!s||s==="undefined"||n[s]===c||!c||(ie(e,s,!0),n[s]=c)}return n}function Qe(e,t,n){if(!t)return n?M(e,"style"):t;const l=e.style;if(typeof t=="string")return l.cssText=t;typeof n=="string"&&(l.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&l.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(l.setProperty(r,i),n[r]=i);return n}function Ye(e,t={},n,l){const i={};return l||_(()=>i.children=x(e,t.children,i.children)),_(()=>t.ref&&t.ref(e)),_(()=>Je(e,t,n,!0,i,!0)),i}function p(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return x(e,t,l,n);_(i=>x(e,t(),i,n),l)}function Je(e,t,n,l,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=le(e,o,null,i[o],n,r)}for(const o in t){if(o==="children"){l||x(e,t.children);continue}const s=t[o];i[o]=le(e,o,s,i[o],n,r)}}function Ze(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ie(e,t,n){const l=t.trim().split(/\s+/);for(let i=0,r=l.length;i<r;i++)e.classList.toggle(l[i],n)}function le(e,t,n,l,i,r){let o,s,c,u,m;if(t==="style")return Qe(e,n,l);if(t==="classList")return P(e,n,l);if(n===l)return l;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);l&&e.removeEventListener(a,l),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);l&&e.removeEventListener(a,l,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),y=He.has(a);if(!y&&l){const E=Array.isArray(l)?l[0]:l;e.removeEventListener(a,E)}(y||n)&&(Xe(e,a,n,y),y&&qe([a]))}else if(t.slice(0,5)==="attr:")M(e,t.slice(5),n);else if((m=t.slice(0,5)==="prop:")||(c=Fe.has(t))||!i&&((u=Ge(t,e.tagName))||(s=Me.has(t)))||(o=e.nodeName.includes("-")))m&&(t=t.slice(5),s=!0),t==="class"||t==="className"?g(e,n):o&&!s&&!c?e[Ze(t)]=n:e[u||t]=n;else{const a=i&&t.indexOf(":")>-1&&Ue[t.split(":")[0]];a?Ke(e,a,t,n):M(e,We[t]||t,n)}return n}function et(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const l=n[t];if(l&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?l.call(n,i,e):l.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function x(e,t,n,l,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=A(e,n,l,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=A(e,n,l);else{if(r==="function")return _(()=>{let s=t();for(;typeof s=="function";)s=s();n=x(e,s,n,l)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Z(s,t,n,i))return _(()=>n=x(e,s,n,l,!0)),()=>n;if(s.length===0){if(n=A(e,n,l),o)return n}else c?n.length===0?re(e,s,l):Ve(e,n,s):(n&&A(e),re(e,s));n=s}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=A(e,n,l,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Z(e,t,n,l){let i=!1;for(let r=0,o=t.length;r<o;r++){let s=t[r],c=n&&n[r];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))i=Z(e,s,c)||i;else if(typeof s=="function")if(l){for(;typeof s=="function";)s=s();i=Z(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||i}else e.push(s),i=!0;else{const u=String(s);c&&c.nodeType===3?(c.data=u,e.push(c)):e.push(document.createTextNode(u))}}return i}function re(e,t,n=null){for(let l=0,i=t.length;l<i;l++)e.insertBefore(t[l],n)}function A(e,t,n,l){if(n===void 0)return e.textContent="";const i=l||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(i!==s){const c=s.parentNode===e;!r&&!o?c?e.replaceChild(i,s):e.insertBefore(i,n):c&&s.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const tt="http://www.w3.org/2000/svg";function nt(e,t=!1){return t?document.createElementNS(tt,e):document.createElement(e)}function it(e){const[t,n]=Ne(e,["component"]),l=S(()=>t.component);return S(()=>{const i=l();switch(typeof i){case"function":return Object.assign(i,{[Ae]:!0}),b(()=>i(n));case"string":const r=ze.has(i),o=nt(i,r);return Ye(o,n,r),o}})}const lt="_App_13svs_38",rt="_App_theme_light_13svs_47",st="_App_theme_dark_13svs_52",F={App:lt,App_theme_light:rt,App_theme_dark:st},ot="_Text_53imr_2",ct="_Header_53imr_2",ut="_Header_theme_light_53imr_17",ft="_Header_theme_dark_53imr_21",ee={Text:ot,Header:ct,Header_theme_light:ut,Header_theme_dark:ft},ve=fe(),at=e=>{const[t,n]=ue(e.theme?e.theme:"light");return f(ve.Provider,{value:[t,n],get children(){return e.children}})};function z(){return ae(ve)}const ht=$("<h1>Notapattern"),mt={light:ee.Header_theme_light,dark:ee.Header_theme_dark},dt=e=>{const t=e.theme??z()?.[0]()??"light";return(()=>{const n=ht();return _(l=>P(n,{[ee.Header]:!0,[mt[t]]:!0},l)),n})()},_t="_Text_9w19h_2",gt="_Greetings_9w19h_2",Tt={Text:_t,Greetings:gt},pt=$("<p>"),yt=e=>(()=>{const t=pt();return p(t,()=>e.children),_(n=>P(t,{[Tt.Greetings]:!0},n)),t})(),$t="_ChipMenu_1u89p_1",vt={ChipMenu:$t},St=$("<nav>"),bt=e=>(()=>{const t=St();return p(t,()=>e.children),_(n=>P(t,{[vt.ChipMenu]:!0},n)),t})(),Ct="_Text_mgxvt_2",wt="_Chip_mgxvt_2",At="_Chip_theme_light_mgxvt_14",xt="_Chip_theme_dark_mgxvt_20",Pt="_Chip_selected_mgxvt_26",W={Text:Ct,Chip:wt,Chip_theme_light:At,Chip_theme_dark:xt,Chip_selected:Pt},kt={light:W.Chip_theme_light,dark:W.Chip_theme_dark},q=e=>{const{size:t="m",as:n,leftIcon:l,children:i,ref:r,href:o,...s}=e,c=n??"button",u=e.theme??z()?.[0]()??"light",m=S(()=>e.selected);return f(it,Le({component:c,type:c==="button"?"button":void 0,ref:r,href:o,get classList(){return{[W.Chip]:!0,[W.Chip_selected]:m()??!1,[kt[u]]:!0}}},s,{children:i}))},Et="_Timeline_46v8y_1",It={Timeline:Et},Lt=$("<ul>"),Se=fe(),K=e=>f(Se.Provider,{get value(){return e.color},get children(){const t=Lt();return p(t,()=>e.children),_(n=>{const l=e.name,i=It.Timeline;return l!==n._v$&&M(t,"id",n._v$=l),i!==n._v$2&&g(t,n._v$2=i),n},{_v$:void 0,_v$2:void 0}),t}});function te(){return ae(Se)}const Nt="_Text_1v1eb_2",Ot="_TimelineContent_1v1eb_2",jt="_TimelineItem_1v1eb_7",Dt="_TimelineItemWrapper_1v1eb_14",Mt="_TimelineShape_1v1eb_21",Ft="_TimelineStopWrapper_1v1eb_30",Wt="_TimelineTitle_1v1eb_37",Bt="_TimelineTitle_theme_light_1v1eb_50",Gt="_TimelineTitle_theme_dark_1v1eb_57",be="_TimelineLine_1v1eb_64",v={Text:Nt,TimelineContent:Ot,TimelineItem:jt,TimelineItemWrapper:Dt,TimelineShape:Mt,TimelineStopWrapper:Ft,TimelineTitle:Wt,TimelineTitle_theme_light:Bt,TimelineTitle_theme_dark:Gt,TimelineLine:be},Ht="_Text_gjszg_2",zt="_TimelineContent_gjszg_2",Ut="_TimelineItem_gjszg_7",Vt="_TimelineItemWrapper_gjszg_14",Rt="_TimelineShape_gjszg_21",qt="_TimelineIntervalShape_gjszg_21",Kt="_TimelineStopWrapper_gjszg_30",Xt="_TimelineTitle_gjszg_37",Qt="_TimelineTitle_theme_light_gjszg_50",Yt="_TimelineTitle_theme_dark_gjszg_57",Jt="_TimelineLine_gjszg_64",Zt="_TimelineIntervalSeparator_gjszg_83",se={Text:Ht,TimelineContent:zt,TimelineItem:Ut,TimelineItemWrapper:Vt,TimelineShape:Rt,TimelineIntervalShape:qt,TimelineStopWrapper:Kt,TimelineTitle:Xt,TimelineTitle_theme_light:Qt,TimelineTitle_theme_dark:Yt,TimelineLine:Jt,TimelineIntervalSeparator:Zt},en=$("<div><div></div><div>"),tn=()=>{const e=te();return(()=>{const t=en(),n=t.firstChild,l=n.nextSibling;return(e??"inherit")!=null?n.style.setProperty("background-color",e??"inherit"):n.style.removeProperty("background-color"),(e??"inherit")!=null?l.style.setProperty("background-color",e??"inherit"):l.style.removeProperty("background-color"),_(i=>{const r=se.TimelineIntervalShape,o=se.TimelineIntervalSeparator,s=v.TimelineLine;return r!==i._v$&&g(t,i._v$=r),o!==i._v$2&&g(n,i._v$2=o),s!==i._v$3&&g(l,i._v$3=s),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()},nn=$("<li><div><div><h2></h2><span>"),ln={light:v.TimelineTitle_theme_light,dark:v.TimelineTitle_theme_dark},oe=e=>{const t=z()?.[0]()??"light";return(()=>{const n=nn(),l=n.firstChild,i=l.firstChild,r=i.firstChild,o=r.nextSibling;return p(l,f(tn,{}),i),p(r,()=>e.title),p(o,()=>e.description),p(n,()=>e.children,null),_(s=>{const c=v.TimelineItem,u=v.TimelineItemWrapper,m={[v.TimelineTitle]:!0,[ln[t]]:!0},a=v.TimelineContent,y=v.TimelineContent;return c!==s._v$&&g(n,s._v$=c),u!==s._v$2&&g(l,s._v$2=u),s._v$3=P(i,m,s._v$3),a!==s._v$4&&g(r,s._v$4=a),y!==s._v$5&&g(o,s._v$5=y),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()},rn="_Text_1l904_2",sn="_TimelineContent_1l904_2",on="_TimelineItem_1l904_7",cn="_TimelineItemWrapper_1l904_14",un="_TimelineShape_1l904_21",fn="_TimelineStopShape_1l904_21",an="_TimelineStopWrapper_1l904_30",hn="_TimelineTitle_1l904_37",mn="_TimelineTitle_theme_light_1l904_50",dn="_TimelineTitle_theme_dark_1l904_57",_n="_TimelineLine_1l904_64",gn="_TimelineStop_1l904_21",Tn="_TimelineStopInner_1l904_91",L={Text:rn,TimelineContent:sn,TimelineItem:on,TimelineItemWrapper:cn,TimelineShape:un,TimelineStopShape:fn,TimelineStopWrapper:an,TimelineTitle:hn,TimelineTitle_theme_light:mn,TimelineTitle_theme_dark:dn,TimelineLine:_n,TimelineStop:gn,TimelineStopInner:Tn},pn=$("<div><div><div></div></div><div>"),yn=()=>{const e=te();return(()=>{const t=pn(),n=t.firstChild,l=n.firstChild,i=n.nextSibling;return(e??"inherit")!=null?n.style.setProperty("background-color",e??"inherit"):n.style.removeProperty("background-color"),(e??"inherit")!=null?i.style.setProperty("background-color",e??"inherit"):i.style.removeProperty("background-color"),_(r=>{const o=L.TimelineStopShape,s=L.TimelineStop,c=L.TimelineStopInner,u=be;return o!==r._v$&&g(t,r._v$=o),s!==r._v$2&&g(n,r._v$2=s),c!==r._v$3&&g(l,r._v$3=c),u!==r._v$4&&g(i,r._v$4=u),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})()},$n=$("<div><div>"),X=e=>(te(),(()=>{const t=$n(),n=t.firstChild;return p(t,f(yn,{}),n),p(n,()=>e.children),_(()=>g(t,L.TimelineStopWrapper)),t})());const Q=$("<br>"),vn=$("<div><header></header><main>"),Sn={light:F.App_theme_light,dark:F.App_theme_dark},bn=()=>{const[e,t]=ue("workProjects"),[n,l]=z();return(()=>{const i=vn(),r=i.firstChild,o=r.nextSibling;return p(r,f(dt,{children:"NOTAPATTERN"}),null),p(r,f(yt,{get children(){return["👋 ",Q(),"Я – Никита Карацев, ",Q(),"Сайт про меня 👨‍💻 ",Q(),"и мои достижения. 🏆"]}}),null),p(i,f(bt,{get children(){return[f(q,{get selected(){return e()==="workProjects"},onClick:()=>t("workProjects"),children:"Опыт работы"}),f(q,{get selected(){return e()==="events"},onClick:()=>t("events"),children:"Мероприятия"}),f(q,{get selected(){return e()==="aboutMe"},onClick:()=>t("aboutMe"),children:"Обо мне"})]}}),o),p(o,f(je,{get children(){return[f(R,{get when(){return e()==="workProjects"},get children(){return f(K,{name:"workProjects",color:"#FCCA00",get children(){return[f(oe,{title:"Cron design",description:"04.2022-11.2022",get children(){return[f(X,{children:"test 1"}),f(X,{children:"test 2"})]}}),f(oe,{title:"Smth",get children(){return f(X,{children:"asd"})}})]}})}}),f(R,{get when(){return e()==="events"},get children(){return f(K,{name:"events",children:"asdad"})}}),f(R,{get when(){return e()==="aboutMe"},get children(){return f(K,{name:"aboutMe",children:"asdad"})}})]}})),_(s=>{const c={[F.App]:!0,[Sn[n()]]:!0},u=F.header;return s._v$=P(i,c,s._v$),u!==s._v$2&&g(r,s._v$2=u),s},{_v$:void 0,_v$2:void 0}),i})()},Cn=document.getElementById("root");Re(()=>f(at,{theme:"light",get children(){return f(bn,{})}}),Cn);
