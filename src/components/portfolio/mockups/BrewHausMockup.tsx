import { Coffee, MapPin, Search, ShoppingBag, Heart, Home, User } from "lucide-react";

const BrewHausMockup = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#1C1210" }}>
    <div className="flex items-center justify-between px-3 pt-1.5 pb-1"><span className="text-[7px] font-medium text-white/50">9:41</span><div className="flex gap-1"><div className="w-2.5 h-1.5 rounded-sm bg-white/30" /><div className="w-3 h-1.5 rounded-sm bg-white/50" /></div></div>
    <div className="flex items-center justify-between px-3 py-1">
      <div className="flex items-center gap-1"><Coffee className="w-3 h-3 text-amber-500" /><span className="text-[9px] font-bold text-amber-100" style={{ fontFamily: "serif" }}>BrewHaus</span></div>
      <div className="flex items-center gap-0.5 text-[6px] text-white/40"><MapPin className="w-2 h-2" />Downtown</div>
    </div>
    <div className="px-3 py-1"><div className="text-[8px] text-white/60">Good morning ☀️</div></div>
    <div className="mx-3 rounded-2xl p-2.5 border border-amber-500/10" style={{ background: "rgba(120,69,18,0.2)" }}>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-amber-900/40 flex items-center justify-center"><Coffee className="w-5 h-5 text-amber-400" /></div>
        <div className="flex-1"><div className="text-[8px] font-bold text-amber-100">Caramel Macchiato</div><div className="flex items-center gap-1 mt-1">{["S","M","L"].map((s,i) => <div key={s} className={`w-4 h-4 rounded-full text-[6px] flex items-center justify-center font-bold ${i===1?"bg-amber-500 text-white":"bg-white/5 text-white/30"}`}>{s}</div>)}<span className="text-[9px] font-bold text-amber-300 ml-auto">$5.50</span></div></div>
      </div>
      <div className="mt-2 py-1 rounded-lg text-center text-[7px] font-bold text-white bg-amber-600/80">Order</div>
    </div>
    <div className="flex gap-1.5 px-3 py-2">{["Hot ☕","Iced 🧊","Pastry 🥐"].map((c,i) => <div key={c} className={`px-2 py-0.5 rounded-full text-[6px] font-medium ${i===0?"bg-amber-500/20 text-amber-300":"bg-white/5 text-white/30"}`}>{c}</div>)}</div>
    <div className="flex-1 px-3 space-y-1">
      {[{name:"Flat White",price:"$4.50"},{name:"Espresso",price:"$3.00"}].map(d => (
        <div key={d.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.04]"><Coffee className="w-3 h-3 text-amber-500/60" /><span className="text-[7px] text-white/60 flex-1">{d.name}</span><span className="text-[7px] font-bold text-amber-300">{d.price}</span></div>
      ))}
    </div>
    <div className="flex items-center justify-around px-3 py-1.5 border-t border-white/[0.06]">
      <div className="flex flex-col items-center gap-0.5"><Home className="w-3 h-3 text-amber-500" /><div className="w-1 h-1 rounded-full bg-amber-500" /></div>
      <Search className="w-3 h-3 text-white/20" /><ShoppingBag className="w-3 h-3 text-white/20" /><Heart className="w-3 h-3 text-white/20" /><User className="w-3 h-3 text-white/20" />
    </div>
  </div>
);

export default BrewHausMockup;
