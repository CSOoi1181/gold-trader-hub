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
        Gold Analysis Today (XAU/USD): Price Struggles Near $4,150 as Hawkish Fed, Falling Oil Prices, and US-Iran Peace Progress Reshape Market Direction | June 23, 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 23 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold (XAU/USD) continues to trade in a corrective phase near the $4,150 region after recording its third consecutive week of downside pressure.
        The precious metal is currently caught between fading geopolitical risk premiums and increasingly restrictive US monetary policy expectations.
        Key drivers shaping the market today include:
        Reduced safe-haven demand following US-Iran peace progress
        Falling crude oil prices easing inflation concerns
        A stronger US Dollar (DXY) supported by elevated Treasury yields
        Hawkish Federal Reserve guidance under Chair Kevin Warsh
        Institutional de-risking ahead of Core PCE inflation data
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-23"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}