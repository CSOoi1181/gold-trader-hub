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
        Gold Analysis Today – XAU/USD Surges Above $4,350 as Markets Await Federal Reserve Decision | 16 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 16 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices are rising because falling oil prices have reduced inflation expectations, weakening the US Dollar and lowering pressure on future interest-rate hikes.
        Following the announcement of a US-Iran peace framework and the planned reopening of the Strait of Hormuz, crude oil prices dropped sharply.
        The decline in energy costs has encouraged investors to reassess inflation risks and future Federal Reserve policy expectations.
        At the same time, traders are positioning ahead of tomorrow's Federal Open Market Committee (FOMC) decision.
        With interest rates expected to remain unchanged, market participants are focusing on the Fed's forward guidance, economic projections, and policy outlook.
        The combination of lower inflation expectations, softer Treasury yields, and a weaker Dollar has created favorable conditions for gold.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-16"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}