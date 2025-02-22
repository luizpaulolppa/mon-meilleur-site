import type { Metadata } from "next";
import { Poppins, Corben } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  variable: "--poppins-font",
});

const corben = Corben({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--corben-font",
});

export const metadata: Metadata = {
  title: "Julie ARDUIN",
  description: "Julie ARDUIN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${corben.variable}`}>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
