import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XYRON",
  description:
    "We build modern websites, custom software, and digital solutions for businesses.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[#0d0e12] text-white selection:bg-amber-300 selection:text-black antialiased overflow-x-hidden">
        {/* Background 3D Ambient Light Orbs and Mesh */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* Subtle 3D Grid Pattern */}
          <div className="bg-grid-mesh absolute inset-0 opacity-40" />

          {/* Primary Amber 3D Light Orb - Top Left */}
          <div className="animate-float-slow animate-pulse-glow absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent blur-[140px]" />

          {/* Secondary 3D Light Orb - Center Right */}
          <div className="animate-float-reverse animate-pulse-glow absolute top-1/3 -right-48 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-amber-300/15 via-amber-600/10 to-transparent blur-[150px]" />

          {/* Tertiary 3D Light Orb - Bottom Left */}
          <div className="animate-float-slow absolute bottom-24 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-400/12 via-amber-500/05 to-transparent blur-[160px]" />

          {/* Center Subtle Light Ray */}
          <div className="animate-light-ray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-amber-400/[0.04] blur-[180px]" />
        </div>

        {/* Website Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}