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
        {/* 星空の粒子背景 */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(white_1px,transparent_1px)] opacity-15 animate-[twinkle_100s_linear_infinite]" />
        </div>

        {/* メインコンテンツ */}
        <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
