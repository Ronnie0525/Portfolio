import { Search, Heart, ShoppingBag, Home, User, Star } from "lucide-react";

const ThreadsMockup = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#FAF9F6" }}>
    <div className="flex items-center justify-between px-3 pt-1.5 pb-1"><span className="text-[7px] font-medium text-black/80">9:41</span><div className="flex gap-1"><div className="w-2.5 h-1.5 rounded-sm bg-white/20" /><div className="w-3 h-1.5 rounded-sm bg-white/40" /></div></div>
    <div className="flex items-center justify-between px-3 py-1.5">
      <span className="text-[10px] font-bold text-black tracking-[0.15em]" style={{ fontFamily: "serif" }}>THREADS</span>
      <div className="flex items-center gap-2"><Search className="w-3 h-3 text-black/75" /><Heart className="w-3 h-3 text-black/75" /><div className="relative"><ShoppingBag className="w-3 h-3 text-black/75" /><div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 flex items-center justify-center text-[5px] text-black font-bold">2</div></div></div>
    </div>
    <div className="mx-3 rounded-lg px-2.5 py-2 mb-1.5" style={{ background: "linear-gradient(135deg, #FCE4EC, #FEF3C7)" }}>
      <div className="text-[9px] font-bold text-black/80">Spring '25</div><div className="text-[7px] text-black/80">New season, new looks</div>
      <div className="mt-1 px-2 py-0.5 rounded-full bg-white text-black text-[6px] font-bold w-fit">Shop Now</div>
    </div>
    <div className="px-3 py-1"><div className="text-[8px] font-bold text-black/70 tracking-wider uppercase mb-1.5">New Arrivals</div>
      <div className="grid grid-cols-2 gap-1.5">
        {[{ name: "Wool Blazer", price: "$129" }, { name: "Linen Shirt", price: "$89" }].map(p => (
          <div key={p.name} className="rounded-lg overflow-hidden border border-black/5">
            <div className="relative h-16" style={{ background: "linear-gradient(135deg, #D6D3D1, #A8A29E)" }}><Heart className="absolute top-1 right-1 w-2.5 h-2.5 text-black/70" /></div>
            <div className="p-1.5"><div className="text-[7px] text-black/60">{p.name}</div><div className="text-[8px] font-bold text-black">{p.price}</div><div className="flex gap-0.5 mt-0.5">{[1,2,3,4,5].map(s => <Star key={s} className="w-1.5 h-1.5 text-amber-400 fill-amber-400" />)}</div></div>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-auto flex items-center justify-around px-3 py-1.5 border-t border-black/5">
      <div className="flex flex-col items-center gap-0.5"><Home className="w-3 h-3 text-black" /><div className="w-1 h-1 rounded-full bg-white" /></div>
      <Search className="w-3 h-3 text-black/65" /><Heart className="w-3 h-3 text-black/65" /><ShoppingBag className="w-3 h-3 text-black/65" /><User className="w-3 h-3 text-black/65" />
    </div>
  </div>
);

export default ThreadsMockup;
