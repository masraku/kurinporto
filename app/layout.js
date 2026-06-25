import "./globals.css";
import { Fredoka, Quicksand } from "next/font/google";

const headingFont = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Rin 🐧 Tomoshibi Idol",
  description:
    "Welcome to Rin's page! Member of Tomoshibi Idol ✦ wherever you are, may your days be filled with joy, happiness, and love 🩵✨",
  keywords: ["rin", "tomoshibi idol", "hey.riiin", "kururiiin", "idol", "profile"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rin 🐧 Tomoshibi Idol",
    description: "Welcome to Rin's page! Member of Tomoshibi Idol ✦ wings of phoenix shall reach high 🐦‍🔥🏮",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
