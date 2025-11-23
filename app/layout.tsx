import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breakaway - Break Free from Gambling | Daily Recovery Support",
  description: "You're not alone. Breakaway is your daily companion to break free from gambling addiction. Track urges, learn proven psychology, and rebuild your life - one day at a time.",
  keywords: ["gambling addiction", "gambling recovery", "betting addiction help", "quit gambling", "gambling support", "betting recovery app"],
  openGraph: {
    title: "Breakaway - You're Not Alone in This",
    description: "A daily companion for people ready to break free from gambling. Built by people who've been exactly where you are.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
