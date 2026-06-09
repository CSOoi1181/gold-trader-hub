export default function MarketSummary() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Gold Market Summary
      </h2>

      <div className="space-y-4 text-zinc-300 leading-7">

        <p>
          Gold (XAU/USD) is trading around the <span className="text-yellow-400 font-semibold">$4,340</span> level,
          consolidating after a volatile session that saw prices briefly test the $4,268 region before recovering.
          The market remains in a corrective phase following stronger-than-expected U.S. Nonfarm Payrolls data,
          which reinforced expectations of a prolonged high interest rate environment from the Federal Reserve.
        </p>

        <p>
          Despite continued pressure from a stronger U.S. Dollar and elevated Treasury yields near 4.5%,
          buyers have repeatedly defended the critical $4,300 support zone. This suggests that institutional demand
          is still active, preventing a deeper breakdown in the short term.
        </p>

        <p>
          Market participants are now fully focused on the upcoming U.S. CPI inflation report, which is expected
          to act as the next major catalyst for gold. The data will determine whether inflation remains sticky enough
          to support higher yields or begins to ease, allowing gold to stabilize and recover.
        </p>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Market Drivers
          </h3>

          <ul className="space-y-2">
            <li>📊 U.S. CPI Inflation Report (Primary catalyst this week)</li>
            <li>💵 U.S. Dollar Index (DXY) strength</li>
            <li>📈 Treasury yields hovering near 4.5%</li>
            <li>🏦 Federal Reserve higher-for-longer policy stance</li>
            <li>🌍 Central bank gold accumulation support</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Technical Structure
          </h3>

          <p>
            Gold remains in a consolidation phase with price action trapped between
            support at <span className="text-green-400 font-semibold">$4,300</span> and resistance near
            <span className="text-red-400 font-semibold"> $4,369 – $4,420</span>.
          </p>

          <p className="mt-3">
            Momentum indicators remain neutral, suggesting that the market is waiting for CPI data
            before establishing a new directional trend.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Market Sentiment
          </h3>

          <p>
            <span className="text-yellow-400 font-semibold">Neutral to slightly bearish</span> in the short term,
            as macroeconomic data continues to favor a strong U.S. Dollar environment.
            However, strong buying interest near $4,300 indicates that downside momentum remains limited.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Next Major Catalyst
          </h3>

          <p>
            The U.S. CPI inflation report will determine the next major move for XAU/USD.
            A softer inflation print could trigger a recovery toward $4,420–$4,500,
            while a stronger-than-expected reading may extend the correction toward $4,270–$4,200.
          </p>

        </div>

      </div>
    </div>
  );
}