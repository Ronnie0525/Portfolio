import { Bell, Home, BarChart2, ArrowLeftRight, Wallet, User } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, LineChart, Line } from "recharts";

const chartData = [
  { v: 20 }, { v: 35 }, { v: 28 }, { v: 45 }, { v: 38 }, { v: 52 }, { v: 48 }, { v: 60 }, { v: 55 }, { v: 70 }
];
const btcSpark = [{ v: 30 }, { v: 25 }, { v: 35 }, { v: 28 }, { v: 40 }, { v: 45 }];
const ethSpark = [{ v: 40 }, { v: 35 }, { v: 38 }, { v: 42 }, { v: 30 }, { v: 28 }];
const solSpark = [{ v: 20 }, { v: 30 }, { v: 25 }, { v: 40 }, { v: 35 }, { v: 50 }];

const CryptoVaultMockup = () => (
  <div className="absolute inset-0 flex flex-col" style={{ background: "#0D1117" }}>
    <div className="flex items-center justify-between px-3 pt-1.5 pb-1">
      <span className="text-[7px] font-medium text-white/50">9:41</span>
      <div className="flex gap-1"><div className="w-2.5 h-1.5 rounded-sm bg-white/30" /><div className="w-3 h-1.5 rounded-sm bg-white/50" /></div>
    </div>
    <div className="flex items-center justify-between px-3 py-1.5">
      <span className="text-[9px] font-bold text-white">CryptoVault</span>
      <div className="flex items-center gap-2">
        <div className="relative"><Bell className="w-3 h-3 text-white/40" /><div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-red-500" /></div>
        <div className="w-5 h-5 rounded-full bg-violet-500/30 flex items-center justify-center text-[6px] font-bold text-violet-300">A</div>
      </div>
    </div>
    <div className="mx-3 rounded-xl p-2.5 border border-white/10" style={{ background: "rgba(124,92,252,0.15)" }}>
      <div className="text-[7px] text-white/40">Total Balance</div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-lg font-bold text-white" style={{ fontFamily: "Space Grotesk" }}>$24,580</span>
        <span className="text-[7px] font-semibold text-emerald-400">+5.3%</span>
      </div>
      <div className="h-10 -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs><linearGradient id="cvGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7C5CFC" stopOpacity={0.4} /><stop offset="100%" stopColor="#7C5CFC" stopOpacity={0} /></linearGradient></defs>
            <Area type="monotoneX" dataKey="v" stroke="#7C5CFC" strokeWidth={1.5} fill="url(#cvGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="flex-1 px-3 py-1.5 space-y-1">
      {[
        { sym: "₿", name: "Bitcoin", price: "$67,432", pct: "+2.4%", color: "#F7931A", data: btcSpark, up: true },
        { sym: "Ξ", name: "Ethereum", price: "$3,421", pct: "-0.8%", color: "#627EEA", data: ethSpark, up: false },
        { sym: "S", name: "Solana", price: "$178", pct: "+5.1%", color: "#9945FF", data: solSpark, up: true },
      ].map(c => (
        <div key={c.name} className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white" style={{ background: `${c.color}30` }}>{c.sym}</div>
          <div className="flex-1"><div className="text-[8px] font-semibold text-white">{c.name}</div></div>
          <div className="w-10 h-5"><ResponsiveContainer width="100%" height="100%"><LineChart data={c.data}><Line type="monotoneX" dataKey="v" stroke={c.up ? "#10B981" : "#EF4444"} strokeWidth={1} dot={false} /></LineChart></ResponsiveContainer></div>
          <div className="text-right"><div className="text-[7px] font-bold text-white">{c.price}</div><div className={`text-[6px] font-medium ${c.up ? "text-emerald-400" : "text-red-400"}`}>{c.pct}</div></div>
        </div>
      ))}
    </div>
    <div className="px-3 pb-1 flex gap-2">
      <div className="flex-1 py-1.5 rounded-lg text-center text-[8px] font-bold text-white bg-emerald-500/80">Buy</div>
      <div className="flex-1 py-1.5 rounded-lg text-center text-[8px] font-bold text-white bg-red-500/80">Sell</div>
    </div>
    <div className="flex items-center justify-around px-3 py-1.5 border-t border-white/[0.06]">
      <div className="flex flex-col items-center gap-0.5"><Home className="w-3 h-3 text-violet-400" /><div className="w-1 h-1 rounded-full bg-violet-400" /></div>
      <BarChart2 className="w-3 h-3 text-white/20" /><ArrowLeftRight className="w-3 h-3 text-white/20" /><Wallet className="w-3 h-3 text-white/20" /><User className="w-3 h-3 text-white/20" />
    </div>
  </div>
);

export default CryptoVaultMockup;
