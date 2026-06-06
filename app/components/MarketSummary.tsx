export default function MarketSummary() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Gold Market Summary
      </h2>

      <div className="space-y-4 text-zinc-300">

        <p>
          Gold (XAU/USD) ended the week near
          <span className="text-yellow-400 font-semibold">
            {" "} $4,328
          </span>
          {" "}after suffering one of the sharpest weekly declines of 2026.
          The precious metal plunged from the $4,580 region following
          stronger-than-expected U.S. employment data and renewed
          expectations that the Federal Reserve may keep interest rates
          higher for longer.
        </p>

        <p>
          Friday's Non-Farm Payrolls (NFP) report triggered heavy selling
          pressure across the gold market, pushing prices below several key
          technical support zones. Traders are now closely watching whether
          the psychological $4,300 level can hold when markets reopen next week.
        </p>

        <p>
          Despite the short-term bearish momentum, long-term support remains
          from continued central bank gold purchases, geopolitical uncertainty,
          and diversification away from traditional reserve assets.
        </p>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Support Levels
          </h3>

          <ul className="space-y-2">
            <li>🟢 $4,300</li>
            <li>🟢 $4,200</li>
            <li>🟢 $4,100</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Resistance Levels
          </h3>

          <ul className="space-y-2">
            <li>🔴 $4,381</li>
            <li>🔴 $4,428</li>
            <li>🔴 $4,500</li>
          </ul>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Market Sentiment
          </h3>

          <p>
            <span className="text-red-400 font-semibold">
              Bearish
            </span>
            {" "}in the short term as traders reassess Federal Reserve policy
            expectations following stronger U.S. labor market data. Any
            recovery toward the $4,381–$4,428 area may attract renewed
            selling pressure unless market fundamentals improve.
          </p>

        </div>

        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            What Traders Should Watch Next Week
          </h3>

          <p>
            Monitor price action around the critical $4,300 support zone
            when markets reopen. A sustained break below this level could
            expose gold to further downside toward $4,200. Conversely,
            a recovery above $4,381 may signal temporary stabilization
            after the aggressive post-NFP sell-off.
          </p>

        </div>

      </div>

    </div>
  );
}