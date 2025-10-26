import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Kurumi Wakatsuki",
  description: "Kurumi Wakatsuki | Profile Site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="starry-bg">
        {children}
      </body>
    </html>
  );
}
