import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "ReddHR — HR Technology & Custom Software Solutions",
    template: "%s | ReddHR",
  },
  description:
    "Your trusted partner in human capital and custom software solutions. Custom CRM, HRMS, mobile apps, enterprise software, and strategic HR support from Mumbai, India.",
  keywords: [
    "HR Technology",
    "Custom Software Development",
    "CRM Development",
    "HRMS Development",
    "Mobile App Development",
    "Enterprise Software",
    "HR Consulting",
    "Mumbai",
    "India",
    "ReddHR",
  ],
  authors: [{ name: "ReddHR" }],
  openGraph: {
    title: "ReddHR — HR Technology & Custom Software Solutions",
    description:
      "Your trusted partner in human capital and custom software solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "ReddHR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReddHR — HR Technology & Custom Software Solutions",
    description:
      "Your trusted partner in human capital and custom software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
