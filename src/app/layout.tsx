import type { Metadata } from "next";
import { VT323, Courier_Prime, Fira_Code } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-retro-terminal",
  subsets: ["latin"],
  weight: "400",
});

const courierPrime = Courier_Prime({
  variable: "--font-nostalgic-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-code-nostalgic",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zübeyr Almaho - zybo | Tetris Portfolio",
  description: "Zübeyr Almaho (zybo) - Creative Tetris-animated portfolio showcasing innovative web development projects with React, Next.js, and modern technologies. Experience the nostalgia of classic gaming meets cutting-edge development.",
  icons: {
    icon: "/assets/zybo.png",
    shortcut: "/assets/zybo.png",
    apple: "/assets/zybo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${courierPrime.variable} ${firaCode.variable} antialiased font-nostalgic`}
      >
        {children}
      </body>
    </html>
  );
}
