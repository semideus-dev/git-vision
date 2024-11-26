import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const appFont = localFont({
  src: "./fonts/AppFont.ttf",
  variable: "--font-app",
});

export const metadata: Metadata = {
  title: "Git Vision",
  description: "AI powered GitHub code review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(appFont.className)}>{children}</body>
    </html>
  );
}
