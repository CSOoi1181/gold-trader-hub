import Link from "next/link";

export default function FeaturedAnalysis() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🔥</span>

        <h2 className="text-2xl font-bold text-yellow-400">
          Featured Latest Analysis
        </h2>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        Gold Analysis Today (XAU/USD): Gold Navigates the $4,000 Psychological Floor Amid Surging 13-Month Dollar High | June 29, 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 29 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Spot gold (XAU/USD) is trending downward today, currently trading at $4,062.28 per ounce. This represents a daily decline of approximately 0.64% from its weekend close of $4,088.60, as the precious metal navigates tight daily ranges during the Asian and early European sessions.
        The asset remains mired in a persistent, multi-month bearish correction, sitting roughly 25% to 29% below its January all-time high of $5,580–$5,608. Dissipating geopolitical safe-haven premiums, an aggressive Federal Reserve monetary policy stance, and a roaring US Dollar continue to limit any sustained upward momentum.
        The primary macro driver for today's price action is the delicate unwinding of geopolitical risk premiums following localized military escalations over the weekend. Financial markets are actively processing a "stand down for now" signal after a series of weekend missile and drone exchanges between the US and Iran. A senior US official confirmed that both nations are actively avoiding immediate further escalation, injecting risk-on confidence back into broader capital markets.
        Traders are heavily pricing in a 60-day US-Iran peace roadmap and memorandum of understanding. This structured arrangement allows toll-free passage through the critical Strait of Hormuz while utilizing restricted Iranian funds exclusively for humanitarian food supplies. This structural breakthrough effectively removes the extreme war premium that historically bolstered bullion.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-29"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}