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
              href="/analysis/gold-analysis-2026-06-08"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                XAU/USD Weekly Outlook – 8 June 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 8 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-06"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Price Weekly Review (1–6 June 2026)
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Weekly Review • Published 6 June 2026
              </p>
            </Link>

            <Link
              href="/analysis/gold-analysis-2026-06-05"
              className="block border border-zinc-800 rounded-lg p-4 hover:border-yellow-400 transition"
            >
              <h3 className="text-lg font-semibold text-white">
                Gold Analysis Today – 5 June 2026
              </h3>

              <p className="text-zinc-400 text-sm mt-1">
                Daily Analysis • Published 5 June 2026
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