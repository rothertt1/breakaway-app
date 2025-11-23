export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-primary">Breakaway</h1>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-8 py-24 text-center">
        <h2 className="text-5xl font-bold tracking-tight text-white mb-6">
          Take Control of Your Betting
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          Track your bets. Build accountability. Break free.
        </p>
        <button className="bg-orange px-8 py-4 rounded-lg text-lg font-semibold text-white hover:opacity-90 transition-opacity">
          Start Free
        </button>
      </main>
    </div>
  );
}
