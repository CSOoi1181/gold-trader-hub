"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import MarketCards from "./components/MarketCards";
import GoldChart from "./components/GoldChart";
import EconomicCalendar from "./components/EconomicCalendar";
import RiskRewardCalculator from "./components/RiskRewardCalculator";

export default function Home() {
  const [goldPrice, setGoldPrice] = useState("Loading...");

  useEffect(() => {
    async function fetchGoldPrice() {
      try {
        const response = await fetch(
          "https://api.gold-api.com/price/XAU"
        );

        const data = await response.json();

        setGoldPrice(data.price.toFixed(2));
      } catch {
        console.log("price fetch failed");
      }
    }

    fetchGoldPrice();

    const interval = setInterval(fetchGoldPrice, 10000);

    return () => clearInterval(interval);
  }, []);

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

        <MarketCards goldPrice={goldPrice} />

        <GoldChart />

        <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">

          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Gold Market Summary
          </h2>

          <p className="text-zinc-300 leading-8">
            Gold (XAU/USD) remains below the important $4,500 resistance
            level as traders prepare for upcoming U.S. labor market data
            and Federal Reserve policy expectations.
          </p>

          <p className="text-zinc-300 leading-8 mt-4">
            Elevated Treasury yields continue to pressure precious metals,
            while geopolitical uncertainty and ongoing central bank demand
            provide longer-term support for gold prices.
          </p>

          <p className="text-zinc-300 leading-8 mt-4">
            Current Market Sentiment:
            <span className="text-yellow-400 font-semibold">
              {" "}Neutral to Bearish
            </span>
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <EconomicCalendar />

          <RiskRewardCalculator />

        </div>

      </section>
    </main>
  );
}