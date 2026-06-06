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
        Gold Price Weekly Review (1–6 June 2026): XAU/USD Crashes 5.5% After NFP Shock
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 6 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold suffered one of its sharpest weekly declines of 2026,
        plunging from near $4,580 to close around $4,328 after stronger-
        than-expected U.S. Nonfarm Payrolls data triggered aggressive
        liquidation across precious metals markets. Traders now focus on
        the critical $4,300 support level and whether gold can stabilize
        or extend losses toward the $4,200 demand zone when markets
        reopen next week.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-06"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}