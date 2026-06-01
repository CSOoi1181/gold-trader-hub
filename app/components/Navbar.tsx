export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-yellow-400">
            Gold Trader Hub
          </h1>

          <p className="text-xs text-zinc-400">
            Professional XAUUSD Dashboard
          </p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-300">
          <button className="hover:text-yellow-400">
            Dashboard
          </button>

          <button className="hover:text-yellow-400">
            News
          </button>

          <button className="hover:text-yellow-400">
            Calculators
          </button>
        </div>

      </div>
    </nav>
  );
}