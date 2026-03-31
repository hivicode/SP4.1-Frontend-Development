import "./globals.css";

export const metadata = {
  title: "E-Commerce Next.js",
  description: "E-Commerce dengan Next.js dan MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
