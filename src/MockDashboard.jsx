export function MockDashboard() {
  // Fake MAF trend data — pace improving at same HR
  const data = [
    { week: 'W1', pace: 13.4 },
    { week: 'W2', pace: 13.25 },
    { week: 'W3', pace: 13.1 },
    { week: 'W4', pace: 12.9 },
    { week: 'W5', pace: 12.75 },
    { week: 'W6', pace: 12.55 },
    { week: 'W7', pace: 12.4 },
    { week: 'W8', pace: 12.2 },
    { week: 'W9', pace: 12.05 },
    { week: 'W10', pace: 11.85 },
  ];

  const maxPace = 13.6;
  const minPace = 11.6;
  const range = maxPace - minPace;
  const chartH = 120;
  const chartW = 280;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * chartW;
    const y = ((d.pace - minPace) / range) * chartH;
    return `${x},${y}`;
  });
  const linePath = points.join(' ');

  return (
    <div className="glass-card rounded-2xl p-6 max-w-md w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">MAF Pace Trend</div>
          <div className="text-2xl font-bold text-white">11:51 <span className="text-green-400 text-sm font-medium">↓ 1:29</span></div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Avg HR</div>
          <div className="text-lg font-semibold text-orange-400">128 bpm</div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative mb-4">
        <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FC4C02" />
              <stop offset="100%" stopColor="#7B61FF" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7B61FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,${chartH} ${linePath} ${chartW},${chartH}`}
            fill="url(#areaGrad)"
          />
          <polyline
            points={linePath}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between text-[10px] text-gray-600 mt-1">
          {data.filter((_, i) => i % 3 === 0).map(d => (
            <span key={d.week}>{d.week}</span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <div className="text-[10px] text-gray-500 uppercase">Streak</div>
          <div className="text-lg font-bold text-orange-400">7w</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <div className="text-[10px] text-gray-500 uppercase">Level</div>
          <div className="text-lg font-bold text-purple-400">12</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <div className="text-[10px] text-gray-500 uppercase">XP</div>
          <div className="text-lg font-bold text-blue-400">2,450</div>
        </div>
      </div>
    </div>
  );
}
