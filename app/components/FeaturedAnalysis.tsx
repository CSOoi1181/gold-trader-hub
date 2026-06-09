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
        Gold Analysis Today – Gold Holds Above $4,300 Ahead of CPI Data | 9 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 9 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold (XAU/USD) is trading near the $4,340 level on Tuesday, stabilizing after one of its most volatile trading sessions in recent weeks. 
        Despite continued pressure from a stronger U.S. Dollar and rising Treasury yields, buyers have successfully defended the critical $4,300 support zone, preventing a deeper corrective move.

        Market sentiment remains divided. 
        On one side, stronger U.S. economic data has reinforced expectations that the Federal Reserve may maintain a restrictive monetary policy stance for longer than previously anticipated. 
        On the other side, persistent geopolitical tensions and steady central bank demand continue to provide an underlying bid for gold.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-09"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}