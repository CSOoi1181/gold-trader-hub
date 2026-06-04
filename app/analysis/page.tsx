import Link from "next/link";

export const metadata = {
  title: "Daily Gold Analysis | Gold Trader Hub",
  description:
    "Professional daily XAUUSD analysis, gold market outlook, technical analysis, support and resistance levels.",
};

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Daily Gold Analysis
        </h1>

        <p className="text-zinc-400 mb-10">
          Daily XAUUSD market outlook, technical analysis and trading scenarios.
        </p>

        <div className="space-y-6">

          <Link
            href="/analysis/gold-analysis-2026-06-04"
            className="block p-6 border border-zinc-800 rounded-xl hover:border-yellow-400 transition"
          >
            <h2 className="text-2xl font-semibold text-yellow-400">
              Gold Analysis Today – 4 June 2026
            </h2>

            <p className="text-zinc-400 mt-2">
              XAU/USD recovers ahead of NFP while traders monitor key $4,500 resistance.
            </p>
          </Link>

          <Link
            href="/analysis/gold-analysis-2026-06-03"
            className="block p-6 border border-zinc-800 rounded-xl hover:border-yellow-400 transition"
          >
            <h2 className="text-2xl font-semibold text-yellow-400">
              Gold Analysis Today – 3 June 2026
            </h2>

            <p className="text-zinc-400 mt-2">
              Gold remains under pressure as traders assess economic data and Federal Reserve expectations.
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}