import { Search, ShoppingCart, Home, Tag, Heart, User, Star, ChevronLeft, ShieldCheck, Smartphone, Package, Calendar, Truck, X } from "lucide-react";

const Phone = ({ children, bg = "#FFFFFF" }: { children: React.ReactNode; bg?: string }) => (
  <div className="bg-[#1a1a1a] rounded-[2.5rem] p-[6px] w-[280px] mx-auto shadow-2xl shadow-black/50">
    <div className="w-full rounded-[2.2rem] overflow-hidden flex flex-col" style={{ background: bg, height: 560 }}>
      <div className="flex items-center justify-between px-5 pt-3 pb-1" style={{ background: "#131921" }}><span className="text-[10px] text-white/50 font-medium">9:41</span><div className="w-20 h-5 rounded-full bg-black" /><div className="flex gap-1"><div className="w-4 h-2 rounded-sm bg-white/30" /></div></div>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 0 }: { active?: number }) => (
  <div className="flex items-center justify-around px-4 py-3 border-t border-gray-100 mt-auto">
    {[Home, Search, Tag, Heart, User].map((Icon, i) => (
      <div key={i} className="flex flex-col items-center gap-1"><Icon className={`w-5 h-5 ${i === active ? "text-orange-500" : "text-gray-300"}`} />{i === active && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}</div>
    ))}
  </div>
);

export const CartlyHome = () => (
  <Phone><div className="flex items-center gap-2 px-4 py-2" style={{background:"#131921"}}><span className="text-sm font-bold text-white">Cartly</span><div className="flex-1 flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5"><Search className="w-3.5 h-3.5 text-white/40"/><span className="text-[10px] text-white/30">Search...</span></div><div className="relative"><ShoppingCart className="w-5 h-5 text-white"/><div className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[7px] text-white font-bold">4</div></div></div>
  <div className="flex-1 flex flex-col px-4 py-2 bg-white">
    <div className="flex gap-1.5 mb-2">{["Electronics","Fashion","Home","Sports"].map((c,i)=><div key={c} className={`px-2.5 py-1 rounded-full text-[9px] font-bold ${i===0?"bg-orange-500 text-white":"bg-gray-100 text-gray-500"}`}>{c}</div>)}</div>
    <div className="rounded-xl px-4 py-2.5 mb-3 bg-gradient-to-r from-orange-500 to-amber-500"><div className="text-xs font-bold text-white">Deals 🔥</div><div className="text-[9px] text-white/80">Up to 60% off</div></div>
    <div className="grid grid-cols-2 gap-2 flex-1">{[{name:"Wireless Buds",price:"$24.99",old:"$39.99",rating:"4.2",badge:true},{name:"Smart Watch",price:"$49.99",old:"$79.99",rating:"4.5",badge:false}].map(p=>(<div key={p.name} className="rounded-xl border border-gray-100 overflow-hidden"><div className="relative h-20" style={{background:p.badge?"linear-gradient(135deg,#DBEAFE,#93C5FD)":"linear-gradient(135deg,#D1FAE5,#6EE7B7)"}}>{p.badge&&<div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[7px] font-bold bg-orange-500 text-white">Best Seller</div>}</div><div className="p-2"><div className="text-[10px] font-medium text-gray-700">{p.name}</div><div className="flex items-center gap-0.5 my-0.5"><Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400"/><span className="text-[9px] text-gray-500">{p.rating}</span></div><div className="flex items-baseline gap-1"><span className="text-xs font-bold text-gray-900">{p.price}</span><span className="text-[9px] text-gray-400 line-through">{p.old}</span></div><div className="mt-1.5 py-1 rounded-lg text-center text-[9px] font-bold bg-orange-500 text-white">Add</div></div></div>))}</div>
  </div><TabBar active={0}/></Phone>
);

export const CartlySearch = () => (
  <Phone><div className="flex items-center gap-2 px-4 py-2" style={{background:"#131921"}}><div className="flex-1 flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5"><Search className="w-3.5 h-3.5 text-white/40"/><span className="text-[10px] text-white">wireless headphones</span><X className="w-3 h-3 text-white/30 ml-auto"/></div></div>
  <div className="flex-1 flex flex-col px-4 py-2 bg-white">
    <div className="flex items-center justify-between mb-2"><span className="text-[10px] text-gray-500">2,481 results</span><span className="text-[10px] text-gray-400">Sort ▾</span></div>
    <div className="flex gap-1.5 mb-3">{["Price","Brand","Rating"].map(f=><div key={f} className="px-2 py-0.5 rounded-full text-[8px] font-medium border border-gray-200 text-gray-500">{f}</div>)}</div>
    <div className="space-y-2 flex-1">{[{name:"ProSound X7",price:"$79.99",badge:"Cartly's Choice"},{name:"BeatWave Pro",price:"$54.99"},{name:"AudioMax Elite",price:"$89.99"}].map(p=>(<div key={p.name} className="flex items-center gap-2.5 p-2 rounded-xl border border-gray-100"><div className="w-14 h-14 rounded-lg flex-shrink-0" style={{background:"linear-gradient(135deg,#DBEAFE,#93C5FD)"}}/><div className="flex-1 min-w-0"><div className="text-[10px] font-semibold text-gray-800">{p.name}</div><div className="flex items-center gap-0.5"><Star className="w-2 h-2 text-amber-400 fill-amber-400"/><span className="text-[8px] text-gray-400">4.8</span></div><div className="text-xs font-bold text-gray-900 mt-0.5">{p.price}</div>{p.badge&&<span className="text-[7px] px-1 py-0.5 rounded bg-teal-100 text-teal-700 font-bold">{p.badge}</span>}</div><div className="px-2 py-1 rounded-lg bg-orange-500 text-white text-[8px] font-bold">Add</div></div>))}</div>
  </div><TabBar active={1}/></Phone>
);

export const CartlyProduct = () => (
  <Phone><div className="flex-1 flex flex-col bg-white">
    <div className="h-36 flex items-center justify-center" style={{background:"linear-gradient(135deg,#DBEAFE,#93C5FD)"}}><div className="flex gap-1">{[0,1,2,3].map(d=><div key={d} className={`w-1.5 h-1.5 rounded-full ${d===0?"bg-gray-800":"bg-gray-400"}`}/>)}</div></div>
    <div className="flex-1 px-4 py-3"><div className="text-sm font-bold text-gray-900">ProSound X7</div><div className="flex items-center gap-1 my-1">{[1,2,3,4,5].map(s=><Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400"/>)}<span className="text-[10px] text-gray-400">4.8 (3,421)</span></div><div className="flex items-baseline gap-2 mb-2"><span className="text-lg font-bold text-gray-900">$79.99</span><span className="text-xs text-gray-400 line-through">$129.99</span><span className="text-[10px] text-red-500 font-bold">-38%</span></div><div className="flex gap-2 mb-2">{[{c:"#1a1a1a",a:true},{c:"#F5F5F0"},{c:"#1E3A5F"}].map((d,i)=><div key={i} className={`w-6 h-6 rounded-full ${d.a?"ring-2 ring-orange-500 ring-offset-1":""}`} style={{background:d.c}}/>)}</div><div className="flex gap-1.5 mb-3">{["40hr","ANC","BT5.3"].map(s=><span key={s} className="px-2 py-1 rounded-lg bg-gray-100 text-[9px] font-bold text-gray-600">{s}</span>)}</div><div className="flex gap-2 mb-2"><div className="flex-1 py-2.5 rounded-xl bg-orange-500 text-white text-center text-xs font-bold">Add to Cart</div><div className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-center text-xs font-bold">Buy Now</div></div><div className="flex items-center gap-1.5 text-[10px] text-gray-500"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500"/> TechAudio · 98% positive</div></div>
  </div><TabBar/></Phone>
);

export const CartlyCompare = () => (
  <Phone><div className="flex-1 flex flex-col px-4 py-2 bg-white">
    <div className="flex items-center gap-2 mb-3"><Smartphone className="w-4 h-4 text-orange-500"/><span className="text-sm font-bold text-gray-900">Compare</span></div>
    <div className="grid grid-cols-2 gap-2 mb-3"><div className="text-center"><div className="w-12 h-12 mx-auto rounded-lg mb-1" style={{background:"linear-gradient(135deg,#DBEAFE,#93C5FD)"}}/><div className="text-[9px] font-bold text-gray-800">ProSound X7</div></div><div className="text-center"><div className="w-12 h-12 mx-auto rounded-lg mb-1" style={{background:"linear-gradient(135deg,#E5E7EB,#9CA3AF)"}}/><div className="text-[9px] font-bold text-gray-800">BeatWave Pro</div></div></div>
    <div className="space-y-1 flex-1">{[{l:"Price",a:"$79",b:"$89",w:"left"},{l:"Rating",a:"4.8",b:"4.6",w:"left"},{l:"Battery",a:"40h",b:"30h",w:"left"},{l:"Weight",a:"250g",b:"280g",w:"right"},{l:"Warranty",a:"2yr",b:"1yr",w:"left"}].map(r=>(<div key={r.l} className="grid grid-cols-3 items-center py-2 border-b border-gray-50"><span className={`text-[10px] font-bold ${r.w==="left"?"text-emerald-600":"text-gray-700"}`}>{r.a}</span><span className="text-[9px] text-gray-400 text-center">{r.l}</span><span className={`text-[10px] font-bold text-right ${r.w==="right"?"text-emerald-600":"text-gray-700"}`}>{r.b}</span></div>))}</div>
    <div className="text-center text-xs font-bold text-gray-700 my-2">Score: 4/5 vs 1/5</div>
    <div className="py-2.5 rounded-xl bg-orange-500 text-white text-center text-xs font-bold">Choose Winner</div>
  </div><TabBar/></Phone>
);

export const CartlyCart = () => (
  <Phone><div className="flex-1 flex flex-col px-4 py-2 bg-white">
    <div className="text-sm font-bold text-gray-900 mb-3">Cart (4)</div>
    <div className="space-y-3 flex-1">{[{seller:"TechAudio",items:[{name:"ProSound X7",price:"$79.99"},{name:"Charging Dock",price:"$19.99"}]},{seller:"HomeGoods",items:[{name:"Desk Lamp",price:"$44.99"},{name:"Organizer",price:"$42.99"}]}].map(g=>(<div key={g.seller}><div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">From {g.seller} ({g.items.length})</div>{g.items.map(item=>(<div key={item.name} className="flex items-center gap-2 py-2 border-b border-gray-50"><div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0"/><div className="flex-1"><div className="text-[10px] font-semibold text-gray-800">{item.name}</div><div className="text-[9px] text-gray-400">Qty: 1</div></div><span className="text-xs font-bold text-gray-900">{item.price}</span></div>))}</div>))}</div>
    <div className="text-[10px] text-emerald-600 font-medium mb-1">Saving $52 🎉</div>
    <div className="py-2.5 rounded-xl bg-orange-500 text-white text-center text-xs font-bold">Checkout — $187.96</div>
  </div><TabBar active={3}/></Phone>
);

export const CartlyTracking = () => (
  <Phone><div className="flex-1 flex flex-col px-4 py-2 bg-white">
    <div className="text-sm font-bold text-gray-900 mb-1">#CTL-58291</div>
    <div className="flex items-center gap-3 my-4">{[{l:"Ordered",done:true},{l:"Packed",done:true},{l:"Shipped",active:true},{l:"Delivered"}].map((s,i)=>(<div key={s.l} className="flex-1 flex flex-col items-center gap-1"><div className={`w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold ${s.done?"bg-emerald-500 text-white":s.active?"bg-orange-500 text-white animate-pulse":"bg-gray-100 text-gray-400"}`}>{s.done?"✓":s.active?<Package className="w-3 h-3"/>:(i+1)}</div><span className="text-[8px] text-gray-500">{s.l}</span></div>))}</div>
    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4"><Calendar className="w-4 h-4"/> Est. Mar 6</div>
    <div className="flex-1 rounded-xl bg-gray-50 flex items-center justify-center relative"><div className="w-full h-px border-t border-dashed border-gray-300 absolute"/><Truck className="w-6 h-6 text-orange-500 relative z-10 bg-gray-50 px-1"/></div>
    <div className="py-2.5 rounded-xl bg-teal-500 text-white text-center text-xs font-bold mt-3">Track Package</div>
  </div><TabBar/></Phone>
);
