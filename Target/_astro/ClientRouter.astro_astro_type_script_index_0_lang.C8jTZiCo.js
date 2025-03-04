import{i as B}from"./index.BqqcOND9.js";const y="data-astro-transition-persist",D=new Set;function O(t){const e=t.src?new URL(t.src,location.href).href:t.textContent;return!!D.has(e)||(D.add(e),!1)}function W(t){for(const e of t.scripts)!e.hasAttribute("data-astro-rerun")&&O(e)&&(e.dataset.astroExec="")}function V(t){const e=document.documentElement,n=[...e.attributes].filter((({name:t})=>(e.removeAttribute(t),t.startsWith("data-astro-"))));[...t.documentElement.attributes,...n].forEach((({name:t,value:n})=>e.setAttribute(t,n)))}function K(t){for(const e of Array.from(document.head.children)){const n=z(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function j(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${y}]`)){const e=n.getAttribute(y),o=t.querySelector(`[${y}="${e}"]`);o&&(o.replaceWith(n),"astro-island"===o.localName&&J(n)&&!Q(n,o)&&(n.setAttribute("ssr",""),n.setAttribute("props",o.getAttribute("props"))))}}const G=()=>{const t=document.activeElement;if(t?.closest(`[${y}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>E({activeElement:t,start:e,end:n})}return()=>E({activeElement:t})}return()=>E({activeElement:null})},E=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&("number"==typeof e&&(t.selectionStart=e),"number"==typeof n&&(t.selectionEnd=n)))},z=(t,e)=>{const n=t.getAttribute(y),o=n&&e.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const n=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${n}"]`)}return null},J=t=>{const e=t.dataset.astroTransitionPersistProps;return null==e||"false"===e},Q=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),Z=t=>{W(t),V(t),K(t);const e=G();j(t.body,document.body),e()},tt="astro:before-preparation",et="astro:after-preparation",nt="astro:before-swap",ot="astro:after-swap",rt=t=>document.dispatchEvent(new Event(t));class X extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,e,n,o,r,i,a,s,l,c){super(t,e),this.from=n,this.to=o,this.direction=r,this.navigationType=i,this.sourceElement=a,this.info=s,this.newDocument=l,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class it extends X{formData;loader;constructor(t,e,n,o,r,i,a,s,l,c){super(tt,{cancelable:!0},t,e,n,o,r,i,a,s),this.formData=l,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class st extends X{direction;viewTransition;swap;constructor(t,e){super(nt,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=e,this.swap=()=>Z(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function at(t,e,n,o,r,i,a,s,l){const c=new it(t,e,n,o,r,i,window.document,a,s,l);return document.dispatchEvent(c)&&(await c.loader(),c.defaultPrevented||(rt(et),"traverse"!==c.navigationType&&R({scrollX:scrollX,scrollY:scrollY}))),c}function ct(t,e){const n=new st(t,e);return document.dispatchEvent(n),n.swap(),n}const lt=history.pushState.bind(history),T=history.replaceState.bind(history),R=t=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...t},""))},L=!!document.startViewTransition,P=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let f,b,v;const _=t=>document.dispatchEvent(new Event(t)),$=()=>_("astro:page-load"),ut=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout((()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e}),60)},x="data-astro-transition-persist",k="data-astro-transition",S="data-astro-transition-fallback";let I,g=0;async function dt(t,e){try{const n=await fetch(t,e),o=(n.headers.get("content-type")??"").split(";",1)[0].trim();return"text/html"!==o&&"application/xhtml+xml"!==o?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:o}}catch{return null}}function q(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function ft(){let t=Promise.resolve();for(const e of document.getElementsByTagName("script")){if(""===e.dataset.astroExec)continue;const n=e.getAttribute("type");if(n&&"module"!==n&&"text/javascript"!==n)continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const n of e.attributes){if("src"===n.name){const e=new Promise((t=>{o.onload=o.onerror=t}));t=t.then((()=>e))}o.setAttribute(n.name,n.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}history.state?(g=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):P()&&(T({index:g,scrollX:scrollX,scrollY:scrollY},""),history.scrollRestoration="manual");const C=(t,e,n,o,r)=>{const i=Y(e,t),a=document.title;document.title=o;let s=!1;if(t.href!==location.href&&!r)if("replace"===n.history){const e=history.state;T({...n.state,index:e.index,scrollX:e.scrollX,scrollY:e.scrollY},"",t.href)}else lt({...n.state,index:++g,scrollX:0,scrollY:0},"",t.href);if(document.title=a,v=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),s=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const e=history.state;location.href=t.href,history.state||(T(e,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else s||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function mt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${x}="${n.getAttribute(x)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const t=document.createElement("link");t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.getAttribute("href")),e.push(new Promise((e=>{["load","error"].forEach((n=>t.addEventListener(n,e))),document.head.append(t)})))}return e}async function N(t,e,n,o,r){async function i(t){const e=document.getAnimations();document.documentElement.setAttribute(S,t);const n=document.getAnimations().filter((t=>!e.includes(t)&&!function(t){const e=t.effect;return!!(e&&e instanceof KeyframeEffect&&e.target)&&"infinite"===window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount}(t)));return Promise.allSettled(n.map((t=>t.finished)))}if("animate"===r&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const a=document.title,s=ct(t,n.viewTransition);C(s.to,s.from,e,a,o),_(ot),"animate"===r&&(n.transitionSkipped||s.signal.aborted?n.viewTransitionFinished():i("new").finally((()=>n.viewTransitionFinished())))}function ht(){return f?.controller.abort(),f={controller:new AbortController}}async function U(t,e,n,o,r){const i=ht();if(!P()||location.origin!==n.origin)return i===f&&(f=void 0),void(location.href=n.href);const a=r?"traverse":"replace"===o.history?"replace":"push";if("traverse"!==a&&R({scrollX:scrollX,scrollY:scrollY}),Y(e,n)&&("back"!==t&&n.hash||"back"===t&&e.hash))return C(n,e,o,document.title,r),void(i===f&&(f=void 0));const s=await at(e,n,t,a,o.sourceElement,o.info,i.controller.signal,o.formData,(async function(t){const n=t.to.href,o={signal:t.signal};if(t.formData){o.method="POST";const n=t.sourceElement instanceof HTMLFormElement?t.sourceElement:t.sourceElement instanceof HTMLElement&&"form"in t.sourceElement?t.sourceElement.form:t.sourceElement?.closest("form");o.body=void 0!==e&&"application/x-www-form-urlencoded"===Reflect.get(HTMLFormElement.prototype,"attributes",n).getNamedItem("enctype")?.value?new URLSearchParams(t.formData):t.formData}const r=await dt(n,o);if(null===r)return void t.preventDefault();if(r.redirected){const e=new URL(r.redirected);if(e.origin!==t.to.origin)return void t.preventDefault();t.to=e}if(I??=new DOMParser,t.newDocument=I.parseFromString(r.html,r.mediaType),t.newDocument.querySelectorAll("noscript").forEach((t=>t.remove())),!t.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!t.formData)return void t.preventDefault();const i=mt(t.newDocument);i.length&&!t.signal.aborted&&await Promise.all(i)}));if(s.defaultPrevented||s.signal.aborted)return i===f&&(f=void 0),void(s.signal.aborted||(location.href=n.href));const l=await async function(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}();if(s.signal.aborted)i===f&&(f=void 0);else{if(document.documentElement.setAttribute(k,s.direction),L)l.viewTransition=document.startViewTransition((async()=>await N(s,o,l,r)));else{const t=(async()=>{await Promise.resolve(),await N(s,o,l,r,q())})();l.viewTransition={updateCallbackDone:t,ready:t,finished:new Promise((t=>l.viewTransitionFinished=t)),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(S)}}}l.viewTransition?.updateCallbackDone.finally((async()=>{await ft(),$(),ut()})),l.viewTransition?.finished.finally((()=>{l.viewTransition=void 0,l===b&&(b=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(k),document.documentElement.removeAttribute(S)}));try{await(l.viewTransition?.updateCallbackDone)}catch(t){const e=t;console.log("[astro]",e.name,e.message,e.stack)}}}async function M(t,e){await U("forward",v,new URL(t,location.href),e??{})}function wt(t){if(!P()&&t.state)return void location.reload();if(null===t.state)return;const e=history.state,n=e.index,o=n>g?"forward":"back";g=n,U(o,v,new URL(location.href),{},e)}const F=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&R({scrollX:scrollX,scrollY:scrollY})};if(L||"none"!==q())if(v=new URL(location.href),addEventListener("popstate",wt),addEventListener("load",$),"onscrollend"in window)addEventListener("scrollend",F);else{let t,e,n,o;const r=()=>o!==history.state?.index?(clearInterval(t),void(t=void 0)):e===scrollY&&n===scrollX?(clearInterval(t),t=void 0,void F()):(e=scrollY,void(n=scrollX));addEventListener("scroll",(()=>{void 0===t&&(o=history.state?.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))}),{passive:!0})}for(const t of document.getElementsByTagName("script"))O(t);function bt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function H(t){return void 0!==t.dataset.astroReload}(L||"none"!==bt())&&(document.addEventListener("click",(t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement||e instanceof SVGAElement||e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;H(e)||e.hasAttribute("download")||!e.href||n&&"_self"!==n||r!==location.origin||0!==t.button||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),M(o,{history:"replace"===e.dataset.astroHistory?"replace":"auto",sourceElement:e}))})),document.addEventListener("submit",(t=>{let e=t.target;if("FORM"!==e.tagName||t.defaultPrevented||H(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i="string"==typeof n.action?n.action:n.getAttribute("action"),a="string"==typeof n.method?n.method:n.getAttribute("method");let s=o?.getAttribute("formaction")??i??location.pathname;const l=o?.getAttribute("formmethod")??a??"get";if("dialog"===l||location.origin!==new URL(s,location.href).origin)return;const c={sourceElement:o??n};if("get"===l){const t=new URLSearchParams(r),e=new URL(s);e.search=t.toString(),s=e.toString()}else c.formData=r;t.preventDefault(),M(s,c)})),B({prefetchAll:!0}));