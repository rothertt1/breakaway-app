'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const mockData = [
  { day: 'Mon', urges: 8 },
  { day: 'Tue', urges: 6 },
  { day: 'Wed', urges: 7 },
  { day: 'Thu', urges: 4 },
  { day: 'Fri', urges: 3 },
  { day: 'Sat', urges: 2 },
  { day: 'Sun', urges: 1 },
]

export default function TrackerMockup() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
          <p className="text-xs text-slate-400 mb-1">Urges Resisted</p>
          <p className="text-2xl font-bold text-green-400">23</p>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
          <p className="text-xs text-slate-400 mb-1">Days Clean</p>
          <p className="text-2xl font-bold text-orange-400">12</p>
        </div>
      </div>

      {/* Chart */}
      <div>
        <p className="text-sm font-semibold text-slate-200 mb-3">Weekly Pattern</p>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <XAxis
                dataKey="day"
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="urges" radius={[8, 8, 0, 0]}>
                {mockData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.urges > 5 ? '#f97316' : entry.urges > 2 ? '#fb923c' : '#10b981'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center">
          Urges declining 📉 Your brain is rewiring
        </p>
      </div>

      {/* Insight */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
        <p className="text-sm text-green-400 font-medium">
          ✓ 7-day average: 4.4 urges/day
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Down from 12.3 in Week 1. Keep going.
        </p>
      </div>
    </div>
  )
}
