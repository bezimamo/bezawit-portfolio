import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bezawit | Software Engineer Portfolio",
  description: "A professional portfolio showcasing the skills, education, and projects of Bezawit, a dedicated Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <footer className="py-12 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800">
          <div className="container mx-auto px-6 text-center">
            <p className="text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Bezawit. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
