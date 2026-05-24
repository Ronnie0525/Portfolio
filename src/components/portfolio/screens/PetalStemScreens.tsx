import { Flower2, Heart, ShoppingBag, Home, Search, User, ChevronLeft, Sliders, PenTool, Sun, CloudSun, Moon, MapPin, Truck, Camera, Clock, Phone as PhoneIcon } from "lucide-react";

const Phone = ({ children, bg = "#FFF5F5" }: { children: React.ReactNode; bg?: string }) => (
  <div className="bg-[#1a1a1a] rounded-[2.5rem] p-[6px] w-[280px] mx-auto shadow-2xl shadow-black/50">
    <div className="w-full rounded-[2.2rem] overflow-hidden flex flex-col" style={{ background: bg, height: 560 }}>
      <div className="flex items-center justify-between px-5 pt-3 pb-1"><span className="text-[10px] text-black/50 font-medium">9:41</span><div className="w-20 h-5 rounded-full bg-black/80" /><div className="flex gap-1"><div className="w-4 h-2 rounded-sm bg-black/30" /></div></div>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 0 }: { active?: number }) => (
  <div className="flex items-center justify-around px-4 py-3 border-t border-rose-100 mt-auto">
    {[Home, Search, Heart, ShoppingBag, User].map((Icon, i) => (
      <div key={i} className="flex flex-col items-center gap-1"><Icon className={`w-5 h-5 ${i === active ? "text-rose-500" : "text-rose-200"}`} />{i === active && <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />}</div>
    ))}
  </div>
);

export const PetalOccasions = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-1.5"><Flower2 className="w-5 h-5 text-rose-500"/><span className="text-sm font-semibold text-rose-900 italic">Petal & Stem</span></div><div className="flex gap-2"><Heart className="w-4 h-4 text-rose-300"/><ShoppingBag className="w-4 h-4 text-rose-300"/></div></div>
    <div className="text-base font-bold text-rose-900 mb-3">What's the occasion?</div>
    <div className="grid grid-cols-2 gap-2 mb-3">{[{e:"🎂",l:"Birthday",bg:"#FCE4EC"},{e:"💕",l:"Romance",bg:"#FFF0F0"},{e:"🙏",l:"Thanks",bg:"#FEF3C7"},{e:"🕊️",l:"Sympathy",bg:"#DBEAFE"}].map(o=>(<div key={o.l} className="rounded-xl p-4 flex flex-col items-center gap-1.5" style={{background:o.bg}}><span className="text-2xl">{o.e}</span><span className="text-[10px] font-medium text-gray-700">{o.l}</span></div>))}</div>
    <div className="rounded-xl p-3 border border-rose-100" style={{background:"linear-gradient(135deg,#FCE4EC,#FFF0F0)"}}><div className="flex items-center gap-3"><Flower2 className="w-8 h-8 text-rose-400"/><div><div className="text-xs font-bold text-rose-900">Garden Romance</div><div className="flex items-center gap-1.5 mt-0.5"><span className="text-xs font-bold text-rose-700">$65</span><span className="text-[8px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-500 font-bold">Same-Day ⚡</span></div></div></div></div>
  </div><TabBar active={0}/></Phone>
);

export const PetalGallery = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><ChevronLeft className="w-5 h-5 text-rose-300"/><span className="text-sm font-bold text-rose-900">Birthday Arrangements</span></div><Sliders className="w-4 h-4 text-rose-300"/></div>
    <div className="flex gap-1.5 mb-3"><div className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-rose-500 text-white">$50-100</div><div className="px-2.5 py-1 rounded-full text-[9px] font-medium border border-rose-200 text-rose-400">Premium</div></div>
    <div className="space-y-2 flex-1">{[{name:"Spring Bloom",stems:"12 stems",price:"$65"},{name:"Rose Garden",stems:"18 stems",price:"$85"},{name:"Sunset Mix",stems:"24 stems",price:"$95"}].map(a=>(<div key={a.name} className="flex gap-3 p-2.5 rounded-xl border border-rose-100"><div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"linear-gradient(135deg,#FBCFE8,#FDA4AF)"}}><Flower2 className="w-8 h-8 text-rose-400"/></div><div className="flex-1"><div className="text-xs font-bold text-rose-900">{a.name}</div><div className="flex items-center gap-1 text-[9px] text-rose-400 mt-0.5"><Flower2 className="w-3 h-3"/>{a.stems}</div><div className="text-xs font-bold text-rose-700 mt-1">{a.price}</div><div className="mt-1.5 py-1 rounded-lg text-center text-[8px] font-bold bg-rose-500 text-white">Quick Add</div></div></div>))}</div>
  </div><TabBar active={1}/></Phone>
);

export const PetalDetail = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="h-28 rounded-xl mb-3 flex items-center justify-center" style={{background:"linear-gradient(135deg,#FBCFE8,#FDA4AF)"}}><Flower2 className="w-16 h-16 text-rose-600/60"/></div>
    <div className="text-sm font-bold text-rose-900">Sunset Romance</div><div className="text-lg font-bold text-rose-800 my-1">$85.00</div>
    <div className="flex gap-0.5 mb-2">{[1,2,3,4,5].map(s=><span key={s} className="text-amber-400 text-xs">★</span>)}<span className="text-[10px] text-rose-400">(189)</span></div>
    <div className="text-[10px] text-rose-700/60 mb-2">6 Pink Roses · 4 White Peonies · 3 Eucalyptus</div>
    <div className="flex gap-2 mb-2"><div className="flex-1 py-2 rounded-lg text-center text-[10px] font-bold bg-rose-500 text-white">Standard $85</div><div className="flex-1 py-2 rounded-lg text-center text-[10px] font-bold border border-rose-200 text-rose-500">Deluxe $120</div></div>
    <div className="flex items-center gap-1 text-[10px] text-rose-400 mb-2"><PenTool className="w-3 h-3"/> Add Message</div>
    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-rose-50 border border-rose-100 mb-2"><span className="text-[10px] text-rose-600">Vase +$15</span><div className="w-8 h-4 rounded-full bg-rose-200 flex items-center px-0.5"><div className="w-3 h-3 rounded-full bg-white"/></div></div>
    <div className="py-3 rounded-xl bg-rose-500 text-white text-center text-xs font-bold mt-auto">Add to Cart — $85</div>
  </div><TabBar active={2}/></Phone>
);

export const PetalMessage = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="flex items-center gap-2 mb-3"><ChevronLeft className="w-5 h-5 text-rose-300"/><span className="text-sm font-bold text-rose-900">Personal Touch</span><PenTool className="w-4 h-4 text-rose-300 ml-auto"/></div>
    <div className="flex-1 rounded-xl border border-rose-200 p-3 mb-2"><div className="text-xs text-rose-300 italic">Dear Sarah, wishing you...</div></div>
    <div className="flex justify-between items-center mb-3"><span className="text-[10px] text-rose-400">42/200</span></div>
    <div className="flex gap-1.5 mb-3">{["Classic","Script","Handwritten"].map((f,i)=><div key={f} className={`px-2.5 py-1 rounded-lg text-[9px] font-bold ${i===0?"bg-rose-500 text-white":"bg-rose-50 text-rose-400"}`}>{f}</div>)}</div>
    <div className="rounded-xl p-4 bg-rose-50 border border-rose-100 transform rotate-1 mb-3"><div className="text-xs text-rose-800 italic" style={{fontFamily:"serif"}}>Dear Sarah, wishing you...</div></div>
    <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 mb-3">✓ Include Card — Free</div>
    <div className="py-3 rounded-xl bg-rose-500 text-white text-center text-xs font-bold mt-auto">Save</div>
  </div><TabBar/></Phone>
);

export const PetalDelivery = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="text-sm font-bold text-rose-900 mb-3">Choose Delivery</div>
    <div className="grid grid-cols-7 gap-1 mb-3">{["M","T","W","T","F","S","S"].map((d,i)=><div key={`${d}${i}`} className={`w-full aspect-square rounded-lg flex items-center justify-center text-[9px] font-bold ${i===3?"bg-rose-500 text-white":"bg-rose-50 text-rose-400"}`}>{i+3}</div>)}</div>
    <div className="space-y-1.5 mb-3">{[{l:"Morning 9-12",icon:Sun},{l:"Afternoon 12-4",icon:CloudSun,active:true},{l:"Evening 4-8",icon:Moon}].map(t=>(<div key={t.l} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl ${t.active?"bg-rose-500 text-white":"bg-rose-50 text-rose-600"}`}><t.icon className="w-4 h-4"/><span className="text-[10px] font-medium">{t.l}</span></div>))}</div>
    <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-rose-200 mb-2"><MapPin className="w-4 h-4 text-rose-300"/><span className="text-[10px] text-rose-400">Add delivery address</span></div>
    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-rose-50 mb-2"><span className="text-[10px] text-rose-600">Contactless</span><div className="w-8 h-4 rounded-full bg-rose-500 flex items-center justify-end px-0.5"><div className="w-3 h-3 rounded-full bg-white"/></div></div>
    <div className="text-[10px] text-emerald-600 font-medium mb-2">Free 🎉</div>
    <div className="py-3 rounded-xl bg-rose-500 text-white text-center text-xs font-bold mt-auto">Confirm</div>
  </div><TabBar/></Phone>
);

export const PetalTracking = () => (
  <Phone><div className="flex-1 flex flex-col px-5 py-2">
    <div className="text-sm font-bold text-rose-900 mb-4">On The Way! 💐</div>
    <div className="flex items-center gap-3 mb-4">{[{l:"Arranged",done:true},{l:"Quality",done:true},{l:"Delivering",active:true},{l:"Delivered"}].map((s,i)=>(<div key={s.l} className="flex-1 flex flex-col items-center gap-1"><div className={`w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold ${s.done?"bg-emerald-500 text-white":s.active?"bg-rose-500 text-white animate-pulse":"bg-rose-100 text-rose-300"}`}>{s.done?"✓":s.active?<Truck className="w-3 h-3"/>:(i+1)}</div><span className="text-[7px] text-rose-400">{s.l}</span></div>))}</div>
    <div className="flex items-center gap-2 text-xs text-rose-600 mb-3"><Clock className="w-4 h-4"/> Est. 2:30 PM</div>
    <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-rose-50 border border-rose-100 mb-3"><div className="w-8 h-8 rounded-full bg-rose-200"/><div><div className="text-xs font-bold text-rose-900">Marco</div><div className="text-[9px] text-rose-400">Your driver</div></div><PhoneIcon className="w-4 h-4 text-rose-400 ml-auto"/></div>
    <div className="flex-1 rounded-xl overflow-hidden relative mb-3" style={{background:"linear-gradient(135deg,#D1FAE5,#A7F3D0)"}}><div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px border-t border-dashed border-emerald-500/30"/><Truck className="w-5 h-5 text-rose-500 relative z-10 bg-emerald-100 rounded px-0.5"/></div></div>
    <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-100"><Camera className="w-5 h-5 text-rose-400"/><div><div className="text-[10px] font-bold text-rose-900">Photo on delivery</div><div className="text-[8px] text-rose-400">Confirmation will be sent</div></div></div>
  </div><TabBar/></Phone>
);
