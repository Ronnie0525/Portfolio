import { Search, Heart, ShoppingBag, Home, User, Star, Share2, ChevronLeft, Ruler, CheckCircle, Truck, Minus, Plus, X, CreditCard, Clock } from "lucide-react";
import woolBlazerImg from "@/assets/products/wool-blazer.png";
import linenShirtImg from "@/assets/products/linen-shirt.png";
import silkScarfImg from "@/assets/products/silk-scarf.png";

const productImages: Record<string, string> = {
  "Oversized Blazer": woolBlazerImg,
  "Wool Blazer": woolBlazerImg,
  "Linen Shirt": linenShirtImg,
  "Italian Linen Shirt": linenShirtImg,
  "Silk Scarf": silkScarfImg,
};

const Phone = ({ children, bg = "#FAF9F6" }: { children: React.ReactNode; bg?: string }) => (
  <div className="bg-white rounded-[2.5rem] p-[6px] w-[280px] mx-auto shadow-2xl shadow-black/50">
    <div className="w-full rounded-[2.2rem] overflow-hidden flex flex-col" style={{ background: bg, height: 560 }}>
      <div className="flex items-center justify-between px-5 pt-3 pb-1"><span className="text-[10px] text-black/50 font-medium">9:41</span><div className="w-20 h-5 rounded-full bg-white/80" /><div className="flex gap-1"><div className="w-4 h-2 rounded-sm bg-white/30" /></div></div>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 0 }: { active?: number }) => (
  <div className="flex items-center justify-around px-4 py-3 border-t border-black/5 mt-auto">
    {[Home, Search, Heart, ShoppingBag, User].map((Icon, i) => (
      <div key={i} className="flex flex-col items-center gap-1"><Icon className={`w-5 h-5 ${i === active ? "text-black" : "text-black/20"}`} />{i === active && <div className="w-1.5 h-1.5 rounded-full bg-white" />}</div>
    ))}
  </div>
);

export const ThreadsHome = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><span className="text-base font-bold text-black tracking-[0.2em]" style={{ fontFamily: "serif" }}>THREADS</span><div className="flex items-center gap-3"><Search className="w-5 h-5 text-black/40" /><Heart className="w-5 h-5 text-black/40" /><div className="relative"><ShoppingBag className="w-5 h-5 text-black/40" /><div className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-red-500 flex items-center justify-center text-[7px] text-black font-bold">2</div></div></div></div>
    <div className="rounded-xl px-4 py-3 mb-3" style={{ background: "linear-gradient(135deg, #FCE4EC, #FEF3C7)" }}><div className="text-sm font-bold text-black/80">Spring Collection</div><div className="text-xs text-black/50 mb-1.5">New season, new looks</div><div className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold w-fit">Shop Now →</div></div>
    <div className="text-xs font-bold text-black/70 tracking-wider uppercase mb-2">New Arrivals</div>
    <div className="grid grid-cols-2 gap-2 flex-1">{[{name:"Oversized Blazer",price:"$129"},{name:"Linen Shirt",price:"$89"}].map(p=>(<div key={p.name} className="rounded-xl overflow-hidden border border-black/5"><div className="relative h-28 bg-[#f5f5f0]"><img src={productImages[p.name]} alt={p.name} className="w-full h-full object-cover" /><Heart className="absolute top-2 right-2 w-4 h-4 text-black/30"/></div><div className="p-2.5"><div className="text-[10px] text-black/60">{p.name}</div><div className="text-xs font-bold text-black mt-0.5">{p.price}</div><div className="flex gap-0.5 mt-1">{[1,2,3,4,5].map(s=><Star key={s} className="w-2.5 h-2.5 text-amber-400 fill-amber-400"/>)}</div></div></div>))}</div>
  </div><TabBar active={0}/></Phone>
);

export const ThreadsProduct = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><ChevronLeft className="w-5 h-5 text-black/40"/><div className="flex items-center gap-3"><Share2 className="w-4 h-4 text-black/30"/><Heart className="w-4 h-4 text-black/30"/></div></div>
    <div className="h-36 rounded-xl mb-3 flex items-center justify-center bg-[#f5f5f0] overflow-hidden"><img src={linenShirtImg} alt="Italian Linen Shirt" className="w-full h-full object-cover" /></div>
    <div className="text-sm font-bold text-black">Italian Linen Shirt</div>
    <div className="flex items-center gap-1 my-1">{[1,2,3,4,5].map(s=><Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400"/>)}<span className="text-[10px] text-black/40">(247)</span></div>
    <div className="text-lg font-bold text-black mb-2">$89.00</div>
    <div className="flex gap-2 mb-2">{[{c:"#D2B48C",a:true},{c:"#1E3A5F",a:false},{c:"#F5F5F0",a:false}].map((d,i)=><div key={i} className={`w-6 h-6 rounded-full border-2 ${d.a?"border-black":"border-transparent"}`} style={{background:d.c}}/>)}</div>
    <div className="flex gap-1.5 mb-3">{["S","M","L","XL"].map((s,i)=><div key={s} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold ${i===1?"bg-white text-black":"bg-white/5 text-black/50"}`}>{s}</div>)}</div>
    <div className="flex items-center gap-1 text-[10px] text-black/40 mb-3"><Ruler className="w-3 h-3"/> Size Guide →</div>
    <div className="py-3 rounded-xl bg-white text-black text-center text-xs font-bold mt-auto">Add to Bag</div>
    <div className="text-center text-[10px] text-black/40 mt-1.5">♡ Add to Wishlist</div>
    <div className="flex items-center justify-center gap-1 text-[9px] text-black/30 mt-1"><Truck className="w-3 h-3"/> Free shipping over $100</div>
  </div><TabBar active={3}/></Phone>
);

export const ThreadsSizeGuide = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-4"><ChevronLeft className="w-5 h-5 text-black/40"/><span className="text-sm font-bold text-black">Find Your Fit</span><Ruler className="w-4 h-4 text-black/30 ml-auto"/></div>
    <div className="flex justify-center mb-4"><div className="w-16 h-28 rounded-xl bg-white/5 flex items-center justify-center"><User className="w-10 h-10 text-black/20"/></div></div>
    {["Height (cm)","Weight (kg)","Chest (cm)"].map(f=>(<div key={f} className="mb-3"><div className="text-[10px] text-black/40 mb-1">{f}</div><div className="h-2 rounded-full bg-white/5"><div className="h-full rounded-full bg-white/20" style={{width:"60%"}}/></div></div>))}
    <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-200 mt-2"><div className="flex items-center gap-2 mb-1"><CheckCircle className="w-5 h-5 text-emerald-500"/><span className="text-sm font-bold text-black">Recommended: M</span></div><div className="text-[10px] text-emerald-700">95% match · 12,847 data points</div></div>
    <div className="py-3 rounded-xl bg-emerald-500 text-black text-center text-xs font-bold mt-auto">Apply</div>
  </div><TabBar/></Phone>
);

export const ThreadsCart = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="text-sm font-bold text-black mb-3">Your Bag (3)</div>
    <div className="space-y-2 flex-1">{[{name:"Wool Blazer",size:"M",color:"Navy",price:"$129"},{name:"Linen Shirt",size:"M",color:"White",price:"$89"},{name:"Silk Scarf",size:"OS",color:"Beige",price:"$129"}].map(item=>(<div key={item.name} className="flex items-start gap-3 p-2 rounded-xl bg-white/[0.02] border border-black/5"><div className="w-12 h-14 rounded-lg flex-shrink-0 overflow-hidden bg-[#f5f5f0]"><img src={productImages[item.name]} alt={item.name} className="w-full h-full object-cover" /></div><div className="flex-1 min-w-0"><div className="text-xs font-semibold text-black">{item.name}</div><div className="flex gap-1 mt-0.5"><span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-black/50">{item.size}</span><span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-black/50">{item.color}</span></div><div className="flex items-center gap-2 mt-1.5"><div className="flex items-center gap-1.5 border border-black/10 rounded-lg px-1"><Minus className="w-3 h-3 text-black/30"/><span className="text-[10px] font-bold text-black px-1">1</span><Plus className="w-3 h-3 text-black/30"/></div><span className="text-xs font-bold text-black ml-auto">{item.price}</span></div></div><X className="w-3.5 h-3.5 text-black/20 flex-shrink-0"/></div>))}</div>
    <div className="border-t border-black/5 pt-3 space-y-1.5"><div className="flex justify-between text-xs"><span className="text-black/50">Subtotal</span><span className="font-bold text-black">$347.00</span></div><div className="text-[10px] text-emerald-600 font-medium">✓ Free Shipping</div><div className="flex justify-between text-sm"><span className="font-bold text-black">Total</span><span className="font-bold text-black">$347.00</span></div></div>
    <div className="py-3 rounded-xl bg-white text-black text-center text-xs font-bold mt-3">Checkout — $347</div>
  </div><TabBar active={3}/></Phone>
);

export const ThreadsCheckout = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-center gap-3 mb-4">{[{n:"1",l:"Shipping",done:true},{n:"2",l:"Payment",active:true},{n:"3",l:"Confirm"}].map((s,i)=>(<div key={s.n} className="flex items-center gap-1.5">{i>0&&<div className="w-6 h-px bg-white/10"/>}<div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${s.done?"bg-emerald-500 text-black":s.active?"bg-white text-black":"bg-white/5 text-black/30"}`}>{s.done?"✓":s.n}</div><span className="text-[9px] text-black/50">{s.l}</span></div>))}</div>
    <div className="space-y-3 flex-1">
      <div><div className="text-[10px] text-black/40 mb-1">Card Number</div><div className="flex items-center px-3 py-2.5 rounded-xl border border-black/10"><CreditCard className="w-4 h-4 text-black/20 mr-2"/><span className="text-xs text-black/30">•••• •••• •••• ••••</span></div></div>
      <div className="grid grid-cols-2 gap-2"><div><div className="text-[10px] text-black/40 mb-1">Expiry</div><div className="px-3 py-2.5 rounded-xl border border-black/10 text-xs text-black/30">MM/YY</div></div><div><div className="text-[10px] text-black/40 mb-1">CVV</div><div className="px-3 py-2.5 rounded-xl border border-black/10 text-xs text-black/30">•••</div></div></div>
      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-black/10"><div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white"/></div><span className="text-xs text-black">••4242 Visa</span></div>
      <div className="flex gap-2"><div className="flex-1 py-2.5 rounded-xl bg-white text-black text-center text-[10px] font-bold"> Pay</div><div className="flex-1 py-2.5 rounded-xl bg-white text-black text-center text-[10px] font-bold">G Pay</div></div>
    </div>
    <div className="rounded-xl p-3 bg-white/[0.02] border border-black/5 mt-2"><div className="flex justify-between text-xs"><span className="text-black/50">Total</span><span className="font-bold text-black">$347.00</span></div></div>
  </div><TabBar active={3}/></Phone>
);

export const ThreadsConfirmed = () => (
  <Phone><div className="flex-1 flex flex-col items-center justify-center px-8">
    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4"><CheckCircle className="w-8 h-8 text-emerald-500"/></div>
    <div className="text-lg font-bold text-black mb-1">Order Confirmed!</div>
    <div className="text-xs text-black/40 mb-4">#THR-29481</div>
    <div className="flex items-center gap-2 text-xs text-black/50 mb-6"><Truck className="w-4 h-4"/> Est. Mar 8–10</div>
    <div className="w-full space-y-1.5 mb-6">{["Wool Blazer","Linen Shirt","Silk Scarf"].map(i=><div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02]"><div className="w-6 h-6 rounded overflow-hidden bg-[#f5f5f0]"><img src={productImages[i]} alt={i} className="w-full h-full object-cover" /></div><span className="text-[10px] text-black/60">{i}</span></div>)}</div>
    <div className="w-full py-3 rounded-xl bg-white text-black text-center text-xs font-bold">Track Order</div>
    <div className="text-[10px] text-black/40 mt-2">Continue Shopping</div>
  </div><TabBar/></Phone>
);
