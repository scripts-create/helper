const WIKI_FILEPATH="https://runescape.wiki/images/Special:FilePath/";
const ABILITIES=[
 ["GConc","Greater_Concentrated_Blast.png","Magic basic"],
 ["Sonic Wave","Sonic_Wave.png","Magic basic"],
 ["Dragon Breath","Dragon_Breath.png","Magic basic"],
 ["Corruption Blast","Corruption_Blast.png","Magic basic"],
 ["Combust","Combust.png","Magic basic"],
 ["Impact","Impact.png","Magic basic"],
 ["Wrack","Wrack.png","Magic basic"],
 ["Chain","Chain.png","Magic basic"],
 ["Wild Magic","Wild_Magic.png","Magic threshold"],
 ["Asphyxiate","Asphyxiate.png","Magic threshold"],
 ["Deep Impact","Deep_Impact.png","Magic threshold"],
 ["Smoke Tendrils","Smoke_Tendrils.png","Magic threshold"],
 ["Detonate","Detonate.png","Magic threshold"],
 ["Omnipower","Omnipower.png","Magic ultimate"],
 ["Sunshine","Sunshine.png","Magic ultimate"],
 ["Tsunami","Tsunami.png","Magic ultimate"],
 ["Metamorphosis","Metamorphosis.png","Magic ultimate"],
 ["Magma Tempest","Magma_Tempest.png","Magic ability"],
 ["Smoke Cloud","Smoke_Cloud.png","Magic spell"],
 ["Animate Dead","Animate_Dead.png","Magic spell"],
 ["Disruption Shield","Disruption_Shield.png","Lunar spell"],
 ["Vulnerability Bomb","Vulnerability_bomb.png","Consumable"]
];
const ITEMS=[
 ["FSoA","Fractured_Staff_of_Armadyl.png","Weapon"],
 ["Armadyl Battlestaff","Armadyl_battlestaff.png","EOF special"],
 ["Guthix Staff","Guthix_staff.png","EOF special"],
 ["Staff of Light","Staff_of_light.png","EOF special"],
 ["Iban's Staff","Iban%27s_staff.png","EOF special"],
 ["Essence of Finality","Essence_of_Finality_amulet.png","Amulet"]
];
const ICONS=Object.fromEntries([...ABILITIES,...ITEMS].map(x=>[x[0],x[1]]));
const COOLDOWNS={"GConc":5.4,"Sonic Wave":5.4,"Dragon Breath":5.4,"Corruption Blast":15,"Combust":15,"Wild Magic":20.4,"Asphyxiate":20.4,"Omnipower":30,"Sunshine":60,"Tsunami":30,"FSoA":60,"EOF":30};
const EOFS={"Armadyl Battlestaff":{icon:"Armadyl Battlestaff",rule:"Primary FSoA crit-fishing/dump special when thresholds are down and adrenaline is high."},"Guthix Staff":{icon:"Guthix Staff",rule:"Debuff/spec utility option."},"Staff of Light":{icon:"Staff of Light",rule:"Defensive/sustain option."},"Iban's Staff":{icon:"Iban's Staff",rule:"Niche EOF option; usually lower priority than ABS."}};
function icon(name){return WIKI_FILEPATH+(ICONS[name]||"Magic.png")}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function el(id){return document.getElementById(id)}
