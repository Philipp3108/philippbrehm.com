import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Philipp Brehm",
  metadataBase: new URL("https://philippbrehm.com/"),

  openGraph: {
    title: "Philipp Brehm",
    description: "Portfolio",
    url: "https://philippbrehm.com/",
    siteName: "Philipp Brehm",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Philipp Brehm",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Philipp Brehm",
    description: "Portfolio",
    images: ["/favicon.ico"],
    creator: "@philippbrehm_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
          <GoogleAnalytics gaId="G-37F1PP6C4Z" />
    </html>
  );
}
