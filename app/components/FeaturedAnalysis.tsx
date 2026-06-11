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
        Gold Analysis Today – XAU/USD Slides Toward $4,050 as CPI Shock, Rising Treasury Yields and US-Iran Tensions Pressure Gold Prices | 11 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 11 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices remain under significant pressure on Thursday as investors continue digesting a powerful combination of inflation concerns, rising Treasury yields, Federal Reserve expectations, and escalating geopolitical risks.
        XAU/USD is trading near the $4,050 region after suffering one of its most aggressive declines in recent months.
        The precious metal has now entered a deeper corrective phase as institutional investors reduce exposure to non-yielding assets and increase allocations toward cash and government bonds.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-11"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}