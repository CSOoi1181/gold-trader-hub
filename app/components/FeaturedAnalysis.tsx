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
        XAU/USD Weekly Outlook (8 June 2026): Gold Hits 10-Week Low After NFP Shockwave – CPI Week Setup
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 8 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold (XAU/USD) remains under pressure near the $4,327–$4,348 range after a strong U.S. Non-Farm Payrolls report
        triggered a sharp repricing of Federal Reserve rate expectations. The dollar strengthened and Treasury yields surged,
        pushing gold to its lowest level in nearly ten weeks. Traders are now focused on the upcoming U.S. CPI inflation report,
        which is expected to determine whether gold extends its correction toward $4,200 or rebounds back above $4,500.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-08"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}