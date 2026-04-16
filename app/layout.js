import "./globals.css";

export const metadata = {
  title: "Kururiiin ♡ Rin's Page",
  description:
    "Welcome to Rin's kawaii profile page! Find all my social links, short profile, and connect with me 🍓",
  keywords: ["kururiiin", "profile", "kawaii", "social links", "linktree"],
  openGraph: {
    title: "Kururiiin ♡ Rin's Page",
    description: "Welcome to Rin's kawaii profile page! 🍓",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Fredoka:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍓</text></svg>"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
