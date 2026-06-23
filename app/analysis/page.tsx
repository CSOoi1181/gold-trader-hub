import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Gold Analysis Archive | Gold Trader Hub",
  description:
    "Daily XAUUSD Gold Analysis, market outlook, technical analysis, support and resistance levels, economic events, Federal Reserve policy expectations, and professional gold trading insights.",
};

const articles = [
  {
  title: "Gold Analysis Today (XAU/USD): Price Struggles Near $4,150 as Hawkish Fed, Falling Oil Prices, and US-Iran Peace Progress Reshape Market Direction | June 23, 2026",
  date: "23 June 2026",
  slug: "/analysis/gold-analysis-2026-06-23",
  summary:
    "XAU/USD trades near $4,150–$4,160 as markets react to Fed policy, falling oil prices, and US-Iran peace progress.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Holds Near $4,150 as Hawkish Fed and US-Iran Peace Talks Reshape Market Outlook | 22 June 2026",
  date: "22 June 2026",
  slug: "/analysis/gold-analysis-2026-06-22",
  summary:
    "XAU/USD trades near $4,150 as easing geopolitical risks, hawkish Federal Reserve policy, lower oil prices and strong central-bank demand shape the gold market outlook.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Slides Toward $4,150 as Hawkish Fed Signals and Strong Dollar Pressure Bullion | 19 June 2026",
  date: "19 June 2026",
  slug: "/analysis/gold-analysis-2026-06-19",
  summary:
    "XAU/USD slides toward $4,150 as hawkish Federal Reserve signals, elevated Treasury yields, and a stronger US Dollar pressure bullion prices.",
  },
  {
  title: "Gold Analysis Today: XAU/USD Rebounds Above $4,320 After Fed Shock | 18 June 2026",
  date: "18 June 2026",
  slug: "/analysis/gold-analysis-2026-06-18",
  summary:
    "Gold Analysis Today for 18 June 2026. XAU/USD rebounds above $4,320 after a volatile post-FOMC selloff as traders assess the Federal Reserve's hawkish stance, a US-Iran interim peace agreement, and the outlook for inflation.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Holds Above $4,330 Ahead of Historic FOMC Decision | 17 June 2026",
  date: "17 June 2026",
  slug: "/analysis/gold-analysis-2026-06-17",
  summary:
    "XAU/USD holds above $4,330 ahead of the Federal Reserve decision as traders monitor Dollar weakness, falling oil prices, and evolving inflation expectations.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Surges Above $4,350 as Markets Await Federal Reserve Decision | 16 June 2026",
  date: "16 June 2026",
  slug: "/analysis/gold-analysis-2026-06-16",
  summary:
    "XAU/USD surges above $4,350 as markets await the Federal Reserve decision amid falling oil prices, Dollar weakness, and shifting inflation expectations.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Rebounds Above $4,280 as Fed, BOJ and BOE Decisions Take Center Stage | 15 June 2026",
  date: "15 June 2026",
  slug: "/analysis/gold-analysis-2026-06-15",
  summary:
    "XAU/USD rebounds above $4,280 as traders prepare for key central bank decisions from the Federal Reserve, Bank of Japan, Reserve Bank of Australia and Bank of England amid shifting inflation and geopolitical expectations.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Holds Near $4,200 as Fed Rate Hike Fears, Hot Inflation Data and US-Iran Peace Hopes Weigh on Gold Prices | 12 June 2026",
  date: "12 June 2026",
  slug: "/analysis/gold-analysis-2026-06-12",
  summary:
    "XAU/USD remains under pressure near $4,200 as stronger U.S. inflation data, Federal Reserve expectations and U.S.-Iran diplomatic developments influence gold prices. Explore technical analysis, support and resistance levels, trading scenarios and market outlook.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Slides Toward $4,050 as CPI Shock, Rising Treasury Yields and US-Iran Tensions Pressure Gold Prices | 11 June 2026",
  date: "11 June 2026",
  slug: "/analysis/gold-analysis-2026-06-11",
  summary:
    "XAU/USD remains under pressure near $4,050 after hotter-than-expected U.S. inflation data, rising Treasury yields, Federal Reserve expectations and escalating US-Iran tensions. Explore technical analysis, support and resistance levels, trading scenarios and gold price forecasts.",
  },
  {
  title: "Gold Analysis Today – XAU/USD Falls Below $4,300 as CPI Data, Fed Expectations and Announcements Drive Market Volatility | 10 June 2026",
  date: "10 June 2026",
  slug: "/analysis/gold-analysis-2026-06-10",
  summary:
    "XAU/USD remains under pressure below $4,300 as traders await U.S. CPI data. Explore Federal Reserve expectations, Trump policy developments, key support and resistance levels, technical analysis and trading scenarios.",
  },
  {
  title: "Gold Analysis Today – Gold Holds Above $4,300 Ahead of CPI Data | 9 June 2026",
  date: "9 June 2026",
  slug: "/analysis/gold-analysis-2026-06-09",
  summary:
    "XAU/USD stabilizes above $4,300 ahead of the crucial U.S. CPI report. Explore key support and resistance levels, Federal Reserve expectations, central bank demand, technical analysis, and trading scenarios.",
  },
  {
  title: "XAU/USD Weekly Outlook – 8 June 2026 | Gold Hits 10-Week Low After NFP Shockwave",
  date: "8 June 2026",
  slug: "/analysis/gold-analysis-2026-06-08",
  summary:
    "Gold trades under pressure near 10-week lows after strong US Non-Farm Payrolls data. Explore CPI week strategy, Fed expectations, liquidity zones, key support and resistance levels, and trading scenarios for XAUUSD.",
  },
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