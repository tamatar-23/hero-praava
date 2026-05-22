import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Praava Hero",
  description: "A single platform to manage every part of your legal work. Track matters, coordinate schedules, manage clients, centralize documents, and handle communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#f3f5fa] dark:bg-[#090a0f] text-slate-900 dark:text-slate-100 transition-colors duration-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
