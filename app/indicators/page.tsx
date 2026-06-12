import Link from "next/link";

export const metadata = {
  title: "MT4 & MT5 Indicators Guide | Gold Trader Hub",
  description:
    "Learn how to use popular MetaTrader 4 and MetaTrader 5 indicators. Discover RSI, MACD, Moving Averages, Bollinger Bands, Stochastic Oscillator and more with detailed explanations, trading strategies, advantages and disadvantages.",
};

export default function IndicatorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          MT4 & MT5 Indicators Guide
        </h1>

        <p className="text-zinc-400 mb-10 leading-8">
          Explore detailed educational guides on popular technical indicators
          used by traders around the world. Learn how indicators work, when to
          use them, their advantages and disadvantages, and how to combine them
          with proper risk management.
        </p>

        {/* Momentum Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Momentum Indicators
          </h2>

          <div className="grid gap-6">

            <Link
              href="/indicators/relative-strength-index-rsi"
              className="block bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Relative Strength Index (RSI)
              </h3>

              <p className="text-zinc-300 leading-7">
                Learn how to use the Relative Strength Index (RSI) indicator in
                MT4 and MT5. Discover overbought and oversold conditions,
                divergence trading, failure swings, trend ranges, scalping
                strategies and swing trading techniques.
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                Beginner • Intermediate • Advanced
              </p>
            </Link>

          </div>
        </section>

        {/* Trend Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Trend Indicators
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Moving Average (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn Simple Moving Average (SMA), Exponential Moving Average
                (EMA), crossover strategies and trend-following techniques.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                MACD (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Master the Moving Average Convergence Divergence indicator,
                histogram interpretation and momentum analysis.
              </p>
            </div>

          </div>
        </section>

        {/* Volatility Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Volatility Indicators
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Bollinger Bands (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Understand volatility expansion, squeeze setups and breakout
                trading strategies.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Average True Range (ATR) (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn how ATR can improve stop-loss placement and risk
                management.
              </p>
            </div>

          </div>
        </section>

        {/* Oscillators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Oscillators
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Stochastic Oscillator (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn momentum reversal signals and overbought/oversold
                analysis.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                Commodity Channel Index (CCI) (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Understand cyclical market behavior and trend strength.
              </p>
            </div>

          </div>
        </section>

        {/* Volume Indicators */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-zinc-800 pb-3">
            Volume Indicators
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-500 mb-3">
                On Balance Volume (OBV) (Coming Soon)
              </h3>

              <p className="text-zinc-400">
                Learn how volume confirms trends and detects divergence.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}