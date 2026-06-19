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
        Gold Analysis Today – XAU/USD Slides Toward $4,150 as Hawkish Fed Signals and Strong Dollar Pressure Bullion | 19 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 19 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Why Is Gold Falling Today?
        Gold prices remain under pressure after a decisive shift in market sentiment following this week's Federal Reserve meeting.
        While investors had initially hoped that lower energy prices and improving geopolitical conditions would support bullion, the market's focus has quickly returned to monetary policy.
        The Federal Reserve's latest guidance reinforced expectations that interest rates could remain elevated for longer than previously anticipated. As a result, the US Dollar strengthened sharply while Treasury yields remained near multi-month highs.
        For gold, which offers no yield, this environment creates a substantial headwind as investors increasingly favour interest-bearing assets.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-19"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}