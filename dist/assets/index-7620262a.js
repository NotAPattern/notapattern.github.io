(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const de=(e,t)=>e===t,k=Symbol("solid-proxy"),ge=Symbol("solid-dev-component"),D={equals:de};let me=re;const w=1,L=2,z={owned:null,cleanups:null,context:null,owner:null};var g=null;let I=null,f=null,d=null,b=null,F=0;function ye(e,t){const n=f,s=g,i=e.length===0,r=i?z:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=i?e:()=>e(()=>x(()=>B(r)));g=r,f=null;try{return T(o,!0)}finally{f=n,g=s}}function ee(e,t){t=t?Object.assign({},D,t):D;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ne(n,i));return[te.bind(n),s]}function y(e,t,n){const s=se(e,t,!1,w);H(s)}function S(e,t,n){n=n?Object.assign({},D,n):D;const s=se(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,H(s),te.bind(s)}function x(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function pe(e,t){const n=Symbol("context");return{id:n,Provider:Ae(n),defaultValue:e}}function _e(e){let t;return(t=ue(g,e.id))!==void 0?t:e.defaultValue}function be(e){const t=S(e),n=S(()=>q(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function te(){if(this.sources&&this.state)if(this.state===w)H(this);else{const e=d;d=null,T(()=>v(this),!1),d=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function ne(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=I&&I.running;o&&I.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?d.push(r):b.push(r),r.observers&&le(r)),o||(r.state=w)}if(d.length>1e6)throw d=[],new Error},!1)),t}function H(e){if(!e.fn)return;B(e);const t=g,n=f,s=F;f=g=e,we(e,e.value,s),f=n,g=t}function we(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(B),e.owned=null),e.updatedAt=n+1,oe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ne(e,s):e.value=s,e.updatedAt=n)}function se(e,t,n,s=w,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==z&&(g.owned?g.owned.push(r):g.owned=[r]),r}function ie(e){if(e.state===0)return;if(e.state===L)return v(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)H(e);else if(e.state===L){const s=d;d=null,T(()=>v(e,t[0]),!1),d=s}}function T(e,t){if(d)return e();let n=!1;t||(d=[]),b?n=!0:b=[],F++;try{const s=e();return Ce(n),s}catch(s){n||(b=null),d=null,oe(s)}}function Ce(e){if(d&&(re(d),d=null),e)return;const t=b;b=null,t.length&&T(()=>me(t),!1)}function re(e){for(let t=0;t<e.length;t++)ie(e[t])}function v(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===w?s!==t&&(!s.updatedAt||s.updatedAt<F)&&ie(s):i===L&&v(s,t)}}}function le(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=L,n.pure?d.push(n):b.push(n),n.observers&&le(n))}}function B(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)B(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){throw e}function ue(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ue(e.owner,t):void 0}function q(e){if(typeof e=="function"&&!e.length)return q(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=q(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ae(e,t){return function(s){let i;return y(()=>i=x(()=>(g.context={[e]:s.value},be(()=>s.children))),void 0),i}}function m(e,t){return x(()=>e(t||{}))}function O(){return!0}const K={get(e,t,n){return t===k?n:e.get(t)},has(e,t){return t===k?!0:e.has(t)},set:O,deleteProperty:O,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:O,deleteProperty:O}},ownKeys(e){return e.keys()}};function U(e){return(e=typeof e=="function"?e():e)?e:{}}function xe(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&k in i,e[s]=typeof i=="function"?(t=!0,S(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const r=U(e[i])[s];if(r!==void 0)return r}},has(s){for(let i=e.length-1;i>=0;i--)if(s in U(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(U(e[i])));return[...new Set(s)]}},K);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const i=Object.getOwnPropertyDescriptors(e[s]);for(const r in i)r in n||Object.defineProperty(n,r,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[r];if(l!==void 0)return l}}})}return n}function $e(e,...t){const n=new Set(t.flat());if(k in e){const i=t.map(r=>new Proxy({get(o){return r.includes(o)?e[o]:void 0},has(o){return r.includes(o)&&o in e},keys(){return r.filter(o=>o in e)}},K));return i.push(new Proxy({get(r){return n.has(r)?void 0:e[r]},has(r){return n.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!n.has(r))}},K)),i}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(i=>!n.has(i))),t.map(i=>{const r={};for(let o=0;o<i.length;o++){const l=i[o];l in e&&Object.defineProperty(r,l,s[l]?s[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return r})}const Se=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ee=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Se]),Te=new Set(["innerHTML","textContent","innerText","children"]),Pe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ne=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Oe(e,t){const n=Ne[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),De=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Le={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ve(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,u=t[i-1].nextSibling,h=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const a=r<s?l?n[l-1].nextSibling:n[r-l]:u;for(;l<r;)e.insertBefore(n[l++],a)}else if(r===l)for(;o<i;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],a),t[i]=n[r]}else{if(!h){h=new Map;let c=l;for(;c<r;)h.set(n[c],c++)}const a=h.get(t[o]);if(a!=null)if(l<a&&a<r){let c=o,p=1,N;for(;++c<i&&c<r&&!((N=h.get(t[c]))==null||N!==a+p);)p++;if(p>a-l){const he=t[o];for(;l<a;)e.insertBefore(n[l++],he)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const W="_$DX_DELEGATE";function Me(e,t,n,s={}){let i;return ye(r=>{i=r,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function $(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>(s||(s=i())).cloneNode(!0):()=>x(()=>document.importNode(s||(s=i()),!0));return r.cloneNode=r,r}function ce(e,t=window.document){const n=t[W]||(t[W]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Ue))}}function X(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function je(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function fe(e,t){t==null?e.removeAttribute("class"):e.className=t}function Fe(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function P(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(Y(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(Y(e,l,!0),n[l]=u)}return n}function He(e,t,n){if(!t)return n?X(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Be(e,t={},n,s){const i={};return s||y(()=>i.children=A(e,t.children,i.children)),y(()=>t.ref&&t.ref(e)),y(()=>Ge(e,t,n,!0,i,!0)),i}function _(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return A(e,t,s,n);y(i=>A(e,t(),i,n),s)}function Ge(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=J(e,o,null,i[o],n,r)}for(const o in t){if(o==="children"){s||A(e,t.children);continue}const l=t[o];i[o]=J(e,o,l,i[o],n,r)}}function Ie(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Y(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function J(e,t,n,s,i,r){let o,l,u,h,a;if(t==="style")return He(e,n,s);if(t==="classList")return P(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),p=ke.has(c);if(!p&&s){const N=Array.isArray(s)?s[0]:s;e.removeEventListener(c,N)}(p||n)&&(Fe(e,c,n,p),p&&ce([c]))}else if(t.slice(0,5)==="attr:")X(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(u=Te.has(t))||!i&&((h=Oe(t,e.tagName))||(l=Ee.has(t)))||(o=e.nodeName.includes("-")))a&&(t=t.slice(5),l=!0),t==="class"||t==="className"?fe(e,n):o&&!l&&!u?e[Ie(t)]=n:e[h||t]=n;else{const c=i&&t.indexOf(":")>-1&&Le[t.split(":")[0]];c?je(e,c,t,n):X(e,Pe[t]||t,n)}return n}function Ue(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function A(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=C(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=C(e,n,s);else{if(r==="function")return y(()=>{let l=t();for(;typeof l=="function";)l=l();n=A(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(Q(l,t,n,i))return y(()=>n=A(e,l,n,s,!0)),()=>n;if(l.length===0){if(n=C(e,n,s),o)return n}else u?n.length===0?Z(e,l,s):ve(e,n,l):(n&&C(e),Z(e,l));n=l}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=C(e,n,s,t);C(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Q(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],u=n&&n[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=Q(e,l,u)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=Q(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const h=String(l);u&&u.nodeType===3?(u.data=h,e.push(u)):e.push(document.createTextNode(h))}}return i}function Z(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function C(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const u=l.parentNode===e;!r&&!o?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const Ve="http://www.w3.org/2000/svg";function Re(e,t=!1){return t?document.createElementNS(Ve,e):document.createElement(e)}function qe(e){const[t,n]=$e(e,["component"]),s=S(()=>t.component);return S(()=>{const i=s();switch(typeof i){case"function":return Object.assign(i,{[ge]:!0}),x(()=>i(n));case"string":const r=De.has(i),o=Re(i,r);return Be(o,n,r),o}})}const Ke="_App_1syat_18",Xe="_App_theme_light_1syat_38",Qe="_App_theme_dark_1syat_43",M={App:Ke,App_theme_light:Xe,App_theme_dark:Qe},We="_Text_f5lx0_2",Ye="_Header_f5lx0_2",Je="_Header_theme_light_f5lx0_17",Ze="_Header_theme_dark_f5lx0_21",E={Text:We,Header:Ye,Header_theme_light:Je,Header_theme_dark:Ze},ae=pe(),ze=e=>{const[t,n]=ee(e.theme?e.theme:"light");return m(ae.Provider,{value:[t,n],get children(){return e.children}})};function G(){return _e(ae)}const et=$("<h1>Notapattern"),tt={light:E.Header_theme_light,dark:E.Header_theme_dark},nt=e=>{const t=e.theme??G()?.[0]()??"light";return(()=>{const n=et();return y(s=>P(n,{[E.Header]:!0,[tt[t]]:!0},s)),n})()},st="_Text_g0gvw_2",it="_Greetings_g0gvw_2",rt={Text:st,Greetings:it},lt=$("<p>"),ot=e=>(()=>{const t=lt();return _(t,()=>e.children),y(n=>P(t,{[rt.Greetings]:!0},n)),t})(),ut="_ChipMenu_1gmou_1",ct={ChipMenu:ut},ft=$("<nav>"),at=e=>(()=>{const t=ft();return _(t,()=>e.children),y(n=>P(t,{[ct.ChipMenu]:!0},n)),t})(),ht="_Text_mgxvt_2",dt="_Chip_mgxvt_2",gt="_Chip_theme_light_mgxvt_14",mt="_Chip_theme_dark_mgxvt_20",yt="_Chip_selected_mgxvt_26",j={Text:ht,Chip:dt,Chip_theme_light:gt,Chip_theme_dark:mt,Chip_selected:yt},pt={light:j.Chip_theme_light,dark:j.Chip_theme_dark},V=e=>{const{size:t="m",as:n,leftIcon:s,children:i,ref:r,href:o,...l}=e,u=n??"button",h=e.theme??G()?.[0]()??"light",a=()=>e.selected;return m(qe,xe({component:u,type:u==="button"?"button":void 0,ref:r,href:o,get classList(){return{[j.Chip]:!0,[j.Chip_selected]:a()??!1,[pt[h]]:!0}}},l,{children:i}))},_t=$("<section>");E.Header_theme_light,E.Header_theme_dark;const bt=e=>(e.theme??G()?.[0](),(()=>{const t=_t();return _(t,()=>e.children),t})()),R=$("<br>"),wt=$("<div><header><button>Change theme</button></header><main>"),Ct={light:M.App_theme_light,dark:M.App_theme_dark},At=()=>{const[e,t]=ee("workProjects"),[n,s]=G();return(()=>{const i=wt(),r=i.firstChild,o=r.firstChild,l=r.nextSibling;return _(r,m(nt,{children:"NOTAPATTERN"}),o),_(r,m(ot,{get children(){return["👋 ",R(),"Я – Никита Карацев, ",R(),"Сайт про меня 👨‍💻 ",R(),"и мои достижения. 🏆"]}}),o),o.$$click=()=>s(n()==="light"?"dark":"light"),_(i,m(at,{get children(){return[m(V,{get selected(){return e()==="workProjects"},onClick:()=>t("workProjects"),children:"Рабочие проекты"}),m(V,{get selected(){return e()==="events"},onClick:()=>t("events"),children:"Мероприятия"}),m(V,{get selected(){return e()==="aboutMe"},onClick:()=>t("aboutMe"),children:"Обо мне"})]}}),l),_(l,m(bt,{children:"asdad"})),y(u=>{const h={[M.App]:!0,[Ct[n()]]:!0},a=M.header;return u._v$=P(i,h,u._v$),a!==u._v$2&&fe(r,u._v$2=a),u},{_v$:void 0,_v$2:void 0}),i})()};ce(["click"]);const xt=document.getElementById("root");Me(()=>m(ze,{theme:"light",get children(){return m(At,{})}}),xt);
