"use client";

import { useState } from "react";

export default function RiskRewardCalculator() {

  const [entry, setEntry] = useState("");
  const [sl, setSl] = useState("");
  const [tp, setTp] = useState("");

  const calculate = () => {

    const risk =
      Math.abs(Number(entry) - Number(sl));

    const reward =
      Math.abs(Number(tp) - Number(entry));

    if (risk === 0) {
      return "0";
    }

    return (reward / risk).toFixed(2);
  };

  return (
    <div className="bg-zinc-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Risk / Reward Calculator
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="number"
          placeholder="Entry"
          value={entry}
          onChange={(e) =>
            setEntry(e.target.value)
          }
          className="bg-zinc-800 p-3 rounded"
        />

        <input
          type="number"
          placeholder="Stop Loss"
          value={sl}
          onChange={(e) =>
            setSl(e.target.value)
          }
          className="bg-zinc-800 p-3 rounded"
        />

        <input
          type="number"
          placeholder="Take Profit"
          value={tp}
          onChange={(e) =>
            setTp(e.target.value)
          }
          className="bg-zinc-800 p-3 rounded"
        />

      </div>

      <div className="mt-5">

        <p className="text-zinc-400">
          Risk Reward Ratio
        </p>

        <h3 className="text-4xl font-bold text-yellow-400">
          1 : {calculate()}
        </h3>

      </div>

    </div>
  );
}