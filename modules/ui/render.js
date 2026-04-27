let lastAction="";
function render(){
 const s=magicDecision();
 if(s.action!==lastAction){lastAction=s.action;if(state.voice)speak(s.action)}
 document.body.classList.toggle("compact",state.compact);
 el("mainCallout").textContent=s.action;el("mainCallout").style.color=s.color;el("heroIcon").style.color=s.color;el("mainReason").textContent=s.reason;el("moduleLabel").textContent=s.urgency;
 el("bossSelect").value=state.boss;el("phaseSelect").value=state.phase;el("rotationSelect").value=state.rotation;el("eofSelect").value=state.eof;
 renderStateRows();renderQueue(s);renderCooldowns();renderRules();renderScanner();renderIcons();saveState()
}
function renderStateRows(){const rows=[["Boss",state.boss],["Phase",state.phase],["Rotation",state.rotation],["Adrenaline",state.adren],["Sunshine",state.sunshine?"ON":"OFF"],["FSoA",state.fsoa?"ON":"OFF"],["Tsunami",state.tsunami?"ON":"OFF"],["Danger",state.danger?"ON":"OFF"],["Confidence",(state.confidence||0)+"%"]];el("stateRows").innerHTML=rows.map(r=>`<div class="row"><span>${esc(r[0])}</span><span>${esc(r[1])}</span></div>`).join("")}
function renderQueue(s){el("queue").innerHTML=s.queue.map(x=>`<div class="queue-item">${imgFor(x)}<span>→ ${esc(x)}</span></div>`).join("")}
function renderCooldowns(){el("cooldowns").innerHTML=Object.keys(COOLDOWNS).map(n=>`<div class="card"><b>${imgFor(n)} ${esc(n)}</b><span class="${rem(n)>0?'orange':'green'}">${rem(n)>0?rem(n).toFixed(1)+'s':'READY'}</span></div>`).join("")}
function renderRules(){const rules=(BOSS_RULES[state.boss]||BOSS_RULES["General PvM"]).concat([`Rotation: ${state.rotation}`,`EOF: ${state.eof} — ${EOFS[state.eof]?.rule||""}`]);el("liveRules").innerHTML=rules.map(r=>`<div class="card">${esc(r)}</div>`).join("")}
function renderScanner(){el("scannerStatus").innerHTML=`<div class="card"><b>Alt1</b>${hasAlt1()?"Detected":"Not detected"}</div><div class="card"><b>Confidence</b>${state.confidence||0}%</div>`;el("detectedRows").innerHTML=Object.entries(state.detected||{}).map(([k,v])=>`<div class="row"><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join("")||"<div class='card'>No scan yet.</div>";el("autoScanBtn").textContent=state.autoScan?"Auto Scan ON":"Auto Scan OFF"}
function renderIcons(){const q=(el("iconSearch")?.value||"").toLowerCase();const all=[...ABILITIES,...ITEMS].filter(x=>x[0].toLowerCase().includes(q)||x[2].toLowerCase().includes(q));el("iconCatalog").innerHTML=all.map(x=>`<div class="row"><span><img class="icon" src="${icon(x[0])}"> ${esc(x[0])}</span><span>${esc(x[2])}</span></div>`).join("");el("imagePreview").innerHTML=all.slice(0,12).map(x=>`<div class="card"><img class="bigicon" src="${icon(x[0])}"><b>${esc(x[0])}</b>${esc(x[2])}</div>`).join("")}
function imgFor(t){for(const k of Object.keys(ICONS)){if(String(t).toLowerCase().includes(k.toLowerCase().split(" ")[0]))return `<img class="icon" src="${icon(k)}">`}return""}
function speak(txt){try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(txt.replace("GCONC","G conc")))}catch{}}
