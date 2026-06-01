export default function GoldChart() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-5">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-semibold">
          Live Gold Chart
        </h2>

        <span className="text-green-400 text-sm">
          LIVE
        </span>

      </div>

      <div className="aspect-video rounded-xl overflow-hidden">

        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=OANDA:XAUUSD&interval=15&theme=dark"
          width="100%"
          height="100%"
        />

      </div>

    </div>
  );
}