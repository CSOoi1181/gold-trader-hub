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
        Gold Analysis Today – XAU/USD Holds Near $4,200 as Fed Rate Hike Fears, Hot Inflation Data and US-Iran Peace Hopes Weigh on Gold Prices | 12 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 12 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices remain under pressure on Friday as investors continue adjusting positions after a volatile week dominated by inflation concerns, shifting Federal Reserve expectations and changing geopolitical developments.
        Spot Gold (XAU/USD) is trading near the $4,200 region after recovering from a six-month low earlier this week. However, the recovery remains fragile, and the precious metal is still heading toward one of its largest weekly declines in recent months.
        The primary challenge for gold is that investors are currently prioritizing interest-rate expectations over traditional safe-haven demand.
        While geopolitical uncertainty remains elevated, stronger inflation readings have shifted market focus back toward monetary policy. Investors increasingly believe the Federal Reserve may need to maintain restrictive conditions for longer than previously expected.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-12"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}