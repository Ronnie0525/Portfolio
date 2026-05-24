import { Smartphone, Search, ShoppingCart, Home, GitCompare, Heart, User, Sparkles, Star } from "lucide-react";

const MobilixMockup = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#0A1628" }}>
    <div className="flex items-center justify-between px-3 pt-1.5 pb-1"><span className="text-[7px] font-medium text-black/50">9:41</span><div className="flex gap-1"><div className="w-2.5 h-1.5 rounded-sm bg-white/30" /><div className="w-3 h-1.5 rounded-sm bg-white/50" /></div></div>
    <div className="flex items-center justify-between px-3 py-1.5">
      <div className="flex items-center gap-1"><span className="text-[9px] font-bold text-black">Mobilix</span><div className="w-1 h-1 rounded-full bg-cyan-400" /></div>
      <div className="flex items-center gap-2"><Search className="w-3 h-3 text-black/40" /><ShoppingCart className="w-3 h-3 text-black/40" /></div>
    </div>
    <div className="mx-3 rounded-xl p-2.5" style={{ background: "linear-gradient(135deg, #164E63, #0F172A)" }}>
      <div className="text-[9px] font-bold text-black">Find Your Phone</div><div className="text-[6px] text-black/50 mb-1.5">Personalized recommendations</div>
      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-400 text-[6px] font-bold text-black w-fit">Take Quiz → <Sparkles className="w-2 h-2" /></div>
    </div>
    <div className="px-3 py-1.5"><div className="text-[8px] font-bold text-black/60">Trending 🔥</div></div>
    <div className="flex-1 px-3 space-y-1">
      {[{name:"Galaxy Ultra Pro",rating:"4.7",price:"$999",badge:"New"},{name:"iPhone 16 Pro",rating:"4.8",price:"$1,099",badge:null},{name:"Pixel 9 Pro",rating:"4.5",price:"$899",badge:null}].map(p => (
        <div key={p.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
          <Smartphone className="w-4 h-4 text-cyan-400/40" />
          <div className="flex-1 min-w-0"><div className="flex items-center gap-1"><span className="text-[7px] font-semibold text-black">{p.name}</span>{p.badge && <span className="text-[5px] px-1 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-bold">{p.badge}</span>}</div><div className="flex items-center gap-0.5"><Star className="w-2 h-2 text-amber-400 fill-amber-400" /><span className="text-[6px] text-black/40">{p.rating}</span></div></div>
          <div className="text-[8px] font-bold text-black">{p.price}</div>
          <div className="text-[6px] text-cyan-400 font-medium">Details →</div>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-around px-3 py-1.5 border-t border-white/[0.06]">
      <div className="flex flex-col items-center gap-0.5"><Home className="w-3 h-3 text-cyan-400" /><div className="w-1 h-1 rounded-full bg-cyan-400" /></div>
      <Search className="w-3 h-3 text-black/20" /><GitCompare className="w-3 h-3 text-black/20" /><Heart className="w-3 h-3 text-black/20" /><User className="w-3 h-3 text-black/20" />
    </div>
  </div>
);

export default MobilixMockup;
