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
        Gold prices are facing a critical juncture as they hover around the $4,000 psychological floor. The market is grappling with a combination of factors, including a hawkish Federal Reserve stance, a strong US dollar, and the implications of core PCE inflation data. Traders are closely monitoring these developments to gauge potential market movements and trading opportunities.
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