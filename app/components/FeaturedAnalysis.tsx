import Link from "next/link";

export default function FeaturedAnalysis() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🔥</span>

        <h2 className="text-2xl font-bold text-yellow-400">
          Featured Latest Analysis
        </h2>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        Gold Analysis Today – XAU/USD Holds Near $4,150 as Hawkish Fed and US-Iran Peace Talks Reshape Market Outlook | 22 June 2026
      </h3>

      <p className="text-sm text-zinc-500 mb-4">
        Published: 22 June 2026
      </p>

      <p className="text-zinc-300 leading-8 mb-6">
        Gold prices entered the new trading week in a defensive position as investors continued digesting two major developments that reshaped market sentiment last week: the easing of geopolitical tensions in the Middle East and a surprisingly hawkish Federal Reserve.
        Spot gold is currently hovering near $4,150 after falling sharply from recent highs above $4,380. The decline represents one of the most significant sentiment shifts seen in the precious metals market this year.
        For months, gold had benefited from a powerful combination of geopolitical uncertainty, persistent inflation concerns, central-bank buying, and expectations that US interest rates would eventually move lower. However, those pillars have recently weakened.
        The preliminary peace framework between the United States and Iran has reduced fears of a prolonged regional conflict. 
        At the same time, Federal Reserve officials signaled that inflation remains a concern, leading investors to scale back expectations for future rate cuts.
        The result has been a stronger US Dollar, higher Treasury yields, and increased selling pressure across non-yielding assets such as gold.
      </p>

      <Link
        href="/analysis/gold-analysis-2026-06-22"
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Read Full Analysis →
      </Link>

    </div>
  );
}