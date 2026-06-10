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
        Gold Analysis Today – XAU/USD Falls Below $4,300 as CPI Data, Fed Expectations and Trump Announcements Drive Market Volatility | 10 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 10 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices remain under pressure on Wednesday as traders prepare for one of the most important inflation reports of the month.

        XAU/USD is currently trading near the $4,300 region after suffering a sharp correction from recent record highs above $5,500 earlier this year.
        While buyers have attempted to stabilize prices following the recent sell-off, sentiment remains cautious as investors reassess the future path of U.S. monetary policy.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-10"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}