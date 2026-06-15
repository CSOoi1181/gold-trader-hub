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
        Gold Analysis Today – XAU/USD Rebounds Above $4,280 as Fed, BOJ and BOE Decisions Take Center Stage | 15 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 15 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices started the new trading week attempting to stabilize after suffering one of the most volatile periods of 2026.Spot Gold (XAU/USD) is trading around the $4,280 area after rebounding from last week's six-month low near $4,080. The recovery has improved short-term sentiment, but investors remain cautious ahead of what could become one of the most important macroeconomic weeks of the year.Unlike previous periods where geopolitical uncertainty dominated market direction, today's gold market is being influenced by multiple competing narratives.
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