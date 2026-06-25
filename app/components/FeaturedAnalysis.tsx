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
        Gold Analysis Today (XAU/USD): Gold Battles to Hold Above $4,000 as Hawkish Fed, Strong Dollar, and Core PCE Risks Dominate Markets | June 25, 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 25 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices remain under significant pressure as investors continue to digest one of the sharpest corrections witnessed in the precious metals market this year.
        After reaching historic highs earlier in 2026, gold has entered a deeper consolidation phase amid a dramatic shift in macroeconomic expectations. The combination of a stronger US dollar, elevated Treasury yields, renewed hawkish Federal Reserve expectations, and fading geopolitical risk premiums has forced investors to reassess the short-term outlook for precious metals.
        During Wednesday's trading session, spot gold briefly slipped below the psychologically important $4,000 level for the first time since November 2025 before recovering modestly. The decline represented a major technical and psychological event for market participants because the $4,000 area had been viewed as one of the strongest support zones on the chart. 
        The current market environment is being driven primarily by expectations that US interest rates could remain restrictive for longer than previously anticipated. Traders have increasingly priced in the possibility that the Federal Reserve may maintain its hawkish stance well into the second half of the year as inflation remains above the central bank's long-term target. 
        At the center of market attention is the upcoming US Core Personal Consumption Expenditures (Core PCE) Price Index report, scheduled for June 26. Because Core PCE is the Federal Reserve's preferred inflation measure, the release could significantly influence expectations regarding future monetary policy, Treasury yields, the US dollar, and ultimately gold prices. 
        For now, gold remains trapped between powerful long-term bullish fundamentals and increasingly challenging short-term macroeconomic conditions.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-25"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}