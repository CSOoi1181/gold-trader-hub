import Link from "next/link";

export const metadata = {
  title: "MT4 & MT5 Indicators Guide | Gold Trader Hub",
  description:
    "Learn popular MetaTrader 4 and MetaTrader 5 indicators, chart patterns, Fibonacci tools, Smart Money Concepts and trading psychology with complete educational guides for forex and gold traders.",
};

export default function IndicatorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          MT4 & MT5 Indicators Dictionary
        </h1>

        <p className="text-zinc-400 mb-10 leading-8">
          Explore comprehensive educational guides covering technical indicators,
          chart patterns, Smart Money Concepts (SMC), Fibonacci tools, price
          action, trading psychology and risk management techniques used by
          professional forex and gold traders.
        </p>

        {/* Momentum Indicators */}
        <section className="mb-14">

          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Momentum Indicators
          </h2>

          <div className="grid gap-5">

            <Link
              href="/indicators/relative-strength-index-rsi"
              className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Relative Strength Index (RSI)
              </h3>

              <p className="text-zinc-300 leading-7">
                Learn RSI overbought and oversold conditions, divergence trading,
                failure swings and momentum analysis.
              </p>
            </Link>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Stochastic Oscillator (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn momentum reversal signals and overbought / oversold analysis.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Commodity Channel Index (CCI) (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Understand cyclical market behavior and trend strength.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Williams %R (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn momentum and reversal trading techniques.
              </p>

            </div>

          </div>

        </section>

        {/* Trend Indicators */}
        <section className="mb-14">

          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Trend Indicators
          </h2>

          <div className="grid gap-5">

            <Link
              href="/indicators/moving-average-ma"
              className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Moving Average (MA)
              </h3>

              <p className="text-zinc-300 leading-7">
                Learn SMA, EMA, crossover strategies and trend-following
                techniques.
              </p>

            </Link>

            <Link
              href="/indicators/moving-average-convergence-divergence-macd"
              className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Moving Average Convergence Divergence (MACD)
              </h3>

              <p className="text-zinc-300 leading-7">
                Master MACD crossovers, histogram interpretation and divergence
                analysis.
              </p>

            </Link>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Ichimoku Cloud (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn trend identification, support and resistance and momentum.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Parabolic SAR (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn trend following and trailing stop techniques.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Average Directional Index (ADX) (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Measure trend strength and identify strong market conditions.
              </p>

            </div>

          </div>

        </section>

        {/* Volatility Indicators */}
        <section className="mb-14">

          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Volatility Indicators
          </h2>

          <div className="grid gap-5">

            <Link
              href="/indicators/bollinger-bands"
              className="block bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Bollinger Bands
              </h3>

              <p className="text-zinc-300 leading-7">
                Understand volatility expansion, squeeze setups and breakout
                trading strategies.
              </p>

            </Link>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Average True Range (ATR) (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn stop-loss placement and volatility measurement.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Keltner Channels (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn channel trading and volatility expansion strategies.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Donchian Channels (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Understand breakout trading systems and trend continuation.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}