import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/providers/theme-provider";
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
  title: "Nguyen Quoc Dai | Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer with 4+ years experience in Next.js, React, NestJS, and data visualization. Specialized in building scalable web applications and FinTech solutions. Based in Ho Chi Minh City, Vietnam.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "NestJS", "TypeScript", "Data Visualization", "Vietnam Software Engineer", "Frontend Developer", "Backend Developer"],
  authors: [{ name: "Nguyen Quoc Dai" }],
  openGraph: {
    title: "Nguyen Quoc Dai | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer with 4+ years experience specializing in Next.js, React, and NestJS",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
