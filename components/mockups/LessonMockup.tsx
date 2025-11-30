export default function LessonMockup() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <span className="text-orange-500 font-semibold">1</span>
          </div>
          <div>
            <p className="text-xs text-slate-400">DAY 1</p>
            <h3 className="text-sm font-semibold text-slate-100">Why Your Brain Can't Stop Betting</h3>
          </div>
        </div>
        <div className="text-xs text-slate-400">5 min</div>
      </div>

      {/* Content Preview */}
      <div className="space-y-3">
        <div className="h-2 bg-slate-700/50 rounded-full w-full" />
        <div className="h-2 bg-slate-700/50 rounded-full w-5/6" />
        <div className="h-2 bg-slate-700/50 rounded-full w-4/6" />

        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 space-y-2">
          <p className="text-sm text-slate-300 leading-relaxed">
            Your brain is working against you. The moment you think about betting,
            dopamine floods your system—before you even win.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            That's why "just one bet" never works. You're not weak.
            You're fighting neuroscience.
          </p>
        </div>

        <div className="h-2 bg-slate-700/50 rounded-full w-full" />
        <div className="h-2 bg-slate-700/50 rounded-full w-3/4" />
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
          <div className="h-full w-1/4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
        </div>
        <span className="text-xs text-slate-400">25%</span>
      </div>
    </div>
  )
}
