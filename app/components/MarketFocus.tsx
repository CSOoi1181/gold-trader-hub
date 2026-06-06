export default function MarketFocus() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Market Focus This Week
      </h2>

      <p className="text-zinc-300 leading-8 mb-6">
        Following the sharp 5.5% decline in gold prices during the first
        week of June 2026, traders are closely monitoring several major
        market drivers that could influence XAU/USD when markets reopen.
      </p>

      <div className="space-y-5">

        <div>
          <h3 className="text-white font-semibold mb-1">
            Federal Reserve Policy Expectations
          </h3>

          <p className="text-zinc-400">
            Strong U.S. labor-market data continues to support a
            higher-for-longer interest-rate outlook, creating pressure
            on non-yielding assets such as gold.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-1">
            U.S. Treasury Yields
          </h3>

          <p className="text-zinc-400">
            Elevated Treasury yields remain one of the most important
            headwinds for precious metals and could continue influencing
            institutional capital flows.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-1">
            U.S. Dollar Strength
          </h3>

          <p className="text-zinc-400">
            Gold traders should monitor the U.S. Dollar Index (DXY),
            as continued dollar strength may limit recovery attempts in
            XAU/USD.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-1">
            Central Bank Gold Demand
          </h3>

          <p className="text-zinc-400">
            Ongoing reserve diversification and central-bank purchases
            continue providing structural support for long-term gold
            prices.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-1">
            Geopolitical Developments
          </h3>

          <p className="text-zinc-400">
            Developments in the Middle East, global shipping routes,
            and energy markets remain important risk factors that could
            trigger safe-haven demand.
          </p>
        </div>

      </div>

    </div>
  );
}