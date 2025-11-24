'use client';

export default function Footer() {
  return (
    <footer className="bg-background-dark py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-bold text-orange mb-4">Breakaway</h3>
            <p className="text-foreground-muted mb-6">
              Helping people break free from gambling.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-foreground-muted hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-foreground-muted hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-foreground transition-colors">Crisis Resources</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground-muted">
            &copy; 2024 Breakaway. Built with empathy by people who&apos;ve been there.
          </p>
        </div>
      </div>
    </footer>
  );
}
