'use client'

import { useOnboarding } from '@/lib/stores/onboardingStore'

export default function DashboardPage() {
  const { gamblingTypes, frequency, goal, userProfile, threeYearLoss } = useOnboarding()

  return (
    <div className="min-h-screen bg-slate-900 px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to Breakaway! 🎉
        </h1>

        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">
            Your Profile
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong>Profile Type:</strong> {userProfile}</p>
            <p><strong>Gambling Types:</strong> {gamblingTypes.join(', ')}</p>
            <p><strong>Frequency:</strong> {frequency}</p>
            <p><strong>Goal:</strong> {goal}</p>
            <p><strong>3-Year Projection (if unchanged):</strong> ${threeYearLoss.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">
            🚧 Dashboard Coming Soon
          </h3>
          <p className="text-gray-300">
            This is a placeholder dashboard. The full dashboard with lessons, tracking,
            and community features will be implemented next.
          </p>
        </div>
      </div>
    </div>
  )
}
