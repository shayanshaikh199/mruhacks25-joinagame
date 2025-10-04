// /src/App.jsx
import { useState } from "react";

export default function App() {
  // selected sport state for preview; in your app set this via front page map
  const [sport, setSport] = useState("pickleball");
  const display = sport.charAt(0).toUpperCase() + sport.slice(1);

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-6 bg-gradient-to-br from-slate-900 to-blue-800 p-8 text-white">
      {/* tiny toolbar to switch sports in preview */}
      <div className="mt-4 flex gap-2">
        {["pickleball", "table tennis", "handball"].map((s) => (
          <button
            key={s}
            onClick={() => setSport(s)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              sport === s
                ? "bg-white text-slate-900 border-white"
                : "bg-white/10 text-white border-white/30 hover:bg-white/20"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* host or join card */}
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-8 shadow-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">{display}</h1>
        <p className="text-slate-200 text-sm mb-8">
          what would you like to do for {display} today?
        </p>

        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={() => alert(`host a ${sport} game`)}
            className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-lg font-semibold shadow-lg transition-transform active:scale-95"
          >
            🏐 host a game
          </button>
          <button
            onClick={() => alert(`join a ${sport} game`)}
            className="w-full py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-lg font-semibold shadow-lg transition-transform active:scale-95"
          >
            🎾 join a game
          </button>
        </div>

        <p className="mt-8 text-xs text-slate-300 text-center">
          connecting players in your city 💪
        </p>
      </div>
    </div>
  );
}
