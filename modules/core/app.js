function init(){
 el("tabs").innerHTML=["dashboard","magic","icons","boss","scanner","settings"].map(t=>`<button class="tab ${t==='dashboard'?'active':''}" data-view="${t}">${t}</button>`).join("");
 document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showView(b.dataset.view,b));
 el("bossSelect").innerHTML=BOSSES.map(b=>`<option>${esc(b)}</option>`).join("");el("phaseSelect").innerHTML=PHASES.map(p=>`<option>${esc(p)}</option>`).join("");el("rotationSelect").innerHTML=ROTATIONS.map(r=>`<option>${esc(r)}</option>`).join("");el("eofSelect").innerHTML=Object.keys(EOFS).map(e=>`<option>${esc(e)}</option>`).join("");
 document.querySelectorAll("[data-module]").forEach(b=>b.onclick=()=>showView(b.dataset.module,b));
 document.querySelectorAll("[data-adren]").forEach(b=>b.onclick=()=>{state.adren=b.dataset.adren;render()});
 el("bossSelect").onchange=e=>{state.boss=e.target.value;render()};el("phaseSelect").onchange=e=>{state.phase=e.target.value;render()};el("rotationSelect").onchange=e=>{state.rotation=e.target.value;render()};el("eofSelect").onchange=e=>{state.eof=e.target.value;render()};
 el("sunBtn").onclick=()=>toggle("sunshine");el("fsoaBtn").onclick=()=>toggle("fsoa");el("tsunamiBtn").onclick=()=>toggle("tsunami");el("dangerBtn").onclick=()=>toggle("danger");el("clearUsedBtn").onclick=()=>{state.used={};render()};
 el("abilityButtons").innerHTML=["GConc","Wild Magic","Asphyxiate","Omnipower","EOF"].map(a=>`<button data-use="${a}"><img class="icon" src="${icon(a)}">${a}</button>`).join("");
 document.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>useAbility(b.dataset.use));
 el("captureBtn").onclick=screenScan;el("permissionBtn").onclick=()=>{try{if(window.alt1&&alt1.permissionPixel)alt1.permissionPixel()}catch(e){}screenScan()};el("autoScanBtn").onclick=()=>{state.autoScan=!state.autoScan;render()};
 el("compactBtn").onclick=()=>{state.compact=!state.compact;render()};el("voiceBtn").onclick=()=>{state.voice=!state.voice;el("voiceBtn").textContent=state.voice?"Voice ON":"Voice OFF";render()};el("safeModeBtn").onclick=()=>{state.safeMode=!state.safeMode;el("safeModeBtn").textContent=state.safeMode?"Safe Mode ON":"Safe Mode OFF";render()};el("resetAllBtn").onclick=()=>{state=structuredClone(defaultState);render()};
 el("iconSearch").oninput=renderIcons;
 render();setInterval(()=>{if(state.autoScan)screenScan();render()},700)
}
function showView(v,btn){document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));if(btn)btn.classList.add("active");document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));el("view-"+v)?.classList.add("active");state.module=v}
function toggle(k){state[k]=!state[k];if(k==="sunshine"&&state[k])useAbility("Sunshine",false);if(k==="fsoa"&&state[k])useAbility("FSoA",false);if(k==="tsunami"&&state[k])useAbility("Tsunami",false);render()}
function useAbility(n,rer=true){if(["GConc","Wild Magic","Asphyxiate","Omnipower"].includes(n))state.used[n]=true;startCd(n);if(rer)render()}
init();
