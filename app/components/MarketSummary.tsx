export default function MarketSummary() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Gold Market Summary
      </h2>

      <div className="space-y-4 text-zinc-300">

        <p>
          Gold (XAU/USD) is trading around
          <span className="text-yellow-400 font-semibold">
            {" "} $4,460 – $4,480
          </span>
          {" "}ahead of the highly anticipated U.S. Non-Farm Payrolls (NFP)
          report. Traders remain cautious as the employment data could
          significantly influence Federal Reserve interest-rate expectations.
        </p>

        <p>
          Market sentiment remains mixed. Long-term fundamentals continue
          to support gold through strong central bank buying, persistent
          global debt concerns and ongoing geopolitical uncertainty.
          However, elevated U.S. Treasury yields and a stronger U.S.
          Dollar continue to pressure bullion prices in the short term.
        </p>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Support Levels
          </h3>

          <ul className="space-y-2">
            <li>🟢 $4,441</li>
            <li>🟢 $4,400</li>
            <li>🟢 $4,370</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Resistance Levels
          </h3>

          <ul className="space-y-2">
            <li>🔴 $4,500</li>
            <li>🔴 $4,520</li>
            <li>🔴 $4,600</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Today's Market Focus
          </h3>

          <p>
            Tonight's U.S. Non-Farm Payrolls (NFP), Unemployment Rate
            and Average Hourly Earnings data are expected to drive
            significant volatility in gold prices. A weaker labor market
            report may revive Federal Reserve rate-cut expectations and
            support gold, while stronger-than-expected numbers could
            strengthen the U.S. Dollar and pressure XAU/USD lower.
          </p>

        </div>

      </div>

    </div>
  );
}