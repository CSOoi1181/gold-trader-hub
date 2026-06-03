import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold text-yellow-400 cursor-pointer">
              Gold Trader Hub
            </h1>
          </Link>

          <p className="text-xs text-zinc-400">
            Professional XAUUSD Dashboard
          </p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-300">

          <Link
            href="/"
            className="hover:text-yellow-400"
          >
            Dashboard
          </Link>

          <Link
            href="/analysis"
            className="hover:text-yellow-400"
          >
            Daily Analysis
          </Link>

          <Link
            href="/news"
            className="hover:text-yellow-400"
          >
            News
          </Link>

          <Link
            href="/calculator"
            className="hover:text-yellow-400"
          >
            Calculator
          </Link>

        </div>

      </div>
    </nav>
  );
}