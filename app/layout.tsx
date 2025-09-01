import type { Metadata } from "next";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Bad_Script, Geist, Geist_Mono, Neonderthaw } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neon = Neonderthaw({
  variable: "--font-neonderthaw-regular",
  subsets: ["latin"],
  weight: "400",
});

const script = Bad_Script({
  variable: "--bad-script-regular",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Project portfolio and intro for Jack Epner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Conditionally render the GA component in production only */}
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
