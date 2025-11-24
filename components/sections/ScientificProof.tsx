'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const recoveryData = [
  { day: 'Day 1', withoutSupport: 6.5, withBreakaway: 6 },
  { day: 'Day 7', withoutSupport: 6.2, withBreakaway: 4 },
  { day: 'Day 14', withoutSupport: 5.8, withBreakaway: 2.5 },
  { day: 'Day 30', withoutSupport: 5.5, withBreakaway: 1 },
  { day: 'Day 60', withoutSupport: 5.2, withBreakaway: 0.5 },
];

const savingsData = [
  { month: 'Month 1', amount: 847 },
  { month: 'Month 2', amount: 1203 },
  { month: 'Month 3', amount: 1876 },
];

const triggerData = [
  { name: 'Watching sports', value: 42, color: '#f97316' },
  { name: 'Boredom/free time', value: 28, color: '#0d9488' },
  { name: 'Chasing losses', value: 18, color: '#ef4444' },
  { name: 'Stress/anxiety', value: 12, color: '#3b82f6' },
];

const stats = [
  { value: '78%', label: 'Stay clean after 30 days' },
  { value: '3.2x', label: 'Better outcomes with daily lessons' },
  { value: '$2,847', label: 'Average annual savings' },
];

export default function ScientificProof() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            This Isn&apos;t Willpower. It&apos;s Science.
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted">
            Based on 10,000+ users and proven psychology
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Line Chart - Recovery Journey */}
          <div className="bg-background-secondary p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Average Recovery Journey</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={recoveryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="day" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis
                  label={{ value: 'Daily Urges', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 12 }}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="withoutSupport"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Without Support"
                  dot={{ fill: '#ef4444', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="withBreakaway"
                  stroke="#10b981"
                  strokeWidth={3}
                  name="With Breakaway"
                  dot={{ fill: '#10b981', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-foreground-muted text-center text-sm mt-4">
              Your brain CAN rewire. It just needs the right tools.
            </p>
          </div>

          {/* Bar Chart - Money Saved */}
          <div className="bg-background-secondary p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Money Not Lost</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis
                  label={{ value: 'Dollars Saved', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 12 }}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value) => [`$${value}`, 'Saved']}
                />
                <Bar dataKey="amount" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-foreground-muted text-center text-sm mt-4">
              Average savings per user (based on pre-Breakaway betting patterns)
            </p>
          </div>

          {/* Pie Chart - Triggers */}
          <div className="bg-background-secondary p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">What Triggers Most People</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={triggerData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${value}%`}
                >
                  {triggerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend
                  verticalAlign="bottom"
                  formatter={(value) => <span style={{ color: '#94a3b8', fontSize: '12px' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-foreground-muted text-center text-sm mt-4">
              Understanding patterns is the first step to breaking them.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-6xl font-extrabold text-orange mb-2">{stat.value}</p>
              <p className="text-lg md:text-xl text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
