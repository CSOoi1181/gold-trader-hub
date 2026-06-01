export default function EconomicCalendar() {

  const events = [
    {
      time: "13:30",
      event: "US CPI",
      impact: "High"
    },
    {
      time: "15:00",
      event: "Fed Speech",
      impact: "High"
    },
    {
      time: "21:00",
      event: "FOMC Minutes",
      impact: "Medium"
    }
  ];

  return (
    <div className="bg-zinc-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Economic Calendar
      </h2>

      <div className="space-y-3">

        {events.map((item, index) => (

          <div
            key={index}
            className="flex justify-between border-b border-zinc-800 pb-2"
          >
            <span>{item.time}</span>

            <span>{item.event}</span>

            <span className="text-red-400">
              {item.impact}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}