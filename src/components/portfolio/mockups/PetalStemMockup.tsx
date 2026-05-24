import { Flower2, Heart, ShoppingBag, Home, Search, User } from "lucide-react";

const PetalStemMockup = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#FFF5F5" }}>
    <div className="flex items-center justify-between px-3 pt-1.5 pb-1"><span className="text-[7px] font-medium text-black/50">9:41</span><div className="flex gap-1"><div className="w-2.5 h-1.5 rounded-sm bg-white/20" /><div className="w-3 h-1.5 rounded-sm bg-white/40" /></div></div>
    <div className="flex items-center justify-between px-3 py-1">
      <div className="flex items-center gap-1"><Flower2 className="w-3 h-3 text-rose-500" /><span className="text-[9px] font-semibold text-rose-900 italic">Petal & Stem</span></div>
      <div className="flex items-center gap-2"><Heart className="w-3 h-3 text-rose-300" /><ShoppingBag className="w-3 h-3 text-rose-300" /></div>
    </div>
    <div className="px-3 py-1.5"><div className="text-[9px] font-bold text-rose-900">What's the occasion?</div></div>
    <div className="px-3 grid grid-cols-2 gap-1.5">
      {[{emoji:"🎂",label:"Birthday",bg:"#FCE4EC"},{emoji:"💕",label:"Love",bg:"#FFF0F0"},{emoji:"🙏",label:"Thanks",bg:"#FEF3C7"},{emoji:"🕊️",label:"Sympathy",bg:"#DBEAFE"}].map(o => (
        <div key={o.label} className="rounded-xl p-2 flex flex-col items-center gap-0.5" style={{ background: o.bg }}><span className="text-sm">{o.emoji}</span><span className="text-[7px] font-medium text-gray-700">{o.label}</span></div>
      ))}
    </div>
    <div className="mx-3 mt-2 rounded-xl p-2.5 border border-rose-100" style={{ background: "linear-gradient(135deg, #FCE4EC, #FFF0F0)" }}>
      <div className="flex items-center gap-2"><Flower2 className="w-6 h-6 text-rose-400" /><div><div className="text-[8px] font-bold text-rose-900">Garden Romance</div><div className="flex items-center gap-1 mt-0.5"><span className="text-[8px] font-bold text-rose-700">$65</span><span className="text-[6px] text-rose-500 px-1 py-0.5 rounded bg-rose-100">Same-Day ⚡</span></div></div></div>
    </div>
    <div className="mt-auto flex items-center justify-around px-3 py-1.5 border-t border-rose-100">
      <div className="flex flex-col items-center gap-0.5"><Home className="w-3 h-3 text-rose-500" /><div className="w-1 h-1 rounded-full bg-rose-500" /></div>
      <Search className="w-3 h-3 text-rose-200" /><Heart className="w-3 h-3 text-rose-200" /><ShoppingBag className="w-3 h-3 text-rose-200" /><User className="w-3 h-3 text-rose-200" />
    </div>
  </div>
);

export default PetalStemMockup;
