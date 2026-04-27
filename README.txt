const defaultState={module:"magic",adren:"Mid",boss:"General PvM",phase:"General",rotation:"Balanced Magic",eof:"Armadyl Battlestaff",sunshine:false,fsoa:false,tsunami:false,danger:false,compact:false,voice:false,safeMode:true,autoScan:false,used:{},cooldowns:{},detected:{},confidence:0};
let state=loadState();
function loadState(){try{return{...structuredClone(defaultState),...JSON.parse(localStorage.getItem("rs3SuperToolV16")||"{}")}}catch{return structuredClone(defaultState)}}
function saveState(){localStorage.setItem("rs3SuperToolV16",JSON.stringify(state))}
function now(){return Date.now()/1000}
function rem(name){return Math.max(0,(state.cooldowns[name]||0)-now())}
function ready(name){return rem(name)<=0}
function startCd(name){if(COOLDOWNS[name])state.cooldowns[name]=now()+COOLDOWNS[name]}
function hasThresh(){return["Mid","High","Full"].includes(state.adren)}
function hasUlt(){return["High","Full"].includes(state.adren)}
