import "./globals.css";
import { Hina_Mincho } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumi Wakatsuki"
};

const hinaMincho = Hina_Mincho({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${hinaMincho.className} min-h-screen bg-gradient-to-b from-[#0a1b3d] to-[#020617] text-gray-100 relative overflow-hidden`}
      >
        {/* 星空レイヤー */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="star"></div>
            ))}
        </div>

        {/* メインコンテンツ */}
        <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
