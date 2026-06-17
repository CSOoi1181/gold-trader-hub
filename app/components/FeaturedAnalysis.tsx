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
        Gold Analysis Today – XAU/USD Holds Above $4,330 Ahead of Historic FOMC Decision | 17 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 17 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold (XAU/USD) is trading near $4,335–$4,340 per ounce as markets await today's Federal Reserve decision.
        Traders are focused on the first FOMC meeting under new Fed leadership, with interest rates widely expected to remain unchanged.
        The recent US-Iran ceasefire framework has eased energy market concerns and pushed crude oil lower.
        Falling oil prices have reduced inflation fears, helping gold recover more than $300 from its June lows.
        The US Dollar Index remains under pressure, providing additional support for bullion prices.
        Key technical levels remain $4,350 resistance and $4,300 support ahead of the Fed announcement.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-17"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}