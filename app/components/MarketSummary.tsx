export default function MarketSummary() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Gold Market Summary
      </h2>

      <div className="space-y-4 text-zinc-300 leading-7">

        <p>
          Gold (XAU/USD) is trading near
          <span className="text-yellow-400 font-semibold"> $4,328</span>,
          holding close to its recent 10-week lows after a sharp selloff triggered by stronger-than-expected
          U.S. Non-Farm Payrolls (NFP) data. The report reinforced expectations that the Federal Reserve will
          maintain a higher-for-longer interest rate stance.
        </p>

        <p>
          The metal declined from the $4,580 region as Treasury yields surged toward 4.5% and the U.S. Dollar Index
          strengthened across major currencies. This combination significantly reduced demand for non-yielding assets like gold,
          accelerating downside momentum across the precious metals complex.
        </p>

        <p>
          Markets are now entering a critical macro transition phase, with attention shifting toward upcoming U.S. CPI inflation data
          and the Federal Reserve’s June policy meeting. These events are expected to determine whether gold extends its correction
          toward deeper support levels or stabilizes after the recent liquidation wave.
        </p>

        <p>
          Despite short-term bearish pressure, long-term structural demand remains supported by ongoing central bank accumulation,
          particularly from emerging market economies diversifying away from U.S. dollar reserves. This continues to act as a
          fundamental price stabilizer in the broader gold market.
        </p>

        {/* SUPPORT */}
        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Support Levels
          </h3>

          <ul className="space-y-2">
            <li>🟢 $4,300 – Psychological support zone</li>
            <li>🟢 $4,200 – Structural demand area</li>
            <li>🟢 $4,100 – Macro institutional accumulation zone</li>
          </ul>

        </div>

        {/* RESISTANCE */}
        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Key Resistance Levels
          </h3>

          <ul className="space-y-2">
            <li>🔴 $4,381 – Short-term supply zone</li>
            <li>🔴 $4,428 – Breakdown retest level</li>
            <li>🔴 $4,500 – Major psychological resistance</li>
          </ul>

        </div>

        {/* SENTIMENT */}
        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            Market Sentiment
          </h3>

          <p>
            <span className="text-red-400 font-semibold">Bearish</span> in the short term as traders continue to price in
            strong U.S. economic data and a delayed Federal Reserve easing cycle. Momentum remains biased to the downside,
            although oversold conditions may trigger temporary relief rallies toward the $4,381–$4,428 resistance zone.
          </p>

        </div>

        {/* WHAT TO WATCH */}
        <div className="border-t border-zinc-800 pt-4">

          <h3 className="font-semibold text-white mb-2">
            What Traders Should Watch Next
          </h3>

          <p>
            The key focus for traders is the $4,300 support level, which now acts as the immediate market pivot.
            A confirmed breakdown below this zone could accelerate losses toward $4,200, while a recovery above $4,381
            may indicate short-term stabilization.
          </p>

          <p className="mt-3">
            The next major volatility catalyst is U.S. CPI inflation data, which will determine whether Treasury yields
            continue rising or begin to ease. This will directly influence the direction of XAU/USD heading into the
            Federal Reserve meeting.
          </p>

        </div>

      </div>
    </div>
  );
}