"use client";

import Navbar from "./components/Navbar";
import GoldChart from "./components/GoldChart";
import MarketSummary from "./components/MarketSummary";
import FeaturedAnalysis from "./components/FeaturedAnalysis";
import EconomicCalendar from "./components/EconomicCalendar";
import RiskRewardCalculator from "./components/RiskRewardCalculator";

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
            Professional XAUUSD analysis, market insights and trading education.
          </p>
        </div>

        <GoldChart />

        <div className="mt-8">
          <MarketSummary />
        </div>

        <div className="mt-8">
          <FeaturedAnalysis />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <EconomicCalendar />

          <RiskRewardCalculator />

        </div>

      </section>
    </main>
  );
}