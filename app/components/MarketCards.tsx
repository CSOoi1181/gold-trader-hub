type Props = {
  goldPrice: string;
};

export default function MarketCards({
  goldPrice,
}: Props) {

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-8">

      <div className="bg-zinc-900 rounded-2xl p-6">
        <p className="text-zinc-400 text-sm">
          Gold Price
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mt-2">
          ${goldPrice}
        </h2>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6">
        <p className="text-zinc-400 text-sm">
          Trend Score
        </p>

        <h2 className="text-3xl font-bold text-green-400 mt-2">
          Bullish
        </h2>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6">
        <p className="text-zinc-400 text-sm">
          Support
        </p>

        <h2 className="text-3xl font-bold mt-2">
          3340
        </h2>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6">
        <p className="text-zinc-400 text-sm">
          Resistance
        </p>

        <h2 className="text-3xl font-bold mt-2">
          3385
        </h2>
      </div>

    </div>
  );
}