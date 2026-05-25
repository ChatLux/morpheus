(function(){try{
  var slug="lp-mnh8du3d-wr596";
  var SK='lp_access_'+slug;
  var map={access_token:'lp_pw_',allowlist_access_token:'lp_al_',pin_access_token:'lp_pin_',paywall_access_token:'lp_paid_'};
  var u=new URL(location.href);var found=null;var changed=false;
  Object.keys(map).forEach(function(p){var v=u.searchParams.get(p);if(v){found=v;try{localStorage.setItem(map[p]+slug,v);}catch(e){}u.searchParams.delete(p);changed=true;}});
  if(found){try{sessionStorage.setItem(SK,found);}catch(e){}}
  else{try{if(!sessionStorage.getItem(SK)){var t=localStorage.getItem('lp_pw_'+slug)||localStorage.getItem('lp_al_'+slug)||localStorage.getItem('lp_pin_'+slug)||localStorage.getItem('lp_paid_'+slug);if(t)sessionStorage.setItem(SK,t);}}catch(e){}}
  if(changed){try{history.replaceState(null,'',u.toString());}catch(e){}}

  // Auto-attach gate token to:
  //   1. sheet-rows writes (PATCH/POST/PUT/DELETE)
  //   2. LLM proxy calls (POST/GET) — /api/landing-pages/public/<slug>/llm/...
  //   3. landing-page LLM config probes (GET) — same prefix
  // So AI-generated pages don't have to know about the X-Landing-Page-Token header.
  function getTok(){try{return sessionStorage.getItem(SK)||localStorage.getItem('lp_pw_'+slug)||localStorage.getItem('lp_al_'+slug)||localStorage.getItem('lp_pin_'+slug)||localStorage.getItem('lp_paid_'+slug);}catch(e){return null;}}
  function needsToken(url,method){if(!url)return false;var s=String(url);var m=(method||'GET').toUpperCase();var isSheetWrite=(m==='POST'||m==='PATCH'||m==='PUT'||m==='DELETE')&&/\/sheet-rows(\/|$|\?)/.test(s);var isLlm=/\/api\/landing-pages\/public\/[^/]+\/(llm|llm-config)(\/|$|\?)/.test(s);return isSheetWrite||isLlm;}
  if(window.fetch){var _f=window.fetch;window.fetch=function(input,init){try{var url=typeof input==='string'?input:(input&&input.url)||'';var method=(init&&init.method)||(input&&input.method)||'GET';if(needsToken(url,method)){var tok=getTok();if(tok){init=init||{};var h=new Headers(init.headers||(typeof input!=='string'?input.headers:undefined)||{});if(!h.has('X-Landing-Page-Token'))h.set('X-Landing-Page-Token',tok);init.headers=h;}}}catch(e){}return _f.call(this,input,init);};}
  if(window.XMLHttpRequest){var _o=XMLHttpRequest.prototype.open;var _s=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(m,u){this.__lpM=m;this.__lpU=u;return _o.apply(this,arguments);};XMLHttpRequest.prototype.send=function(){try{if(needsToken(this.__lpU,this.__lpM)){var tok=getTok();if(tok)this.setRequestHeader('X-Landing-Page-Token',tok);}}catch(e){}return _s.apply(this,arguments);};}
}catch(e){}})();

const cur=document.getElementById('cur'),rng=document.getElementById('rng');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;rng.style.left=rx+'px';rng.style.top=ry+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.pill').forEach(el=>{el.addEventListener('mouseenter',()=>{rng.style.width='50px';rng.style.height='50px';rng.style.opacity='.82';});el.addEventListener('mouseleave',()=>{rng.style.width='36px';rng.style.height='36px';rng.style.opacity='.55';});});
const obs=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});},{threshold:.08});
document.querySelectorAll('.rv').forEach(r=>obs.observe(r));
document.getElementById('mt').innerHTML+=document.getElementById('mt').innerHTML;
function openM(){document.getElementById('modal').style.display='flex';['fn','fe','fp'].forEach(i=>document.getElementById(i).value='');chk();}
function closeM(){document.getElementById('modal').style.display='none';}
document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)closeM();});
function chk(){const n=document.getElementById('fn').value.trim(),e=document.getElementById('fe').value.trim(),p=document.getElementById('fp').value.trim(),b=document.getElementById('mbtn');if(n&&e&&p){b.classList.add('on');}else{b.classList.remove('on');}}
function sub(){const n=document.getElementById('fn').value.trim(),e=document.getElementById('fe').value.trim(),p=document.getElementById('fp').value.trim();if(!n||!e||!p){document.getElementById('ferr').style.display='block';return;}document.getElementById('ferr').style.display='none';window.open('https://paymegpt.com/agents/38001874/morpheus-ai','_blank');closeM();}