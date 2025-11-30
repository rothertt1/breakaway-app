import { MessageCircle } from 'lucide-react'

export default function CrisisCoachMockup() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-100">Crisis Coach</h3>
          <p className="text-xs text-green-400">● Online 24/7</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
            <p className="text-sm text-slate-200">
              I'm about to bet $500 on tonight's game. I can feel it coming.
            </p>
            <p className="text-xs text-slate-400 mt-1">2:47 AM</p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex justify-start">
          <div className="bg-slate-900/70 border border-slate-700/50 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
            <p className="text-sm text-slate-200 leading-relaxed">
              I hear you. That urge is real and it's strong right now.
              Let's slow this down together.
            </p>
            <p className="text-sm text-slate-200 leading-relaxed mt-2">
              Can you take 5 deep breaths with me? I'll wait.
            </p>
            <p className="text-xs text-slate-400 mt-2">Just now</p>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-slate-900/50 border border-slate-700/30 rounded-2xl px-4 py-3">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button className="text-xs bg-slate-900/50 border border-slate-700/30 rounded-lg py-2 px-3 text-slate-300 hover:bg-slate-900/70 transition-colors">
          5-Min Delay
        </button>
        <button className="text-xs bg-slate-900/50 border border-slate-700/30 rounded-lg py-2 px-3 text-slate-300 hover:bg-slate-900/70 transition-colors">
          Call SOS Buddy
        </button>
      </div>
    </div>
  )
}
