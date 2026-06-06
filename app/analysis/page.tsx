import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Gold Analysis Archive | Gold Trader Hub",
  description:
    "Daily XAUUSD Gold Analysis, market outlook, technical analysis, support and resistance levels, economic events, Federal Reserve policy expectations, and professional gold trading insights.",
};

const articles = [
  {
    title: "Gold Risk Management Report – 6 June 2026",
    date: "6 June 2026",
    slug: "/analysis/gold-analysis-2026-06-06",
    summary:
      "Weekly gold market recap covering the dramatic post-NFP collapse from $4,580 to $4,328. Explore key support and resistance levels, risk management strategies, long and short position guidance, and outlook for the upcoming trading week.",
  },
  {
    title: "Gold Analysis Today – 5 June 2026",
    date: "5 June 2026",
    slug: "/analysis/gold-analysis-2026-06-05",
    summary:
      "Gold trades near key support ahead of the U.S. Non-Farm Payrolls report. Explore critical support and resistance zones, market sentiment, Federal Reserve expectations, and high-probability trading scenarios.",
  },
  {
    title: "Gold Analysis Today – 4 June 2026",
    date: "4 June 2026",
    slug: "/analysis/gold-analysis-2026-06-04",
    summary:
      "Gold remains trapped below the $4,500 resistance level as traders monitor U.S. Treasury yields, geopolitical developments, and upcoming economic data. Detailed technical outlook and trading plans included.",
  },
  {
    title: "Gold Analysis Today – 3 June 2026",
    date: "3 June 2026",
    slug: "/analysis/gold-analysis-2026-06-03",
    summary:
      "Daily gold market analysis covering key support and resistance levels, trading opportunities, market sentiment, and risk management insights for XAUUSD traders.",
  },
];

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">
            Gold Market Analysis Archive
          </h1>

          <p className="text-zinc-400 text-lg max-w-3xl">
            Professional XAUUSD market analysis covering technical outlook,
            support and resistance levels, Federal Reserve policy expectations,
            economic events, risk management strategies, geopolitical
            developments, and actionable trading insights.
          </p>
        </div>

        <div className="grid gap-6">

          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.slug}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
            >
              <div className="mb-3">
                <span className="text-sm text-zinc-500">
                  {article.date}
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
                {article.title}
              </h2>

              <p className="text-zinc-300 leading-7">
                {article.summary}
              </p>

              <div className="mt-4 text-yellow-400 font-medium">
                Read Full Analysis →
              </div>
            </Link>
          ))}

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">

          <h2 className="text-2xl font-semibold text-white mb-4">
            About Our Gold Analysis
          </h2>

          <p className="text-zinc-400 leading-8">
            Gold Trader Hub provides daily and weekly gold market analysis
            designed for XAUUSD traders and investors. Our reports focus on
            technical analysis, market sentiment, macroeconomic developments,
            Federal Reserve policy expectations, support and resistance zones,
            economic calendar events, and practical risk management strategies.
          </p>

        </div>

      </section>
    </main>
  );
}