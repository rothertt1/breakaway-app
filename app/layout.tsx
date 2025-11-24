import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breakaway - Break Free From Gambling | Your Daily Recovery Companion",
  description: "Breakaway helps you break free from gambling addiction with daily lessons, pattern tracking, and 24/7 support. Join 10,000+ people in recovery. Start free today.",
  keywords: ["gambling addiction", "recovery", "betting help", "gambling support", "quit gambling", "gambling recovery app"],
  openGraph: {
    title: "Breakaway - Break Free From Gambling",
    description: "You're not alone in this. Breakaway is a daily companion for people ready to break free from gambling.",
    type: "website",
    locale: "en_US",
    siteName: "Breakaway",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breakaway - Break Free From Gambling",
    description: "You're not alone in this. Breakaway is a daily companion for people ready to break free from gambling.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
