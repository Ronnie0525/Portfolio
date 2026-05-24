import { Coffee, MapPin, Search, ShoppingBag, Heart, Home, User, ChevronLeft, Globe, Mountain, Droplets, Flame, Clock, Award, Coins, CakeSlice, Navigation } from "lucide-react";

const Phone = ({ children, bg = "#1C1210" }: { children: React.ReactNode; bg?: string }) => (
  <div className="bg-white rounded-[2.5rem] p-[6px] w-[280px] mx-auto shadow-2xl shadow-black/50">
    <div className="w-full rounded-[2.2rem] overflow-hidden flex flex-col" style={{ background: bg, height: 560 }}>
      <div className="flex items-center justify-between px-5 pt-3 pb-1"><span className="text-[10px] text-black/50 font-medium">9:41</span><div className="w-20 h-5 rounded-full bg-white" /><div className="flex gap-1"><div className="w-4 h-2 rounded-sm bg-white/30" /></div></div>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 0 }: { active?: number }) => (
  <div className="flex items-center justify-around px-4 py-3 border-t border-white/[0.06] mt-auto">
    {[Home, Search, ShoppingBag, Heart, User].map((Icon, i) => (
      <div key={i} className="flex flex-col items-center gap-1"><Icon className={`w-5 h-5 ${i === active ? "text-amber-500" : "text-black/20"}`} />{i === active && <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />}</div>
    ))}
  </div>
);

export const BrewHausMenu = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-2"><div className="flex items-center gap-1.5"><Coffee className="w-5 h-5 text-amber-500"/><span className="text-sm font-bold text-amber-100" style={{fontFamily:"serif"}}>BrewHaus</span></div><div className="flex items-center gap-1 text-[10px] text-black/40"><MapPin className="w-3 h-3"/>Downtown</div></div>
    <div className="text-xs text-black/60 mb-3">Good morning ☀️</div>
    <div className="rounded-2xl p-4 border border-amber-500/10 mb-3" style={{background:"rgba(120,69,18,0.2)"}}>
      <div className="flex items-center gap-3"><div className="w-14 h-14 rounded-xl bg-amber-900/40 flex items-center justify-center"><Coffee className="w-7 h-7 text-amber-400"/></div><div className="flex-1"><div className="text-xs font-bold text-amber-100">Caramel Macchiato</div><div className="flex items-center gap-1.5 mt-1">{["S","M","L"].map((s,i)=><div key={s} className={`w-6 h-6 rounded-full text-[9px] flex items-center justify-center font-bold ${i===1?"bg-amber-500 text-black":"bg-white/5 text-black/30"}`}>{s}</div>)}<span className="text-sm font-bold text-amber-300 ml-auto">$5.50</span></div></div></div>
      <div className="mt-3 py-2 rounded-xl text-center text-[10px] font-bold text-black bg-amber-600">Order</div>
    </div>
    <div className="flex gap-2 mb-3">{["Coffee","Iced","Pastry","Beans"].map((t,i)=><span key={t} className={`text-[10px] font-medium pb-1 ${i===0?"text-amber-400 border-b-2 border-amber-400":"text-black/30"}`}>{t}</span>)}</div>
    <div className="space-y-2 flex-1">{[{name:"Flat White",price:"$4.50"},{name:"Espresso",price:"$3.00"}].map(d=>(<div key={d.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04]"><Coffee className="w-4 h-4 text-amber-500/60"/><span className="text-xs text-black/60 flex-1">{d.name}</span><span className="text-xs font-bold text-amber-300">{d.price}</span></div>))}</div>
  </div><TabBar active={0}/></Phone>
);

export const BrewHausBuilder = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-3"><ChevronLeft className="w-5 h-5 text-black/40"/><span className="text-sm font-bold text-black">Build Your Drink</span></div>
    <div className="w-20 h-32 mx-auto rounded-2xl overflow-hidden mb-3 border border-white/10"><div className="h-1/3 bg-amber-900"/><div className="h-1/3 bg-amber-700/80"/><div className="h-1/3 bg-amber-200/60"/></div>
    <div className="space-y-3 flex-1">
      <div><div className="text-[10px] text-black/40 mb-1.5">Size</div><div className="flex gap-2">{["S","M","L"].map((s,i)=><div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${i===1?"ring-2 ring-amber-500 text-amber-300":"bg-white/5 text-black/30"}`}>{s}</div>)}</div></div>
      <div><div className="text-[10px] text-black/40 mb-1.5">Milk</div><div className="flex gap-1.5">{["Oat","Almond","Whole","Skim"].map((m,i)=><div key={m} className={`px-2.5 py-1 rounded-lg text-[9px] font-bold ${i===0?"bg-amber-500/20 text-amber-300":"bg-white/5 text-black/30"}`}>{m}</div>)}</div></div>
      <div><div className="flex justify-between text-[10px]"><span className="text-black/40">Sugar</span><span className="text-amber-300">2</span></div><div className="h-1.5 rounded-full bg-white/[0.06] mt-1"><div className="h-full rounded-full bg-amber-500" style={{width:"40%"}}/></div></div>
      <div className="space-y-1.5">{[{l:"Extra Shot",p:"+$0.50"},{l:"Whipped Cream",p:"+$0.30"}].map(e=>(<div key={e.l} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03]"><span className="text-[10px] text-black/60">{e.l} <span className="text-amber-400/60">{e.p}</span></span><div className="w-8 h-4 rounded-full bg-white/10 flex items-center px-0.5"><div className="w-3 h-3 rounded-full bg-white/30"/></div></div>))}</div>
    </div>
    <div className="text-center text-lg font-bold text-black mb-2" style={{fontFamily:"Space Grotesk"}}>$6.30</div>
    <div className="py-3 rounded-xl bg-amber-600 text-black text-center text-xs font-bold">Add to Order</div>
  </div><TabBar active={2}/></Phone>
);

export const BrewHausBean = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><ChevronLeft className="w-5 h-5 text-black/40"/><span className="text-sm font-bold text-black">Bean Origins</span></div><Globe className="w-4 h-4 text-black/30"/></div>
    <div className="text-lg font-bold text-amber-100 mb-1">Ethiopian Yirgacheffe</div>
    <div className="flex items-center gap-1 text-[10px] text-black/40 mb-3"><MapPin className="w-3 h-3"/> Sidamo</div>
    <div className="grid grid-cols-3 gap-2 mb-3">{[{icon:Mountain,l:"1,700m"},{icon:Droplets,l:"Washed"},{icon:Flame,l:"Medium"}].map(i=>(<div key={i.l} className="flex flex-col items-center gap-1 p-2.5 rounded-xl bg-white/[0.04]"><i.icon className="w-4 h-4 text-amber-400"/><span className="text-[9px] text-black/50">{i.l}</span></div>))}</div>
    <div className="text-[10px] text-black/40 mb-1.5">Flavor Notes</div>
    <div className="flex gap-1.5 mb-4">{["Citrus 🍋","Floral 🌸","Berry 🫐"].map(f=><span key={f} className="px-2.5 py-1 rounded-full text-[9px] bg-amber-500/10 text-amber-300 font-medium">{f}</span>)}</div>
    <div className="text-[10px] text-black/40 mb-1.5">Roast Level</div>
    <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(i=><div key={i} className={`flex-1 h-2 rounded-full ${i<=3?"bg-amber-600":"bg-white/[0.06]"}`}/>)}</div>
    <div className="py-3 rounded-xl bg-amber-600 text-black text-center text-xs font-bold mt-auto">Try This Bean →</div>
  </div><TabBar/></Phone>
);

export const BrewHausTracking = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-4"><span className="text-sm font-bold text-black">Your Order</span><Clock className="w-4 h-4 text-black/30"/></div>
    <div className="space-y-4 mb-4">{[{l:"Received",done:true},{l:"Preparing ☕",active:true,sub:"Sarah is crafting"},{l:"Ready"}].map((s,i)=>(<div key={s.l} className="flex gap-3"><div className="flex flex-col items-center"><div className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold ${s.done?"bg-emerald-500 text-black":s.active?"bg-amber-500 text-black animate-pulse":"bg-white/10 text-black/30"}`}>{s.done?"✓":(i+1)}</div>{i<2&&<div className="w-px h-8 bg-white/10 mt-1"/>}</div><div><div className="text-xs font-semibold text-black">{s.l}</div>{s.sub&&<div className="flex items-center gap-1.5 mt-1"><div className="w-5 h-5 rounded-full bg-amber-500/20"/><span className="text-[10px] text-black/40">{s.sub}</span></div>}</div></div>))}</div>
    <div className="rounded-xl p-3 bg-white/[0.03] border border-white/[0.06] mb-3"><div className="text-[10px] text-black/40">1x Caramel Macchiato, Oat, Medium</div></div>
    <div className="flex-1 flex flex-col items-center justify-center"><Coffee className="w-12 h-12 text-amber-500/30 mb-2"/><div className="text-2xl font-bold text-amber-300" style={{fontFamily:"Space Grotesk"}}>~4 min</div></div>
    <div className="flex items-center gap-1 text-[10px] text-black/30"><MapPin className="w-3 h-3"/> BrewHaus Downtown</div>
  </div><TabBar/></Phone>
);

export const BrewHausRewards = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><span className="text-sm font-bold text-black">BrewHaus Rewards</span><Award className="w-5 h-5 text-amber-400"/></div>
    <div className="flex items-center gap-2 mb-4"><span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400">Gold ⭐</span></div>
    <div className="flex justify-center mb-3"><div className="relative w-28 h-28"><svg className="w-full h-full -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/><circle cx="50" cy="50" r="40" fill="none" stroke="#D97706" strokeWidth="8" strokeDasharray="251" strokeDashoffset="75" strokeLinecap="round"/></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-lg font-bold text-black">7/10</span></div></div></div>
    <div className="flex items-center justify-center gap-1 text-xs text-black/40 mb-4"><Coins className="w-3 h-3"/> 340 pts</div>
    <div className="space-y-2 flex-1">{[{icon:CakeSlice,name:"Free Pastry",pts:"200pts"},{icon:Coffee,name:"Free Drink",pts:"500pts",progress:68}].map(r=>(<div key={r.name} className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"><div className="flex items-center gap-2 mb-1.5"><r.icon className="w-4 h-4 text-amber-400"/><span className="text-xs font-semibold text-black">{r.name}</span><span className="text-[9px] text-amber-400 ml-auto">{r.pts}</span></div>{r.progress&&<div className="h-1.5 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-amber-500" style={{width:`${r.progress}%`}}/></div>}<div className="mt-2 py-1.5 rounded-lg text-center text-[9px] font-bold text-black/60 border border-white/10">Redeem</div></div>))}</div>
    <div className="text-center text-[10px] text-black/30 mt-2">History →</div>
  </div><TabBar/></Phone>
);

export const BrewHausStores = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><span className="text-sm font-bold text-black">Find BrewHaus</span><MapPin className="w-4 h-4 text-amber-400"/></div>
    <div className="h-32 rounded-xl mb-3 relative overflow-hidden" style={{background:"linear-gradient(135deg,#0D3B2E,#1C1210)"}}>{[{x:30,y:20},{x:60,y:50},{x:80,y:35}].map((p,i)=><MapPin key={i} className="w-4 h-4 text-amber-500 absolute" style={{left:`${p.x}%`,top:`${p.y}%`}}/>)}</div>
    <div className="space-y-2 flex-1">{[{name:"BrewHaus Downtown",addr:"123 Main St",dist:"0.4 mi",hrs:"Open til 8PM"},{name:"BrewHaus Marina",addr:"456 Beach Rd",dist:"1.2 mi",hrs:"Open til 10PM"}].map(s=>(<div key={s.name} className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"><div className="text-xs font-bold text-black mb-0.5">{s.name}</div><div className="text-[9px] text-black/30 mb-1.5">{s.addr}</div><div className="flex items-center gap-3 mb-2"><div className="flex items-center gap-1 text-[9px] text-black/40"><Navigation className="w-3 h-3"/>{s.dist}</div><div className="flex items-center gap-1 text-[9px] text-black/40"><Clock className="w-3 h-3"/>{s.hrs}</div></div><div className="py-1.5 rounded-lg text-center text-[9px] font-bold text-black bg-amber-600/80">Order Here</div></div>))}</div>
  </div><TabBar/></Phone>
);
