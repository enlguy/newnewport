import type { Metadata } from "next";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Bad_Script, Geist, Geist_Mono, Neonderthaw } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  title: "My Offerings and Me",
  description: "Personal site for Jack Epner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = 'G-X0SZWST34Y'
  return (
    <html lang="en">
      <head>
      <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
