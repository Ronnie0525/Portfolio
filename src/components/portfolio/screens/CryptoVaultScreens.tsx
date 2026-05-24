import { Bell, Home, BarChart2, ArrowLeftRight, Wallet, User, TrendingUp, ChevronLeft, Star as StarIcon, QrCode, ScanLine, Info, Clock, ArrowUpRight, Sparkles, Lock, Shield, Fingerprint, Eye, Key, ChevronRight, CheckCircle, Zap } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, LineChart, Line } from "recharts";

const chartData = [{ v: 20 },{ v: 35 },{ v: 28 },{ v: 45 },{ v: 38 },{ v: 52 },{ v: 48 },{ v: 60 },{ v: 55 },{ v: 70 }];
const btcSpark = [{ v: 30 },{ v: 25 },{ v: 35 },{ v: 28 },{ v: 40 },{ v: 45 }];
const ethSpark = [{ v: 40 },{ v: 35 },{ v: 38 },{ v: 42 },{ v: 30 },{ v: 28 }];
const solSpark = [{ v: 20 },{ v: 30 },{ v: 25 },{ v: 40 },{ v: 35 },{ v: 50 }];
const btcDetail = [{ v: 60 },{ v: 55 },{ v: 58 },{ v: 50 },{ v: 45 },{ v: 52 },{ v: 48 },{ v: 55 },{ v: 60 },{ v: 65 },{ v: 58 },{ v: 70 },{ v: 75 }];

const Phone = ({ children, bg = "#0D1117" }: { children: React.ReactNode; bg?: string }) => (
  <div className="bg-[#1a1a1a] rounded-[2.5rem] p-[6px] w-[280px] mx-auto shadow-2xl shadow-black/50">
    <div className="w-full rounded-[2.2rem] overflow-hidden flex flex-col" style={{ background: bg, height: 560 }}>
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-[10px] text-white/50 font-medium">9:41</span>
        <div className="w-20 h-5 rounded-full bg-black" />
        <div className="flex gap-1"><div className="w-3.5 h-2 rounded-sm bg-white/30" /><div className="w-4 h-2 rounded-sm bg-white/50" /></div>
      </div>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 0 }: { active?: number }) => (
  <div className="flex items-center justify-around px-4 py-3 border-t border-white/[0.06] mt-auto">
    {[Home, BarChart2, ArrowLeftRight, Wallet, User].map((Icon, i) => (
      <div key={i} className="flex flex-col items-center gap-1">
        <Icon className={`w-5 h-5 ${i === active ? "text-violet-400" : "text-white/20"}`} />
        {i === active && <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />}
      </div>
    ))}
  </div>
);

export const CryptoDashboard = () => (
  <Phone>
    <div className="flex-1 flex flex-col px-5 py-2">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-bold text-white">Good morning, Ronnie</span>
        <div className="flex items-center gap-3">
          <div className="relative"><Bell className="w-5 h-5 text-white/40" /><div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500" /></div>
          <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center text-xs font-bold text-violet-300">R</div>
        </div>
      </div>
      <div className="rounded-2xl p-4 border border-white/10 mb-3" style={{ background: "rgba(124,92,252,0.15)" }}>
        <div className="text-xs text-white/40 mb-0.5">Total Balance</div>
        <div className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk" }}>$24,580.42</div>
        <div className="flex items-center gap-1 mt-0.5"><span className="text-xs font-semibold text-emerald-400">+$1,243 (5.3%)</span><TrendingUp className="w-3 h-3 text-emerald-400" /></div>
        <div className="h-16 mt-2 -mx-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs><linearGradient id="cvdg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7C5CFC" stopOpacity={0.4} /><stop offset="100%" stopColor="#7C5CFC" stopOpacity={0} /></linearGradient></defs>
              <Area type="monotoneX" dataKey="v" stroke="#7C5CFC" strokeWidth={2} fill="url(#cvdg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Your Assets</div>
      <div className="space-y-2 flex-1">
        {[
          { sym: "₿", name: "Bitcoin", ticker: "BTC", price: "$67,432", pct: "+2.4%", color: "#F7931A", data: btcSpark, up: true },
          { sym: "Ξ", name: "Ethereum", ticker: "ETH", price: "$3,421", pct: "-0.8%", color: "#627EEA", data: ethSpark, up: false },
          { sym: "S", name: "Solana", ticker: "SOL", price: "$178", pct: "+5.1%", color: "#9945FF", data: solSpark, up: true },
        ].map(c => (
          <div key={c.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: `${c.color}30` }}>{c.sym}</div>
            <div className="flex-1"><div className="text-xs font-semibold text-white">{c.name}</div><div className="text-[10px] text-white/30">{c.ticker}</div></div>
            <div className="w-14 h-6"><ResponsiveContainer width="100%" height="100%"><LineChart data={c.data}><Line type="monotoneX" dataKey="v" stroke={c.up ? "#10B981" : "#EF4444"} strokeWidth={1.5} dot={false} /></LineChart></ResponsiveContainer></div>
            <div className="text-right"><div className="text-xs font-bold text-white">{c.price}</div><div className={`text-[10px] font-medium ${c.up ? "text-emerald-400" : "text-red-400"}`}>{c.pct}</div></div>
          </div>
        ))}
      </div>
    </div>
    <TabBar active={0} />
  </Phone>
);

export const CryptoTokenDetail = () => (
  <Phone>
    <div className="flex-1 flex flex-col px-5 py-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2"><ChevronLeft className="w-5 h-5 text-white/40" /><span className="text-sm font-bold text-white">Bitcoin</span></div>
        <StarIcon className="w-5 h-5 text-amber-400 fill-amber-400" />
      </div>
      <div className="text-3xl font-bold text-white" style={{ fontFamily: "Space Grotesk" }}>$67,432.00</div>
      <div className="text-xs text-emerald-400 font-semibold mb-3">+$1,587 (2.4%)</div>
      <div className="flex gap-1.5 mb-3">{["1H","24H","1W","1M","1Y","ALL"].map((t,i) => <div key={t} className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${i===1?"bg-violet-500 text-white":"bg-white/5 text-white/40"}`}>{t}</div>)}</div>
      <div className="h-32 mb-3 rounded-xl overflow-hidden" style={{ background: "rgba(247,147,26,0.05)" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={btcDetail}>
            <defs><linearGradient id="btcdg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F7931A" stopOpacity={0.3} /><stop offset="100%" stopColor="#F7931A" stopOpacity={0} /></linearGradient></defs>
            <Area type="monotoneX" dataKey="v" stroke="#F7931A" strokeWidth={2} fill="url(#btcdg)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[{l:"24h High",v:"$68,901"},{l:"24h Low",v:"$65,234"},{l:"Volume",v:"$28.4B"},{l:"Market Cap",v:"$1.32T"}].map(s => (
          <div key={s.l} className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"><div className="text-[9px] text-white/30 mb-0.5">{s.l}</div><div className="text-xs font-bold text-white">{s.v}</div></div>
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 py-3 rounded-xl text-center text-xs font-bold text-white bg-emerald-500">Buy BTC</div>
        <div className="flex-1 py-3 rounded-xl text-center text-xs font-bold text-white bg-red-500">Sell BTC</div>
      </div>
    </div>
    <TabBar active={1} />
  </Phone>
);

export const CryptoSend = () => (
  <Phone>
    <div className="flex-1 flex flex-col px-5 py-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2"><ChevronLeft className="w-5 h-5 text-white/40" /><span className="text-sm font-bold text-white">Send</span></div>
        <QrCode className="w-5 h-5 text-white/30" />
      </div>
      <div className="space-y-3 flex-1">
        <div><div className="text-[10px] text-white/40 mb-1.5">To</div><div className="flex items-center px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]"><span className="text-xs text-white/50 font-mono flex-1">0x7a2F...8b3E</span><ScanLine className="w-4 h-4 text-violet-400" /></div></div>
        <div><div className="text-[10px] text-white/40 mb-1.5">Amount</div><div className="px-4 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-center"><div className="flex items-baseline justify-center gap-2"><span className="text-3xl font-bold text-white" style={{ fontFamily: "Space Grotesk" }}>0.05</span><span className="text-sm text-white/50">BTC</span></div><div className="text-xs text-white/30 mt-1">≈ $3,371.60</div></div><div className="text-right mt-1.5"><span className="text-[10px] font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-500/10">MAX</span></div></div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"><span className="text-xs text-white/40">Network Fee</span><div className="flex items-center gap-1"><span className="text-xs text-white/60">~$2.40</span><Info className="w-3 h-3 text-white/20" /></div></div>
        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"><span className="text-xs text-white/40">Total</span><span className="text-sm font-bold text-white">$3,374.00</span></div>
      </div>
      <div className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-violet-500 text-sm font-bold text-white mt-3">Confirm Send <ArrowUpRight className="w-4 h-4" /></div>
      <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-white/30"><Clock className="w-3 h-3" /> ~10 min</div>
    </div>
    <TabBar active={2} />
  </Phone>
);

export const CryptoStaking = () => (
  <Phone>
    <div className="flex-1 flex flex-col px-5 py-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2"><ChevronLeft className="w-5 h-5 text-white/40" /><span className="text-sm font-bold text-white">Earn</span></div>
        <Sparkles className="w-5 h-5 text-violet-400" />
      </div>
      <div className="rounded-2xl p-4 border border-emerald-500/20 mb-4" style={{ background: "rgba(16,185,129,0.08)" }}>
        <div className="text-xs text-white/40">Total Earned</div>
        <div className="text-xl font-bold text-emerald-400" style={{ fontFamily: "Space Grotesk" }}>$842.50</div>
        <div className="text-[10px] text-white/30">Avg 8.4% APY</div>
      </div>
      <div className="space-y-2 flex-1">
        {[
          { sym: "Ξ", name: "Ethereum", apy: "4.2%", color: "#627EEA", progress: 60 },
          { sym: "S", name: "Solana", apy: "6.8%", color: "#9945FF", progress: 40 },
          { sym: "D", name: "Polkadot", apy: "12.1%", color: "#E6007A", progress: 25 },
        ].map(s => (
          <div key={s.name} className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: `${s.color}30` }}>{s.sym}</div><span className="text-xs font-semibold text-white">{s.name}</span></div>
              <span className="text-sm font-bold" style={{ color: s.color }}>{s.apy} <span className="text-[9px] text-white/30">APY</span></span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06] mb-2"><div className="h-full rounded-full" style={{ width: `${s.progress}%`, background: s.color }} /></div>
            <div className="py-2 rounded-lg text-center text-[10px] font-bold text-white/60 border border-white/10">Stake</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 text-[10px] text-white/30 mt-2"><Lock className="w-3 h-3" /> 30 day lock period</div>
    </div>
    <TabBar active={3} />
  </Phone>
);

export const CryptoOnboarding = () => (
  <Phone bg="#0D1117">
    <div className="flex-1 flex flex-col items-center justify-center px-8" style={{ background: "radial-gradient(circle at center, rgba(124,92,252,0.1), transparent 70%)" }}>
      <div className="w-20 h-20 rounded-full border-2 border-violet-500/30 bg-violet-500/10 flex items-center justify-center mb-6"><Shield className="w-10 h-10 text-violet-400" /></div>
      <div className="text-sm text-white/50 mb-1">Welcome to</div>
      <div className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk" }}>CryptoVault</div>
      <div className="text-xs text-white/30 text-center mb-6">Secure gateway to crypto</div>
      <div className="w-full space-y-2.5 mb-6">
        {[{ icon: CheckCircle, color: "text-emerald-400", text: "Bank-grade security" },{ icon: TrendingUp, color: "text-violet-400", text: "Real-time tracking" },{ icon: Zap, color: "text-amber-400", text: "Instant transactions" }].map(f => (
          <div key={f.text} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.04]"><f.icon className={`w-4 h-4 ${f.color}`} /><span className="text-xs text-white/70">{f.text}</span></div>
        ))}
      </div>
      <div className="flex gap-2 mb-6">{[0,1,2].map(i => <div key={i} className={`rounded-full ${i===0?"w-6 h-1.5 bg-violet-500":"w-1.5 h-1.5 bg-white/20"}`} />)}</div>
      <div className="w-full py-3.5 rounded-xl bg-violet-500 text-center text-sm font-bold text-white">Get Started</div>
      <div className="text-[10px] text-white/30 mt-3">Have an account? <span className="text-violet-400">Sign In</span></div>
    </div>
    <TabBar />
  </Phone>
);

export const CryptoSecurity = () => (
  <Phone>
    <div className="flex-1 flex flex-col px-5 py-2">
      <div className="flex items-center gap-2 mb-4"><ChevronLeft className="w-5 h-5 text-white/40" /><Shield className="w-5 h-5 text-violet-400" /><span className="text-sm font-bold text-white">Security</span></div>
      <div className="flex justify-center mb-4">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" /><circle cx="50" cy="50" r="40" fill="none" stroke="#7C5CFC" strokeWidth="8" strokeDasharray="251" strokeDashoffset="38" strokeLinecap="round" /></svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-xl font-bold text-white">85</span><span className="text-[9px] text-white/30">/100</span><span className="text-[9px] text-emerald-400 font-semibold">Good</span></div>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        {[
          { icon: Fingerprint, label: "Biometric", desc: "Face ID", on: true, color: "bg-emerald-500/20" },
          { icon: Shield, label: "2FA", desc: "Authenticator", on: true, color: "bg-emerald-500/20" },
          { icon: Bell, label: "Alerts", desc: "Push+Email", on: true, color: "bg-emerald-500/20" },
          { icon: Eye, label: "Hide Balance", desc: "", on: false, color: "bg-white/5" },
          { icon: Key, label: "Recovery", desc: "", on: false, color: "bg-amber-500/20", badge: "Back up" },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className={`w-8 h-8 rounded-xl ${item.color} flex items-center justify-center`}><item.icon className={`w-4 h-4 ${item.on ? "text-emerald-400" : item.badge ? "text-amber-400" : "text-white/30"}`} /></div>
            <div className="flex-1"><div className="text-xs font-semibold text-white">{item.label}</div>{item.desc && <div className="text-[9px] text-white/30">{item.desc}</div>}</div>
            {item.badge ? <><span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">{item.badge}</span><ChevronRight className="w-4 h-4 text-white/20" /></> :
            <div className={`w-10 h-5 rounded-full flex items-center px-0.5 ${item.on ? "bg-violet-500 justify-end" : "bg-white/10 justify-start"}`}><div className="w-4 h-4 rounded-full bg-white" /></div>}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 text-[10px] text-white/20 mt-2"><Clock className="w-3 h-3" /> Last check: 2 days ago</div>
    </div>
    <TabBar active={4} />
  </Phone>
);
