import "./globals.css";
import StarryBackground from "../components/StarryBackground";

export const metadata = {
  title: "Kurumi Wakatsuki",
  description: "Portfolio & Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="relative font-hannari">
        <StarryBackground />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
