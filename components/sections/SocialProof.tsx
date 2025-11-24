'use client';

const testimonials = [
  {
    avatar: "M",
    avatarBg: "#3b82f6",
    name: "Marcus T.",
    badge: "67 days clean",
    quote: "I lost $23,000 before I found Breakaway. I'm 67 days clean now. My wife is talking to me again. I wake up without that pit in my stomach. If you're reading this, you can do it too."
  },
  {
    avatar: "J",
    avatarBg: "#ec4899",
    name: "Jennifer R.",
    badge: "4 months clean",
    quote: "I thought I was the only woman with this problem. Breakaway showed me I wasn't alone. The daily lessons helped me understand my triggers. I haven't bet on a single game this season."
  },
  {
    avatar: "D",
    avatarBg: "#10b981",
    name: "David K.",
    badge: "91 days clean",
    quote: "Started with fantasy football. Ended up betting my rent money on Tuesday night baseball. Breakaway gave me the structure I needed. I've saved $4,800 in 3 months just by NOT gambling."
  }
];

export default function SocialProof() {
  return (
    <section className="section-padding bg-background-dark">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            You&apos;re Not the First. You Won&apos;t Be the Last.
          </h2>
          <p className="text-xl md:text-2xl text-foreground-muted">
            Real stories from people who took the same first step you&apos;re considering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover bg-background-secondary p-8 md:p-10 rounded-2xl shadow-xl"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: testimonial.avatarBg }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{testimonial.name}</p>
                  <span className="inline-block px-3 py-1 text-sm bg-green/20 text-green rounded-full">
                    {testimonial.badge}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-foreground-muted italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
