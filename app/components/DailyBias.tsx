export default function DailyBias() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Today's Gold Bias
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-zinc-400">Market Bias</p>
          <h3 className="text-3xl font-bold text-green-400">
            Bullish
          </h3>
        </div>

        <div>
          <p className="text-zinc-400">
            Trade Plan
          </p>

          <ul className="space-y-2 mt-2">
            <li>Support: 3340</li>
            <li>Resistance: 3385</li>
            <li>Target: 3400</li>
            <li>Invalidation: 3330</li>
          </ul>
        </div>

      </div>

    </div>
  );
}