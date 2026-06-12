import Image from "next/image";
import ArticleNavigation from "@/app/components/ArticleNavigation";
import RelatedArticles from "@/app/components/RelatedArticles";

export const metadata = {
  title:
    "Relative Strength Index (RSI) Indicator Guide | How to Use RSI in MT4 & MT5",
  description:
    "Complete beginner-to-advanced guide to the Relative Strength Index (RSI) indicator. Learn RSI formula, settings, overbought and oversold zones, divergence, failure swings, MT4 & MT5 setup, scalping and swing trading strategies.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Relative Strength Index (RSI) Indicator Guide | How to Use RSI in MT4 & MT5",
  description:
    "Learn how to use RSI indicator in MT4 and MT5 with complete explanations, strategies and examples.",
  image: "https://gold-trader-hub.vercel.app/og-image.jpg",
  author: {
    "@type": "Organization",
    name: "Gold Trader Hub",
  },
  publisher: {
    "@type": "Organization",
    name: "Gold Trader Hub",
    logo: {
      "@type": "ImageObject",
      url: "https://gold-trader-hub.vercel.app/logo.png",
    },
  },
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
};

export default function RSIPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Relative Strength Index (RSI) Indicator Guide
        </h1>

        <p className="text-zinc-400 mb-8">
          Published on 10 June 2026
        </p>

        <div className="space-y-8 text-zinc-300 leading-8">
<section>
  <h2 className="text-2xl font-semibold text-white mb-3">
    What is Relative Strength Index (RSI)?
  </h2>

  <p>
    The Relative Strength Index (RSI) is one of the most popular momentum
    indicators developed by J. Welles Wilder.
  </p>

  <p className="mt-4">
    RSI measures the speed and magnitude of recent price movements and
    oscillates between 0 and 100.
  </p>

  <p className="mt-4">
    Traders commonly use RSI to identify:
  </p>

  <ul className="list-disc ml-6 mt-4 space-y-2">
    <li>Overbought conditions.</li>
    <li>Oversold conditions.</li>
    <li>Trend momentum.</li>
    <li>Potential reversals.</li>
    <li>Divergence signals.</li>
    <li>Continuation opportunities.</li>
  </ul>

  <p className="mt-4">
    RSI is available by default in MetaTrader 4 (MT4) and MetaTrader 5
    (MT5), making it one of the most widely used indicators among forex,
    gold, stock and cryptocurrency traders.
  </p>
</section>
<section>

<h2 className="text-2xl font-semibold text-white mb-3">
The Mathematics Behind RSI
</h2>

<p>
RSI is calculated using the following formula:
</p>

<div className="bg-zinc-900 border border-yellow-500 p-6 rounded-xl mt-6 text-center">

<p className="text-2xl text-yellow-400">
RSI = 100 − [100 / (1 + RS)]
</p>

</div>

<p className="mt-6">
Where:
</p>

<ul className="list-disc ml-6 mt-4 space-y-2">

<li>
RS = Average Gain ÷ Average Loss
</li>

<li>
Standard calculation period = 14 candles
</li>

</ul>

<p className="mt-4">
Because of the formula, RSI can never exceed 100 or fall below 0.
</p>

</section>
<section>

<h2 className="text-2xl font-semibold text-white mb-3">
How to Interpret RSI
</h2>

<div className="overflow-x-auto">

<table className="w-full border border-zinc-700">

<thead className="bg-zinc-900">

<tr>

<th className="p-4 border border-zinc-700">
RSI Value
</th>

<th className="p-4 border border-zinc-700">
Meaning
</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-4 border border-zinc-700">
Above 70
</td>

<td className="p-4 border border-zinc-700">
Overbought
</td>

</tr>

<tr>

<td className="p-4 border border-zinc-700">
Below 30
</td>

<td className="p-4 border border-zinc-700">
Oversold
</td>

</tr>

<tr>

<td className="p-4 border border-zinc-700">
50
</td>

<td className="p-4 border border-zinc-700">
Neutral
</td>

</tr>

</tbody>

</table>

</div>

<p className="mt-6">
Overbought does not necessarily mean price must fall immediately.
Likewise, oversold does not guarantee an immediate rally.
</p>

</section>
<section>

<h2 className="text-2xl font-semibold text-white mb-3">
How to Add RSI in MT5
</h2>

<ol className="list-decimal ml-6 space-y-3">

<li>
Press Ctrl + N to open Navigator.
</li>

<li>
Indicators → Oscillators → Relative Strength Index.
</li>

<li>
Double click RSI.
</li>

<li>
Set Period = 14.
</li>

<li>
Apply to Close.
</li>

<li>
Add Levels:
30
50
70
</li>

<li>
Click OK.
</li>

</ol>

</section>
{/* ========================================= */}
{/* PART 6 - TRADING STRATEGIES */}
{/* ========================================= */}

<section className="mt-16">
  <h2 className="text-3xl font-bold text-yellow-400 mb-8">
    RSI Trading Strategies
  </h2>

  <div className="space-y-12">

    {/* Range Market */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-white mb-4">
        1. Range Market Strategy
      </h3>

      <p className="text-zinc-300 leading-8">
        RSI performs best when the market is moving sideways.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-3 text-zinc-300">
        <li>Buy when RSI falls below 30 and crosses back upward.</li>
        <li>Sell when RSI rises above 70 and crosses back downward.</li>
        <li>Combine with support and resistance.</li>
      </ul>
    </div>


    {/* Trend Trading */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-white mb-4">
        2. Trend Trading Strategy
      </h3>

      <p className="text-zinc-300 leading-8">
        During strong trends, RSI should not be used as an overbought/oversold indicator.
      </p>

      <div className="mt-4">

        <h4 className="text-green-400 text-xl font-semibold mb-2">
          Bull Market
        </h4>

        <ul className="list-disc ml-6 space-y-2 text-zinc-300">
          <li>RSI usually stays between 40 and 90.</li>
          <li>40 becomes support.</li>
          <li>Buy pullbacks near 40-50.</li>
        </ul>

        <h4 className="text-red-400 text-xl font-semibold mt-6 mb-2">
          Bear Market
        </h4>

        <ul className="list-disc ml-6 space-y-2 text-zinc-300">
          <li>RSI normally ranges between 10 and 60.</li>
          <li>60 becomes resistance.</li>
          <li>Sell rallies near 50-60.</li>
        </ul>

      </div>
    </div>


    {/* Scalping */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-4">
        3. M5 Scalping Strategy
      </h3>

      <p className="text-zinc-300 leading-8">
        For 5-minute charts, traders often reduce RSI Period from 14 to 9.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-3 text-zinc-300">
        <li>Trade during London and New York sessions.</li>
        <li>Buy after RSI climbs back above 30.</li>
        <li>Take profit near RSI 70.</li>
        <li>Use tight stop-loss.</li>
      </ul>

    </div>


    {/* Swing Trading */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-4">
        4. Daily Swing Trading Strategy
      </h3>

      <p className="text-zinc-300 leading-8">
        Daily charts filter out noise and provide higher probability signals.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-3 text-zinc-300">
        <li>Keep RSI period at 14.</li>
        <li>Add level 50.</li>
        <li>Buy when RSI rebounds from 40-50 during an uptrend.</li>
        <li>Exit when RSI exceeds 70 and bearish candles appear.</li>
      </ul>

    </div>


    {/* Divergence */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-4">
        5. Divergence Strategy
      </h3>

      <p className="text-zinc-300 leading-8">
        Divergence is considered one of the strongest RSI signals.
      </p>

      <div className="mt-5">

        <h4 className="text-green-400 text-xl font-semibold">
          Bullish Divergence
        </h4>

        <ul className="list-disc ml-6 mt-2 space-y-2 text-zinc-300">
          <li>Price makes Lower Low.</li>
          <li>RSI makes Higher Low.</li>
          <li>Indicates weakening sellers.</li>
        </ul>

        <h4 className="text-red-400 text-xl font-semibold mt-6">
          Bearish Divergence
        </h4>

        <ul className="list-disc ml-6 mt-2 space-y-2 text-zinc-300">
          <li>Price makes Higher High.</li>
          <li>RSI makes Lower High.</li>
          <li>Indicates weakening buyers.</li>
        </ul>

      </div>

    </div>


    {/* Hidden Divergence */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-4">
        6. Hidden Divergence
      </h3>

      <p className="text-zinc-300 leading-8">
        Hidden divergence signals trend continuation.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-3 text-zinc-300">
        <li>Hidden Bullish = Higher Low + Lower RSI Low.</li>
        <li>Hidden Bearish = Lower High + Higher RSI High.</li>
        <li>Useful during strong trends.</li>
      </ul>

    </div>


    {/* Failure Swing */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-4">
        7. Failure Swing Strategy
      </h3>

      <p className="text-zinc-300 leading-8">
        Failure Swing is an internal momentum reversal signal.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-3 text-zinc-300">
        <li>RSI drops below 30.</li>
        <li>Bounces above 30.</li>
        <li>Pulls back without breaking previous low.</li>
        <li>Breaks previous RSI peak.</li>
        <li>Creates strong buy signal.</li>
      </ul>

    </div>


    {/* Multi Timeframe */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-4">
        8. Multi-Timeframe Analysis
      </h3>

      <p className="text-zinc-300 leading-8">
        Professional traders always check higher timeframes first.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-3 text-zinc-300">
        <li>H4 determines trend.</li>
        <li>M15 finds entries.</li>
        <li>M5 fine-tunes execution.</li>
      </ul>

    </div>


    {/* Pros and Cons */}
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">

      <h3 className="text-2xl font-bold text-white mb-6">
        RSI Pros and Cons
      </h3>

      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h4 className="text-green-400 text-xl font-bold mb-4">
            Advantages
          </h4>

          <ul className="list-disc ml-6 space-y-3 text-zinc-300">
            <li>Simple and beginner-friendly.</li>
            <li>Excellent momentum indicator.</li>
            <li>Strong divergence signals.</li>
            <li>Works across all markets.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-red-400 text-xl font-bold mb-4">
            Disadvantages
          </h4>

          <ul className="list-disc ml-6 space-y-3 text-zinc-300">
            <li>Can stay overbought for long periods.</li>
            <li>Produces false signals.</li>
            <li>Should not be used alone.</li>
            <li>Needs support and resistance confirmation.</li>
          </ul>
        </div>

      </div>

    </div>

  </div>
</section>
{/* ========================================= */}
{/* PART 7 - VISUAL EXAMPLES */}
{/* ========================================= */}

<section className="mt-20">

<h2 className="text-3xl font-bold text-yellow-400 mb-8">
RSI Visual Examples
</h2>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-zinc-900 rounded-xl border border-zinc-700 p-6">
<h3 className="text-xl font-bold text-green-400 mb-4">
Overbought Zone
</h3>

<p className="text-zinc-300 leading-8">
RSI above 70 indicates the market may be overbought. Price corrections may occur.
</p>
</div>


<div className="bg-zinc-900 rounded-xl border border-zinc-700 p-6">
<h3 className="text-xl font-bold text-red-400 mb-4">
Oversold Zone
</h3>

<p className="text-zinc-300 leading-8">
RSI below 30 indicates the market may be oversold and buyers may return.
</p>
</div>


<div className="bg-zinc-900 rounded-xl border border-zinc-700 p-6">
<h3 className="text-xl font-bold text-green-400 mb-4">
Bullish Divergence
</h3>

<p className="text-zinc-300 leading-8">
Price makes Lower Low while RSI forms Higher Low.
Potential bullish reversal.
</p>
</div>


<div className="bg-zinc-900 rounded-xl border border-zinc-700 p-6">
<h3 className="text-xl font-bold text-red-400 mb-4">
Bearish Divergence
</h3>

<p className="text-zinc-300 leading-8">
Price makes Higher High while RSI forms Lower High.
Potential bearish reversal.
</p>
</div>


<div className="bg-zinc-900 rounded-xl border border-zinc-700 p-6">
<h3 className="text-xl font-bold text-yellow-400 mb-4">
Hidden Divergence
</h3>

<p className="text-zinc-300 leading-8">
Hidden divergence signals continuation of the current trend.
</p>
</div>


<div className="bg-zinc-900 rounded-xl border border-zinc-700 p-6">
<h3 className="text-xl font-bold text-yellow-400 mb-4">
Failure Swing
</h3>

<p className="text-zinc-300 leading-8">
Failure Swing confirms momentum reversal even before price reacts.
</p>
</div>

</div>

</section>
<ArticleNavigation
previous={{
title: "Indicators",
href: "/indicators",
}}
/>

<RelatedArticles />

        </div>
      </div>
    </main>
  );
}