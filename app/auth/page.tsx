import AuthForm from '@/components/auth/AuthForm';
import Link from 'next/link';

export const metadata = {
  title: 'Sign Up | Breakaway - Start Your Recovery',
  description: 'Create your free Breakaway account and start your journey to freedom from gambling.',
};

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="px-6 md:px-12 py-6">
        <Link href="/" className="text-2xl font-bold text-orange hover:opacity-90 transition-opacity">
          Breakaway
        </Link>
      </nav>

      {/* Auth Form Container */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <AuthForm />
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-center">
        <p className="text-foreground-muted text-sm">
          Need help? Contact us at{' '}
          <a href="mailto:support@breakaway.com" className="text-orange hover:underline">
            support@breakaway.com
          </a>
        </p>
      </footer>
    </div>
  );
}
