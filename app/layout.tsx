import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Kurumi Wakatsuki",
  description: "プロフィールサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSans.className} bg-gradient-to-b from-white to-blue-50`}>
        {children}
      </body>
    </html>
  );
}
