import Link from "next/link";

export const metadata = {
  title: "Daily Gold Analysis | Gold Trader Hub",
  description:
    "Daily XAUUSD market analysis, trading outlook, support and resistance levels, and gold trading insights.",
};

const analyses = [
  {
    date: "3 June 2026",
    slug: "gold-analysis-2026-06-03",
    title: "Gold Analysis Today – XAUUSD Outlook for 3 June 2026",
    summary:
      "Gold remains bullish above key support levels as traders monitor market sentiment and economic developments.",
  },
];

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Daily Gold Analysis
        </h1>

        <p className="text-gray-400 mb-10">
          Daily XAUUSD analysis, trading ideas, support and resistance levels,
          and market outlook.
        </p>

        <div className="space-y-6">
          {analyses.map((analysis) => (
            <div
              key={analysis.slug}
              className="border border-gray-700 rounded-lg p-6"
            >
              <p className="text-sm text-yellow-500 mb-2">
                {analysis.date}
              </p>

              <h2 className="text-2xl font-semibold mb-3">
                {analysis.title}
              </h2>

              <p className="text-gray-300 mb-4">
                {analysis.summary}
              </p>

              <Link
                href="#"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Read Full Analysis →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}