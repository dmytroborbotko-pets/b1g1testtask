import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./store/providers";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={redHatDisplay.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
