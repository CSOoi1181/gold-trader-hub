```tsx
export default function MarketSummary() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Gold Market Summary
      </h2>

      <div className="space-y-4 text-zinc-300">

        <p>
          Gold (XAU/USD) remains under pressure near the
          <span className="text-yellow-400 font-semibold">
            {" "} $4,250–$4,330
          </span>
          {" "}region after breaking below the important psychological
          $4,300 level. Investors are now awaiting today's highly
          anticipated U.S. Consumer Price Index (CPI) report, which is
          widely expected to become the next major catalyst for the gold
          market.
        </p>

        <p>
          Tuesday's session extended the weakness seen after last week's
          stronger-than-expected U.S. Non-Farm Payrolls report. Rising
          Treasury yields and a stronger U.S. Dollar continued to pressure
          precious metals as traders further reduced expectations for
          Federal Reserve interest-rate cuts in 2026.
        </p>

        <p>
          Additional volatility has emerged from President Donald Trump's
          latest comments regarding trade policy, inflation and Middle East
          developments. Although geopolitical risks normally support safe-
          haven demand, markets are currently focusing more on their
          inflationary impact and how they may influence future Federal
          Reserve decisions.
        </p>

        <p>
          Despite recent weakness, long-term fundamentals remain
          constructive. Ongoing central bank accumulation, concerns over
          global debt levels and continued diversification away from
          traditional reserve assets continue to provide structural support
          for gold prices.
        </p>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Support Levels
          </h3>

          <ul className="space-y-2">
            <li>🟢 $4,200</li>
            <li>🟢 $4,180</li>
            <li>🟢 $4,113</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Resistance Levels
          </h3>

          <ul className="space-y-2">
            <li>🔴 $4,358</li>
            <li>🔴 $4,385</li>
            <li>🔴 $4,435</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Market Sentiment
          </h3>

          <p>
            <span className="text-red-400 font-semibold">
              Cautiously Bearish
            </span>
            {" "}in the short term as traders continue to price in a
            higher-for-longer Federal Reserve stance. Rising Treasury
            yields and Dollar strength remain headwinds for gold, while
            today's CPI report could determine whether XAU/USD extends its
            correction or begins stabilizing above major support zones.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Major Drivers Behind Gold Prices
          </h3>

          <ul className="space-y-2">
            <li>📊 U.S. CPI inflation report.</li>
            <li>🏦 Federal Reserve rate expectations.</li>
            <li>📈 U.S. Treasury yield movements.</li>
            <li>💵 U.S. Dollar Index (DXY).</li>
            <li>🌍 Middle East geopolitical developments.</li>
            <li>📰 President Donald Trump's policy announcements.</li>
            <li>🏛 Continued central bank gold purchases.</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Why Central Banks Continue Buying Gold
          </h3>

          <p>
            Central banks around the world remain one of the strongest
            long-term pillars supporting gold prices. Countries including
            China, Poland and several emerging economies continue
            increasing gold reserves as part of broader diversification
            strategies aimed at reducing reliance on traditional fiat
            currencies.
          </p>

          <p className="mt-4">
            This steady accumulation provides an important source of
            structural demand and helps cushion the market during periods
            of speculative selling. Although central bank buying may not
            prevent short-term corrections, it remains one of the key
            reasons many analysts continue to maintain a constructive
            longer-term outlook for gold.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            What Traders Should Watch Today
          </h3>

          <p>
            All eyes are on the U.S. CPI report. A softer inflation reading
            could weaken the U.S. Dollar and Treasury yields, supporting a
            recovery toward the $4,358-$4,385 resistance zone. However,
            stronger inflation data may reinforce expectations for higher
            interest rates and expose gold to further downside toward
            $4,200 and below.
          </p>

        </div>

      </div>

    </div>
  );
}
```
