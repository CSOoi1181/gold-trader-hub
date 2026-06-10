export default function MarketSummary() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Gold Market Summary – 10 June 2026
      </h2>

      <div className="space-y-4 text-zinc-300 leading-7">

        <p>
          Gold prices (XAU/USD) remain under pressure on 10 June 2026 as traders
          prepare for the highly anticipated U.S. Consumer Price Index (CPI)
          inflation report. After breaking below the important
          <span className="text-yellow-400 font-semibold"> $4,300</span>
          psychological level, gold is currently trading within the
          <span className="text-yellow-400 font-semibold"> $4,250–$4,330</span>
          range as investors reassess expectations for future Federal Reserve
          interest rate cuts.
        </p>

        <p>
          The recent decline in gold prices follows stronger-than-expected U.S.
          economic data, particularly the latest Nonfarm Payrolls report, which
          reinforced expectations that the Federal Reserve may keep interest rates
          elevated for longer. As a result, U.S. Treasury yields have continued
          moving higher while the U.S. Dollar remains firm, creating significant
          headwinds for non-yielding assets such as gold.
        </p>

        <p>
          Although geopolitical uncertainty surrounding Iran, global trade policy,
          and comments from President Donald Trump continue to generate market
          volatility, investors are currently placing greater emphasis on inflation
          trends and monetary policy expectations. This shift in focus has limited
          safe-haven demand and contributed to the ongoing correction in the gold
          market.
        </p>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Market Drivers
          </h3>

          <ul className="space-y-2">
            <li>📊 U.S. CPI Inflation Report (Major market-moving event)</li>
            <li>🏦 Federal Reserve interest rate outlook</li>
            <li>📈 Rising U.S. Treasury yields</li>
            <li>💵 Strength in the U.S. Dollar Index (DXY)</li>
            <li>🌍 Middle East geopolitical developments and Iran tensions</li>
            <li>🇺🇸 President Trump's economic and trade policy announcements</li>
            <li>🏛️ Ongoing central bank gold purchases</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Technical Structure
          </h3>

          <p>
            From a technical perspective, gold remains in a corrective trend after
            losing support at $4,300. The next major support levels are located at
            <span className="text-green-400 font-semibold"> $4,200</span>,
            <span className="text-green-400 font-semibold"> $4,180</span>,
            and
            <span className="text-green-400 font-semibold"> $4,113</span>.
          </p>

          <p className="mt-3">
            Resistance levels are seen at
            <span className="text-red-400 font-semibold"> $4,358</span>,
            <span className="text-red-400 font-semibold"> $4,385</span>,
            and
            <span className="text-red-400 font-semibold"> $4,435</span>.
            A sustained move above resistance could signal a recovery toward
            higher price levels, while a breakdown below support may trigger
            additional downside pressure.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Gold Market Sentiment
          </h3>

          <p>
            Market sentiment remains
            <span className="text-yellow-400 font-semibold">
              {" "}bearish to neutral
            </span>
            {" "}in the short term as investors continue favoring the U.S. Dollar
            and government bonds. However, long-term fundamentals remain supportive
            due to strong central bank demand, inflation concerns, global debt
            risks, and ongoing geopolitical uncertainty.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Gold Price Forecast
          </h3>

          <p>
            The U.S. CPI inflation report will likely determine the next major move
            in gold prices today. A softer-than-expected inflation reading could
            weaken the U.S. Dollar and Treasury yields, supporting a rebound toward
            $4,358–$4,435. Conversely, stronger inflation data may reinforce
            higher-for-longer Federal Reserve expectations and increase downside
            risks toward $4,200–$4,113.
          </p>

          <p className="mt-3">
            Traders should expect elevated volatility throughout today's session as
            financial markets react to inflation data, interest rate expectations,
            and broader macroeconomic developments.
          </p>

        </div>

      </div>

    </div>
  );
}