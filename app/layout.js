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
  title: "Kururiiin ♡ Rin's Page",
  description:
    "Welcome to Rin's kawaii profile page! Find all my social links, short profile, and connect with me 🍓",
  keywords: ["kururiiin", "profile", "kawaii", "social links", "linktree"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍓</text></svg>",
  },
  openGraph: {
    title: "Kururiiin ♡ Rin's Page",
    description: "Welcome to Rin's kawaii profile page! 🍓",
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
