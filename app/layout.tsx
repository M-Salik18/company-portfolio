
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xyron",
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
      <body>{children}</body>
    </html>
  );
}