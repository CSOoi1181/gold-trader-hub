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
        Gold Analysis Today: XAU/USD Rebounds Above $4,320 After Fed Shock | 18 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 18 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold (XAU/USD) is trading near $4,320–$4,330 after recovering from a sharp post-FOMC selloff.
        The Federal Reserve maintained rates at 3.50%–3.75% but delivered a hawkish message that initially pressured bullion.
        A newly signed US-Iran interim peace agreement eased Middle East tensions and reopened the Strait of Hormuz.
        Crude oil prices dropped sharply following the agreement, reducing inflation concerns across global markets.
        The US Dollar Index (DXY) surged above 100.00, creating a major headwind for gold.
        Traders are now focused on US Jobless Claims and the Philadelphia Fed Manufacturing Index for additional direction.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-18"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}