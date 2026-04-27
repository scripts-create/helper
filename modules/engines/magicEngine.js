function suggest(action,reason,queue,color,urgency="BEST MAGIC ACTION"){return{action,reason,queue,color,urgency}}
function magicDecision(){
 if(state.danger||state.phase==="Defensive")return suggest("STABILIZE","Danger/Defensive phase. Survival overrides DPS.",["Resonance / Devotion","Freedom / Anticipation","Debilitate / Reflect","Eat / reposition","Resume GConc"],"#27f36b","SAFETY");
 if(state.phase==="Mechanic"&&state.safeMode)return suggest("MOVEMENT SAFE DPS","Mechanic phase active. Avoid long channels.",["GConc / Sonic","Dragon Breath","Corruption Blast","Reposition","Burst after mechanic"],"#35a7ff","MECHANIC");
 if(state.phase==="Zamorak P7")return suggest("P7 FULL SEND","Zamorak P7 selected. Execute full burst if stable.",["Sunshine","Tsunami","FSoA","Wild Magic","Asphyxiate","Omnipower / EOF"],"#ff4a4a","BOSS PHASE");
 if(state.fsoa){
  if(!state.tsunami&&ready("Tsunami"))return suggest("TSUNAMI","FSoA active; Tsunami missing.",["FSoA spec","Wild Magic","Asphyxiate","GConc","Omnipower"],"#00e5ff","BURST SETUP");
  if(hasThresh()&&ready("Wild Magic")&&!state.used["Wild Magic"])return suggest("WILD MAGIC","FSoA/Tsunami burst: high-value threshold ready.",["Asphyxiate","GConc","Omnipower","EOF: "+state.eof],"#ff4a4a","BIG DPS");
  if(hasThresh()&&ready("Asphyxiate")&&!state.used["Asphyxiate"]&&state.rotation!=="Sustain / Safe")return suggest("ASPHYXIATE","Continue FSoA burst if safe to channel.",["GConc","Omnipower","EOF: "+state.eof,"Best threshold"],"#b66dff","BIG DPS");
  if(hasUlt()&&ready("Omnipower")&&!state.used["Omnipower"])return suggest("OMNIPOWER","High adrenaline during burst; Omnipower ready.",["GConc","EOF: "+state.eof,"Wild Magic when ready","Asphyxiate when ready"],"#00e5ff","DUMP");
  if(hasThresh()&&ready("EOF"))return suggest("EOF: "+state.eof,EOFS[state.eof].rule,["GConc","Wild Magic when ready","Asphyxiate when ready","Omnipower if high"],"#ff8a35","EOF SPECIAL");
  return suggest("GCONC / SONIC","Rebuild adrenaline and fish for crits during FSoA.",["Dragon Breath","Corruption Blast","EOF if high adren","Threshold when ready"],"#35a7ff","REBUILD");
 }
 if(state.sunshine){
  if(hasThresh()&&ready("Wild Magic")&&!state.used["Wild Magic"])return suggest("WILD MAGIC","Sunshine active; Wild Magic ready.",["Asphyxiate","GConc","Omnipower","EOF: "+state.eof],"#ff4a4a","BIG DPS");
  if(hasThresh()&&ready("Asphyxiate")&&!state.used["Asphyxiate"]&&state.rotation!=="Sustain / Safe")return suggest("ASPHYXIATE","Dump thresholds inside Sunshine if safe.",["GConc","Omnipower","Wild Magic when ready"],"#b66dff","BIG DPS");
  if(hasUlt()&&ready("Omnipower")&&!state.used["Omnipower"])return suggest("OMNIPOWER","High adrenaline inside Sunshine.",["GConc","EOF: "+state.eof,"Wild Magic"],"#00e5ff","DUMP");
  return suggest("GCONC / SONIC","Sunshine active but dumps unavailable. Rebuild.",["Dragon Breath","Corruption Blast","Combust","Threshold when ready"],"#35a7ff","REBUILD");
 }
 if(["High","Full"].includes(state.adren)&&ready("Sunshine"))return suggest("START BURST","High adrenaline. Start Sunshine/FSoA instead of overcapping.",["Sunshine","Tsunami if FSoA plan","FSoA spec","Wild Magic"],"#ffd91a","BURST READY");
 if(state.rotation==="AoE Magic")return suggest("AOE PRIORITY","AoE mode: prioritize AoE basics and target grouping.",["Chain / Greater Chain","Dragon Breath","Corruption Blast","Combust","Sunshine if high adren"],"#b66dff","AOE");
 if(ready("GConc")&&!state.used["GConc"])return suggest("GCONC / SONIC","Best builder available.",["Dragon Breath","Corruption Blast","Combust","Build to Sunshine"],"#35a7ff","BUILD");
 return suggest("DRAGON BREATH","GConc unavailable/marked. Continue strong basics.",["Corruption Blast","Combust","GConc when ready","Avoid weak filler"],"#35a7ff","BUILD");
}
