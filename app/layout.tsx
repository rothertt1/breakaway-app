import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breakaway - Take Control of Your Gambling",
  description: "Daily lessons, urge tracking, and peer support to help you quit betting - one day at a time.",
  keywords: ["gambling addiction", "quit gambling", "betting recovery", "gambling support", "addiction help"],
  openGraph: {
    title: "Breakaway - Take Control of Your Gambling",
    description: "Daily lessons, urge tracking, and peer support to help you quit betting - one day at a time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breakaway - Take Control of Your Gambling",
    description: "Daily lessons, urge tracking, and peer support to help you quit betting - one day at a time.",
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
