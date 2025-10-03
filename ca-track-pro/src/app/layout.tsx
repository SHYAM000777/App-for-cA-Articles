import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CA Track Pro - Professional Articleship Management",
  description:
    "Professional CA Articleship management platform for tracking work, skills, and team assignments",
  icons: {
    icon: "/ca-icon.svg",
  },
  themeColor: "#0ea5e9",
  openGraph: {
    title: "CA Articleship Management System",
    description:
      "Professional CA Articleship management platform for tracking work, skills, and team assignments",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
