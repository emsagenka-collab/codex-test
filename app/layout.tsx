import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Kelime · Zwei Wörter. Jeden Tag.",
  description:
    "Türkische Wörter entdecken, im Kontext verstehen und langfristig behalten. Deine ruhige Lernbibliothek.",
  applicationName: "Kelime",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
