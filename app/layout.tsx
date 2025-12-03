import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breakaway | Take Control of Your Betting",
  description: "Join thousands taking control of their relationship with gambling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
