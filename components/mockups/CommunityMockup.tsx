import { MessageSquare, ThumbsUp } from 'lucide-react'

const posts = [
  {
    user: 'MikeT',
    avatar: 'MT',
    days: 12,
    content: 'Day 12. Almost caved during SNF. Deleted DraftKings for the 4th time this month. Wife still doesn\'t know about the $3K from October. One day at a time.',
    replies: 8,
    likes: 23,
    badge: 'Sports Bettor'
  },
  {
    user: 'JasonR',
    avatar: 'JR',
    days: 47,
    content: '47 days clean. Watched the entire playoffs without betting once. Saved $1,200 this month alone. My kid asked why I\'m home more. Worth it.',
    replies: 12,
    likes: 47,
    badge: 'Former Daily Bettor'
  },
  {
    user: 'SarahM',
    avatar: 'SM',
    days: 5,
    content: 'Day 5 and struggling. How do you guys handle Sundays? All my friends are betting and I feel left out.',
    replies: 15,
    likes: 19,
    badge: 'New Member'
  }
]

export default function CommunityMockup() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-700/50">
        <h3 className="text-sm font-semibold text-slate-100">Recent Posts</h3>
        <span className="text-xs text-slate-400">1,847 members</span>
      </div>

      {/* Posts */}
      <div className="space-y-3">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-slate-900/50 border border-slate-700/30 rounded-xl p-4 space-y-3">
            {/* User info */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold text-orange-400">{post.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-slate-200">{post.user}</p>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400">{post.days}d clean</span>
                </div>
                <p className="text-xs text-slate-500">{post.badge}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {post.content}
            </p>

            {/* Engagement */}
            <div className="flex items-center gap-4 pt-2">
              <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-orange-400 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-orange-400 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span>{post.replies}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="pt-2">
        <button className="w-full bg-slate-900/50 border border-slate-700/30 rounded-lg py-3 text-sm text-slate-300 hover:bg-slate-900/70 transition-colors">
          Join the conversation
        </button>
      </div>
    </div>
  )
}
