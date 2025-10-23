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
  title: "【公式】さくらさくみらい中途採用サイト",
  description: "【公式】さくらさくみらい中途採用サイトです。東京・千葉・埼玉・大阪89園の保育園の最新の募集状況をご確認いただけます。このHPからのエントリーで入社支度金10万円を進呈！1人ひとりのキャリアや悩みに採用担当が寄り添いサポートします。",
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
