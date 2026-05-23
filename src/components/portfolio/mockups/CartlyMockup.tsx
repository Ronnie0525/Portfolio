import { Search, ShoppingCart, Home, Tag, Heart, User, Star } from "lucide-react";

const CartlyMockup = () => (
  <div className="absolute inset-0 flex flex-col bg-white">
    <div className="flex items-center justify-between px-3 pt-1.5 pb-1" style={{ background: "#131921" }}><span className="text-[7px] font-medium text-white/50">9:41</span><div className="flex gap-1"><div className="w-2.5 h-1.5 rounded-sm bg-white/30" /><div className="w-3 h-1.5 rounded-sm bg-white/50" /></div></div>
    <div className="flex items-center gap-1.5 px-3 py-1.5" style={{ background: "#131921" }}>
      <span className="text-[9px] font-bold text-white">Cartly</span>
      <div className="flex-1 flex items-center gap-1 bg-white/10 rounded px-1.5 py-1"><Search className="w-2.5 h-2.5 text-white/40" /><span className="text-[6px] text-white/30">Search...</span></div>
      <div className="relative"><ShoppingCart className="w-3 h-3 text-white" /><div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 flex items-center justify-center text-[5px] text-white font-bold">4</div></div>
    </div>
    <div className="flex gap-1 px-3 py-1.5">{["Electronics", "Fashion", "Home"].map((c, i) => <div key={c} className={`px-2 py-0.5 rounded-full text-[6px] font-bold ${i === 0 ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-500"}`}>{c}</div>)}</div>
    <div className="mx-3 rounded-lg px-2.5 py-1.5 mb-1.5 bg-gradient-to-r from-orange-500 to-amber-500"><div className="text-[8px] font-bold text-white">Deals 🔥</div><div className="text-[6px] text-white/80">Up to 60% off</div></div>
    <div className="flex-1 px-3 grid grid-cols-2 gap-1.5">
      {[{ name: "Wireless Buds", price: "$24.99", old: "$39.99", rating: "4.2", badge: true }, { name: "Smart Watch", price: "$49.99", old: "$79.99", rating: "4.5", badge: false }].map(p => (
        <div key={p.name} className="rounded-lg border border-gray-100 overflow-hidden">
          <div className="relative h-14" style={{ background: p.badge ? "linear-gradient(135deg, #DBEAFE, #93C5FD)" : "linear-gradient(135deg, #D1FAE5, #6EE7B7)" }}>{p.badge && <div className="absolute top-1 left-1 px-1 py-0.5 rounded text-[5px] font-bold bg-orange-500 text-white">Best Seller</div>}</div>
          <div className="p-1.5"><div className="text-[7px] font-medium text-gray-700">{p.name}</div><div className="flex items-center gap-0.5 my-0.5"><Star className="w-2 h-2 text-amber-400 fill-amber-400" /><span className="text-[6px] text-gray-500">{p.rating}</span></div><div className="flex items-baseline gap-1"><span className="text-[8px] font-bold text-gray-900">{p.price}</span><span className="text-[6px] text-gray-400 line-through">{p.old}</span></div><div className="mt-1 py-0.5 rounded text-center text-[6px] font-bold bg-orange-500 text-white">Add</div></div>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-around px-3 py-1.5 border-t border-gray-100">
      <div className="flex flex-col items-center gap-0.5"><Home className="w-3 h-3 text-orange-500" /><div className="w-1 h-1 rounded-full bg-orange-500" /></div>
      <Search className="w-3 h-3 text-gray-300" /><Tag className="w-3 h-3 text-gray-300" /><Heart className="w-3 h-3 text-gray-300" /><User className="w-3 h-3 text-gray-300" />
    </div>
  </div>
);

export default CartlyMockup;
