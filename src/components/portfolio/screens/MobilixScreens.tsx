import { Smartphone, Search, ShoppingCart, Home, GitCompare, Heart, User, Sparkles, Star, ChevronLeft, Share2, Cpu, HardDrive, Camera, MemoryStick, ThumbsUp, Recycle, CheckCircle } from "lucide-react";

const Phone = ({ children, bg = "#0A1628" }: { children: React.ReactNode; bg?: string }) => (
  <div className="bg-white rounded-[2.5rem] p-[6px] w-[280px] mx-auto shadow-2xl shadow-black/50">
    <div className="w-full rounded-[2.2rem] overflow-hidden flex flex-col" style={{ background: bg, height: 560 }}>
      <div className="flex items-center justify-between px-5 pt-3 pb-1"><span className="text-[10px] text-black/80 font-medium">9:41</span><div className="w-20 h-5 rounded-full bg-white" /><div className="flex gap-1"><div className="w-4 h-2 rounded-sm bg-white/30" /></div></div>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 0 }: { active?: number }) => (
  <div className="flex items-center justify-around px-4 py-3 border-t border-black/15 mt-auto">
    {[Home, Search, GitCompare, Heart, User].map((Icon, i) => (
      <div key={i} className="flex flex-col items-center gap-1"><Icon className={`w-5 h-5 ${i === active ? "text-cyan-400" : "text-black/65"}`} />{i === active && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}</div>
    ))}
  </div>
);

export const MobilixHome = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-1.5"><span className="text-sm font-bold text-black">Mobilix</span><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"/></div><div className="flex gap-2"><Search className="w-5 h-5 text-black/75"/><ShoppingCart className="w-5 h-5 text-black/75"/></div></div>
    <div className="rounded-xl p-4 mb-3" style={{background:"linear-gradient(135deg,#164E63,#0F172A)"}}><div className="text-sm font-bold text-black mb-0.5">Find Your Phone</div><div className="text-[10px] text-black/80 mb-2">AI-powered recommendations</div><div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-400 text-[10px] font-bold text-black w-fit">Take Quiz → <Sparkles className="w-3 h-3"/></div></div>
    <div className="text-xs font-bold text-black/60 mb-2">Trending 🔥</div>
    <div className="space-y-2 flex-1">{[{name:"Galaxy Ultra Pro",rating:"4.7",price:"$999",badge:"New"},{name:"iPhone 16 Pro",rating:"4.8",price:"$1,099"},{name:"Pixel 9 Pro",rating:"4.5",price:"$899"}].map(p=>(<div key={p.name} className="flex items-center gap-3 p-3 rounded-xl bg-black/5 border border-black/15"><Smartphone className="w-6 h-6 text-cyan-400/40"/><div className="flex-1"><div className="flex items-center gap-1.5"><span className="text-xs font-semibold text-black">{p.name}</span>{p.badge&&<span className="text-[7px] px-1.5 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-bold">{p.badge}</span>}</div><div className="flex items-center gap-0.5 mt-0.5"><Star className="w-3 h-3 text-amber-400 fill-amber-400"/><span className="text-[10px] text-black/75">{p.rating}</span></div></div><span className="text-xs font-bold text-black">{p.price}</span></div>))}</div>
  </div><TabBar active={0}/></Phone>
);

export const MobilixDetail = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-2"><ChevronLeft className="w-5 h-5 text-black/75"/><div className="flex gap-2"><Share2 className="w-4 h-4 text-black/70"/><Heart className="w-4 h-4 text-black/70"/></div></div>
    <div className="h-32 rounded-xl mb-3 flex items-center justify-center" style={{background:"linear-gradient(135deg,#164E63,#1E293B)"}}><Smartphone className="w-16 h-16 text-black/65"/></div>
    <div className="text-sm font-bold text-black">Galaxy Ultra Pro</div><div className="text-[10px] text-black/75 mb-1">Samsung</div>
    <div className="flex items-center gap-1 mb-1">{[1,2,3,4,5].map(s=><Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400"/>)}<span className="text-[10px] text-black/70">(8,219)</span></div>
    <div className="flex items-baseline gap-2 mb-2"><span className="text-xl font-bold text-black" style={{fontFamily:"Space Grotesk"}}>$999</span><span className="text-xs text-black/70 line-through">$1,199</span><span className="text-[10px] text-cyan-400 font-bold">-17%</span></div>
    <div className="flex gap-2 mb-2">{[{c:"#f0f0f0",a:true},{c:"#F5F0E0"},{c:"#2E7D32"}].map((d,i)=><div key={i} className={`w-6 h-6 rounded-full ${d.a?"ring-2 ring-cyan-400 ring-offset-1 ring-offset-[#0A1628]":""}`} style={{background:d.c}}/>)}</div>
    <div className="grid grid-cols-2 gap-1.5 mb-3">{[{i:Cpu,l:"Snapdragon 8G3"},{i:HardDrive,l:"256GB"},{i:MemoryStick,l:"12GB RAM"},{i:Camera,l:"108MP"}].map(s=>(<div key={s.l} className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-black/5"><s.i className="w-3 h-3 text-cyan-400/60"/><span className="text-[9px] text-black/60">{s.l}</span></div>))}</div>
    <div className="flex gap-2 mt-auto"><div className="flex-1 py-2.5 rounded-xl bg-cyan-400 text-black text-center text-xs font-bold">Add to Cart</div><div className="flex-1 py-2.5 rounded-xl border border-black/15 text-black text-center text-xs font-bold">Compare</div></div>
  </div><TabBar/></Phone>
);

export const MobilixCompare = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-3"><GitCompare className="w-5 h-5 text-cyan-400"/><span className="text-sm font-bold text-black">Compare</span></div>
    <div className="grid grid-cols-2 gap-2 mb-3"><div className="text-center"><div className="w-12 h-14 mx-auto rounded-lg mb-1 flex items-center justify-center" style={{background:"linear-gradient(135deg,#164E63,#1E293B)"}}><Smartphone className="w-5 h-5 text-black/70"/></div><div className="text-[9px] font-bold text-black">Galaxy Ultra</div></div><div className="text-center"><div className="w-12 h-14 mx-auto rounded-lg mb-1 flex items-center justify-center bg-black/5"><Smartphone className="w-5 h-5 text-black/70"/></div><div className="text-[9px] font-bold text-black">iPhone 16 Pro</div></div></div>
    <div className="space-y-1 flex-1">{[{l:"Display",a:'6.8" AMOLED',b:'6.3" OLED',w:"left"},{l:"Camera",a:"108MP",b:"48MP",w:"left"},{l:"Battery",a:"5000mAh",b:"3274mAh",w:"left"},{l:"Price",a:"$999",b:"$1,099",w:"left"},{l:"Weight",a:"233g",b:"199g",w:"right"},{l:"Storage",a:"256GB",b:"256GB",w:"tie"}].map(r=>(<div key={r.l} className="grid grid-cols-3 items-center py-2 border-b border-black/10"><span className={`text-[10px] font-bold ${r.w==="left"?"text-emerald-400":"text-black/60"}`}>{r.a}</span><span className="text-[9px] text-black/70 text-center">{r.l}</span><span className={`text-[10px] font-bold text-right ${r.w==="right"?"text-emerald-400":"text-black/60"}`}>{r.b}</span></div>))}</div>
    <div className="text-center text-xs font-bold text-black/60 my-2">5/6 vs 1/6</div>
    <div className="py-2.5 rounded-xl bg-cyan-400 text-black text-center text-xs font-bold">Choose Galaxy</div>
  </div><TabBar active={2}/></Phone>
);

export const MobilixQuiz = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-3"><ChevronLeft className="w-5 h-5 text-black/75"/><span className="text-sm font-bold text-black">Find Your Phone</span><Sparkles className="w-4 h-4 text-cyan-400 ml-auto"/></div>
    <div className="h-1.5 rounded-full bg-black/[0.06] mb-1"><div className="h-full rounded-full bg-cyan-400" style={{width:"60%"}}/></div>
    <div className="text-[10px] text-black/70 mb-3">Q3/5</div>
    <div className="text-sm font-bold text-black mb-4">What do you use most?</div>
    <div className="space-y-2 flex-1">{[{e:"📸",l:"Photography"},{e:"🎮",l:"Gaming"},{e:"💼",l:"Work",active:true},{e:"📱",l:"Social"}].map(o=>(<div key={o.l} className={`flex items-center gap-3 p-3.5 rounded-xl border ${o.active?"border-cyan-400 bg-cyan-400/10":"border-black/15 bg-black/5"}`}><span className="text-lg">{o.e}</span><span className="text-xs font-medium text-black">{o.l}</span>{o.active&&<CheckCircle className="w-4 h-4 text-cyan-400 ml-auto"/>}</div>))}</div>
    <div className="flex gap-2 mt-3"><div className="px-4 py-2.5 rounded-xl border border-black/15 text-black/80 text-xs font-bold">← Back</div><div className="flex-1 py-2.5 rounded-xl bg-cyan-400 text-black text-center text-xs font-bold">Next →</div></div>
  </div><TabBar/></Phone>
);

export const MobilixReviews = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-3"><ChevronLeft className="w-5 h-5 text-black/75"/><span className="text-sm font-bold text-black">Reviews</span></div>
    <div className="flex items-center gap-3 mb-3"><span className="text-3xl font-bold text-black" style={{fontFamily:"Space Grotesk"}}>4.7</span><div className="flex gap-0.5">{[1,2,3,4,5].map(s=><Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400"/>)}</div></div>
    <div className="space-y-1 mb-3">{[{s:5,p:74},{s:4,p:18},{s:3,p:5},{s:2,p:2},{s:1,p:1}].map(r=>(<div key={r.s} className="flex items-center gap-2"><span className="text-[9px] text-black/70 w-3">{r.s}★</span><div className="flex-1 h-1.5 rounded-full bg-black/[0.06]"><div className="h-full rounded-full bg-cyan-400" style={{width:`${r.p}%`}}/></div><span className="text-[9px] text-black/70 w-6 text-right">{r.p}%</span></div>))}</div>
    <div className="flex gap-1.5 mb-3"><div className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-cyan-400/20 text-cyan-300">Verified</div><div className="px-2.5 py-1 rounded-full text-[9px] font-medium border border-black/15 text-black/70">All</div></div>
    <div className="space-y-2 flex-1">{[{name:"Sarah M.",text:"Amazing camera. Best phone ever.",helpful:42},{name:"James K.",text:"Battery lasts all day. Recommend.",helpful:28}].map(r=>(<div key={r.name} className="p-3 rounded-xl bg-black/5 border border-black/15"><div className="flex items-center gap-2 mb-1"><div className="w-6 h-6 rounded-full bg-black/10"/><div><div className="text-[10px] font-semibold text-black">{r.name}</div><div className="text-[8px] text-cyan-400">Verified ✓</div></div><div className="flex gap-0.5 ml-auto">{[1,2,3,4,5].map(s=><Star key={s} className="w-2 h-2 text-amber-400 fill-amber-400"/>)}</div></div><div className="text-[10px] text-black/80 mb-1.5">{r.text}</div><div className="flex items-center gap-1 text-[9px] text-black/70"><ThumbsUp className="w-3 h-3"/> Helpful ({r.helpful})</div></div>))}</div>
  </div><TabBar/></Phone>
);

export const MobilixTradeIn = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-3"><ChevronLeft className="w-5 h-5 text-black/75"/><span className="text-sm font-bold text-black">Trade In</span><Recycle className="w-4 h-4 text-cyan-400 ml-auto"/></div>
    <div className="text-xs text-black/75 mb-3">Trade your old phone</div>
    <div className="px-3 py-2.5 rounded-xl bg-black/5 border border-black/15 mb-3"><div className="text-[10px] text-black/70 mb-0.5">Your device</div><div className="text-xs font-bold text-black">iPhone 14 Pro ▾</div></div>
    <div className="space-y-1.5 mb-4">{[{l:"Excellent ✨",v:"$380",active:true},{l:"Good 👍",v:"$290"},{l:"Fair",v:"$180"}].map(c=>(<div key={c.l} className={`flex items-center justify-between px-3 py-2.5 rounded-xl ${c.active?"border-2 border-emerald-500 bg-emerald-500/10":"border border-black/15 bg-black/5"}`}><span className="text-xs text-black">{c.l}</span><span className={`text-xs font-bold ${c.active?"text-emerald-400":"text-black/80"}`}>{c.v}</span></div>))}</div>
    <div className="rounded-xl p-4 bg-emerald-500/10 border border-emerald-500/20 text-center mb-3"><div className="text-[10px] text-emerald-400 mb-0.5">Trade-in value</div><div className="text-2xl font-bold text-emerald-400" style={{fontFamily:"Space Grotesk"}}>$380</div></div>
    <div className="text-center text-xs text-black/80 mb-3"><span className="line-through">$999</span> − $380 = <span className="font-bold text-black">$619</span> 🎉</div>
    <div className="py-3 rounded-xl bg-cyan-400 text-black text-center text-xs font-bold mt-auto">Apply Trade-In</div>
  </div><TabBar/></Phone>
);
