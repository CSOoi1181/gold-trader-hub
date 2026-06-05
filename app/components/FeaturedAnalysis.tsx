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
        Gold Price Forecast Today: XAU/USD Slides Below $4,500 Ahead of NFP
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 5 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold remains under pressure below the psychological $4,500 level
        as traders await the highly anticipated U.S. Non-Farm Payrolls
        report. Elevated Treasury yields and a stronger U.S. Dollar
        continue to create short-term headwinds, while long-term
        institutional demand and central bank buying remain supportive.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-05"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}