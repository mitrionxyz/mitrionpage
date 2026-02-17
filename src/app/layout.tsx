import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-institution",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitrion.xyz"),
  title: "MITRION",
  description: "The substrate of intelligent capital",
  openGraph: {
    title: "MITRION",
    description: "The substrate of intelligent capital",
    siteName: "MITRION",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MITRION",
    description: "The substrate of intelligent capital",
    creator: "@Mitrionxyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
