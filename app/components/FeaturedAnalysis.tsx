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
        Gold Analysis Today (XAU/USD): Gold Slides Toward Critical Support as Hawkish Fed, Strong Dollar, and Fading Safe-Haven Demand Pressure Prices | June 24, 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 24 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices extended their decline on Wednesday as XAU/USD traded near two-week lows around the $4,050–$4,100 region, reflecting a dramatic shift in market sentiment that has unfolded over the past several trading sessions.
        The precious metal, which spent much of the first half of 2026 benefiting from geopolitical uncertainty, inflation concerns, and central-bank buying activity, is now facing one of its most challenging environments of the year.
        Several powerful forces are converging simultaneously:
          •	The US Dollar continues to strengthen.
          •	Treasury yields remain elevated.
          •	Federal Reserve officials maintain a restrictive monetary policy stance.
          •	Geopolitical tensions in the Middle East have eased.
          •	Investors are reducing defensive positions ahead of critical US inflation data.
          •	Institutional traders are increasingly moving toward cash and yield-bearing assets.
        As a result, gold has entered a deeper corrective phase that many analysts believe could determine the direction of the market for the remainder of the third quarter.
        While long-term structural support remains intact due to ongoing central-bank demand and global reserve diversification, short-term momentum currently favors sellers.
        The next major catalyst is the upcoming US Core Personal Consumption Expenditures (Core PCE) inflation report, widely regarded as the Federal Reserve's preferred inflation gauge.
        The outcome of that release may determine whether gold stabilizes above $4,000 or experiences another wave of liquidation.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-24"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}