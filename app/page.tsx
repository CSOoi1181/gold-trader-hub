"use client";

import Navbar from "./components/Navbar";
import GoldChart from "./components/GoldChart";
import MarketSummary from "./components/MarketSummary";
import FeaturedAnalysis from "./components/FeaturedAnalysis";
import RiskRewardCalculator from "./components/RiskRewardCalculator";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3">
            Gold Trader Command Center
          </h1>

          <p className="text-zinc-400 text-lg">
            Professional XAUUSD analysis, market insights, technical outlook,
            trading education and risk management resources for gold traders.
          </p>
        </div>

        {/* Live Gold Chart */}
        <GoldChart />

        {/* Market Summary */}
        <div className="mt-8">
          <MarketSummary />
        </div>

        {/* Featured Analysis */}
        <div className="mt-8">
          <FeaturedAnalysis />
        </div>

        {/* Tools Section */}
        <div className="grid md:grid-cols-1 gap-6 mt-8">
          <RiskRewardCalculator />
        </div>

        {/* Latest Analysis Archive */}
        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">

          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Latest Gold Analysis
          </h2>

          <p className="text-zinc-300 leading-8 mb-6">
            Explore our latest XAU/USD market analysis, technical outlooks,
            support and resistance levels, Federal Reserve developments,
            economic events and trading scenarios.
          </p>

          <div className="space-y-4">
            
            <Link
              href="/analysis/gold-analysis-2026-07-02"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD): Gold Stages Volatile Relief Rally Near $4,064 Prior to Nonfarm Payrolls Shockwave | July 2, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 2 July 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-07-01"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD): Gold Consolidates Near $4,000 Floor Amid Doha Geopolitical Deadlock and Hawkish Fed Repricing | July 01, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 1 July 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-30"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Price Analysis (XAU/USD): Gold Shatters $4,000 Support Floor in Waterfall Liquidity Cascade as Doha Peace Talks Progress | June 30, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 30 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-29"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD): Gold Navigates the $4,000 Psychological Floor Amid Surging 13-Month Dollar High | June 29, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 29 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-26"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD): Gold Braces for Volatility as Crucial US Core PCE Inflation Data Set to Impact Markets | June 26, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 26 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-25"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD): Gold Battles to Hold Above $4,000 as Hawkish Fed, Strong Dollar, and Core PCE Risks Dominate Markets | June 25, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 25 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-24"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD): Gold Slides Toward Critical Support as Hawkish Fed, Strong Dollar, and Fading Safe-Haven Demand Pressure Prices | June 24, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 24 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-23"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today (XAU/USD) – Price Struggles Near $4,150 as Hawkish Fed, Falling Oil Prices, and US-Iran Peace Progress Reshape Market Direction | June 23, 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 23 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-22"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today – XAU/USD Holds Near $4,150 as Hawkish Fed and US-Iran Peace Talks Reshape Market Outlook | 22 June 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 22 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-19"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today – XAU/USD Slides Toward $4,150 as Hawkish Fed Signals and Strong Dollar Pressure Bullion | 19 June 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 19 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-18"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today – XAU/USD Rebounds Above $4,320 After Fed Shock | 18 June 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 18 June 2026
              </p>
            </Link>

          </div>

          <Link
            href="/analysis"
            className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            View All Analysis →
          </Link>

        </div>

      </section>
    </main>
  );
}